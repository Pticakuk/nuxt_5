// stores/ui.js
import { defineStore } from 'pinia'

export const useUiStore = defineStore('ui', {
  state: () => ({
    userDrawerOpen: false
  }),

  actions: {
    toggleUserDrawer() {
      this.userDrawerOpen = !this.userDrawerOpen
    },
    setUserDrawer(value) {
      this.userDrawerOpen = value
    }
  }
})