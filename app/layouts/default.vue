<template>
  <!-- 2. Remote component -->
  <!-- <v-app
    v-else-if="useRemoteComponent"
    class="workademy-app"
    :class="isHtmlCourseTemplate ? `custom-course-template custom-course-template-${currentCourseId}` : ''"
  >
    <Header />
    <main>
      <slot />
    </main>
  </v-app> -->

  <!-- 3. Workspace HTML -->
  <!-- <v-app v-else-if="workspaceHtml" class="workademy-app">
    <RuntimeTemplate :template="workspaceHtml" />
  </v-app> -->

  <!-- 4. Native layout -->
  <v-app
    v-show="!courseTemplateIsLoading"
    class="workademy-app"
    :class="isHtmlCourseTemplate ? `custom-course-template custom-course-template-${currentCourseId}` : ''"
  >
    <v-progress-linear
      v-if="loadingProfile"
      aria-label="progress-linear"
      color="primary"
      indeterminate
      rounded
      height="6"
    />
    <template v-else>
      <component  :is="'style'">
        @import "{{ workspaceCss }}";
      </component>
      <div class="v-application--wrap">
        <drawer
          v-if="!insideMainCoursePage"
          :current-course="currentCourse"
        />
        <main
          class="main tw-transition-all tw-duration-300 md:!tw-mr-0"
          :class="{'main--drawer-is-open 2xl:tw-mr-[20rem]': userDrawerOpen && !insideMainCoursePage}"
        >
          <div
            class="tw-flex tw-flex-col tw-h-full"
            :class="{'tw-max-w-[850px] tw-mx-auto': insideCourseRoute && !isHtmlCourseTemplate}"
          >
            <slot />
            <footer-component class="tw-mt-auto" :class="{'user-drawer-is-open': userDrawerOpen}" />
          </div>
        </main>
      </div>
    </template>
  </v-app>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useTheme } from 'vuetify'
import { useRoute } from 'vue-router'
import { useCourseStore } from '~/stores/course'
import { useTemplatesStore } from '~/stores/templates'
import { useUiStore } from '~/stores/ui'
import { INSIDE_MAIN_COURSE_PAGE, INSIDE_COURSE_ROUTES } from '~/utils/utils'
import Drawer from '~/components/drawer/global_drawer/Drawer.vue'
import FooterComponent from '~/components/landing/FooterComponent.vue'
// import RuntimeTemplate from 'vue3-runtime-template'

// vuetify global init
const theme = useTheme()

// route
const route = useRoute()

// stores
const courseStore = useCourseStore()
const templatesStore = useTemplatesStore()
const uiStore = useUiStore()
const isHtmlCourseTemplate = computed(() => templatesStore.isHtmlCourseTemplate)
const courseTemplateIsLoading = computed(() => templatesStore.courseTemplateIsLoading)
const userDrawerOpen = computed(() => uiStore.userDrawerOpen)


// computed
const insideCourseRoute = computed(() =>
  INSIDE_COURSE_ROUTES.some(r => route.path.includes(r))
)
const insideMainCoursePage = computed(() =>
  INSIDE_MAIN_COURSE_PAGE.some(r => route.path.includes(r))
)
const currentCourseId = computed(() => currentCourse.id)
const { initAppProfile } = useProfile()
const loadingProfile = ref(true)
const currentCourse = computed(() => {
  if (insideMainCoursePage.value) {
    return courseStore.course
  }
  return courseStore.userCourse
})


const workspaceCss = 'https://d18lcb7860whbu.cloudfront.net/workspaces/f5b250d1-d45a-4410-98bf-09a8eb1c35b2/assets/css/style.css'

onMounted(async () => {
  try {
    await initAppProfile(theme)
  } finally {
    loadingProfile.value = false
  }
})
</script>
