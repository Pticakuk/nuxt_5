export default {
  actions: {
    delete: {
      module: 'Supprimer le module',
      lecture: 'Supprimer la leçon',
      section: 'Supprimer la section',
      question: 'Supprimer la question',
      bubble: 'Supprimer la bulle',
      option: 'Supprimer l\'option',
      branchSection: 'Supprimer la section de branche'
    },
    add: {
      module: 'Ajouter un module',
      lecture: 'Ajouter une leçon',
      section: 'Ajouter une section',
      question: 'Ajouter une question',
      bubble: 'Ajouter une bulle',
      option: 'Ajouter une option',
      branchSection: 'Ajouter une section de branche'
    },
    duplicate: {
      module: 'Dupliquer le module',
      lecture: 'Dupliquer la leçon',
      section: 'Dupliquer la section',
      question: 'Dupliquer la question',
      bubble: 'Dupliquer la bulle',
      option: 'Dupliquer l\'option',
      branchSection: 'Dupliquer la section de branche'
    },
    moveUp: {
      module: 'Déplacer le module vers le haut',
      lecture: 'Déplacer la leçon vers le haut',
      section: 'Déplacer la section vers le haut',
      question: 'Déplacer la question vers le haut',
      bubble: 'Déplacer la bulle vers le haut',
      option: 'Déplacer l\'option vers le haut',
      branchSection: 'Déplacer la section de branche vers le haut'
    },
    moveDown: {
      module: 'Déplacer le module vers le bas',
      lecture: 'Déplacer la leçon vers le bas',
      section: 'Déplacer la section vers le bas',
      question: 'Déplacer la question vers le bas',
      bubble: 'Déplacer la bulle vers le bas',
      option: 'Déplacer l\'option vers le bas',
      branchSection: 'Déplacer la section de branche vers le bas'
    },
    copy: {
      module: 'Copier le module',
      lecture: 'Copier la leçon',
      section: 'Copier la section',
      question: 'Copier la question',
      bubble: 'Copier la bulle',
      option: 'Copier l\'option',
      branchSection: 'Copier la section de branche',
      courseUrl: 'copier',
      courseUrlCopied: 'copié',
      url: 'copier',
      copyUrl: 'Copier l\'URL',
      urlCopied: 'copié',
      openInNewTab: 'Ouvrir dans un nouvel onglet'
    },
    paste: {
      module: 'Coller le module',
      lecture: 'Coller la leçon',
      section: 'Coller la section',
      question: 'Coller la question',
      bubble: 'Coller la bulle',
      option: 'Coller l\'option',
      branchSection: 'Coller la section de branche'
    },
    course: {
      config: 'Modifier la configuration',
      edit: 'Modifier le contenu du cours',
      clone: 'Cloner le cours',
      invite: 'Inviter des utilisateurs ou des groupes',
      progress: 'Vérifier la progression des utilisateurs',
      deleteInProgress: 'Suppression du cours {name}...',
      archiveInProgress: 'Archivage du cours {name} en cours...',
      unarchiveInProgress: 'Désarchivage du cours {name} en cours...'
    },
    lectureVisibility: {
      lecture: 'Visibilité de la leçon'
    }
  },
  openAi: {
    title: 'Open AI',
    useThisTextButton: 'Utiliser ce texte',
    useThisImageButton: 'Utiliser cette image',
    usingOpenAiInfoBox: 'Nous utilisons l\'API <strong>Open AI</strong> pour vous aider dans vos tâches quotidiennes. Assurez-vous que l\'intégration avec votre compte Open AI est en place et commencez à utiliser cet assistant pour à peu près tout. Par exemple, vous pouvez demander quelque chose comme <strong>"Titre pour un cours d\'intégration"</strong> ou <strong>"Rédigez une description pour une leçon d\'introduction sur Salesforce"</strong> ou <strong>"Générer une question à choix unique sur les compétences douces"</strong>. Utilisez votre langue naturelle, vérifiez le résultat, corrigez le libellé si nécessaire, supprimez les espaces vides inutiles et utilisez-le dans votre cours.',
    textCompletionExplanation: 'Utilisez ce dialogue pour générer du texte sur n\'importe quel sujet. Le texte sera limité à {charLimit} caractères.',
    imageCreationExplanation: 'Utilisez ce dialogue pour générer une image sur n\'importe quel sujet. Notez que la génération d\'images est actuellement en version bêta. L\'image sera générée avec une taille de {imageSize}.',
    errorGeneratingContent: 'Une erreur est survenue lors de la génération du contenu : {err}',
    configureTheIntegration: ' | Veuillez configurer l\'intégration avec l\'API OpenAI dans la section admin/intégrations.'
  },
  trialWorkspaceBanner: '😃 Il vous reste encore {daysLeft} jours de votre période d\'essai. Débloquez le plein potentiel de votre espace de travail personnalisé maintenant ! 🚀',
  notAuthenticatedWorkspaceBanner: 'Veuillez vous inscrire pour débloquer tout le potentiel de votre espace de travail !',
  trialWorkspaceCTA: 'Allons-y !',
  notAuthenticatedWorkcpaceCTA: 'S\'inscrire',
  trialExpired: '😢 Votre période d\'essai est terminée. Vous ne pouvez plus explorer les fonctionnalités d\'administration. Débloquez tout le potentiel de votre espace de travail personnalisé maintenant !',
  toast: {
    courseSaveSuccess: 'Cours enregistré avec succès',
    courseCreatedSuccess: 'Cours {name} créé avec succès !',
    courseCreatedError: 'Une erreur est survenue lors de la création du cours {name} : {err}',
    coursePublishSuccess: 'Cours publié avec succès',
    courseUnpublishSuccess: 'Cours dépublié avec succès',
    courseCloneSuccess: 'Cours cloné avec succès',
    courseDeleteSuccess: 'Cours {name} supprimé avec succès',
    courseArchiveSuccess: 'Le cours {name} a été archivé avec succès',
    courseUnarchiveSuccess: 'Le cours {name} a été désarchivé avec succès',
    courseArchiveError: 'Une erreur est survenue lors de l\'archivage du cours',
    courseDeleteError: 'Une erreur est survenue lors de la suppression du cours',
    courseSaveError: 'Une erreur est survenue lors de l\'enregistrement du cours {name} : {err}',
    courseEditingLockError: 'Ce cours est en cours d\'édition par {name}. Voulez-vous prendre le relais ? Les progrès de {name} seront perdus.',
    courseEditingLockForced: 'L\'édition de ce cours a été reprise par {name}.',
    courseEditingLockByUserError: 'Vous éditez ce cours sur un autre appareil ou onglet. Voulez-vous prendre le relais ? Vos progrès sur un autre appareil ou onglet seront perdus.',
    editAnyway: 'Prendre le relais !',
    courseEditLockSuccess: 'Mode d\'édition de cours pour l\'utilisateur actuel activé avec succès',
    courseEditUnlockSuccess: 'Mode d\'édition de cours pour l\'utilisateur actuel désactivé avec succès',
    courseUrlCopiedSuccessfully: 'URL du cours copiée avec succès.',
    urlCopiedSuccessfully: 'URL copiée avec succès',
    courseUrlCopiedError: 'L\'URL du cours n\'a pas pu être copiée : {err}.',
    urlCopiedError: 'L\'URL n\'a pas pu être copiée : {err}.',
    previewWillAppearHere: 'L\'aperçu du code apparaîtra ici',
    checkInPopup: 'Vérifiez dans une fenêtre pop-up',
    workspaceChangesSaved: 'Configuration de l\'espace de travail enregistrée avec succès.',
    workspaceChangesSaveError: 'Une erreur est survenue lors de l\'enregistrement des modifications de l\'espace de travail : {err}.',
    courseOrderUpdated: 'Ordre du cours mis à jour avec succès : le cours {courseName} sera affiché dans l\'ordre {order}.',
    courseOrderUpdateError: 'Une erreur est survenue lors de la mise à jour de l\'ordre des cours : {err}.',
    userNameChangedSuccessfully: 'Le nom de l\'utilisateur {name} a été changé avec succès.',
    userNameChangedError: 'Une erreur est survenue lors du changement de nom de l\'utilisateur {name} : {err}',
    userEmailChangedSuccessfully: 'L\'adresse e-mail de l\'utilisateur {name} a été changée avec succès.',
    userEmailChangedError: 'Une erreur est survenue lors du changement de l\'adresse e-mail de l\'utilisateur {name} : {err}',
    workspaceDoesntExist: 'L\'espace de travail {name} n\'existe pas.',
    giveUpWithSuccess: 'Le cours {name} a été abandonné avec succès',
    giveUpError: 'Une erreur est survenue lors de l\'abandon du cours {name} : {err}',
    archiveSuccess: 'Le cours {name} a été archivé avec succès',
    archiveError: 'Une erreur est survenue lors de l\'archivage du cours {name} : {err}',
    unArchiveSuccess: 'Le cours {name} a été désarchivé avec succès',
    unArchiveError: 'Une erreur est survenue lors du désarchivage du cours {name} : {err}',
    certificateCantBeOpen: 'Une erreur est survenue lors de la récupération du certificat avec uuid {uuid} : {err}',
    courseTranslationSuccess: 'Le cours {name} a été traduit avec succès.',
    courseTranslationError: 'Une erreur s\'est produite lors de la traduction du cours {name} : {err}',
    resetTimerSuccess: 'Minuteur de question réinitialisé avec succès.',
    tagDeleteSuccess: 'Tag {name} supprimé avec succès',
    tagDeleteError: 'Une erreur est survenue lors de la suppression du tag {name} : {err}',
    defaultSaveError: 'Une erreur s\'est produite lors de l\'enregistrement de {name}',
    forceSaveError: {
      CANNOT_DELETE_ALL_MODULES: 'Vous êtes sur le point de supprimer tous les modules du cours. Cette action est irréversible. Êtes-vous sûr de vouloir continuer ?',
      CANNOT_DELETE_LEARNING_STEP: 'Il y a une progression de l\'utilisateur sur les étapes que vous êtes sur le point de supprimer. Cette action est irréversible. Êtes-vous sûr de vouloir continuer ?',
      CANNOT_DELETE_LECTURES: 'Il y a une progression de l\'utilisateur sur les conférences que vous êtes sur le point de supprimer. Cette action est irréversible. Êtes-vous sûr de vouloir continuer ?',
      CANNOT_DELETE_QUESTION_ANSWER: 'Il y a une progression de l\'utilisateur sur les quiz que vous êtes sur le point de supprimer. Cette action est irréversible. Êtes-vous sûr de vouloir continuer ?',
      CANNOT_DELETE_SECTION: 'Il y a une progression de l\'utilisateur sur les sections du cours que vous êtes sur le point de supprimer. Cette action est irréversible. Êtes-vous sûr de vouloir continuer ?',
      CANNOT_DELETE_LEVELS: 'Il y a des compétences associées à des utilisateurs sur les éléments que vous êtes sur le point de supprimer. Cette action est irréversible. Êtes-vous sûr de vouloir continuer ?',
      CANNOT_DELETE_GROUP: 'Vous êtes sur le point de supprimer un groupe associé à des actifs (utilisateurs, cours ou parcours d\'apprentissage). Tous ces liens seront perdus. Êtes-vous sûr de vouloir continuer ?',
      DEFAULT: 'Il y a une progression de l\'utilisateur sur les éléments que vous êtes sur le point de supprimer. Cette action est irréversible. Êtes-vous sûr de vouloir continuer ?'
    }
  },
  welcome: '<span class="welcome">Bienvenue</span> dans le monde de l\'éducation en ligne<br>et du partage des connaissances',
  forum: {
    title: 'Forum',
    sortingOptions: {
      newest: 'Les plus récents en premier',
      oldest: 'Les plus anciens en premier',
      mostPopular: 'Les plus populaires'
    },
    comment: 'Commentaire',
    leaveComment: 'Laisser un commentaire',
    actions: {
      edit: 'Modifier',
      follow: 'Suivre',
      reply: 'Répondre',
      delete: 'Supprimer'
    },
    uploadImage: 'Télécharger une image',
    socialLearning: {
      DISABLED: 'Forum désactivé',
      DISQUS: 'Activer le forum Disqus',
      WORKADEMY: 'Activer le forum Workademy'
    },
    toCourse: 'Retour au cours',
    toForum: 'Au forum du cours',
    supportedText: 'Choisissez un fichier {supported}',
    generalThreads: 'Fils de discussion généraux',
    lecturesThreads: 'Fils des cours'
  },
  dialogs: {
    editRichText: 'Modifier le texte enrichi',
    saveAndClose: 'Enregistrer et fermer',
    confirmationDialog: {
      defaultDialog: {
        title: 'Êtes-vous sûr ?',
        confirmButton: 'Oui !',
        cancelButton: 'Annuler'
      },
      confirmQuitScormCourse: {
        title: 'Voulez-vous vraiment quitter le cours ?',
        subtitle: 'Ne vous inquiétez pas ! Vous pourrez reprendre là où vous vous êtes arrêté.',
        confirmButton: 'Oui, quitter maintenant'
      },
      confirmQuitScormLecture: {
        title: 'Êtes-vous sûr de vouloir quitter la leçon ?',
        subtitle: 'Ne vous inquiétez pas ! Vous pourrez reprendre la leçon là où vous vous êtes arrêté.',
        confirmButton: 'Oui, quitter maintenant'
      }
    }
  },
  share: {
    shareDialogTitle: 'Partager',
    doneButtonText: 'Terminé'
  },
  layout: {
    getStarted: 'Commencer'
  },
  landing: {
    welcome: '<span class="welcome">Bienvenue</span> dans le monde de l\'éducation en ligne<br>et du partage des connaissances',
    goToCatalog: 'Explorez nos cours',
    learnAndShare: 'Apprenez et partagez vos connaissances avec {title}',
    viewAllCatalog: 'Voir tout le catalogue',
    allowsToLearnAndTeach: '{title} vous permet d\'apprendre et d\'enseigner',
    beingABridge: 'être un pont entre les détenteurs de connaissances et ceux qui en ont besoin',
    learnIconText: 'Ne cessez jamais d\'apprendre, accédez à un contenu de haute qualité avec {title}',
    everywhereIconText: 'Utilisez n\'importe quel appareil, n\'importe quel système, n\'importe où',
    communityIconText: 'Participez au réseau, faites partie de la communauté',
    teachIconText: 'La manière la plus efficace d\'apprendre est d\'enseigner. Développez votre potentiel d\'enseignement avec {title}',
    learn: 'Apprendre',
    everywhere: 'Partout',
    community: 'Communauté',
    teach: 'Enseigner',
    areYouReady: 'Êtes-vous prêt à rejoindre le monde de l\'éducation en ligne et du partage des connaissances ?',
    viewAllCourses: 'tous les cours',
    viewMyDashboard: 'mon tableau de bord',
    comingSoon: 'Cela pourrait être votre espace de travail. Parlez-nous-en !',
    footerDisclaimer: ''
  },
  dashboard: {
    dashboardTitle: 'Tableau de bord',
    coursesInProgressTitle: 'Cours en cours',
    coursesInProgressSubtitle: 'Cours auxquels vous êtes actuellement inscrit',
    coursesCompletedTitle: 'Cours terminés',
    coursesCompletedSubtitle: 'Cours que vous avez déjà terminés',
    learningPathsInProgressTitle: 'Parcours d\'apprentissage en cours',
    learningPathsCompleted: 'Parcours d\'apprentissage terminés',
    achievementsTitle: 'Réalisations',
    achievementsDescription: 'Cliquez sur une carte de réalisation pour ajouter le cadre de réalisation à votre avatar.',
    searchLearningPaths: 'Rechercher des parcours d\'apprentissage',
    filters: {
      searchLearningPaths: 'Rechercher des parcours d\'apprentissage',
      search: {
        learningPaths: 'Rechercher des parcours d\'apprentissage',
        courses: 'Rechercher des cours'
      },
      showCoursesTitle: {
        all: 'Afficher les cours <strong>(tous)</strong>',
        completed: 'Afficher les cours <strong>(terminés)</strong>',
        active: 'Afficher les cours <strong>(actifs)</strong>',
        archived: 'Afficher les cours <strong>(archivés)</strong>'
      },
      showAllCourses: 'Afficher tous les cours',
      showActiveCourses: 'Afficher les cours actifs',
      showCompletedCourses: 'Afficher les cours terminés',
      showArchivedCourses: 'Afficher les cours archivés',
      showLearningPathsTitle: {
        all: 'Afficher les parcours d\'apprentissage <strong>(tous)</strong>',
        completed: 'Afficher les parcours d\'apprentissage <strong>(terminés)</strong>',
        active: 'Afficher les parcours d\'apprentissage <strong>(actifs)</strong>',
        archived: 'Afficher les parcours d\'apprentissage <strong>(archivés)</strong>'
      },
      showAllLearningPaths: 'Afficher tous les parcours d\'apprentissage',
      showActiveLearningPaths: 'Afficher les parcours d\'apprentissage actifs',
      showCompletedLearningPaths: 'Afficher les parcours d\'apprentissage terminés',
      showArchivedLearningPaths: 'Afficher les parcours d\'apprentissage archivés'
    },
    notFound: {
      course: {
        notEnrolled: {
          title: 'Vous n\'êtes inscrit à aucun cours.',
          description: 'Consultez la liste des cours pour vous inscrire aux cours.'
        },
        notFound: {
          title: 'Les cours n\'ont pas pu être trouvés.',
          description: 'Modifiez les critères de recherche.'
        },
        noCompleted: {
          title: 'Vous n\'avez pas encore terminé de cours.',
          description: 'Consultez vos cours actifs et essayez de les terminer.'
        }
      },
      learningPath: {
        notEnrolled: {
          title: 'Vous n\'êtes inscrit à aucun parcours d\'apprentissage.'
        },
        notFound: {
          title: 'Les parcours d\'apprentissage n\'ont pas pu être trouvés.',
          description: 'Modifiez les critères de recherche.'
        },
        noCompleted: {
          title: 'Vous n\'avez pas encore terminé de parcours d\'apprentissage.',
          description: 'Consultez vos parcours d\'apprentissage actifs et essayez de les terminer.'
        }
      }
    }
  },
  quiz: {
    questionNFrom: 'Question {questionNumber} sur {quizLength}',
    questionN: 'Question {questionNumber}',
    checkTheAnswer: 'Vérifiez la réponse',
    checkTheDroppable: 'J\'ai fini !',
    associationQuestionExplanation: 'Cliquez sur l\'élément puis sur la catégorie correspondante. Cliquez sur le bouton VÉRIFIEZ LA RÉPONSE une fois que vous avez terminé.',
    multipleAssociationQuestionExplanation: 'Cliquez sur l\'élément puis sur la catégorie correspondante. Un élément peut appartenir à plus d\'une catégorie. Cliquez sur le bouton VÉRIFIEZ LA RÉPONSE une fois que vous avez terminé.',
    sortingQuestionExplanation: 'Faites glisser et déposez les éléments pour les placer dans le bon ordre. Cliquez sur le bouton VÉRIFIEZ LA RÉPONSE une fois que vous avez terminé.',
    numberOfQuestions: 'Pas de points de quiz | Un point | {n} points',
    noTries: 'Vérifiez vos réponses',
    noCorrect: 'Continuez d\'essayer !',
    allCorrect: 'Bon travail ! Vous avez répondu à toutes les questions !',
    allCorrectVariants: ['Bon travail !', 'Bien joué !', 'Excellent !'],
    numberOfCorrect: 'Bravo | Bravo ! Vous avez obtenu 1 réponse correcte sur {length} questions | Bravo ! Vous avez obtenu {correct} réponses sur {length} questions',
    usedAttempts: 'Vous avez utilisé {wrongCount} sur {wrongLimit} tentatives possibles',
    questionType: 'Type de question',
    newAnswer: 'Modifier le texte de la réponse ici',
    addAnswer: 'Ajouter une réponse',
    answerText: 'Texte de la réponse',
    explanationText: 'Texte de l\'explication',
    correctAnswerSize: 'réponses correctes : {size}',
    questionWeight: 'Poids de la question',
    questionPoints: 'points : {points}',
    questionTimerTimeUp: 'Le temps est écoulé ! Vous n\'avez pas terminé la question dans le temps imparti. Veuillez contacter votre administrateur pour obtenir de l\'aide.',
    questionTimerMessage: 'Vous avez <strong class="primary--text">{time}</strong> pour répondre à cette question. Assurez-vous d\'être prêt avant de commencer.',
    feedback: {
      correct: 'Correct',
      incorrect: 'Incorrect',
      tryAgain: 'Incorrect, essayez à nouveau',
      noAttemptsLeft: 'Incorrect, plus de tentatives'
    },
    types: {
      MultipleChoice: 'Choix multiple',
      SingleChoice: 'Choix unique',
      Categorization: 'Association unique',
      MultipleAssociation: 'Association multiple',
      SingleOrdering: 'Tri',
      OpenAnswer: 'Réponse ouverte'
    },
    itemsToSortLabel: 'Éléments à trier',
    sortedItemsLabel: 'Éléments triés',
    itemsToCategoriseLabel: 'Éléments à organiser',
    categories: 'Catégories',
    categoriesQuestion: {
      itemNumber: 'Élément ',
      categoryNumber: 'Catégorie '
    },
    uploadFile: 'Télécharger un fichier',
    typeYourAnswerHere: 'Tapez votre réponse ici',
    yourFile: 'Votre fichier',
    submitAnswer: 'Soumettre la réponse',
    fileURL: 'URL du fichier',
    noFileUploaded: 'Aucun fichier téléchargé pour l\'instant',
    answerSubmittedWaiting: 'Réponse soumise. En attente d\'évaluation. Vous pouvez encore la modifier.',
    answerSubmittedWrongAttemptsLeft: 'Réponse soumise. Elle est incorrecte. vous pouvez encore la modifier.',
    answerSubmittedWrong: 'Réponse soumise. Elle est incorrecte. Vous ne pouvez plus la modifier.',
    answerSubmittedRight: 'Votre réponse est correcte.',
    showCorrectAnswer: 'Afficher la bonne réponse'
  },
  courseTree: {
    courseOutlineTitle: 'Plan du cours',
    courseWillStart: '✌️Ce cours commencera le {date} 🗓.<br>Veuillez utiliser le menu pour quitter cet écran 👋',
    courseFinished: 'Ce cours s\'est terminé le {date} 🗓.<br>Veuillez utiliser le menu pour quitter cet écran 👋',
    courseExpired: 'Ce cours a expiré 🗓.<br>Veuillez utiliser le menu pour quitter cet écran 👋',
    coursePendingAproval: 'Votre inscription à ce cours nécessite l\'approbation d\'un administrateur du cours.<br>Veuillez utiliser le menu pour quitter cet écran 👋',
    modulesTitle: 'Structure du cours',
    sidebarTitle: 'Informations pratiques',
    tagsTitle: 'Étiquettes de cours',
    moduleAvailableFrom: 'Disponible à partir de {from}',
    moduleAvailableFromUntil: 'Disponible à partir de {from} jusqu\'à {until}',
    moduleAvailableFromUntilMobile: '{from}-{until}',
    practicalInfo: {
      availableFrom: 'Ce cours commence le :',
      availableFromPast: 'Ce cours a commencé le :',
      availableUntil: 'Ce cours se termine le :',
      availableUntilPast: 'L\'inscription jusqu\'au :',
      expiresIn: 'Ce cours expire le :',
      doesntExpire: 'Ce cours n\'expire jamais',
      courseDuration: 'La durée de ce cours :',
      startedCourse: 'Vous vous êtes inscrit à ce cours le :',
      quizzesText: 'Ce cours contient :',
      numberOfQuestions: 'Pas de points | {n} point | {n} points',
      numberOfAnswers: 'Vous n\'avez encore gagné aucun point | Vous avez gagné un point | Vous avez gagné {questions} points !',
      yourScore: 'Votre score :',
      addToCalendar: 'Ajouter au calendrier'
    },
    gamification: {
      gamificationTitle: 'Vos réalisations',
      moreXToGo: '{x} à faire',
      checkAllAchievements: 'Cliquez ici pour voir toutes vos réalisations',
      achievementUnlocked: 'Vous avez déverrouillé une nouvelle réalisation !',
      goToAchievement: 'Aller aux réalisations'
    },
    lectureIsNotSeenExplanation: 'Marquez la leçon comme vue pour pouvoir passer à la suivante.',
    lectureIsNotDoneExplanation: 'Marquez la leçon comme vue et répondez aux questions de la leçon pour passer à la suivante',
    lectureIsNotStartedExplanation: 'La leçon suivante n\'est pas encore disponible.'
  },
  lecture: {
    workbook: 'Cahier d\'exercices',
    quiz: 'Veuillez répondre aux questions suivantes',
    quizDescription: 'Instructions pour le quiz',
    previous: 'Conférence précédente',
    next: 'Conférence suivante',
    duration: 'Durée {duration} minutes',
    durationUnknown: 'Temps à compléter : inconnu',
    numberOfQuestions: 'Pas de questions | 1 question | {size} questions',
    questionsSize: 'Pas de points | 1 point | {size} points',
    goToLecture: 'Aller à la leçon',
    goToQuiz: 'Aller au quiz',
    questionAnswersSize: 'Questions : {total}',
    questionsAnswered: '{right}/{total} questions',
    pointsRight: '{right}/{total} points',
    continue: 'Continuer',
    liveLecture: {
      addToGoogleCalendar: 'Ajouter à Google Calendar',
      addToOutlookCalendar: 'Ajouter à Office365 outlook calendar',
      addToMicrosoftLiveCalendar: 'Ajouter à Microsoft live calendar',
      joinLecture: 'Cliquez ici pour rejoindre le webinaire',
      startsIn: 'Ce webinaire commence ',
      started: 'Le webinaire a commencé ',
      passed: 'Ce webinaire est passé',
      areYouGoing: 'Y allez-vous ?',
      yes: 'Oui',
      no: 'Non'
    },
    dialog: {
      isTyping: 'est en train de taper'
    }
  },
  buttons: {
    add: 'Ajouter',
    register: 'S\'inscrire',
    open: 'Ouvrir',
    new: 'Nouveau !',
    exploreCourse: 'Explorer le cours',
    testCertificate: 'Afficher le certificat',
    printableVersion: 'Ouvrir la version imprimable',
    clone: 'Cloner',
    resume: 'Reprendre le cours',
    enroll: 'S\'inscrire',
    enrollAndPay: 'S\'inscrire et Payer',
    payAndEnroll: 'S\'inscrire et payer {amount} {currency}',
    goToCourse: 'Aller au cours',
    resumeCourse: 'Reprendre le cours',
    viewCourse: 'Voir le cours',
    loginAndEnroll: 'S\'inscrire',
    login: 'Se connecter',
    cancel: 'Annuler',
    giveUp: 'Abandonner',
    archive: 'Archiver',
    unarchive: 'Désarchiver',
    archiveCourse: 'Archiver le cours',
    unarchiveCourse: 'Désarchiver le cours',
    chooseLanguage: 'Sélectionner la langue préférée',
    playVideo: 'Lire la vidéo',
    backToTimeline: 'Retour à la chronologie',
    nextLecture: 'Leçon suivante',
    subscribeToUpdates: 'Recevoir des notifications',
    subscribeToUpdatesBig: 'Je souhaite être informé de ce cours',
    goToTheMarketplace: 'Aller à la place de marché',
    goToTheLecture: 'Aller à la leçon {lecture}',
    goToTheLastLecture: 'Reprendre le cours',
    goToTheLastQuiz: 'Reprendre la certification',
    startCourse: 'Commencer le cours',
    startCertification: 'Start certification',
    getCertificate: 'Obtenir un certificat',
    openCertificate: 'Ouvrir le certificat',
    reactivate: 'Relancer',
    completeCourse: 'Terminer le cours',
    backToTheCourse: 'À la page du cours',
    viewAllCourses: 'Tous les cours',
    viewMyDashboard: 'Mon tableau de bord',
    viewMyCourses: 'Mes Cours',
    topNewCourses: 'Derniers Cours',
    goToSettings: 'Mes paramètres',
    goToLearnerProfile: 'Profil de l\'apprenant',
    goToOrganization: 'Organisation',
    goToAdmin: 'Zone admin',
    toggleDark: 'Activer le mode sombre',
    toggleCompleted: 'Afficher les terminés',
    toggleViewAsNonAdmin: 'Afficher en tant que non-admin',
    logout: 'Se déconnecter',
    languages: 'Langues',
    toggleEditingMode: 'Mode édition',
    deleteText: 'supprimer',
    save: 'Enregistrer',
    markAsSeen: 'Marquer comme lu',
    attendedLiveLecture: 'J\'ai assisté au webinaire',
    lectureSeen: 'Vous avez terminé cette leçon',
    manageCourses: 'Gérer les cours',
    manage: 'Gérer',
    edit: 'Modifier',
    export: 'Exporter le cours',
    ok: 'Ok',
    switchSignUpToRegister: 'Je n\'ai pas encore de compte.',
    switchSignUpToLogin: 'Je suis déjà inscrit.',
    continue: 'Continuer',
    continueWithFacebook: 'Continuer avec Facebook',
    continueWithGoogle: 'Continuer avec Google',
    close: 'Fermer',
    forceUpdate: 'Oui, continuer !',
    showDetails: 'Afficher les détails',
    deleteCourse: 'Supprimer le cours',
    translateCourse: 'Traduire le cours',
    selectCourse: 'Sélectionner un cours',
    deleteLearningPath: 'Supprimer le parcours d\'apprentissage',
    downloadCertificate: 'Télécharger le certificat',
    connect: 'Connecter',
    reconnect: 'Reconnecter',
    sync: 'Synchroniser',
    invite: 'Inviter',
    showUsers: 'Afficher les utilisateurs',
    hideUsers: 'Masquer les utilisateurs',
    previousLecture: 'Leçon précédente',
    exitFullscreenLectureMode: 'Quitter le mode plein écran',
    enterFullscreenLectureMode: 'Activer le mode plein écran',
    download: 'Télécharger',
    addField: 'Ajouter un champ',
    delete: 'Supprimer',
    startOver: 'Modifier la sélection',
    back: 'Retour',
    continueWithOAuth: 'Continuer avec {workspaceName}',
    comingSoon: 'Bientôt disponible',
    courses: 'Tous les cours',
    answerTypeform: 'Répondez à ceci',
    proceed: 'Procéder',
    launchFullscreen: 'Activer le mode plein écran',
    collapse: 'Réduire',
    expand: 'Agrandir',
    goUp: 'Monter',
    locked: 'Verrouillé',
    done: 'Terminé',
    exploreLearningPath: 'Explorer',
    startNow: 'Commencer maintenant',
    uploadImage: 'Télécharger une image',
    addNew: 'Ajouter nouveau',
    deleteGroup: 'Supprimer le groupe',
    deleteSkill: 'Supprimer la compétence',
    forceDeleteGroup: 'Supprimer le groupe de force',
    forceDeleteSkill: 'Supprimer la compétence de force',
    iAmDone: 'J\'ai terminé !',
    clear: 'Effacer',
    editCoverPhoto: 'Modifier la photo de couverture'
  },
  courses: {
    duration: '{duration}',
    modulesTitle: 'Description du cours',
    hours: 'heures | heure | heures',
    minutes: 'minutes | minute | minutes',
    courses: 'Tous les cours',
    courseNotSelected: 'Cours non sélectionné',
    myCourses: 'Mon apprentissage',
    module: 'Module {moduleNumber}',
    notEnrolled: 'Vous n\'êtes inscrit à aucun cours !',
    noCompleted: 'Vous n\'avez pas encore terminé de cours',
    clickToCatalog: 'Cliquez ici pour voir le catalogue des cours',
    exploreCourses: 'Explorer les cours',
    numberOfModules: 'modules',
    finishAndGetCert: 'Obtenir un certificat',
    validUntil: 'Valable jusqu\'au {expireDate}',
    completedCoursesTitle: 'Cours terminés',
    completedCoursesSubtitle: 'Cours que vous avez déjà terminés',
    courseIsCertifiable: 'Certificat à la fin du cours',
    achievementsEnabled: 'Réalisations pour la progression du cours',
    noCourses: 'Aucun cours trouvé',
    goToDashboard: 'Consultez votre dashboard pour voir vos cours',
    noLearningPaths: 'Aucun parcours d\'apprentissage trouvé',
    noCoursesWithSearch: 'Aucun cours trouvé',
    tooltipShareUrl: 'Partager l\'URL',
    titleCopyText: 'Copier l\'URL dans le presse-papiers',
    titleTextCopied: 'URL copiée',
    buttonCopyText: 'copier',
    buttonTextCopied: 'copié',
    searchHeader: 'Rechercher',
    searchLabel: 'Rechercher des cours...',
    aiSearchLabel: 'Rechercher des cours avec l’IA...',
    aiSearchButton: 'Recherche IA',
    classicSearchButton: 'Recherche classique',
    aiSearchDescription: 'Comprend le langage naturel. Essayez : "Montre-moi des cours pour ingénieurs pour améliorer la gestion du temps."',
    classicSearchDescription: 'Recherche par mots-clés exacts dans les titres, descriptions et contenus des cours.',
    totalFound: 'Aucun cours trouvé | <strong>{n}</strong> cours trouvé | <strong>{n}</strong> cours trouvés',
    tagsHeader: 'Étiquettes ({tags} sélectionnées)',
    durationHeader: 'Durée ({durations} sélectionnées)',
    resetFilters: 'Réinitialiser les filtres',
    filtersTitle: 'Filtres',
    applyFilters: 'Appliquer les filtres',
    durations: {
      less30: 'moins de 30 minutes',
      between30and2: 'entre 30 minutes et 2 heures',
      between2and4: 'entre 2 et 4 heures',
      more4: 'plus de 4 heures'
    },
    tags: {
      loadMore: 'Charger plus...',
      loadLess: 'Charger moins...',
      noTags: 'Aucune étiquette trouvée',
      deleteTag: 'supprimer l\'étiquette'
    },
    anonymousNotAllowed: 'Vous devez être inscrit au cours pour voir le contenu',
    badge: {
      template: 'modèle',
      external: 'externe',
      scorm: 'scorm',
      umbrella: 'umbrella',
      requiresApproval: 'nécessite une approbation',
      archived: 'archivé',
      inactive: 'inactif',
      paymentMissing: 'paiement manquant'
    },
    paidCourses: {
      payNowHeader: 'Payer maintenant {amount} {currency}',
      payNowDescription: 'Après le paiement, vous aurez accès au cours',
      payNowButton: 'Payer maintenant',
      paymentSucceeded: 'Paiement pour le cours {name} réussi',
      paymentFailed: 'Le paiement pour le cours {name} a échoué : {err}',
      finalisingPayment: 'Finalisation de votre paiement, veuillez patienter...⏳',
      voucherCode: 'Code de bon',
      applyButton: 'Appliquer',
      payWithLiqpay: 'Payer avec LiqPay',
      payAmountCurrency: 'Payer {amount} {currency}',
      vatIncluded: '(TVA incluse)',
      applyPromocode: 'Si vous avez un code promotionnel, veuillez le saisir dans le champ ci-dessous.',
      confirmSettingsAndProceed: 'Confirmer les paramètres et continuer',
      wrongTaxId: 'Format de numéro fiscal incorrect. Le format correct est <strong>{correctFormat}</strong>.<br>Actualisez la page et réessayez.'
    },
    failedCourse: {
      failedCourseTitle: 'Mise à Jour Importante sur Votre Cours',
      failedCourseTooltip: 'Veuillez redémarrer le cours pour pouvoir le compléter.',
      failedCourseAlertMessage: 'Malheureusement, il est impossible d\'obtenir un certificat. Vous avez obtenu {correct} sur {total} points, mais ce n\'est pas suffisant pour atteindre le seuil de {minRate}%.',
      failedCourseOneTimeEnrolment: 'Redémarrage du cours impossible. Contactez l\'administrateur pour vous réinscrire.',
      restartCourseButton: 'Redémarrer le cours'
    },
    headers: {
      titleAndDescription: 'Titre et description du cours',
      quizProgress: 'Progression des questions',
      title: 'Titre du cours',
      description: 'Description du cours',
      ordering: 'Ordre du cours',
      progress: 'Progression du cours',
      createTime: 'Créé',
      updateTime: 'Mis à jour'
    },
    published: 'Publié'
  },
  learningPaths: {
    noCompleted: 'Vous n\'avez pas encore terminé de parcours d\'apprentissage',
    noAssigned: 'Vous n\'avez pas encore de parcours d\'apprentissage assigné',
    numberOfCourses: 'Aucun cours | {completed}/1 cours | {completed}/{n} cours',
    achievementsLabel: 'Réalisations',
    skillsLabel: 'Compétences',
    certificateLabel: 'Certificat à la fin',
    progressLabel: 'Progression',
    totalFound: 'Aucun parcours d\'apprentissage trouvé | <strong>{n}</strong> parcours d\'apprentissage trouvé | <strong>{n}</strong> parcours d\'apprentissage trouvés',
    item: {
      title: 'Titre et description',
      steps: 'Étapes',
      progress: 'Progression',
      actions: 'Actions'
    }
  },
  auth: {
    or: 'OU',
    dontHaveAnAccountYet: 'Vous n\'avez pas encore de compte ?',
    enterPassword: 'Entrez votre mot de passe',
    enterPhone: 'Entrez votre numéro de téléphone',
    atLeastChars: 'Au moins {numberCharacters} caractères',
    forgotPassword: 'Mot de passe oublié ?',
    resetPassword: {
      title: 'Réinitialiser le mot de passe',
      description: 'Entrez votre adresse e-mail et nous vous enverrons un e-mail avec des instructions pour réinitialiser votre mot de passe.',
      placeholder: 'Adresse e-mail',
      button: 'Réinitialiser le mot de passe',
      info: 'Si vous ne recevez pas d\'e-mail de notre part dans quelques minutes, vérifiez votre filtre anti-spam car parfois ils y arrivent.',
      support: 'L\'e-mail sera envoyé par info@theworkademy.com',
      passwordResetSuccess: '<b>D\'accord !</b> Les instructions pour réinitialiser votre mot de passe ont été envoyées par e-mail. Veuillez vérifier votre e-mail.',
      changePasswordTitle: 'Changer le mot de passe',
      changePasswordDesc: 'Entrez le mot de passe souhaité.',
      passwordChangeSuccess: '<b>D\'accord !</b> Mot de passe mis à jour avec succès. Vous êtes maintenant connecté avec votre nouveau mot de passe.',
      passwordChangeSuccessAndLogin: '<b>D\'accord !</b> Mot de passe mis à jour avec succès. Vous pouvez maintenant vous connecter avec votre nouveau mot de passe.'
    },
    nameLabel: 'Nom',
    namePlaceholder: 'John Smith',
    emailLabel: 'E-mail',
    join: 'Rejoignez-nous !',
    alreadyHaveAccount: 'Vous avez déjà un compte ?',
    loginNow: 'Vous pouvez vous connecter maintenant !',
    token: 'Jeton',
    newPassword: 'Nouveau mot de passe',
    repeatPassword: 'Répétez le nouveau mot de passe',
    passwordRequired: 'Mot de passe requis',
    passwordRule: 'Le mot de passe doit contenir au moins 8 caractères, et ne doit pas dépasser {maxChars} caractères',
    passwordShouldMatch: 'Les mots de passe doivent correspondre',
    emailRequired: 'E-mail requis',
    emailValid: 'L\'e-mail doit être valide',
    nameRequired: 'Nom requis',
    nameLessThan: 'Le nom doit comporter moins de {MAX_NAME_LENGTH} caractères',
    passwordValid: 'Le mot de passe doit comporter au moins 8 caractères, et ne doit pas dépasser {MAX_PASSWORD_LENGTH} caractères',
    repeatPasswordRequired: 'Veuillez répéter le mot de passe',
    passwordsDontMatch: 'Les mots de passe ne correspondent pas',
    phoneValid: 'Le numéro de téléphone doit être valide',
    profilePicture: 'Photo de profil',
    pictureLabel: 'URL de la photo de profil',
    pictureHint: 'Copiez le lien vers votre photo de profil préférée',
    phone: 'Numéro de téléphone',
    city: 'Ville',
    street: 'Rue',
    postalCode: 'Code postal',
    country: 'Pays',
    addressAndPhoneTitle: 'Adresse et numéro de téléphone',
    changePassword: 'Changer le mot de passe',
    oldPasswordLabel: 'Ancien mot de passe',
    newPasswordLabel: 'Nouveau mot de passe',
    phoneLabels: {
      countrySelectorLabel: 'Code du pays',
      countrySelectorError: 'Sélectionnez un pays',
      phoneNumberLabel: 'Numéro de téléphone',
      example: 'Exemple :'
    },
    consentRule: 'Vous devez accepter la politique de confidentialité pour continuer',
    consentLabel: 'J\'accepte la <a href="{url}" target="_blank">politique de confidentialité</a>',
    loginSuccessful: 'Connexion réussie',
    registrationSuccessful: 'Inscription réussie',
    loginWithEmail: 'Connexion avec e-mail',
    loginWithPhone: 'Connexion avec numéro de téléphone',
    rememberMe: 'Se souvenir de moi',
    agreeWithTerms: 'J\'accepte les <a href="{url}" target="_blank">termes et conditions</a>',
    errorInvalidToken: 'Jeton invalide',
    emailOrPhoneRequired: 'E-mail ou téléphone requis',
    invalidPhoneNumber: 'Numéro de téléphone invalide',
    invalidEmail: 'E-mail invalide',
    invalidPassword: 'Mot de passe invalide',
    invalidOldPassword: 'Ancien mot de passe invalide',
    userNotFound: 'Utilisateur non trouvé',
    userAlreadyExists: 'L\'utilisateur existe déjà',
    userBanned: 'Utilisateur banni',
    tokenExpired: 'Jeton expiré',
    tokenRequired: 'Jeton requis',
    authError: 'Erreur d\'authentification',
    loginWith: 'Connexion avec {serviceName}',
    signupWith: 'Inscription avec {serviceName}',
    invalidAuthProvider: 'Fournisseur d\'authentification invalide',
    unknownError: 'Erreur inconnue'
  },
  errors: {
    '-1': 'Erreur inconnue s\'est produite',
    1000: 'Ce nom d\'utilisateur existe déjà',
    1001: 'Utilisateur non trouvé',
    1002: 'Nom d\'utilisateur ou mot de passe non valide',
    1003: 'Nom d\'utilisateur ou mot de passe non valide',
    1004: 'Identifiants incorrects',
    1100: 'Jeton non valide',
    1101: 'Jeton expiré',
    59: 'Mauvaises informations d\'identification ou le nom d\'utilisateur et le mot de passe ne correspondent pas',
    1300: 'Condition préalable échouée : cours utilisateur non encore terminé.',
    1500: 'Bon avec le code {code} non trouvé',
    1501: 'Le bon avec ce code {code} a déjà été utilisé',
    popup_closed_by_user: 'La fenêtre contextuelle Google auth a été fermée',
    9905: 'Veuillez vérifier les paramètres de messagerie de votre compte Facebook. L\'e-mail doit être vérifié.',
    9904: 'Impossible de s\'authentifier avec Personio. Vérifiez les informations de connexion.',
    LOCKED: 'Votre compte est verrouillé. Veuillez réinitialiser votre mot de passe',
    PASSWORD_DONT_MATCH: 'Votre mot de passe ne correspond pas',
    1302: 'Vous êtes déjà inscrit à ce cours. Il est possible de s\'inscrire qu\'une seule fois à ce cours',
    1307: 'Il y a une période de réflexion de <strong>{period}</strong> avant que vous puissiez suivre ce cours à nouveau.',
    1308: 'Inscription impossible : Vous avez déjà terminé ce cours, et l\'inscription est limitée à une seule fois.'
  },
  footer: {
    platformDescription: '<strong>{title}</strong> est une plateforme d\'e-learning ' +
      'axée sur les dernières tendances de l\'acquisition de connaissances et la motivation qui en découle',
    links: 'Liens',
    contacts: 'Contacts',
    github: 'GitHub',
    foundIssues: 'Vous avez trouvé des problèmes?',
    submitThem: 'soumettez-les!',
    privacyUrl: 'https://www.theworkademy.com/privacy',
    workademyPrivacyLabel: 'Politique de confidentialité de Workademy',
    privacyLabel: 'Politique de confidentialité',
    contentLabel: 'Politique de contenu',
    tacUrl: 'https://www.theworkademy.com/tac',
    workademyTacLabel: 'Conditions générales de Workademy',
    tacLabel: 'Conditions générales',
    contactUsTitle: 'Contactez-nous!',
    contactUsText: 'Si vous avez des questions ou trouvez une erreur dans un cours, écrivez-nous!',
    supportEmail: 'support@theworkademy.com',
    poweredBy: 'alimenté par <a href="{companyUrl}" target="_blank" class="company-link">{company}</a>'
  },
  progress: {
    go: 'Allez allez allez! Seulement {completed} répondu sur {total}',
    nice: 'Bien joué! {completed} sur {total}! Continuez!',
    almost: 'Presque terminé! {completed} sur {total}!',
    done: 'Vous êtes un héros! {completed} sur {total}!',
    shorten: '{completed}/{total}',
    courseScore: 'Votre score au cours: <strong>{percentage}%</strong>',
    yourProgress: 'Mon progrès',
    answeredQuestions: '<strong>{score}</strong> points sur les questions correctement répondues',
    seenLecture: '<strong>{score}</strong> leçons vues',
    yourScore: 'Score: {score}',
    noScore: 'Ce cours n\'a pas de quiz',
    questionsProgress: 'Vous avez répondu à {progress}% des questions ({correct}/{total})',
    lecturesProgress: 'Vous avez lu {progress}% des leçons ({correct}/{total})',
    overallProgress: 'Vous avez répondu à {progressQuestions}% ({correctQuestions}/{totalQuestions}) des questions et lu {progressLectures}% ({correctLectures}/{totalLectures}) des leçons.'
  },
  settings: {
    settings: 'Paramètres',
    changeSettings: 'Modifier les paramètres',
    changeSettingsSuccess: 'Vos modifications ont été enregistrées avec succès!',
    changeSettingsError: 'Il y a eu une erreur lors de la modification de vos paramètres: {err}.',
    passwordChangeSuccess: 'Votre mot de passe a été changé avec succès.',
    passwordChangeError: 'Il y a eu une erreur lors de la modification de votre mot de passe: {err}.',
    language: 'Langue',
    takeMeBack: 'Ramenez-moi',
    userPic: {
      change: 'Télécharger une nouvelle photo de profil (png ou jpeg)',
      add: 'Ajouter une photo de profil (png ou jpeg)',
      chooseYourAvatar: 'Avatars'
    }
  },
  learnerProfile: {
    learnerProfile: 'Profil de l\'apprenant',
    achievementsTitle: 'Mes réalisations',
    skillsTitle: 'Mes compétences',
    viewAll: 'Voir tout',
    courses: 'Cours',
    learningPaths: 'Parcours d\'apprentissage',
    achievements: 'Réalisations',
    skills: 'Compétences',
    level: 'Niveau',
    frames: 'Cadres de gamification',
    points: 'Points de cours',
    learningTime: 'Temps d\'apprentissage'
  },
  organization: {
    organization: 'Mon organisation',
    skills: 'Compétence | Compétences',
    members: 'Membre | Membres',
    level: 'Niveau',
    noGroupsYet: 'Il n\'y a pas encore de groupes organisationnels créés.',
    noGroupsAdmin: 'Il n\'y a pas encore de groupes créés. Veuillez créer des groupes pour pouvoir voir la structure organisationnelle ici.',
    createGroupsBtn: 'Créer des groupes',
    points: 'Points de cours',
    loadMoreUsers: 'charger plus d\'utilisateurs...'
  },
  certificates: {
    congratulations: 'Félicitations, vous avez obtenu un certificat!',
    eligibleHeadline: '👉 Score: {score}%. Après le certificat, le cours se termine mais les matériaux restent accessibles sur votre tableau de bord.',
    eligibleHeadlineCombined: '👉 Progrès réalisé : {score} réponses correctes et {lectures} leçons complétées. Une fois ce niveau atteint, vous pouvez obtenir votre certificat. Le cours se termine, mais les matériaux restent accessibles sur votre tableau de bord.',
    youCanCancel: '👉 Vous pouvez continuer votre cours maintenant et réclamer votre certificat plus tard. L\'option de réclamation restera disponible.',
    checkNameText: '⚠️ Attention! Assurez-vous que le nom de votre certificat dans les paramètres est correct:',
    changeNameInSettingsText: 'Pour corriger le nom, utilisez le bouton <strong>Changer de nom</strong> puis revenez ici.',
    generateForName: 'Je confirme l\'émission du certificat à <strong>{name}</strong>.',
    writeYourName: 'Le certificat sera délivré à {name}. ' +
      'Pour confirmer, veuillez écrire à nouveau votre nom. Si ce n\'est pas le bon nom, veuillez d\'abord le changer dans vos paramètres',
    writeYourNameLabel: 'Écrivez votre nom',
    yourPercentage: 'Vous avez obtenu <strong>{score}%</strong>. Vous pouvez encore essayer d\'en obtenir plus!',
    getMoreButton: 'Retour au cours',
    notEligibleHeadline: 'Pas encore éligible',
    notEligibleText: 'Retournez au cours et répondez aux questions restantes',
    notEligibleOkButton: 'Ok, je comprends quoi faire',
    eligibleZeroScoreHeadline: 'Vous avez terminé le cours et maintenant vous êtes éligible pour un certificat. Le cours sera toujours disponible dans la section des cours terminés.',
    eligibleAnsweredAll: 'Vous avez répondu à toutes les questions du cours et maintenant vous pouvez terminer le cours. Il sera toujours disponible dans la section des cours terminés.',
    eligibleReadAll: 'Vous avez marqué toutes les leçons comme lues et maintenant vous pouvez terminer le cours. Il sera toujours disponible dans la section des cours terminés',
    eligibleCancel: 'Vous n\'avez pas besoin de terminer le cours maintenant. Le bouton pour terminer le cours sera toujours disponible.',
    nameInSettingsText: 'Le nom indiqué dans vos paramètres est',
    changeSettingsLinkText: 'Changer les paramètres',
    changeNameLinkText: 'Changer de nom',
    byProcedingWithCertGenText: 'En procédant à l\'étape suivante, vous acceptez d\'avoir terminé le cours et le nom ci-dessus, {name} vous désigne.',
    instructions: 'Après avoir reçu le certificat, vous serez redirigé vers votre tableau de bord. Vous ne pourrez plus voir vos réponses à ce cours.\n' +
      '            Cependant, vous pourrez vous réinscrire et le refaire!',
    generate: 'Générer le certificat',
    continueToCourse: 'Continuer vers le cours',
    completeCourse: 'Terminer le cours',
    getCertificate: 'Certificat',
    openCertificate: 'Ouvrir le certificat',
    dontGenerate: 'Annuler',
    certificateTitle: 'CERTIFICAT DE RÉUSSITE',
    issuedOn: 'Date de délivrance:',
    toCertifyThat: 'pour certifier que',
    hasCompletedTheCourse: 'a terminé le cours',
    progress: 'progrès',
    withScore: 'avec un score total de {score}%',
    ofADurationOf: 'd\'une durée de {duration}',
    withDuration: 'Avec une durée de moins d\'une heure | Avec une durée d\'une heure | Avec une durée de {duration} heures',
    checkCertificateText: 'L\'authenticité de ce certificat peut être vérifiée sur:',
    wasCreatedByWorkademy: 'Le cours a été créé par <a href="https://www.theworkademy.com" target="_blank">Workademy</a> &mdash; Académie au travail, Académie qui fonctionne.',
    shareMyAchievement: 'Partager mon succès',
    sharingTitle: 'Je viens de terminer le cours {courseName}',
    sharingQuote: 'Je viens de terminer le cours {courseName}',
    sharingDescription: 'Je viens de terminer le cours {name} et j\'ai obtenu mon certificat!',
    canGetCertificate: 'Vous avez répondu correctement à <strong>{score}</strong> sur <strong>{total}%</strong> questions. <br>Vous pouvez obtenir votre certificat.',
    needMoreToGetCertificate: 'Vous devez atteindre <strong>{total}%</strong> de réponses correctes. <br> Vous avez atteint <strong>{score}</strong>.',
    givenUpCourse: 'Il semble que vous ayez abandonné ce cours. Vous devez recommencer ce cours si vous voulez obtenir un certificat',
    courseCompletedWithSuccess: 'Cours {name} terminé avec succès!',
    youHaveToAnswerAllQuestions: 'Vous devez répondre à toutes les questions pour pouvoir terminer le cours.',
    youHaveToCompleteAllLectures: 'Vous devez terminer toutes les leçons pour pouvoir terminer le cours.',
    youHaveAnsweredAllQuestions: 'Vous avez répondu à toutes les questions du cours et vous pouvez maintenant terminer le cours.',
    youHaveCompletedAllLectures: 'Vous avez terminé toutes les leçons du cours et vous pouvez maintenant terminer le cours.',
    youHaveAlreadyCompleted: 'Vous avez terminé ce cours',
    youCompletedСertification: 'Vous avez terminé cette certification',
    eligibleAllCertification: 'Vous avez réussi tous les quiz et vous pouvez maintenant compléter cette certification. Elle sera toujours disponible dans la section des cours terminés.',
    eligibleCancelCertification: 'Vous n\'avez pas besoin de terminer la certification maintenant. Le bouton pour compléter la certification sera toujours disponible.',
    youHaveAlreadyCertificate: 'Votre certificat vous a déjà été délivré. Cliquez sur le bouton pour y accéder.',
    shareOnLinkedIn: 'Ajouter à LinkedIn',
    cantFind: 'Le certificat avec UUID {uuid} n\'a pas pu être trouvé.',
    proceedToMainPage: 'Aller à la page principale',
    youHaveToCompleteExternalCourse: 'Cliquez sur le bouton une fois que vous avez terminé le cours.',
    youHaveCompletedExternalCourse: 'Vous avez déjà marqué ce cours comme terminé',
    finishExternalCourseTitle: 'Confirmer la fin du cours',
    finishExternalCourseSubtitle: 'En cliquant sur le bouton « Terminer le cours », vous confirmez que vous avez terminé ce cours. Si vous ne l\'avez pas terminé, veuillez sélectionner « Annuler » pour revenir et continuer le cours.'
  },
  vouchers: {
    introduceCode: 'Tapez votre code de bon pour vous inscrire au cours',
    voucherCode: 'Code de bon'
  },
  admin: {
    drawer: {
      adminToolsDrawer: {
        title: 'Outils d\'administration de cours'
      }
    },
    attendance: {
      attending: 'Présent :',
      notAttending: 'Absent :',
      attendedLive: 'A assisté :',
      seenBy: 'Vu par :'
    },
    enroll: {
      enrollIntoCourse: 'Inscrire des utilisateurs au cours {name}',
      enrollIntoLearningPath: 'Inscrire des utilisateurs au parcours {name}',
      grantFreebieButton: 'Accorder l\'accès',
      grantFreebieSuccess: 'L\'utilisateur {name} a obtenu l\'accès au cours',
      grantFreebieError: 'Erreur lors de l\'attribution de l\'accès à l\'utilisateur {name} : {err}'
    },
    stepper: {
      basicInformationTitle: 'Informations de base',
      mediaVisualsTitle: 'Médias et visuels',
      enrollmentAccessTitle: 'Inscription et accès',
      certificationCompletionTitle: 'Certification et achèvement',
      courseFeaturesTitle: 'Cours et fonctionnalités',
      commercialSettingsTitle: 'Paramètres commerciaux',
      miscellaneousTitle: 'Divers',
      externalUrlTitle: 'Source',

      title: 'Titre du cours *',
      titleDesc: 'Définir le nom du cours.',
      descriptionTitle: 'Description',
      descriptionDesc: 'Rédigez un résumé ou une description détaillée du cours.',
      tagsTitle: 'Étiquettes',
      tagsDesc: 'Ajoutez des étiquettes pour classer le contenu du cours.',
      durationTitle: 'Durée',
      durationDesc: 'Précisez la durée du cours.',
      durationLabel: 'Durée en minutes',
      typeTitle: 'Type de cours',
      typeDesc: 'Définissez le type de cours en fonction de son objectif. Chaque type est adapté à une approche spécifique d\'apprentissage ou de certification.',
      typeLabel: 'Sélectionner le type de cours',
      types: {
        base: 'Cours de base',
        external: 'Cours externe',
        SCORM: 'SCORM',
        certification: 'Cours de certification',
        umbrella: 'Cours global'
      },

      cardImageTitle: 'Image de la carte du cours',
      cardImageDesc: 'Téléchargez l\'image représentant le cours dans les listes.',
      coverImageChooser: 'Choisissez l\'image de couverture pour le cours',
      useDefaultCover: 'Utiliser la couverture par défaut',
      wideCoverTitle: 'Image large du cours',
      wideCoverDesc: 'Définir l\'image large de couverture pour les vues détaillées du cours.',

      externalTitle: 'URL externe',
      externalDesc: 'Définir une URL pour diriger les apprenants vers du matériel d\'apprentissage externe.',
      externalLabel: 'Lien vers lequel la carte du cours externe pointe',

      anonymousAllowedTitle: 'Exigence d\'authentification',
      anonymousAllowedDesc: 'Décidez si les utilisateurs peuvent s\'inscrire sans authentification.',
      anonymousAllowedLabel: 'Anonyme autorisé',
      availableFromUntilTitle: 'Heures de début et de fin',
      availableFromUntilDesc: 'Définissez les heures de début et de fin officielles du cours.',
      preEnrollAllowedTitle: 'Pré-inscription',
      preEnrollAllowedDesc: 'Permettre aux utilisateurs de s\'inscrire au cours avant la date de début.',
      preEnrollAllowedLabel: 'Pré-inscription autorisée',
      advancedTitle: 'Avancé',
      enrollmentCodeTitle: 'Code d\'inscription',
      enrollmentCodeDesc: 'Activer ou désactiver la nécessité d\'un code pour participer.',
      enrollmentCodeLabel: 'Activé avec le code d\'inscription',
      oneTimeEnrollmentTitle: 'Inscription unique',
      oneTimeEnrollmentDesc: 'Spécifiez si le cours permet une seule inscription par utilisateur.',
      oneTimeEnrollmentLabel: 'Inscription unique (pas de possibilité de répéter le cours)',
      enrollmentApprovalTitle: 'Approbation d\'inscription',
      enrollmentApprovalDesc: 'Définissez si les inscriptions nécessitent une approbation de l\'administrateur.',
      enrollmentApprovalLabel: 'Approuver préalablement l\'inscription des apprenants',
      recurringCourseTitle: 'Cours récurrent',
      recurringCourseDesc: 'Définir si le cours est récurrent et la date de la première récurrence.',

      certificationTitle: 'Paramètres de certification',
      certificationDesc: 'Activer ou désactiver la certification pour le cours.',
      gradeTitle: 'Exigence de note',
      gradeDesc: 'Définir le pourcentage de note nécessaire à la certification.',
      coolingOffPeriod: 'Période de réflexion',
      coolingOffPeriodDesc: 'Définissez le temps que les utilisateurs doivent attendre avant de retenter le cours en cas d\'échec.',
      coolingOffPeriodLabel: 'Temps de réflexion (en heures)',
      pointsEarnedTitle: 'Points gagnés',
      pointsEarnedDesc: 'Définir les points gagnés par les utilisateurs après la fin du cours.',
      pointsEarnedLabel: 'Points gagnés',

      learningSequenceTitle: 'Séquence d\'apprentissage',
      learningSequenceDesc: 'Précisez si l\'apprentissage du cours est séquentiel.',
      learningSequenceLabel: 'Apprentissage séquentiel (chaque module s\'ouvre après la fin du précédent)',
      forumDiscussionTitle: 'Discussion en forum',
      forumDiscussionDesc: 'Activer ou désactiver les forums de discussion pour le cours.',

      paidTitle: 'Cours payant',
      paidDesc: 'Définir si le cours est payant et fixer le prix.',
      exemptTitle: 'Accès gratuit pour les groupes',
      exemptDesc: 'Les utilisateurs appartenant aux groupes suivants sont exemptés de paiement.',
      featuredTitle: 'Cours en vedette',
      featuredDesc: 'Marquez si le cours est en vedette et doit apparaître dans une section mise en avant.',
      featuredLabel: 'Marquer comme vedette',

      folderTitle: 'Dossier',
      folderDesc: 'Organisez votre cours dans un dossier',
      disclaimerPopupTitle: 'Pop-up de non-responsabilité',
      disclaimerPopupDesc: 'Configurer le pop-up de non-responsabilité affiché lors de l\'inscription.',
      templateTitle: 'Modèle de cours',
      templateDesc: 'Précisez si ce cours peut être cloné ou copié par d’autres utilisateurs.',
      templateLabel: 'Cours modèle',
      manualOrderTitle: 'Ordre manuel',
      manualOrderDesc: 'Définir l\'ordre manuel du cours dans les listes.',
      manualOrderLabel: 'Ordre du cours',
      customFieldsTitle: 'Champs personnalisés',
      customFieldsDesc: 'Ajoutez des champs personnalisés pertinents pour le cours.',
      newFieldNameLabel: 'Nom du champ',
      newFieldValueLabel: 'Valeur du champ',
      newFieldNamePlaceholder: 'Nom',
      newFieldValuePlaceholder: 'Valeur',

      coverLabel: 'Image de couverture',
      enterUrl: 'Entrer l\'URL',

      certificateForAnsweredQuestions: 'Pour les questions répondues',
      certificateForAnsweredQuestionsInfo: 'Délivrer un certificat pour le pourcentage de questions répondues',
      certificateForReadLectures: 'Pour les conférences terminées',
      certificateForReadLecturesInfo: 'Délivrer un certificat après la réussite de toutes les conférences',
      passingRateLabel: 'Taux de réussite',

      modulesLabel: 'Nombre de modules',
      lecturesLabel: 'Nombre de conférences dans chaque module',
      sectionsLabel: 'Nombre de sections dans chaque conférence',
      createCourse: 'Créer un cours',
      updateCourse: 'Mettre à jour le cours',
      scormPreview: 'Aperçu SCORM apparaîtra ici',
      scormBeingProcessed: 'SCORM téléchargé ! Nous le traitons actuellement, cela peut prendre jusqu\'à deux minutes. Vous pouvez patienter ou revenir plus tard. <strong>N\'oubliez pas d\'enregistrer votre cours !</strong>',
      scormProcessedSuccessfully: 'SCORM traité avec succès !',
      scormProcessedError: 'Une erreur s\'est produite lors du traitement du fichier SCORM. Essayez de le télécharger à nouveau.',
      oneTimeEnrollment: 'Inscription unique',
      recurring: {
        isRecurringText: 'Ce cours est récurrent.',
        isNotRecurringText: 'Ce cours n\'est pas récurrent',
        periodLabel: 'Période de récurrence',
        firstExecutionLabel: 'La première réinscription doit avoir lieu le :',
        firstExecutionExplanation: 'La première fois que la récurrence sera appliquée. <br>' +
          'Les apprenants inscrits au cours et l\'ayant déjà terminé seront réinscrits pour la première fois à cette date.',
        amountLabel: 'Fois',
        timesToRepeat: 'Fois à répéter',
        periodOfRecurringText: 'Les apprenants doivent répéter ce cours tous les ',
        saveRecurring: 'Enregistrer les informations récurrentes',
        deleteRecurring: 'Supprimer les propriétés récurrentes',
        period: {
          MONTHLY: 'Mois | Mois',
          YEARLY: 'An | Ans'
        },
        messages: {
          createdSuccess: 'Planificateur récurrent pour le cours {name} créé avec succès.',
          updatedSuccess: 'Planificateur récurrent pour le cours {name} mis à jour avec succès.',
          deletedSuccess: 'Planificateur récurrent pour le cours {name} supprimé avec succès.',
          createdError: 'Erreur lors de la création du planificateur récurrent pour le cours {name} : {err}.',
          updatedError: 'Erreur lors de la mise à jour du planificateur récurrent pour le cours {name} : {err}.',
          deletedError: 'Erreur lors de la suppression du planificateur récurrent pour le cours {name} : {err}.'
        }
      },
      ai: {
        topicAndLocaleTitle: 'Sujet et langue',
        contextExplanation: 'Vous pouvez écrire ici tout ce qui aidera à adapter le cours aux besoins spécifiques de l\'entreprise.',
        contextHint: 'Exemple : Nous sommes une entreprise en pleine croissance dans le domaine de l\'assurance-technologie, visant le succès des ventes.',
        contextTitle: 'Contexte supplémentaire',
        contentSpecificationTitle: 'Spécifications du contenu',
        topicLabel: 'Sujet du cours',
        localeLabel: 'Langue du cours',
        contextLabel: 'Contexte supplémentaire',
        noModulesLabel: 'Nombre de modules',
        noTopicsLabel: 'Nombre de sujets dans chaque module',
        noOptionsLabel: 'Nombre d\'options dans chaque question',
        noModulesHint: 'Le nombre de modules peut aller de 1 à 10',
        noTopicsHint: 'Le nombre de sujets par module ne peut être inférieur à un et supérieur à 5',
        noOptionsHint: 'Le nombre d\'options par question ne peut être inférieur à 3 et supérieur à 5',
        specifyEveryModule: 'Spécifiez chaque module que vous souhaitez voir apparaître dans votre cours',
        specifyEveryModuleExplanation: 'Spécifiez le titre de chaque module du cours, par exemple "Fondamentaux du RGPD", "RGPD et technologie de l\'assurance", "RGPD pour les développeurs"',
        modules: 'Modules',
        lectures: 'Leçons',
        questions: 'Questions',
        businessGoalsLabel: 'Objectifs commerciaux du cours',
        businessGoalsHint: 'Commencez à taper pour rechercher ou créer votre propre objectif',
        businessGoalsExplanation: 'Les objectifs commerciaux doivent être SMART – Spécifiques, Mesurables, Atteignables, Pertinents, Temporels. ' +
          'Par exemple, "Augmenter le chiffre d\'affaires : Augmenter le chiffre d\'affaires trimestriel de 15 % en mettant en place une formation avancée à la vente pour l\'équipe d\'ici la fin du T2."',
        businessGoalsExamples: [
          'Augmenter le chiffre d\'affaires : Augmenter le chiffre d\'affaires trimestriel de 15 % en mettant en place une formation avancée à la vente pour l\'équipe d\'ici la fin du T2.',
          'Améliorer la satisfaction des clients : Atteindre un score de satisfaction client de 90 % en formant le personnel du service client à la résolution des conflits et aux compétences de communication au cours des 6 prochains mois.',
          'Améliorer les compétences des employés : S\'assurer que 100 % du département marketing est formé aux outils d\'analyse de données dans les 3 prochains mois pour améliorer l\'efficacité des campagnes.',
          'Réduire les coûts opérationnels : Diminuer les coûts de production de 10 % au cours de l\'année prochaine grâce à des opérations rationalisées et à une formation à l\'efficacité pour le personnel de production.',
          'Élargir la portée du marché : Entrer dans 2 nouveaux marchés internationaux d\'ici la fin de l\'année, en préparant l\'équipe de vente avec des compétences linguistiques et une formation culturelle d\'ici le T3.',
          'Augmenter la notoriété de la marque : Améliorer la notoriété de la marque de 25 % mesurée par l\'engagement sur les réseaux sociaux grâce à une série de sessions de formation en marketing numérique ciblé pour l\'équipe marketing au cours du prochain trimestre.',
          'Améliorer les compétences en leadership : Développer les compétences en leadership de 20 managers de niveau intermédiaire en les inscrivant à un programme de formation complet en leadership d\'ici la fin de l\'exercice.',
          'Augmenter la rétention des employés : Réduire le taux de rotation annuel des employés de 5 % grâce à de meilleures pratiques de gestion et à des cours de développement du leadership au cours des 12 prochains mois.',
          'Améliorer les délais de livraison des projets : Réduire les délais de livraison des projets de 20 % dans les 9 prochains mois grâce à une formation avancée en gestion de projet pour tous les chefs de projet.',
          'Augmenter l\'efficacité de la production : Réaliser une augmentation de 15 % de l\'efficacité de la production en formant le personnel aux nouvelles technologies de fabrication dans les 6 prochains mois.',
          'Améliorer la transformation numérique : Former 90 % de la main-d\'œuvre de l\'entreprise aux nouveaux outils et plateformes numériques d\'ici la fin de l\'année pour soutenir les initiatives de transformation numérique.',
          'Améliorer la santé et la sécurité : Atteindre zéro accident de travail pour l\'année à venir grâce à une formation complète sur la sécurité pour tous les nouveaux employés dans leur premier mois de travail.',
          'Augmenter l\'engagement des employés : Augmenter les scores d\'engagement des employés de 10 points grâce à des sessions de formation sur le leadership et la motivation d\'ici la fin de l\'année.',
          'Élargir la gamme de produits : Lancer 3 nouveaux produits d\'ici le T4, en préparant l\'équipe de développement de produits avec des sessions de formation en gestion de l\'innovation à partir du T2.',
          'Réduire les plaintes des clients : Diminuer les plaintes des clients de 20 % dans l\'année à venir en améliorant les protocoles de service et la formation au traitement des plaintes pour les équipes de service client.',
          'Optimiser la gestion de la chaîne d\'approvisionnement : Améliorer l\'efficacité de la chaîne d\'approvisionnement de 15 % dans les 6 prochains mois grâce à une formation spécialisée en logistique de la chaîne d\'approvisionnement pour les membres de l\'équipe.',
          'Renforcer les mesures de cybersécurité : S\'assurer que 100 % du personnel informatique est formé aux dernières pratiques et réponses en matière de cybersécurité d\'ici la fin du T3 pour atténuer les risques.',
          'Améliorer les rapports financiers : Atteindre une précision de 100 % dans les rapports financiers en formant l\'équipe financière aux nouveaux logiciels et normes de conformité au cours du prochain trimestre.',
          'Maximiser l\'efficacité informatique : Augmenter la disponibilité des systèmes informatiques à 99,9 % en fournissant une formation technique continue au personnel informatique à partir du mois prochain.',
          'Développer la réflexion stratégique : Cultiver la réflexion stratégique à travers l\'organisation en organisant des ateliers pour tous les cadres supérieurs au cours des 6 prochains mois.'
        ],
        averageAgeTitle: 'Âge moyen',
        averageAgeLabel: 'Âge moyen',
        averageAgeExplanation: 'Quel est l\'âge moyen des apprenants ?',
        averageAgeHint: 'Si votre équipe a entre 20 et 50 ans, 35 est la réponse.',
        educationalBackgroundTitle: 'Niveau d\'études',
        educationalBackgroundExplanation: 'Quel est le niveau d\'études des apprenants ? Vous pouvez écrire quelque chose, par exemple, "Adultes travaillant dans le secteur de la santé sans connaissance préalable des soins médicaux d\'urgence."',
        educationalBackgroundLabel: 'Niveau d\'études',
        educationalBackgroundHint: 'Exemple : Principalement des spécialistes de niveau master travaillant sur des études de marché.',
        learningGoalsTitle: 'Objectifs d\'apprentissage',
        learningGoalsExplanation: 'Assurez-vous que les objectifs d\'apprentissage sont spécifiques, mesurables et alignés sur les objectifs commerciaux.',
        learningGoalsLabel: 'Objectifs d\'apprentissage',
        learningGoalsHint: 'Exemple : Les apprenants seront capables d\'appliquer des techniques de premiers secours de base.',
        acquiredAbilitiesTitle: 'Compétences acquises',
        acquiredAbilitiesExplanation: 'Les compétences acquises doivent être axées sur l\'action et indiquer clairement ce que les apprenants seront capables de faire',
        acquiredAbilitiesLabel: 'Compétences acquises',
        acquiredAbilitiesHint: 'Les apprenants seront capables de pratiquer la RCP correctement, d\'identifier les signes d\'une crise cardiaque et d\'utiliser un DAE.',
        timeCommitmentHoursTitle: 'Engagement de temps (en heures totales)',
        timeCommitmentHoursExplanation: 'Considérez l\'intensité et le rythme du cours en fonction de la disponibilité des apprenants.',
        timeCommitmentHoursLabel: 'Engagement de temps',
        timeCommitmentHoursHint: 'Exemple : si les apprenants ont 3 heures par semaine pendant 4 semaines, cela fait 12.',
        pdfTitle: 'Enrichir le contenu du cours avec un PDF',
        pdfExplanation: 'Si vous avez déjà un PDF avec un contenu spécifique pour ce cours, vous pouvez le télécharger ici.'
      },
      info: {
        step1: 'Dans cette section, choisissez la couverture du cours, donnez un titre à votre cours, et cochez la case du modèle si ce cours sera un modèle pour d\'autres cours. ' +
          '<span class="font-weight-bold">Tous ces paramètres peuvent être modifiés par la suite.</span>',
        step2: 'Dans cette section, donnez une belle description à votre cours. Une liste d\'objectifs d\'apprentissage peut être une bonne description d\'un cours. ' +
          'Utilisez l\'éditeur riche pour mettre en évidence les informations importantes, créer des listes, ou ajouter des couleurs. ' +
          '<strong>La description du cours peut également être modifiée par la suite.</strong>',
        step3: 'Utilisez cette section pour ajouter des étiquettes au cours. Vous pouvez choisir parmi les étiquettes existantes ou en créer de nouvelles. <strong>Les étiquettes du cours peuvent être ajoutées et/ou modifiées par la suite.</srong>',
        step4: 'Veuillez spécifier la durée du cours en minutes. Par exemple, s\'il dure 10 minutes, c\'est 10 minutes, s\'il dure 2 heures, c\'est 120 minutes, etc. <strong>Les paramètres de durée du cours peuvent être ajoutés et modifiés par la suite.</strong>',
        step5: 'Utilisez cette section pour spécifier si ce cours sera certifiable ou non. Vous pouvez également spécifier le taux de réussite minimum, en pourcentage de 0 à 100. ' +
          '<strong>Ces paramètres peuvent être spécifiés et modifiés par la suite.</strong>',
        certificateScormExplanation: 'Utilisez cette section pour spécifier si ce cours sera certifiable ou non. ' +
          '<strong>Ces paramètres peuvent être spécifiés et modifiés par la suite.</strong>',
        step6: 'L\'apprentissage social est un excellent outil de motivation ! Cochez la case pour activer le forum Disqus après chaque leçon du cours. ' +
          '<strong>Cette option peut être activée et désactivée à tout moment par la suite.</strong>',
        step7: '',
        step8: 'Utilisez cette section pour spécifier le nombre de modules du cours, les leçons par module, et les sections par leçon. ' +
          '<strong>Ce n\'est pas une décision finale, après la création du cours, vous pouvez ajouter ou supprimer des modules, des leçons, et des sections.</strong>',
        anonymousAllowedExplanation: 'Activez ceci pour permettre au cours d\'être vu anonymement sans authentification. ' +
          'Attention toutefois, les tests et les certificats n\'auront pas de sens dans ce type de cours.',
        preEnrollAllowedExplanation: 'Décochez pour interdire aux apprenants de s\'inscrire avant le début du cours',
        externalUrl: 'Collez l\'URL externe que la carte de cours pointera',
        paidCourse: {
          amount: 'Montant',
          currency: 'Devise',
          paymentType: 'Type de paiement',
          amountShouldBeAboveZero: 'Le montant ne peut pas être zéro',
          paymentTypes: {
            STRIPE: 'Stripe',
            LIQPAY: 'LiqPay',
            MONOBANK: 'Monobank',
            REVOLUT: 'Revolut'
          }
        },
        availableFromTo: 'Choisissez la date et l\'heure de disponibilité du cours. ' +
          'Notez que les utilisateurs ne pourront pas assister au cours avant la date de début ou après la date de fin. ' +
          '<strong>Il est possible de modifier ces paramètres à tout moment.</strong>',
        sequentialLearning: 'Activez cette option si un apprenant ne peut passer à une leçon suivante qu\'après avoir terminé la précédente.',
        oneTimeEnrollment: 'Cochez cette option pour empêcher un apprenant de s\'inscrire plusieurs fois au cours.',
        paidCourseInfo: 'Configurez les informations de paiement. Il n\'est pas possible de changer le prestataire de paiement à l\'avenir, cependant, il est possible de changer le montant et la devise. ' +
          '<strong>Assurez-vous que l\'intégration du prestataire de services de paiement correspondant est configurée dans la section <em>Admin -> Intégrations</em></strong>',
        voucherActivated: 'Cochez l\'option si vous avez configuré des codes d\'inscription pour ce cours et que le cours nécessite les codes d\'inscription pour accéder.',
        customFields: 'Vous pouvez définir ici les champs personnalisés du cours <strong>(Configuration avancée)</strong>',
        scormUpload: 'Téléchargez le fichier SCORM ici. Vous pouvez le changer à tout moment dans le futur.',
        ordering: 'Spécifiez la position souhaitée du cours dans la liste. Si vous souhaitez que ce cours soit affiché à une position spécifique, vous pouvez définir la valeur d\'ordre en conséquence. Par exemple, si vous souhaitez qu\'un cours particulier soit listé en premier, définissez l\'ordre sur <strong>1</strong>.' +
          '<br><br><em>Pour ignorer l\'ordre et utiliser le tri par défaut, définissez la valeur d\'ordre sur <strong>1000</strong>. Le cours sera alors trié en fonction de sa date de création ou de mise à jour.</em>',
        points: 'Définir les points du cours (ces points seront additionnés et affichés dans la fiche de l\'apprenant).',
        preEnrollDescription: 'Définir le HTML de la popup de pré-inscription qui apparaîtra à chaque étudiant avant qu\'il ne soit inscrit au cours.',
        preApproveEnrollmentDescription: 'Choisissez cette option si l\'approbation de l\'inscription est requise. ' +
          'Les apprenants essaieront alors de s\'inscrire aux cours mais ne pourront pas commencer les cours tant que les administrateurs n\'auront pas approuvé leur inscription.',
        aggregated: {
          metadata: 'Définir toutes les métadonnées du cours ici : titre du cours, image de couverture, description, durée, étiquettes. Définir l\'ordre du cours et les champs personnalisés si nécessaire.',
          socialLearning: 'Apprentissage social - définir si le forum de discussion est disponible après chaque leçon.',
          achievements: 'Définir les réalisations du cours – cadres d\'avatar, points du cours, certificat.',
          courseAccess: 'Définir les paramètres liés à la disponibilité du cours : date de début et de fin, s\'il est disponible pour une visualisation anonyme ou par des codes d\'inscription.',
          recurring: 'Définir les paramètres si le cours doit être récurrent : les utilisateurs inscrits doivent répéter périodiquement le cours. ' +
            'Cela peut être utile pour certaines formations obligatoires comme la conformité. <strong>NOTE : s\'applique uniquement aux apprenants inscrits en groupe.</strong>'
        },
        ai: {
          topicAndLocale: 'Indiquez un sujet de cours et la langue du contenu généré.',
          context: 'Vous pouvez affiner votre cours pour les besoins de votre entreprise, les objectifs des apprenants, et d\'autres spécificités.',
          specification: 'Fournir des titres spécifiques pour les modules',
          numberOfThings: 'Indiquez le nombre de modules, de sujets, et d\'options dans chaque question d\'évaluation.'
        },
        featuredDescription: 'Marquez ce cours comme étant en vedette. Il apparaîtra dans la grande section du carrousel de la liste des cours.'
      },
      popup: {
        title: 'Titre',
        subtitle: 'Sous-titre',
        content: 'Contenu',
        action: 'Action'
      }
    },
    newCourse: {
      courseName: 'Titre du cours',
      courseDescription: 'Description du cours',
      createNewCourse: 'Créer un nouveau cours',
      newExternalResource: 'Créer une nouvelle ressource externe',
      newAiCourse: 'Créer un nouveau cours avec l\'aide de l\'IA',
      newScormCourse: 'Créer un nouveau cours SCORM',
      exploreAllWaysToCreateNewCourse: 'Explorer toutes les façons de créer un cours',
      newUmbrellaCourse: 'Créer un nouveau cours OMBRELLE',
      importCourse: 'Importer un cours en JSON',
      downloadJSON: 'Télécharger le cours en format JSON',
      uploadJSON: 'Télécharger JSON',
      createUmbrellaCourse: 'Créer un cours OMBRELLE',
      createUmbrellaCourseExplanation: 'Créer un cours qui affichera un arbre de décision pour un apprenant.',
      createUmbrellaCourseCaption: 'Un apprenant répondrait à la question et serait conduit au bon cours après avoir répondu.',
      uploadJSONExplanation: 'Télécharger un json d\'un cours précédemment exporté',
      uploadJSONCaption: 'La meilleure façon de cloner des cours entre espaces de travail !',
      usingWizard: 'Créer un cours en utilisant notre assistant intelligent',
      basedOnBloom: 'basé sur la planification inversée et la taxonomie de Bloom',
      comingSoon: '(bientôt disponible)',
      usingBasicStructure: 'Créer un cours avec une structure de base',
      usingExternalResource: 'Créer un nouveau lien vers une ressource externe',
      createExternalCourse: 'Créer un lien vers une ressource externe',
      createScormCourse: 'Importer un paquet de cours SCORM',
      lookingLikeCourseCard: 'Il ressemblera à une carte de cours normale',
      scormCourseDescription: 'Créer un cours et télécharger votre paquet SCORM',
      scormCourseCaption: '(Ou remplacer l\'URL du fichier SCORM)',
      pointingToExternalResource: 'et il pointera vers une ressource externe',
      toBeLaterFilledWithContent: 'À remplir plus tard avec du contenu',
      iKnowWhatDoing: '(Je sais ce que je fais !)',
      passingRateCantBeMore: 'Le taux de réussite ne peut pas être supérieur à 100',
      passingRateCantBeLess: 'Le taux de réussite ne peut pas être inférieur à 0',
      courseBeingCreated: 'Le cours {name} est en cours de création...',
      courseBeingUpdated: 'Le cours {name} est en cours de mise à jour...',
      usingAiTitle: 'Créer une structure de cours avec l\'IA 🪄',
      aiCourseBeingGenerated: 'Génération de votre cours...\n' +
        'Vous pouvez attendre qu\'il soit prêt, ou le vérifier plus tard sous "Gérer les cours". Vous pouvez fermer cette fenêtre maintenant.',
      usingAiDescription: 'Générer une structure de cours en tapant des instructions dans une invite.',
      usingAiCaption: '(Je me sens chanceux !)',
      beforeCreating: 'Envisagez de télécharger ' +
        '<strong><a href="https://assets.theworkademy.com/shared/WORKADEMY_CREATE_COURSE_FROM_SCRATCH.pdf" target="_blank">ce PDF</a></strong> ' +
        'avant de commencer à créer des cours. ' +
        'Il vous aidera avec la structure du cours'
    },
    editExistingCourses: 'Gérer les cours existants',
    editExistingLearningPaths: 'Gérer les parcours existants',
    editCourseInfo: 'Modifier les informations du cours',
    enrollUsers: 'Inscrire des utilisateurs',
    checkProgress: 'Vérifier les progrès des utilisateurs',
    durationInMinutes: 'Durée en minutes',
    availabilityDates: 'Dates de disponibilité du cours',
    manageCoursesTitle: 'Gérer les cours',
    manageLearningPathsTitle: 'Gérer les parcours',
    templateCoursesTitle: 'Modèles',
    forumEnabled: 'Forum activé (chaque leçon a un forum de discussion attaché)',
    voucherActivated: 'Inscription par bon activé (vous devez configurer des campagnes dans la section de gestion des campagnes)',
    certificateEnabled: 'Certificat activé',
    sharableCertificate: 'Le certificat peut être ajouté à LinkedIn',
    publicCourse: 'Cours public (disponible pour le monde extérieur) – en cours',
    sequentialProgress: 'Apprentissage séquentiel (chaque module s\'ouvre après avoir terminé le précédent)',
    oneTimeEnrollOnly: 'Inscription unique (impossible de répéter le cours)',
    quiz: {
      questionText: 'Texte de la question',
      questionSettings: 'Paramètres de la question',
      questionAnswers: 'Réponses à la question',
      questionExplanation: 'Explication de la question',
      limitAttempts: 'Limiter les tentatives',
      numberAttempts: 'Nombre de tentatives',
      addTimeLimit: 'Ajouter une limite de temps',
      timeLimitseconds: 'Limite de temps (secondes)',
      editAnswer: 'Modifier la réponse',
      editAnswerLabel: 'Modifier la réponse',
      explanation: 'Explication',
      editQuestion: 'Modifier la question',
      addNewQuestion: 'Ajouter une nouvelle question au quiz',
      questionType: 'Type de question',
      hasCorrectAnswer: 'A une réponse correcte',
      itemLabel: 'Élément',
      categoryLabel: 'Catégorie',
      doesntCountForEvaluation: 'Ne compte pas pour l\'évaluation',
      mandatory: 'Marquer comme obligatoire',
      mandatoryExplanation: 'L\'apprenant doit répondre à cette question pour pouvoir continuer (fonctionne avec l\'apprentissage séquentiel).',
      openAnswer: {
        evaluateOpenAnswerOf: 'Évaluer la réponse ouverte de {user}',
        answer: 'Réponse',
        usersFile: 'Fichier de l\'utilisateur',
        downloadFile: 'Télécharger le fichier de l\'utilisateur',
        noFile: '{user} n\'a pas téléchargé de fichier',
        markAsIncorrect: 'Marquer comme incorrect',
        markAsCorrect: 'Marquer comme correct',
        openInNew: 'Ouvrir dans une popup',
        questionTitle: 'Question',
        feedbackTitle: 'Retour',
        changeFeedback: 'Changer le retour',
        provideFeedback: 'Fournir un retour',
        addFeedback: 'Ajouter un retour sans noter',
        gradeAnswerButtonCaption: 'Lorsque vous notez la réponse, le retour (s\'il est fourni) sera également envoyé'
      }
    },
    editingMode: {
      editCourse: {
        editCourseTitle: 'Modifier le cours {name}'
      },
      inlineEditorPlaceholder: 'Tapez le texte...',
      emojiPicker: {
        addEmoji: 'Ajouter un emoji',
        unset: 'Désélectionner',
        change: 'Changer',
        pickerTitle: 'Choisissez votre emoji...',
        search: 'Recherche',
        notfound: 'Aucun emoji trouvé',
        categories: {
          search: 'Résultats de recherche',
          recent: 'Utilisés fréquemment',
          smileys: 'Smileys & émoticône',
          people: 'Personnes & corps',
          nature: 'Animaux & nature',
          foods: 'Nourriture & boisson',
          activity: 'Activité',
          places: 'Voyages & lieux',
          objects: 'Objets',
          symbols: 'Symboles',
          flags: 'Drapeaux',
          custom: 'Personnalisé'
        }
      },
      placeholder: {
        courseTitle: 'Tapez le titre du cours...',
        courseDescription: 'Tapez la description du cours...',
        moduleTitle: 'Tapez le titre du module...',
        moduleDescription: 'Tapez la description du module...',
        lectureTitle: 'Tapez le titre de la leçon...',
        lectureDescription: 'Tapez la description de la leçon...',
        sectionTitle: 'Tapez le titre de la section...',
        sectionText: 'Tapez le texte de la section...',
        questionText: 'Tapez la question...',
        answerText: 'Tapez la réponse...',
        bubbleText: 'Tapez le texte de la bulle...',
        optionTitle: 'Tapez le titre de l\'option...',
        accordionTitle: 'Tapez le titre de l\'accordéon...',
        accordionText: 'Tapez le texte...'
      },
      questionBank: {
        bankSwitch: 'Banque de questions',
        title: 'Créer une banque de questions pour cette leçon / ce module et utiliser un nombre aléatoire de questions à montrer aux apprenants.',
        weightLabel: 'Combien de questions de poids {weight} utiliser dans la banque ?',
        weightHint: 'Maximum {max} autorisé',
        usedText: 'Utilisé <span class="font-weight-bold ">{numberOfUsedQuestions}</span> sur <span class="font-weight-bold ">{totalNumberOfQuestions}</span> nombre total de questions'
      },
      lecture: {
        editLecture: 'Modifier la leçon',
        topOfTheLectureHeader: 'Début du cours (Image de couverture, Vidéo, Typeform, SCORM ou Cours en direct)',
        editLectureHeader: 'Début du cours',
        noHeader: 'pas d\'en-tête',
        editHeaderCover: 'Image de couverture',
        addHeaderCover: 'Image de couverture',
        editVideoSource: 'Source de la vidéo',
        addVideoSource: 'Source de la vidéo',
        editLiveLecture: 'Leçon en direct',
        editTypeformLecture: 'Typeform',
        addTypeformLecture: 'Typeform',
        editLoomLecture: 'Modifier Loom',
        addLoomLecture: 'Ajouter Loom',
        editScormLecture: 'Modifier le paquet SCORM',
        addScormLecture: 'Ajouter le paquet SCORM',
        enableLoom: 'Configurer Loom dans admin/intégrations',
        addLiveLecture: 'Leçon en direct',
        pasteLiveLink: 'Collez le lien vers Zoom ou toute autre vidéoconférence',
        liveStartTime: 'Heure de début',
        liveFinishTime: 'Heure de fin',
        onClearHeader: 'Effacer l\'en-tête',
        lectureSettings: 'Paramètres de la leçon',
        navigateLectureWith: 'Naviguer dans la leçon avec :',
        navigateWithButton: 'Bouton Continuer (chaque section suivante de la leçon s\'ouvre sur un clic sur le bouton "Continuer")',
        navigateWithScroll: 'Défilement (toutes les sections sont ouvertes par défaut)',
        recordLoomVideo: 'Enregistrer une vidéo Loom',
        addLoomVideoUrl: 'Modifier l\'URL de la vidéo Loom',
        addScormUrl: 'Modifier l\'URL du paquet SCORM',
        editPdfSectionDesc: 'Cette section permet de rendre un PDF à l\'intérieur d\'une leçon et de le télécharger.',
        editSevenTapsLecture: 'Modifier la leçon 7taps',
        addSevenTapsLecture: 'Ajouter une leçon 7taps',
        invalidPdfUrl: 'URL PDF invalide (doit avoir une extension .pdf)',
        lectureVisibility: {
          title: 'Configurer les règles de visibilité de la leçon',
          buttonText: 'Changer la visibilité de la leçon',
          dialog: {
            title: 'Règles de visibilité de la leçon',
            noRules: 'Il n\'y a pas encore de règles de visibilité définies',
            allRules: 'Afficher la leçon si elle correspond à TOUTES ces règles :',
            anyRules: 'Et correspond à TOUTES ces règles :',
            addRuleButton: 'Ajouter une règle',
            addAndRuleButton: 'Ajouter une règle AND',
            addOrRuleButton: 'Ajouter une règle OR',
            saveRulesButton: 'Enregistrer les règles',
            whenText: 'Quand',
            operators: {
              QUESTIONS: {
                EQUALS: 'est',
                NOT_EQUALS: 'n\'est pas',
                CONTAINS: 'contient',
                NOT_CONTAINS: 'ne contient pas'
              },
              GROUPS: {
                EQUALS: 'est',
                NOT_EQUALS: 'n\'est pas',
                CONTAINS: 'contient au moins un',
                NOT_CONTAINS: 'ne contient aucun'
              }
            },
            connectors: {
              AND: 'et',
              OR: 'ou'
            },
            selectAQuestion: 'Sélectionnez une question',
            selectAnAnswer: 'Sélectionnez une réponse'
          }
        }
      },
      editCourseStructure: 'Modifier la structure du cours',
      clickHereToChangeText: 'Cliquez ici pour modifier le texte',
      editCourseInfo: 'Modifier les informations du cours',
      enrollUsers: 'Inscrire des utilisateurs',
      checkProgress: 'Vérifier les progrès des utilisateurs',
      editCourseDescription: 'Modifier la description du cours',
      editLectureDescription: 'Modifier la description de la leçon',
      addNewModule: 'Ajouter un nouveau module',
      addNewLecture: 'Ajouter une nouvelle leçon au module',
      addNewSection: 'Ajouter une nouvelle section',
      addNewBranchSection: 'Ajouter une nouvelle section de branchement',
      deleteModule: 'Supprimer le module',
      editModuleDescription: 'Modifier la description du module',
      deleteLecture: 'Supprimer la leçon',
      deleteGamificationItem: 'Supprimer l\'élément de gamification',
      saveCourseBeforeEditingLecture: 'Enregistrer le cours avant de pouvoir modifier la leçon',
      addSection: 'Ajouter une nouvelle section',
      addQuestion: 'Ajouter une nouvelle question',
      addNewBubble: 'ajouter une nouvelle bulle',
      newTextBubble: 'Bulle de texte',
      newVideoBubble: 'Bulle vidéo',
      newAudioBubble: 'Bulle audio',
      newQuestionBubble: 'Bulle de question',
      changeVideoSource: 'Changer la source de la vidéo',
      changeAudioSource: 'Changer la source audio',
      editSection: 'Modifier la section',
      deleteSection: 'Supprimer la section',
      add: 'Ajouter un nouveau',
      duplicateSection: 'Dupliquer la section',
      moveUp: 'Déplacer la section vers le haut',
      moveDown: 'Déplacer la section vers le bas',
      deleteOption: 'Supprimer l\'option',
      addOption: 'Ajouter une option',
      editMediaSource: 'Modifier la source multimédia',
      changeMediaSourceLabel: 'Changer la source multimédia de la leçon',
      addVideoLabel: 'Collez le lien YouTube, Vimeo, Wistia, Loom ou GoogleDrive',
      addVideoHint: 'Alternativement, cliquez sur "copier l\'URL" sur l\'élément vidéo dans la bibliothèque et collez-le ici.',
      videoSubtitles: 'Sous-titres vidéo',
      addVideoSubtitles: 'Ajouter des sous-titres',
      editVideoSubtitles: 'Modifier les sous-titres',
      addVideoSubtitlesTrack: 'Ajouter une piste de sous-titres',
      videoSubtitlesLocale: 'Langue',
      videoPreview: 'L\'aperçu de la vidéo apparaîtra ici',
      addTypeformUrl: 'Collez votre URL typeform',
      addSevenTapsUrl: 'Collez votre URL de cours 7Taps',
      addTypeformId: 'Collez votre ID typeform',
      changeMediaSourceHint: 'La source multimédia peut être un chemin vers une image au format png ou jpg/jpeg. ' +
        'Elle peut également être un chemin vers une vidéo YouTube sous forme de https://www.youtube.com/embed/qeUGOsW8ewk ' +
        'ou un chemin vers une vidéo Vimeo sous forme de https://player.vimeo.com/video/334294316',
      mediaSource: {
        clickToCreateVideoOrCover: 'Cliquez ici pour créer une vidéo de leçon ou ajouter une image de couverture',
        clickHereToCreateLiveLecture: 'Cliquez ici pour créer une leçon en direct Zoom ou Google Meets (bientôt disponible)',
        clickToEditVideoSrc: 'Cliquez ici pour modifier une source vidéo ou la remplacer par une image de couverture',
        clickToEditCover: 'Cliquez ici pour remplacer une image de couverture ou ajouter une source vidéo',
        canBeImage: 'La source multimédia peut être un chemin vers une image au format PNG ou JPG.',
        canBeYoutube: 'La source multimédia peut être un chemin vers une vidéo YouTube, par exemple https://www.youtube.com/embed/qeUGOsW8ewk',
        canBeVimeo: 'La source multimédia peut être un chemin vers une vidéo Vimeo, par exemple https://player.vimeo.com/video/334294316',
        canBeTypeform: 'La source multimédia peut être un chemin vers un sondage Typeform, par exemple https://workademy.typeform.com/to/j2OAMk',
        dropZoomInvite: 'Déposez une invitation à votre leçon Zoom',
        addMediaSource: 'Ajouter une source multimédia (image, vidéo ou sondage)',
        createZoomLecture: 'Créer une leçon Zoom'
      },
      editQuestion: 'Modifier la question',
      addNewQuestion: 'Ajouter une nouvelle question au quiz',
      questionType: 'Type de question',
      deleteQuestion: 'Supprimer la question',
      deleteQuestionDialogTitle: 'Zone de danger !',
      deleteQuestionDialogText: ' La suppression d\'une question peut entraîner une erreur en raison du travail en cours des étudiants. ' +
        'Envisagez d\'enregistrer le cours avant d\'essayer cette option.',
      newModuleName: 'Nom du module',
      newModuleDescription: 'Description du module',
      newLectureName: 'Nom de la leçon',
      newLectureDescription: 'Description de la leçon',
      resetBtn: 'Réinitialiser',
      resetBtnTooltip: 'Réinitialiser vos modifications sur le cours.',
      saveBtn: 'Enregistrer',
      saveOnlyBtn: 'Enregistrer uniquement',
      saveAndNotifyBtn: 'Enregistrer et notifier les apprenants',
      saveAndNotifyDialog: {
        title: 'Enregistrer et notifier les apprenants',
        subtitle: 'Enregistrez le cours et informez les apprenants des mises à jour récentes.',
        notifyEveryone: 'Notifier tout le monde',
        youAreAboutToNotify: 'Aucun apprenant ne correspond aux critères de notification sélectionnés. | Vous êtes sur le point de notifier un apprenant. Cliquez sur "Notifier" pour continuer. | Vous êtes sur le point de notifier {n} apprenants. Êtes-vous sûr de vouloir continuer ?',
        youAreAboutToNotifyMany: 'Aucun apprenant ne correspond aux critères de notification sélectionnés. | Vous êtes sur le point de notifier un apprenant. Cliquez sur "Notifier" pour continuer. | Vous êtes sur le point de notifier {n} apprenants. Notifier plus de 50 personnes peut prendre jusqu\'à 2 heures, car les messages sont envoyés dans le cadre d\'une campagne par e-mail. Êtes-vous sûr de vouloir continuer ?',
        notifyActive: 'Notifier les apprenants actifs',
        notifyGroup: 'Notifier un groupe',
        message: 'Le cours {courseName} a été mis à jour. Veuillez consulter le cours pour plus de détails.',
        messageTitle: 'Envoyer une notification',
        messageLabel: 'Modifiez le message par défaut si nécessaire.',
        notifyAGroup: 'Notifier un groupe spécifique',
        activeOrEveryoneTitle: 'Choisissez si vous souhaitez notifier uniquement les apprenants actifs ou tous les apprenants, y compris ceux qui ont abandonné ou terminé le cours.',
        activeOrEveryone: {
          active: 'Uniquement les apprenants actifs (Recommandé)',
          everyone: 'Tous les apprenants'
        },
        toast: {
          success: 'Les apprenants ont été notifiés avec succès des mises à jour.',
          error: 'Une erreur est survenue lors de la notification des apprenants : {err}.'
        }
      },
      saveBtnTooltip: 'Il y a des modifications non enregistrées. Enregistrez-les ou réinitialisez-les.',
      publishBtn: 'Publier le cours',
      publishBtnTooltip: 'publier ou dépublier votre cours pour le rendre disponible ou non dans la liste des cours ou pour le référencement (pour les espaces de travail publics).',
      unpublishBtn: 'Dépublier le cours',
      exportJSON: 'Exporter JSON',
      importJSON: 'Importer JSON',
      pasteJSON: 'Coller le JSON du cours',
      errorReadingJSON: 'Erreur de lecture du JSON',
      copyCourseUrl: 'Copier l\'URL du cours',
      courseUrlCopied: 'URL du cours copiée',
      sections: {
        newTextSection: 'Texte enrichi',
        newQuestionSection: 'Question',
        newDialogSection: 'Type dialogue',
        newPDFSection: 'PDF',
        newButtonSection: 'Bouton',
        newImageTextSection: 'Image+Texte',
        newVideoTextSection: 'Vidéo+Texte',
        newAudioTextSection: 'Audio+Texte',
        newAccordionSection: 'Accordéon',
        newBranchSection: 'Ramification',
        newImportantSection: 'Important',
        newAdditionalInfoSection: 'Informations supplémentaires',
        newExamplesSection: 'Exemples',
        newGridSection: 'Grille',
        newTextSectionDescription: 'Cette section est parfaite pour tout type de texte que vous souhaitez ajouter à votre leçon. ' +
          'Vous pouvez l\'enrichir avec des formats, des listes à puces, des images, des vidéos, et tout type de HTML que vous aimez.',
        newQuestionSectionDescription: 'Cette section sert chaque fois que vous souhaitez ajouter une question à choix unique ou multiple dans votre leçon.',
        newDialogSectionDescription: 'Cette section sert à ajouter un petit morceau de contenu de type chat, avec un avatar et plusieurs bulles. ' +
          'Ces bulles peuvent être du texte, de la vidéo, de l\'image, ou même des bulles de question !',
        newPDFSectionDescription: 'Cette section permet de rendre un PDF à l\'intérieur d\'une leçon et de le télécharger.',
        newButtonSectionDescription: 'Cette section permet de rendre un bouton à l\'intérieur d\'une leçon pointant vers un lien interne ou externe.',
        newImageTextSectionDescription: 'Cette section est un moyen facile d\'ajouter une image avec du texte. Vous pouvez jouer avec la taille de l\'image ou du texte et changer leurs côtés.',
        newVideoTextSectionDescription: 'Cette section est un moyen facile d\'ajouter une vidéo YouTube ou Vimeo avec du texte. Vous pouvez jouer avec la taille de la vidéo ou du texte et changer leurs côtés.',
        newAudioTextSectionDescription: 'Cette section est un moyen facile dv\'ajouter un audio avec du texte. Vous pouvez jouer avec la taille de l\'affichage de l\'audio ou du texte et changer leurs côtés.',
        newAccordionSectionDescription: 'Cette section est un moyen parfait d\'ajouter des informations optionnelles pour ceux qui veulent en savoir plus en détail. ' +
          'Les informations seront cachées à l\'intérieur des options extensibles.',
        newBranchSectionDescription: 'Donnez un certain contrôle à vos apprenants en leur fournissant plusieurs choix après lesquels le cours de la leçon changera. ' +
          'Actuellement uniquement disponible pour les sections de type dialogue',
        newImportantSectionDescription: 'Mettez en évidence des informations importantes de votre leçon',
        newAdditionalInfoSectionDescription: 'Mettez en évidence des informations supplémentaires de votre leçon',
        newExamplesSectionDescription: 'Mettez en évidence des exemples dans votre leçon',
        newGridSectionDescription: 'Créer une grille avec autant de lignes et de colonnes que vous avez besoin et la remplir avec des images et/ou du texte',
        newTypeFormSectionDescription: 'Créer une section TypeForm intégrée',
        newTableSection: 'Tableau',
        newTableSectionDescription: 'Créez un tableau avec le nombre exact de lignes et de colonnes dont vous avez besoin',
        typeForm: {
          pasteUrl: 'Collez l’URL ici'
        },
        accordion: {
          accordionTitle: 'Titre de l\'accordéon',
          enterTitle: 'Entrez un titre pour cette section d\'accordéon',
          addAccordionSection: 'Ajouter une section d\'accordéon'
        },
        grid: {
          columnsLabel: 'Nombre de colonnes',
          rowsLabel: 'Nombre de lignes',
          maxHeightLabel: 'Hauteur maximale',
          text: 'Texte',
          image: 'Image',
          imageCaption: 'Légende de l\'image'
        },
        table: {
          sortable: 'Triable',
          fixFirstColumn: 'Figer la première colonne'
        },
        branch: {
          branchOptionName: 'Nom de l\'option',
          branchingOptionsSectionsTitle: 'sections d\'options de ramification',
          addSection: 'ajouter une section',
          deleteOption: 'supprimer l\'option',
          saveOption: 'enregistrer l\'option',
          addBranchingOption: 'Ajouter une option de ramification',
          option1Title: 'Option 1',
          option2Title: 'Option 2',
          optionTitle: 'Titre de l\'option'
        },
        dialog: {
          configureDialogSection: 'Configurer la section de dialogue',
          leftSide: 'Côté gauche de la conversation',
          rightSide: 'Côté droit de la conversation',
          avatarLink: 'Lien de l\'avatar',
          avatarName: 'Nom de l\'avatar',
          userPictureAvatar: 'Avatar de l\'utilisateur'
        },
        examples: {
          branch: {
            option1: 'Option 1',
            option2: 'Option 2',
            option3: 'Option 3',
            text: 'Merci d\'avoir choisi la deuxième option'
          },
          dialog: {
            content1: 'Bonjour',
            content2: 'Aujourd\'hui, nous allons parler de la météo',
            content3: 'Merci de nous avoir rejoint'
          }
        },
        buttonSection: {
          buttonText: 'Texte du bouton',
          buttonLink: 'Lien du bouton',
          buttonClass: 'Classe CSS du bouton',
          text: 'Ce texte apparaîtra avant le bouton. Supprimez-le complètement s\'il n\'est pas nécessaire',
          textExample: 'Cliquez sur le bouton pour accéder aux <strong>paramètres de l\'utilisateur</strong>',
          buttonTextExample: 'Allons-y !'
        },
        importantLabel: 'Important',
        additionalInfoLabel: 'Informations supplémentaires',
        examplesLabel: 'Exemples'
      },
      tags: {
        searchTags: 'Rechercher des tags',
        addTagsLabel: 'Ajouter des étiquettes de filtrage au cours',
        noResults: 'Aucun résultat correspondant à "<strong>{search}</strong>". Appuyez sur <kbd>entrer</kbd> pour créer une nouvelle'
      },
      lectureInClipboard: 'La leçon {lecture} est dans le presse-papiers. Vous pouvez maintenant la coller après n\'importe quelle leçon.',
      moduleInClipboard: 'Le module {module} est dans le presse-papiers. Vous pouvez maintenant le coller après n\'importe quel module.',
      sectionInClipboard: 'La section du type {section} est dans le presse-papiers. Vous pouvez maintenant la coller après n\'importe quelle section.',
      copyModule: 'Copier le module',
      pasteModule: 'Coller le module',
      copyLecture: 'Copier la leçon',
      pasteLecture: 'Coller la leçon',
      createCourseOfLecture: 'Créer un cours public d\'une seule page',
      copyQuestion: 'Copier la question',
      pasteQuestion: 'Coller la question',
      copySection: 'Copier la section',
      pasteSection: 'Coller la section',
      quiz: {
        bankSwitch: 'Banque de questions',
        changeQuestion: 'Changer le texte de la question ici'
      },
      umbrella: {
        itemTitle: 'Écrire un titre (question) pour la décision ici',
        addDecisionOption: 'Ajouter une option de décision',
        deleteOption: 'Supprimer l\'option de décision',
        optionTitle: 'Texte de l\'option',
        umbrellaCourse: 'Cours {courseName}',
        umbrellaOptions: '{optionsNumber} options',
        backButton: 'Retour',
        nextButton: 'Suivant',
        decisionOption: 'Option de décision',
        courseOption: 'Option de cours'
      }
    },
    gamification: {
      typeLabel: 'Type',
      nameLabel: 'Nom',
      descriptionLabel: 'Description',
      editGamification: 'Modifier les réalisations',
      addGamificationItem: 'Ajouter un élément de réalisation',
      saveGamificationItems: 'Enregistrer les réalisations',
      changeName: 'Nom de la réalisation',
      changeDescription: 'Description de la réalisation',
      saveItems: 'Enregistrer les éléments de réalisation',
      hideEditing: 'Masquer le mode édition',
      editItem: 'modifier l\'élément',
      questionAnswerRateLabel: 'Taux de réponses aux questions',
      chooseCompletedLectures: 'Choisir les leçons à compléter',
      chooseAnsweredQuestions: 'Choisir les questions à répondre',
      types: {
        QUESTIONS_ANSWERED: 'Questions répondues',
        LECTURES_COMPLETED: 'Leçons terminées',
        QUESTIONS_ANSWERED_RATE: 'Taux de réponses aux questions'
      },
      achievementTypes: {
        FRAME: 'Cadre'
      },
      collectAchievements: 'Commencez à collectionner les badges : progressez dans vos cours et répondez aux questions'
    },
    progress: {
      courseNotStarted: 'Cours pas encore commencé',
      courseInProgress: 'Cours en cours',
      courseFinished: 'Cours terminé',
      coursesTitle: 'Cours',
      learningPathsTitle: 'Parcours',
      learningPathCourses: 'Cours du parcours d\'apprentissage',
      coursesTitleCoursesName: 'Cours – {courseName}',
      learningPathTitleCoursesName: 'Parcours - {learningPathName}',
      coursesTitleCourseUserName: 'Cours – {courseName} – {userName}',
      learningPathTitleUserName: 'Parcours – {learningPathName} – {userName}',
      clickOnLearningPathStep: 'Cliquez sur une carte de cours pour vérifier les progrès de {name} sur un cours',
      learningPathNoSteps: 'Ce parcours ne contient pas d\'étapes',
      cantFetchDataLearningPathStep: 'Impossible de récupérer les données pour {stepName}. Il est probable que l\'étape ait été réalisée par l\'utilisateur {userName}',
      startedOn: 'Commencé le {startedOn}',
      finishedOn: 'Terminé le {finishedOn}',
      progress: 'Progression : {progress}%',
      startedOnTitle: 'Commencé le',
      finishedOnTitle: 'Terminé le',
      completedInTitle: 'Terminé en',
      progressTitle: 'Progression du Quiz',
      lectureProgressTitle: 'Progression des Cours',
      courseProgressTitle: 'Progression des cours',
      lastActivityTitle: 'Dernière activité',
      statusTitle: 'Statut',
      certificateTitle: 'Certificat',
      certificate: 'certificat',
      nameTitle: 'Nom',
      emailTitle: 'Email',
      noCourses: 'Vous n\'avez pas encore créé de cours',
      noCoursesWithSearch: 'Aucun cours trouvé avec ces critères de recherche',
      createCourses: 'Créer des cours',
      createLearningPaths: 'Créer des parcours',
      progressOfUser: 'Progression de {userName}',
      answeredQuestions: 'Répondu <strong>{correct} / {total}</strong>',
      lecturesSeen: 'Conférences vues: <strong>{seen} / {total}</strong>',
      seen: 'Vu',
      lectureMarkedAsSeen: 'Marqué comme vu',
      lectureIsNotMarkedAsSeen: 'Pas encore vu',
      wrongAttempts: '{wrong} / {total} tentatives incorrectes',
      searchCoursePlaceholder: 'nom, description, étiquettes, tout !',
      searchCourseLabel: 'Rechercher des cours',
      usersPerPage: 'Apprenants par page',
      downloadCSV: 'Télécharger CSV',
      download: 'Télécharger le rapport',
      downloadForGroup: 'Télécharger le rapport de groupe',
      downloadFull: 'Télécharger le rapport complet',
      totalStudents: 'Total des apprenants inscrits : {total}',
      searchUserLabel: 'Rechercher un utilisateur par email',
      searchUserPlaceholder: 'Email exact à rechercher',
      enrollCount: 'Pas d\'inscriptions | Une inscription | {n} inscriptions',
      inactiveCount: 'Inactif : {n}',
      abandonedCount: 'Abandonné : {n}',
      runningCount: 'Inscriptions actives : {n}',
      finishedCount: 'Terminé : {n}',
      noUsersInCourse: 'Il n\'y a aucun utilisateur inscrit à ce cours.',
      noUsersSatisfyingFilter: 'Il n\'y a aucun utilisateur répondant aux critères de recherche ou de filtre donnés',
      noUsersInLearningPath: 'Il n\'y a aucun utilisateur assigné à ce parcours.',
      userNotEnrolled: 'L\'utilisateur {name} n\'est pas inscrit à ce cours.',
      filterByUser: 'Filtrer par utilisateur',
      searchUser: 'Rechercher un utilisateur',
      totalCourses: 'Total des cours trouvés : {total}',
      totalEnrollments: 'Total des inscriptions trouvées : {total}',
      totalPendingEnrollments: 'Total des inscriptions en attente trouvées : {total}',
      approvePendingTitle: 'Approuver',
      approvePendingButton: 'Approuver',
      approvedSuccessfullyMessage: 'L\'inscription de {name} a été approuvée avec succès.',
      approvedErrorMessage: 'L\'inscription de {name} n\'a pas été approuvée en raison de l\'erreur : {err}',
      reports: {
        reportIsGenerating: 'Le rapport est en cours de génération. Veuillez patienter.',
        reportGeneratedSuccessfully: 'Rapport généré avec succès.',
        reportGeneratedWithError: 'La génération du rapport a échoué : {err}',
        csvInstructions: '<p>Pour reconnaître l\'UTF-8 dans le fichier téléchargé :</p>' +
          '<ol>' +
          '<li>Enregistrez le fichier exporté sous forme de csv</li>' +
          '<li>Ouvrez Excel</li>' +
          '<li>Importez les données en utilisant Données-->Importer des données externes --> Importer des données</li>' +
          '<li>Sélectionnez le type de fichier "csv" et parcourez votre fichier</li>' +
          '<li>Dans l\'assistant d\'importation, changez l\'origine du fichier en "65001 UTF" (ou choisissez l\'identifiant de caractère de langue correct)</li>' +
          '<li>Changez le délimiteur en virgule</li>' +
          '<li>Sélectionnez où importer et terminer</li>' +
          '<li>De cette façon, les caractères spéciaux devraient s\'afficher correctement.</li>' +
          '</ol>'
      },
      certificates: {
        userCertificateTitle: 'Certificat',
        changeCertificateData: 'Modifier les données du certificat',
        dialog: {
          title: 'Modifier les données du certificat',
          nameLabel: 'Changer le nom de l\'apprenant',
          changeButton: 'Changer',
          success: 'Données du certificat modifiées avec succès pour {name}',
          error: 'Il y a eu une erreur lors de la modification des données du certificat pour {name} : {err}'
        }
      },
      detailed: {
        done: 'Terminé',
        inProgress: 'En cours',
        notStarted: 'Non commencé',
        hidden: 'Masqué',
        locked: 'Verrouillé'
      },
      tabs: {
        detailedProgress: 'Progrès détaillé',
        enrolledUsers: 'Progression Globale',
        questionAnswersProgress: 'Réponses au Quiz',
        pendingUsers: 'Utilisateurs en attente',
        pendingGrading: 'Évaluations en attente',
        preCourseSurvey: 'Enquête avant le cours',
        postCourseSurvey: 'Enquête après le cours'
      },
      pendingGrading: {
        learnerTableTitle: 'Apprenant',
        actionsTableTitle: 'Actions',
        questionTableTitle: 'Question',
        answerTableTitle: 'Réponse',
        fileTableTitle: 'Fichier',
        noPendingGradingFound: 'Aucune réponse en attente d\'évaluation trouvée.',
        feedbackTitle: 'Retour de l\'administrateur du cours',
        feedbackFieldTitle: 'Fournir/Modifier le retour',
        openToGiveFeedback: 'Ouvrir pour fournir un retour',
        changeFeedback: 'Modifier le retour'
      },
      questionAnswers: {
        questionTableTitle: 'Question',
        userTableTitle: 'Utilisateur',
        correctTableTitle: 'Correct',
        userAnswerTableTitle: 'Réponse de l\'Utilisateur'
      }
    },
    usersManagement: {
      title: 'Gestion des utilisateurs',
      searchUserLabel: 'Rechercher un utilisateur par email',
      searchUserPlaceholder: 'john.doe@gmail.com',
      emailTitle: 'Email',
      nameTitle: 'Nom',
      sourceTitle: 'Source',
      groupsTitle: 'Groupes',
      adminTitle: 'Administrateur de l\'espace de travail',
      invitedTitle: 'Invité',
      acceptedTitle: 'Invitation acceptée',
      sendInvitationToEveryone: 'Inviter tous les utilisateurs',
      sendInvitationToGroup: 'Inviter {groupName}',
      invited: 'invité',
      accepted: 'invité accepté',
      sendInvitation: 'Envoyer une invitation',
      resendInvitation: 'Renvoyer une invitation',
      revokeAccess: 'Révoquer l\'accès'
    },
    staffManagement: {
      noUsersFound: 'Aucun utilisateur trouvé',
      noGroupsFound: 'Aucun groupe trouvé',
      title: 'Gestion des utilisateurs',
      inviteUsersDialogTitle: 'Inviter des utilisateurs',
      addUsers: 'Ajouter des utilisateurs',
      uploadUsersCSV: 'Ou téléchargez un fichier CSV <strong>(format : Prénom, Nom, Email, Groupe (facultatif))</strong>',
      inviteUsersDialogDescriptions: 'Les nouveaux membres recevront un email après avoir été invités',
      inviteUsersByEmail: 'Inviter des utilisateurs par email. Tapez un email et appuyez sur entrer pour en taper un autre.',
      searchUserLabel: 'Rechercher un membre de l\'espace de travail par email de l\'utilisateur',
      searchUserPlaceholder: 'john.doe@gmail.com',
      emailTitle: 'Email',
      hasCourseCreationRights: 'Peut créer des cours',
      hasVoucherCreationRights: 'Peut créer des bons',
      addCourseCreationRights: 'Ajouter des droits de création de cours',
      tabs: {
        userTabTitle: 'Utilisateurs',
        groupTabTitle: 'Groupes',
        syncTabTitle: 'Gérer les invitations'
      },
      totalStudents: 'Nombre total d\'apprenants trouvés {total}',
      noGroups: 'Aucun groupe assigné pour le moment',
      searchGroup: 'Rechercher des groupes',
      filterByGroup: 'Filtrer par groupe',
      searchUsers: 'Rechercher des utilisateurs',
      inactiveForDays: 'Inactif pendant des jours',
      inactiveFor: 'Inactif pendant:',
      inactiveDaysCount: 'Nombre de jours inactifs',
      inactivityPeriods: {
        WEEK: 'semaine',
        TWOWEEKS: 'deux semaines',
        MONTH: 'mois',
        HALFAYEAR: 'six mois',
        YEAR: 'an'
      },
      createGroupButtonTitle: 'Créer un groupe',
      createUsersButtonTitle: 'Créer des utilisateurs',
      detailsButtonTitle: 'Détails',
      totalGroups: 'Nombre total de groupes trouvés {total}',
      totalUsers: 'Nombre total d\'utilisateurs trouvés {total}',
      noRoles: 'Aucun rôle assigné',
      noUsers: 'Aucun membre dans le groupe | Un membre | {n} membres',
      learningJorneyTitle: 'Parcours d\'apprentissage',
      timeSpentLearningTitle: 'Temps passé à apprendre',
      userCoursesTitle: 'Cours de l\'utilisateur (total {n})',
      lastUserCoursesTitle: 'Cours de l\'utilisateur (dernier {n})',
      lastUserLearningPathsTitle: 'Parcours d\'apprentissage de l\'utilisateur ({n})',
      skillsTitle: 'Compétences',
      groupsTitle: 'Groupes',
      assignSkillButton: 'Attribuer une compétence',
      removeSkillButton: 'Supprimer une compétence',
      assignSkillsToUserTitle: 'Attribuer des compétences à {name}',
      assignGroupButton: 'Attribuer un groupe',
      assignGroupsToUserTitle: 'Attribuer des groupes à {name}',
      assignUserToGroupButton: 'Ajouter l\'utilisateur au groupe',
      removeUserFromGroupButton: 'Supprimer l\'utilisateur du groupe',
      permissionsTitle: 'Autorisations',
      assignPermissionButton: 'Changer les autorisations',
      blockUserButton: 'Bloquer l\'utilisateur',
      unBlockUserButton: 'Débloquer l\'utilisateur',
      deleteUserButton: 'Supprimer l\'utilisateur',
      userBlockedSuccessfully: 'Utilisateur {name} bloqué avec succès',
      userBlockedWithError: 'Il y a eu une erreur lors du blocage de l\'utilisateur {name} : {errorText}',
      userUnblockedSuccessfully: 'Utilisateur {name} débloqué avec succès',
      userUnblockedWithError: 'Il y a eu une erreur lors du déblocage de l\'utilisateur {name} : {errorText}',
      userDeletedSuccessfully: 'Utilisateur {name} supprimé avec succès',
      userDeletedWithError: 'Il y a eu une erreur lors de la suppression de l\'utilisateur {name} : {errorText}',
      noSkillsYet: 'Aucune compétence acquise pour le moment',
      userCard: {
        name: 'Nom',
        memberSince: 'Membre depuis',
        email: 'Email',
        role: 'Rôle',
        group: 'Groupes',
        timeSpentLearning: 'Temps total passé à apprendre sur {workspaceName} :',
        nameAndEmail: 'Nom et email',
        status: 'Statut'
      },
      roles: {
        ROLE_STUDENT: 'Apprenant',
        ROLE_ADMIN: 'Administrateur de l\'espace de travail',
        ROLE_COURSE_ADMIN: 'Administrateur du cours',
        ROLE_VOUCHER_ADMIN: 'Administrateur des bons',
        ROLE_FILE_UPLOAD: 'Téléchargement de fichiers',
        ROLE_INTEGRATIONS_MANAGER: 'Administrateur des intégrations'
      },
      statuses: {
        filterLabel: 'Statut de l\'utilisateur',
        inactiveUserCourses: 'Inactif',
        blockedUser: 'Bloqué',
        running: 'En cours',
        finished: 'Terminé',
        archived: 'Archivé',
        abandoned: 'Abandonné',
        inactiveUserExplanation: 'Cet utilisateur ne fait aucun progrès dans l\'un des cours.'
      },
      notifyInactivityButton: 'Notifier l\'inactivité',
      resultsFound: 'Aucun résultat trouvé | {n} résultat trouvé | {n} résultats trouvés',
      notifications: {
        modal: {
          sendingAlert: 'Vous êtes sur le point d\'envoyer la notification suivante à cet utilisateur.',
          sendingButton: 'Envoyer maintenant',
          inactiveUserCourses: {
            title: 'Notifier l\'inactivité',
            description: '',
            defaultMessage: 'On dirait que vous n\'avez pas progressé depuis longtemps dans certains de vos cours. Veuillez revenir à vos cours actifs ou demander à votre administrateur de vous en assigner un nouveau.'
          },
          notificationSentSuccessfully: 'Notification envoyée avec succès !',
          notificationSentWithError: 'Il y a eu une erreur lors de l\'envoi de la notification à l\'utilisateur : {errorText}'
        }
      },
      inviteUserSuccessful: 'Utilisateur {name} invité avec succès',
      inviteGroupUsersSuccessful: 'Tous les utilisateurs du groupe {name} ont été invités avec succès',
      inviteUserError: 'Il y a eu une erreur lors de l\'invitation de l\'utilisateur {name} : {err}',
      inviteGroupUsersError: 'Il y a eu une erreur lors de l\'invitation des utilisateurs du groupe {name} : {err}',
      addUsersSuccessful: 'Utilisateurs ajoutés avec succès',
      addUsersError: 'Il y a eu une erreur lors de l\'ajout des utilisateurs : {err}',
      groups: {
        title: 'Titre du groupe',
        participants: 'Participants',
        source: 'Source',
        created: 'Créé'
      }
    },
    campaignManagement: {
      titleCampaigns: 'Campagnes',
      searchCampaign: 'Rechercher des campagnes',
      totalCampaigns: 'Nombre total de campagnes trouvées : {total}',
      titleCampaign: 'Campagnes – {name} – {courseName}',
      createCampaign: 'Créer une nouvelle campagne',
      createDiscountCampaign: 'Créer une nouvelle réduction',
      discountLabel: 'Réduction (%)',
      noCampaigns: 'Aucune campagne créée pour le moment',
      campaignName: 'Nom de la campagne',
      startDate: 'Date de début',
      expireDate: 'Date d\'expiration',
      maxUsages: 'Nombre maximal d\'utilisations',
      newCampaign: 'Nouvelle campagne',
      voucherCode: 'Code d\'inscription',
      voucherUsage: 'Nombre d\'utilisations',
      noVouchers: 'Aucun bon ajouté pour le moment à la campagne',
      addVouchers: 'Générer des bons',
      currentUsage: 'Utilisations',
      campaignNameLabel: 'Changer le nom de la campagne',
      uniqueRedeem: 'Rachat unique',
      multipleRedeem: 'Rachat multiple',
      campaignType: 'Type de campagne',
      withMaxNumberUsages: 'avec un nombre maximal d\'utilisations de {maxUsages} fois',
      editCampaign: 'Modifier la campagne',
      deactivate: 'Désactiver la campagne pour le cours',
      activate: 'Activer la campagne pour le cours',
      addMoreVouchers: 'Générer des bons',
      uniqueRedeemExplanation: 'Les codes associés à cette campagne sont personnels et ne peuvent être échangés qu\'une seule fois',
      multipleRedeemExplanation: 'Les codes associés à cette campagne peuvent être échangés plusieurs fois',
      newCampaignNameLabel: 'Donner un nom à la campagne',
      campaignCourse: 'Rechercher un cours',
      hideExpiredCampaigns: 'Masquer les campagnes expirées',
      showExpiredCampaigns: 'Afficher les campagnes expirées',
      noPaymentInformationAlert: 'Aucune information de paiement fournie. Veuillez choisir un cours ou configurer les informations de paiement dans le cours choisi.',
      paymentWithDiscountInfo: 'Le prix d\'origine du cours est de <strong>{price} {currency}</strong>. Le prix réduit est de <strong>{discounted} {currency}</strong>',
      campaignTypes: {
        labels: {
          COURSE_ENROLLMENT: 'Campagne de restriction d\'accès au cours',
          COURSE_PERCENT_DISCOUNT: 'Campagne de réduction de paiement'
        }
      },
      voucherActivated: {
        voucherActivatedMessage: 'L\'activation du bon pour ce cours est activée',
        voucherNotActivatedMessage: 'N\'oubliez pas d\'activer l\'activation du bon pour ce cours',
        editCourseLinkText: 'Modifier le cours'
      },
      editVoucherCodeLabel: 'Modifier le code du bon',
      editButton: 'Modifier',
      editVoucherCodeSuccess: 'Le code du bon a été modifié avec succès en {code}.',
      editVoucherCodeError: 'Il y a eu une erreur lors de la modification du code du bon en {code} : {err}',
      requiredInvalidMessage: 'Ceci est un champ obligatoire',
      periodInvalidMessage: 'Doit être un entier positif',
      discountInvalidMessage: 'La remise doit être comprise entre 1 et 100.'
    },
    integrationsManagement: {
      newPopupTitle: 'Nouvelle connexion {name}',
      editPopupTitle: 'Modifier la connexion {name}',
      title: 'Intégrations',
      clientIdLabel: 'ID client',
      clientSecretLabel: 'Secret client',
      documentCategoryLabel: 'ID de catégorie de document',
      clientEndpointLabel: 'Point de terminaison client',
      subdomainLabel: 'Sous-domaine (de votre espace de travail BambooHR)',
      tokenEndpointLabel: 'Point de terminaison du jeton',
      responseTypeLabel: 'Type de réponse',
      scopeLabel: 'Portée',
      userEndpointLabel: 'Point de terminaison de l\'API utilisateur',
      emailPropertyLabel: 'Propriété de l\'email',
      firstNamePropertyLabel: 'Prénom',
      lastNamePropertyLabel: 'Nom de famille',
      authorizationEndpointLabel: 'Point de terminaison d\'autorisation',
      syncLabel: 'Gérer les invitations',
      syncUsersLabel: 'Synchroniser',
      apiKeyLabel: 'Clé d\'accès API',
      appNameLabel: 'Nom de l\'application',
      appKeyLabel: 'Clé de l\'application',
      disqusIdLabel: 'ID Disqus',
      stripePublishableKeyLabel: 'Clé publiable Stripe',
      stripeSecretKeyLabel: 'Clé secrète Stripe',
      stripeDefaultTaxId: 'ID du taux de taxe par défaut Stripe',
      stripeTaxationCountry: 'Pays d’imposition Stripe',
      useInvoicing: 'Utiliser la facturation',
      paymentMethodConfigurationId: 'ID de configuration du mode de paiement',
      openAiSecretKeyLabel: 'Clé secrète Open AI',
      peopleForceApiKeyLabel: 'Clé API PeopleForce',
      ripplingApiKeyLabel: 'Clé API Rippling',
      liqpayPrivateKeyLabel: 'Clé privée LiqPay',
      liqpayPublicKeyLabel: 'Clé publique LiqPay',
      liqpaySandboxLabel: 'Est-ce un bac à sable ?',
      xTokenKeyLabel: 'xToken',
      xCmsLabel: 'xCms',
      categories: {
        HR: 'Ressources Humaines',
        PAYMENT: 'Services de paiement',
        CONTENT: 'Création de contenu',
        SOCIAL: 'Social',
        DEFAULT: 'Par défaut',
        DEV: 'Développement – Authentification, Webhooks, E-mails',
        CRM: 'CRM'
      },
      personio: {
        description: 'Synchronisez utilisateurs et groupes. Téléversez automatiquement les certificats dans les profils employés.',
        explanation: '<ul>' +
          '<li>Allez dans Paramètres > Personnes > Documents > Catégories et créez une nouvelle catégorie ou utilisez simplement celle qui convient à la sauvegarde des certificats de cours. Extrayez l\'id (en plaçant le pointeur de la souris au-dessus de la catégorie par exemple).</li>' +
          '<li>Allez dans Paramètres > Identifiants API. Créez une nouvelle clé API (ou réutilisez-en une de votre choix). Donnez-lui un nom et sélectionnez l\'intégration "Workademy"</li>' +
          '<li>Fournissez un accès en lecture aux "employés" et aux "documents" et un accès en écriture aux "documents". Sélectionnez les attributs suivants : email, prénom, nom, identifiant d\'employé et statut.</li>' +
          '<li>Configurez votre intégration avec les informations que vous avez recueillies, enregistrez et synchronisez.</li></ul>',
        syncSuccessful: 'La synchronisation des utilisateurs avec Personio a été réussie. Allez dans la console de gestion des utilisateurs pour examiner les invitations.',
        syncError: 'La synchronisation des utilisateurs avec Personio n\'a pas réussi. {err}',
        connectSuccessful: 'Intégration avec l\'API Personio configurée avec succès',
        connectError: 'Erreur lors de la connexion à Personio. {err}',
        deleteSuccessful: 'Intégration avec l\'API Personio supprimée avec succès',
        deleteError: 'Erreur lors de la suppression de l\'intégration avec l\'API Personio. {err}',
        mappingInstructions: 'Mappez les valeurs des champs personnalisés de Personio aux groupes Workademy.',
        fieldValuesLabel: 'Valeurs du champ (appuyez sur espace ou tab pour ajouter)',
        fieldNamePlaceholder: 'Entrez le nom du champ',
        valueInputPlaceholder: 'Saisissez une valeur et appuyez sur espace/tab',
        addFieldButton: 'Ajouter un champ personnalisé',
        certificateNameTemplateLabel: 'Modèle de nom de certificat',
        certificateNameTemplateHint: 'Variables disponibles : &#36;{userName}, &#36;{date}, &#36;{courseName}'
      },
      bamboo_hr: {
        description: 'Gardez les données de votre équipe synchronisées.',
        explanation: 'Connectez-vous à votre compte administrateur BambooHR. Le sous-domaine est une partie de l\'URL qui représente votre entreprise, par exemple si c\'est company.bamboohr.com, alors le sous-domaine est "company". Cliquez sur votre photo de profil, puis sélectionnez Clés API. Ajoutez une nouvelle clé et copiez la valeur de la clé API ici',
        syncSuccessful: 'La synchronisation des utilisateurs avec BambooHR a été réussie. Allez dans la console de gestion des utilisateurs pour examiner les invitations.',
        syncError: 'La synchronisation des utilisateurs avec BambooHR n\'a pas réussi. {err}',
        connectSuccessful: 'Intégration avec votre API BambooHR configurée avec succès',
        connectError: 'Erreur lors de la connexion à BambooHR. {err}',
        deleteSuccessful: 'Intégration avec l\'API BambooHR supprimée avec succès',
        deleteError: 'Erreur lors de la suppression de l\'intégration avec l\'API BambooHR. {err}'
      },
      sage: {
        description: 'Synchronisez utilisateurs et hiérarchies dans Workademy.',
        explanation: 'Connectez-vous à votre compte administrateur Sage. Le sous-domaine est une partie de l\'URL qui représente votre entreprise, par exemple si c\'est company.sage.com, alors le sous-domaine est "company". Cliquez sur votre photo de profil, puis sélectionnez Clés API. Ajoutez une nouvelle clé et copiez la valeur de la clé API ici',
        syncSuccessful: 'La synchronisation des utilisateurs avec Sage a été réussie. Allez dans la console de gestion des utilisateurs pour examiner les invitations.',
        syncError: 'La synchronisation des utilisateurs avec Sage n\'a pas réussi. {err}',
        connectSuccessful: 'Intégration avec votre API Sage configurée avec succès',
        connectError: 'Erreur lors de la connexion à Sage. {err}',
        deleteSuccessful: 'Intégration avec l\'API Sage supprimée avec succès',
        deleteError: 'Erreur lors de la suppression de l\'intégration avec l\'API Sage. {err}'
      },
      custom_oauth2: {
        description: '',
        explanation: '',
        syncSuccessful: 'La synchronisation des utilisateurs avec OAuth2 a été réussie. Allez dans la console de gestion des utilisateurs pour examiner les invitations.',
        syncError: 'La synchronisation des utilisateurs avec OAuth2 n\'a pas réussi. {err}',
        connectSuccessful: 'Intégration avec votre API OAuth2 configurée avec succès',
        connectError: 'Erreur lors de la connexion à OAuth2. {err}',
        deleteSuccessful: 'Intégration avec le serveur OAuth2 supprimée avec succès',
        deleteError: 'Erreur lors de la suppression de l\'intégration avec le serveur OAuth2. {err}'
      },
      oauth2: {
        description: '',
        explanation: 'Configurez votre accès OAuth2 ici. Tous les attributs sont obligatoires. ' +
          '<p><strong>REMARQUE</strong> : dans votre serveur OAuth2, configurez le <em>redirect_uri</em> comme ' +
          '<em>https://{hostname}/signin/</em>.</p>',
        syncSuccessful: 'La synchronisation des utilisateurs avec OAuth2 a été réussie. Allez dans la console de gestion des utilisateurs pour examiner les invitations.',
        syncError: 'La synchronisation des utilisateurs avec OAuth2 n\'a pas réussi. {err}',
        connectSuccessful: 'Intégration avec votre API OAuth2 configurée avec succès',
        connectError: 'Erreur lors de la connexion à OAuth2. {err}',
        deleteSuccessful: 'Intégration avec l\'API OAuth2 supprimée avec succès',
        deleteError: 'Erreur lors de la suppression de l\'intégration avec le serveur OAuth2. {err}',
        authenticationScheme: "Schéma d'authentification",
        postAuthCheckTitle: 'Vérification post-authentification',
        enablePostCheck: 'Activer la vérification post-authentification',
        availableVarsTitle: 'Variables disponibles',
        addVarsLabel: 'Ajouter des variables depuis la réponse OAuth2',
        varsPlaceholder: 'ex. statutAbonnement, typeCompte',
        varsHint: 'Ces variables seront disponibles dans le créateur de conditions',
        conditionTitle: 'Condition',
        varLabel: 'Variable',
        operatorLabel: 'Opérateur',
        valueLabel: 'Valeur',
        conditionPreview: 'Aperçu de la condition:',
        actionTitle: 'Action',
        actionType: "Type d'action",
        redirectUrl: 'URL de redirection'
      },
      push_notification: {
        description: '',
        explanation: 'Configurez votre point de terminaison des notifications push ici. ' +
          'Assurez-vous que votre point de terminaison accepte l\'autorisation "Basic", le type de contenu "application/json" et la méthode "POST".',
        connectSuccessful: 'Intégration avec votre point de terminaison des notifications push configurée avec succès',
        syncError: 'La synchronisation avec le point de terminaison des notifications push n\'a pas réussi. {err}',
        connectError: 'Erreur lors de la connexion au point de terminaison des notifications push. {err}',
        deleteSuccessful: 'Intégration avec le point de terminaison des notifications push supprimée avec succès',
        deleteError: 'Erreur lors de la suppression de l\'intégration avec le point de terminaison des notifications push. {err}'
      },
      loom: {
        description: 'Intégrez et gérez des vidéos Loom directement dans vos cours.',
        explanation: 'Ouvrez votre compte Loom et copiez le nom de l\'application et la clé de l\'application',
        syncSuccessful: 'Synchronisation avec Loom réussie',
        syncError: 'Synchronisation avec Loom non réussie. {err}',
        connectSuccessful: 'Intégration avec le SDK Loom réussie !',
        connectError: 'Erreur lors de la connexion au SDK Loom. {err}',
        deleteSuccessful: 'Intégration avec le SDK Loom supprimée avec succès',
        deleteError: 'Erreur lors de la suppression de l\'intégration avec le SDK Loom. {err}'
      },
      disqus: {
        description: 'Ajoutez des discussions et des interactions sociales à vos cours.',
        explanation: 'Ouvrez votre compte Disqus et copiez le nom de l\'application',
        syncSuccessful: 'Synchronisation avec Disqus réussie',
        syncError: 'Synchronisation avec Disqus non réussie. {err}',
        connectSuccessful: 'Intégration avec Disqus réussie !',
        connectError: 'Erreur lors de la connexion à Disqus. {err}',
        deleteSuccessful: 'Intégration avec Disqus supprimée avec succès',
        deleteError: 'Erreur lors de la suppression de l\'intégration avec Disqus. {err}'
      },
      stripe: {
        description: 'Activez les paiements et la facturation automatique.',
        explanation: '<div>\n' +
          '  <h2>Explication :</h2>\n' +
          '  <ol>\n' +
          '    <li>\n' +
          '      <strong>Clé publiable :</strong><br />\n' +
          '      Ouvrez votre <a href="https://dashboard.stripe.com" target="_blank" class="tw-underline">tableau de bord Stripe</a> et copiez la <strong>clé publiable</strong> depuis les paramètres API.\n' +
          '    </li>\n' +
          '    <li>\n' +
          '      <strong>ID du taux de taxe par défaut :</strong><br />\n' +
          '      Accédez à la <a href="https://dashboard.stripe.com/tax-rates" target="_blank" class="tw-underline">section Taux de taxe</a> dans votre tableau de bord Stripe.<br />\n' +
          '      - Copiez un <strong>ID de taux de taxe inclusif existant</strong>, ou<br />\n' +
          '      - Créez un nouveau taux de taxe inclusif si nécessaire.\n' +
          '    </li>\n' +
          '    <li>\n' +
          '      <strong>Pays d\'imposition :</strong><br />\n' +
          '      Sélectionnez le pays où votre entreprise est enregistrée à des fins fiscales.<br />\n' +
          '      - Seuls les utilisateurs situés dans ce pays seront soumis à des taxes.\n' +
          '    </li>\n' +
          '  </ol>\n' +
          '</div>\n',
        syncSuccessful: 'Synchronisation avec Stripe réussie',
        syncError: 'Synchronisation avec Stripe non réussie. {err}',
        connectSuccessful: 'Intégration avec Stripe réussie',
        connectError: 'Erreur lors de la connexion à Stripe. {err}',
        deleteSuccessful: 'Intégration avec Stripe supprimée avec succès',
        deleteError: 'Erreur lors de la suppression de l\'intégration avec Stripe. {err}'
      },
      liqpay: {
        description: 'Acceptez facilement les paiements depuis l’Ukraine.',
        explanation: 'Ouvrez votre tableau de bord LiqPay et copiez les clés privée et publique. Indiquez si c\'est un environnement de test.',
        syncSuccessful: 'Synchronisation avec LiqPay réussie',
        syncError: 'Synchronisation avec LiqPay non réussie. {err}',
        connectSuccessful: 'Intégration avec LiqPay réussie',
        connectError: 'Erreur lors de la connexion à LiqPay. {err}',
        deleteSuccessful: 'Intégration avec LiqPay supprimée avec succès',
        deleteError: 'Erreur lors de la suppression de l\'intégration avec LiqPay. {err}'
      },
      revolut: {
        description: 'Permettez les paiements internationaux via Revolut.',
        explanation: 'Ouvrez votre tableau de bord Revolut et copiez les clés secrètes du client.',
        syncSuccessful: 'Synchronisation avec Revolut réussie',
        syncError: 'Synchronisation avec Revolut non réussie. {err}',
        connectSuccessful: 'Intégration avec Revolut réussie',
        connectError: 'Erreur lors de la connexion à Revolut. {err}',
        deleteSuccessful: 'Intégration avec Revolut supprimée avec succès',
        deleteError: 'Erreur lors de la suppression de l\'intégration avec Revolut. {err}'
      },
      open_ai: {
        description: 'Générez du contenu de formation avec votre compte OpenAI.',
        explanation: 'Ouvrez votre tableau de bord Open AI et copiez votre clé',
        syncSuccessful: 'Synchronisation avec Open AI réussie',
        syncError: 'Synchronisation avec Open AI non réussie. {err}',
        connectSuccessful: 'Intégration avec Open AI réussie',
        connectError: 'Erreur lors de la connexion à Open AI. {err}',
        deleteSuccessful: 'Intégration avec Open AI supprimée avec succès',
        deleteError: 'Erreur lors de la suppression de l\'intégration avec Open AI. {err}'
      },
      people_force: {
        description: 'Synchronisez directement les dossiers et la structure du personnel.',
        explanation: 'Ouvrez votre tableau de bord PeopleForce et copiez votre clé API',
        syncSuccessful: 'Synchronisation avec PeopleForce réussie',
        syncError: 'Synchronisation avec PeopleForce non réussie. {err}',
        connectSuccessful: 'Intégration avec PeopleForce réussie',
        connectError: 'Erreur lors de la connexion à PeopleForce. {err}',
        deleteSuccessful: 'Intégration avec PeopleForce supprimée avec succès',
        deleteError: 'Erreur lors de la suppression de l\'intégration avec PeopleForce. {err}'
      },
      rippling: {
        description: 'Automatisez la gestion des utilisateurs et des groupes facilement.',
        explanation: 'Si vous choisissez la clé API comme mode d\'authentification, vous devez ' +
          'ouvrir votre tableau de bord Rippling et copier votre clé API. ' +
          'Vous n\'avez rien à faire si vous choisissez le mode d\'authentification par identifiants utilisateur.',
        syncSuccessful: 'Synchronisation avec Rippling réussie',
        syncError: 'Synchronisation avec Rippling non réussie. {err}',
        connectSuccessful: 'Intégration avec Rippling réussie',
        connectError: 'Erreur lors de la connexion à Rippling. {err}',
        deleteSuccessful: 'Intégration avec Rippling supprimée avec succès',
        deleteError: 'Erreur lors de la suppression de l\'intégration avec Rippling. {err}'
      },
      deel: {
        description: 'Synchronisez facilement les équipes distribuées.',
        explanation: 'Ouvrez votre tableau de bord Deel et copiez la clé d\'accès API.',
        syncSuccessful: 'Synchronisation avec Deel réussie',
        syncError: 'Synchronisation avec Deel non réussie. {err}',
        connectSuccessful: 'Intégration avec Deel réussie',
        connectError: 'Erreur lors de la connexion à Deel. {err}',
        deleteSuccessful: 'Intégration avec Deel supprimée avec succès',
        deleteError: 'Erreur lors de la suppression de l\'intégration avec Deel. {err}'
      },
      monobank: {
        description: 'Connectez Monobank pour les paiements locaux.',
        explanation: 'Ouvrez votre tableau de bord Monobank et copiez votre xToken et xCms si applicable.',
        syncSuccessful: 'Synchronisation avec Monobank réussie',
        syncError: 'Synchronisation avec Monobank non réussie. {err}',
        connectSuccessful: 'Intégration avec Monobank réussie',
        connectError: 'Erreur lors de la connexion à Monobank. {err}',
        deleteSuccessful: 'Intégration avec Monobank supprimée avec succès',
        deleteError: 'Erreur lors de la suppression de l\'intégration avec Monobank. {err}'
      },
      hi_bob: {
        description: 'Gardez les utilisateurs et autorisations parfaitement alignés.',
        explanation: 'Connectez-vous à votre tableau de bord HiBob et copiez vos clés clientId et clientSecret.',
        syncSuccessful: 'Synchronisation avec HiBob réussie',
        syncError: 'Synchronisation avec HiBob non réussie. {err}',
        connectSuccessful: 'Intégration avec HiBob réussie',
        connectError: 'Erreur lors de la connexion à HiBob. {err}',
        deleteSuccessful: 'Intégration avec HiBob supprimée avec succès',
        deleteError: 'Erreur lors de la suppression de l\'intégration avec HiBob. {err}'
      },
      alexis_hr: {
        description: 'Alignez rôles et utilisateurs depuis votre système RH.',
        explanation: 'Connectez-vous à votre tableau de bord AlexisHR et copiez vos clés clientSecret.',
        syncSuccessful: 'La synchronisation des utilisateurs avec AlexisHR a été réussie. Allez dans la console de gestion des utilisateurs pour examiner les invitations.',
        syncError: 'La synchronisation des utilisateurs avec AlexisHR n\'a pas réussi. {err}',
        connectSuccessful: 'Intégration avec votre API AlexisHR configurée avec succès',
        connectError: 'Erreur lors de la connexion à AlexisHR. {err}',
        deleteSuccessful: 'Intégration avec l\'API AlexisHR supprimée avec succès',
        deleteError: 'Erreur lors de la suppression de l\'intégration avec AlexisHR. {err}'
      },
      brevo: {
        description: 'Engagez vos apprenants avec des campagnes CRM automatisées.',
        eventTemplateMappingLabel: 'Correspondance des Modèles',
        eventTemplateMappingDescription: 'Associez vos modèles de courriel Workademy aux modèles Brevo en entrant les identifiants des modèles correspondants de Brevo.',
        explanation: 'Connectez-vous à votre <strong><u><a href="https://app.brevo.com/settings/keys/api" target="_blank">tableau de bord Brevo</a></u></strong> et copiez votre clé API.',
        syncSuccessful: 'Synchronisation avec Brevo réussie.',
        syncError: 'La synchronisation avec Brevo a échoué. {err}',
        connectSuccessful: 'Intégration avec votre compte Brevo configurée avec succès',
        connectError: 'Erreur de connexion à Brevo. {err}',
        deleteSuccessful: 'Intégration avec Brevo supprimée avec succès',
        deleteError: 'Erreur de suppression de l’intégration avec Brevo. {err}',
        templateMappingExplanation: 'Les identifiants de modèles se trouvent dans votre <strong><u><a href="https://app.brevo.com/templates/listing" target="_blank">compte Brevo</a></u></strong> dans la section Modèles de Courriel.',
        defaultEmailsWhenNoMapping: 'Appliquer les courriels par défaut en l’absence de correspondance (recommandé).',
        templateMappingHeaders: {
          lmsTemplate: 'Événements de Workademy',
          audience: 'Audience',
          description: 'Description',
          brevoTemplateID: 'ID de Modèle Brevo'
        },
        templateMappingAudience: {
          learner: 'apprenant',
          admin: 'administrateur',
          any: 'tout'
        },
        templateMapping: {
          check_user_courses_notification_event: {
            title: 'Vérifier la progression du cours',
            description: 'Envoyé à l’apprenant pour notifier son inactivité'
          },
          new_open_ended_question_answered_event: {
            title: 'Nouvelle réponse ouverte',
            description: 'Notification à un administrateur lorsqu’un apprenant soumet une réponse ouverte'
          },
          new_open_ended_question_graded_event: {
            title: 'Question ouverte notée',
            description: 'Alerte l’apprenant lorsque sa question ouverte est notée'
          },
          pending_user_course_approval_event: {
            title: 'Inscription en attente',
            description: 'Informe l’administrateur d’une inscription en attente'
          },
          registration_event: {
            title: 'Nouvel utilisateur enregistré',
            description: 'Envoyé lorsqu’un nouvel utilisateur s’enregistre sur la plateforme'
          },
          reset_password_event: {
            title: 'Réinitialisation du mot de passe demandée',
            description: 'Envoyé lorsqu’un utilisateur demande une réinitialisation de mot de passe'
          },
          user_course_assigned_event: {
            title: 'Nouveau cours assigné',
            description: 'Informe l’apprenant d’une nouvelle assignation de cours'
          },
          user_learning_path_assigned_event: {
            title: 'Nouveau parcours d’apprentissage assigné',
            description: 'Informe l’apprenant d’une nouvelle assignation de parcours d’apprentissage'
          },
          workspace_invitation_event: {
            title: 'Invitation à rejoindre l’espace de travail',
            description: 'Envoyé lorsqu’un utilisateur est invité à rejoindre un espace de travail'
          }
        }
      },
      intercom: {
        description: 'Chattez, intégrez et segmentez vos utilisateurs selon leurs interactions.',
        explanation: '<div tw-leading-[1.5]><div class="tw-mb-3">Pour intégrer Intercom, suivez ces étapes essentielles :</div>' +
          '<div class="tw-mb-1.5"><strong>1.</strong> Créez une application dans Intercom <br>Allez dans Paramètres > Intégrations > Intercom Developer Hub et créez une application pour activer l\'accès API. Après la création, vous obtiendrez un jeton d\'accès (Access Token).</div>' +
          '<div class="tw-mb-1.5"><strong>2.</strong> Installez Intercom Messenger sur votre site <br>Allez dans Paramètres > Canaux > Messenger > Installer et copiez l\'appId dans les exemples de code.</div>' +
          '<div class="tw-mb-1.5"><strong>3.</strong> Obtenez le Web Identity Secret <br>Vous le trouverez dans la section Installation sous Vérification d\'identité.</div></div>',
        syncSuccessful: 'Synchronisation avec Intercom réussie.',
        syncError: 'Échec de la synchronisation avec Intercom. {err}',
        connectSuccessful: 'Intégration avec Intercom réussie !',
        connectError: 'Erreur lors de la connexion à Intercom. {err}',
        deleteSuccessful: 'Intégration avec Intercom supprimée avec succès.',
        deleteError: 'Erreur lors de la suppression de l\'intégration avec Intercom. {err}'
      },
      salesforce_mc: {
        description: 'Salesforce Marketing Cloud',
        explanation: 'Envoyez des e-mails transactionnels automatisés et personnalisés depuis Workademy en utilisant votre compte Salesforce Marketing Cloud.',
        syncSuccessful: 'Synchronisation avec Salesforce Marketing Cloud réussie.',
        syncError: 'Synchronisation avec Salesforce Marketing Cloud échouée. {err}',
        connectSuccessful: 'Intégration avec Salesforce Marketing Cloud réussie !',
        connectError: 'Erreur lors de la connexion à Salesforce Marketing Cloud. {err}',
        deleteSuccessful: 'Intégration avec Salesforce Marketing Cloud supprimée avec succès.',
        deleteError: "Erreur lors de la suppression de l'intégration avec Salesforce Marketing Cloud. {err}",
        subdomainLabel: 'Sous-domaine',
        templateMapping: {
          welcome_to_course_event: {
            title: "Bienvenue à l'événement du cours",
            description: "Bienvenue à l'événement du cours"
          }
        },
        templateMappingHeaders: {
          salesforceTemplateID: 'ID du modèle'
        }
      }
    },
    learningArtifactsManagement: {
      learningArtifactsManagement: 'Gestion des artefacts',
      skillsTitle: 'Compétences',
      achievementsTitle: 'Réalisations',
      avatarsTitle: 'Avatars',
      skillLevel: 'Pas de niveau | Niveau 1 | Niveau {n}',
      skillLevelNameLabel: 'Nom de la compétence',
      skillLevelDescriptionLabel: 'Description de la compétence',
      editCard: {
        numberOfLevelsSubtitle: 'Pas de niveaux | Pas de niveaux | {n} niveaux'
      },
      noSkills: 'Aucune compétence acquise pour le moment',
      noAchievements: 'Aucune réalisation pour le moment'
    },
    workspaceManagement: {
      title: 'Gestion de l\'espace de travail',
      tabs: {
        general: {
          title: 'Général',
          workspaceName: {
            title: 'Nom de l’espace de travail',
            subtitle: 'Définir ou modifier le nom de l’espace de travail.',
            label: 'Tapez le nom de l’espace de travail',
            rules: {
              required: 'Le nom est requis',
              lessThan: 'Le nom doit comporter moins de 64 caractères',
              invalidCharacters: 'Les caractères spéciaux ne sont pas autorisés'
            }
          },
          language: {
            title: 'Langue par défaut',
            subtitle: 'Configurer la langue par défaut pour l’espace de travail.',
            label: 'Choisissez la langue par défaut'
          },
          privacySettings: {
            title: 'Paramètres de confidentialité de l’espace de travail',
            subtitle: 'Contrôlez si l’espace de travail est public et peut être indexé par les moteurs de recherche.',
            label: 'Espace de travail public'
          },
          inviteOnly: {
            title: 'Options d’adhésion à l’espace de travail',
            subtitle: 'Définissez si l’espace de travail est ouvert à tous ou uniquement sur invitation.',
            label: 'Uniquement sur invitation'
          }
        },
        apiKeys: {
          title: 'Clés API',
          noApiKeys: 'Vous n’avez pas encore de clés API',
          errorCreating: 'Erreur lors de la création de la clé API : {error}',
          errorDeleting: 'Erreur lors de la suppression de la clé API : {error}',
          copySuccessful: 'Clé API copiée avec succès.',
          copyError: 'Impossible de copier la clé API : {error}',
          createApiKeyButton: 'Créer une clé API maintenant',
          removeApiKeyButton: 'Supprimer la clé API'
        },
        userInteraction: {
          title: 'Interaction avec l’utilisateur'
        },
        seoMetadata: {
          title: 'SEO & Métadonnées',
          subtitle: 'Gérer les balises meta pour les moteurs de recherche et les partages sociaux (ex. OpenGraph, cartes Twitter).',
          pageTitleLabel: 'Titre de la page',
          pageKeywordsLabel: 'Mots-clés de la page',
          pageDescriptionLabel: 'Description',
          twitter: {
            title: 'Twitter/X',
            titleLabel: 'Titre Twitter',
            descriptionLabel: 'Description'
          },
          opengraph: {
            title: 'OpenGraph',
            titleLabel: 'Titre OpenGraph',
            descriptionLabel: 'Description OpenGraph'
          },
          rules: {
            maxChars: 'Maximum {characters} caractères',
            alphaNumericSpacePunctuation: 'Seuls les caractères alphanumériques, les espaces et les signes de ponctuation sont autorisés',
            alphaNumericCommasSpaces: 'Seuls les caractères alphanumériques, les virgules et les espaces sont autorisés',
            alphaNumericCommasSpacesPipe: 'Seuls les caractères alphanumériques, les espaces et les symboles |, - sont autorisés',
            alphaNumericCommasSpacesPipeDash: 'Seuls les caractères alphanumériques, les espaces et les symboles |, -, : sont autorisés',
            invalidOpenGraphImage_fr: 'L\'image téléchargée doit être dans l\'un des formats suivants : JPG, PNG ou GIF.'
          }
        },
        popups: {
          title: 'Pop-ups',
          preEnrollPopup: {
            title: 'Pop-up de préinscription au cours',
            addDefaultContentButton: 'Remplir avec le contenu par défaut'
          }
        },
        lookandfeel: {
          title: 'Apparence',
          folderView: {
            title: 'Affichage des Assets',
            subtitle: "Configurez l'affichage des cours pour les apprenants",
            label: 'Vue',
            folder: 'Dossiers',
            flat: 'Plat'
          }
        }
      }
    },
    mainAdminPage: {
      checkStudentsProgressTitle: 'Vérifier la progression des étudiants',
      checkStudentsProgressDescription: 'Vérifier la progression des étudiants pour chaque cours sur cet espace de travail',
      checkAnalyticsDashboardTitle: 'Vérifier le tableau de bord analytique',
      checkAnalyticsDashboardDescription: 'Vérifier les analyses générales pour chaque cours de cet espace de travail',
      manageRolesTitle: 'Gérer le personnel de cet espace de travail',
      manageRolesDescription: 'Ajouter ou révoquer les droits de création de cours à partir de l\'utilisateur de cet espace de travail',
      manageUsersTitle: 'Gérer les utilisateurs et les groupes de l\'espace de travail',
      manageUsersDescription: 'Attribuer des compétences, bloquer des utilisateurs, ajouter ou révoquer des droits à et des utilisateurs de cet espace de travail. Synchroniser les utilisateurs des plateformes intégrées.',
      manageCampaignsTitle: 'Gérer les campagnes et les codes de bons',
      manageCampaignsDescription: 'Ajouter, modifier, supprimer des campagnes pour les cours et gérer leurs codes de bons ou d\'inscription',
      manageIntegrationsTitle: 'Gérer les intégrations',
      manageIntegrationsDescription: 'Ajouter, gérer et supprimer des intégrations avec des outils et des plateformes tiers',
      manageLearningArtefactsTitle: 'Gérer les artefacts d\'apprentissage',
      manageLearningArtefactsDescription: 'Ajouter, gérer et supprimer des artefacts d\'apprentissage tels que des compétences',
      manageWorkspaceTitle: 'Gérer l\'espace de travail',
      manageWorkspaceDescription: 'Gérer l\'apparence de l\'espace de travail, les popups globaux et les attributs de l\'espace de travail.'
    },
    menu: {
      home: 'Accueil',
      staffMgmt: 'Gestion du personnel',
      usersMgmt: 'Gestion des utilisateurs',
      groupsMgmt: 'Gestion des groupes',
      progress: 'Progression des étudiants',
      dashboard: 'Tableau de bord analytique',
      campaignMgmt: 'Gestion des campagnes',
      integrationsMgmt: 'Gestion des intégrations',
      artifactsMgmt: 'Gestion des compétences',
      workspaceMgmt: 'Gestion de l\'espace de travail'
    },
    library: {
      supported: {
        IMAGE: 'images',
        PDF: 'pdf',
        MP3: 'mp3',
        MP4: 'mp4',
        ZIP: 'zip',
        CSV: 'csv',
        XLS: 'excel'
      },
      maxSizeAllFiles: 'Les PDF ne doivent pas dépasser {pdfSize} Mo, les vidéos – {videoSize} Mo, les autres – {fileSize} Mo',
      maxSizeNormalFiles: 'Chaque fichier ne doit pas dépasser {fileSize} Mo',
      fileTypeWithArticle: {
        IMAGE: 'une image',
        PDF: 'un pdf',
        MP3: 'un MP3',
        MP4: 'un MP4',
        XLS: 'un excel'
      },
      title: 'Bibliothèque de ressources',
      searchLibrary: 'Rechercher dans la bibliothèque',
      searchLibraryLabel: 'Rechercher des fichiers par nom',
      uploadTitle: 'Télécharger',
      uploaderHelpText: 'Choisissez un fichier {supported}',
      uploadImagesOrMp3: 'autres formats',
      uploadPdfs: 'PDF',
      errorUploadingFile: 'Il y a eu une erreur lors du téléchargement du fichier : {err}',
      successUploadingFile: 'Fichier {fileName} téléchargé avec succès',
      clickHereToOpenLibrary: 'Cliquez ici pour ouvrir la bibliothèque',
      dragImageHere: 'Faites glisser l\'image ici',
      dragFileFromLibrary: 'Faites glisser {fileType} depuis la bibliothèque',
      dragPdfHere: 'Faites glisser le pdf ici',
      fileName: 'Nom du fichier',
      category: 'Catégorie',
      updatingFile: 'Mise à jour du fichier partout',
      categories: {
        ALL: 'Tous',
        AVATAR: 'Avatar',
        COVER_IMAGE: 'Covers',
        CONTENT: 'Contenu',
        FRAME: 'Réalisations',
        OTHER: 'Autre'
      },
      errors: {
        type: 'Type de fichier invalide. Seuls les fichiers {supported} sont autorisés',
        pdfSize: 'Les fichiers PDF ne doivent pas dépasser {size} en taille',
        mp4Size: 'Les fichiers MP4 ne doivent pas dépasser {size} en taille',
        size: 'Les fichiers ne doivent pas dépasser {size} en taille'
      },
      buttons: {
        download: 'Télécharger l\'original',
        delete: 'Supprimer de la bibliothèque',
        replace: 'Remplacer le fichier'
      },
      libraryItemTooltip: '<h6>{name}</h6><hr><div class="caption">Cliquez pour copier l\'URL.</div>',
      showCourseFiles: 'Les fichiers affichés ont été téléchargés dans le cours actuel. Basculer le bouton pour voir tous les fichiers de l\'espace de travail.',
      showWorkspaceFiles: 'Tous les fichiers de l\'espace de travail sont affichés. Désactivez le bouton pour voir uniquement les fichiers qui ont été téléchargés dans le cours actuel.',
      showWorkspaceFilesToggleButton: 'Afficher tous les fichiers de l\'espace de travail'
    },
    sectionsLibrary: {
      title: 'Sections',
      previewAndDrag: 'cliquez sur l\'icône pour prévisualiser et ajouter une nouvelle section à votre leçon'
    },
    analytics: {
      title: 'Analyses',
      startDateLabel: 'Date de début',
      endDateLabel: 'Date de fin',
      aggregateByLabel: 'Agréger par',
      customInterval: 'Intervalle personnalisé',
      selectedIntervalWasNotPossible: 'Il n\'y a pas de données pour la période que vous avez sélectionnée. Recul vers la plus grande période pour laquelle nous avons pu extraire des données.',
      aggregations: {
        DAY: 'jour',
        MONTH: 'mois',
        MINUTE: 'minute',
        WEEK: 'semaine',
        YEAR: 'année',
        HOUR: 'heure'
      },
      intervals: {
        YESTERDAY: 'hier',
        LAST24H: 'les dernières 24 heures',
        LASTWEEK: 'la semaine dernière',
        PREVIOUS7DAYS: 'les 7 derniers jours',
        LASTMONTH: 'le mois dernier',
        LAST3MONTHS: 'derniers 3 mois',
        LAST6MONTHS: 'derniers 6 mois',
        PREVIOUS30DAYS: 'les 30 derniers jours',
        PREVIOUS365DAYS: 'les 365 derniers jours',
        LASTYEAR: 'l\'année dernière',
        CUSTOM: 'personnalisé'
      },
      dashboard: {
        itemsPerPageText: 'Lignes par page',
        allCourses: 'Tous les cours',
        allCountries: 'Tous les pays',
        allCampaigns: 'Toutes les campagnes',
        facts: {
          lectures: {
            title: 'Leçons'
          },
          enrolments: {
            title: 'Inscriptions aux cours'
          },
          questions: {
            title: 'Réponses aux questions'
          },
          certificates: {
            title: 'Certificats'
          },
          campaigns: {
            title: 'Campagnes'
          },
          workspaceUsers: {
            title: 'Utilisateurs'
          }
        },
        coursesLabel: 'Cours',
        countriesLabel: 'Pays',
        campaignsLabel: 'Campagnes',
        modulesLabel: 'Modules',
        certificatesLabel: 'Certificats',
        lecturesLabel: 'Leçons',
        questionsLabel: 'Questions',
        workspaceUsersLabel: 'Utilisateurs',
        enrolmentsCaption: 'inscrit',
        seenCaption: 'vu',
        answeredCaption: 'répondu',
        issuedLabel: 'délivré',
        campaignsCaption: 'échangé',
        workspaceUsersCaption: 'connecté',
        funnelCaption: 'conversion des cours principaux',
        funnelLabel: 'Entonnoir',
        funnel: {
          amountLogin: 'Utilisateurs connectés',
          amountEnrolments: 'Utilisateurs inscrits aux cours',
          amountCertificates: 'Certificats délivrés',
          enrollments: 'Inscriptions aux cours',
          finishedModule: 'Module terminé'
        },
        chartLabels: {
          enrolments: {
            enrolled: 'Inscriptions',
            started: 'Commencé',
            ended: 'Terminé',
            abandoned: 'Abandonné',
            amountStarted: 'Inscriptions',
            amountMsCourseStarted: 'Commencé',
            amountEnded: 'Terminé',
            amountAbandoned: 'Abandonné',
            avgDaysBetweenEnded: 'Jours moyens pour terminer'
          },
          certificates: {
            amountIssued: 'Délivré',
            avgScore: 'Score moyen',
            minScore: 'Score minimum',
            maxScore: 'Score maximum'
          },
          questions: {
            amountCorrect: 'Réponses correctes',
            amountWrong: 'Réponses incorrectes',
            maxWrongAttempts: 'Tentatives maximales',
            minWrongAttempts: 'Tentatives minimales',
            avgWrongAttempts: 'Tentatives moyennes'
          },
          lectures: {
            seen: 'Vu',
            amountSeen: 'Leçons vues'
          },
          campaigns: {
            amountRedeemed: 'Échangé'
          },
          workspaceUsers: {
            amountLogin: 'Connecté',
            amountRegister: 'Inscrit'
          }
        },
        noDataToDisplay: 'Aucune donnée à afficher',
        dataLoading: 'Chargement...'
      },
      validationRules: {
        startDateLessEndDate: 'La date de début doit être antérieure à la date de fin'
      }
    },
    createCoursesHeader: {
      create: 'Créer',
      chooseOther: 'Autres possibilités de création de cours',
      beforeCreatingCourseTitle: 'Avant de créer un cours',
      beforeCreatingCourseDescription: 'Veuillez lire ce pdf avant de créer un cours. Il vous aidera à créer une structure de cours parfaite.',
      beforeCreatingCourseAction: 'Télécharger le PDF',
      createCourseTitle: 'Créer un cours',
      createCourseDescription: 'Choisissez le moyen le plus pratique pour créer un cours.',
      createCourseAction: 'Commencez ici',
      createLearningPathTitle: 'Créer un parcours d\'apprentissage',
      createLearningPathDescription: 'Créez un plan d\'apprentissage à partir des cours existants.',
      createLearningPathAction: 'Commencez ici'
    },
    learningPaths: {
      title: 'Parcours d\'apprentissage',
      noLearningPaths: 'Aucun parcours d\'apprentissage créé pour le moment.',
      createNewLearningPathTitle: 'Créer un nouveau parcours d\'apprentissage',
      editLearningPathTitle: 'Modifier le parcours d\'apprentissage {name}',
      saveInfo: {
        success: 'Le parcours d\'apprentissage {name} a été enregistré avec succès.',
        error: 'Il y a eu une erreur lors de l\'enregistrement du parcours d\'apprentissage {name} : {err}.'
      },
      stepper: {
        title: 'Titre et image de couverture',
        titleLabel: 'Nom du parcours d\'apprentissage',
        coverImageChooser: 'Choisissez une image de couverture pour le parcours d\'apprentissage',
        description: 'Description du parcours d\'apprentissage',
        courses: 'Cours du parcours d\'apprentissage',
        learningPathSteps: 'Étapes et objectifs du parcours d\'apprentissage',
        coursesOrder: 'Ordre des cours',
        users: 'Attribuer des utilisateurs',
        achievements: 'Réalisations',
        createLearningPath: 'Créer un parcours d\'apprentissage',
        editLearningPath: 'Mettre à jour le parcours d\'apprentissage',
        checkAndSave: 'Vérifier et enregistrer',
        searchUsers: 'Rechercher des utilisateurs',
        skills: 'Attribuer des compétences',
        searchSkills: 'Rechercher des compétences',
        assignUserToTheLearningPathButton: 'Attribuer un utilisateur',
        assignSkillToTheLearningPathButton: 'Attribuer une compétence',
        removeSkillFromTheLearningPathButton: 'Supprimer une compétence',
        assignGroupsToUserTitle: 'Attribuer des groupes',
        searchGroups: 'Rechercher des groupes',
        certifiable: 'Certifiable',
        timing: 'Durée du Parcours d’Apprentissage',
        achievementItem: {
          name: 'Tapez le nom de l\'objectif',
          description: 'Tapez la description de l\'objectif',
          image: 'Ajouter une image pour la réalisation'
        },
        loadingCourses: 'Chargement des cours',
        selectedCourses: 'Aucun cours sélectionné | {n} cours sélectionné | {n} cours sélectionnés',
        info: {
          title: 'Ajoutez un titre et une image de couverture pour le parcours d\'apprentissage ici. Vous pourrez le modifier à l\'avenir.',
          description: 'Ajoutez la description du parcours d\'apprentissage ici. Il est possible de la modifier à l\'avenir.',
          courses: 'Choisissez les cours que le parcours d\'apprentissage comprendra.',
          coursesOrder: 'Organisez l\'ordre correct des cours.',
          users: 'Choisissez les utilisateurs à affecter au parcours d\'apprentissage.',
          skills: 'Choisissez les niveaux de compétence que les utilisateurs acquièrent après avoir terminé le parcours d\'apprentissage',
          achievements: 'Créez des réalisations pour chacun des cours du parcours d\'apprentissage.',
          checkAndSave: 'Vérifiez les cours et les réalisations et enregistrez le parcours d\'apprentissage avant de procéder à l\'affectation des utilisateurs.',
          saveBeforeUser: 'Veuillez ajouter au moins un titre pour votre parcours d\'apprentissage avant d\'attribuer des utilisateurs.',
          learningPathSteps: 'Définissez ici les étapes du parcours d\'apprentissage, les cours correspondants et les objectifs. ' +
            'Faites glisser et déposez les étapes pour modifier leur ordre.',
          certifiable: 'Activer le certificat à la fin du parcours d’apprentissage.',
          timing: {
            title: 'Gérer la Durée de Votre Parcours d’Apprentissage',
            description: 'Configurez les paramètres de durée pour votre parcours d’apprentissage. Spécifiez le nombre de jours pour envoyer des rappels d’inactivité et la durée maximale autorisée pour terminer avant l’annulation automatique.',
            reminderAfterInactivity: {
              title: 'Envoyer un Rappel Après Inactivité',
              description: 'Envoyez automatiquement un rappel aux apprenants s’ils n’ont pas terminé le parcours d’apprentissage dans un délai de [N jours] à compter de la date de début. Maintenez leur engagement grâce à des rappels opportuns.',
              label: 'Jours Jusqu’au Rappel',
              tooltip: 'Saisissez le nombre de jours après la date de début pour envoyer un rappel concernant les parcours d’apprentissage non terminés.'
            },
            automaticCancellationTime: {
              title: 'Définir une Date Limite de Terminaison',
              description: 'Définissez la durée maximale (en jours) autorisée pour terminer le parcours d’apprentissage. Si l’apprenant ne termine pas dans un délai de [N jours] à compter de la date de début, le parcours sera automatiquement annulé.',
              label: 'Jours Jusqu’à l’Annulation',
              tooltip: 'Saisissez le nombre maximum de jours autorisés pour terminer le parcours d’apprentissage. Passé ce délai, il sera automatiquement annulé.'
            },
            automaticRetake: {
              title: 'Redémarrage automatique',
              description: 'Redémarrer automatiquement le parcours d’apprentissage (s’il n’a pas encore commencé) après un certain temps depuis son dernier début.',
              labelValue: 'Valeur temporelle',
              labelUnit: 'Unité de temps'
            }
          }
        },
        learningPathStepsPage: {
          addNewStepButton: 'Créer une nouvelle étape basée sur un cours',
          addNewGoalButton: 'Ajouter un objectif',
          stepTitle: 'Titre de l\'étape',
          stepDescription: 'Description de l\'étape',
          addEditGoal: 'Ajouter/Modifier un objectif',
          saveGoal: 'Enregistrer l\'objectif',
          courseCardTitle: 'Cours',
          goalCardTitle: 'Objectif'
        }
      }
    },
    skills: {
      newSkillTitle: 'Créer une nouvelle compétence',
      editSkillTitle: 'Modifier la compétence {name}',
      titleLabel: 'Nom de la compétence',
      createSkill: 'Créer une compétence',
      editSkill: 'Mettre à jour la compétence',
      stepper: {
        title: 'Titre et image de couverture',
        titleLabel: 'Nom de la compétence',
        coverImageChooser: 'Choisissez une image de couverture pour la compétence',
        description: 'Description de la compétence',
        levels: 'Niveaux de la compétence',
        info: {
          title: 'Ajoutez un titre et une image de couverture pour la compétence ici. Vous pourrez le modifier à l\'avenir.',
          description: 'Ajoutez la description de la compétence ici. Il est possible de la modifier à l\'avenir.',
          levels: 'Vous pouvez définir un niveau unique ou sélectionner plusieurs niveaux et définir une description différente pour chacun d\'eux. <strong>Tous ces paramètres peuvent être modifiés par la suite.</strong>'
        },
        createSkill: 'Créer une compétence',
        editSkill: 'Modifier la compétence',
        levelTypesLabel: 'Types de niveaux',
        uniqueLevelLabel: 'Niveau unique',
        multipleLevelLabel: 'Niveaux multiples',
        addNewSkillLevelButton: 'Ajouter un niveau'
      }
    },
    groups: {
      newGroupTitle: 'Créer un nouveau groupe',
      editGroupTitle: 'Modifier le groupe {name}',
      titleLabel: 'Nom du groupe',
      createGroup: 'Créer un groupe',
      editGroup: 'Mettre à jour le groupe',
      titleErrorMessage: 'Le titre du groupe est requis',
      maximumCharactersErrorMessage: 'Limite maximale de caractères dépassée.',
      stepper: {
        title: 'Titre du groupe',
        titleLabel: 'Nom du groupe',
        description: 'Description du groupe',
        users: 'Utilisateurs du groupe',
        courses: 'Cours du groupe',
        learningPaths: 'Parcours d\'apprentissage du groupe',
        info: {
          title: 'Ajoutez un titre du groupe ici. Vous pourrez le modifier à l\'avenir',
          description: 'Ajoutez la description du groupe ici. Il est possible de la modifier à l\'avenir.',
          users: 'Vous pouvez ajouter et supprimer des utilisateurs ici.',
          courses: 'Attribuer des cours au groupe',
          learningPaths: 'Attribuer des parcours d\'apprentissage au groupe'
        },
        addUserToGroupButton: 'Ajouter un utilisateur',
        removeUserToGroupButton: 'Supprimer un utilisateur',
        createGroup: 'Créer un groupe',
        editGroup: 'Mettre à jour le groupe'
      }
    },
    statusMessages: {
      enrolledWithSuccess: 'Utilisateur {name} inscrit avec succès',
      enrolledWithError: 'Il y a eu une erreur lors de l\'inscription de {name} : {errorText}',
      unenrolledWithSuccess: 'Utilisateur {name} désinscrit avec succès',
      unenrolledWithError: 'Il y a eu une erreur lors de la désinscription de {name} : {errorText}',
      learningPathAssignedWithSuccess: 'Utilisateur {name} affecté au parcours d\'apprentissage avec succès',
      learningPathAssignedWithError: 'Il y a eu une erreur lors de l\'attribution du parcours d\'apprentissage à l\'utilisateur {name} : {errorText}',
      learningPathDeletedWithSuccess: 'Parcours d\'apprentissage {name} supprimé avec succès',
      learningPathDeletedWithError: 'Il y a eu une erreur lors de la suppression du parcours d\'apprentissage : {errorText}',
      newSkillCreated: 'Compétence {name} créée avec succès',
      skillUpdated: 'Compétence {name} mise à jour avec succès',
      skillCreatedWithError: 'Il y a eu une erreur lors de la création de la compétence {name} : {errorText}',
      skillAssignedToLearningPathWithSuccess: 'Compétence {name} affectée au parcours d\'apprentissage avec succès',
      skillAssignedToLearningPathWithError: 'Il y a eu une erreur lors de l\'attribution de la compétence au parcours d\'apprentissage : {errorText}',
      skillAssignedToUserWithSuccess: 'Compétence {name} affectée à l\'utilisateur {userName} avec succès',
      skillAssignedToUserWithError: 'Il y a eu une erreur lors de l\'attribution de la compétence {name} à l\'utilisateur {userName} : {errorText}',
      skillUpdatedWithError: 'Il y a eu une erreur lors de la mise à jour de la compétence {name} : {errorText}',
      addedToGroupWithSuccess: 'Utilisateur {userName} ajouté au groupe {groupName} avec succès',
      addedToGroupWithError: 'Il y a eu une erreur lors de l\'ajout de l\'utilisateur {userName} au groupe {groupName} : {errorText}',
      removedFromGroupWithSuccess: 'Utilisateur {userName} retiré du groupe {groupName} avec succès',
      removedFromGroupWithError: 'Il y a eu une erreur lors du retrait de l\'utilisateur {userName} du groupe {groupName} : {errorText}',
      newGroupCreated: 'Groupe {name} créé avec succès',
      groupCreatedWithError: 'Il y a eu une erreur lors de la création du groupe {name} : {errorText}',
      groupUpdated: 'Groupe {name} mis à jour avec succès',
      groupUpdatedWithError: 'Il y a eu une erreur lors de la mise à jour du groupe {name} : {errorText}',
      groupAssignedToUserWithSuccess: 'Utilisateur {userName} ajouté au groupe {name} avec succès',
      groupAssignedToUserWithError: 'Il y a eu une erreur lors de l\'attribution de l\'utilisateur {userName} au groupe {name} : {errorText}',
      skillRemovedFromLearningPathWithSuccess: 'Compétence {name} retirée du parcours d\'apprentissage avec succès',
      skillRemovedFromLearningPathWithError: 'Il y a eu une erreur lors du retrait de la compétence du parcours d\'apprentissage : {errorText}',
      skillRemovedFromUserWithSuccess: 'Compétence {name} retirée de l\'utilisateur {userName} avec succès',
      skillRemovedFromUserWithError: 'Il y a eu une erreur lors du retrait de la compétence de l\'utilisateur {userName} : {errorText}',
      groupRemovedFromUserWithSuccess: 'Utilisateur {userName} retiré du groupe {name} avec succès',
      groupRemovedFromUserWithError: 'Il y a eu une erreur lors du retrait de l\'utilisateur {userName} du groupe {name} : {errorText}',
      groupDeletedWithSuccess: 'Groupe {name} supprimé avec succès',
      groupDeletedWithError: 'Il y a eu une erreur lors de la suppression du groupe {name} : {errorText}',
      skillDeletedWithSuccess: 'Compétence {name} supprimée avec succès',
      skillDeletedWithError: 'Il y a eu une erreur lors de la suppression de la compétence {name} : {errorText}'
    },
    dialogs: {
      courseOwnersTitle: 'Propriétaires et éditeurs de cours',
      courseOwnersTable: {
        username: 'Email de l\'utilisateur',
        role: 'Rôle',
        creatorRole: 'Créateur',
        editorRole: 'Éditeur'
      },
      enrollButton: {
        text: 'Inscrire',
        title: {
          course: 'Inscrire les utilisateurs au cours',
          learningPath: 'Inscrire les utilisateurs au parcours d\'apprentissage'
        }
      },
      enrollNowButton: {
        text: 'Inscrivez-vous maintenant!',
        title: 'Inscrire tout le monde dans le groupe maintenant'
      },
      linkButton: {
        text: 'Lier',
        title: 'Inscrire automatiquement les utilisateurs une fois associés au groupe'
      },
      unlinkButton: {
        text: 'Dissocier',
        title: 'Désinscrire automatiquement les utilisateurs une fois dissociés du groupe'
      },
      unenrollButton: {
        text: 'Désinscrire',
        title: {
          course: 'Désinscrire les utilisateurs du cours',
          learningPath: 'Désinscrire les utilisateurs du parcours d\'apprentissage'
        }
      },
      checkProgress: {
        text: 'Vérifier la progression',
        title: {
          course: 'Vérifier la progression de l\'apprenant sur le cours',
          learningPath: 'Vérifier la progression de l\'apprenant sur le parcours d\'apprentissage'
        }
      },
      assignButton: {
        text: 'Associer',
        title: {
          course: 'Associer le groupe au cours',
          learningPath: 'Associer le groupe au parcours d\'apprentissage'
        }
      },
      unassignButton: {
        text: 'Dissocier',
        title: {
          course: 'Dissocier le groupe du cours',
          learningPath: 'Dissocier le groupe du parcours d\'apprentissage'
        }
      },
      addAdminButton: {
        text: 'Ajouter en tant qu\'éditeur',
        title: {
          courseAdmins: 'Ajouter l\'utilisateur en tant qu\'éditeur de cours'
        }
      },
      removeAdminButton: {
        text: 'Retirer le rôle d\'éditeur',
        title: {
          courseAdmins: 'Retirer l\'utilisateur de la liste des éditeurs de cours'
        }
      },
      explanationGroups: {
        course: 'Cliquez sur le bouton <strong>Associer</strong> pour associer un groupe au cours. ' +
          'Après cela, tous les nouveaux utilisateurs ajoutés au groupe seront automatiquement inscrits au cours.' +
          '<br>Cliquez sur le bouton <strong>Inscrire</strong> pour inscrire tous les utilisateurs actuels du groupe au cours.',
        learningPath: 'Cliquez sur le bouton <strong>Associer</strong> pour associer un groupe au parcours d\'apprentissage. ' +
          'Après cela, tous les nouveaux utilisateurs ajoutés au groupe seront automatiquement inscrits au parcours d\'apprentissage. ' +
          '<br>Cliquez sur le bouton <strong>Inscrire</strong> pour inscrire tous les utilisateurs actuels du groupe au parcours d\'apprentissage.'
      },
      explanationUsers: {
        course: 'Cliquez sur le bouton <strong>Inscrire</strong> pour inscrire un utilisateur au cours. L\'utilisateur recevra un email.' +
          '<br>Cliquez sur le bouton <strong>Désinscrire</strong> pour désinscrire un utilisateur du cours.',
        learningPath: 'Cliquez sur le bouton <strong>Inscrire</strong> pour inscrire un utilisateur au parcours d\'apprentissage. L\'utilisateur recevra un email.' +
          '<br>Cliquez sur le bouton <strong>Désinscrire</strong> pour désinscrire un utilisateur du parcours d\'apprentissage.',
        courseAdmins: 'Cliquez sur le bouton <strong>Ajouter en tant qu\'éditeur</strong> pour faire de l\'utilisateur l\'administrateur du cours.' +
          '<br>Cliquez sur le bouton <strong>Retirer le rôle d\'éditeur</strong> pour retirer un utilisateur de la liste des administrateurs de cours.'
      },
      enrollUsersTitle: 'Inscrire des utilisateurs',
      enrollGroupsTitle: 'Inscrire des groupes',
      addCourseAdminsTitle: 'Ajouter des éditeurs de cours',
      status: {
        groupAssociated: {
          success: {
            course: 'Le groupe {name} a été associé avec succès au cours.',
            learningPath: 'Le groupe {name} a été associé avec succès au parcours d\'apprentissage.'
          },
          error: {
            course: 'Il y a eu une erreur lors de l\'association du groupe {name} avec le cours : {err}.',
            learningPath: 'Il y a eu une erreur lors de l\'association du groupe {name} avec le parcours d\'apprentissage : {err}.'
          }
        },
        groupUnassociated: {
          success: {
            course: 'Le groupe {name} a été dissocié avec succès du cours.',
            learningPath: 'Le groupe {name} a été dissocié avec succès du parcours d\'apprentissage.'
          },
          error: {
            course: 'Il y a eu une erreur lors de la dissociation du groupe {name} du cours : {err}.',
            learningPath: 'Il y a eu une erreur lors de la dissociation du groupe {name} du parcours d\'apprentissage : {err}.'
          }
        },
        groupEnrolled: {
          success: {
            course: 'Les utilisateurs du groupe {name} ont été inscrits avec succès au cours.',
            learningPath: 'Les utilisateurs du groupe {name} ont été inscrits avec succès au parcours d\'apprentissage.'
          },
          error: {
            course: 'Il y a eu une erreur lors de l\'inscription des utilisateurs du groupe {name} au cours : {err}.',
            learningPath: 'Il y a eu une erreur lors de l\'inscription des utilisateurs du groupe {name} au parcours d\'apprentissage : {err}.'
          }
        },
        enrolled: {
          success: {
            course: 'L\'utilisateur {name} a été inscrit avec succès au cours.',
            learningPath: 'L\'utilisateur {name} a été inscrit avec succès au parcours d\'apprentissage.'
          },
          error: {
            course: 'Il y a eu une erreur lors de l\'inscription de l\'utilisateur {name} au cours : {err}.',
            learningPath: 'Il y a eu une erreur lors de l\'inscription de l\'utilisateur {name} au parcours d\'apprentissage : {err}.'
          }
        }
      },
      generic: {
        createdOn: 'Créé le :',
        updatedOn: 'Dernière vue :',
        startedOn: 'Commencé le :',
        finishedOn: 'Terminé le :',
        searchCourses: 'Rechercher des cours',
        resetFilters: 'Réinitialiser les filtres'
      },
      cloneOrShare: {
        title: 'Cloner ou Partager le Cours',
        toCurrentWorkspace: 'Cloner {name} dans l\'espace de travail actuel',
        toOtherWorkspace: 'Cloner {name} dans un autre espace de travail',
        chooseWorkspace: 'Choisissez l\'espace de travail pour cloner ou partager le cours',
        cloneCourseExplanation: '<strong>Cloner</strong> {courseName} dans l\'espace de travail {workspaceName} : le cours sera cloné et géré dans l\'espace de travail {workspaceName}.',
        shareCourseExplanation: '<strong>Partager</strong> {courseName} dans l\'espace de travail {workspaceName} : le cours sera partagé avec {workspaceName}. Tous les changements introduits dans l\'espace de travail actuel seront propagés à l\'espace de travail {workspaceName}.',
        cloneButton: 'Cloner le cours',
        shareButton: 'Partager le cours',
        cloningCourseOverlay: 'Le cours {name} est en cours de clonage...',
        sharingCourseOverlay: 'Le cours {name} est en cours de partage...',
        courseCloneSuccess: 'Le cours {name} a été cloné avec succès.',
        courseCloneError: 'Une erreur est survenue lors du clonage du cours {name} : {err}.',
        courseShareSuccess: 'Le cours {name} a été partagé avec succès.',
        courseShareError: 'Une erreur est survenue lors du partage du cours {name} : {err}.'
      },
      translateCourse: {
        title: 'Traduire le Cours',
        languageLabel: 'Choisir la langue',
        contextLabel: 'Fournir un contexte ou des instructions',
        translateButtonLabel: 'Traduire',
        overlayText: 'Le cours {name} est en cours de traduction. Cela prendra du temps. Vous pouvez fermer cette fenêtre et vous serez averti lorsque la traduction sera terminée.',
        warning: 'Veuillez noter qu\'il s\'agit d\'une fonctionnalité <strong>BÊTA</strong>. Certaines leçons, en particulier dans les <strong>grands cours</strong>, peuvent ne pas être traduites avec précision. Par conséquent, une vérification humaine sera toujours nécessaire.'
      }
    }
  },
  analytics: {
    welcome: 'Bienvenue dans la section analytique!',
    pleaseIntroduce: 'Veuillez introduire les numéros {number1} et {number2} dans la section "Entrez le code en deux parties" et cliquez sur entrer'
  },
  tourSteps: {
    snackbar: {
      title: 'Commencez la visite d\'édition de cours',
      description: 'Vous pouvez toujours recommencer cette visite en actualisant la page ou en désactivant et réactivant le mode édition',
      startButton: 'Commencer',
      cancelButton: 'Fermer'
    },
    labels: {
      buttonSkip: 'Passer la visite',
      buttonPrevious: 'Précédent',
      buttonNext: 'Suivant',
      buttonStop: 'Terminer'
    },
    adminCourses: {
      createNewCourse: 'Cliquez ici pour <strong>créer un nouveau cours</strong>',
      importJSON: 'Cliquez ici pour <strong>importer un cours au format JSON</strong>',
      listOfCourses: 'Cours que vous pouvez gérer',
      paginationCourses: 'Naviguez dans la liste des cours'
    },
    editingMenu: {
      resetButton: 'Cliquez sur ce bouton pour réinitialiser les dernières modifications',
      saveButton: 'Cliquez sur ce bouton pour enregistrer les dernières modifications',
      publishButton: 'Cliquez sur ce bouton pour rendre le cours disponible ou indisponible pour les étudiants'
    },
    demoCourseEditing: {
      title: 'Visite d\'édition de cours',
      changeTitle: {
        title: '',
        content: 'Cliquez ici pour changer le titre du cours'
      },
      changeDescription: {
        title: '',
        content: 'Cliquez ici pour changer la description du cours. N\'hésitez pas à utiliser la barre d\'outils d\'édition en haut de la page pour styliser votre texte, ajouter des puces, des images et des liens.'
      },
      addModule: {
        title: '',
        content: 'Cliquez ici pour ajouter un nouveau module au cours. Il apparaîtra en tant que dernier module.'
      },
      addLecture: {
        title: '',
        content: 'Cliquez ici pour ajouter une nouvelle leçon au module. Ce sera la dernière leçon du module, mais vous pouvez utiliser le glisser-déposer pour la déplacer où vous le souhaitez.'
      },
      changeModuleTitle: {
        title: '',
        content: 'Vous pouvez facilement changer le titre du module en cliquant ici et en commençant à taper.'
      },
      changeModuleDescription: {
        title: '',
        content: 'Commencez à taper pour changer la description du module. Utilisez la barre d\'outils en haut pour styliser votre texte. Gardez à l\'esprit que la description du module doit être courte et concise.'
      },
      saveCourse: {
        title: '',
        content: 'Cliquez ici pour enregistrer les dernières modifications du cours.'
      },
      changeLectureTitle: {
        title: '',
        content: 'Cliquez et tapez ici pour changer le titre de la leçon.'
      },
      changeLectureDescription: {
        title: '',
        content: 'Vous pouvez facilement changer la description de la leçon (ou la supprimer complètement) en tapant ici. N\'hésitez pas à utiliser la barre d\'outils en haut pour styliser votre texte. Essayez de garder les descriptions des leçons courtes et concises.'
      },
      resetChanges: {
        title: '',
        content: 'Cliquez ici pour réinitialiser les modifications que vous avez apportées depuis la dernière fois que vous avez enregistré le cours.'
      },
      publishCourse: {
        title: '',
        content: 'Rendez le cours visible ou invisible pour les apprenants de cet espace de travail.'
      },
      unpublishCourse: {
        title: '',
        content: 'Cachez le cours pour les apprenants de cet espace de travail.'
      },
      copyLecture: {
        title: '',
        content: 'Cliquez ici pour copier la leçon dans le presse-papiers.'
      },
      copyModule: {
        title: '',
        content: 'Cliquez ici pour copier le module dans le presse-papiers – le module complet avec toutes ses leçons sera copié. Vous pourrez ensuite le coller après n\'importe quel module de n\'importe quel cours de cet espace de travail.'
      },
      pasteLecture: {
        title: '',
        content: 'Cliquez ici pour coller la leçon copiée après celle-ci. La leçon restera dans le presse-papiers, vous pourrez donc la coller encore et encore. La leçon copiée reste dans le presse-papiers jusqu\'à ce que vous en copiiez une autre.'
      },
      pasteModule: {
        title: '',
        content: 'Cliquez ici pour coller le module copié après celui-ci. Le module restera dans le presse-papiers, vous pourrez donc le coller après d\'autres modules également. Le module copié reste dans le presse-papiers jusqu\'à ce que vous en copiiez un autre.'
      },
      deleteLecture: {
        title: '',
        content: 'Cliquez ici pour supprimer cette leçon. Gardez à l\'esprit que vous ne pourrez pas supprimer les leçons si les étudiants ont déjà interagi avec elles!'
      },
      deleteModule: {
        title: '',
        content: 'Cliquez ici pour supprimer ce module. Le module entier avec toutes ses leçons disparaîtra. Gardez à l\'esprit cependant que vous ne pourrez pas supprimer un module qui a déjà des progrès d\'étudiants.'
      },
      changeModuleAvailableDates: {
        title: '',
        content: 'Cliquez ici pour changer les dates de disponibilité du module. Double-cliquez sur une date - le module sera disponible à partir de la date choisie. Cliquez une fois sur une date suivie d\'un autre clic sur la date suivante - le module sera disponible pendant les dates choisies.'
      },
      dragModule: {
        title: '',
        content: 'Cliquez et faites glisser pour repositionner ce module. Vous pourrez tester cette fonctionnalité après avoir terminé la visite.'
      },
      dragLecture: {
        title: '',
        content: 'Cliquez et faites glisser pour repositionner cette leçon dans un module. Vous pourrez tester cette fonctionnalité après avoir terminé la visite.'
      },
      changeCourseInfo: {
        content: 'Cliquez ici pour changer les informations de base du cours, telles que les dates disponibles, le taux de réussite, etc.'
      },
      editCourseTags: {
        content: 'Ajoutez ou supprimez des tags du cours. Ces tags seront utilisés pour filtrer les cours.'
      },
      editCourseGamification: {
        content: 'Cliquez ici pour pouvoir ajouter et modifier les réalisations du cours.'
      },
      switchEditingMode: {
        content: 'Utilisez ce bouton pour basculer entre les modes édition et visualisation.'
      },
      useEditorToolbar: {
        content: 'Utilisez la barre d\'outils de l\'éditeur pour changer le style du texte, ajouter des images, des puces et des listes à votre texte.'
      },
      goToLecture: {
        content: 'Suivez le lien sur chaque élément de leçon pour accéder à l\'édition de la leçon'
      }
    }
  },
  sectionsExamples: {
    richText: {
      title: 'Titre de la section',
      content: 'Lorem ipsum dolor sit amet, <strong>consetetur sadipscing elitr</strong>, sed diam <em>nonumy eirmod tempor</em> invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
    }
  },
  accessibility: {
    configForVisualImpairments: 'Configuration pour les utilisateurs malvoyants',
    changeFontSize: 'Changer la taille de la police',
    siteBackToNormal: 'Version régulière du site',
    changeColorOfTheWebsite: 'Changer la couleur du site',
    exampleBackgroundFont: 'L\'exemple de l\'apparence du texte',
    exampleHeader1: 'Titres niveau 1',
    exampleHeader2: 'Titres niveau 2',
    changeImagesLook: 'Changer l\'apparence des images',
    exampleImagesLook: 'L\'exemple de l\'apparence des images'
  },
  validation: {
    url: {
      required: 'L\'URL est requise',
      valid: 'L\'URL doit être valide'
    }
  },
  notifications: {
    title: 'Notifications',
    clearAllButton: 'Marquer tout comme lu',
    statuses: {
      INACTIVE_USER_COURSES: 'Inactivité'
    },
    actions: {
      clear: 'Effacer',
      markAsRead: 'Marquer comme lu'
    },
    noNotificationsToShow: 'Il n\'y a pas de notifications à afficher'
  },
  header: {
    menu: {
      home: 'Accueil',
      courses: 'Cours',
      accessibility: 'Accessibilité',
      toggleDarkMode: 'Activer/Désactiver le mode sombre',
      profileSubtitle: {
        admin: 'Admin',
        courseAdmin: 'Admin de cours',
        courseEditor: 'Éditeur de cours',
        learner: 'Apprenant',
        adminViewNonAdmin: 'Admin<br><span class="caption">(vu en tant qu\'étudiant)</span>',
        courseAdminViewNonAdmin: 'Admin de cours<br><span class="caption">(vu en tant qu\'étudiant)</span>',
        courseEditorViewNonAdmin: 'Éditeur de cours<br><span class="caption">(vu en tant qu\'étudiant)</span>'
      },
      create: {
        course: 'Cours',
        learningPath: 'Parcours d\'apprentissage',
        skill: 'Compétence',
        group: 'Groupe',
        users: 'Utilisateurs'
      },
      languages: {
        uk: 'Українська',
        pt: 'Português',
        en: 'English (US)',
        en_gb: 'English (GB)',
        de: 'Deutsch',
        pl: 'Język polski',
        fr: 'Française',
        ru: 'русский'
      },
      languagesShort: {
        uk: 'UA',
        pt: 'PT',
        en: 'EN',
        en_gb: 'EN (GB)',
        de: 'DE',
        pl: 'PL',
        fr: 'FR',
        ru: 'RU'
      }
    }
  },
  preCourseSurvey: {
    title: 'Sondage préalable au cours',
    subtitleNotStarted: 'Veuillez remplir ce sondage. Après l\'avoir rempli, vous pourrez commencer le cours!',
    subtitleFinished: 'Vous pouvez changer la réponse à votre sondage préalable au cours.',
    subtitleEditing: 'Modifier le sondage préalable au cours.',
    editSurveyButton: 'Modifier',
    finishEditSurveyButton: 'Terminer la modification',
    buttonTitle: 'Sondage préalable au cours',
    addNewSurveyQuestion: 'Ajouter une nouvelle question de sondage',
    editCourseSurvey: 'Dans cette section, vous pouvez ajouter ou modifier un sondage de cours obligatoire. ' +
      'Ce sondage apparaîtra sous forme de pop-up pour les apprenants avant qu\'ils ne puissent commencer le cours.',
    fillCourseSurvey: 'Vous devez terminer le sondage avant de continuer le cours.',
    fillEditCourseSurvey: 'Vous pouvez modifier vos réponses au sondage du cours.',
    filters: {
      button: 'Filtrer par questions',
      title: 'Filtrer par questions et réponses du cours',
      selectQuestionLabel: 'Sélectionnez une question',
      selectAnswerLabel: 'Sélectionnez une réponse',
      addFilterButton: 'Ajouter un filtre',
      clearFilterButton: 'Effacer',
      applyFilterButton: 'Appliquer'
    }
  },
  postCourseSurvey: {
    title: 'Sondage post-cours',
    subtitleNotStarted: 'Veuillez remplir ce sondage. Après l\'avoir rempli, vous pourrez terminer le cours !',
    subtitleFinished: 'Vous pouvez modifier vos réponses au sondage post-cours.',
    subtitleEditing: 'Modifier le sondage post-cours.',
    editSurveyButton: 'Modifier',
    finishEditSurveyButton: 'Terminer la modification',
    buttonTitle: 'Sondage post-cours',
    addNewSurveyQuestion: 'Ajouter une nouvelle question de sondage',
    editCourseSurvey: 'Dans cette section, vous pouvez ajouter ou modifier un sondage post-cours obligatoire. ' +
      'Ce sondage apparaîtra sous forme de pop-up pour les apprenants avant qu\'ils ne puissent obtenir leur certificat ou terminer le cours.',
    fillCourseSurvey: 'Vous devez terminer le sondage avant de pouvoir terminer le cours.',
    fillEditCourseSurvey: 'Vous pouvez modifier vos réponses au sondage du cours.'
  },
  getReadyAi: {
    title: 'Créez votre cours avec l\'IA',
    description: 'Tapez votre email et le sujet du cours et nous vous enverrons par email le lien vers votre cours généré par l\'IA.',
    usernameLabel: 'Votre email',
    courseTopicLabel: 'Sujet du cours',
    generateButton: 'Créer mon cours',
    afterGenerateButton: 'Cliquez sur le bouton ci-dessus et vous recevrez bientôt un email.',
    topicRequired: 'Le sujet est requis',
    setPasswordTitle: 'Définissez votre mot de passe',
    setPasswordDesc: 'Après avoir défini votre mot de passe, vous serez redirigé vers votre cours.',
    setPasswordButton: 'Définir le mot de passe et se connecter',
    tokenLabel: 'Jeton',
    passwordLabel: 'Mot de passe',
    courseCreationRequestSuccess: 'Votre cours est en cours de création. ' +
      'Vous pouvez quitter cette page maintenant. ' +
      'Vous recevrez un email dès que votre cours sera terminé!'
  },
  meta: {
    titles: {
      pages: {
        admin: 'Administration',
        courses: 'Cours',
        dashboard: 'Tableau de bord',
        signin: 'Connexion',
        learnerProfile: 'Profil de l\'apprenant',
        onboardingWithAi: 'Intégration avec IA',
        organization: 'Organisation',
        paswordreset: 'Réinitialiser le mot de passe',
        printableCourse: 'Cours Imprimable'
      }
    }
  }
}
