<template>
  <v-btn
    :to="to || undefined"
    :href="href || undefined"
    :target="target || undefined"
    :min-width="minWidth"
    :max-width="maxWidth"
    :block="block && !minWidth"
    :size="btnSize"
    variant="text"
    :elevation="elevation || indicationElevation"
    :rounded="rounded || indicationRounded ? 'lg' : undefined"
    :class="buttonClasses"
    :style="buttonStyle"
    :color="color"
    :disabled="disabled"
    :loading="loading"
    @click="onClick"
  >
    <!-- Left icon -->
    <v-icon
      v-if="icon && iconSide === 'left'"
      :size="iconSize"
      start
    >
      {{ icon }}
    </v-icon>

    <!-- Button text -->
    <span
      class="!tw-whitespace-normal tw-text-center"
      :class="{ 'tw-normal-case': true }"
    >
      {{ buttonText }}
    </span>

    <!-- Right icon -->
    <v-icon
      v-if="icon && iconSide === 'right'"
      :size="iconSize"
      end
    >
      {{ icon }}
    </v-icon>
  </v-btn>
</template>

<script setup>
import { computed } from 'vue'

// === props ===
const props = defineProps({
  buttonText: { type: String, default: '' },
  icon: { type: String, default: '' },
  iconSide: { type: String, default: 'left' },
  minWidth: { type: String, default: '' },
  maxWidth: { type: String, default: '100%' },
  block: { type: Boolean, default: true },
  rounded: { type: Boolean, default: false },
  outlined: { type: Boolean, default: false },
  tile: { type: Boolean, default: false },
  elevation: { type: [String, Number], default: 0 },
  uppercase: { type: Boolean, default: false },
  classes: { type: String, default: '' },
  disabled: { type: Boolean, default: false },
  loading: { type: Boolean, default: false },
  to: { type: String, default: '' },
  href: { type: String, default: '' },
  target: { type: String, default: '' },
  color: { type: String, default: 'primary' }
})

// === placeholder for indication styling (in old project from Vuex) ===
const indicationButtonStyling = {} // TODO: inject via Pinia/global store

// Styling computed from theme
const indicationRounded = computed(() => indicationButtonStyling?.rounded || false)
const indicationOutlined = computed(() => indicationButtonStyling?.outlined || false)
const indicationTile = computed(() => indicationButtonStyling?.tile || false)
const indicationElevation = computed(() => indicationButtonStyling?.elevation || 0)

// Custom background style (uses helper like getBackgroundBasedOnColor)
function getBackgroundBasedOnColor(color) {
  // ⚠️ Implement or import the real function
  return {}
}
const buttonStyle = computed(() => getBackgroundBasedOnColor(props.color))

// Classes: merge from styling + color text + custom classes
const buttonClasses = computed(() => {
  let classes = indicationButtonStyling.classes || ''
  const colorText = `${props.color}--text !tw-border-[currentColor]`
  if (classes) classes += ' '
  classes += `${colorText} text-none`
  if (props.classes) classes += ' ' + props.classes
  return classes
})

// Button size mapping (Vuetify 3 uses size prop)
const btnSize = computed(() => {
  if (props.xSmall) return 'x-small'
  if (props.small) return 'small'
  if (props.large) return 'large'
  if (props.xLarge) return 'x-large'
  return 'default'
})

// Icon size depending on button size
const iconSize = computed(() => {
  if (props.xSmall) return '16'
  if (props.small) return '18'
  if (props.large) return '24'
  if (props.xLarge) return '28'
  return '20'
})

// Click handler
const emit = defineEmits(['click'])
function onClick(event) {
  if (!props.to && !props.href) {
    event.preventDefault()
  }
  emit('click')
}
</script>
