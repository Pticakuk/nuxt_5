<template>
  <v-breadcrumbs
    v-if="items"
    :items="items"
    class="!tw-p-0 !tw-text-base"
  />
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    default: () => []
  },
  backUrl: {
    type: String,
    default: ''
  }
})
</script>

<style lang="scss">
@media (max-width: 959px) {
  .v-breadcrumbs {
    li {
      max-width: 33%;
      &::after {
        content: '/';
        padding: 0 4px;
        opacity: 0.5;
      }
      &:last-of-type {
        &::after {
          display: none;
        }
      }
      a {
        font-size: 0.875rem;
        white-space: nowrap;
        overflow: hidden;
        display: inline-block;
        text-overflow: ellipsis;
      }
    }
    .v-breadcrumbs__divider {
      display: none;
    }
  }
}
</style>