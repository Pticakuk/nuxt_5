<template>
  <v-card
    flat
    color="transparent"
    class="course-timeline-card !tw-static tw-w-full"
  >
    <!-- Background image -->
    <div
      class="course-back-image tw-w-screen tw-h-[412px] tw-absolute tw-top-0 tw-left-1/2 -tw-translate-x-1/2 tw-z-0 md:tw-h-[350px] tw-transition-all tw-duration-300"
      :class="{ 'course-back-image--drawer-is-open 2xl:tw-ml-[160px] md:tw-ml-0': userDrawerOpen }"
    >
      <v-img
        :src="courseImage"
        width="100%"
        height="100%"
        position="center center"
        cover
        class="tw-z-10 tw-top-0 tw-bottom-0 tw-left-0 tw-right-0"
      >
        <div class="tw-absolute tw-z-20 tw-top-0 tw-bottom-0 tw-left-0 tw-right-0 tw-bg-black tw-opacity-50" />
      </v-img>
    </div>

    <!-- Course title and action button -->
    <div class="course-action-buttons tw-relative tw-z-10 tw-h-[412px] tw-flex tw-flex-col tw-justify-center tw-items-start md:tw-h-[350px]">
      <h1
        class="tw-mb-10 !tw-text-white !tw-text-[2.75rem] !tw-font-normal !tw-leading-[52px] tw-max-w-[750px] md:!tw-text-3xl md:!tw-mb-8"
        v-html="courseName"
      />
      <base-button
        v-if="url"
        :to="url"
        :block="false"
        class="!tw-px-6"
        :button-text="t('buttons.startCourse')"
        color=""
        :class="{
          '!tw-bg-[#f5f5f5]': !isDark,
          'btn-resume-course': courseIsStarted,
          'btn-start-course': !courseIsStarted
        }"
        large
        :stop="false"
        :data-course_id="courseId"
        :data-user_id="user?.id"
      />
    </div>

    <!-- Course content -->
    <div class="tw-pt-4">
      <!-- Breadcrumbs -->
      <div class="tw-py-4">
        <breadcrumbs :items="breadcrumbItems"/>
      </div>

      <!-- Tags -->
      <div v-if="tags.length" class="tw-mb-4">
        <course-tags :tags="tags" @tagSelected="onTagSelected" />
      </div>

      <!-- Course description -->
      <div class="course-timeline-card__preview">
        <div
          v-if="courseDescription"
          class="main-course__content course-timeline-card__preview-content"
        >
          <div
            class="grey--text text--darken-2 main-course__text tw-text-base"
            v-html="courseDescription"
          />
        </div>
      </div>

      <!-- Course tree -->
      <div class="course-timeline-card__course-tree overflow-hidden">
        <course-tree
          :modules="modules"
          :module-id="moduleId"
          :learning-path-id="learningPathId"
          :learning-path-name="learningPathName"
          :user-course-id="userCourseId"
        />
      </div>
    </div>
  </v-card>
</template>

<script setup>
import { computed } from 'vue'
import { useTheme } from 'vuetify'
import { useI18n } from 'vue-i18n'
import { useUiStore } from '~/stores/ui'
import { useCourseStore } from '~/stores/course'
import { useAuthStore } from '~/stores/auth'
import CourseTree from '~/components/timeline/CourseTree'
import CourseTags from '~/components/CourseTags'
import Breadcrumbs from '~/components/common/Breadcrumbs'
import BaseButton from '~/components/common/buttons/BaseButton.vue'

// Props
const props = defineProps({
  courseName: { type: String, default: '' },
  courseDescription: { type: String, default: '' },
  courseId: { type: Number, default: null },
  userCourseId: { type: Number, default: 0 },
  modules: { type: Array, default: () => [] },
  courseImage: { type: String, default: '' },
  externalResource: { type: Boolean, default: false },
  isScorm: { type: Boolean, default: false },
  externalUrl: { type: String, default: '' },
  scormUrl: { type: String, default: '' },
  isUmbrellaCourse: { type: Boolean, default: false },
  umbrellaStructure: { type: Object, default: () => ({}) },
  startDate: { type: Number, default: null },
  finishDate: { type: Number, default: null },
  expired: { type: Boolean, default: false },
  learningPathId: { type: Number, default: null },
  learningPathName: { type: String, default: '' },
  isPaid: { type: Boolean, default: false },
  courseStatus: { type: String, default: '' },
  stripePaymentInformation: { type: Object, default: () => ({}) },
  paymentInformation: { type: Object, default: () => ({}) },
  completed: { type: Boolean, default: false },
  courseIsStarted: { type: Boolean, default: false },
  tags: { type: Array, default: () => [] },
  pendingPreCourseSurvey: { type: Boolean, default: false },
  isCertifiable: { type: Boolean, default: true },
  url: { type: Object, default: () => ({}) },
  urlText: { type: String, default: '' },
  moduleId: { type: Number, default: null }
})

// Composables
const theme = useTheme()
const { t } = useI18n()
const uiStore = useUiStore()
const courseStore = useCourseStore()
const authStore = useAuthStore()

// Computed
const userDrawerOpen = computed(() => uiStore.userDrawerOpen)
const userCourse = computed(() => courseStore.userCourse || {})
const user = computed(() => authStore.user)
const isDark = computed(() => theme.global.current.value.dark)

// Mock breadcrumbs for now
const breadcrumbItems = computed(() => [
  { title: 'Dashboard', to: '/dashboard', disabled: false },
  { title: props.courseName, to: '', disabled: true }
])

// Methods
function onTagSelected(tag) {
  console.log('Tag selected:', tag)
}
</script>

<style lang="scss" scoped>
.course-content {
  border-radius: 6px;
  padding-bottom: 2rem;
}

.course-info {
  padding: 0 0 32px;
  box-sizing: border-box;

  p {
    font-size: 18px;
    font-weight: normal;
    line-height: 1.67;

    &:only-child {
      margin-bottom: 0;
    }
  }
}
</style>