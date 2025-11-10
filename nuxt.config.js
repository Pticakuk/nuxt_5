// nuxt.config.js
import { fileURLToPath } from 'node:url'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import configs from './config'

const currentEnv = process.env.SMONLEAP_ENVIRONMENT || 'dev'

export default defineNuxtConfig({
  pages: true,
  compatibilityDate: '2025-07-15',
  app: {
    head: {
      script: [
        { src: 'https://code.jquery.com/jquery-3.7.1.min.js', defer: true }
      ]
    }
  },

  css: [
    '~/assets/style/default-styles/app.css',
    '~/assets/style/default-styles/styles.scss'
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
    '@nuxtjs/i18n'
  ],
  i18n: {
    locales: [{
      code: 'en_gb',
      name: 'en (UK)',
      icon: 'langEnGb',
      iso: 'en_GB'
    }, {
      code: 'en',
      name: 'en (US)',
      icon: 'langEn',
      iso: 'en_US'
    }, {
      code: 'uk',
      name: 'ua',
      icon: 'langUa',
      iso: 'uk_UA'
    }, {
      code: 'pt',
      name: 'pt',
      icon: 'langPt',
      iso: 'pt_PT'
    }, {
      code: 'es',
      name: 'es',
      icon: 'langEs',
      iso: 'es_ES'
    }, {
      code: 'de',
      name: 'de',
      icon: 'langDe',
      iso: 'de_DE'
    }, {
      code: 'ru',
      name: 'ru',
      icon: 'langRu',
      iso: 'ru_RU'
    },
    {
      code: 'pl',
      name: 'pl',
      icon: 'langPl',
      iso: 'pl_PL'
    },
    {
      code: 'fr',
      name: 'fr',
      iso: 'fr_FR'
    },
    {
      code: 'ar',
      name: 'ar',
      iso: 'ar_AE'
    }],
    defaultLocale: 'en',
    lazy: true,
  },

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
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
        config.resolve.alias.vue = 'vue/dist/vue.esm-bundler';
      }
    },
  },  
  nitro: {
    logLevel: 'error'
  },
  vuetify: {
    treeShake: true
  }
})
