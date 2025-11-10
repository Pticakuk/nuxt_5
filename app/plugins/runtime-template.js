
import { defineNuxtPlugin } from '#app'
import {
  NuxtLink,
  NuxtPage,
  NuxtLayout,
  ClientOnly,
  NuxtErrorBoundary,
  DevOnly,
  NuxtImg,
  NuxtPicture
} from '#components'
import RuntimeTemplate from 'vue3-runtime-template'

export default defineNuxtPlugin((nuxtApp) => {
  // Register core Nuxt components so they work inside RuntimeTemplate
  const nuxtComponents = {
    NuxtLink,
    NuxtPage,
    NuxtLayout,
    ClientOnly,
    NuxtErrorBoundary,
    DevOnly,
    NuxtImg,
    NuxtPicture
  }

  Object.entries(nuxtComponents).forEach(([name, comp]) => {
    if (comp) {
      nuxtApp.vueApp.component(name, comp)
    }
  })

  // Register RuntimeTemplate globally
  nuxtApp.vueApp.component('RuntimeTemplate', RuntimeTemplate)

  // === Global cookie helpers ===
  const hasCookie = (name) => {
    return document.cookie.includes(name)
  }

  const getCookie = (name) => {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'))
    return match ? decodeURIComponent(match[2]) : ''
  }

  const getCookieParam = (name, param) => {
    const raw = getCookie(name)
    if (!raw) return null
    const params = new URLSearchParams(raw)
    return params.get(param)
  }

  // Provide them globally (accessible via useNuxtApp())
  nuxtApp.provide('hasCookie', hasCookie)
  nuxtApp.provide('getCookie', getCookie)
  nuxtApp.provide('getCookieParam', getCookieParam)
})
