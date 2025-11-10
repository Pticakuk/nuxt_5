<template>
  <div v-if="dense">
    <v-expansion-panels
      v-model="expanded"
      accordion
      multiple
    >
      <module
        v-for="(module, index) in modules"
        :key="module.moduleId"
        :dense="dense"
        :module="module"
        :is-active="module.moduleId === moduleId"
        :active-lecture="activeLecture"
        :module-index="index"
        :learning-path-id="learningPathId"
        :learning-path-name="learningPathName"
        :expand-all="expandAllModules"
      />
    </v-expansion-panels>
    <slot />
  </div>
  <div v-else>
    <v-expansion-panels
      v-model="expanded"
      accordion
      multiple
    >
      <module
        v-for="(module, index) in modules"
        :key="module.moduleId"
        :dense="dense"
        :module="module"
        :active-lecture="activeLecture"
        :module-index="index"
        :learning-path-id="learningPathId"
        :learning-path-name="learningPathName"
        :user-course-id="userCourseId"
      />
    </v-expansion-panels>
    <slot />
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import pkg from 'lodash'; const { findIndex, some, map, throttle } = pkg
import { useProfileStore } from '~/stores/profile'
import Module from '~/components/timeline/Module/Module'

// Props
const props = defineProps({
  modules: {
    type: Array,
    default: () => []
  },
  dense: {
    type: Boolean,
    default: false
  },
  activeLecture: {
    type: Object,
    default: () => ({})
  },
  learningPathId: {
    type: Number,
    default: null
  },
  learningPathName: {
    type: String,
    default: ''
  },
  userCourseId: {
    type: Number,
    default: null
  },
  moduleId: {
    type: Number,
    default: null
  }
})

// Router
const route = useRoute()

// Stores
const profileStore = useProfileStore()

// Data
const expanded = ref([])
const isInitialized = ref(false)

// Computed
const firstModuleWithNotDoneLecture = computed(() => {
  let index = findIndex(props.modules, (module) => {
    return module.lectures && some(module.lectures, (lecture) => {
      return !lecture.done
    })
  })
  if (index === -1) {
    index = 0
  }
  return index
})

const expandAllModules = computed(() => {
  return profileStore.profile?.expandAllModulesByDefault || false
})

// Methods
function modulesToExpand() {
  if (expandAllModules.value) {
    expanded.value = map(props.modules, (module, index) => {
      return index
    })
    return
  }

  if (props.moduleId) {
    const index = findIndex(props.modules, (module) => {
      return module.moduleId === props.moduleId
    })
    if (index !== -1) {
      expanded.value = [index]
      return
    }
  }

  const activeLectureId = route.query?.lecture
  if (!props.activeLecture || !activeLectureId) {
    expanded.value = [firstModuleWithNotDoneLecture.value]
  } else {
    let index = findIndex(props.modules, (module) => {
      return module.lectures && some(module.lectures, (lecture) => {
        return String(lecture.lectureId) === activeLectureId
      })
    })
    if (index === -1) {
      index = firstModuleWithNotDoneLecture.value
    }
    expanded.value = [index]
  }
}

const scrollIntoActiveLecture = throttle(() => {
  const sidebarWrapper = document.querySelector('.wa__main-drawer__wrap')
  const target = document.querySelector('.w-lecture-modules-list__section--active')

  if (target && sidebarWrapper) {
    const wrapperRect = sidebarWrapper.getBoundingClientRect()
    const targetRect = target.getBoundingClientRect()
    const offset = targetRect.top - wrapperRect.top + sidebarWrapper.scrollTop - 100
    sidebarWrapper.scrollTo({
      top: offset,
      behavior: 'smooth'
    })
  }
}, 300)

// Watchers - додано immediate: false щоб уникнути циклу
watch(() => props.modules, () => {
  if (isInitialized.value && props.modules.length > 0) {
    modulesToExpand()
  }
}, { immediate: false })

watch(() => props.activeLecture, () => {
  if (isInitialized.value) {
    nextTick(() => {
      scrollIntoActiveLecture()
    })
  }
}, { immediate: false })

// Lifecycle
onMounted(() => {
  modulesToExpand()
  isInitialized.value = true
  setTimeout(() => {
    scrollIntoActiveLecture()
  }, 500)
})
</script>