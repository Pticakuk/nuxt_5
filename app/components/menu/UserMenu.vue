<template>
  <ExpandableCard
    :disabled-expand="!expandable"
    :expand-by-default="expandByDefault"
    flat
    klass="!tw-pb-0 !tw-max-w-80"
    @onToggle="$emit('onToggle', $event)"
  >
    <!-- HEADER -->
    <template #header>
      <div class="!tw-p-2 tw-border-b !tw-border-[var(--border-gray)] v-list-item !tw-pr-1 !tw-flex !tw-flex-grow" 
      :class="{ '!tw-pr-1': expandable }">
        <!-- Avatar -->
        <div class="!tw-mr-2 tw-cursor-pointer" @click="emitCardToggle">
          <CustomAvatar
            :img-src="user?.picture"
            :user-name="user?.name"
            :width="50"
            :frame-src="avatarFrame"
          />
        </div>

        <!-- User name + subtitle -->
        <div>
          <span
            class="tw-text-sm tw-font-medium tw-text-ellipsis tw-overflow-hidden tw-w-40 tw-whitespace-nowrap tw-cursor-pointer"
            @click="emitCardToggle"
          >
            {{ user?.name }}
          </span>

          <span class="tw-text-xs tw-text-gray-500 tw-flex tw-items-center tw-gap-1">
            {{ profileSubtitle }}
            <v-icon
              v-if="isCourseEditor"
              size="small"
              :color="isViewAsNonAdmin ? 'primary' : ''"
              aria-label="view-as"
              @click.stop.prevent="onViewAs"
              icon="mdi-account-switch-outline"
            />
          </span>
        </div>

        <!-- Notifications icon -->
        <v-list-item-action v-if="notificationsVisible" class="!tw-flex-shrink-0 !tw-ml-auto">
          <v-icon
            :color="showNotifications ? 'primary' : undefined"
            aria-label="notifications"
            @click="onClickNotificationsIcon"
            :icon="showNotifications ? 'mdi-bell-badge-outline' : 'mdi-bell-outline'"
          />
        </v-list-item-action>
      </div>
    </template>

    <!-- BODY -->
    <template #body>
      <NotificationsMenu v-if="notificationsEnabled" />
      <div v-else @click="emitClose">
        <NavigationMenu />
      </div>
    </template>
  </ExpandableCard>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import ExpandableCard from '~/components/common/ExpandableCard.vue'
import NavigationMenu from '~/components/drawer/global_drawer/menus/NavigationMenu.vue'
import NotificationsMenu from '~/components/drawer/global_drawer/menus/NotificationsMenu.vue'
import CustomAvatar from '~/components/CustomAvatar.vue'
import visibleComponents from '~/enums/visibleComponents'

// Stores
import { useAuthStore } from '~/stores/auth'
import { useProfileStore } from '~/stores/profile'

// Props
defineProps({
  expandByDefault: { type: Boolean, default: true },
  expandable: { type: Boolean, default: false }
})

// Emits
const emit = defineEmits(['onToggle', 'onCardOpen', 'onCardToggle', 'close'])

// i18n
const { t } = useI18n()

// Stores
const authStore = useAuthStore()
const profileStore = useProfileStore()

// State
const notificationsEnabled = ref(false)
const notifications = ref([])
const avatarFrame = ref('')
const notificationsVisible = true // пока без профиля скрытия
const user = computed(() => authStore.user)

// Fake notifications for now (заглушка)
function getNotifications() {
  notifications.value = [
    { id: 1, read: false, message: 'New course available' },
    { id: 2, read: true, message: 'Reminder: update your profile' }
  ]
}

// Computed
const isAdmin = computed(() => authStore.isAdmin)
const isCourseAdmin = computed(() => authStore.isCourseAdmin)
const isCourseEditor = computed(() => authStore.isCourseEditor)
const isViewAsNonAdmin = computed(() => flase)
const isEditingMode = computed(() => false)
const workspaceId = computed(() => profileStore.workspace.id)
const profile = computed(() => profileStore.profile)

const showNotifications = computed(() => notifications.value.some(n => !n.read))

const profileSubtitle = computed(() => {
  if (isAdmin.value) {
    return isViewAsNonAdmin.value
      ? t('header.menu.profileSubtitle.learner')
      : t('header.menu.profileSubtitle.admin')
  } else if (isCourseAdmin.value) {
    return isViewAsNonAdmin.value
      ? t('header.menu.profileSubtitle.learner')
      : t('header.menu.profileSubtitle.courseAdmin')
  } else if (isCourseEditor.value) {
    return isViewAsNonAdmin.value
      ? t('header.menu.profileSubtitle.learner')
      : t('header.menu.profileSubtitle.courseEditor')
  }
  return t('header.menu.profileSubtitle.learner')
})

// Methods
function onViewAs() {
  if (isEditingMode.value && !isViewAsNonAdmin.value) {
    courseStore.setEditingMode({ editingMode: false }).then(() => {
      courseStore.viewAsNonAdmin(!isViewAsNonAdmin.value)
    })
  } else {
    courseStore.viewAsNonAdmin(!isViewAsNonAdmin.value)
  }
}

function onClickNotificationsIcon() {
  emitCardOpen()
  notificationsEnabled.value = !notificationsEnabled.value
}

function emitClose() {
  emit('close')
}

function emitCardOpen() {
  emit('onCardOpen', true)
}

function emitCardToggle() {
  emit('onCardToggle', true)
}

// Lifecycle
onMounted(() => {
  if (isAdmin.value && !workspaceId.value) {
    adminStore.fetchCurrentWorkspace?.()
  }
  getNotifications()
})
</script>
