<template>
  <div
    class="wa__main-drawer tw-h-auto tw-duration-300 lg:!tw-right-3 md:tw-top-3 tw-z-[70] tw-fixed tw-right-6 tw-top-6"
    :class="{'wa__main-drawer--open tw-w-[18.75rem] tw-max-h-full tw-rounded-md': userDrawerOpen,
             'tw-max-h-[52px] tw-w-[54px] tw-overflow-hidden !tw-rounded-br-none !tw-rounded-tl-none': !userDrawerOpen,
             '!tw-rounded-2xl': itemCardStyling.rounded && !itemCardStyling.tile && !userDrawerOpen,
             '!tw-rounded-none': itemCardStyling.tile,
             'tw-top-[76px] md:tw-hidden': canEditCourse,
             '!tw-top-[130px]': isEditingMode && canEditCourse,
             '!tw-overflow-y-auto': userMenuIsOpen && userDrawerOpen,
    }"
  >
    <!-- Drawer Head -->
    <v-card       flat
      class="drawer-head !tw-mb-2 tw-relative !tw-z-[3] !tw-overflow-visible"
      :class="{'tw-max-h-[52px] tw-overflow-hidden !tw-rounded-br-none !tw-rounded-tl-none': !userDrawerOpen,
               '!tw-rounded-md': !itemCardStyling.rounded && !itemCardStyling.tile,
               '!tw-rounded-2xl': itemCardStyling.rounded && !itemCardStyling.tile,
               '!tw-rounded-none': itemCardStyling.tile
      }"
      :style="{ background: !isDark ? backgroundMainNotTransparent : '' }"
    >
      <div class="drawer-head-container tw-min-h-[52px] tw-pl-4 tw-flex tw-items-center tw-justify-end">
        <a
          v-if="urls.homeUrl.startsWith('http')"
          :href="urls.homeUrl"
          class="drawer-head-logo logo-link tw-flex tw-max-h-[52px] tw-items-center tw-mr-auto"
        >
          <img
            alt="logo"
            :src="profile.logoHeader"
            class="tw-w-full tw-max-h-[32px] tw-max-w-[80px] tw-block"
          >
        </a>
        <nuxt-link
          v-else
          :to="urls.homeUrl"
          class="drawer-head-logo tw-h-full tw-max-h-[52px] tw-flex tw-items-center tw-mr-auto"
        >
          <img
            alt="logo"
            :src="profile.logoHeader"
            class="tw-w-full tw-max-h-[32px] tw-max-w-[80px] tw-block"
          >
        </nuxt-link>
        <main-menu class="drawer-head-menu !tw-px-2" />
        <button
          class="wa__main-drawer__burger tw-w-[54px] tw-h-[52px] tw-absolute tw-top-0 tw-right-0 tw-z-50
              !tw-bg-[rgb(var(--v-theme-primary))] !tw-rounded-tl-none !tw-rounded-br-none"
          :class="{'!tw-rounded-2xl': itemCardStyling.rounded && !itemCardStyling.tile,
                   '!tw-rounded-md': !itemCardStyling.rounded && !itemCardStyling.tile,
                   '!tw-rounded-none': itemCardStyling.tile
          }"
          aria-label="main-drawer-burger"
          @click.stop="onDrawerToggle"
        >
          <span
            class="wa__main-drawer__burger-line tw-w-3.5 tw-bg-white tw-h-0.5 tw-absolute tw-top-1/2 tw-left-1/2
              -tw-translate-x-1/2 -tw-translate-y-1/2 tw-opacity-1 tw-duration-300"
            :class="{'tw-mt-0': userDrawerOpen, '-tw-mt-1': !userDrawerOpen}"
          />
          <span
            class="wa__main-drawer__burger-line tw-w-3.5 tw-bg-white tw-h-0.5 tw-absolute tw-top-1/2 tw-left-1/2
              -tw-translate-x-1/2 -tw-translate-y-1/2"
          />
          <span
            class="wa__main-drawer__burger-line tw-w-3.5 tw-bg-white tw-h-0.5 tw-absolute tw-top-1/2 tw-left-1/2
            -tw-translate-x-1/2 -tw-translate-y-1/2 tw-opacity-1 tw-duration-300"
            :class="{'tw-mt-0': userDrawerOpen, 'tw-mt-1': !userDrawerOpen}"
          />
        </button>
      </div>
      <div
        v-if="insideCourseRoute && currentCourse?.name && currentCourseHasStarted"
        class="tw-p-4 tw-min-w-[18.75rem] "
      >
        <course-progress-drawer
          :current-course="currentCourse"
          :inside-lecture="insideLectureRoute"
        />
      </div>
      <v-divider />
      <user-menu
        :expand-by-default="!insideLectureRoute && !insideCourseRoute"
        :expandable="true"
        :class="{
          '!tw-rounded-md': !itemCardStyling.rounded && !itemCardStyling.tile,
          '!tw-rounded-2xl': itemCardStyling.rounded && !itemCardStyling.tile,
          '!tw-rounded-none': itemCardStyling.tile
        }"
        :style="{ background: !isDark ? backgroundMainNotTransparent : '' }"
        @onToggle="onUserMenuToggle"
      />
    </v-card>

    <!-- Drawer Content -->
    <div
      ref="drawerScroll"
      class="wa__main-drawer__wrap tw-w-[18.75rem] tw-h-auto !tw-min-h-40 tw-overflow-auto tw-duration-300 tw-pb-4 tw-relative tw-z-[2]"
      :class="{
        'tw-opacity-100 tw-overflow-auto': userDrawerOpen,
        'tw-opacity-0 tw-overflow-x-hidden': !userDrawerOpen
      }"
      :style="{ maxHeight: `calc(100vh - ${drawerScrollTop}px)` }"
    >
      <div class="wa__main-drawer__container tw-flex tw-flex-col tw-gap-2">
        <drawer-wrapper-component
          v-if="insideCourseRoute"
        >
          <course-info-drawer :current-course="currentCourse" />
        </drawer-wrapper-component>
        <drawer-wrapper-component v-if="insideCourseRoute">
          <course-tree-drawer :current-course="currentCourse" />
        </drawer-wrapper-component>
      </div>
    </div>
  </div>
</template>

<script setup>
import MainMenu from '~/components/drawer/global_drawer/menus/MainMenu'
import UserMenu from '~/components/menu/UserMenu'
import CourseProgressDrawer from '~/components/drawer/global_drawer/CourseProgressDrawer.vue'
import DrawerWrapperComponent from '~/components/drawer/global_drawer/DrawerWrapperComponent'
import CourseInfoDrawer from '~/components/drawer/global_drawer/CourseInfoDrawer'
import CourseTreeDrawer from '~/components/drawer/global_drawer/CourseTreeDrawer.vue'
import { useProfileStore } from '~/stores/profile'
import { useUiStore } from '~/stores/ui'
import { useAuthStore } from '~/stores/auth'
import { useRoute } from 'vue-router'
import { useTheme } from 'vuetify'
import { INSIDE_COURSE_ROUTES, INSIDE_LECTURE_ROUTES } from '~/utils/utils'
import { useProfileStyle } from '~/composables/useProfileStyle'

const { backgroundMainNotTransparent } = useProfileStyle()
const { urls  } = useUrls()


/* Props */
const props = defineProps({
  currentCourse: {
    type: Object,
    default: () => ({ id: 1, name: 'Demo Course' })
  }
})

// data
const userMenuIsOpen = ref(false)
const drawerScroll = ref(null)
const MIN_DRAWER_SCROLL = 251
const drawerScrollTop = ref(MIN_DRAWER_SCROLL)

/* Store */
const profileStore = useProfileStore()
const uiStore = useUiStore()
const authStore = useAuthStore()
const route = useRoute()
const { global: theme } = useTheme()

/* Computed */
const userDrawerOpen = computed(() => uiStore.userDrawerOpen)
const profile = computed(() => profileStore.profile)
const user = computed(() => authStore.user)
const itemCardStyling = computed(() => profileStore.itemCardStyling)
const insideCourseRoute = computed(() =>
  INSIDE_COURSE_ROUTES.some(r => route.path.includes(r))
)
const insideLectureRoute = computed(() =>
  INSIDE_LECTURE_ROUTES.some(r => route.path.includes(r))
)
const currentCourseHasStarted = computed(() => {
  if (!props?.currentCourse?.availableFromTime) {
    return true
  }
  return new Date().getTime() >= props?.currentCourse?.availableFromTime
})
const isDark = computed(() => theme.current.value.dark)

/* Methods */
function onDrawerToggle() {
  uiStore.toggleUserDrawer()
}
function onUserMenuToggle (val) {
  userMenuIsOpen.value = val
}
function updateDrawerHeight() {
  setTimeout(() => {
    if (drawerScroll.value) {
      const rect = drawerScroll.value.getBoundingClientRect()
      drawerScrollTop.value = rect?.top || MIN_DRAWER_SCROLL
    }
  }, 500)
}
// Watchers
watch(() => props.currentCourse, () => {
  updateDrawerHeight()
})

watch(route, () => {
  updateDrawerHeight()
})

// Lifecycle
onMounted(() => {
  updateDrawerHeight()
})

const isEditingMode = false
const canEditCourse = false

</script>

