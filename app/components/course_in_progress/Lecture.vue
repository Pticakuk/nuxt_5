<template>
  <div>
    <div class="lecture-content-wrap tw-pt-12">
      <div
        v-if="lecture.mediaSource || sectionsToDisplay.length || lecture.name"
        ref="courseContent"
        class="course-timeline-card tw-mx-auto course-content lecture-content tw-mb-5"
        :class="isDark ? 'theme--dark' : 'theme--light'"
      >
        <!-- Header Image -->
        <v-img
          v-if="isImageLecture"
          class="white--text align-end tw-mb-10"
          :src="lecture.mediaSource"
          max-height="450px"
        />

        <!-- Breadcrumbs -->
        <breadcrumbs :items="breadcrumbItems" class="!tw-mb-4" />

        <!-- Lecture Title -->
        <div class="lecture__header-title tw-flex tw-items-center tw-gap-4 !tw-flex-nowrap">
          <v-icon v-if="isLiveLecture" color="primary" class="pr-2">
            mdi-broadcast
          </v-icon>
          <h1
            class="!tw-text-[2.75rem] !tw-font-normal !tw-leading-[52px] tw-text-left tw-mb-5 md:!tw-text-3xl"
            v-html="lecture.name"
          />
        </div>

        <!-- Lecture Description -->
        <div
          v-if="lecture.description && lecture.description !== '<p></p>'"
          class="lecture__header-subtitle !tw-p-0 tw-text-base grey--text text--darken-2 tw-text-left tw-transition"
          v-html="lecture.description"
        />

        <!-- Video Player (mocked) -->
        <div v-if="videoSource && isVideo && !isLiveLecture" class="tw-text-center tw-justify-center tw-mb-5">
          <div class="tw-bg-gray-200 tw-h-96 tw-flex tw-items-center tw-justify-center tw-rounded">
            <v-icon size="64">mdi-play-circle-outline</v-icon>
            <span class="tw-ml-4">Video Player: {{ videoSource }}</span>
          </div>
        </div>

        <!-- Sections Content -->
        <v-card-text v-if="sectionsToDisplay.length" ref="sections" class="px-0">
          <div
            v-for="(section, index) in sectionsToDisplay"
            :key="section.id + index"
            class="tw-mb-6 tw-p-4 tw-border tw-border-gray-200 tw-rounded"
          >
            <div class="tw-text-sm tw-text-gray-500 tw-mb-2">
              Section {{ index + 1 }} - Type: {{ section['@type'] }}
            </div>
            <div v-if="section.text" v-html="section.text" />
            <div v-else-if="section.html" v-html="section.html" />
            <div v-else-if="section.json" class="tw-text-gray-600">
              JSON Section ({{ Object.keys(JSON.parse(section.json)).length }} properties)
            </div>
            <div v-if="section.questionAnswers?.length" class="tw-mt-2 tw-text-sm tw-text-primary">
              {{ section.questionAnswers.length }} question(s) attached
            </div>
          </div>
        </v-card-text>

        <!-- Progress Bar -->
        <v-card-text v-if="sections.length && navigationType === 'BUTTON'" class="my-0 py-0 px-0">
          <div class="lecture-progress">
            <v-progress-linear
              color="primary"
              height="4"
              :model-value="(sectionsToDisplay.length / sections.length) * 100"
            />
          </div>
        </v-card-text>

        <v-divider v-else />

        <!-- Continue Button -->
        <v-card-actions v-if="isAuthenticated && !lastSection" ref="next" class="py-0">
          <div class="tw-w-full tw-text-center">
            <base-button
              :block="false"
              class="lecture-content__button !tw-my-5 !tw-px-6"
              :disabled="!nextSectionAllowed"
              outlined
              :button-text="t('lecture.continue')"
              @click="onClickNextButton"
            />
          </div>
        </v-card-actions>

        <!-- Finish Course Button (mocked) -->
        <v-card-actions v-if="showFinishCourseButton" class="!tw-px-4 tw-mb-5">
          <div class="tw-w-full tw-text-center">
            <v-btn color="primary" size="large">
              {{ t('buttons.finishCourse') }}
            </v-btn>
          </div>
        </v-card-actions>
      </div>

      <!-- Quiz Section -->
      <div
        v-if="quiz && quiz.length !== 0"
        class="course-quiz-card tw-px-4 tw-pb-6 tw-rounded-md tw-mb-10 !tw-border tw-border-solid !tw-border-[var(--border-gray)] tw-shadow-sm"
      >
        <div
          class="course-quiz-header tw-flex tw-items-start tw-gap-5 tw-mb-5 -tw-mx-4 tw-px-4 tw-py-6"
          :style="backgroundMain"
        >
          <h2 class="!tw-text-[2rem] !tw-normal-case">
            <div v-if="lecture.quizDescription" v-html="lecture.quizDescription" />
            <div v-else>{{ t('lecture.quiz') }}</div>
          </h2>
          <div class="course-quiz__questions tw-flex tw-items-center tw-ml-auto tw-mt-1">
            <v-icon size="1.5rem" color="primary" class="tw-mr-2">
              mdi-checkbox-marked-outline
            </v-icon>
            <span class="tw-text-base">{{ totalQuizPoints }} questions</span>
          </div>
        </div>

        <!-- Quiz Questions (mocked) -->
        <v-card-text class="course-quiz-content !tw-p-0 !tw-border-0">
          <div
            v-for="(question, qIndex) in quiz"
            :key="question.id"
            class="tw-mb-4 tw-p-4 tw-border tw-border-gray-200 tw-rounded"
          >
            <div class="tw-font-medium tw-mb-2">Question {{ qIndex + 1 }}</div>
            <div v-html="question.question" />
            <div class="tw-mt-2 tw-text-sm tw-text-gray-500">
              Type: {{ question['@type'] }} | Weight: {{ question.weight }}
            </div>
          </div>
        </v-card-text>
      </div>

      <!-- Mark as Seen Button -->
      <v-card-actions v-if="isAuthenticated" class="!tw-pt-4 !tw-pb-8">
        <div
          v-if="isRead"
          class="tw-w-full tw-text-center tw-text-lg grey--text text--darken-1 tw-font-semibold"
        >
          {{ t('buttons.lectureSeen') }}
        </div>
        <div v-else-if="lectureCanBeSeen" class="tw-w-full tw-text-center">
          <base-button
            :block="false"
            :disabled="markAsSeenDisabled"
            class="lecture-content__button !tw-px-6"
            :button-text="isLiveLecture ? t('buttons.attendedLiveLecture') : t('buttons.markAsSeen')"
            @click="onMarkLectureAsSeen"
          />
        </div>
      </v-card-actions>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useTheme } from 'vuetify'
import { useI18n } from 'vue-i18n'
import { take, reduce } from 'lodash'
import { useCourseStore } from '~/stores/course'
import { useAuthStore } from '~/stores/auth'
import { isImage } from '~/utils/utils'
import { isVideoLink } from '~/utils/videoUtils'
import { useProfileStyle } from '~/composables/useProfileStyle'
import Breadcrumbs from '~/components/common/Breadcrumbs'
import BaseButton from '~/components/common/buttons/BaseButton.vue'

const TYPES = { BUTTON: 'BUTTON', SCROLL: 'SCROLL' }

// Props
const props = defineProps({
  item: { type: Object, default: () => ({}) },
  previous: { type: Object, default: () => ({}) },
  next: { type: Object, default: () => ({}) },
  moduleId: { type: Number, default: null },
  lastLecture: { type: Boolean, default: false },
  lectureIndex: { type: Number, default: 0 },
  moduleIndex: { type: Number, default: 0 },
  onlyOneLecture: { type: Boolean, default: false },
  learningPathId: { type: Number, default: null },
  learningPathName: { type: String, default: '' }
})

// Composables
const route = useRoute()
const theme = useTheme()
const { t } = useI18n()
const courseStore = useCourseStore()
const authStore = useAuthStore()
const { backgroundMain } = useProfileStyle()

// Data
const currentSectionIndex = ref(0)
const injectSections = ref([])
const readyToInjectSections = ref([])
const nextButtonClicked = ref(false)

// Computed
const isDark = computed(() => theme.global.current.value.dark)
const isAuthenticated = computed(() => authStore.isAuthenticated)
const userCourse = computed(() => courseStore.userCourse || {})
const breadcrumbItems = computed(() => [])

const lecture = computed(() => props.item)
const sections = computed(() => lecture.value.sections || [])
const quiz = computed(() => lecture.value.questionAnswers || [])

const navigationType = computed(() => lecture.value.navigationType || TYPES.BUTTON)
const isRead = computed(() => lecture.value.doneTime !== null && lecture.value.doneTime !== undefined)
const isLiveLecture = computed(() => lecture.value.live)

const videoSource = computed(() => lecture.value?.advancedConfig?.video?.url || lecture.value.mediaSource || '')
const isVideo = computed(() => isVideoLink(videoSource.value))
const isImageLecture = computed(() => {
  const url = lecture.value.mediaSource || ''
  return !isVideo.value && isImage(url)
})

const lastSection = computed(() => {
  if (navigationType.value === TYPES.SCROLL || sections.value.length === 0 || isRead.value) {
    return true
  }
  return readyToInjectSections.value.length === 0 && currentSectionIndex.value === sections.value.length - 1
})

const sectionsToDisplay = computed(() => {
  if (navigationType.value === TYPES.SCROLL || isRead.value) {
    return sections.value
  }
  let displaySections = take(sections.value, currentSectionIndex.value + 1)
  return displaySections.concat(injectSections.value)
})

const totalQuizPoints = computed(() => {
  return reduce(quiz.value, (sum, question) => sum + question.weight, 0)
})

const nextSectionAllowed = computed(() => !lastSection.value)
const lectureCanBeSeen = computed(() => !isRead.value)
const markAsSeenDisabled = computed(() => {
  return isRead.value || !isAuthenticated.value || 
    (sections.value.length > 0 && navigationType.value !== 'SCROLL' && !lastSection.value)
})

const showFinishCourseButton = computed(() => {
  return isAuthenticated.value && props.lastLecture && props.onlyOneLecture
})

// Methods
function onMarkLectureAsSeen() {
  console.log('Mark lecture as seen:', lecture.value.lectureId)
  // Call API to mark as seen
}

function onClickNextButton() {
  nextButtonClicked.value = true
  onNextSection()
}

function onNextSection() {
  if (readyToInjectSections.value.length > 0) {
    const clone = readyToInjectSections.value.slice(0)
    const injectClone = injectSections.value.slice(0)
    injectClone.push(clone.shift())
    injectSections.value = injectClone
    readyToInjectSections.value = clone
  } else {
    injectSections.value = []
    currentSectionIndex.value++
  }
}

// Lifecycle
onMounted(() => {
  currentSectionIndex.value = 0
})

watch(() => props.item.lectureId, () => {
  currentSectionIndex.value = 0
  nextButtonClicked.value = false
})
</script>