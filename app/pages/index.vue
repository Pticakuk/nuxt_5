<template>
  <div class="!tw-pt-40 tw-flex tw-flex-col tw-items-center tw-justify-start tw-min-h-screen tw-bg-gradient-to-br tw-from-primary tw-to-purple-600">
    <div class="tw-max-w-2xl tw-mx-auto tw-px-4 tw-text-center">
      <h1 class="tw-text-6xl tw-font-bold tw-mb-6 md:tw-text-4xl">
        SSR Demo
      </h1>
      
      <div class="tw-flex tw-flex-col sm:tw-flex-row tw-gap-4 tw-justify-center tw-items-center">
        <base-button
          :to="urls.signinUrl"
          :block="false"
          class="!tw-px-6"
          button-text="Sign In"
          large
          icon="mdi-login"
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
  title: 'SSR Demo',
  meta: [
    { name: 'description', content: 'Welcome to SSR demonstration platform' }
  ]
})
</script>