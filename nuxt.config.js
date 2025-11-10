// nuxt.config.js
import { fileURLToPath } from 'node:url'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import viteCompression from 'vite-plugin-compression'

const currentEnv = process.env.SMONLEAP_ENVIRONMENT || 'dev'

export default defineNuxtConfig({
  pages: true,
  compatibilityDate: '2025-07-15',
  
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      link: [],
      script: [
        { 
          src: 'https://code.jquery.com/jquery-3.7.1.min.js', 
          defer: true 
        }
      ]
    }
  },

  css: [
    '~/assets/style/default-styles/app.css',
    '~/assets/style/default-styles/styles.scss',
    '@mdi/font/css/materialdesignicons.min.css'
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  devtools: { enabled: true },

  build: {
    transpile: ['vuetify'],
  },

  alias: {
    '@root': fileURLToPath(new URL('./', import.meta.url))
  },

  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/i18n',
    '@vite-pwa/nuxt',
    '@nuxtjs/critters'
  ],

  critters: {
    config: {
      preload: 'swap',
    },
  },

  i18n: {
    locales: [
      { code: 'en_gb', name: 'en (UK)', icon: 'langEnGb', iso: 'en_GB' },
      { code: 'en', name: 'en (US)', icon: 'langEn', iso: 'en_US' },
      { code: 'uk', name: 'ua', icon: 'langUa', iso: 'uk_UA' },
      { code: 'pt', name: 'pt', icon: 'langPt', iso: 'pt_PT' },
      { code: 'es', name: 'es', icon: 'langEs', iso: 'es_ES' },
      { code: 'de', name: 'de', icon: 'langDe', iso: 'de_DE' },
      { code: 'ru', name: 'ru', icon: 'langRu', iso: 'ru_RU' },
      { code: 'pl', name: 'pl', icon: 'langPl', iso: 'pl_PL' },
      { code: 'fr', name: 'fr', iso: 'fr_FR' },
      { code: 'ar', name: 'ar', iso: 'ar_AE' }
    ],
    defaultLocale: 'en',
    lazy: true,
  },

  experimental: {
    inlineSSRStyles: true
  },

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
    plugins: [viteCompression()],
    build: {
      chunkSizeWarningLimit: 1500,
      rollupOptions: {
        output: {
          manualChunks: {
            'vuetify': ['vuetify'],
            'vendor-pinia': ['pinia'],
            'vendor-i18n': ['vue-i18n']
          }
        }
      }
    }
  },

  runtimeConfig: {
    apiSecret: process.env.API_SECRET || '',
    public: {
      apiUrl: process.env.API_URL || 'https://staging.theworkademy.com',
      isStaging: process.env.IS_STAGING === 'true',
    },
  },

  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ['VRuntimeTemplate'].includes(tag),
    },
  },

  hooks: {
    'vite:extendConfig': (config, { isClient, isServer }) => {
      if (isClient) {
        config.resolve.alias.vue = 'vue/dist/vue.esm-bundler'
      }
    },
  },

  nitro: {
    logLevel: 'error',
    compressPublicAssets: true
  },

  vuetify: {
    treeShake: true
  },

  pwa: {
    manifest: {
      name: 'AARP Academy',
      short_name: 'AARP'
    },
    workbox: {
      navigateFallback: '/'
    }
  }
})