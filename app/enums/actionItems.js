export default {
  DELETE_ITEM: {
    title: 'delete',
    icon: 'mdi-trash-can-outline',
    action: 'onDelete'
  },
  ADD_ITEM: {
    title: 'add',
    icon: 'mdi-note-plus-outline',
    action: 'onAdd'
  },
  DUPLICATE_ITEM: {
    title: 'duplicate',
    icon: 'mdi-content-copy',
    action: 'onDuplicate'
  },
  COPY_ITEM: {
    title: 'copy',
    icon: 'mdi-clipboard-outline',
    action: 'onCopy'
  },
  PASTE_ITEM: {
    title: 'paste',
    icon: 'mdi-clipboard-file-outline',
    action: 'onPaste'
  },
  MOVE_ITEM_UP: {
    title: 'moveUp',
    icon: 'mdi-chevron-up',
    action: 'onMoveUp'
  },
  MOVE_ITEM_DOWN: {
    title: 'moveDown',
    icon: 'mdi-chevron-down',
    action: 'onMoveDown'
  },
  LECTURE_VISIBILITY: {
    title: 'lectureVisibility'
  }
}

export const ACTION_ITEMS_TYPES = {
  DELETE_ITEM: 'DELETE_ITEM',
  ADD_ITEM: 'ADD_ITEM',
  DUPLICATE_ITEM: 'DUPLICATE_ITEM',
  COPY_ITEM: 'COPY_ITEM',
  PASTE_ITEM: 'PASTE_ITEM',
  MOVE_ITEM_UP: 'MOVE_ITEM_UP',
  MOVE_ITEM_DOWN: 'MOVE_ITEM_DOWN',
  LECTURE_VISIBILITY: 'LECTURE_VISIBILITY'
}

export const ITEM_TYPES = {
  MODULE: 'module',
  LECTURE: 'lecture',
  SECTION: 'section',
  BUBBLE: 'bubble',
  QUESTION: 'question',
  OPTION: 'option',
  BRANCH_SECTION: 'branchSection'
}
