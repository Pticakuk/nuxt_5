<template>
  <figure class="avatar" :style="frameStyle">
    <!-- Изображение или первая буква -->
    <div
      class="avatar__image-wrap"
      :style="avatarStyle"
      :class="{ grayscale: disabled }"
    >
      <v-img
        v-if="imgSrc"
        :src="imgSrc"
        :alt="title"
        aspect-ratio="1"
        class="avatar__image"
        :class="{ grayscale: disabled }"
      />
      <div
        v-else
        class="tw-flex-shrink-0 tw-w-full tw-h-full tw-rounded-full tw-flex tw-items-center tw-justify-center tw-bg-[rgb(var(--v-theme-primary))]"
      >
        <span
          class="tw-uppercase tw-font-medium tw-text-white"
          :style="{ fontSize: firstLetterSize }"
        >
          {{ firstLetterOfName }}
        </span>
      </div>
    </div>

    <!-- Рамка -->
    <div v-if="frameSrc" class="avatar__badge">
      <v-img
        :src="frameSrc"
        :alt="title"
        aspect-ratio="1"
        class="avatar__badge-image"
        :class="{ grayscale: disabled }"
      />
    </div>

    <!-- Подпись -->
    <div v-if="title" class="avatar__caption caption" :style="captionStyle">
      {{ title }}
    </div>
  </figure>
</template>

<script setup>
import { computed } from 'vue'
import { useAuthStore } from '~/stores/auth'

// ✅ Props
const props = defineProps({
  imgSrc: { type: String, default: '' },
  title: { type: String, default: '' },
  frameSrc: { type: String, default: '' },
  width: { type: Number, default: 40 },
  disabled: { type: Boolean, default: false },
  userName: { type: String, default: '' }
})

// ✅ Store
const authStore = useAuthStore()

// ✅ Computed
const imageWidth = computed(() =>
  props.width ? `${0.8 * props.width}px` : undefined
)
const frameWidth = computed(() =>
  props.width ? `${props.width}px` : undefined
)

const frameStyle = computed(() =>
  props.width ? { width: frameWidth.value, height: frameWidth.value } : {}
)

const avatarStyle = computed(() =>
  props.width ? { width: imageWidth.value, height: imageWidth.value } : {}
)

const captionStyle = computed(() =>
  props.width ? { top: frameWidth.value } : {}
)

const firstLetterOfName = computed(() => {
  const name = props.userName || authStore.user?.name
  return name ? name.charAt(0).toUpperCase() : ''
})

const firstLetterSize = computed(() => `${Number(props.width) / 50}rem`)
</script>

<style scoped lang="scss">
.avatar {
  position: relative;
  width: 120px;
  height: 120px;
  background-color: transparent;
}

.avatar__image-wrap {
  display: block;
  width: 80px;
  height: 80px;
  position: absolute;
  inset: 0;
  margin: auto;
  border-radius: 50%;
  overflow: hidden;
  z-index: 1;
}

.avatar__image {
  width: 100%;
  display: block;
  border-radius: 50%;
}

.grayscale {
  opacity: 0.4;
  filter: grayscale(100%);
}

.avatar__badge {
  z-index: 0;
  position: absolute;
  inset: 0;
  margin: auto;
  width: 100%;
  user-select: none;
}

.avatar__badge-image {
  width: 100%;
  height: auto;
  display: block;
}

.avatar__caption {
  position: absolute;
  left: 0;
  right: 0;
  margin-inline: auto;
  top: 120px;
  color: gray;
  text-align: center;
}
</style>
