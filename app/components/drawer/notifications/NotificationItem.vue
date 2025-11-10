<template>
  <div>
    <v-list-item-title
      class="tw-uppercase tw-relative tw-pt-3 tw-pl-2 tw-font-semibold !tw-mb-2"
      :class="[`text-${titleColor}`]"
    >
      {{ t(`notifications.statuses.${title}`) }}
      <div v-if="!read" class="tw-absolute tw-top-1 -tw-left-1">
        <v-badge inline left offset-y="20" dot color="primary" />
      </div>
    </v-list-item-title>

    <v-list-item-subtitle class="wrap-text !tw-text-sm !tw-mb-2">
      {{ description }}
    </v-list-item-subtitle>
    <v-list-item-action class="ml-0 my-0 py-0 mb-2">
      <v-btn
        :disabled="read"
        variant="text"
        size="small"
        class="!tw-rounded-full !tw-text-sm"
        @click="onMarkAsRead"
      >
        <v-icon start size="small">mdi-check</v-icon>
        {{ t('notifications.actions.markAsRead') }}
      </v-btn>
    </v-list-item-action>

    <v-divider />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { USER_NOTIFICATIONS_MAPPING, NOTIFICATION_BADGES } from '~/enums/notifications'

// Props
const props = defineProps({
  notificationItemId: { type: Number, default: null },
  title: { type: String, default: '' },
  read: { type: Boolean, default: false },
  description: { type: String, default: '' },
  timePosted: { type: String, default: '' }
})

// Emits
const emit = defineEmits(['markAsRead'])

// i18n
const { t } = useI18n()

// const notificationsStore = useNotificationsStore()

// Computed
const titleColor = computed(() => {
  const mapKey = USER_NOTIFICATIONS_MAPPING[props.title]
  return NOTIFICATION_BADGES[mapKey]?.color || 'gray'
})

// Methods
async function onMarkAsRead() {
  console.log(`Mark notification ${props.notificationItemId} as read`)
  emit('markAsRead')
}
</script>

<style scoped>
.wrap-text {
  white-space: normal;
}
</style>
