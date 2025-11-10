<template>
  <v-card v-bind="cardProps" :class="klass">
    <v-card-actions class="!tw-p-0 !tw-gap-0" :class="{ '!tw-pr-1': !disabledExpand }">
      <slot name="header" />
      <v-btn
        v-if="!disabledExpand"
        icon
        aria-label="expandable-card-chevron"
        @click="onToggle"
        class="!tw-ml-auto"
      >
        <slot v-if="expand" name="chevronUp">
          <v-icon icon="mdi-chevron-up" />
        </slot>
        <slot v-else name="chevronDown">
          <v-icon icon="mdi-chevron-down" />
        </slot>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <v-card-text v-show="expand" class="!tw-p-0">
        <slot name="body" />
      </v-card-text>
    </v-expand-transition>
  </v-card>
</template>

<script setup>
import { ref, watch, defineEmits, defineProps } from 'vue'

// ✅ props
const props = defineProps({
  color: { type: String, default: '' },
  disabledExpand: { type: Boolean, default: false },
  expandByDefault: { type: Boolean, default: true },
  outlined: { type: Boolean, default: false },
  flat: { type: Boolean, default: false },
  klass: { type: String, default: '' }
})

// ✅ emits
const emit = defineEmits(['onToggle'])

// ✅ reactive state
const expand = ref(props.expandByDefault)

// ✅ computed cardProps
const cardProps = computed(() => ({
  color: props.color,
  flat: props.flat,
  outlined: props.outlined
}))

// ✅ watchers
watch(
  () => props.expandByDefault,
  (val) => {
    expand.value = val
    emit('onToggle', expand.value)
  }
)

// ✅ methods
function onToggle() {
  expand.value = !expand.value
  emit('onToggle', expand.value)
}
</script>
