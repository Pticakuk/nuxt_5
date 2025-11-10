<!-- components/FooterComponent.vue -->
<template>
  <v-footer
    class="main-footer !tw-p-0"
    :class="{'!tw-bg-transparent': vuetifyTheme.global.current.value.dark}"
  >
    <v-container class="footer-container a-container">
      <v-divider class="!-tw-mt-px" />
      <div class="footer-contact-us tw-flex tw-justify-between tw-items-center tw-py-16 sm:tw-flex-col sm:tw-justify-start sm:tw-text-center sm:tw-py-5 sm:tw-pb-4">
        <!-- DISCLAIMER -->
        <div class="tw-max-w-[20rem] sm:tw-mb-2">
          <h2
            class="course-module__footer-title !tw-text-2xl !tw-font-normal tw-text-left sm:!tw-text-center sm:!tw-text-lg sm:!tw-font-medium"
          >
            <span>{{ $t('footer.contactUsTitle') }}</span>
          </h2>
          <div
            class="tw-text-base grey--text text--darken-2"
            v-html="$t('footer.contactUsText')"
          />
        </div>

        <!-- SOCIAL BUTTONS AND SUPPORT EMAIL -->
        <div class="footer-support sm:tw-flex sm:tw-flex-col sm:tw-items-center sm:tw-gap-4">
          <div class="tw-mb-3 tw-flex tw-justify-end tw-gap-2 tw-items-center sm:tw-order-2 sm:tw-justify-center sm:tw-mb-0">
            <v-btn
              v-for="icon in socials"
              :key="icon.url"
              :href="icon.url"
              target="_blank"
              color="primary"
              variant="outlined"        
              :icon="true"                         
              class="footer-socials !tw-rounded-md sm:!tw-border-0"
              :aria-label="icon.label || icon.icon"
            >
              <v-icon
                :icon="icon.icon"       
                :size="$vuetify.display.smAndUp ? 20 : 24"
              />
            </v-btn>
          </div>
          <div
            v-if="supportEmail"
            class="footer-support-email tw-flex tw-justify-end sm:tw-order-1"
          >
            <BaseButton
              :href="supportEmailLink"
              :block="false"
              outlined
              class="!tw-rounded-md before:tw-hidden sm:!tw-border-0"
              :button-text="supportEmail"
            />
          </div>
        </div>
      </div>

      <v-divider />

      <!-- COPYRIGHT / PRIVACY / TAC -->
      <div class="footer-copyright tw-py-4 tw-text-sm tw-text-center grey--text text--darken-2">
        <p
          v-if="profile?.copyrightIsLink"
          class="copyright !tw-m-0"
        >
          &copy; {{ new Date().getFullYear() }}
          <a
            :href="profileCompanyUrl || companyUrl"
            target="_blank"
            class="company-link"
          >
            {{ profileCompany || company }}
         </a>
        </p>
        <p
          v-else
          class="copyright !tw-m-0"
        >
          &copy; {{ new Date().getFullYear() }} <span>{{ profileCompany || company }}</span>
        </p>

        <p
          v-if="profileCompanyUrl && profileCompanyUrl !== companyUrl"
          class="poweredBy !tw-m-0"
          v-html="$t('footer.poweredBy', { companyUrl, company })"
        />

        <div
          v-if="privacyUrl || tacUrl"
          class="tw-mt-2 tw-flex tw-justify-center tw-items-center tw-gap-2"
        >
          <a
            v-if="privacyUrl"
            :href="privacyUrl || $t('footer.privacyUrl')"
            target="_blank"
          >
            {{ $t('footer.privacyLabel') }}
          </a>
          <span v-if="privacyUrl" class="primary--text">|</span>
          <a
            :href="tacUrl || $t('footer.tacUrl')"
            target="_blank"
          >
            {{ $t('footer.tacLabel') }}
          </a>
        </div>
      </div>
    </v-container>
  </v-footer>
</template>

<script setup>
import { computed } from 'vue'
import { useDisplay, useTheme } from 'vuetify'
import { useProfileStore } from '~/stores/profile'
import WORKADEMY from '~/enums/workademy'
import BaseButton from '~/components/common/buttons/BaseButton.vue'

// Vuetify utilities
const vuetifyTheme = useTheme()
const $vuetify = { display: useDisplay() }

// Pinia store
const profileStore = useProfileStore()
const profile = computed(() => profileStore.profile)

// Defaults (if not in profile)
const companyUrl = WORKADEMY.LANDING_PAGE_URL
const company = WORKADEMY.NAME

// Social icons fallback
const defaultSocials = [
  { icon: 'mdi-linkedin', url: 'https://www.linkedin.com/company/19140479' },
  { icon: 'mdi-facebook', url: 'https://www.facebook.com/workademy/' },
  { icon: 'mdi-instagram', url: 'https://www.instagram.com/workademy/' }
]

// Computed helpers
const profileCompanyUrl = computed(() => profile.value?.companyUrl)
const profileCompany = computed(() => profile.value?.company)
const socials = computed(() => profile.value?.socials || defaultSocials)
const supportEmail = computed(() => profile.value?.supportEmail)
const supportEmailLink = computed(() => supportEmail.value ? `mailto:${supportEmail.value}` : '')

// i18n-specific footer links
const { locale } = useI18n()
const i18nFooter = computed(() => profile.value?.i18n?.[locale.value]?.footer || {})

const privacyUrl = computed(() => i18nFooter.value?.privacyUrl || profile.value?.privacy)
const tacUrl = computed(() => i18nFooter.value?.tacUrl || profile.value?.tac)
</script>

<style scoped lang="scss">
.copyright {
  font-size: 90%;
}
.poweredBy {
  font-size: 80%;
}
.company-link {
  text-decoration: none;
  border-bottom: 1px solid;
  font-weight: bold;
}
</style>
