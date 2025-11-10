<template>
  <div v-if="currentCourse?.id" class="w-course-progress-drawer">
    <div v-if="insideLecture" class="tw-pb-4">
      <nuxt-link
        class="tw-text-base tw-font-medium hover:!tw-text-[var(--v-theme-primary)] hover:tw-underline"
        :class="{
          '!tw-text-white': isDark,
          '!tw-text-gray-900': !isDark
        }"
        :to="urls.userCourseUrl"
        v-html="currentCourse?.name"
      />
    </div>

    <div v-else class="tw-pb-4 tw-text-base tw-font-medium" v-html="currentCourse?.name" />

    <div class="primary--text tw-text-xs tw-font-medium tw-leading-5">
      {{ progressText }}
    </div>

    <div class="tw-py-2">
      <v-progress-linear
        aria-label="progress-linear"
        class="tw-rounded-sm tw-overflow-hidden"
        color="primary"
        :model-value="progress"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useTheme } from 'vuetify'

import { progressCourse, ratioQuestions, ratioLectures } from '~/utils/courseDoneUtils'

/* Props */
const props = defineProps({
  currentCourse: { type: Object, default: () => ({}) },
  insideLecture: { type: Boolean, default: false }
})

/* Theme */
const theme = useTheme()
const isDark = computed(() => theme.global.current.value.dark)

/* i18n */
const { t } = useI18n()

/* Mock URLs (пока без стора) */
const { urls  } = useUrls()

/* Computed values */
const progress = computed(() => progressCourse(props.currentCourse))
const progressQuestions = computed(() => ratioQuestions(props.currentCourse))
const progressLectures = computed(() => ratioLectures(props.currentCourse))
const lecturesSeen = computed(() => props.currentCourse?.lecturesSeen)

const progressText = computed(() => {
  const {
    certifiable,
    totalPoints,
    correctPoints,
    minScoreRate,
    lectureSize,
    minLectureCompletionRate
  } = props.currentCourse || {}

  if (!totalPoints && !lectureSize) return ''

  if (certifiable) {
    if (totalPoints && minScoreRate && !minLectureCompletionRate) {
      return t('progress.questionsProgress', {
        progress: progressQuestions.value,
        correct: correctPoints,
        total: totalPoints
      })
    }

    if (lectureSize && minLectureCompletionRate && !minScoreRate) {
      return t('progress.lecturesProgress', {
        progress: progressLectures.value,
        correct: lecturesSeen.value,
        total: lectureSize
      })
    }

    if (totalPoints && minScoreRate && lectureSize && minLectureCompletionRate) {
      return t('progress.overallProgress', {
        progressQuestions: progressQuestions.value,
        correctQuestions: correctPoints,
        totalQuestions: totalPoints,
        progressLectures: progressLectures.value,
        correctLectures: lecturesSeen.value,
        totalLectures: lectureSize
      })
    }
  }

  return totalPoints
    ? t('progress.overallProgress', {
        progressQuestions: progressQuestions.value,
        correctQuestions: correctPoints,
        totalQuestions: totalPoints,
        progressLectures: progressLectures.value,
        correctLectures: lecturesSeen.value,
        totalLectures: lectureSize
      })
    : t('progress.lecturesProgress', {
        progress: progressLectures.value,
        correct: lecturesSeen.value,
        total: lectureSize
      })
})
</script>
