<template>
  <div v-if="items.item" :class="appendClass" class="timeline">
    <component :is="'style'">
      @import "{{ cssLink }}";
    </component>
    
    <v-container class="course-page course-page-lecture !tw-pb-12">
      <div class="main-course-wrap__content">
        <div class="course-timeline-card tw-py-0">
          <div class="tw-flex">
            <div class="tw-w-full">
              <lecture
                :key="items.item.id"
                :last-lecture="!items.next"
                :item="items.item"
                :next="items.next"
                :previous="items.previous"
                :module-id="moduleId"
                :module-index="moduleIndex"
                :lecture-index="lectureIndex"
                :only-one-lecture="onlyOneLecture"
                :learning-path-id="learningPathId"
                :learning-path-name="learningPathName"
              />

              <!-- Navigation -->
              <nav class="nav tw-flex tw-justify-between tw-gap-2 sm:tw-flex-col !tw-border-t tw-border-solid !tw-border-[var(--border-gray)] !tw-pt-8">
                <next-previous-button
                  v-if="items.previous"
                  direction="previous"
                  :lecture="items.previous"
                  :point-to="previousLectureUrl"
                />
                <v-spacer />
                
                <v-tooltip v-if="items.next && items.next.disabled" location="bottom">
                  <template v-slot:activator="{ props }">
                    <div v-bind="props">
                      <next-previous-button
                        direction="next"
                        :point-to="nextLectureUrl"
                        :lecture="items.next"
                        :disabled="true"
                      />
                    </div>
                  </template>
                  <span>
                    {{ items.next?.disabledExplanation ? t(items.next.disabledExplanation) : '' }}
                  </span>
                </v-tooltip>
                
                <next-previous-button
                  v-else-if="items.next"
                  direction="next"
                  :lecture="items.next"
                  :point-to="nextLectureUrl"
                />
              </nav>

              <!-- Forum (commented for now) -->
              <!-- <div v-show="!forumDisabled && forumDisqus" class="course-forum-card tw-mt-10">
                <ClientOnly>
                  <vue-disqus
                    :shortname="disqusShortname"
                    :language="locale"
                    :identifier="String(lectureId)"
                    :url="currentUrl"
                  />
                </ClientOnly>
              </div> -->
            </div>
          </div>
        </div>
      </div>
      <!-- <scroll-to-top-button /> -->
    </v-container>
  </div>
</template>

<script setup>
import { computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { find, flatMap, findIndex } from 'lodash'
import { useCourseStore } from '~/stores/course'
import { useAuthStore } from '~/stores/auth'
import { useProfileStore } from '~/stores/profile'
import { fixHtml } from '~/utils/utils'
import Lecture from '~/components/course_in_progress/Lecture'
import NextPreviousButton from '~/components/course_in_progress/NextPreviousButton'

const { urls } = useUrls()

// Composables
const route = useRoute()
const router = useRouter()
const { t, locale } = useI18n()
const courseStore = useCourseStore()
const authStore = useAuthStore()
const profileStore = useProfileStore()

// Computed - URL params
const courseId = computed(() => Number(route.params.id))
const lectureId = computed(() => route.query.lecture ? Number(route.query.lecture) : null)
const moduleId = computed(() => route.query.module ? Number(route.query.module) : null)
const userCourseId = computed(() => {
  const { userCourseId } = route.query
  return userCourseId ? Number(userCourseId) : courseStore.userCourse?.userCourseId || null
})
const completed = computed(() => route.query.completed === 'true')
const learningPathId = computed(() => {
  const { learningPathId } = route.query
  return learningPathId ? Number(learningPathId) : null
})
const learningPathName = computed(() => route.query.learningPathName || null)

// Computed - Course data
const userCourse = computed(() => courseStore.userCourse || {})
const profile = computed(() => profileStore.profile)

const appendClass = computed(() => {
  let classToAppend = ''
  if (userCourse.value.metadata?.class) {
    classToAppend += userCourse.value.metadata.class + ' '
  }
  return classToAppend
})

const cssLink = computed(() => {
  // Add your CSS link logic here
  return ''
})

const courseName = computed(() => userCourse.value.name || '')
const onlyOneLecture = computed(() => userCourse.value.lectureSize === 1)

// Computed - Lecture items
const items = computed(() => courseStore.getCourseItems?.[lectureId.value] || { item: {}, previous: null, next: null })

const module = computed(() => 
  find(userCourse.value.modules, { moduleId: parseInt(moduleId.value) })
)

const moduleIndex = computed(() => {
  if (!userCourse.value.modules) return 0
  return findIndex(userCourse.value.modules, { moduleId: parseInt(moduleId.value) })
})

const lectureIndex = computed(() => {
  if (!module.value?.lectures) return 0
  return findIndex(module.value.lectures, { lectureId: parseInt(lectureId.value) })
})

const lecture = computed(() => 
  find(flatMap(userCourse.value.modules, m => m.lectures), { lectureId: parseInt(lectureId.value) })
)

const lectureUrl = computed(() => lecture.value?.url || '')
const currentUrl = computed(() => process.client ? window.location.href : '')

// Navigation URLs
const fullLectureUrl = (url) => {
  if (!url) return ''
  const query = { lecture: lectureId.value }
  if (learningPathId.value) query.learningPathId = learningPathId.value
  if (learningPathName.value) query.learningPathName = learningPathName.value
  return { path: url, query }
}

const previousLectureUrl = computed(() => {
  if (items.value.previous?.url) {
    return fullLectureUrl(items.value.previous.url)
  }
  return ''
})

const nextLectureUrl = computed(() => {
  if (items.value.next?.url) {
    return fullLectureUrl(items.value.next.url)
  }
  return ''
})

// Forum settings (mocked for now)
const forumDisabled = computed(() => !userCourse.value.forumEnabled)
const disqusShortname = computed(() => 'your-disqus-shortname')

// Watchers
watch(lectureId, () => {
  if (process.client) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
})

// Lifecycle
onMounted(async () => {
  if (!lectureId.value) {
    router.push({
      name: 'dashboard-course-id',
      params: { id: courseId.value }
    })
    return
  }

  // Load course if not loaded
  if (courseId.value !== userCourse.value.id || !userCourse.value.modules?.length) {
    try {
      const course = await courseStore.fetchUserCourse({
        courseId: courseId.value,
        id: userCourseId.value,
        completed: completed.value
      })

      if (!authStore.isAuthenticated && !course.anonymousAllowed) {
        router.push('/courses')
      } else if (!course.id) {
        router.push('/courses')
      }
    } catch (err) {
      console.error('Failed to load course:', err)
      router.push('/courses')
    }
  }
})

// Head
useHead(() => {
  const title = profile.value?.meta?.['/']?.title || profile.value?.title
  const courseTitle = fixHtml(courseName.value)
  return {
    title,
    titleTemplate: userCourse.value?.seo?.title || `${courseTitle} | %s`
  }
})
</script>