<template>
  <NuxtLink
    :to="pointTo"
    :disabled="disabled || isLocked"
    flat
    class="lecture-nav-button tw-w-80 tw-h-20 tw-p-2.5 tw-flex tw-justify-end tw-gap-3 tw-items-center tw-transition-all tw-duration-150 tw-relative !tw-rounded-md hover:!tw-bg-[rgba(0, 111, 184, 0.1)]"
    :class="{
      'tw-flex-row-reverse tw-justify-start': direction === 'previous',
      'sm:!tw-ml-auto': direction === 'next',
      '!tw-bg-zinc-50': disabled,
      '!tw-bg-[#1e1e1e]': isDark
    }"
    :style="buttonStyle"
  >
    <div>
      <span
        class="tw-shrink-0 tw-absolute tw-top-1.5 tw-left-1.5"
        :class="{ 'tw-left-auto tw-right-1.5': direction === 'previous' }"
      >
        <v-icon v-if="isLocked" size="small">
          mdi-lock-outline
        </v-icon>
        <v-icon v-else-if="isDone" size="small" color="success">
          mdi-check-circle
        </v-icon>
      </span>
      
      <div
        class="tw-text-xs tw-mb-1 grey--text text--darken-2"
        :class="{ 'tw-text-right': direction === 'next' }"
      >
        {{ direction === 'next' ? t('lecture.next') : t('lecture.previous') }}
      </div>
      
      <div
        class="tw-max-w-72 tw-text-sm tw-font-medium"
        :class="{ 'tw-text-right': direction === 'next' }"
      >
        {{ shortLectureName }}
      </div>
    </div>
    
    <v-icon class="tw-shrink-0">
      {{ direction === 'next' ? 'mdi-arrow-right' : 'mdi-arrow-left' }}
    </v-icon>
  </NuxtLink>
</template>

<script setup>
import { computed } from 'vue'
import { useTheme } from 'vuetify'
import { useI18n } from 'vue-i18n'
import { shortenText, fixHtml } from '~/utils/utils'
import { useProfileStyle } from '~/composables/useProfileStyle'

const MAX_LECTURE_TITLE_LENGTH = 64

// Props
const props = defineProps({
  direction: {
    type: String,
    default: 'next'
  },
  lecture: {
    type: Object,
    default: null
  },
  pointTo: {
    type: [String, Object],
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

// Composables
const theme = useTheme()
const { t } = useI18n()
const { getBackgroundBasedOnColor } = useProfileStyle()

// Computed
const isDark = computed(() => theme.global.current.value.dark)

const buttonStyle = computed(() => {
  return getBackgroundBasedOnColor ? getBackgroundBasedOnColor('primary') : {}
})

const longModuleLectureName = computed(() => {
  return `${fixHtml(props.lecture?.moduleName || '')} / ${fixHtml(props.lecture?.name || '')}`
})

const shortLectureName = computed(() => {
  return shortenText(fixHtml(props.lecture?.name || ''), MAX_LECTURE_TITLE_LENGTH)
})

const isDone = computed(() => props.lecture?.done)
const isLocked = computed(() => props.lecture?.locked)
</script>