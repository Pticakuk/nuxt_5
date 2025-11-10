<template>
  <ExpandableCard
    outlined
    flat
    class="full-width !tw-bg-transparent !tw-border-0"
  >
  
    <!-- Header -->
    <template #header>
      <div class="tw-p-4 tw-pr-1 tw-text-base tw-leading-6 tw-font-medium tw-tracking-[0.15px]">
        {{ $t('courseTree.sidebarTitle') }}
      </div>
    </template>

    <!-- Body -->
    <template #body>
      <v-card flat class="!tw-bg-transparent !tw-p-4 !tw-pt-2">
        <ul class="w-sidebar-list !tw-px-2 -tw-mb-2.5">
          <!-- Duration -->
          <li
            v-if="courseDuration"
            class="tw-pb-4 tw-flex tw-items-start tw-border-b tw-border-solid !tw-border-[var(--border-gray)]"
          >
            <v-icon size="1.25rem" color="primary" class="!tw-mr-2">mdi-clock-outline</v-icon>
            <div>
              <div class="!tw-text-xs tw-text-gray-500">{{ courseDuration.text }}</div>
              <div class="!tw-text-base tw-font-medium">{{ courseDuration.duration }}</div>
            </div>
          </li>

          <!-- Available from -->
          <li
            v-if="courseAvailableFrom"
            class="tw-py-4 tw-flex tw-items-start tw-border-b tw-border-solid !tw-border-[var(--border-gray)]"
          >
            <v-icon size="1.25rem" color="primary" class="!tw-mr-2">mdi-calendar-clock</v-icon>
            <div>
              <div class="!tw-text-xs tw-text-gray-500">{{ courseAvailableFrom.text }}</div>
              <div class="!tw-text-base tw-font-medium">
                {{ courseAvailableFrom.dateFrom }}
              </div>
            </div>
          </li>

          <!-- Available until -->
          <li
            v-if="courseAvailableUntil"
            class="tw-py-4 tw-flex tw-items-start tw-border-b tw-border-solid !tw-border-[var(--border-gray)]"
          >
            <v-icon size="1.25rem" color="primary" class="!tw-mr-2">mdi-flag</v-icon>
            <div>
              <div class="!tw-text-xs tw-text-gray-500">{{ courseAvailableUntil.text }}</div>
              <div class="!tw-text-base tw-font-medium">
                {{ courseAvailableUntil.dateUntil }}
              </div>
            </div>
          </li>

          <!-- Started on -->
          <li
            v-if="courseStartedOn"
            class="tw-py-4 tw-flex tw-items-start tw-border-b tw-border-solid !tw-border-[var(--border-gray)]"
          >
            <v-icon size="1.25rem" color="primary" class="!tw-mr-2">mdi-calendar-check</v-icon>
            <div>
              <div class="!tw-text-xs tw-text-gray-500">{{ courseStartedOn.text }}</div>
              <div class="!tw-text-base tw-font-medium">{{ courseStartedOn.startTime }}</div>
            </div>
          </li>

          <!-- Right answers -->
          <li
            v-if="rightAnswers"
            class="tw-py-4 tw-flex tw-items-start"
          >
            <v-icon size="1.25rem" color="primary" class="!tw-mr-2">mdi-checkbox-marked-circle-outline</v-icon>
            <div>
              <div class="!tw-text-xs tw-text-gray-500">{{ rightAnswers.text }}</div>
              <div class="!tw-text-base tw-font-medium">{{ rightAnswers.score }}</div>
            </div>
          </li>
        </ul>

        <slot />
      </v-card>
    </template>
  </ExpandableCard>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import moment from 'moment'
import { useProfileStore } from '~/stores/profile'
import ExpandableCard from '~/components/common/ExpandableCard.vue'
import { formattedDate } from '~/utils/timeUtils'
import { createHumanizedDuration, answersProgressText } from '~/utils/utils'

/* Props */
const props = defineProps({
  currentCourse: {
    type: Object,
    default: () => ({})
  }
})

const { t, locale } = useI18n()
const profileStore = useProfileStore()

/* Computed */
const courseDuration = computed(() => {
  const duration = props.currentCourse?.durationMinutes
  if (!duration || !isFinite(duration)) return null

  return {
    text: t('courseTree.practicalInfo.courseDuration'),
    duration: createHumanizedDuration(duration, 'm', locale.value)
  }
})

const courseAvailableFrom = computed(() => {
  const availableFrom = props.currentCourse?.availableFromTime
  if (!availableFrom) return null

  const text =
    moment(availableFrom).isBefore(moment())
      ? t('courseTree.practicalInfo.availableFromPast')
      : t('courseTree.practicalInfo.availableFrom')

  return {
    text,
    dateFrom: formattedDate(availableFrom, locale.value, false)
  }
})

const courseAvailableUntil = computed(() => {
  const availableUntil = props.currentCourse?.availableUntilTime
  if (!availableUntil) return null

  const text =
    moment(availableUntil).isBefore(moment())
      ? t('courseTree.practicalInfo.availableUntilPast')
      : t('courseTree.practicalInfo.availableUntil')

  return {
    text,
    dateUntil: formattedDate(availableUntil, locale.value, false)
  }
})

const courseStartedOn = computed(() => {
  const startTime = props.currentCourse?.startTime
  if (!startTime) return null

  return {
    text: t('courseTree.practicalInfo.startedCourse'),
    startTime: formattedDate(startTime, locale.value)
  }
})

const rightAnswers = computed(() => {
  const score = answersProgressText(
    props.currentCourse?.correctPoints,
    props.currentCourse?.totalPoints
  )
  if (!score) return null
  return {
    text: t('courseTree.practicalInfo.yourScore', { score }),
    score
  }
})

const courseAvailableAfterToday = computed(() => {
  const availableFrom = props.currentCourse?.availableFromTime
  return availableFrom ? moment(availableFrom).isAfter(moment()) : false
})

/* Methods */
function onAddToCalendar() {
  // TODO: later integrate AddToCalendar dialog
  console.log('Add to calendar clicked')
}
</script>
