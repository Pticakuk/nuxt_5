<template>
  <div class="tagCloud">
    <div class="tw-flex tw-flex-wrap tw-gap-2 tw-items-center">
      <v-chip
        v-for="tag in tags"
        :key="tag?.id"
        color="primary"
        outlined
        label
        :small="small"
        :x-small="xSmall"
        pill
        :disabled="disabled"
        class="course-item__tag !tw-text-sm !tw-px-2 !tw-py-1"
        :class="disabled ? '' : 'primary--text'"
        :style="disabled ? '' : backgroundMain"
        @click="(ev) => onClickedTag(ev, tag)"
      >
        {{ tag?.name[0] !== '#' ? '#' : '' }}{{ tag?.name }}

        <v-icon
          v-if="editing"
          color="error"
          small
          class="tw-ml-0.5"
          @click.stop="onDeleteTag(tag)"
        >
          mdi-trash-can-outline
        </v-icon>
      </v-chip>

      <!-- <indication-button
        v-if="editing"
        :block="false"
        class="sm:tw-mt-2"
        :class="{ 'tw-ml-2': tagsToDisplay.length }"
        icon="mdi-tag-multiple"
        :button-text="t('admin.editingMode.tags.addTagsLabel')"
        @click="onEditTags"
      /> -->
    </div>

    <!-- <v-dialog v-model="editCourseTagsDialog" max-width="600px" width="96%">
      <course-tags-dialog
        v-if="editCourseTagsDialog"
        :selected-tags="tags"
        @addTags="onAddTags"
        @cancel="onCancelEditTags"
      />
    </v-dialog> -->
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useProfileStyle } from '~/composables/useProfileStyle'

// Props
const props = defineProps({
  tags: {
    type: Array,
    default: () => []
  },
  disabled: {
    type: Boolean,
    default: false
  },
  editing: {
    type: Boolean,
    default: false
  },
  small: {
    type: Boolean,
    default: true
  },
  xSmall: {
    type: Boolean,
    default: false
  }
})

// Emits
const emit = defineEmits(['tagSelected', 'save'])

// Composables
const { t } = useI18n()
const { backgroundMain } = useProfileStyle()

// Data
const editCourseTagsDialog = ref(false)

// Computed
const tagsToDisplay = computed(() => {
  return props.tags.map(tag => tag.name)
})

const tagIds = computed(() => {
  return props.tags.map(tag => tag.id)
})

// Methods
function onClickedTag(ev, tag) {
  ev.stopPropagation()
  ev.preventDefault()
  emit('tagSelected', tag?.id)
}

function onDeleteTag(tag) {
  const tagsToSave = props.tags.filter((t) => {
    if (t.id) {
      return tag.id !== t.id
    } else {
      return tag.name !== t.name
    }
  })
  emit('save', tagsToSave)
}

function onEditTags() {
  editCourseTagsDialog.value = true
}

function onCancelEditTags() {
  editCourseTagsDialog.value = false
}

function onAddTags(tags) {
  emit('save', props.tags.concat(tags))
  editCourseTagsDialog.value = false
}
</script>