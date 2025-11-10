<template>
  <div class="!tw-pt-40 tw-flex tw-flex-col tw-items-center tw-justify-start tw-min-h-screen tw-bg-gradient-to-br tw-from-primary tw-to-purple-600">
    <div class="tw-max-w-2xl tw-mx-auto tw-px-4 tw-text-center">
      <h1 class="tw-text-6xl tw-font-bold tw-mb-6 md:tw-text-4xl">
        All courses
      </h1>
      
      <div class="tw-flex tw-flex-col sm:tw-flex-row tw-gap-4 tw-justify-center tw-items-center">
        <base-button
          to="/courses/course/1148"
          :block="false"
          class="!tw-px-6"
          button-text="Demo course 1"
          large
          :stop="false"
        />
        <base-button
          to="/courses/course/1149"
          :block="false"
          class="!tw-px-6"
          button-text="Demo course 2"
          large
          :stop="false"
        />
      </div>

    </div>
  </div>
</template>

<script setup>
import BaseButton from '~/components/common/buttons/BaseButton.vue'
const { urls } = useUrls()

useHead({
  title: 'All courses',
  meta: [
    { name: 'description', content: 'Welcome to All courses' }
  ]
})
</script>