<template>
  <div class="tw-mt-2.5 tw-text-sm tw-flex tw-items-center tw-gap-1.5">
    <v-icon
      class="module-item__lecture-icon tw-w-4 tw-h-4 !tw-text-lg"
      :color="'primary'"
    >
      mdi-eye-outline
    </v-icon>
    <span
      v-if="isLive"
      class="module-item__lecture-questions grey--text text--darken-2"
    >
      {{ t('admin.attendance.attending') }} {{ attending }}
    </span>
    <span v-if="isLive">
      &nbsp;|&nbsp;
    </span>
    <span
      v-if="isLive"
      class="module-item__lecture-questions grey--text text--darken-2"
    >
      {{ t('admin.attendance.notAttending') }} {{ notAttending }}
    </span>
    <span v-if="isLive">
      &nbsp;|&nbsp;
    </span>
    <span class="module-item__lecture-questions grey--text text--darken-2">
      {{ isLive ? t('admin.attendance.attendedLive') : t('admin.attendance.seenBy') }} {{ attended }}
    </span>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

// Props
const props = defineProps({
  attendance: {
    type: Object,
    default: () => ({})
  },
  isLive: {
    type: Boolean,
    default: false
  }
})

// Composables
const { t } = useI18n()

// Computed
const attending = computed(() => props.attendance.attending || 0)
const notAttending = computed(() => props.attendance.notAttending || 0)
const attended = computed(() => props.attendance.attended || 0)
</script>