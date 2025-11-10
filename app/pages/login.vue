<template>
    <div
    class="signin-main tw-min-w-[600px]"
    style="min-height: calc(100vh - 340px)"
  >
    <v-container
      class="a-container !tw-flex !tw-py-10 !tw-justify-center"
    >
      <v-card
        class="tw-w-full !tw-h-full !tw-p-0 !tw-shadow-md !tw-rounded-md"
        :class="'login--card'"
        max-width="600px"
        outlined
      >
        <v-card-title
          class="!tw-px-6 !tw-py-4 !tw-text-2xl !tw-font-normal text-left sm:!tw-text-lg sm:!tw-px-4 tw-flex !tw-flex-nowrap tw-items-center"
        >
          {{ $t('auth.loginTitle') }}
        </v-card-title>
        <v-card-subtitle
          class="!-tw-mt-1 !tw-px-6 sm:!tw-px-4 grey--text text--darken-1"
        >
          <span>{{ $t('auth.loginDisclaimer') }}</span>
        </v-card-subtitle>
        <v-divider />
        <div class="tw-p-6 md:tw-px-4">
          <h4 class="login-with-email-title !tw-text-base !tw-font-semibold !tw-mb-3">
            {{ $t('auth.loginWithEmail') }}
          </h4>
          <div class="!tw-px-0 !tw-py-0">
            <v-form @submit.prevent="submitForm">
              <v-text-field
                v-model="email"
                :label="$t('auth.emailLabel')"
                autocomplete="email"
                autofocus
                required
              />

              <v-text-field
                v-model="password"
                :label="$t('auth.enterPassword')"
                :type="showPassword ? 'text' : 'password'"
                autocomplete="current-password"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
              />

              <v-btn
                block
                color="primary"
                class="!tw-mt-10 !tw-rounded-md"
                type="submit"
                :loading="loading"
                :disabled="!email || !password"
              >
                {{ $t('buttons.login') }}
              </v-btn>

              <p v-if="auth.authError" class="tw-text-red-500 tw-mt-4 tw-text-sm">
                {{ auth.authError }}
              </p>
            </v-form>
          </div>
        </div>
      </v-card>
    </v-container>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '~/stores/auth'

const auth = useAuthStore()
const email = ref('')
const password = ref('')
const showPassword = ref(false)
const loading = ref(false)

async function submitForm() {
  loading.value = true
  const success = await auth.login(email.value, password.value)
  loading.value = false

  if (success) {
    console.log('✅ Logged in as:', auth.user)
    navigateTo('/courses/course/1148')
  } else {
    console.error('❌ Error:', auth.authError)
  }
}
</script>
