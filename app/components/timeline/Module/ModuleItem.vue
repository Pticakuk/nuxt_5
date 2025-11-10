<template>
  <v-list-item
    v-if="dense"
    :id="lecture.lectureId"
    :key="lecture.lectureId"
    :link="url !== undefined"
    :to="url"
    :disabled="moduleItemDisabled"
    class="w-lecture-modules-list__section !tw-flex before:tw-hidden !tw-p-0 !tw-px-2 !tw-rounded-xl !-tw-mx-2 
      !tw-max-w-[initial]"
    :class="{
      'w-lecture-modules-list__section--active': isActive,
      'lecture-modules-list__section--disabled': moduleItemDisabled
    }"
    :style="isActive ? backgroundMain : ''"
    @click="setActive"
  >
    <v-list-item-title class="tw-flex tw-items-center tw-flex-nowrap !tw-flex-grow tw-justify-between !tw-px-0 !tw-py-0 tw-gap-2">
      <div class="tw-flex tw-items-center tw-gap-2 tw-flex-1 tw-py-2 tw-flex-grow">
        <v-icon class="tw-shrink-0" size="16" color="grey lighten-1">
          {{ isForum ? 'mdi-forum-outline' : 'mdi-text' }}
        </v-icon>
        <div class="tw-w-full">
          <h3
            class="w-module-item__lecture-title !tw-text-sm text-wrap tw-w-full !tw-font-medium"
            :class="{
              '!tw-text-white': isDark,
              'grey--text text--darken-4': !isDark
            }"
          >
            {{ lectureDenseName }}
          </h3>
          <span
            v-if="(lecture.totalPoints > 0 || lecture.questionAnswersSize)"
            class="w-module-item__lecture-questions !tw-text-gray-400 !tw-text-xs tw-font-semibold"
            :class="lecture.totalPoints === lecture.correctPoints ? 'primary--text tw-font-semibold' : ''"
          >
          
            {{
              lecture.totalPoints
                ? t('lecture.pointsRight', {
                    right: lecture.correctPoints,
                    total: lecture.totalPoints
                  })
                : t('lecture.questionAnswersSize', { total: lecture.questionAnswersSize })
            }}
          </span>
        </div>
      </div>
      <span v-if="!isForum" class="tw-shrink-0 tw-ml-auto">
        <v-icon v-if="lecture?.locked" class="tw-shrink-0" size="16">
          mdi-lock-outline
        </v-icon>
        <v-icon v-else-if="lecture.done" class="tw-shrink-0" size="16" color="primary">
          mdi-check-circle
        </v-icon>
        <v-icon v-else-if="isActive" class="tw-shrink-0" size="16" :color="'primary'">
          mdi-circle-outline
        </v-icon>
        <v-icon v-else class="tw-shrink-0" size="16">
          mdi-circle-outline
        </v-icon>
      </span>
    </v-list-item-title>
  </v-list-item>

  <v-list-item
    v-else
    :id="lecture.lectureId"
    :key="lecture.lectureId"
    :link="lecture.url !== undefined"
    :to="url"
    :disabled="moduleItemDisabled"
    class="module-item__lecture tw-flex tw-justify-center tw-items-center !tw-p-0 !tw-py-4 before:tw-hidden after:tw-hidden tw-gap-4 sm:tw-gap-2 sm:tw-flex-col"
    :class="{ '!tw-cursor-default': moduleItemDisabled }"
  >
    <div class="!tw-p-0">
      <v-list-item-title class="tw-flex tw-items-center tw-flex-nowrap !tw-p-0 tw-gap-2">
        <v-icon class="tw-shrink-0" size="16" color="grey lighten-1">
          mdi-text
        </v-icon>
        <h3
          class="module-item__lecture-title !tw-text-[1.375rem] tw-flex tw-gap-1 grey--text text--darken-3 !tw-font-normal !tw-leading-7 !tw-whitespace-normal md:!tw-text-base md:!tw-font-medium
          tw-items-center !tw-pr-2"
        >
          <span v-html="lectureName" />
          <v-icon v-if="lectureStatusIcon" size="16" color="primary">
            {{ lectureStatusIcon }}
          </v-icon>
        </h3>
      </v-list-item-title>
      <v-card-text
        v-if="lecture.description"
        class="module-item__lecture-subtitle !tw-p-0 !tw-pl-6 tw-mt-2.5 tw-text-sm grey--text text--darken-2 tw-font-normal sm:!tw-mt-1 !tw-list-[initial]"
        v-html="lectureDescription"
      />
      <!-- <attending-live-lecture
        v-if="isLive"
        class="tw-pl-5 tw-py-1"
        :user-course-id="userCourseId"
        :lecture-id="lecture.lectureId"
        :is-attending="attending"
        :available-from-time="lecture.availableFromTime"
        :available-until-time="lecture.availableUntilTime"
        @changeAttended="(val) => (attending = val)"
      /> -->
      <div class="tw-pl-6 tw-flex tw-items-center tw-gap-4">
        <div
          v-if="(lecture.totalPoints > 0 || lecture.questionAnswersSize)"
          class="tw-mt-2.5 tw-text-sm tw-flex tw-items-center tw-gap-1.5"
        >
          <v-icon class="module-item__lecture-icon tw-w-4 tw-h-4 !tw-text-[1.125rem]" :color="'primary'">
            mdi-help-box-outline
          </v-icon>
          <span class="module-item__lecture-questions grey--text text--darken-2">
            {{
              lecture.totalPoints
                ? t('lecture.pointsRight', { right: lecture.correctPoints, total: lecture.totalPoints })
                : t('lecture.questionAnswersSize', { total: lecture.questionAnswersSize })
            }}
          </span>
        </div>
        <div v-if="lecture?.attendance">
          <attendance :attendance="lecture?.attendance" :is-live="isLive" />
        </div>
      </div>
      <div class="tw-absolute tw-left-6 tw-right-0 tw-bottom-0 tw-border-b tw-border-solid !tw-border-[var(--border-gray)]" />
    </div>
    <base-button
      v-if="url"
      :to="url"
      :block="false"
      :disabled="moduleItemDisabled"
      class="module-item__lecture-link !tw-ml-auto"
      :button-text="goToLectureText"
      outlined
    />
    <div class="tw-absolute tw-left-6 tw-right-0 tw-bottom-0 tw-border-b tw-border-solid !tw-border-[var(--border-gray)]" />
  </v-list-item>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useTheme } from 'vuetify'
import { useI18n } from 'vue-i18n'
import { fixHtml } from '~/utils/utils'
import { COURSE_TYPES } from '~/enums/types'
import BaseButton from '~/components/common/buttons/BaseButton.vue'
import Attendance from '~/components/common/Attendance'
import visibleComponents from '~/enums/visibleComponents'
import { useProfileStore } from '~/stores/profile'
import { useCourseStore } from '~/stores/course'
import { useProfileStyle } from '~/composables/useProfileStyle'

const { urls } = useUrls()

// Props
const props = defineProps({
  lecture: {
    type: Object,
    default: () => null
  },
  dense: {
    type: Boolean,
    default: false
  },
  activeLecture: {
    type: Object,
    default: () => null
  },
  lectureIndex: {
    type: Number,
    default: null
  },
  moduleIndex: {
    type: Number,
    default: null
  },
  learningPathId: {
    type: Number,
    default: null
  },
  learningPathName: {
    type: String,
    default: ''
  },
  userCourseId: {
    type: Number,
    default: null
  }
})

// Composables
const route = useRoute()
const theme = useTheme()
const { t, locale } = useI18n()
const profileStore = useProfileStore()
const courseStore = useCourseStore()
const { backgroundMain } = useProfileStyle()

// Data
const attending = ref(false)

// Computed
const lectureDenseName = computed(() => fixHtml(props.lecture.name))
const lectureName = computed(() => props.lecture.name)
const lectureDescription = computed(() => props.lecture.description)
const lectureUrl = computed(() => props.lecture.url)

const fullLectureUrl = (url) => {
  if (!url) return undefined
  
  let lectureUrl = url
  const index = lectureUrl.indexOf('#')
  
  if (props.learningPathId && index !== -1) {
    lectureUrl = lectureUrl.substring(0, index) + 
      `&learningPathId=${props.learningPathId}&learningPathName=${props.learningPathName}` + 
      lectureUrl.substring(index)
  }
  
  return `/courseware/${lectureUrl}`
}

const url = computed(() => {
  return isForum.value ? urls.value.forumUrl : fullLectureUrl(props.lecture.url)
})

const isForum = computed(() => route.fullPath.includes('forum'))
const isDone = computed(() => props.lecture.done)
const isDark = computed(() => theme.global.current.value.dark)
const isLive = computed(() => props.lecture.live)

const lectureStatusIcon = computed(() => {
  if (props.lecture?.locked) {
    return 'mdi-lock-outline'
  } else if (isDone.value) {
    return 'mdi-checkbox-marked-circle'
  } else if (isLive.value) {
    return 'mdi-broadcast'
  }
  return ''
})

const isActive = computed(() => {
  return (
    props.activeLecture &&
    String(props.lecture.lectureId) === route.query?.lecture &&
    !route.params?.uuid
  )
})


const moduleItemDisabled = computed(() => {
  return props.lecture?.locked
})

const showQuestionsPoints = computed(() => {
  return profileStore.showComponents[visibleComponents.QUESTIONS_POINTS_DRAWER]
})

const userCourse = computed(() => courseStore.userCourse)

const goToLectureText = computed(() => {
  const isCertificationCourse = userCourse.value?.customStructure?.['@type'] === COURSE_TYPES.CERTIFICATION
  return isCertificationCourse ? t('lecture.goToQuiz') : t('lecture.goToLecture')
})

// Methods
function setActive() {
  // setActiveLecture
  console.log('Set active lecture:', props.lecture)
}

// Lifecycle
onMounted(() => {
  attending.value = props.lecture.attending
})
</script>