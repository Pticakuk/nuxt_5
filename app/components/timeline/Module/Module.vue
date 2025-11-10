<template>
  <v-expansion-panel
    v-if="dense"
    flat
    elevation="0"
    :disabled="moduleDisabled && !expandAll"
    :color="moduleDisabled ? moduleDisabledColor : ''"
    class="w-course-module-card--dense !tw-bg-transparent before:tw-hidden after:tw-hidden !tw-border-b 
    !tw-border-solid !tw-border-[var(--border-gray)] !last-of-type:tw-border-b-0"
  >
    <v-expansion-panel-title
      class="!tw-bg-transparent !tw-pl-2 !tw-py-4 !tw-min-h-[56px] !tw-pr-0"
      expand-icon="mdi-menu-down"
      collapse-icon="mdi-menu-up"
    >
      <h2 class="w-course-module-card__title--dense !tw-text-sm">
        <span
          class="!tw-text-sm tw-font-medium tw-tracking-[0.1px] grey--text text--darken-1"
          :class="module.done ? 'primary--text' : 'grey--text'"
        >
          {{ moduleDenseName }}
        </span>
      </h2>
    </v-expansion-panel-title>
    <v-expansion-panel-text>
      <div class="lecture-modules-list__sections">
        <module-item
          v-for="(lecture, index) in displayLectures"
          :key="lecture.lectureId"
          :dense="true"
          :lecture="lecture"
          :active-lecture="activeLecture"
          :lecture-index="index"
          :module-index="moduleIndex"
          :learning-path-id="learningPathId"
          :learning-path-name="learningPathName"
        />
      </div>
    </v-expansion-panel-text>
  </v-expansion-panel>

  <v-expansion-panel
    v-else
    flat 
    elevation="0"
    class="course-module__panel course-tree-module-item before:tw-hidden after:tw-hidden !tw-bg-transparent"
    :disabled="moduleDisabled"
  >
    <v-expansion-panel-title
      :id="module.moduleId"
      class="course-module__header !tw-py-8 !tw-px-0 !tw-border-0 !tw-border-b tw-border-solid !tw-border-[var(--border-gray)] before:tw-hidden md:!tw-py-4"
      expand-icon="mdi-menu-down"
      collapse-icon="mdi-menu-up"
    >
      <div class="course-module__header-content">
        <v-chip
          v-if="module.availableFromTime && !dense"
          small
          color="primary"
          label
          class="absolute-0"
          style="border-radius: 0!important;"
        >
          <v-icon small left>
            mdi-calendar
          </v-icon>
          {{ moduleAvailableFromUntilText }}
        </v-chip>
        <h2
          class="course-module__header-title !tw-text-2xl !tw-font-normal tw-text-left md:!tw-text-lg md:!tw-font-medium"
          :class="isActive ? 'primary--text' : ''"
          v-html="moduleName"
        />
        <v-card-text
          v-if="module.description && !dense"
          class="course-module__header-subtitle !tw-p-0 !tw-pt-2 !tw-text-base grey--text text--darken-2 tw-text-left tw-transition md:!tw-pt-1 !tw-list-[initial]"
          v-html="moduleDescription"
        />
      </div>
    </v-expansion-panel-title>
    <v-expansion-panel-text
      v-if="hasStarted"
      class="!tw-py-0 !tw-px-0"
    >
      <module-item
        v-for="(lecture, index) in displayLectures"
        :key="lecture.lectureId"
        :dense="dense"
        :lecture="lecture"
        :active-lecture="activeLecture"
        :lecture-index="index"
        :module-index="moduleIndex"
        :learning-path-id="learningPathId"
        :learning-path-name="learningPathName"
        :user-course-id="userCourseId"
      />
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useTheme } from 'vuetify'
import { useI18n } from 'vue-i18n'
import tinycolor from 'tinycolor2'
import ModuleItem from '~/components/timeline/Module/ModuleItem.vue'
import { fixHtml } from '~/utils/utils'
import { formattedDate } from '~/utils/timeUtils'

// Props
const props = defineProps({
  module: {
    type: Object,
    default: () => ({})
  },
  dense: {
    type: Boolean,
    default: false
  },
  activeLecture: {
    type: Object,
    default: null
  },
  moduleIndex: {
    type: Number,
    default: 0
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
  expandAll: {
    type: Boolean,
    default: false
  },
  isActive: {
    type: Boolean,
    default: false
  }
})

// Emits
const emit = defineEmits(['onOpen'])

// Composables
const route = useRoute()
const theme = useTheme()
const { t, locale } = useI18n()

// Computed
const displayLectures = computed(() => {
  return props.module.lectures?.filter(lecture => lecture.visible === true) || []
})

const moduleDenseName = computed(() => {
  return fixHtml(props.module.name)
})

const moduleName = computed(() => {
  return props.module.name
})

const moduleDescription = computed(() => {
  return props.module.description
})

const hasStarted = computed(() => {
  if (!props.module.availableFromTime) {
    return true
  }
  return new Date().getTime() > props.module.availableFromTime
})

const allLecturesAreLocked = computed(() => {
  return displayLectures.value.every(lecture => lecture?.locked)
})

const moduleDisabled = computed(() => {
  return !hasStarted.value || allLecturesAreLocked.value
})

const moduleDisabledColor = computed(() => {
  const primary = theme.global.current.value.colors.primary
  return tinycolor(primary).setAlpha(0.5).toString()
})

const moduleAvailableFromUntilText = computed(() => {
  const availableFrom = props.module.availableFromTime
  const availableUntil = props.module.availableUntilTime
  
  if (!availableFrom) {
    return ''
  }
  
  if (!availableUntil) {
    return t('courseTree.moduleAvailableFrom', { 
      from: formattedDate(availableFrom, locale.value, false) 
    })
  }
  
  return t('courseTree.moduleAvailableFromUntil', {
    from: formattedDate(availableFrom, locale.value, false),
    until: formattedDate(availableUntil, locale.value, false)
  })
})

// Lifecycle
onMounted(() => {
  if (String(props.module?.moduleId) === route.query?.module) {
    emit('onOpen', props.moduleIndex)
  }
})
</script>