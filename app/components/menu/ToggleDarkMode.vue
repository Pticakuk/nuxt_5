<template>
  <v-btn
    icon
    color="primary"
    size="small"
    class="w-language-switch__current !tw-w-auto !tw-min-w-[28px] !tw-px-1 !tw-rounded-[1rem]"
    :title="$t('buttons.toggleDark')"
    @click="toggleDarkMode"
  >
    <v-icon size="18" class="tw-transform">
      mdi-theme-light-dark
    </v-icon>
  </v-btn>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useTheme } from 'vuetify'

const theme = useTheme()

const isDark = computed(() => theme.global.current.value.dark)


function toggleDarkMode() {
  theme.global.name.value = isDark.value ? 'light' : 'dark'
  applyBodyClass()
}

function applyBodyClass() {
  document.body.classList.toggle('dark-mode', isDark.value)
}

onMounted(() => {
  applyBodyClass()
})
</script>
