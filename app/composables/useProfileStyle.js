import { computed } from 'vue'
import { useTheme } from 'vuetify'

/**
 * Utility — adds alpha (opacity) to hex color
 * e.g. addOpacityToColor('#8015e8', 0.06) → rgba(128,21,232,0.06)
 */
function addOpacityToColor(hex, opacity) {
  if (!hex) return ''
  const cleanHex = hex.replace('#', '')

  const bigint = parseInt(cleanHex, 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255

  return `rgba(${r}, ${g}, ${b}, ${opacity})`
}

export function useProfileStyle() {
  const theme = useTheme()

  // Current primary color from Vuetify theme
  const primaryColor = computed(() => theme.global.current.value.colors.primary)

  // --- Transparent background variant ---
  const backgroundMain = computed(() => ({
    backgroundColor: addOpacityToColor(primaryColor.value, 0.06),
  }))

  // --- Gradient version with fallback white background ---
  const backgroundMainNotTransparent = computed(() => {
    const color = addOpacityToColor(primaryColor.value, 0.06)
    return `linear-gradient(${color}, ${color}), #fff`
  })

  return {
    backgroundMain,
    backgroundMainNotTransparent,
  }
}
