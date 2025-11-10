<template>
  <div class="tw-flex tw-items-center tw-justify-end">
        <!-- Login  -->
    <div
      v-if="!isAuthenticated"
      class="tw-min-w-[46px] tw-flex tw-items-center tw-justify-center"
    >
       <v-btn
        icon
        color="primary"
        size="small"
        to="/login"
        class="!tw-w-auto !tw-min-w-[28px] !tw-px-1 !tw-rounded-[1rem]"
        title="Login"
      >
        <v-icon size="18" class="tw-transform">
          mdi-login
        </v-icon>
      </v-btn>
    </div>
    <span
      v-if="!isAuthenticated"
      class="tw-w-px tw-h-6 tw-border-r tw-border-solid tw-border-[var(--border-gray)]"
    />

    <!-- Language switch -->
    <div
      v-if="showLanguageChooser"
      class="tw-min-w-[46px]"
    >
      <LanguageSwitch />
    </div>

    <span
      v-if="showLanguageChooser"
      class="tw-w-px tw-h-6 tw-border-r tw-border-solid tw-border-[var(--border-gray)]"
    />

    <!-- Dark mode -->
    <div
      v-if="showDarkMode"
      class="tw-min-w-[46px] tw-flex tw-items-center tw-justify-center"
    >
      <ToggleDarkMode />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

import LanguageSwitch from '~/components/menu/LanguageSwitch.vue'
import ToggleDarkMode from '~/components/menu/ToggleDarkMode.vue'

import visibleComponents from '~/enums/visibleComponents'
import { useProfileStore } from '~/stores/profile'
import { useAuthStore } from '~/stores/auth'

/* === STORES === */
const profileStore = useProfileStore()
const authStore = useAuthStore()


// computed
const showLanguageChooser = computed(() => {
  return profileStore.showComponents?.[visibleComponents.LANGUAGES]
})
const isAuthenticated = computed(() => {
  return authStore.isAuthenticated
})

const showDarkMode = computed(() => {
  return profileStore.showComponents?.[visibleComponents.DARK_MODE]
})

</script>
