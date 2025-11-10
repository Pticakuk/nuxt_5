<template>
  <v-list density="compact" class="drawer-menu !tw-bg-transparent !tw-px-2 !tw-py-0">
    <!-- Все курсы -->
    <v-list-item
      v-if="showCourses"
      :to="urls.coursesUrl.startsWith('http') ? undefined : urls.coursesUrl"
      :href="urls.coursesUrl.startsWith('http') ? urls.coursesUrl : undefined"
      class="drawer-link !tw-px-0 !tw-py-2 before:tw-hidden !tw-border-t !tw-border-solid !tw-border-[var(--border-gray)]"
      :class="{
        'tw-rounded-[100px] drawer-link--active !tw-border-[transparent]': route.path === urls.coursesUrl
      }"
    >
      <v-icon class="tw-p-2 tw-mr-2" color="primary" icon="mdi-format-list-bulleted-square" />
      <v-list-item-title class="!tw-text-base tw-opacity-80 !tw-leading-5 !tw-font-normal">
        {{ t('buttons.viewAllCourses') }}
      </v-list-item-title>
    </v-list-item>

    <!-- Дашборд -->
    <v-list-item
      :to="urls.dashboardUrl"
      class="drawer-link !tw-px-0 !tw-py-2 before:tw-hidden !tw-border-t !tw-border-solid !tw-border-[var(--border-gray)]"
      :class="{
        'tw-rounded-[100px] drawer-link--active !tw-border-[transparent]': route.path === urls.dashboardUrl
      }"
    >
      <v-icon class="tw-p-2 !tw-mr-2" color="primary" icon="mdi-view-dashboard" />
      <v-list-item-title class="!tw-text-base tw-opacity-80 !tw-leading-5 !tw-font-normal">
        {{ t('buttons.viewMyDashboard') }}
      </v-list-item-title>
    </v-list-item>

    <!-- Управление курсами -->
    <v-list-item
      v-if="(isCourseEditor || isCourseAdmin) && !isViewAsNonAdmin"
      :to="urls.manageCourses"
      class="drawer-link !tw-px-0 !tw-py-2 before:tw-hidden !tw-border-t !tw-border-solid !tw-border-[var(--border-gray)]"
      :class="{
        'tw-rounded-[100px] drawer-link--active !tw-border-[transparent]': route.path === urls.manageCourses
      }"
    >
      <v-icon class="tw-p-2 tw-mr-2" color="primary" icon="mdi-view-dashboard-edit" />
      <v-list-item-title class="!tw-text-base tw-opacity-80 !tw-leading-5 !tw-font-normal">
        {{ t('buttons.manageCourses') }}
      </v-list-item-title>
    </v-list-item>

    <!-- Админ -->
    <v-list-item
      v-if="isCourseAdmin && !isViewAsNonAdmin"
      :to="urls.adminHomeUrl"
      class="drawer-link !tw-px-0 !tw-py-2 before:tw-hidden !tw-border-t !tw-border-solid !tw-border-[var(--border-gray)]"
      :class="{
        'tw-rounded-[100px] drawer-link--active !tw-border-[transparent]': route.path === urls.adminHomeUrl
      }"
    >
      <v-icon class="tw-p-2 tw-mr-2" color="primary" icon="mdi-account-cog-outline" />
      <v-list-item-title class="!tw-text-base tw-opacity-80 !tw-leading-5 !tw-font-normal">
        {{ t('buttons.goToAdmin') }}
      </v-list-item-title>
    </v-list-item>

    <!-- Настройки -->
    <v-list-item
      :to="urls.settingsUrl"
      class="drawer-link !tw-px-0 !tw-py-2 before:tw-hidden !tw-border-t !tw-border-solid !tw-border-[var(--border-gray)]"
      :class="{
        'tw-rounded-[100px] drawer-link--active !tw-border-[transparent]': route.path === urls.settingsUrl
      }"
    >
      <v-icon class="tw-p-2 tw-mr-2" color="primary" icon="mdi-cog" />
      <v-list-item-title class="!tw-text-base tw-opacity-80 !tw-leading-5 !tw-font-normal">
        {{ t('buttons.goToSettings') }}
      </v-list-item-title>
    </v-list-item>

    <!-- Профиль -->
    <v-list-item
      :to="urls.learnerProfileUrl"
      class="drawer-link !tw-px-0 !tw-py-2 before:tw-hidden !tw-border-t !tw-border-solid !tw-border-[var(--border-gray)]"
      :class="{
        'tw-rounded-[100px] drawer-link--active !tw-border-[transparent]': route.path === urls.learnerProfileUrl
      }"
    >
      <v-icon class="tw-p-2 tw-mr-2" color="primary" icon="mdi-account-circle" />
      <v-list-item-title class="!tw-text-base tw-opacity-80 !tw-leading-5 !tw-font-normal">
        {{ t('buttons.goToLearnerProfile') }}
      </v-list-item-title>
    </v-list-item>

    <!-- Организация -->
    <v-list-item
      v-if="showOrganizationView"
      :to="urls.organization"
      class="drawer-link !tw-px-0 !tw-py-2 before:tw-hidden !tw-border-t !tw-border-solid !tw-border-[var(--border-gray)]"
      :class="{
        'tw-rounded-[100px] drawer-link--active !tw-border-[transparent]': route.path === urls.organization
      }"
    >
      <v-icon class="tw-p-2 tw-mr-2" color="primary" icon="mdi-office-building" />
      <v-list-item-title class="!tw-text-base tw-opacity-80 !tw-leading-5 !tw-font-normal">
        {{ t('buttons.goToOrganization') }}
      </v-list-item-title>
    </v-list-item>

    <!-- Выход -->
    <v-list-item
      class="drawer-link !tw-px-0 !tw-py-2 before:tw-hidden after:tw-hidden !tw-border-t !tw-border-solid !!tw-border-[var(--border-gray)]"
      @click="onLogout"
    >
      <v-icon class="tw-p-2 tw-mr-2" color="primary" icon="mdi-logout-variant" />
      <v-list-item-title class="!tw-text-base tw-opacity-80 !tw-leading-5 !tw-font-normal text-warning">
        {{ t('buttons.logout') }}
      </v-list-item-title>
    </v-list-item>
  </v-list>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import visibleComponents from '~/enums/visibleComponents'
import { useAuthStore } from '~/stores/auth'
import { useProfileStore } from '~/stores/profile'
import { useUiStore } from '~/stores/ui'
import { useUrls } from '~/composables/useUrls' // предполагается твой хелпер

const route = useRoute()
const router = useRouter()
const { t } = useI18n()
const { urls } = useUrls()

// stores
const authStore = useAuthStore()
const profileStore = useProfileStore()
const uiStore = useUiStore()

// reactive/computed
const isAdmin = computed(() => authStore.isAdmin)
const isCourseEditor = computed(() => authStore.isCourseEditor)
const isCourseAdmin = computed(() => authStore.isCourseAdmin)
const isViewAsNonAdmin = computed(() => false)
const profile = computed(() => profileStore.profile)
const workspaceId = computed(() => profileStore.workspace.id)

const backgroundMain = 'background-color: rgba(var(--v-theme-primary), 0.12)'

// computed visibility
const showOrganizationView = computed(() => {
  if (!profile.value || !profile.value.hide) return true
  return !profile.value.hide.includes(visibleComponents.ORGANIZATION)
})

const showCourses = computed(() => {
  return profileStore.showComponents?.[visibleComponents.COURSES_LISTING]
})

// methods
function onLogout() {
  uiStore.setUserDrawer(false)
  authStore.logout()
  router.push('/login')
}

// lifecycle
onMounted(() => {
  if (isAdmin.value && !workspaceId.value) {
    adminStore.fetchCurrentWorkspace()
  }
})
</script>
