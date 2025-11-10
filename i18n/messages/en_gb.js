export default {
  actions: {
    delete: {
      module: 'Delete module',
      lecture: 'Delete lecture',
      section: 'Delete section',
      question: 'Delete question',
      bubble: 'Delete bubble',
      option: 'Delete option',
      branchSection: 'Delete branch section'
    },
    add: {
      module: 'Add module',
      lecture: 'Add lecture',
      section: 'Add section',
      question: 'Add question',
      bubble: 'Add bubble',
      option: 'Add option',
      branchSection: 'Add branch section'
    },
    duplicate: {
      module: 'Duplicate module',
      lecture: 'Duplicate lecture',
      section: 'Duplicate section',
      question: 'Duplicate question',
      bubble: 'Duplicate bubble',
      option: 'Duplicate option',
      branchSection: 'Duplicate branch section'
    },
    moveUp: {
      module: 'Move module up',
      lecture: 'Move lecture up',
      section: 'Move section up',
      question: 'Move question up',
      bubble: 'Move bubble up',
      option: 'Move option up',
      branchSection: 'Move branch section up'
    },
    moveDown: {
      module: 'Move module down',
      lecture: 'Move lecture down',
      section: 'Move section down',
      question: 'Move question down',
      bubble: 'Move bubble down',
      option: 'Move option down',
      branchSection: 'Move branch section down'
    },
    copy: {
      module: 'Copy module',
      lecture: 'Copy lecture',
      section: 'Copy section',
      question: 'Copy question',
      bubble: 'Copy bubble',
      option: 'Copy option',
      branchSection: 'Copy branch section',
      courseUrl: 'copy',
      courseUrlCopied: 'copied',
      url: 'copy',
      urlCopied: 'copied'
    },
    paste: {
      module: 'Paste module',
      lecture: 'Paste lecture',
      section: 'Paste section',
      question: 'Paste question',
      bubble: 'Paste bubble',
      option: 'Paste option',
      branchSection: 'Paste branch section'
    },
    course: {
      config: 'Edit config',
      edit: 'Edit course content',
      clone: 'Clone course',
      invite: 'Invite users or groups',
      progress: 'Check users progress'
    }
  },
  openAi: {
    title: 'Open AI',
    useThisTextButton: 'Use this text',
    useThisImageButton: 'Use this image',
    usingOpenAiInfoBox: 'We use the <strong>Open AI</strong> API to help you with your routine tasks. Make sure you have the integration with your Open AI Account in place and start using this helper for pretty much anything. ' +
      'For example, you can prompt something like <strong>"Title for a course on onboarding"</strong> or <strong>"Write a description for an intro lecture on Salesforce"</strong> ' +
      'or <strong>"Generate a single choice question on soft skills"</strong>. Use your natural language, check the result, ' +
      'fix the wording if needed, remove unnecessary empty spaces, and use it in your course.',
    textCompletionExplanation: 'Use this dialog to generate text on any topic. The text will be limited to {charLimit} characters.',
    imageCreationExplanation: 'Use this dialog to generate an image on any topic. Note that image generation is currently in Beta version. The image will be generated with size {imageSize}.',
    errorGeneratingContent: 'There was an error generating content: {err}',
    configureTheIntegration: ' | Please configure the integration with OpenAI API in the admin/integrations section.'
  },
  trialWorkspaceBanner: '😃 You still have {daysLeft} days of your trial period. Unlock the full potential of your personalised workspace now! 🚀',
  notAuthenticatedWorkspaceBanner: 'Please register to unlock the full potential of your workspace!',
  trialWorkspaceCTA: 'Let\'s do it!',
  notAuthenticatedWorkcpaceCTA: 'Register',
  trialExpired: '😢 Your trial period has expired. You can\'t explore admin features anymore. Unlock the full potential of your personalised workspace now!',
  toast: {
    courseSaveSuccess: 'Course successfully saved',
    coursePublishSuccess: 'Course successfully published',
    courseUnpublishSuccess: 'Course successfully unpublished',
    courseCloneSuccess: 'Course successfully cloned',
    courseDeleteSuccess: 'Course {name} successfully deleted',
    courseDeleteError: 'There was an error deleting the course',
    courseSaveError: 'There was an error saving the course {name}: {err}',
    courseEditingLockError: 'This course is being edited by {name}. Do you want to take over? {name}\'s progress will be lost.',
    courseEditingLockForced: 'This course editing was taken over by {name}.',
    courseEditingLockByUserError: 'You are editing this course on another device or tab. Do you want to take over?' +
      ' Your progress on another device or tab will be lost.',
    editAnyway: 'Take over!',
    courseEditLockSuccess: 'Course editing mode for current user successfully enabled',
    courseEditUnlockSuccess: 'Course editing mode for current user successfully disabled',
    courseUrlCopiedSuccessfully: 'Course URL copied successfully.',
    urlCopiedSuccessfully: 'URL copied successfully',
    courseUrlCopiedError: 'Course URL could not be copied: {err}.',
    urlCopiedError: 'URL could not be copied: {err}.',
    previewWillAppearHere: 'The preview of the code will appear here',
    checkInPopup: 'Check in a pop-up',
    workspaceChangesSaved: 'Workspace configuration saved successfully.',
    workspaceChangesSaveError: 'There was an error saving the workspace changes: {err}.',
    courseOrderUpdated: 'Course order updated with success: course {courseName} will be displayed in the order {order}.',
    courseOrderUpdateError: 'There was an error updating course ordering: {err}.',
    userNameChangedSuccessfully: 'The name of the user {name} changed successfully.',
    userNameChangedError: 'There was an error changing the name of the user {name}: {err}',
    userEmailChangedSuccessfully: 'The email of the user {name} changed successfully.',
    userEmailChangedError: 'There was an error changing the email of the user {name}: {err}',
    workspaceDoesntExist: 'The workspace {name} does not exist.'
  },
  welcome: '<span class="welcome">Welcome</span> to the online education<br>and knowledge sharing world',
  forum: {
    title: 'Forum',
    sortingOptions: {
        newest: 'Newest first',
        oldest: 'Oldest first',
        mostPopular: 'Most popular'
    },
    comment: 'Comment',
    leaveComment: 'Leave a comment',
    actions: {
      edit: 'Edit',
      follow: 'Follow',
      reply: 'Reply',
      delete: 'Delete'
    },
    uploadImage: 'Upload image',
    socialLearning: {
      DISABLED: 'Forum disabled',
      DISQUS: 'Enable forum Disqus',
      WORKADEMY: 'Enable forum Workademy'
    },
    toCourse: 'Back to course',
    toForum: 'To course forum',
    supportedText: 'Choose {supported} file',
    generalThreads: 'General threads',
    lecturesThreads: 'Lectures threads',
    asUser: 'As user',
    asModerator: 'As moderator'
  },
  dialogs: {
    editRichText: 'Edit rich text',
    saveAndClose: 'Save and Close'
  },
  share: {
    shareDialogTitle: 'Share',
    doneButtonText: 'Done'
  },
  layout: {
    getStarted: 'Get started'
  },
  landing: {
    welcome: '<span class="welcome">Welcome</span> to the online education<br>and knowledge sharing world',
    goToCatalog: 'Explore our courses',
    learnAndShare: 'Learn and share your knowledge with {title}',
    viewAllCatalog: 'View all catalog',
    allowsToLearnAndTeach: '{title} allows you to learn and to teach',
    beingABridge: 'being a bridge between knowledge possessors and those who need this knowledge',
    learnIconText: 'Never stop learning, access to a high-quality content with {title}',
    everywhereIconText: 'Use any device, any system, anywhere',
    communityIconText: 'Participate in network, be a part of community',
    teachIconText: 'The most efficient way of learning is teaching. Unlock your teaching potential with {title}',
    learn: 'Learn',
    everywhere: 'Everywhere',
    community: 'Community',
    teach: 'Teach',
    areYouReady: 'Are you ready to join the online education and knowledge sharing world?',
    viewAllCourses: 'all courses',
    viewMyDashboard: 'my dashboard',
    comingSoon: 'This could be your workspace. Talk to us!',
    footerDisclaimer: ''
  },
  dashboard: {
    dashboardTitle: 'Dashboard',
    coursesInProgressTitle: 'Courses',
    coursesInProgressSubtitle: 'Courses you are currently enrolled into',
    coursesCompletedTitle: 'Completed courses',
    coursesCompletedSubtitle: 'Courses you\'ve already completed',
    learningPathsInProgressTitle: 'Learning Paths',
    learningPathsCompleted: 'Completed Learning Paths',
    achievementsTitle: 'Achievements',
    achievementsDescription: 'Click on an achievement card to add the achievement frame to your avatar.',
    searchLearningPaths: 'Search learning paths',
    filters: {
      searchLearningPaths: 'Search learning paths',
      search: {
        learningPaths: 'Search for learning paths',
        courses: 'Search for courses'
      },
      showCoursesTitle: {
        all: 'Show courses <strong>(all)</strong>',
        completed: 'Show courses <strong>(completed)</strong>',
        active: 'Show courses <strong>(active)</strong>',
        archived: 'Show courses <strong>(archived)</strong>'
      },
      showAllCourses: 'Show all courses',
      showActiveCourses: 'Show active courses',
      showCompletedCourses: 'Show completed courses',
      showArchivedCourses: 'Show archived courses',
      showLearningPathsTitle: {
        all: 'Show learning paths <strong>(all)</strong>',
        completed: 'Show learning paths <strong>(completed)</strong>',
        active: 'Show learning paths <strong>(active)</strong>',
        archived: 'Show <strong>(archived)</strong> learning path'
      },
      showAllLearningPaths: 'Show all learning paths',
      showActiveLearningPaths: 'Show active learning paths',
      showCompletedLearningPaths: 'Show completed learning paths',
      showArchivedLearningPaths: 'Show archived learning paths'
    },
    notFound: {
      course: {
        notEnrolled: {
          title: 'You are not enrolled in any courses.',
          description: 'Check the courses list to enrol to the courses.'
        },
        notFound: {
          title: 'The courses could not be found.',
          description: 'Change the search criteria.'
        },
        noCompleted: {
          title: 'You haven\'t completed any course yet.',
          description: 'Check your active courses and try to complete them.'
        }
      },
      learningPath: {
        notEnrolled: {
          title: 'You are not enrolled in any learning path.'
        },
        notFound: {
          title: 'The learning paths could not be found.',
          description: 'Change the search criteria.'
        },
        noCompleted: {
          title: 'You haven\'t completed any learning path yet.',
          description: 'Check your active courses and try to complete them.'
        }
      }
    }
  },
  quiz: {
    questionNFrom: 'Question {questionNumber} of {quizLength}',
    questionN: 'Question {questionNumber}',
    checkTheAnswer: 'Check the answer',
    checkTheDroppable: 'I\'m done!',
    associationQuestionExplanation: 'Click on the item and then on the corresponding category. Click on the CHECK THE ANSWER button once you\'re done.',
    multipleAssociationQuestionExplanation: 'Click on the item and then on the corresponding category. One item can belong to more than one category. Click on the CHECK THE ANSWER button once you\'re done.',
    sortingQuestionExplanation: 'Drag and drop items to place them in the right order. Click on the CHECK THE ANSWER button once you\'re done. ',
    numberOfQuestions: 'No quiz points | One point | {n} points',
    noTries: 'Check your answers',
    noCorrect: 'Keep trying!',
    allCorrect: 'Good job! You answered all the questions!',
    allCorrectVariants: ['Good job!', 'Well done!', 'Excellent!'],
    numberOfCorrect: 'Way to go | Way to go! You’ve got 1 correct answer from {length} questions | Way to go! You got {correct} answers out of {length} questions',
    usedAttempts: 'You used {wrongCount} out of {wrongLimit} possible attempts',
    questionType: 'Question Type',
    newAnswer: 'Change the text of the answer here',
    addAnswer: 'Add answer',
    answerText: 'Answer Text',
    explanationText: 'Explanation Text',
    correctAnswerSize: 'correct answers: {size}',
    questionWeight: 'Question weight',
    questionPoints: 'points: {points}',
    questionTimerTimeUp: 'You didn`t complete the question within the specified amount of time. Get in touch with your admin.',
    questionTimerMessage: 'You have <strong class="primary--text">{time}</strong> to complete this question, be sure you are ready before you start.',
    feedback: {
      correct: 'Correct',
      incorrect: 'Incorrect',
      tryAgain: 'Incorrect, try again',
      noAttemptsLeft: 'Incorrect, no attempts left'
    },
    types: {
      MultipleChoice: 'Multiple Choice',
      SingleChoice: 'Single Choice',
      Categorization: 'Single Association',
      MultipleAssociation: 'Multiple Association',
      SingleOrdering: 'Sorting',
      OpenAnswer: 'Open Answer'
    },
    itemsToSortLabel: 'Items to sort',
    sortedItemsLabel: 'Sorted items',
    itemsToCategoriseLabel: 'Items to organize',
    categories: 'Categories',
    categoriesQuestion: {
      itemNumber: 'Item ',
      categoryNumber: 'Category '
    },
    uploadFile: 'Upload file',
    typeYourAnswerHere: 'Type your answer here',
    yourFile: 'Your file',
    submitAnswer: 'Submit answer',
    fileURL: 'File URL',
    noFileUploaded: 'No file uploaded yet',
    answerSubmittedWaiting: 'Answer submitted. Waiting for evaluation. You can still edit it.',
    answerSubmittedWrongAttemptsLeft: 'Answer submitted. It is wrong. you can still edit it.',
    answerSubmittedWrong: 'Answer submitted. It is wrong. You cannot edit it anymore.',
    answerSubmittedRight: 'Your answer is correct.'
  },
  courseTree: {
    courseWillStart: '✌️This course will start on {date} 🗓.<br>Please use the menu to leave this screen 👋',
    courseFinished: 'This course finished on {date} 🗓.<br>Please use the menu to leave this screen 👋',
    courseExpired: 'This course has expired 🗓.<br>Please use the menu to leave this screen 👋',
    coursePendingAproval: 'Your enrolment in this course requires an approval from a course admin.<br>Please use the menu to leave this screen 👋',
    modulesTitle: 'Course Structure',
    sidebarTitle: 'Practical information',
    tagsTitle: 'Course Tags',
    moduleAvailableFrom: 'Available from {from}',
    moduleAvailableFromUntil: 'Available from {from} until {until}',
    moduleAvailableFromUntilMobile: '{from}-{until}',
    practicalInfo: {
      availableFrom: 'This course starts on {date}',
      availableFromPast: 'This course started on {date}',
      availableUntil: 'This course finishes on {date}',
      availableUntilPast: 'The registration until {date}',
      expiresIn: 'This course expires on {date}',
      doesntExpire: 'This course never expires',
      courseDuration: 'The length of this course: {duration}',
      startedCourse: 'You have enrolled into this course on <time>{date}</time>',
      numberOfQuestions: 'This course doesn\'t include quizzes | This course has {n} point | This course has {n} points in total',
      numberOfAnswers: 'You haven\'t yet gained any points | You have gained one point | You have gained {questions} points!',
      yourScore: 'Your score: {score}',
      addToCalendar: 'Add to Calendar'
    },
    gamification: {
      gamificationTitle: 'Your Achievements',
      moreXToGo: '{x} to go',
      checkAllAchievements: 'Click here to check your achievements',
      achievementUnlocked: 'You have just unlocked new achievement!',
      goToAchievement: 'Go to achievements'
    },
    lectureIsNotSeenExplanation: 'Mark lecture as seen to be able to proceed to the next one.',
    lectureIsNotStartedExplanation: 'The next lecture is not available yet.'
  },
  lecture: {
    workbook: 'Workbook',
    quiz: 'Please answer the following questions',
    quizDescription: 'Instructions for the quiz',
    previous: 'Previous',
    next: 'Next',
    duration: 'Duration {duration} minutes',
    durationUnknown: 'Time to complete: unknown',
    numberOfQuestions: 'No questions | 1 question | {size} questions',
    questionsSize: 'No points | 1 point | {size} points',
    goToLecture: 'Go to the lecture',
    goToQuiz: 'Go to the quiz',
    questionsAnswered: '{right}/{total} points',
    continue: 'Continue',
    liveLecture: {
      addToGoogleCalendar: 'Add to Google Calendar',
      addToOutlookCalendar: 'Add to Office365 outlook calendar',
      addToMicrosoftLiveCalendar: 'Add to Microsoft live calendar',
      joinLecture: 'Click here to join the webinar',
      startsIn: 'This webinar starts ',
      started: 'The webinar has started ',
      passed: 'This webinar has passed',
      areYouGoing: 'Going?',
      yes: 'Yes',
      no: 'No'
    },
    dialog: {
      isTyping: 'is typing'
    }
  },
  buttons: {
    add: 'Add',
    register: 'Register',
    open: 'Open',
    new: 'New!',
    exploreCourse: 'Explore course',
    clone: 'Clone',
    resume: 'Resume course',
    enroll: 'Enroll',
    payAndEnroll: 'Enroll and Pay {amount} {currency}',
    goToCourse: 'Go To Course',
    resumeCourse: 'Resume Course',
    viewCourse: 'View Course',
    loginAndEnroll: 'Enroll',
    login: 'Sign in',
    cancel: 'Cancel',
    giveUp: 'Give Up',
    archive: 'Archive',
    unarchive: 'Unarchive',
    chooseLanguage: 'Select the preferred language',
    playVideo: 'Play Video',
    backToTimeline: 'Back to Timeline',
    nextLecture: 'Next Lesson',
    subscribeToUpdates: 'Get notified',
    subscribeToUpdatesBig: 'I want to be notified on this course',
    goToTheMarketplace: 'Go to the Marketplace',
    goToTheLecture: 'Go to the lecture {lecture}',
    goToTheLastLecture: 'Resume course',
    goToTheLastQuiz: 'Resume Certification',
    startCourse: 'Start course',
    startCertification: 'Start certification',
    getCertificate: 'Get a certificate',
    openCertificate: 'Open certificate',
    completeCourse: 'Complete course',
    backToTheCourse: 'To the course page',
    viewAllCourses: 'All courses',
    viewMyDashboard: 'My Dashboard',
    goToSettings: 'My Settings',
    goToLearnerProfile: 'Learner Profile',
    goToOrganization: 'Organization',
    goToAdmin: 'Admin Area',
    toggleDark: 'Toggle Dark Mode',
    toggleCompleted: 'Show completed',
    toggleViewAsNonAdmin: 'Toggle view as non-admin',
    logout: 'Logout',
    languages: 'Languages',
    toggleEditingMode: 'Edit Mode',
    deleteText: 'delete',
    save: 'Save',
    markAsSeen: 'Mark as seen',
    attendedLiveLecture: 'I attended the webinar',
    lectureSeen: 'You\'ve completed this lecture',
    manageCourses: 'Manage Courses',
    manage: 'Manage',
    edit: 'Edit',
    export: 'Export course',
    ok: 'Ok',
    switchSignUpToRegister: 'I don\'t have an account yet.',
    switchSignUpToLogin: 'I am already registered.',
    continue: 'Continue',
    continueWithFacebook: 'Continue with Facebook',
    continueWithGoogle: 'Continue with Google',
    close: 'Close',
    forceUpdate: 'Yes, proceed!',
    showDetails: 'Show details',
    deleteCourse: 'Delete course',
    deleteLearningPath: 'Delete learning path',
    downloadCertificate: 'Download Certificate',
    connect: 'Connect',
    reconnect: 'Reconnect',
    sync: 'Sync',
    invite: 'Invite',
    showUsers: 'Show Users',
    hideUsers: 'Hide Users',
    previousLecture: 'Previous Lesson',
    exitFullscreenLectureMode: 'Exit Fullscreen Mode',
    enterFullscreenLectureMode: 'Enter Fullscreen Mode',
    download: 'Download',
    addField: 'Add Field',
    delete: 'Delete',
    startOver: 'Change your choice',
    back: 'Back',
    continueWithOAuth: 'Continue with {workspaceName}',
    comingSoon: 'Coming Soon',
    courses: 'All courses',
    answerTypeform: 'Answer this',
    proceed: 'Proceed',
    launchFullscreen: 'Launch Fullscreen',
    collapse: 'Collapse',
    expand: 'Expand',
    goUp: 'Go Up',
    locked: 'Locked',
    done: 'Done',
    exploreLearningPath: 'Explore',
    startNow: 'Start Now',
    uploadImage: 'Upload an image',
    addNew: 'Add New',
    deleteGroup: 'Delete Group',
    deleteFolder: 'Delete Folder',
    deleteSkill: 'Delete Skill',
    forceDeleteGroup: 'Delete Group Anyway',
    forceDeleteFolder: 'Delete Folder Anyway',
    forceDeleteSkill: 'Delete Skill Anyway',
    editCoverPhoto: 'Edit cover photo',
    addGlobalUser: 'Add global user',
    addGlobalTopic: 'Add global topic',
    saveGlobalForumSettings: 'Save global forum settings'
  },
  courses: {
    duration: '{duration}',
    modulesTitle: 'Course description',
    hours: 'hours | hour | hours',
    minutes: 'minutes | minute | minutes',
    courses: 'All courses',
    courseNotSelected: 'Course is not selected',
    myCourses: 'My Learning',
    module: 'Module {moduleNumber}',
    notEnrolled: 'You are not enrolled on any courses!',
    noCompleted: 'You have not completed any courses yet',
    clickToCatalog: 'Click here to see the courses catalogue',
    exploreCourses: 'Explore courses',
    numberOfModules: 'modules',
    finishAndGetCert: 'Get a certificate',
    validUntil: 'Valid until {expireDate}',
    completedCoursesTitle: 'Completed courses',
    completedCoursesSubtitle: 'Courses you’ve already completed',
    courseIsCertifiable: 'Certificate in the end of the course',
    achievementsEnabled: 'Achievements for the course progress',
    noCourses: 'No courses found',
    noLearningPaths: 'No learning paths found',
    noCoursesWithSearch: 'No courses found',
    tooltipShareUrl: 'Share URL',
    titleCopyText: 'Copy URL to Clipboard',
    titleTextCopied: 'URL copied',
    buttonCopyText: 'copy',
    buttonTextCopied: 'copied',
    searchHeader: 'Search',
    searchLabel: 'Search for courses...',
    aiSearchLabel: 'Search courses with AI...',
    aiSearchButton: 'AI Search',
    classicSearchButton: 'Classic Search',
    aiSearchDescription: 'Understands natural language. Try: “Show me courses for engineers to improve time management.”',
    classicSearchDescription: 'Searches by exact keywords in course titles, descriptions, and content.',
    totalFound: 'No courses found | <strong>{n}</strong> course found | <strong>{n}</strong> courses found',
    tagsHeader: 'Tags ({tags} selected)',
    durationHeader: 'Duration ({durations} selected)',
    resetFilters: 'Reset filters',
    filtersTitle: 'Filters',
    applyFilters: 'Apply filters',
    durations: {
      less30: 'less than 30 minutes',
      between30and2: 'between 30 minutes and 2 hours',
      between2and4: 'between 2 and 4 hours',
      more4: 'more than 4 hours'
    },
    tags: {
      loadMore: 'Load more...',
      loadLess: 'Load less...',
      noTags: 'No tags found',
      deleteTag: 'delete tag'
    },
    anonymousNotAllowed: 'You must be enrolled to the course in order to see the content',
    badge: {
      template: 'template',
      external: 'external',
      scorm: 'scorm',
      umbrella: 'umbrella',
      requiresApproval: 'requires approval'
    },
    paidCourses: {
      payNowHeader: 'Pay Now {amount} {currency}',
      payNowDescription: 'After the payment is done you will have access to the course',
      payNowButton: 'Pay Now',
      paymentSucceeded: 'Payment for the course {name} is successful',
      paymentFailed: 'Payment for the course {name} failed: {err}',
      finalisingPayment: 'Finalising your payment, hold on a second...⏳',
      voucherCode: 'Voucher Code',
      applyButton: 'Apply',
      payWithLiqpay: 'Pay With LiqPay',
      payAmountCurrency: 'Pay {amount} {currency}',
      applyPromocode: 'If you have a promocode, please enter it in the field below.'
    },
    failedCourse: {
      failedCourseAlertMessage: 'Unfortunately, it\'s impossible to score enough for a certificate. You got {correct} out of {total} points, but it\'s not sufficient to meet the {minRate}% requirement.',
      failedCourseOneTimeEnrolment: 'Course restart not possible. Contact admin for re-enrollment.',
      restartCourseButton: 'Restart the course'
    }
  },
  learningPaths: {
    noCompleted: 'You have not completed any learning path yet',
    noAssigned: 'You have no assigned learning paths yet',
    numberOfCourses: 'No courses | {completed}/1 course | {completed}/{n} courses',
    achievementsLabel: 'Achievements',
    skillsLabel: 'Skills',
    certificateLabel: 'Certificate in the end',
    progressLabel: 'Progress',
    totalFound: 'No learning paths found | <strong>{n}</strong> learning paths found | <strong>{n}</strong> learning paths found'
  },
  auth: {
    or: 'OR',
    dontHaveAnAccountYet: 'Don\'t have an account yet?',
    enterPassword: 'Enter your password',
    enterPhone: 'Enter your phone number',
    atLeastChars: 'At least {numberCharacters} characters',
    forgotPassword: 'Forgot Password?',
    resetPassword: {
      title: 'Reset Password',
      description: 'Enter your email address and we\'ll send you an email with instructions to reset your password.',
      placeholder: 'Email Address',
      button: 'Reset Password',
      info: 'If you don’t receive an email from us within a few minutes, check your spam filter as sometimes they end up in there.',
      support: 'The email will be from',
      passwordResetSuccess: '<b>Alright!</b> Instructions to reset your password have been emailed to you. Please check your email.',
      changePasswordTitle: 'Change Password',
      changePasswordDesc: 'Enter your desired password.',
      passwordChangeSuccess: '<b>Alright!</b> Password successfully updated. You are now logged in with your new password.',
      passwordChangeSuccessAndLogin: '<b>Alright!</b> Password successfully updated. You can now login with your new password.'
    },
    nameLabel: 'Name',
    namePlaceholder: 'John Smith',
    emailLabel: 'E-mail',
    join: 'Join us!',
    alreadyHaveAccount: 'Already have an account?',
    loginNow: 'You can login now!',
    token: 'Token',
    newPassword: 'New Password',
    repeatPassword: 'Repeat new Password',
    passwordRequired: 'Password required',
    passwordRule: 'Password must have at least 8 characters, and should not exceed {maxChars} characters',
    passwordShouldMatch: 'Passwords should match',
    emailRequired: 'E-mail is required',
    emailValid: 'E-mail must be valid',
    nameRequired: 'Name is required',
    nameLessThan: 'Name must be less than {MAX_NAME_LENGTH} characters',
    passwordValid: 'Password must have at least 8 characters, and should not exceed {MAX_PASSWORD_LENGTH} characters',
    repeatPasswordRequired: 'Please repeat the password',
    passwordsDontMatch: 'Passwords do not match',
    phoneValid: 'Phone number should be valid',
    profilePicture: 'Profile Picture',
    pictureLabel: 'Profile Picture URL',
    pictureHint: 'Copy link to your favorite profile picture',
    phone: 'Phone Number',
    city: 'City',
    street: 'Street',
    postalCode: 'Postal Code',
    country: 'Country',
    addressAndPhoneTitle: 'Address and Phone Number',
    changePassword: 'Change Password',
    oldPasswordLabel: 'Old Password',
    newPasswordLabel: 'New Password',
    phoneLabels: {
      countrySelectorLabel: 'Country code',
      countrySelectorError: 'Select a country',
      phoneNumberLabel: 'Phone Number',
      example: 'Example :'
    },
    consentRule: 'You must agree to the privacy policy to continue',
    consentLabel: 'I agree with the <a href="{url}" target="_blank">privacy policy</a>',
    loginSuccessful: 'Login successful',
    registrationSuccessful: 'Registration successful',
    loginWithEmail: 'Login with email',
    registerWithEmail: 'Sign up with email',
    alreadyHaveAnAccount: 'Already have an account?',
    loginTitle: 'Sign in',
    registerTitle: 'Register',
    loginDisclaimer: '',
    registerDisclaimer: '',
    whereToGoTitle: 'Which Workademy workspace?',
    whereToGoSubtitle: 'Type the name of your Workademy workspace. For example, "workademy"',
    workspaceNameLabel: 'Workspace Name',
    workspaceNamePlaceholder: 'workademy',
    backToRipplingButton: 'Back to Rippling',
    proceedToWorkspaceButton: 'Proceed to {name}',
    loginWithRippling: 'Login with Rippling',
    loginWithDeel: 'Login with Deel'
  },
  errors: {
    '-1': 'Unknown error occurred',
    1000: 'This username already exists',
    1001: 'User not found',
    1002: 'Username or password is not valid',
    1003: 'Username or password is not valid',
    1004: 'Wrong credentials',
    1100: 'Invalid token',
    1101: 'Token expired',
    59: 'Bad credentials or username and password don\'t match',
    1300: 'Precondition failed: User course not yet complete.',
    1500: 'Voucher with code {code} is not found',
    1501: 'The Voucher with this code {code} has already been used',
    popup_closed_by_user: 'Google auth popup was closed',
    9905: 'Please check your facebook email settings. Email must be verified.',
    9904: 'Could not authenticate with Personio. Check the connection credentials.',
    LOCKED: 'Your account is locked. Please reset your password',
    PASSWORD_DONT_MATCH: 'Your password doesn\'t match',
    1302: 'You have been enrolled already to this course. It is only possible to enroll once to this course',
    1307: "There's a cooling-off period of {period} before you can take this course again"
  },
  footer: {
    platformDescription: '<strong>{title}</strong> is an e-learning platform ' +
      'that is focused on newest trends of knowledge acquirement and motivation behind it',
    links: 'Links',
    contacts: 'Contacts',
    github: 'GitHub',
    foundIssues: 'Found some issues?',
    submitThem: 'submit them!',
    privacyUrl: 'https://www.theworkademy.com/privacy',
    workademyPrivacyLabel: 'Workademy Privacy Policy',
    privacyLabel: 'Privacy Policy',
    contentLabel: 'Content Policy',
    tacUrl: 'https://www.theworkademy.com/tac',
    workademyTacLabel: 'Workademy Terms and Conditions',
    tacLabel: 'Terms and Conditions'
  },
  progress: {
    go: 'Go go go! Only {completed} answered out of {total}',
    nice: 'Nice! {completed} out of {total}! Keep going!',
    almost: 'Almost done! {completed} out of {total}!',
    done: 'You are a hero! {completed} out of {total}!',
    shorten: '{completed}/{total}',
    courseScore: 'Your course score: <strong>{percentage}%</strong>',
    yourProgress: 'My progress',
    answeredQuestions: '<strong>{score}</strong> points on correctly answered questions',
    seenLecture: '<strong>{score}</strong> lessons seen',
    yourScore: 'Score: {score}',
    noScore: 'This course doesn\'t have quizzes'
  },
  settings: {
    settings: 'Settings',
    changeSettings: 'Change Settings',
    changeSettingsSuccess: 'Your changes are stored successfully!',
    changeSettingsError: 'There was an error changing your settings: {err}.',
    passwordChangeSuccess: 'Your password is successfully changed.',
    passwordChangeError: 'There was an error changing your password: {err}.',
    language: 'Language',
    takeMeBack: 'Take me Back',
    userPic: {
      change: 'Upload new profile picture (png or jpeg)',
      add: 'Add profile picture (png or jpeg)',
      chooseYourAvatar: 'Avatars'
    }
  },
  learnerProfile: {
    learnerProfile: 'Learner Profile',
    achievementsTitle: 'My Achievements',
    skillsTitle: 'My Skills',
    viewAll: 'View All',
    courses: 'Courses',
    learningPaths: 'Learning Paths',
    achievements: 'Achievements',
    skills: 'Skills',
    level: 'Level',
    frames: 'Gamification Frames',
    points: 'Course Points'
  },
  organization: {
    organization: 'My Organization',
    skills: 'Skill | Skills',
    members: 'Member | Members',
    level: 'Level',
    noGroupsYet: 'There are no organizational groups created yet.',
    noGroupsAdmin: 'There are no groups created yeet. Please create groups to be able to see the organizational structure here.',
    createGroupsBtn: 'Create Groups',
    points: 'Course Points'
  },
  certificates: {
    writeYourName: 'The certificate will be issued to {name}. ' +
      'To confirm please type your name again. If this is not the correct name please change it in your settings first',
    writeYourNameLabel: 'Type your name',
    yourPercentage: 'You\'ve got <strong>{score}%</strong>. You can still try to get more!',
    getMoreButton: 'Back to the course',
    notEligibleHeadline: 'Not yet eligible',
    notEligibleText: 'Go back to the course and answer the remaining questions',
    notEligibleOkButton: 'Ok, I understand what to do',
    congratulations: 'Congratulations!',
    eligibleHeadline: '👉 Score: {score}. After reaching this score, you can obtain your certificate. The course ends, but materials remain accessible on your dashboard.',
    eligibleHeadlineCombined: '👉 Progress achieved: {score} correct answers and {lectures} lectures completed. After reaching this level, you can obtain your certificate. The course ends, but materials remain accessible on your dashboard.',
    eligibleZeroScoreHeadline: 'You have finished the course and now you are eligible for certificate. The course will always be available in the completed courses section.',
    eligibleAnsweredAll: 'You have answered all the questions of the course and now you can finish the course. It will always be available in the completed courses section.',
    eligibleReadAll: 'You have marked all the lectures as read and now you can complete the course. It will always be available in the completed courses section',
    eligibleCancel: 'You don\'t need to complete the course now. The button to complete the course will always be available.',
    youCanCancel: 'You can go back to the course and get your certificate later. The button to get certificate will be always visible.',
    checkNameText: 'Your certificate will be given to your name. Check that it is ok',
    nameInSettingsText: 'The name that states in your settings is',
    changeSettingsLinkText: 'Change settings',
    changeNameLinkText: 'Change name',
    byProcedingWithCertGenText: 'By proceeding with the next step you agree to have finished the course and the name above, {name} refers to you.',
    instructions: 'After you receive the certificate you will be redirected to your dashboard. You will no longer be able to see your answers to this course.\n' +
      '            However, you will be able to re-enroll to it and do it again!',
    generateForName: 'Generate certificate for {name}',
    generate: 'Generate certificate',
    completeCourse: 'Complete course',
    getCertificate: 'Certificate',
    openCertificate: 'Open certificate',
    dontGenerate: 'Cancel',
    certificateTitle: 'CERTIFICATE OF COMPLETION',
    issuedOn: 'Issue date:',
    toCertifyThat: 'to state that',
    hasCompletedTheCourse: 'has completed the course',
    progress: 'progress',
    withScore: 'with a total score of {score}%',
    ofADurationOf: 'with a duration of {duration}',
    withDuration: 'With a duration less than one hour | With a duration of one hour | With a duration of {duration} hours',
    checkCertificateText: 'The authenticity of this certificate can be verified under:',
    wasCreatedByWorkademy: 'The course was created by <a href="https://www.theworkademy.com" target="_blank">Workademy</a> &mdash; Academy at work, Academy that works.',
    shareMyAchievement: 'Share my achievement',
    sharingTitle: 'I just finished the course {courseName}',
    sharingQuote: 'I just finished the course {courseName}',
    sharingDescription: 'I just finished the course {name} and got my certificate!',
    canGetCertificate: 'You have correctly answered <strong>{score}</strong> out of <strong>{total}%</strong> questions. <br>You can get your certificate.',
    needMoreToGetCertificate: 'You have to reach <strong>{total}%</strong> of correct answers points. <br> You\'ve reached <strong>{score}</strong>.',
    givenUpCourse: 'Seems like you gave up this course. You have to restart this course if you want to get a certificate',
    courseCompletedWithSuccess: 'Course {name} completed with success!',
    youHaveToAnswerAllQuestions: 'You have to answer all the questions to be able to complete the course.',
    youHaveToCompleteAllLectures: 'You have to complete all the lectures to be able to complete the course.',
    youHaveAnsweredAllQuestions: 'You have answered all the questions of the course and you can complete the course now.',
    youHaveCompletedAllLectures: 'You have completed all the lectures of the course and you can complete the course now.',
    youHaveAlreadyCompleted: 'You have already completed this course',
    youCompletedСertification: 'You have completed this certification',
    eligibleAllCertification: 'You have successfully answered all the quizzes, and now you can complete this certification. It will always be available in the completed courses section.',
    eligibleCancelCertification: 'You don\'t need to complete the certification now. The button to complete the certification will always be available.',
    youHaveAlreadyCertificate: 'Your certificate has already been issued to you. Click the button to access it.',
    shareOnLinkedIn: 'Add to LinkedIn'
  },
  vouchers: {
    introduceCode: 'Type your voucher code to enroll in the course',
    voucherCode: 'Voucher code'
  },
  admin: {
    attendance: {
      attending: 'Attending:',
      notAttending: 'Not Attending:',
      attendedLive: 'Attended:',
      seenBy: 'Seen by:'
    },
    enroll: {
      enrollIntoCourse: 'Enroll users into course {name}',
      enrollIntoLearningPath: 'Enroll users into learning path {name}'
    },
    stepper: {
      basicInformationTitle: 'Basic Information',
      mediaVisualsTitle: 'Media & Visuals',
      enrollmentAccessTitle: 'Enrollment & Access',
      certificationCompletionTitle: 'Certification & Completion',
      courseFeaturesTitle: 'Course & Features',
      commercialSettingsTitle: 'Commercial Settings',
      miscellaneousTitle: 'Miscellaneous',
      externalUrlTitle: 'Source',

      title: 'Course Title *',
      titleDesc: 'Set the name of the course.',
      descriptionTitle: 'Description',
      descriptionDesc: 'Write a brief summary or detailed description of the course.',
      tagsTitle: 'Tags',
      tagsDesc: 'Add tags to classify the course content.',
      durationTitle: 'Duration',
      durationDesc: 'Specify the length of the course.',
      durationLabel: 'Duration in Minutes',
      typeTitle: 'Course type',
      typeDesc: 'Define the course type to match its purpose. Each type is tailored for a specific learning or certification approach.',
      typeLabel: 'Select course type',
      types: {
        base: 'Base course',
        external: 'External course',
        SCORM: 'SCORM',
        certification: 'Certification course',
        umbrella: 'Umbrella course'
      },

      cardImageTitle: 'Course Card Image',
      cardImageDesc: 'Upload the image representing the course in listings.',
      coverImageChooser: 'Choose the cover image for the course',
      useDefaultCover: 'Use Default Cover',
      wideCoverTitle: 'Course Wide Cover',
      wideCoverDesc: 'Set the wide cover image for detailed views of the course.',

      externalTitle: 'External URL',
      externalDesc: 'Set a URL to lead learners to the external learning material.',
      externalLabel: 'Link to point the external course card to',

      anonymousAllowedTitle: 'Authentication Requirement',
      anonymousAllowedDesc: 'Decide if users can enroll without needing authentication.',
      anonymousAllowedLabel: 'Anonymous allowed',
      availableFromUntilTitle: 'Start and End Times',
      availableFromUntilDesc: 'Set the official start and end times for the course.',
      preEnrollAllowedTitle: 'Pre-enrollment',
      preEnrollAllowedDesc: 'Allow users to enroll in the course before the start date',
      preEnrollAllowedLabel: 'Pre-enroll allowed',
      advancedTitle: 'Advanced',
      enrollmentCodeTitle: 'Enrollment Code',
      enrollmentCodeDesc: 'Enable or disable the need for an enrollment code to join.',
      enrollmentCodeLabel: 'Activated with enrolment code',
      oneTimeEnrollmentTitle: 'One-Time Enrollment',
      oneTimeEnrollmentDesc: 'Specify if the course allows a single enrollment per user.',
      oneTimeEnrollmentLabel: 'One time enrollment (no possibility of repeating the course)',
      enrollmentApprovalTitle: 'Enrollment Approval',
      enrollmentApprovalDesc: 'Set whether enrollments require admin approval.',
      enrollmentApprovalLabel: 'Pre-approve Learners\' Enrollment',
      recurringCourseTitle: 'Recurring Course',
      recurringCourseDesc: 'Define whether the course is recurring and the first recurrence date.',

      certificationTitle: 'Certification Settings',
      certificationDesc: 'Enable or disable certification for the course.',
      gradeTitle: 'Grade Requirement',
      gradeDesc: 'Set the grade percentage needed for certification.',
      coolingOffPeriod: 'Cooling-off Period',
      coolingOffPeriodDesc: 'Define the time users must wait before re-attempting the course if they fail.',
      coolingOffPeriodLabel: 'Cooling-Off Time (hours)',
      pointsEarnedTitle: 'Points Earned',
      pointsEarnedDesc: 'Set the points users earn upon completing the course.',
      pointsEarnedLabel: 'Points Earned',

      learningSequenceTitle: 'Learning Sequence',
      learningSequenceDesc: 'Specify whether the course learning is sequential.',
      learningSequenceLabel: 'Sequential learning (each module opens after finishing the previous one)',
      forumDiscussionTitle: 'Forum Discussion',
      forumDiscussionDesc: 'Enable or disable discussion forums for the course.',

      paidTitle: 'Paid Course',
      paidDesc: 'Define whether the course is paid and set the price.',
      exemptTitle: 'Free access for groups',
      exemptDesc: 'Users belonging to the following groups are exempt from payment.',
      featuredTitle: 'Featured Course',
      featuredDesc: 'Mark if the course is featured and should appear in a highlighted section.',
      featuredLabel: 'Mark as Featured',

      folderTitle: 'Folder',
      folderDesc: 'Organize your course in a folder',
      disclaimerPopupTitle: 'Disclaimer Pop-up',
      disclaimerPopupDesc: 'Configure the pop-up disclaimer shown during enrollment.',
      templateTitle: 'Course Template',
      templateDesc: 'Specify if this course can be cloned or copied by other users.',
      templateLabel: 'Template course',
      manualOrderTitle: 'Manual Order',
      manualOrderDesc: 'Define the manual order of the course in course listings.',
      manualOrderLabel: 'Order of the course',
      customFieldsTitle: 'Custom Fields',
      customFieldsDesc: 'Add any custom fields relevant to the course.',
      newFieldNameLabel: 'Field Name',
      newFieldValueLabel: 'Field Value',
      newFieldNamePlaceholder: 'Name',
      newFieldValuePlaceholder: 'Value',

      coverLabel: 'Cover image',
      enterUrl: 'Enter URL',

      certificateForAnsweredQuestions: 'For answered questions',
      certificateForAnsweredQuestionsInfo: 'Issue certificate for the percentage of answered questions',
      certificateForReadLectures: 'For passed lectures',
      certificateForReadLecturesInfo: 'Issue certificate after all the lectures are passed',
      passingRateLabel: 'Passing Rate',
      forumLabel: 'Forum enabled',
      globalUsers: 'Global users',
      globalUsersDescription: 'Add or edit global users',
      globalTopics: 'Forum global topics',
      globalTopicsDescription: 'Add or edit global forum topics',
      comments: 'comments',
      withEnrolmentCode: 'Activated with enrolment code',
      anonymousAllowed: 'Anonymous allowed',
      modulesLabel: 'Number of modules',
      lecturesLabel: 'Number of lectures in each module',
      sectionsLabel: 'Number of sections in each lecture',
      createCourse: 'Create Course',
      updateCourse: 'Update Course',
      scormPreview: 'SCORM preview will appear here',
      oneTimeEnrollment: 'One Time Enrollment',
      popup: {
        title: 'Title',
        subtitle: 'Subtitle',
        content: 'Content',
        action: 'Action'
      },
      recurring: {
        isRecurringText: 'This course is recurring.',
        isNotRecurringText: 'This course is not recurring',
        periodLabel: 'Period of recurring',
        firstExecutionLabel: 'First re-enrollment should occur on:',
        firstExecutionExplanation: 'The first time the recurring will be applied. <br>' +
          'The learners who are enrolled in the course and have already finished it will be re-enrolled for the first time on this date.',
        amountLabel: 'Times',
        timesToRepeat: 'Times to repeat',
        periodOfRecurringText: 'Learners must repeat this course every ',
        saveRecurring: 'Save recurring information',
        deleteRecurring: 'Remove recurring properties',
        period: {
          MONTHLY: 'Month | Months',
          YEARLY: 'Year | Years'
        },
        messages: {
          createdSuccess: 'Recurring scheduler for course {name} created successfully.',
          updatedSuccess: 'Recurring scheduler for course {name} updated successfully.',
          deletedSuccess: 'Recurring scheduler for course {name} deleted successfully.',
          createdError: 'Error creating recurring scheduler for course {name}: {err}.',
          updatedError: 'Error updating recurring scheduler for course {name}: {err}.',
          deletedError: 'Error deleting recurring scheduler for course {name}: {err}.'
        }
      },
      ai: {
        topicAndLocaleTitle: 'Topic and Language',
        contextExplanation: 'Here you can write anything that will help to tailor the course to the specific company needs.',
        contextHint: 'Example: We are a growing insurance-tech company striving for sales success.',
        contextTitle: 'Additional Context',
        contentSpecificationTitle: 'Content Specifications',
        topicLabel: 'Topic of the course',
        localeLabel: 'Language of the course',
        contextLabel: 'Additional Context',
        noModulesLabel: 'Number of modules',
        noTopicsLabel: 'Number of topics in each module',
        noOptionsLabel: 'Number of options in each question',
        noModulesHint: 'Number of modules can be from 1 to 10',
        noTopicsHint: 'Number of topics per module cannot be less than one and more than 5',
        noOptionsHint: 'Number of options per question cannot be less than 3 and more than 5',
        specifyEveryModule: 'Specify each module you want to appear in your course',
        specifyEveryModuleExplanation: 'Specify the title of every module in the course, e.g. "Fundamentals of GDPR", "GDPR and insurance-tech", "GDPR for Developers"',
        modules: 'Modules',
        lectures: 'Lectures',
        questions: 'Questions',
        businessGoalsLabel: 'Business Goals of the course',
        businessGoalsHint: 'Start typing to search or create your own goal',
        businessGoalsExplanation: 'Business objectives should be SMART – Specific, Measurable, Achievable, Relevant, Time-bound. ' +
          'For example, "Increase Sales Revenue: Boost quarterly sales revenue by 15% by implementing advanced sales training for the team by the end of Q2."',
        businessGoalsExamples: [
          'Increase Sales Revenue: Boost quarterly sales revenue by 15% by implementing advanced sales training for the team by the end of Q2.',
          'Improve Customer Satisfaction: Achieve a customer satisfaction score of 90% by training customer service staff in conflict resolution and communication skills over the next 6 months.',
          'Enhance Employee Skills: Ensure 100% of the marketing department is trained in data analytics tools within the next 3 months to improve campaign efficiency.',
          'Reduce Operational Costs: Decrease production costs by 10% in the next year through streamlined operations and efficiency training for the production staff.',
          'Expand Market Reach: Enter 2 new international markets by the end of the year, preparing the sales team with language skills and cultural training by Q3.',
          'Increase Brand Awareness: Improve brand awareness by 25% as measured by social media engagement through a series of targeted digital marketing training sessions for the marketing team over the next quarter.',
          'Enhance Leadership Skills: Develop leadership skills in 20 mid-level managers by enrolling them in a comprehensive leadership training program by the end of the fiscal year.',
          'Boost Employee Retention: Reduce annual employee turnover by 5% through improved management practices and leadership development courses over the next 12 months.',
          'Improve Project Delivery Times: Shorten project delivery times by 20% within the next 9 months through advanced project management training for all project managers.',
          'Increase Production Efficiency: Achieve a 15% increase in production efficiency by training staff on new manufacturing technologies within the next 6 months.',
          'Enhance Digital Transformation: Train 90% of the company workforce in new digital tools and platforms by the end of the year to support digital transformation initiatives.',
          'Improve Health and Safety: Achieve zero workplace accidents for the coming year through comprehensive safety training for all new employees within their first month of employment.',
          'Increase Employee Engagement: Boost employee engagement scores by 10 points through leadership and motivational training sessions by year-end.',
          'Expand Product Line: Launch 3 new products by Q4, preparing the product development team with innovation management training sessions starting Q2.',
          'Reduce Customer Complaints: Decrease customer complaints by 20% within the next year by enhancing service protocols and complaint handling training for customer service teams.',
          'Optimize Supply Chain Management: Improve supply chain efficiency by 15% in the next 6 months through specialized training in supply chain logistics for team members.',
          'Enhance Cybersecurity Measures: Ensure that 100% of IT staff are trained in the latest cybersecurity practices and responses by the end of Q3 to mitigate risks.',
          'Improve Financial Reporting: Achieve 100% accuracy in financial reporting by training the finance team on new software and compliance standards over the next quarter.',
          'Maximize IT Efficiency: Increase IT system uptime to 99.9% by providing ongoing technical training for the IT staff starting next month.',
          'Develop Strategic Thinking: Cultivate strategic thinking across the organization by conducting workshops for all senior managers over the next 6 months.'
        ],
        averageAgeTitle: 'Average Age',
        averageAgeLabel: 'Average Age',
        averageAgeExplanation: 'What is the average age of the learners?',
        averageAgeHint: 'If your team is between 20 and 50 years old, 35 is the answer.',
        educationalBackgroundTitle: 'Educational Background',
        educationalBackgroundExplanation: 'What is the educational background of the learners? You can write something, for example, "Adults working in healthcare with no prior knowledge of emergency medical care."',
        educationalBackgroundLabel: 'Educational Background',
        educationalBackgroundHint: 'Example: Mostly master-degree specialists working on marketing research.',
        learningGoalsTitle: 'Learning Goals',
        learningGoalsExplanation: 'Ensure that learning objectives are specific, measurable, and aligned with business objectives.',
        learningGoalsLabel: 'Learning Goals',
        learningGoalsHint: 'Example: Learners will be able to apply basic first aid techniques.',
        acquiredAbilitiesTitle: 'Acquired Abilities',
        acquiredAbilitiesExplanation: 'Acquired abilities should be action-oriented and clearly state what learners will be able to do',
        acquiredAbilitiesLabel: 'Acquired Abilities',
        acquiredAbilitiesHint: 'Learners will be able to perform CPR correctly, identify signs of a heart attack, and use an AED.',
        timeCommitmentHoursTitle: 'Time Commitment (in Total Hours)',
        timeCommitmentHoursExplanation: 'Consider the intensity and pacing of the course based on learner availability.',
        timeCommitmentHoursLabel: 'Time Commitment',
        timeCommitmentHoursHint: 'Example: if the learners have 3 hours per week for 4 weeks, it is 12.',
        pdfTitle: 'Enrich the course content with a PDF',
        pdfExplanation: 'If you already have a PDF with a specific content for this course, you can upload it here.'
      },
      info: {
        step1: 'In this section, choose the course cover, give your course a title, and tick the template checkbox if this course will be a template for other courses. ' +
          '<span class="font-weight-bold">All these settings can be changed afterwards.</span>',
        step2: 'In this section, give your course a nice description. A list of learning objectives can be a nice description of a course. ' +
          'Use rich editor to highlight important information, create lists, or add colors. ' +
          '<strong>Course description can also be changed afterwards.</strong>',
        step3: 'Use this section to add the tags to the course. You can choose from the existing tags or create new ones. <strong>Course tags can be added and/or changed afterwards.</srong>',
        step4: 'Please specify the course duration in minutes. For example, if it lasts for 10 minutes, then it\'s 10 minutes, if it\'s 2 hours, then it\'s 120 minutes, etc. <strong>Course duration settings can be added and changed afterwards.</strong>',
        step5: 'Use this section to specify whether or not this course will be certifiable. You can also specify the minimum passing rate, in percentage from 0 to 100. ' +
          '<strong>These settings can be specified and changed afterwards.</strong>',
        certificateScormExplanation: 'Use this section to specify whether or not this course will be certifiable. ' +
          '<strong>These settings can be specified and changed afterwards.</strong>',
        step6: 'Social learning is a great tool for motivation! Tick the box to enable Disqus forum after every lecture in the course. ' +
          '<strong>This option can be enabled and disabled any time afterwards.</strong>',
        step7: '',
        step8: 'Use this section to specify the number of modules in the course, lectures per module, and section per lecture. ' +
          '<strong>It\'s not a final decision, after the course is created, you can add or remove modules, lectures, and sections.</strong>',
        anonymousAllowedExplanation: 'Enable this to enable course to be seen anonymously without authentication. ' +
          'Beware though that the tests and certificates would not make sense in this kind of a course.',
        preEnrollAllowedExplanation: 'Uncheck to disallow learners enrolling before course starts',
        externalUrl: 'Paste the external URL that the course card will point to',
        paidCourse: {
          amount: 'Amount',
          currency: 'Currency',
          paymentType: 'Payment Type',
          amountShouldBeAboveZero: 'Amount cannot be less than zero',
          paymentTypes: {
            STRIPE: 'Stripe',
            LIQPAY: 'LiqPay',
            MONOBANK: 'Monobank',
            REVOLUT: 'Revolut'
          }
        },
        availableFromTo: 'Set the official start and end times for the course.',
        sequentialLearning: 'Enable this option if a learner can only proceed to a next lecture after completing a previous one.',
        oneTimeEnrollment: 'Check this option to disable a learner from multiple enrolments to the course.',
        paidCourseInfo: 'Set up the payment information. It is not possible to change the payment provider in the future, however, it is possible to change the amount and the currency. ' +
          '<strong>Make sure that the corresponding Payment Service Provider integration is configured in the <em>Admin -> Integrations</em> section</strong>',
        voucherActivated: 'Check the option if you have set up enrolment codes for this course and the course requires the enrolment codes for access.',
        customFields: 'Here you can define the custom fields of the course <strong>(Advanced configuration)</strong>',
        scormUpload: 'Upload the SCORM file here. You can change it at any time in the future.',
        ordering: 'Specify the desired position of the course within the list. If you want this course to be displayed at a specific position, you can set the ordering value accordingly. For example, if you want a particular course to be listed first, set the ordering to <strong>1</strong>.' +
          '<br><br><em>To disregard the ordering and use the default sorting, set the ordering value to <strong>1000</strong>. The course will then be sorted based on its creation or update time.</em>',
        points: 'Define course points (these points will be summed up and displayed in the user learner card).',
        preEnrollDescription: 'Define the HTML of the pre-enrollment popup that will appear to every student before they are enrolled into the course.',
        preApproveEnrollmentDescription: 'Choose this option if the enrollment approval is required. ' +
          'The learners will then try to enroll into courses but will not be able to start the courses while admins don\'t approve their enrollment.',
        courseFolder: 'Organize your courses by assigning them to specific folders. This helps maintain a clear and structured system for easier navigation and management.',
        aggregated: {
          metadata: 'Define all the course metadata here: course title, cover image, description, duration, tags. Define the course order and custom fields if needed.',
          socialLearning: 'Social Learning - define whether or not the discussion forum is available after every lecture.',
          achievements: 'Define the course achievements – avatar frames, course points, certificate.',
          courseAccess: 'Define the settings related to the course availability: start and finish date, whether or not it is available for anonymous view, or by enrolment codes.',
          recurring: 'Define the settings if the course need to be recurring: the enrolled users have to periodically repeat the course. ' +
            'It can be useful for some mandatory trainings like compliance. <strong>NOTE: only applies to the learners who are enrolled as a group.</strong>'
        },
        ai: {
          topicAndLocale: 'Provide a course topic and indicate the language of the generated content.',
          context: 'Here you can fine-tune your course for your business needs, learners\' goasl, and other specificities.',
          specification: 'Provide specific titles for modules',
          numberOfThings: 'Indicate the number of modules, topics, and options in each assessment questions.'
        },
        featuredDescription: 'Mark this course as featured. It will appear in the big carousel section of the courses listing.'
      }
    },
    newCourse: {
      courseName: 'Course Title',
      courseDescription: 'Course Description',
      createNewCourse: 'Create new course',
      newExternalResource: 'Create new external resource',
      newScormCourse: 'Create new SCORM course',
      exploreAllWaysToCreateNewCourse: 'Explore all ways to create a course',
      newUmbrellaCourse: 'Create new UMBRELLA course',
      importCourse: 'Import course in JSON',
      downloadJSON: 'Download course in JSON format',
      uploadJSON: 'Upload JSON',
      createUmbrellaCourse: 'Create Umbrella Course',
      createUmbrellaCourseExplanation: 'Create a course that will display a decision tree for a learner.',
      createUmbrellaCourseCaption: 'A learner would answer the question and will be lead to the correct course after answering them.',
      uploadJSONExplanation: 'Upload a json of a previously exported course',
      uploadJSONCaption: 'The best way to clone courses between workspaces!',
      usingWizard: 'Create a course using our smart wizard',
      basedOnBloom: 'based on backward planning and Bloom\'s taxonomy',
      comingSoon: '(coming soon)',
      usingBasicStructure: 'Create a course with a basic structure',
      usingExternalResource: 'Create new link to an external resource',
      createExternalCourse: 'Create a link to an external resource',
      createScormCourse: 'Create a course based on a SCORM package',
      lookingLikeCourseCard: 'It will look like a normal course card',
      scormCourseDescription: 'Create a course and upload your SCORM package or replace the link to the SCORM file',
      pointingToExternalResource: 'and it will point to an external resource',
      toBeLaterFilledWithContent: 'To be later filled in with content',
      iKnowWhatDoing: '(I know what I\'m doing!)',
      passingRateCantBeMore: 'Passing rate can not be more than 100',
      passingRateCantBeLess: 'Passing rate can not be less than 0',
      courseBeingCreated: 'The course {name} is being created...',
      courseBeingUpdated: 'The course {name} is being updated...',
      beforeCreating: 'Consider downloading ' +
        '<strong><a href="https://assets.theworkademy.com/shared/WORKADEMY_CREATE_COURSE_FROM_SCRATCH.pdf" target="_blank">this PDF</a></strong> ' +
        'before starting creating courses. ' +
        'It will help you with the course structure'
    },
    editExistingCourses: 'Manage Existing Courses',
    editExistingLearningPaths: 'Manage Existing Learning Paths',
    editCourseInfo: 'Edit Course Info',
    enrollUsers: 'Enroll Users',
    checkProgress: 'Check Users Progress',
    durationInMinutes: 'Duration in Minutes',
    availabilityDates: 'Course availability dates',
    manageCoursesTitle: 'Manage Courses',
    manageLearningPathsTitle: 'Manage Learning Paths',
    templateCoursesTitle: 'Templates',
    forumEnabled: 'Forum Enabled (each lecture has a discussion forum attached)',
    voucherActivated: 'Voucher Activated Enrollment (you should set up campaigns in the campaigns management admin section)',
    certificateEnabled: 'Certificate enabled',
    sharableCertificate: 'Certificate can be added to LinkedIn',
    publicCourse: 'Public course (available for the outside world) – WIP',
    sequentialProgress: 'Sequential learning (each module opens after finishing the previous one)',
    oneTimeEnrollOnly: 'One time enrollment (no possibility of repeating the course)',
    quiz: {
      questionText: 'Question Text',
      questionAnswers: 'Question Answers',
      questionExplanation: 'Question Explanation',
      limitAttempts: 'Limit attempts',
      numberAttempts: 'Number of attempts',
      addTimeLimit: 'Add time limit',
      timeLimitseconds: 'Time limit (seconds)',
      editAnswer: 'Edit Answer',
      editAnswerLabel: 'Edit the answer',
      explanation: 'Explanation',
      editQuestion: 'Edit Question',
      addNewQuestion: 'Add new quiz question',
      questionType: 'Question Type',
      itemLabel: 'Item',
      categoryLabel: 'Category',
      doesntCountForEvaluation: 'Doesn\'t count for evaluation',
      openAnswer: {
        evaluateOpenAnswerOf: 'Evaluate open question answer of {user}',
        answer: 'Answer',
        usersFile: 'User\'s file',
        downloadFile: 'Download user\'s file',
        noFile: '{user} hasn\'t upload any file',
        markAsIncorrect: 'Mark as incorrect',
        markAsCorrect: 'Mark as correct'
      }
    },
    editingMode: {
      editCourse: {
        editCourseTitle: 'Edit course {name}'
      },
      inlineEditorPlaceholder: 'Type the text...',
      placeholder: {
        courseTitle: 'Type the course title...',
        courseDescription: 'Type the course description...',
        moduleTitle: 'Type the module title...',
        moduleDescription: 'Type the module description..',
        lectureTitle: 'Type the lecture title...',
        lectureDescription: 'Type the lecture description..',
        sectionTitle: 'Type the section title...',
        sectionText: 'Type the section text...',
        questionText: 'Type the question...',
        answerText: 'Type the answer...',
        bubbleText: 'Type the bubble text...',
        optionTitle: 'Type the option title...',
        accordionTitle: 'Type the accordion title...',
        accordionText: 'Type the text...',
        quizDescription: 'Type the quiz description...'
      },
      questionBank: {
        bankSwitch: 'Questions Bank',
        title: 'Create question bank for this lecture / module and use randomly chosen number of questions to be shown to the learners.',
        weightLabel: 'How many questions of weight {weight} to use in bank?',
        weightHint: 'Maximum {max} allowed',
        usedText: 'Used <span class="font-weight-bold ">{numberOfUsedQuestions}</span> out of <span class="font-weight-bold ">{totalNumberOfQuestions}</span> total number of questions'
      },
      lecture: {
        editLecture: 'Edit lecture',
        editLectureHeader: 'Edit lecture header',
        noHeader: 'no header',
        editHeaderCover: 'Cover image',
        addHeaderCover: 'Cover image',
        editVideoSource: 'Video source',
        addVideoSource: 'Video source',
        editLiveLecture: 'Live lecture',
        editTypeformLecture: 'Typeform',
        addTypeformLecture: 'Typeform',
        editLoomLecture: 'Edit Loom',
        addLoomLecture: 'Add Loom',
        editScormLecture: 'Edit SCORM package',
        addScormLecture: 'Add SCORM package',
        enableLoom: 'Configure loom in admin/integrations',
        addLiveLecture: 'Live lecture',
        pasteLiveLink: 'Paste link to Zoom or any other video conference',
        liveStartTime: 'Start Time',
        liveFinishTime: 'Finish Time',
        onClearHeader: 'Clear Header',
        navigateLectureWith: 'Navigate lecture with:',
        navigateWithButton: 'Continue Button (each next lecture section opens on a "Continue" button click)',
        navigateWithScroll: 'Scroll (all sections are opened by default)',
        recordLoomVideo: 'Record Loom Video',
        addLoomVideoUrl: 'Edit Loom Video URL',
        addScormUrl: 'Edit SCORM package URL',
        editPdfSectionDesc: 'This section allows you to render a PDF inside a lecture and to download it.',
        editSevenTapsLecture: 'Edit 7taps lecture',
        addSevenTapsLecture: 'Add 7taps lecture',
        invalidPdfUrl: 'Invalid PDF URL (must end with .pdf)'
      },
      editCourseStructure: 'Edit course structure',
      clickHereToChangeText: 'Click here to change text',
      editCourseInfo: 'Edit Course Info',
      enrollUsers: 'Enroll Users',
      checkProgress: 'Check Users Progress',
      editCourseDescription: 'Edit Course Description',
      editLectureDescription: 'Edit Lecture Description',
      addNewModule: 'Add new module',
      addNewLecture: 'Add new lecture to the module',
      addNewSection: 'Add new section',
      addNewBranchSection: 'Add new branch section',
      deleteModule: 'Delete module',
      editModuleDescription: 'Edit Module Description',
      deleteLecture: 'Delete lecture',
      deleteGamificationItem: 'Delete Gamification Item',
      saveCourseBeforeEditingLecture: 'Save the course before being able editing lecture',
      addSection: 'Add new section',
      addQuestion: 'Add new question',
      addNewBubble: 'add new bubble',
      newTextBubble: 'Text Bubble',
      newVideoBubble: 'Video Bubble',
      newAudioBubble: 'Audio Bubble',
      newQuestionBubble: 'Question Bubble',
      changeVideoSource: 'Change Video Source',
      changeAudioSource: 'Change Audio Source',
      editSection: 'Edit Section',
      deleteSection: 'Delete Section',
      add: 'Add New',
      duplicateSection: 'Duplicate Section',
      moveUp: 'Move Section Up',
      moveDown: 'Move Section Down',
      deleteOption: 'Delete Option',
      addOption: 'Add Option',
      editMediaSource: 'Edit Media Source',
      changeMediaSourceLabel: 'Change media source of the lecture',
      addVideoLabel: 'Paste YouTube, Vimeo, Wistia, Loom, or GoogleDrive link',
      videoPreview: 'Video Preview will appear here',
      addTypeformUrl: 'Paste your typeform url',
      addSevenTapsUrl: 'Paste your 7Taps course url',
      addTypeformId: 'Paste your typeform ID',
      changeMediaSourceHint: 'Media source can be a path to an image in png or jpg/jpeg format. ' +
        'It can also be a path to a Youtube video in a form of https://www.youtube.com/embed/qeUGOsW8ewk ' +
        'or it can be a path to a Vimeo video in a form of https://player.vimeo.com/video/334294316',
      mediaSource: {
        clickToCreateVideoOrCover: 'Click here to create a video lecture or to add a cover image',
        clickHereToCreateLiveLecture: 'Click here to create a live Zoom or Google Meets Lecture (coming soon)',
        clickToEditVideoSrc: 'Click here to edit a video source or replace it with a cover image',
        clickToEditCover: 'Click here to replace a cover image or add a video source',
        canBeImage: 'Media source can be a path to an image in PNG or JPG format.',
        canBeYoutube: 'Media source can be a path to a YouTube video, e.g. https://www.youtube.com/embed/qeUGOsW8ewk',
        canBeVimeo: 'Media source can be a path to a Vimeo video, e.g. https://player.vimeo.com/video/334294316',
        canBeTypeform: 'Media source can be a path to a Typeform survey, e.g. https://workademy.typeform.com/to/j2OAMk',
        dropZoomInvite: 'Drop an invitation to your Zoom lecture',
        addMediaSource: 'Add a media source (image, video, or survey)',
        createZoomLecture: 'Create a Zoom lecture'
      },
      editQuestion: 'Edit Question',
      addNewQuestion: 'Add new quiz question',
      questionType: 'Question Type',
      deleteQuestion: 'Delete Question',
      deleteQuestionDialogTitle: 'Danger Zone!',
      deleteQuestionDialogText: ' Deleting a question might result in error due to the students\' work in progress. ' +
        'Consider saving the course before trying this one.',
      newModuleName: 'Module name',
      newModuleDescription: 'Module description',
      newLectureName: 'Lecture name',
      newLectureDescription: 'Lecture description',
      resetBtn: 'Reset',
      resetBtnTooltip: 'Reset your changes on the course.',
      saveBtn: 'Save',
      saveBtnTooltip: 'There are some unsaved changes. Save them or reset.',
      publishBtn: 'MAKE AVAILABLE',
      publishBtnTooltip: 'publish or unpublish your course to become available or unavailable in the list of the courses or for SEO (for public workspaces).',
      unpublishBtn: 'MAKE UNAVAILABLE',
      exportJSON: 'Export JSON',
      importJSON: 'Import JSON',
      pasteJSON: 'Paste JSON of the course',
      errorReadingJSON: 'Error reading JSON',
      copyCourseUrl: 'Copy Course Url',
      courseUrlCopied: 'Course Url Copied',
      sections: {
        newTextSection: 'Rich Text',
        newQuestionSection: 'Question',
        newDialogSection: 'Dialog-like',
        newPDFSection: 'PDF',
        newButtonSection: 'Button',
        newImageTextSection: 'Image+Text',
        newVideoTextSection: 'Video+Text',
        newAudioTextSection: 'Audio+Text',
        newAccordionSection: 'Accordion',
        newBranchSection: 'Branching',
        newImportantSection: 'Important',
        newAdditionalInfoSection: 'Additional Info',
        newExamplesSection: 'Examples',
        newGridSection: 'Grid',
        newTextSectionDescription: 'This section is perfect for any type of text you want to add to your lecture. ' +
          'You can enrich it with formatting, bullet lists, images, videos, and any type of HTML you like.',
        newQuestionSectionDescription: 'This section serves whenever you want to add a single or multiple choice question inside your lecture.',
        newDialogSectionDescription: 'This section serves to add a small piece of chat-like content, with avatar and several bubbles. ' +
          'These bubbles can be text, video, image, or even a question bubbles!',
        newPDFSectionDescription: 'This section allows you to render a PDF inside a lecture and to download it.',
        newButtonSectionDescription: 'This section allows you to render a button inside a lecture pointing rather to internal or to external link.',
        newImageTextSectionDescription: 'This section is an easy way to add an image with some text. You can play with a size of image or text and change their sides.',
        newVideoTextSectionDescription: 'This section is an easy way to add a YouTube or a Vimeo video with some text. You can play with a size of a video or text and change their sides.',
        newAudioTextSectionDescription: 'This section is an easy way to add an audio with some text. You can play with a size of audio display or text and change their sides.',
        newAccordionSectionDescription: 'This section is a perfect way to add some optional information for those who want to know in a deeper detail. ' +
          'The information will be hidden inside the expandable options.',
        newBranchSectionDescription: 'Give some control to your learners providing several choices after which the course of the lecture will change. ' +
          'Currently only available for the dialog-like sections',
        newImportantSectionDescription: 'Highlight some important information of your lecture',
        newAdditionalInfoSectionDescription: 'Highlight some additional information of your lecture',
        newExamplesSectionDescription: 'Highlight some examples within your lecture',
        newGridSectionDescription: 'Create a grid with as many rows and columns you need and fill it with picture and/or text',
        newTableSection: 'Table',
        newTableSectionDescription: 'Create a table with the exact number of rows and columns you need',
        accordion: {
          accordionTitle: 'Accordion title',
          enterTitle: 'Enter a title for this accordion section',
          addAccordionSection: 'Add accordion section'
        },
        grid: {
          columnsLabel: 'Number of columns',
          rowsLabel: 'Number of rows',
          maxHeightLabel: 'Maximum Height',
          text: 'Text',
          image: 'Image',
          imageCaption: 'Image Caption'
        },
        table: {
          sortable: 'sortable',
          fixFirstColumn: 'Fix first column'
        },
        branch: {
          branchOptionName: 'Option Name',
          branchingOptionsSectionsTitle: 'branching option sections',
          addSection: 'add section',
          deleteOption: 'delete option',
          saveOption: 'save option',
          addBranchingOption: 'Add branching option',
          option1Title: 'Option 1',
          option2Title: 'Option 2',
          optionTitle: 'Option Title'
        },
        dialog: {
          configureDialogSection: 'Configure Dialog Section',
          leftSide: 'Left Side of the Conversation',
          rightSide: 'Right Side of the Conversation',
          avatarLink: 'Avatar Link',
          avatarName: 'Avatar Name',
          userPictureAvatar: 'User picture avatar'
        },
        examples: {
          branch: {
            option1: 'Option 1',
            option2: 'Option 2',
            option3: 'Option 3',
            text: 'Thank you for choosing the second option'
          },
          dialog: {
            content1: 'Hello',
            content2: 'Today we are going to talk about the weather',
            content3: 'Thank you for joining us'
          }
        },
        buttonSection: {
          buttonText: 'Button text',
          buttonLink: 'Button link',
          buttonClass: 'Button CSS class',
          text: 'This text will appear before the button. Remove it completely if it is not needed',
          textExample: 'Click on the button to proceed to the <strong>user settings</strong>',
          buttonTextExample: 'Let\'s go!'
        },
        importantLabel: 'Important',
        additionalInfoLabel: 'Additional Information',
        examplesLabel: 'Examples'
      },
      tags: {
        addTagsLabel: 'Add filtering tags to the course',
        noResults: 'No results matching "<strong>{search}</strong>". Press <kbd>enter</kbd> to create a new one'
      },
      lectureInClipboard: 'Lecture {lecture} is in clipboard. You can now paste it after any lecture.',
      moduleInClipboard: 'Module {module} is in clipboard. You can now paste it after any module.',
      sectionInClipboard: 'Section of the type {section} is in clipboard. You can now paste it after any section.',
      copyModule: 'Copy Module',
      pasteModule: 'Paste Module',
      copyLecture: 'Copy Lecture',
      pasteLecture: 'Paste Lecture',
      createCourseOfLecture: 'Create a single page public course',
      copyQuestion: 'Copy Question',
      pasteQuestion: 'Paste Question',
      copySection: 'Copy Section',
      pasteSection: 'Paste Section',
      quiz: {
        bankSwitch: 'Questions Bank',
        changeQuestion: 'Change the text of the question here'
      },
      umbrella: {
        itemTitle: 'Write a title (question) for the decision here',
        addDecisionOption: 'Add a decision option',
        deleteOption: 'Delete decision option',
        optionTitle: 'Option text',
        umbrellaCourse: 'Course {courseName}',
        umbrellaOptions: '{optionsNumber} options',
        backButton: 'Back',
        nextButton: 'Next',
        decisionOption: 'Decision Option',
        courseOption: 'Course Option'
      }
    },
    gamification: {
      typeLabel: 'Type',
      nameLabel: 'Name',
      descriptionLabel: 'Description',
      editGamification: 'Edit achievements',
      addGamificationItem: 'Add achievement item',
      saveGamificationItems: 'Save achievements',
      changeName: 'Achievement\'s name',
      changeDescription: 'Achievement\'s description',
      saveItems: 'Save achievement items',
      hideEditing: 'Hide Editing Mode',
      editItem: 'edit item',
      questionAnswerRateLabel: 'Questions answered rate',
      chooseCompletedLectures: 'Choose lectures that should be completed',
      chooseAnsweredQuestions: 'Choose questions to be answered',
      types: {
        QUESTIONS_ANSWERED: 'Questions answered',
        LECTURES_COMPLETED: 'Lectures completed',
        QUESTIONS_ANSWERED_RATE: 'Questions answered rate'
      },
      achievementTypes: {
        FRAME: 'Frame'
      },
      collectAchievements: 'Start collecting badges: make progress in your courses and answer questions'
    },
    progress: {
      coursesTitle: 'Courses',
      learningPathsTitle: 'Learning Paths',
      learningPathCourses_de: 'Lernpfad-Kurse',
      coursesTitleCoursesName: 'Courses – {courseName}',
      learningPathTitleCoursesName: 'Learning paths - {learningPathName}',
      coursesTitleCourseUserName: 'Courses – {courseName} – {userName}',
      learningPathTitleUserName: 'Learning paths – {learningPathName} – {userName}',
      clickOnLearningPathStep: 'Click on a course card to check the {name}\'s progress on a course',
      learningPathNoSteps: 'This learning path does not contain steps',
      cantFetchDataLearningPathStep: 'Cant fetch data for the {stepName}. Most likely, the step has been done by user {userName}',
      startedOn: 'Started on {startedOn}',
      finishedOn: 'Finished on {finishedOn}',
      progress: 'Progress: {progress}%',
      startedOnTitle: 'Started on',
      finishedOnTitle: 'Finished on',
      progressTitle: 'Progress',
      lastActivityTitle: 'Last activity',
      statusTitle: 'Status',
      certificateTitle: 'Certificate',
      certificate: 'certificate',
      nameTitle: 'Name',
      emailTitle: 'Email',
      noCourses: 'You haven\'t create any courses yet',
      noCoursesWithSearch: 'No courses found with this search criteria',
      createCourses: 'Create courses',
      createLearningPaths: 'Create learning paths',
      progressOfUser: 'Progress of {userName}',
      answeredQuestions: 'Answered {correct} / {total}',
      wrongAttempts: '{wrong} / {total} wrong attempts',
      searchCoursePlaceholder: 'name, description, tags, anything!',
      searchCourseLabel: 'Search Courses',
      usersPerPage: 'Learners per page',
      downloadCSV: 'Download CSV',
      download: 'Download report',
      downloadForGroup: 'Download group report',
      downloadFull: 'Download full report',
      totalStudents: 'Total enrolled learners: {total}',
      searchUserLabel: 'Search user by email',
      searchUserPlaceholder: 'Exact email to search for',
      enrollCount: 'No members | One member | {n} members',
      inactiveCount: 'Inactive: {n}',
      runningCount: 'Enrolled members: {n}',
      finishedCount: 'Finished: {n}',
      noUsersInCourse: 'There are no users enrolled into this course.',
      noUsersInLearningPath: 'There are no users assigned to this learning path.',
      userNotEnrolled: 'The user {name} is not enrolled into this course.',
      filterByUser: 'Filter by user',
      searchUser: 'Search User',
      totalCourses: 'Total courses found: {total}',
      totalEnrollments: 'Total found: {total}',
      totalPendingEnrollments: 'Total pending enrollments found: {total}',
      approvePendingTitle: 'Approve',
      approvePendingButton: 'Approve',
      approvedSuccessfullyMessage: 'The enrolment of {name} was successfully approved.',
      approvedErrorMessage: 'The enrolment of {name} was not approved due to the error: {err}',
      reports: {
        reportIsGenerating: 'Report is being generated. Please wait.',
        reportGeneratedSuccessfully: 'Report generated successfully.',
        reportGeneratedWithError: 'Report generation failed: {err}',
        csvInstructions: '<p>To recognize UTF-8 in the downloaded file:</p>' +
          '<ol>' +
          '<li>Save the exported file as a csv</li>' +
          '<li>Open Excel</li>' +
          '<li>Import the data using Data-->Import External Data --> Import Data</li>' +
          '<li>Select the file type of "csv" and browse to your file</li>' +
          '<li>In the import wizard change the File_Origin to "65001 UTF" (or choose correct language character identifier)</li>' +
          '<li>Change the Delimiter to comma</li>' +
          '<li>Select where to import to and Finish</li>' +
          '<li>This way the special characters should show correctly.</li>' +
          '</ol>'
      },
      certificates: {
        userCertificateTitle: 'Certificate',
        changeCertificateData: 'Change Certificate Data',
        dialog: {
          title: 'Change Certificate Data',
          nameLabel: 'Change Learner\'s Name',
          changeButton: 'Change',
          success: 'Certificate data changed successfully for {name}',
          error: 'There was an error changing certificate data for {name}: {err}'
        }
      }
    },
    usersManagement: {
      title: 'User Management',
      searchUserLabel: 'Search user by email',
      searchUserPlaceholder: 'john.doe@gmail.com',
      emailTitle: 'Email',
      nameTitle: 'Name',
      sourceTitle: 'Source',
      adminTitle: 'Workspace Admin',
      invitedTitle: 'Invited',
      acceptedTitle: 'Accepted Invitation',
      sendInvitationToEveryone: 'Invite all the users',
      invited: 'invited',
      accepted: 'accepted invite',
      sendInvitation: 'Send invitation',
      resendInvitation: 'Resend invitation',
      revokeAccess: 'Revoke Access'
    },
    staffManagement: {
      title: 'Users Management',
      inviteUsersDialogTitle: 'Invite Users',
      addUsers: 'Add Users',
      uploadUsersCSV: 'Or upload a CSV file <strong>(format: First Name, Last Name, Email)</strong>',
      inviteUsersDialogDescriptions: 'New members will receive email after being invited',
      inviteUsersByEmail: 'Invite users by email. Type an email and click enter to type another one.',
      searchUserLabel: 'Search a workspace member by user\'s email',
      searchUserPlaceholder: 'john.doe@gmail.com',
      emailTitle: 'Email',
      hasCourseCreationRights: 'Can create courses',
      hasVoucherCreationRights: 'Can create vouchers',
      addCourseCreationRights: 'Add course creation rights',
      tabs: {
        userTabTitle: 'Users',
        groupTabTitle: 'Groups',
        syncTabTitle: 'Manage Invitations'
      },
      totalStudents: 'Total learners found {total}',
      noGroups: 'No groups assigned yet',
      searchGroup: 'Search groups',
      searchUsers: 'Search Users',
      inactiveForDays: 'Inactive for days',
      inactiveDaysCount: 'Number of inactive days',
      inactivityPeriods: {
        WEEK: 'week',
        TWOWEEKS: 'two weeks',
        MONTH: 'month',
        HALFAYEAR: 'half a year',
        YEAR: 'year'
      },
      createGroupButtonTitle: 'Create Group',
      createUsersButtonTitle: 'Create Users',
      detailsButtonTitle: 'Details',
      totalGroups: 'Total groups found {total}',
      totalUsers: 'Total users found {total}',
      noRoles: 'No roles assigned',
      noUsers: 'No members in the group | One member | {n} members',
      learningJorneyTitle: 'Learning Journey',
      userCoursesTitle: 'User Courses (total {n})',
      lastUserCoursesTitle: 'User Courses ({n})',
      lastUserLearningPathsTitle: 'User Learning Paths ({n})',
      userTitle: 'User',
      coursesTitle: 'Courses',
      skillsTitle: 'Skills',
      groupsTitle: 'Groups',
      assignSkillButton: 'Assign Skill',
      removeSkillButton: 'Remove Skill',
      assignSkillsToUserTitle: 'Assign Skills to {name}',
      assignGroupButton: 'Assign Group',
      assignGroupsToUserTitle: 'Assign Groups to {name}',
      assignUserToGroupButton: 'Add user to Group',
      removeUserFromGroupButton: 'Remove user from Group',
      permissionsTitle: 'Permissions',
      assignPermissionButton: 'Change Permissions',
      blockUserButton: 'Block User',
      unBlockUserButton: 'Unblock User',
      deleteUserButton: 'Delete User',
      userBlockedSuccessfully: 'User {name} blocked successfully',
      userBlockedWithError: 'There was an error blocking the user {name}: {errorText}',
      userUnblockedSuccessfully: 'User {name} unblocked successfully',
      userUnblockedWithError: 'There was an error unblocking the user {name}: {errorText}',
      userDeletedSuccessfully: 'User {name} deleted successfully',
      userDeletedWithError: 'There was an error deleting the user {name}: {errorText}',
      noSkillsYet: 'No skills acquired yet',
      userCard: {
        name: 'Name',
        memberSince: 'Member Since',
        email: 'Email',
        role: 'Role',
        group: 'Groups'
      },
      roles: {
        ROLE_STUDENT: 'Student',
        ROLE_ADMIN: 'Workspace Admin',
        ROLE_COURSE_ADMIN: 'Course admin',
        ROLE_VOUCHER_ADMIN: 'Voucher admin',
        ROLE_FILE_UPLOAD: 'File upload',
        ROLE_INTEGRATIONS_MANAGER: 'Integrations admin'
      },
      statuses: {
        filterLabel: 'User status',
        inactiveUserCourses: 'Inactive',
        blockedUser: 'Blocked',
        running: 'Running',
        finished: 'Finished',
        archived: 'Archived',
        inactiveUserExplanation: 'This user is not making any progress in one of the courses and is now marked as <strong>inactive</strong>'
      },
      notifyInactivityButton: 'Notify Inactivity',
      resultsFound: 'No results found | {n} result found | {n} results found',
      notifications: {
        modal: {
          sendingAlert: 'You are about to send the following notification to this user.',
          sendingButton: 'Send Now',
          inactiveUserCourses: {
            title: 'Notify inactivity',
            description: '',
            defaultMessage: 'Looks like you haven\'t done any progress in a long time on some of your courses. Please return to your active courses or ask your admin to assign you to a new one.'
          },
          notificationSentSuccessfully: 'Notification successfully sent!',
          notificationSentWithError: 'There was an error sending notification to the user: {errorText}'
        }
      },
      inviteUserSuccessful: 'User {name} was invited successfully',
      inviteUserError: 'There was an error inviting user {name}: {err}',
      addUsersSuccessful: 'Users were added successfully',
      addUsersError: 'There was an error adding users: {err}'
    },
    campaignManagement: {
      titleCampaigns: 'Campaigns',
      searchCampaign: 'Search Campaigns',
      totalCampaigns: 'Total campaigns found: {total}',
      titleCampaign: 'Campaigns – {name} – {courseName}',
      createCampaign: 'Create new campaign',
      createDiscountCampaign: 'Create new discount',
      discountLabel: 'Discount (%)',
      noCampaigns: 'No campaigns created yet',
      campaignName: 'Campaign Name',
      startDate: 'Start Date',
      expireDate: 'Expire Date',
      maxUsages: 'Maximum number of usages',
      newCampaign: 'New Campaign',
      voucherCode: 'Enrolment code',
      voucherUsage: 'Number of usages',
      noVouchers: 'No vouchers added yet to the campaign',
      addVouchers: 'Generate vouchers',
      currentUsage: 'Usages',
      campaignNameLabel: 'Change campaign\'s name',
      uniqueRedeem: 'Unique redeem',
      multipleRedeem: 'Multiple redeem',
      campaignType: 'Campaign type',
      withMaxNumberUsages: 'with maximum number of usage {maxUsages} times',
      editCampaign: 'Edit campaign',
      deactivate: 'Deactivate campaign for the course',
      activate: 'Activate campaign for the course',
      addMoreVouchers: 'Generate vouchers',
      uniqueRedeemExplanation: 'Codes associated with this campaign are personal and can only be redeemed once',
      multipleRedeemExplanation: 'Codes associated with this campaign can be redeemed multiple times',
      newCampaignNameLabel: 'Give campaign a name',
      campaignCourse: 'Search Course',
      hideExpiredCampaigns: 'Hide expired campaigns',
      showExpiredCampaigns: 'Show expired campaigns',
      noPaymentInformationAlert: 'No payment information provided. Please chose a course or configure payment information in the chosen course.',
      paymentWithDiscountInfo: 'Original course price is <strong>{price} {currency}</strong>. Discounted price is <strong>{discounted} {currency}</strong>',
      campaignTypes: {
        labels: {
          COURSE_ENROLLMENT: 'Course Access Restriction Campaign',
          COURSE_PERCENT_DISCOUNT: 'Payment Discount Campaign'
        }
      },
      voucherActivated: {
        voucherActivatedMessage: 'Voucher activation for this course is enabled',
        voucherNotActivatedMessage: 'Don\'t forget to enable voucher activation for this course',
        editCourseLinkText: 'Edit Course'
      },
      editVoucherCodeLabel: 'Edit Voucher Code',
      editButton: 'Edit',
      editVoucherCodeSuccess: 'Successfully changed the voucher code to {code}.',
      editVoucherCodeError: 'There was an error changing the voucher code to {code}: {err}',
      requiredInvalidMessage: 'This is a required field',
      periodInvalidMessage: 'Must be a positive integer',
      discountInvalidMessage: 'Discount must be between 1 and 100.'
    },
    integrationsManagement: {
      newPopupTitle: 'New {name} connection',
      editPopupTitle: 'Edit {name} connection',
      title: 'Integrations',
      clientIdLabel: 'Client id',
      clientSecretLabel: 'Client secret',
      documentCategoryLabel: 'Document category ID',
      clientEndpointLabel: 'Client endpoint',
      subdomainLabel: 'Subdomain (of your BambooHR workspace)',
      tokenEndpointLabel: 'Token endpoint',
      responseTypeLabel: 'Response type',
      scopeLabel: 'Scope',
      userEndpointLabel: 'User API endpoint',
      emailPropertyLabel: 'Email property',
      firstNamePropertyLabel: 'First Name',
      lastNamePropertyLabel: 'Last Name',
      authorizationEndpointLabel: 'Authorization endpoint',
      syncLabel: 'Manage Invitations',
      syncUsersLabel: 'Sync',
      apiKeyLabel: 'API Access Key',
      appNameLabel: 'App Name',
      appKeyLabel: 'App Key',
      disqusIdLabel: 'Disqus ID',
      stripePublishableKeyLabel: 'Stripe Publishable Key',
      stripeSecretKeyLabel: 'Stripe Secret Key',
      openAiSecretKeyLabel: 'Open AI Secret Key',
      peopleForceApiKeyLabel: 'PeopleForce API Key',
      ripplingApiKeyLabel: 'Rippling API Key',
      liqpayPrivateKeyLabel: 'LiqPay Private Key',
      liqpayPublicKeyLabel: 'LiqPay Public Key',
      liqpaySandboxLabel: 'Is it sandbox?',
      xTokenKeyLabel: 'xToken',
      categories: {
        HR: 'Human Resources',
        PAYMENT: 'Payment Services',
        CONTENT: 'Content Creation',
        SOCIAL: 'Social',
        DEFAULT: 'Default',
        DEV: 'Development – Auth and Webhooks',
        CRM: 'CRM'
      },
      personio: {
        explanation: '<ul>' +
          '<li>Go to settings > People > Documents > Categories and create a new category or just use one that suits uploading course certificates. Extract the id (by placing the mouse pointer above the category for example).</li>' +
          '<li>Go to Settings > API credentials. Create a new API Key (or reuse one of your choice). Give it a name, and select integration "Workademy"</li>' +
          '<li>Provide read access to "employees" and "documents" and write access to "documents". Select the following attributes: email, first name,  last name, employee id, and status.</li>' +
          '<li>Configure your integration with the information you collected, save, and synchronize.</li></ul>',
        syncSuccessful: 'Synchronization of users with Personio was successful. Go to users management console to review the invitations.',
        syncError: 'Synchronization of users with Personio was not successful. {err}',
        connectSuccessful: 'Successfully configured the integration with Personio API',
        connectError: 'Error connecting to Personio. {err}',
        deleteSuccessful: 'Successfully deleted the integration with Personio API',
        deleteError: 'Error deleting the integration with Personio. {err}'
      },
      bamboo_hr: {
        explanation: 'Log in into your BambooHR admin account. The Subdomain is a part of the URL that represents your company, e.g. if it is company.bamboohr.com, then subdomain is "company". Click on your profile picture, then select API Keys. Add new key and copy the value of API key here',
        syncSuccessful: 'Synchronization of users with BambooHR was successful. Go to users management console to review the invitations.',
        syncError: 'Synchronization of users with BambooHR was not successful. {err}',
        connectSuccessful: 'Successfully configured the integration with your BambooHR API',
        connectError: 'Error connecting to BambooHR. {err}',
        deleteSuccessful: 'Successfully deleted the integration with BambooHR API',
        deleteError: 'Error deleting the integration with BambooHR. {err}'
      },
      custom_oauth2: {
        explanation: '',
        syncSuccessful: 'Synchronization of users with OAuth2 was successful. Go to users management console to review the invitations.',
        syncError: 'Synchronization of users with OAuth2 was not successful. {err}',
        connectSuccessful: 'Successfully configured the integration with your OAuth2 API',
        connectError: 'Error connecting to OAuth2. {err}',
        deleteSuccessful: 'Successfully deleted the integration with OAuth2 server',
        deleteError: 'Error deleting the integration with OAuth2 server. {err}'
      },
      oauth2: {
        explanation: 'Configure your OAuth2 access here. All the attributes are mandatory. ' +
          '<p><strong>NOTE</strong>: in your OAuth2 server configure the <em>redirect_uri</em> as ' +
          '<em>https://{hostname}/signin/</em>.</p>',
        syncSuccessful: 'Synchronization of users with OAuth2 was successful. Go to users management console to review the invitations.',
        syncError: 'Synchronization of users with OAuth2 was not successful. {err}',
        connectSuccessful: 'Successfully configured the integration with your OAuth2 API',
        connectError: 'Error connecting to OAuth2. {err}',
        deleteSuccessful: 'Successfully deleted the integration with OAuth2 API',
        deleteError: 'Error deleting the integration with OAuth2 server. {err}'
      },
      push_notification: {
        explanation: 'Configure your push notifications endpoint here. ' +
          'Make sure your endpoint accepts Authorization “Basic”, the Content-Type “application/json” and the method “POST”.',
        connectSuccessful: 'Successfully configured the integration with your push notifications endpoint',
        syncError: 'Synchronization with push notifications endpoint was not successful. {err}',
        connectError: 'Error connecting to push notifications endpoint. {err}',
        deleteSuccessful: 'Successfully deleted the integration with Push Notifications endpoint',
        deleteError: 'Error deleting the integration with Push Notifications endpoint. {err}'
      },
      loom: {
        explanation: 'Open your Loom account and copy the app name and app key',
        syncSuccessful: 'Sync with Loom successful',
        syncError: 'Sync with Loom unsuccessful. {err}',
        connectSuccessful: 'Integration with Loom SDK successful!',
        connectError: 'Error while connecting to Loom SDK. {err}',
        deleteSuccessful: 'Successfully deleted the integration with Loom SDK',
        deleteError: 'Error deleting the integration with Loom SDK. {err}'
      },
      disqus: {
        explanation: 'Open your Disqus account and copy app name',
        syncSuccessful: 'Sync with Disqus successful',
        syncError: 'Sync with Disqus not successful. {err}',
        connectSuccessful: 'Integration with Disqus successful!',
        connectError: 'Error while connecting to Disqus. {err}',
        deleteSuccessful: 'Successfully deleted the integration with Disqus',
        deleteError: 'Error deleting the integration with Disqus. {err}'
      },
      stripe: {
        explanation: 'Open your stripe dashboard and copy publishable key',
        syncSuccessful: 'Sync with Stripe successful',
        syncError: 'Sync with Stripe not successful. {err}',
        connectSuccessful: 'Integration with Stripe successful',
        connectError: 'Error while connecting to Stripe. {err}',
        deleteSuccessful: 'Successfully deleted the integration with Stripe',
        deleteError: 'Error deleting the integration with Stripe. {err}'
      },
      liqpay: {
        explanation: 'Open your LiqPay dashboard and copy private and public keys. Indicate if it is a sandbox environment.',
        syncSuccessful: 'Sync with LiqPay successful',
        syncError: 'Sync with LiqPay not successful. {err}',
        connectSuccessful: 'Integration with LiqPay successful',
        connectError: 'Error while connecting to LiqPay. {err}',
        deleteSuccessful: 'Successfully deleted the integration with LiqPay',
        deleteError: 'Error deleting the integration with LiqPay. {err}'
      },
      revolut: {
        explanation: 'Open your Revolut dashboard and copy client secret keys.',
        syncSuccessful: 'Sync with Revolut successful',
        syncError: 'Sync with Revolut not successful. {err}',
        connectSuccessful: 'Integration with Revolut successful',
        connectError: 'Error while connecting to Revolut. {err}',
        deleteSuccessful: 'Successfully deleted the integration with Revolut',
        deleteError: 'Error deleting the integration with Revolut. {err}'
      },
      open_ai: {
        explanation: 'Open your Open AI dashboard and copy your key',
        syncSuccessful: 'Sync with Open AI successful',
        syncError: 'Sync with Open AI not successful. {err}',
        connectSuccessful: 'Integration with Open AI successful',
        connectError: 'Error while connecting to Open AI. {err}',
        deleteSuccessful: 'Successfully deleted the integration with Open AI',
        deleteError: 'Error deleting the integration with Open AI. {err}'
      },
      people_force: {
        explanation: 'Open your PeopleForce dashboard and copy your API key',
        syncSuccessful: 'Sync with PeopleForce successful',
        syncError: 'Sync with PeopleForce not successful. {err}',
        connectSuccessful: 'Integration with PeopleForce successful',
        connectError: 'Error while connecting to PeopleForce. {err}',
        deleteSuccessful: 'Successfully deleted the integration with PeopleForce',
        deleteError: 'Error deleting the integration with PeopleForce. {err}'
      },
      rippling: {
        explanation: 'If you choose API Key as the authentication mode, you have' +
          ' to open your Rippling dashboard and copy your API key. ' +
          'You don\'t have to do anything if you choose user credentials authentication mode.',
        syncSuccessful: 'Sync with Rippling successful',
        syncError: 'Sync with Rippling not successful. {err}',
        connectSuccessful: 'Integration with Rippling successful',
        connectError: 'Error while connecting to Rippling. {err}',
        deleteSuccessful: 'Successfully deleted the integration with Rippling',
        deleteError: 'Error deleting the integration with Rippling. {err}'
      },
      deel: {
        explanation: 'Open your Deel dashboard and copy the API access key.',
        syncSuccessful: 'Sync with Deel successful',
        syncError: 'Sync with Deel not successful. {err}',
        connectSuccessful: 'Integration with Deel successful',
        connectError: 'Error while connecting to Deel. {err}',
        deleteSuccessful: 'Successfully deleted the integration with Deel',
        deleteError: 'Error deleting the integration with Deel. {err}'
      },
      monobank: {
        explanation: 'Open your Monobank dashboard and copy your xToken.',
        syncSuccessful: 'Sync with Monobank successful',
        syncError: 'Sync with Monobank not successful. {err}',
        connectSuccessful: 'Integration with Monobank successful',
        connectError: 'Error while connecting to Monobank. {err}',
        deleteSuccessful: 'Successfully deleted the integration with Monobank',
        deleteError: 'Error deleting the integration with Monobank. {err}'
      },
      hi_bob: {
        explanation: 'Login into your HiBob dashboard and copy your clientId and clientSecret keys.',
        syncSuccessful: 'Sync with HiBob successful',
        syncError: 'Sync with HiBob not successful. {err}',
        connectSuccessful: 'Integration with HiBob successful',
        connectError: 'Error while connecting to HiBob. {err}',
        deleteSuccessful: 'Successfully deleted the integration with HiBob',
        deleteError: 'Error deleting the integration with HiBob. {err}'
      }
    },
    learningArtifactsManagement: {
      learningArtifactsManagement: 'Artefacts Management',
      skillsTitle: 'Skills',
      achievementsTitle: 'Achievements',
      avatarsTitle: 'Avatars',
      skillLevel: 'No Level | Level 1 | Level {n}',
      skillLevelNameLabel: 'Skill Name',
      skillLevelDescriptionLabel: 'Skill Description',
      editCard: {
        numberOfLevelsSubtitle: 'No levels | No levels | {n} levels'
      },
      noSkills: 'No skills acquired yet',
      noAchievements: 'No achievements yet'
    },
    workspaceManagement: {
      title: 'Workspace Management',
      tabs: {
        popups: {
          title: 'Pop-ups',
          preEnrollPopup: {
            title: 'Course Pre-Enrolment Pop-up',
            addDefaultContentButton: 'Fill With Default Content'
          }
        },
        lookandfeel: {
          title: 'Look-and-Feel',
          folderView: {
            title: 'Assets Display',
            subtitle: 'Configure how courses are displayed to the learners',
            label: 'View',
            folder: 'Folders',
            flat: 'Flat'
          }
        }
      }
    },
    mainAdminPage: {
      checkStudentsProgressTitle: 'Check students progress',
      checkStudentsProgressDescription: 'Check students progress for each course on this workspace',
      checkAnalyticsDashboardTitle: 'Check analytics dashboard',
      checkAnalyticsDashboardDescription: 'Check general analytics for each course in this workspace',
      manageRolesTitle: 'Manage staff of this workspace',
      manageRolesDescription: 'Add or revoke course creation rights from the user of this workspace',
      manageUsersTitle: 'Manage users and groups of the workspace',
      manageUsersDescription: 'Assign skills, block users, add or revoke rights to and from the users of this workspace. Sync the users from the integrated platforms.',
      manageCampaignsTitle: 'Manage campaigns and voucher codes',
      manageCampaignsDescription: 'Add, edit, delete campaigns for courses and manage their voucher or enrolment codes',
      manageIntegrationsTitle: 'Manage integrations',
      manageIntegrationsDescription: 'Add, manage, and remove integrations with 3d party tools and platforms',
      manageLearningArtefactsTitle: 'Manage learning artifacts',
      manageLearningArtefactsDescription: 'Add, manage, and remove learning artifacts such as skills',
      manageWorkspaceTitle: 'Manage Workspace',
      manageWorkspaceDescription: 'Manage Workspace look-and-feel, global popups, and workspace attributes.'
    },
    menu: {
      home: 'Home',
      staffMgmt: 'Staff Management',
      usersMgmt: 'User Management',
      progress: 'Students Progress',
      dashboard: 'Analytics Dashboard',
      campaignMgmt: 'Campaigns Management',
      integrationsMgmt: 'Integrations Management',
      artifactsMgmt: 'Skills Management',
      workspaceMgmt: 'Workspace Management'
    },
    library: {
      supported: {
        IMAGE: 'images',
        PDF: 'pdf',
        MP3: 'mp3',
        ZIP: 'zip',
        CSV: 'csv'
      },
      fileTypeWithArticle: {
        IMAGE: 'an image',
        PDF: 'a pdf',
        MP3: 'an MP3'
      },
      title: 'Resource library',
      searchLibrary: 'Search library',
      searchLibraryLabel: 'Search files by names',
      uploadTitle: 'Upload',
      uploaderHelpText: 'Choose {supported} file',
      uploadImagesOrMp3: 'other formats',
      uploadPdfs: 'PDF',
      errorUploadingFile: 'There was an error uploading file: {err}',
      successUploadingFile: 'File {fileName} uploaded successfully',
      clickHereToOpenLibrary: 'Click here to open the library',
      dragImageHere: 'Drag image here',
      dragFileFromLibrary: 'Drag {fileType} from library',
      dragPdfHere: 'Drag pdf here',
      fileName: 'File name',
      category: 'Category',
      categories: {
        ALL: 'All',
        AVATAR: 'Avatar',
        COVER_IMAGE: 'Covers',
        CONTENT: 'Content',
        FRAME: 'Achievements',
        OTHER: 'Other'
      },
      errors: {
        type: 'Invalid file type. Only {supported} files allowed',
        size: 'Files should not exceed {size} in size'
      },
      buttons: {
        download: 'Download original',
        delete: 'Delete from library'
      }
    },
    sectionsLibrary: {
      title: 'Sections',
      previewAndDrag: 'click on the icon to preview and add a new section to your lecture'
    },
    analytics: {
      title: 'Analytics',
      startDateLabel: 'Start date',
      endDateLabel: 'End date',
      aggregateByLabel: 'Aggregate by',
      customInterval: 'Custom Interval',
      selectedIntervalWasNotPossible: 'There is no data for the period you have selected. Falling back to the largest period we could extract data for.',
      aggregations: {
        DAY: 'day',
        MONTH: 'month',
        MINUTE: 'minute',
        WEEK: 'week',
        YEAR: 'year',
        HOUR: 'hour'
      },
      intervals: {
        YESTERDAY: 'yesterday',
        LAST24H: 'last 24 hours',
        LASTWEEK: 'last week',
        PREVIOUS7DAYS: 'last 7 days',
        LASTMONTH: 'last month',
        PREVIOUS30DAYS: 'last 30 days',
        PREVIOUS365DAYS: 'last 365 days',
        LASTYEAR: 'last year',
        CUSTOM: 'custom'
      },
      dashboard: {
        itemsPerPageText: 'Rows per page',
        allCourses: 'All courses',
        allCountries: 'All countries',
        allCampaigns: 'All campaigns',
        facts: {
          lectures: {
            title: 'Lectures'
          },
          enrolments: {
            title: 'Course enrolments'
          },
          questions: {
            title: 'Questions Answers'
          },
          certificates: {
            title: 'Certificates'
          },
          campaigns: {
            title: 'Campaigns'
          },
          workspaceUsers: {
            title: 'Users'
          }
        },
        coursesLabel: 'Courses',
        countriesLabel: 'Countries',
        campaignsLabel: 'Campaigns',
        modulesLabel: 'Modules',
        certificatesLabel: 'Certificates',
        lecturesLabel: 'Lectures',
        questionsLabel: 'Questions',
        workspaceUsersLabel: 'Users',
        enrolmentsCaption: 'enrolled',
        seenCaption: 'seen',
        answeredCaption: 'answered',
        issuedLabel: 'issued',
        campaignsCaption: 'redeemed',
        workspaceUsersCaption: 'logged in',
        funnelCaption: 'top courses conversion',
        funnelLabel: 'Funnel',
        funnel: {
          amountLogin: 'Logged in users',
          amountEnrolments: 'Users enrolled into courses',
          amountCertificates: 'Certificates issued',
          enrollments: 'Course enrolments',
          finishedModule: 'Finished module'
        },
        chartLabels: {
          enrolments: {
            enrolled: 'Enrollments',
            started: 'Started',
            ended: 'Finished',
            abandoned: 'Abandoned',
            amountStarted: 'Enrollments',
            amountEnded: 'Finished',
            amountAbandoned: 'Abandoned',
            avgDaysBetweenEnded: 'Average days to finish'
          },
          certificates: {
            amountIssued: 'Issued',
            avgScore: 'Avg score',
            minScore: 'Min score',
            maxScore: 'Max score'
          },
          questions: {
            amountCorrect: 'Correct answers',
            amountWrong: 'Wrong answers',
            maxWrongAttempts: 'Max attempts',
            minWrongAttempts: 'Min attempts',
            avgWrongAttempts: 'Avg attempts'
          },
          lectures: {
            seen: 'Seen',
            amountSeen: 'Lectures seen'
          },
          campaigns: {
            amountRedeemed: 'Redeemed'
          },
          workspaceUsers: {
            amountLogin: 'Logged in',
            amountRegister: 'Registered'
          }
        },
        noDataToDisplay: 'No data to display',
        dataLoading: 'Loading...'
      },
      validationRules: {
        startDateLessEndDate: 'Start date should be earlier than end date'
      }
    },
    createCoursesHeader: {
      create: 'Create',
      chooseOther: 'Other course creation possibilities',
      beforeCreatingCourseTitle: 'Before creating a course',
      beforeCreatingCourseDescription: 'Please read this pdf before creating course. It will help you to create a perfect course structure.',
      beforeCreatingCourseAction: 'Download PDF',
      createCourseTitle: 'Create a course',
      createCourseDescription: 'Choose the most convenient way to create a course.',
      createCourseAction: 'Start here',
      createLearningPathTitle: 'Create learning path',
      createLearningPathDescription: 'Create a learning plan from the existing courses.',
      createLearningPathAction: 'Start here'
    },
    learningPaths: {
      title: 'Learning Paths',
      noLearningPaths: 'No learning paths created yet.',
      createNewLearningPathTitle: 'Create New Learning Path',
      editLearningPathTitle: 'Edit Learning Path {name}',
      saveInfo: {
        success: 'Learning path {name} was successfully saved.',
        error: 'There was an error saving the  learning path {name}: {err}.'
      },
      stepper: {
        title: 'Title and Cover Image',
        titleLabel: 'Learning Path Name',
        coverImageChooser: 'Choose a cover image for the learning path',
        description: 'Description of the Learning Path',
        courses: 'Courses of the Learning Path',
        learningPathSteps: 'Steps and Goals of the Learning Path',
        coursesOrder: 'Order of the Courses',
        users: 'Assign Users',
        achievements: 'Achievements',
        createLearningPath: 'Create Learning Path',
        editLearningPath: 'Update Learning Path',
        checkAndSave: 'Check and Save',
        searchUsers: 'Search Users',
        skills: 'Assign Skills',
        searchSkills: 'Search Skills',
        assignUserToTheLearningPathButton: 'Assign User',
        assignSkillToTheLearningPathButton: 'Assign Skill',
        removeSkillFromTheLearningPathButton: 'Remove Skill',
        assignGroupsToUserTitle: 'Assign Groups',
        searchGroups: 'Search Groups',
        achievementItem: {
          name: 'Type the name of the goal',
          description: 'Type the goal\'s description',
          image: 'Add an image for the achievement'
        },
        loadingCourses: 'Loading Courses',
        selectedCourses: 'No courses selected | Selected {n} course | Selected {n} courses',
        info: {
          title: 'Add a title and a cover image for the learning path here. You will be able to change it in the future.',
          description: 'Add description of the learning path here. It is possible to change it in the future.',
          courses: 'Choose the courses that will the learning path will consist of.',
          coursesOrder: 'Arrange the right order of the courses.',
          users: 'Choose the users to assign the learning path to.',
          skills: 'Choose the skill levels that users acquire after completing the learning path',
          achievements: 'Create achievements for each of the courses of the learning path.',
          checkAndSave: 'Check the courses and achievements and save the learning path before proceeding to assigning users.',
          saveBeforeUser: 'Please add at least a title for your learning path before assigning users to it.',
          learningPathSteps: 'Define the steps of the learning path here, the corresponding courses and goals. ' +
            'Drag and drop the steps to change their order.'
        },
        learningPathStepsPage: {
          addNewStepButton: 'Create a New Step Based on a Course',
          addNewGoalButton: 'Add a Goal',
          stepTitle: 'Step Title',
          stepDescription: 'Step Description',
          addEditGoal: 'Add/Edit Goal',
          saveGoal: 'Save Goal',
          courseCardTitle: 'Course',
          goalCardTitle: 'Goal'
        }
      }
    },
    skills: {
      newSkillTitle: 'Create New Skill',
      editSkillTitle: 'Edit Skill {name}',
      titleLabel: 'Skill Name',
      createSkill: 'Create Skill',
      editSkill: 'Update Skill',
      stepper: {
        title: 'Title and Cover Image',
        titleLabel: 'Skill Name',
        coverImageChooser: 'Choose a Cover Image for the Skill',
        description: 'Description of the Skill',
        levels: 'Levels of the Skill',
        info: {
          title: 'Add a title and a cover image for the skill here. You will be able to change it in the future.',
          description: 'Add description of the skill here. It is possible to change it in the future.',
          levels: 'You can set a unique level or select multiple levels and set a different description for each one of them. <strong>All these settings can be changed afterwards.</strong>'
        },
        createSkill: 'Create Skill',
        editSkill: 'Edit Skill',
        levelTypesLabel: 'Level Types',
        uniqueLevelLabel: 'Unique Level',
        multipleLevelLabel: 'Multiple Levels',
        addNewSkillLevelButton: 'Add Level'
      }
    },
    groups: {
      newGroupTitle: 'Create New Group',
      editGroupTitle: 'Edit Group {name}',
      titleLabel: 'Group Name',
      createGroup: 'Create Group',
      editGroup: 'Update Group',
      stepper: {
        title: 'Group Title',
        titleLabel: 'Group Name',
        description: 'Description of the Group',
        users: 'Group Users',
        courses: 'Group Courses',
        learningPaths: 'Group Learning Paths',
        titleErrorMessage: 'Group Title is required',
        maximumCharactersErrorMessage: 'Maximum characters limit exceeded.',
        info: {
          title: 'Add a title of the group here. You will be able to change it in the future',
          description: 'Add description of the skill here. It is possible to change it in the future.',
          users: 'You can add and remove users here.',
          courses: 'Assign courses to the group',
          learningPaths: 'Assign learning paths to the group'
        },
        addUserToGroupButton: 'add user',
        removeUserToGroupButton: 'remove user',
        createGroup: 'Create Group',
        editGroup: 'Update Group'
      }
    },
    folders: {
      newFolderTitle: 'Create New Folder',
      editFolderTitle: 'Edit Folder {name}',
      titleLabel: 'Folder Name',
      createFolder: 'Create Folder',
      editFolder: 'Update Folder',
      stepper: {
        title: 'Folder Title',
        titleLabel: 'Folder Name',
        description: 'Description of the Folder',
        courses: 'Folder Courses',
        info: {
          title: 'Add a title of the folder here. You will be able to change it in the future.',
          description: 'Add a description of the folder here. It is possible to change it in the future.',
          courses: 'Assign courses to the folder'
        },
        addCourseToFolderButton: 'Add course',
        removeCourseFromFolderButton: 'Remove course',
        createFolder: 'Create Folder',
        editFolder: 'Update Folder'
      }
    },
    statusMessages: {
      enrolledWithSuccess: 'User {name} was enrolled with success',
      enrolledWithError: 'There was an error enrolling {name}: {errorText}',
      unenrolledWithSuccess: 'User {name} was unenrolled with success',
      unenrolledWithError: 'There was an error unenrolling {name}: {errorText}',
      learningPathAssignedWithSuccess: 'User {name} was assigned to the learning path with success',
      learningPathAssignedWithError: 'There was an error assigning the learning path to the user {name}: {errorText}',
      learningPathDeletedWithSuccess: 'Learning Path {name} was deleted with success',
      learningPathDeletedWithError: 'There was an error deleting the learning path: {errorText}',
      newSkillCreated: 'Skill {name} successfully created',
      skillUpdated: 'Skill {name} successfully updated',
      skillCreatedWithError: 'There was an error creating skill {name}: {errorText}',
      skillAssignedToLearningPathWithSuccess: 'Skill {name} was assigned to the learning path with success',
      skillAssignedToLearningPathWithError: 'There was an error assigning skill to the learning path: {errorText}',
      skillAssignedToUserWithSuccess: 'Skill {name} was assigned to the user {userName} with success',
      skillAssignedToUserWithError: 'There was an error assigning skill {name} to the user {userName}: {errorText}',
      skillUpdatedWithError: 'There was an error updating skill {name}: {errorText}',
      addedToGroupWithSuccess: 'User {userName} added to the group {groupName} successfully',
      addedToGroupWithError: 'There was an error adding the user {userName} added to the group {groupName}: {errorText}',
      removedFromGroupWithSuccess: 'User {userName} removed from the group {groupName} successfully',
      removedFromGroupWithError: 'There was an error removing the user {userName} from the group {groupName}: {errorText}',
      newGroupCreated: 'Group {name} successfully created',
      groupCreatedWithError: 'There was an error creating group {name}: {errorText}',
      groupUpdated: 'Group {name} updated with success',
      groupUpdatedWithError: 'There was an error updating group {name}: {errorText}',
      groupAssignedToUserWithSuccess: 'User {userName} was successfully added to the group {name}',
      groupAssignedToUserWithError: 'There was an error assigning the user {userName} to the group {name}: {errorText}',
      skillRemovedFromLearningPathWithSuccess: 'Skill {name} was removed from the learning path with success',
      skillRemovedFromLearningPathWithError: 'There was an error removing skill {name} from the learning path: {errorText}',
      skillRemovedFromUserWithSuccess: 'Skill {name} was removed from the user {userName} with success',
      skillRemovedFromUserWithError: 'There was an error removing skill {name} from the user {userName}: {errorText}',
      groupRemovedFromUserWithSuccess: 'User {userName} was successfully removed from the group {name}',
      groupRemovedFromUserWithError: 'There was an error removing the user {userName} from the group {name}: {errorText}',
      groupDeletedWithSuccess: 'Group {name} deleted successfully',
      groupDeletedWithError: 'There was an error deleting the group {name}: {errorText}',
      skillDeletedWithSuccess: 'Skill {name} deleted successfully',
      skillDeletedWithError: 'There was an error deleting the skill {name}: {errorText}',
      newFolderCreated: 'Folder {name} successfully created',
      folderCreatedWithError: 'There was an error creating folder {name}: {errorText}',
      folderUpdated: 'Folder {name} updated successfully',
      folderUpdatedWithError: 'There was an error updating folder {name}: {errorText}',
      folderAssignedToCourseWithSuccess: 'Course {courseName} was successfully added to the folder {name}',
      folderAssignedToCourseWithError: 'There was an error assigning the course {courseName} to the folder {name}: {errorText}',
      folderRemovedFromCourseWithSuccess: 'Course {courseName} was successfully removed from the folder {name}',
      folderRemovedFromCourseWithError: 'There was an error removing the course {courseName} from the folder {name}: {errorText}',
      folderDeletedWithSuccess: 'Folder {name} deleted successfully',
      folderDeletedWithError: 'There was an error deleting the folder {name}: {errorText}'
    },
    dialogs: {
      enrollButton: {
        text: 'Enroll',
        title: {
          course: 'Enroll Users to Course',
          learningPath: 'Enroll Users to Learning Path'
        }
      },
      enrollNowButton: {
        text: 'Enroll now!',
        title: 'Enroll everyone in the group now'
      },
      linkButton: {
        text: 'Link',
        title: 'Automatically enroll users once associated with the group'
      },
      unlinkButton: {
        text: 'Unlink',
        title: 'Automatically unenroll users once disassociated from the group'
      },
      unenrollButton: {
        text: 'Unenroll',
        title: {
          course: 'Unenroll Users from Course',
          learningPath: 'Unenroll Users from Learning Path'
        }
      },
      assignButton: {
        text: 'Associate',
        title: {
          course: 'Associate the Group with the Course',
          learningPath: 'Associate the Group with the Learning Path'
        }
      },
      unassignButton: {
        text: 'Dissociate',
        title: {
          course: 'Dissociate the Group with the Course',
          learningPath: 'Dissociate the Group with the Learning Path'
        }
      },
      explanationGroups: {
        course: 'Click on the <strong>Associate</strong> button to associate a group with the course. ' +
          'After that, all the new users added to the group will be automatically enrolled into the course.' +
          '<br>Click on the <strong>Enroll</strong> button to enroll all the current group users to the course.',
        learningPath: 'Click on the <strong>Associate</strong> button to associate a group to the learning path. ' +
          'After that, all the new users added to the group will be automatically enrolled into the learning path. ' +
          '<br>Click on the <strong>Enroll</strong> button to enroll all the current group users to the learning path.'
      },
      explanationUsers: {
        course: 'Click on the <strong>Enroll</strong> button to enroll a user to the course. The user will receive an email.' +
          '<br>Click on the <strong>Unenroll</strong> button to unenrolll a user from the course.',
        learningPath: 'Click on the <strong>Enroll</strong> button to enroll a user to the learning path. The user will receive an email.' +
          '<br>Click on the <strong>Unenroll</strong> button to unenrolll a user from the learning path.'
      },
      enrollUsersTitle: 'Enroll Users',
      enrollGroupsTitle: 'Enroll Groups',
      status: {
        groupAssociated: {
          success: {
            course: 'The group {name} has been successfully associated with the course.',
            learningPath: 'The group {name} has been successfully associated with the learning path.'
          },
          error: {
            course: 'There was an error associating the group {name} with the course: {err}.',
            learningPath: 'There was an error associating the group {name} with the learning path: {err}.'
          }
        },
        groupUnassociated: {
          success: {
            course: 'The group {name} has been successfully dissociated with the course.',
            learningPath: 'The group {name} has been successfully dissociated with the learning path.'
          },
          error: {
            course: 'There was an error dissociating the group {name} with the course: {err}.',
            learningPath: 'There was an error dissociating the group {name} with the learning path: {err}.'
          }
        },
        groupEnrolled: {
          success: {
            course: 'The group {name} users have been successfully enrolled to the course.',
            learningPath: 'The group {name} users have been successfully enrolled to the learning path.'
          },
          error: {
            course: 'There was an error enrolling the group {name} users to the course: {err}.',
            learningPath: 'There was an error enrolling the group {name} users to the learning path: {err}.'
          }
        },
        enrolled: {
          success: {
            course: 'The user {name} successfully enrolled to the course.',
            learningPath: 'The user {name} successfully enrolled to the learning path.'
          },
          error: {
            course: 'There was an error enrolling the user {name} to the course: {err}.',
            learningPath: 'There was an error enrolling the user {name} to the learning path: {err}.'
          }
        }
      }
    },
    generic: {
      createdOn: 'Created:',
      updatedOn: 'Last seen:',
      startedOn: 'Started on:',
      searchCourses: 'Search Courses',
      resetFilters: 'Reset Filters'
    }
  },
  analytics: {
    welcome: 'Welcome to the analytics section!',
    pleaseIntroduce: 'Please introduce numbers {number1} and {number2} into "Enter two part code" section and click enter'
  },
  tourSteps: {
    snackbar: {
      title: 'Start course editing tour',
      description: 'You can always restart this tour by just refreshing the page or by switching the editing mode off and on',
      startButton: 'Start',
      cancelButton: 'Close'
    },
    labels: {
      buttonSkip: 'Skip tour',
      buttonPrevious: 'Previous',
      buttonNext: 'Next',
      buttonStop: 'Finish'
    },
    adminCourses: {
      createNewCourse: 'Click here to <strong>create a new course</strong>',
      importJSON: 'Click here to <strong>import a course in JSON format</strong>',
      listOfCourses: 'Courses you can manage',
      paginationCourses: 'Navigate through the course list'
    },
    editingMenu: {
      resetButton: 'Click this button to reset the latest changes',
      saveButton: 'Click this button to save the latest changes',
      publishButton: 'Click this button to make the course available or unavailable for the students'
    },
    demoCourseEditing: {
      title: 'Course Editing Tour',
      changeTitle: {
        title: '',
        content: 'Click here to change the course title'
      },
      changeDescription: {
        title: '',
        content: 'Click here to change the course description. Feel free to use the editing toolbar on top of the page to style your text, add bullet points, images, and links.'
      },
      addModule: {
        title: '',
        content: 'Click here to add a new module to the course. It will appear as last module.'
      },
      addLecture: {
        title: '',
        content: 'Click here to add a new lecture to the module. This will be the last lecture in the module, but you can apply drag and drop to move it where you want.'
      },
      changeModuleTitle: {
        title: '',
        content: 'You can easily change the module\'s title by clicking here and just start typing.'
      },
      changeModuleDescription: {
        title: '',
        content: 'Start typing to change the module\'s description. Use the toolbar on top to style your text. Keep in mind, however, that the module description should be small and concise.'
      },
      saveCourse: {
        title: '',
        content: 'Click here to save the latest changes to the course.'
      },
      changeLectureTitle: {
        title: '',
        content: 'Click and type here to change the lecture\'s title.'
      },
      changeLectureDescription: {
        title: '',
        content: 'You can easily change the lecture\'s description (or remove it completely) by typing here. Feel free to use the toolbar on top to style your text. Try to keep the lecture\'s descriptions small and concise.'
      },
      resetChanges: {
        title: '',
        content: 'Click here to reset the changes you introduced since the last time you saved the course.'
      },
      publishCourse: {
        title: '',
        content: 'Make the course visible or invisible for the learners of this workspace.'
      },
      unpublishCourse: {
        title: '',
        content: 'Hide the course for the learners of this workspace.'
      },
      copyLecture: {
        title: '',
        content: 'Click here to copy the lecture to the clipboard.'
      },
      copyModule: {
        title: '',
        content: 'Click here to copy the module to the clipboard – the full module with all its lectures will be copied. You will then be able to paste it after any module of any course of this workspace.'
      },
      pasteLecture: {
        title: '',
        content: 'Click here to paste the copied lecture after this one. The lecture will still remain in the clipboard so you will be able to paste it again and again. The copied lecture remains in the clipboard until you copy another one.'
      },
      pasteModule: {
        title: '',
        content: 'Click here to paste the copied module after this one. The module will remain in the clipboard so you will be able to paste it after other modules as well. The copied module remains in the clipboard until you copy another one.'
      },
      deleteLecture: {
        title: '',
        content: 'Click here to delete this lecture. Keep in mind, you won\'t be able to delete lectures if the students already interacted with them!'
      },
      deleteModule: {
        title: '',
        content: 'Click here to delete this module. The whole module with all its lectures will be gone. Bear in mind though that you will not be able to delete a module that already has some student progress in it.'
      },
      changeModuleAvailableDates: {
        title: '',
        content: 'Click here to change the available dates of the module. Double click on a date - the module will be available from the chosen date. Single click on a date followed by a single click on the next date - the module will be available within the chosen dates.'
      },
      dragModule: {
        title: '',
        content: 'Click and drag to reposition this module. You will be able to test this functionality after finishing the tour.'
      },
      dragLecture: {
        title: '',
        content: 'Click and drag to reposition this lecture within a module. You will be able to test this functionality after finishing the tour.'
      },
      changeCourseInfo: {
        content: 'Click here to change the basic course info, such as available dates, passing rate, etc.'
      },
      editCourseTags: {
        content: 'Add or remove tags of the course. These tags will be used to filter the courses.'
      },
      editCourseGamification: {
        content: 'Click here to be able to add and edit course achievements.'
      },
      switchEditingMode: {
        content: 'Use this toggle to switch between editing and the viewer modes.'
      },
      useEditorToolbar: {
        content: 'Use editor toolbar to change the text styling, add images, bullet points, and list to your text.'
      },
      goToLecture: {
        content: 'Follow the link on each lecture item to proceed to the lecture editing'
      }
    }
  },
  sectionsExamples: {
    richText: {
      title: 'Section title',
      content: 'Lorem ipsum dolor sit amet, <strong>consetetur sadipscing elitr</strong>, sed diam <em>nonumy eirmod tempor</em> invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
    }
  },
  accessibility: {
    configForVisualImpairments: 'Configuration for the users with visual impairments',
    changeFontSize: 'Change font size',
    siteBackToNormal: 'Regular version of the website',
    changeColorOfTheWebsite: 'Change the color of the website',
    exampleBackgroundFont: 'The example of how the text will look like',
    exampleHeader1: 'Titles level 1',
    exampleHeader2: 'Titles level 2',
    changeImagesLook: 'Change the pictures look',
    exampleImagesLook: 'The example of how the pictures will look like'
  },
  validation: {
    url: {
      required: 'URL is required',
      valid: 'URL must be valid'
    }
  },
  notifications: {
    title: 'Notifications',
    clearAllButton: 'Mark all as read',
    statuses: {
      INACTIVE_USER_COURSES: 'Inactivity'
    },
    actions: {
      clear: 'Clear',
      markAsRead: 'Mark as read'
    },
    noNotificationsToShow: 'There are no notifications to show'
  },
  header: {
    menu: {
      accessibility: 'Accessibility',
      toggleDarkMode: 'Toggle Dark Mode',
      profileSubtitle: {
        admin: 'Admin',
        courseAdmin: 'Course Admin',
        learner: 'Learner',
        adminViewNonAdmin: 'Admin<br><span class="caption">(viewing as a student)</span>',
        courseAdminViewNonAdmin: 'Course admin<br><span class="caption">(viewing as a student)</span>'
      },
      create: {
        course: 'Course',
        learningPath: 'Learning Path',
        skill: 'Skill',
        group: 'Group',
        users: 'Users'
      },
      languages: {
        uk: 'Українська',
        pt: 'Portuguese',
        en: 'English',
        de: 'Deutsch',
        pl: 'Język polski',
        ru: 'русский'
      }
    }
  }
}
