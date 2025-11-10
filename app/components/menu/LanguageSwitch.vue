<template>
  <div
    v-if="currentLanguage"
    class="w-language-switch tw-min-w-12 tw-h-12 tw-flex tw-items-center tw-justify-center tw-cursor-pointer tw-relative tw-px-1"
    :class="{ 'w-language-switch--open': showList }"
    v-click-outside="closeLanguagesList"
    @click="toggleLanguagesList"
  >
    <!-- current language button -->
    <v-btn
      icon
      color="primary"
      size="small"
      class="w-language-switch__current !tw-w-auto !tw-min-w-[28px] !tw-px-1 !tw-rounded-[1rem]"
    >
      <span
        :title="currentLanguage.code"
        class="tw-text-xs tw-font-medium tw-uppercase primary--text"
      >
        {{ $t(`header.menu.languagesShort.${currentLanguage.code}`) }}
      </span>
    </v-btn>

    <!-- language list -->
    <v-list
      class="w-language-switch__list tw-min-w-[200px] !tw-absolute !tw-top-2.5 !tw-mt-12
              !tw-left-auto !-tw-right-4 tw-overflow-auto tw-opacity-0
              tw-transition tw-duration-300 tw-z-10 !tw-shadow-md !tw-p-0"
      :class="{
        'tw-invisible': !showList,
        'tw-visible tw-opacity-100': showList,
        '!tw-rounded-md': !itemCardStyling.rounded && !itemCardStyling.tile,
        '!tw-rounded-2xl': itemCardStyling.rounded && !itemCardStyling.tile,
        '!tw-rounded-none': itemCardStyling.tile
      }"
      :style="{ background: !isDark ? backgroundMainNotTransparent : '' }"
    >
      <v-list-item
        v-for="(language, index) in allLanguages"
        :key="index"
        class="w-language-switch__list-item !tw-p-0 tw-border-[var(--border-gray)] !tw-border-b tw-border-solid last-of-type:!tw-bottom-0"
      >
        <v-btn
          text
          block
          class="ma-0 !tw-p-3 tw-min-h-[56px] text-none text-left !tw-rounded-none before:!tw-hidden !tw-justify-start"
          :class="{ 'before:tw-hidden': language.code === currentLanguage.code }"
          :title="language.code"
          :to="switchLocalePath(language.code)"
          :style="language.code === currentLanguage.code ? backgroundMain : ''"
        >
          <span class="!tw-text-base !tw-font-normal !tw-leading-[25px]">
            {{ $t(`header.menu.languages.${language.code}`) }}
          </span>
        </v-btn>
      </v-list-item>
    </v-list>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useProfileStore } from '~/stores/profile'
import { useTheme } from 'vuetify'
import { useProfileStyle } from '~/composables/useProfileStyle'

const { backgroundMain, backgroundMainNotTransparent } = useProfileStyle()

const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()




const profileStore = useProfileStore()
const { global: theme } = useTheme()

// data
const showList = ref(false)

// === style helpers ===
const isDark = computed(() => theme.current.value.dark)

// === computed ===
const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})
const currentLanguage = computed(() =>
  locales.value.find(lang => lang.code === locale.value)
)
const allLanguages = computed(() => {
  const profileLanguages = profileStore.profile?.languages || []
  if (profileLanguages.length === 0) {
    return availableLocales.value
  }
  return availableLocales.value.filter(i => profileLanguages.includes(i.code))
})

const itemCardStyling = computed(() => {
  return profileStore.profile?.style?.itemCards || {}
})

// === methods ===
function closeLanguagesList() {
  showList.value = false
}

function toggleLanguagesList() {
  showList.value = !showList.value
}
</script>
