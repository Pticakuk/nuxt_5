<template>
  <ClientOnly>
    <RuntimeTemplate
      :template="template"
      :template-props="mergedProps"
    />
  </ClientOnly>
</template>

<script setup>
import { computed } from 'vue'
const { urls  } = useUrls()

const props = defineProps({
  template: {
    type: String,
    required: true
  },
  extraProps: {
    type: Object,
    default: () => ({})
  }
})


// === Cookie utils ===
function hasCookie(name) {
  return !!useCookie(name)?.value
}

function getCookie(name) {
  return useCookie(name)?.value || ''
}

function getCookieParam(name, param) {
  const cookieValue = getCookie(name)
  if (!cookieValue) return null
  const params = new URLSearchParams(cookieValue)
  return params?.get(param)
}

// Default runtime props
const baseProps = {
  hasCookie,
  getCookie,
  getCookieParam,
  urls: urls?.value || {},
}

// Merge user-supplied props/components
const mergedProps = computed(() => ({
  ...baseProps,
  ...props.extraProps
}))

</script>
