<template>
  <v-card
    flat
    class="tw-overflow-hidden"
    :class="{
      '!tw-rounded-md': !itemCardStyling.rounded && !itemCardStyling.tile,
      '!tw-rounded-2xl': itemCardStyling.rounded && !itemCardStyling.tile,
      '!tw-rounded-none': itemCardStyling.tile
    }"
    :style="{ background: !isDark ? backgroundMainNotTransparent : '' }"
  >
    <slot />
  </v-card>
</template>

<script setup>
import { useProfileStore } from '~/stores/profile'
import { useTheme } from 'vuetify'
import { useProfileStyle } from '~/composables/useProfileStyle'

const { backgroundMainNotTransparent } = useProfileStyle()

const profileStore = useProfileStore()
const { global: theme } = useTheme()
// === style helpers ===
const isDark = computed(() => theme.current.value.dark)
const itemCardStyling = computed(() => {
  return profileStore.profile?.style?.itemCards || {}
})

</script>
