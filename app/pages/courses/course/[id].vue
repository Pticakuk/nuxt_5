<template>
  <div :id="`course-page-${courseId}`">
    <v-progress-linear
      v-if="templateStore.loading"
      aria-label="progress-linear"
      color="primary"
      indeterminate
      rounded
      height="6"
    />
    <template v-else>
      <component v-if="templateStore.cssUrl" :is="'style'">
        @import "{{ templateStore.cssUrl }}";
      </component>
        <MyRuntimeTemplate
        courseId
          :template="templateStore.htmlTemplate"
          :extraProps="{courseId}"
        />
    </template>
  </div>
</template>

<script setup>
import MyRuntimeTemplate from '~/components/MyRuntimeTemplate.vue'
import { onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'

import { useCourseStore } from '~/stores/course'
import { useTemplatesStore } from '~/stores/templates'
import { fixHtml } from '~/utils/utils'

const route = useRoute()
const courseId = Number(route.params.id)

const courseStore = useCourseStore()
const templateStore = useTemplatesStore()

onMounted(async () => {
  await courseStore.fetchCourse(courseId, { withModules: true })
  await templateStore.fetchHtmlTemplate(courseId)
  await templateStore.fetchCss(courseId)
  await templateStore.fetchJs(courseId)
})

onBeforeUnmount(() => {
  templateStore.reset()
    try {
    const banners = document.querySelectorAll('.coming-soon-banner')
    if (banners.length > 0) {
      banners.forEach(banner => banner.remove())
    }
    
    // Fallback на jQuery якщо є
    if (typeof $ !== 'undefined') {
      $('.coming-soon-banner').remove()
    }
  } catch (err) {
    console.warn('Failed to remove coming-soon-banner:', err)
  }
})

useHead(() => {
  const courseTitle = courseStore.course?.name
    ? fixHtml(courseStore.course.name)
    : ''

  return {
    title: courseTitle ? `${courseTitle} | Workademy` : 'Workademy'
  }
})
</script>


