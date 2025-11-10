// stores/profile.js
import { defineStore } from 'pinia'
import visibleComponents from '~/enums/visibleComponents'
import api from '~/api/index'

// Function of converting the old format to the new Vuetify 3
function normalizeTheme(oldTheme) {
  const newTheme = {}

  for (const [mode, values] of Object.entries(oldTheme.themes || {})) {
    newTheme[mode] = {
      colors: { ...values }
    }
  }

  return {
    dark: oldTheme.dark,
    themes: newTheme
  }
}

export const useProfileStore = defineStore('profile', {
  state: () => ({
    profile: null,
    hostname: null,
    workspace: null,
    itemCardStyling: {}
  }),

  getters: {
    showComponents: (state) => {
      const hide = state.profile?.hide || []

      return Object.entries(visibleComponents).reduce((result, [key, value]) => {
        result[value] = !hide.includes(value)
        return result
      }, {})
    }
  },

  actions: {
    async initProfile(theme) {
      const config = useRuntimeConfig()
      const host = config.public.isStaging ? 'navigator.aarp.org' : 'navigator.aarp.org'

      const workspace = await api.getPublicWorkspaces(host)
      this.workspace = workspace
      this.hostname = workspace.host

      const profileName = host.replace(/\./g, '_')
      const profile = await api.getProfile({ name: profileName }, workspace)
      this.profile = profile
      this.itemCardStyling = profile?.style?.itemCards || {}

      // --- Apply theme if available ---
      if (profile?.theme) {

        const normalized = normalizeTheme(profile.theme)

        // set active theme (dark / light)
        theme.change(normalized.dark ? 'dark' : 'light')

        // apply colors
        if (normalized.themes.light) {
          theme.themes.value.light.colors = normalized.themes.light.colors
        }
        if (normalized.themes.dark) {
          theme.themes.value.dark.colors = normalized.themes.dark.colors
        }
      }

      return profile
    },
  },
})
