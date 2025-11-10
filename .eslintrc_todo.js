module.exports = {
  "overrides": [
    {
      "rules": {
        "import/no-named-as-default": "off"
      },
      "files": [
        "plugins/usePlugins.js"
      ]
    },
    {
      "rules": {
        "import/no-named-as-default-member": "off"
      },
      "files": [
        "store/actions.js"
      ]
    },
    {
      "rules": {
        "no-console": "off"
      },
      "files": [
        "api/index.js",
        "components/TypeFormEmbedded.vue",
        "layouts/certificate.vue",
        "layouts/course-main.vue",
        "layouts/main.vue",
        "layouts/default.vue",
        "pages/courses/course/_id.vue",
        "pages/courses/course/index.vue",
        "pages/dashboard/course/_id.vue",
        "pages/dashboard/course/index.vue",
        "pages/verifycertificate.vue",
        "plugins/google.gtag.client.js",
        "store/actions.js",
        "store/admin/actions.js",
        "store/courseManipulations/actions.js"
      ]
    },
    {
      "rules": {
        "no-undef": "off"
      },
      "files": [
        "cypress/integration/e2e/landing.spec.js",
        "cypress/integration/e2e/login.spec.js",
        "cypress/integration/e2e/navigation.spec.js",
        "cypress/integration/e2e/register.spec.js"
      ]
    },
    {
      "rules": {
        "no-unused-expressions": "off"
      },
      "files": [
        "cypress/integration/unit/utils.spec.js"
      ]
    },
    {
      "rules": {
        "nuxt/no-cjs-in-config": "off"
      },
      "files": [
        "nuxt.config.js"
      ]
    },
    {
      "rules": {
        "prefer-const": "off"
      },
      "files": [
        "components/menu/ProfilesMenu.vue",
        "store/courseManipulations/actions.js"
      ]
    },
    {
      "rules": {
        "require-await": "off"
      },
      "files": [
        "plugins/globalMountedHook.js",
        "utils/external-component.js"
      ]
    },
    {
      "rules": {
        "vue/no-template-shadow": "off"
      },
      "files": [
        "components/course_in_progress/CourseNavigation.vue",
        "components/course_in_progress/quiz_questions/Categorization.vue"
      ]
    },
    {
      "rules": {
        "vue/no-unused-components": "off"
      },
      "files": [
        "components/MarketplaceCourseItem.vue",
        "components/admin_new_course/CourseActionButtons.vue",
        "components/admin_new_course/sections/EditBranchOptionSection.vue",
        "components/admin_new_course/sections/EditBubbleContent.vue",
        "components/admin_new_course/timeline/EditLecture.vue",
        "components/admin_new_course/timeline/EditLectureSection.vue",
        "components/course_in_progress/Lecture.vue",
        "components/course_in_progress/LectureSection.vue",
        "components/course_in_progress/Modules.vue",
        "components/course_in_progress/Quiz.vue",
        "components/landing/CatalogueSection.vue",
        "components/timeline/CourseCard.vue",
        "components/timeline/CourseProgress.vue",
        "components/timeline/Module/Module.vue",
        "components/timeline/Module/ModuleItem.vue",
        "components/timeline/Sidebar.vue",
        "components/user_courses/ActiveUserCourseItem.vue",
        "components/user_courses/CompletedUserCourseItem.vue",
        "pages/courses/index.vue",
        "pages/courses/course/_id.vue",
        "pages/courses/course/index.vue",
        "pages/dashboard/course/_id.vue",
        "pages/dashboard/course/index.vue",
        "pages/dashboard/index.vue",
        "pages/courseware/_id.vue",
        "pages/courseware/index.vue"
      ]
    },
    {
      "rules": {
        "vue/no-unused-vars": "off"
      },
      "files": [
        "components/admin_new_course/quiz_question_answers/QuizQuestionCategoryAnswer.vue",
        "components/admin_new_course/quiz_question_answers/QuizQuestionMultipleAnswer.vue",
        "components/admin_new_course/quiz_question_answers/QuizQuestionSingleAnswer.vue",
        "components/admin_new_course/quiz_question_answers/no_store/QuizQuestionCategoryAnswer.vue",
        "components/admin_new_course/quiz_question_answers/no_store/QuizQuestionMultipleAnswer.vue",
        "components/admin_new_course/quiz_question_answers/no_store/QuizQuestionSingleAnswer.vue",
        "components/course_in_progress/quiz_questions/Categorization.vue",
        "components/timeline/GamificationSidebar.vue",
        "pages/achievements.vue"
      ]
    },
    {
      "rules": {
        "vue/no-use-v-if-with-v-for": "off"
      },
      "files": [
        "components/course_in_progress/CourseNavigation.vue",
        "components/course_in_progress/Lecture2.vue"
      ]
    },
    {
      "rules": {
        "vue/order-in-components": "off"
      },
      "files": [
        "components/CourseItem.vue",
        "components/MarketplaceCourseItem.vue",
        "components/SocialLogins.vue",
        "components/TagCloud.vue",
        "components/admin_new_course/CourseActionButtons.vue",
        "components/admin_new_course/CourseGenericInfoStepper.vue",
        "components/admin_new_course/EditCourseCard.vue",
        "components/admin_new_course/EditCourseGamification.vue",
        "components/admin_new_course/EditCourseTags.vue",
        "components/admin_new_course/EditGamificationItem.vue",
        "components/admin_new_course/quiz_question_answers/QuizQuestionMultipleAnswer.vue",
        "components/admin_new_course/quiz_question_answers/QuizQuestionSingleAnswer.vue",
        "components/admin_new_course/sections/EditBubbleContent.vue",
        "components/admin_new_course/sections/EditDialogSection.vue",
        "components/admin_new_course/timeline/EditLecture.vue",
        "components/admin_new_course/timeline/EditLectureSection.vue",
        "components/admin_new_course/timeline/Module/EditModule.vue",
        "components/course_in_progress/BubblesComponent.vue",
        "components/course_in_progress/DialogSection.vue",
        "components/course_in_progress/Lecture.vue",
        "components/course_in_progress/Lecture2.vue",
        "components/course_in_progress/LectureSection.vue",
        "components/course_in_progress/quiz_questions/Categorization.vue",
        "components/course_in_progress/quiz_questions/MultipleChoice.vue",
        "components/course_in_progress/quiz_questions/SingleChoice.vue",
        "components/courses/ProceedToCourseButton.vue",
        "components/landing/CatalogueSection.vue",
        "components/landing/FooterComponent.vue",
        "components/menu/AppMenu.vue",
        "components/menu/AuthenticatedUserMenu.vue",
        "components/menu/CourseEditMenu.vue",
        "components/timeline/CourseCard.vue",
        "components/timeline/CourseProgress.vue",
        "components/timeline/GamificationItem.vue",
        "components/timeline/GamificationSidebar.vue",
        "components/timeline/Module/ModuleItem.vue",
        "components/timeline/Sidebar.vue",
        "components/timeline/TimelineLectureItem.vue",
        "layouts/certificate.vue",
        "layouts/course-main.vue",
        "layouts/main.vue",
        "layouts/default.vue",
        "pages/achievements.vue",
        "pages/manage-courses.vue",
        "pages/courses/course/_id.vue",
        "pages/courses/course/index.vue",
        "pages/dashboard/course/_id.vue",
        "pages/dashboard/course/index.vue",
        "pages/dashboard/index.vue",
        "pages/courseware/_id.vue",
        "pages/courseware/index.vue",
        "pages/index.vue",
        "pages/reset.vue",
        "pages/settings.vue",
        "pages/signin.vue",
        "pages/verifycertificate.vue"
      ]
    },
    {
      "rules": {
        "vue/prop-name-casing": "off"
      },
      "files": [
        "components/SocialSharer.vue"
      ]
    },
    {
      "rules": {
        "vue/require-component-is": "off"
      },
      "files": [
        "layouts/course-main.vue",
        "layouts/main.vue",
        "layouts/default.vue",
        "pages/courses/course/_id.vue",
        "pages/courses/course/index.vue",
        "pages/dashboard/course/index.vue",
        "pages/dashboard/course/_id.vue",
        "pages/courseware/_id.vue",
        "pages/courseware/index.vue",
        "pages/verifycertificate.vue"
      ]
    },
    {
      "rules": {
        "vue/require-prop-types": "off"
      },
      "files": [
        "components/CourseItem.vue",
        "components/CourseTags.vue",
        "components/CustomAvatar.vue",
        "components/GenericListOfItems.vue",
        "components/IconAndText.vue",
        "components/LiveLectureBlock.vue",
        "components/MarketplaceCourseItem.vue",
        "components/PageLoading.vue",
        "components/ProgressComponent.vue",
        "components/RichEditor.vue",
        "components/RichEditorDialog.vue",
        "components/SocialLogins.vue",
        "components/SocialSharer.vue",
        "components/TypeFormEmbedded.vue",
        "components/UserCourseItem.vue",
        "components/admin_new_course/AddBubbleSpeedDial.vue",
        "components/admin_new_course/ChangeMediaOverlay.vue",
        "components/admin_new_course/CourseGenericInfoDialog.vue",
        "components/admin_new_course/EditCourseCard.vue",
        "components/admin_new_course/EditCourseGamification.vue",
        "components/admin_new_course/EditCourseTags.vue",
        "components/admin_new_course/EditGamificationItem.vue",
        "components/admin_new_course/EditableCourseTitle.vue",
        "components/admin_new_course/quiz_question_answers/EditAnswerDialog.vue",
        "components/admin_new_course/quiz_question_answers/QuizQuestionCategoryAnswer.vue",
        "components/admin_new_course/quiz_question_answers/no_store/QuizQuestionCategoryAnswer.vue",
        "components/admin_new_course/quiz_question_answers/no_store/QuizQuestionMultipleAnswer.vue",
        "components/admin_new_course/quiz_question_answers/no_store/QuizQuestionSingleAnswer.vue",
        "components/admin_new_course/sections/EditAccordionSection.vue",
        "components/admin_new_course/sections/EditBranchOptionSection.vue",
        "components/admin_new_course/sections/EditBranchSection.vue",
        "components/admin_new_course/sections/EditBubbleContent.vue",
        "components/admin_new_course/sections/EditDialogSection.vue",
        "components/admin_new_course/sections/EditImageTextSection.vue",
        "components/admin_new_course/sections/EditPdfSection.vue",
        "components/admin_new_course/sections/EditVideoTextSection.vue",
        "components/admin_new_course/sections/PdfSectionDialog.vue",
        "components/admin_new_course/timeline/EditCourseTree.vue",
        "components/admin_new_course/timeline/EditLecture.vue",
        "components/admin_new_course/timeline/EditLectureSection.vue",
        "components/admin_new_course/timeline/EditQuiz.vue",
        "components/admin_new_course/timeline/EditQuizQuestion.vue",
        "components/admin_new_course/timeline/Module/EditModule.vue",
        "components/admin_new_course/timeline/Module/EditModuleItem.vue",
        "components/certificates/CertificateView.vue",
        "components/certificates/GetCertificateButton.vue",
        "components/course_in_progress/AccordionSection.vue",
        "components/course_in_progress/AvatarComponent.vue",
        "components/course_in_progress/BranchSection.vue",
        "components/course_in_progress/BubbleContent.vue",
        "components/course_in_progress/BubblesComponent.vue",
        "components/course_in_progress/CourseNavigation.vue",
        "components/course_in_progress/DialogSection.vue",
        "components/course_in_progress/ImageTextSection.vue",
        "components/course_in_progress/Lecture.vue",
        "components/course_in_progress/Lecture2.vue",
        "components/course_in_progress/LectureSection.vue",
        "components/course_in_progress/Modules.vue",
        "components/course_in_progress/PdfSection.vue",
        "components/course_in_progress/Quiz.vue",
        "components/course_in_progress/VideoTextSection.vue",
        "components/course_in_progress/quiz_questions/Categorization.vue",
        "components/course_in_progress/quiz_questions/MultipleChoice.vue",
        "components/course_in_progress/quiz_questions/SingleChoice.vue",
        "components/courses/EnrollmentDialog.vue",
        "components/courses/ProceedToCourseButton.vue",
        "components/landing/FooterComponent.vue",
        "components/landing/TestimonialItem.vue",
        "components/mailchimp/SubscribeToTheCourseUpdates.vue",
        "components/menu/AuthenticatedUserMenu.vue",
        "components/timeline/Card.vue",
        "components/timeline/CourseCard.vue",
        "components/timeline/CourseProgress.vue",
        "components/timeline/CourseTree.vue",
        "components/timeline/GamificationItem.vue",
        "components/timeline/GamificationSidebar.vue",
        "components/timeline/LectureSidebar.vue",
        "components/timeline/Module/Module.vue",
        "components/timeline/Module/ModuleItem.vue",
        "components/timeline/Sidebar.vue",
        "components/timeline/TimelineLectureItem.vue",
        "components/user_courses/ActiveUserCourseItem.vue",
        "components/user_courses/CompletedUserCourseItem.vue",
        "layouts/error.vue"
      ]
    },
    {
      "rules": {
        "vue/require-v-for-key": "off"
      },
      "files": [
        "components/course_in_progress/quiz_questions/MultipleChoice.vue"
      ]
    },
    {
      "rules": {
        "vue/return-in-computed-property": "off"
      },
      "files": [
        "components/CustomAvatar.vue",
        "components/course_in_progress/Lecture.vue",
        "components/course_in_progress/quiz_questions/Categorization.vue",
        "components/course_in_progress/quiz_questions/MultipleChoice.vue",
        "components/course_in_progress/quiz_questions/SingleChoice.vue",
        "components/landing/CatalogueSection.vue",
        "pages/courses/course/_id.vue"
      ]
    },
    {
      "rules": {
        "vue/this-in-template": "off"
      },
      "files": [
        "components/course_in_progress/quiz_questions/SingleChoice.vue",
        "pages/dashboard/course/index.vue",
        "pages/dashboard/course/_id.vue",
      ]
    },
    {
      "rules": {
        "vue/valid-template-root": "off"
      },
      "files": [
        "pages/login/gauth.vue"
      ]
    },
    {
      "rules": {
        "vue/valid-v-for": "off"
      },
      "files": [
        "components/timeline/GamificationSidebar.vue",
        "components/timeline/Module/Module.vue",
        "pages/achievements.vue"
      ]
    },
    {
      "rules": {
        "vue/valid-v-on": "off"
      },
      "files": [
        "components/menu/UserMenu.vue"
      ]
    },
  ]
}
