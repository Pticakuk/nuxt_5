<template>
  <v-btn
    :to="to || undefined"
    :href="href || undefined"
    :target="target || undefined"
    :min-width="minWidth"
    :max-width="maxWidth"
    :block="block && !minWidth"
    :size="btnSize"
    :variant="btnVariant"
    :elevation="elevation || buttonsElevation"
    :rounded="rounded || buttonsRounded ? 'lg' : undefined"
    :class="buttonsClasses"
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
      :class="{ 'tw-normal-case': !uppercase }"
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
  to: { type: [String, Object], default: () => ({}) },
  href: { type: String, default: '' }, // external links
  target: { type: String, default: '' },
  color: { type: String, default: 'primary' },
  text: { type: Boolean, default: false }, // replaces old "text" button variant
  xSmall: { type: Boolean, default: false },
  small: { type: Boolean, default: false },
  large: { type: Boolean, default: false },
  xLarge: { type: Boolean, default: false },
  stop: { type: Boolean, default: true } // stop event propagation
})

// === Styling config (replace with Pinia/global injection if needed) ===
const buttonStyling = {} // placeholder, in old project it came from Vuex

// Computed styling from global theme
const buttonsRounded = computed(() => buttonStyling?.rounded || false)
const buttonsElevation = computed(() => buttonStyling?.elevation || 0)
const buttonsClasses = computed(() => buttonStyling?.classes || '')

// Button variant (Vuetify 3 uses "variant" prop)
const btnVariant = computed(() => {
  if (props.text) return 'text'
  if (props.outlined || buttonStyling?.outlined) return 'outlined'
  return 'flat' // default style in Vuetify 3
})

// Button size mapping (Vuetify 3 uses "size" prop instead of multiple flags)
const btnSize = computed(() => {
  if (props.xSmall) return 'x-small'
  if (props.small) return 'small'
  if (props.large) return 'large'
  if (props.xLarge) return 'x-large'
  return 'default'
})

// Icon size adjustment depending on button size
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
  if (props.stop) event.stopPropagation()
  if (!props.to && !props.href) {
    // prevent navigation if no to/href provided
    event.preventDefault()
  }
  emit('click')
}
</script>
