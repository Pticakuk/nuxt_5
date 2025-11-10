<template>
  <course-tree
    :modules="currentCourse?.modules"
    :dense="true"
    :active-lecture="currentCourse?.activeLecture"
    :learning-path-id="learningPathId"
    :learning-path-name="learningPathName"
    :user-course-id="currentCourse?.userCourseId"
    class="!tw-p-4 !tw-pt-0 !tw-pb-2"
  />
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import CourseTree from '~/components/timeline/CourseTree'


const props = defineProps({
  currentCourse: { type: Object, default: () => ({}) },
})

// Router
const route = useRoute()

const learningPathId = computed(() => {
  const { learningPathId } = route.query
  return learningPathId ? Number(learningPathId) : null
})

const learningPathName = computed(() => {
  const { learningPathName } = route.query
  return learningPathName || null
})

</script>