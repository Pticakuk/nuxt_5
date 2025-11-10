import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { defineNuxtPlugin } from '#app';
import '@mdi/font/css/materialdesignicons.css'; // Ensure icons are included

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
  });

  // Use the Vuetify instance with the Vue app created by Nuxt
  nuxtApp.vueApp.use(vuetify);
});