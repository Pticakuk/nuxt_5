<template>
  <div class="tw-max-w-[18.75rem] tw-max-h-96 tw-overflow-auto tw-px-3">
    <!-- Заголовок -->
    <v-list-item>
      <v-list-item-title class="subtitle-1">
        <v-row justify="space-between" align="center">
          <v-col :cols="totalSize ? 6 : 12">
            <v-badge
              v-if="totalSize > 0"
              color="primary"
              :content="totalSize"
              right
              inline
            >
              {{ t('notifications.title') }}
            </v-badge>
            <span v-else>
              {{ t('notifications.title') }}
            </span>
          </v-col>
        </v-row>
      </v-list-item-title>
    </v-list-item>

    <!-- Нет уведомлений -->
    <v-list-item
      v-if="!loading && notifications.length === 0"
      class="px-2 !tw-text-sm tw-text-gray-500"
    >
      <v-list-item-title>
        {{ t('notifications.noNotificationsToShow') }}
      </v-list-item-title>
    </v-list-item>

    <!-- Список уведомлений -->
    <v-list v-else density="compact" class="!tw-py-0 !tw-bg-transparent">
      <NotificationItem
        v-for="(item, i) in notifications"
        :key="i"
        :notification-item-id="item.id"
        :title="item.type"
        :description="item.message"
        :read="item.read"
        @markAsRead="onMarkAsRead"
      />

      <!-- Лоадер -->
      <div v-if="loading" class="tw-py-2">
        <v-progress-linear
          aria-label="progress-linear"
          color="primary"
          indeterminate
          rounded
          height="6"
        />
      </div>

      <!-- Заглушка для infinite scroll -->
      <v-card
        v-else
        v-intersect="infiniteScrolling"
        class="!tw-bg-transparent !tw-border-0"
      />
    </v-list>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import NotificationItem from '~/components/drawer/notifications/NotificationItem.vue'

// i18n
const { t } = useI18n()

// props
defineProps({
  active: { type: Number, default: 0 },
  enabledItems: { type: Array, default: () => [] }
})

// reactive state
const notifications = ref([])
const totalSize = ref(0)
const page = ref(0)
const loading = ref(false)
const scrolling = ref(true)

// 🔹 Заглушка вместо реального API-запроса
async function fetchResourcePaginated() {
  loading.value = true
  scrolling.value = false

  // Имитация задержки и данных
  await new Promise((r) => setTimeout(r, 600))

  const mockData = Array.from({ length: 5 }).map((_, i) => ({
    id: page.value * 5 + i + 1,
    type: 'info',
    message: `Mock notification ${page.value * 5 + i + 1}`,
    read: Math.random() > 0.5
  }))

  // Добавляем новые уведомления
  if (page.value === 0) notifications.value = mockData
  else notifications.value.push(...mockData)

  totalSize.value = 42 // просто пример
  loading.value = false
  scrolling.value = true
}

// infinite scroll заглушка
function infiniteScrolling(entries) {
  if (entries[0].isIntersecting && scrolling.value && !loading.value) {
    page.value += 1
    fetchResourcePaginated()
  }
}

function onMarkAsRead() {
  // 🔸 пока просто рефетч
  fetchResourcePaginated()
}

// lifecycle
onMounted(() => {
  page.value = 0
  fetchResourcePaginated()
})
</script>

<style scoped>
.very-small-text {
  font-size: 9px;
}
</style>
