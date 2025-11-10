/*
 * tours.js
 * The copyright of this file belongs to Workademy GmbH. The file cannot be
 * reproduced in whole or in part, stored in a retrieval system, transmitted
 * in any form, or by any means electronic, mechanical, or otherwise, without
 * the prior permission of the owner. Please refer to the terms of the license
 * agreement.
 *
 * (c) 2020 Workademy GmbH, Rights Reserved.
 *
 * olga
 * 27/11/2020, 15:25
 */
export const targets = {
  changeTitle: 'tour-change-title',
  changeDescription: 'tour-change-description',
  addModule: 'tour-add-module',
  addLecture: 'tour-add-lecture',
  changeModuleTitle: 'tour-change-module-title',
  changeModuleDescription: 'tour-change-module-description',
  saveCourse: 'tour-save-course',
  changeLectureTitle: 'tour-change-lecture-title',
  changeLectureDescription: 'tour-change-lecture-description',
  resetChanges: 'tour-reset-changes',
  publishCourse: 'tour-publish-course',
  copyLecture: 'tour-copy-lecture',
  pasteLecture: 'tour-paste-lecture',
  copyModule: 'tour-copy-module',
  pasteModule: 'tour-paste-module',
  deleteLecture: 'tour-delete-lecture',
  deleteModule: 'tour-delete-module',
  changeModuleAvailableDates: 'tour-change-module-dates',
  dragModule: 'tour-drag-module',
  dragLecture: 'tour-drag-lecture',
  changeCourseInfo: 'tour-change-course-info',
  editCourseTags: 'tour-edit-course-tags',
  editCourseGamification: 'tour-edit-course-gamification',
  useEditorToolbar: 'editor-toolbar',
  switchEditingMode: 'tour-switch-editing-mode',
  seeAsNonAdmin: 'tour-see-as-non-admin',
  goToLecture: 'tour-go-to-lecture',
  createNewCourse: 'tour-create-new-course',
  createExternalCourse: 'tour-create-external-course',
  createScormCourse: 'tour-create-scorm-course',
  importJSON: 'tour-import-json',
  umbrellaCourse: 'tour-umbrella-course',
  listOfCourses: 'tour-list-of-courses',
  paginationCourses: 'tour-pagination-courses'
}
export default {
  demoCourseEditing: {
    tourName: 'demoCourseEditing',
    tourSteps: {
      changeTitle: {
        title: 'tourSteps.demoCourseEditing.title',
        content: 'tourSteps.demoCourseEditing.changeTitle.content',
        target: targets.changeTitle,
        offset: -200
      },
      useEditorToolbar: {
        title: 'tourSteps.demoCourseEditing.title',
        content: 'tourSteps.demoCourseEditing.useEditorToolbar.content',
        target: targets.useEditorToolbar,
        offset: -200
      },
      seeAsNonAdmin: {
        title: 'tourSteps.demoCourseEditing.title',
        content: 'tourSteps.demoCourseEditing.seeAsNonAdmin.content',
        target: targets.seeAsNonAdmin,
        offset: -200,
        disabled: true
      },
      changeDescription: {
        title: 'tourSteps.demoCourseEditing.title',
        content: 'tourSteps.demoCourseEditing.changeDescription.content',
        target: targets.changeDescription,
        offset: -200
      },
      addModule: {
        title: 'tourSteps.demoCourseEditing.title',
        content: 'tourSteps.demoCourseEditing.addModule.content',
        target: targets.addModule
      },
      changeModuleTitle: {
        title: 'tourSteps.demoCourseEditing.title',
        content: 'tourSteps.demoCourseEditing.changeModuleTitle.content',
        target: targets.changeModuleTitle,
        offset: -200
      },
      changeModuleDescription: {
        title: 'tourSteps.demoCourseEditing.title',
        content: 'tourSteps.demoCourseEditing.changeModuleDescription.content',
        target: targets.changeModuleDescription,
        offset: -200
      },
      saveCourse: {
        title: 'tourSteps.demoCourseEditing.title',
        content: 'tourSteps.demoCourseEditing.saveCourse.content',
        target: targets.saveCourse
      },
      addLecture: {
        title: 'tourSteps.demoCourseEditing.title',
        content: 'tourSteps.demoCourseEditing.addLecture.content',
        target: targets.addLecture,
        offset: -200
      },
      changeLectureTitle: {
        title: 'tourSteps.demoCourseEditing.title',
        content: 'tourSteps.demoCourseEditing.changeLectureTitle.content',
        target: targets.changeLectureTitle,
        offset: -200
      },
      changeLectureDescription: {
        title: 'tourSteps.demoCourseEditing.title',
        content: 'tourSteps.demoCourseEditing.changeLectureDescription.content',
        target: targets.changeLectureDescription,
        offset: -200
      },
      resetChanges: {
        title: 'tourSteps.demoCourseEditing.title',
        content: 'tourSteps.demoCourseEditing.resetChanges.content',
        target: targets.resetChanges
      },
      publishCourse: {
        title: 'tourSteps.demoCourseEditing.title',
        content: 'tourSteps.demoCourseEditing.publishCourse.content',
        target: targets.publishCourse,
        offset: -200
      },
      copyLecture: {
        title: 'tourSteps.demoCourseEditing.title',
        content: 'tourSteps.demoCourseEditing.copyLecture.content',
        target: targets.copyLecture,
        offset: -200
      },
      pasteLecture: {
        title: 'tourSteps.demoCourseEditing.title',
        content: 'tourSteps.demoCourseEditing.pasteLecture.content',
        target: targets.pasteLecture,
        offset: -200
      },
      deleteLecture: {
        title: 'tourSteps.demoCourseEditing.title',
        content: 'tourSteps.demoCourseEditing.deleteLecture.content',
        target: targets.deleteLecture,
        offset: -200
      },
      copyModule: {
        title: 'tourSteps.demoCourseEditing.title',
        content: 'tourSteps.demoCourseEditing.copyModule.content',
        target: targets.copyModule,
        offset: -200
      },
      pasteModule: {
        title: 'tourSteps.demoCourseEditing.title',
        content: 'tourSteps.demoCourseEditing.pasteModule.content',
        target: targets.pasteModule,
        offset: -200
      },
      deleteModule: {
        title: 'tourSteps.demoCourseEditing.title',
        content: 'tourSteps.demoCourseEditing.deleteModule.content',
        target: targets.deleteModule,
        offset: -200
      },
      changeModuleAvailableDates: {
        title: 'tourSteps.demoCourseEditing.title',
        content: 'tourSteps.demoCourseEditing.changeModuleAvailableDates.content',
        target: targets.changeModuleAvailableDates,
        offset: -200
      },
      dragModule: {
        title: 'tourSteps.demoCourseEditing.title',
        content: 'tourSteps.demoCourseEditing.dragModule.content',
        target: targets.dragModule,
        offset: -200
      },
      dragLecture: {
        title: 'tourSteps.demoCourseEditing.title',
        content: 'tourSteps.demoCourseEditing.dragLecture.content',
        target: targets.dragLecture,
        offset: -200
      },
      changeCourseInfo: {
        title: 'tourSteps.demoCourseEditing.title',
        content: 'tourSteps.demoCourseEditing.changeCourseInfo.content',
        target: targets.changeCourseInfo,
        offset: -200
      },
      editCourseTags: {
        title: 'tourSteps.demoCourseEditing.title',
        content: 'tourSteps.demoCourseEditing.editCourseTags.content',
        target: targets.editCourseTags,
        offset: -200
      },
      editCourseGamification: {
        title: 'tourSteps.demoCourseEditing.title',
        content: 'tourSteps.demoCourseEditing.editCourseGamification.content',
        target: targets.editCourseGamification,
        offset: -200
      },
      switchEditingMode: {
        title: 'tourSteps.demoCourseEditing.title',
        content: 'tourSteps.demoCourseEditing.switchEditingMode.content',
        target: targets.switchEditingMode,
        offset: -200
      },
      goToLecture: {
        title: 'tourSteps.demoCourseEditing.title',
        content: 'tourSteps.demoCourseEditing.goToLecture.content',
        target: targets.goToLecture,
        offset: -200
      }
    }
  },
  adminCourses: {
    tourName: 'adminCourses',
    tourSteps: {
      createNewCourse: {
        content: 'tourSteps.adminCourses.createNewCourse',
        target: targets.createNewCourse,
        offset: -200
      },
      importJSON: {
        content: 'tourSteps.adminCourses.importJSON',
        target: targets.importJSON,
        offset: -200
      },
      listOfCourses: {
        content: 'tourSteps.adminCourses.listOfCourses',
        target: targets.listOfCourses,
        disabled: true
      },
      paginationCourses: {
        content: 'tourSteps.adminCourses.paginationCourses',
        target: targets.paginationCourses,
        disabled: true
      }
    }
  }
}
