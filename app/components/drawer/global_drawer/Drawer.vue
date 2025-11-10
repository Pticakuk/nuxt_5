<template>
  <div
    class="global-drawer"
    :class="{ 'tw-flex-shrink-0': userDrawerOpen }"
  >
    <UserDrawer :current-course="currentCourse" />
  </div>
</template>

<script setup>
// Temporary imports
import { computed } from 'vue'
import { useUiStore } from '~/stores/ui'
import UserDrawer from '~/components/drawer/global_drawer/UserDrawer.vue'

// Props
defineProps({
  currentCourse: {
    type: Object,
    default: () => ({})
  }
})
const uiStore = useUiStore()

const userDrawerOpen = computed(() => uiStore.userDrawerOpen)
</script>

