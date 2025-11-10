import { useProfileStore } from '~/stores/profile'

export function useProfile() {
  const profileStore = useProfileStore()

  // === methods ===
  async function initAppProfile(theme) {
    await profileStore.initProfile(theme)
    return profileStore.profile
  }

  return {
    initAppProfile,
  }
}
