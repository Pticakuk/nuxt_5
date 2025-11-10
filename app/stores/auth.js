import { defineStore } from 'pinia'
import api from '~/api/index'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    accessToken: null,
    refreshToken: null,
    user: null,
    authError: null,
  }),

  getters: {
    isAuthenticated: (state) => !!state.accessToken,
  },

  actions: {
    async login(username, password) {
      try {
        const data = await api.authenticateUser({ username, password })
        this.accessToken = data.access_token
        this.refreshToken = data.refresh_token
        this.authError = null

        await this.getUser()
        return true
      } catch (err) {
        console.error('Login error', err)
        this.authError =
          err?.data?.error_description ||
          err?.response?._data?.error_description ||
          'Authentication failed'
        return false
      }
    },

    async getUser(id = 'me', view = 'WORKSPACE_ACCESS') {
      if (!this.accessToken) return null
      try {
        const user = await api.getUser(this.accessToken, id, view)
        if (!user.roles) user.roles = []
        this.user = user
        return user
      } catch (err) {
        console.error('Get user error', err)
        return null
      }
    },

    logout() {
      this.accessToken = null
      this.refreshToken = null
      this.user = null
      this.authError = null
    },

    async tryRestoreSession() {
      if (this.accessToken && !this.user) {
        await this.getUser()
      }
    },
  },

  persist: {
    paths: ['accessToken', 'refreshToken', 'user'],
  },
})
