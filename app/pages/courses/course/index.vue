<template>
  <div class="ma-4">
    <v-card>
      <v-card-title>
        Nuxt + Vuetify + Runtime Template
      </v-card-title>
      <v-card-text>
        This is a standard Vuetify card. Below is content from a runtime compiled template.
      </v-card-text>
      <v-divider></v-divider>
      <RuntimeTemplate :template="dynamicTemplate" />
    </v-card>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const dynamicTemplate = ref(`
  <div class="pa-4">
    <v-alert
      type="success"
      class="mb-4"
    >
      This alert is a Vuetify component, rendered dynamically!
    </v-alert>
    <v-btn
      color="secondary"
      prepend-icon="mdi-check"
      @click="alert('Hello from a dynamically rendered button!')"
    >
      Click Me
    </v-btn>
  </div>
`);
</script>
