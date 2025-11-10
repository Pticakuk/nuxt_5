export default {
  actions: {
    delete: {
      module: 'Modul löschen',
      lecture: 'Vorlesung löschen',
      section: 'Abschnitt löschen',
      question: 'Frage löschen',
      bubble: 'Blase löschen',
      option: 'Option löschen',
      branchSection: 'Zweigabschnitt löschen'
    },
    add: {
      module: 'Modul hinzufügen',
      lecture: 'Vorlesung hinzufügen',
      section: 'Abschnitt hinzufügen',
      question: 'Frage hinzufügen',
      bubble: 'Blase hinzufügen',
      option: 'Option hinzufügen',
      branchSection: 'Zweigabschnitt hinzufügen'
    },
    duplicate: {
      module: 'Modul duplizieren',
      lecture: 'Vorlesung duplizieren',
      section: 'Abschnitt duplizieren',
      question: 'Frage duplizieren',
      bubble: 'Blase duplizieren',
      option: 'Option duplizieren',
      branchSection: 'Zweigabschnitt duplizieren'
    },
    moveUp: {
      module: 'Modul nach oben verschieben',
      lecture: 'Vorlesung nach oben verschieben',
      section: 'Abschnitt nach oben verschieben',
      question: 'Frage nach oben verschieben',
      bubble: 'Blase nach oben verschieben',
      option: 'Option nach oben verschieben',
      branchSection: 'Zweigabschnitt nach oben verschieben'
    },
    moveDown: {
      module: 'Modul nach unten verschieben',
      lecture: 'Vorlesung nach unten verschieben',
      section: 'Abschnitt nach unten verschieben',
      question: 'Frage nach unten verschieben',
      bubble: 'Blase nach unten verschieben',
      option: 'Option nach unten verschieben',
      branchSection: 'Zweigabschnitt nach unten verschieben'
    },
    copy: {
      module: 'Modul kopieren',
      lecture: 'Vorlesung kopieren',
      section: 'Abschnitt kopieren',
      question: 'Frage kopieren',
      bubble: 'Blase kopieren',
      option: 'Option kopieren',
      branchSection: 'Zweigabschnitt kopieren',
      courseUrl: 'kopieren',
      courseUrlCopied: 'kopiert',
      url: 'kopieren',
      copyUrl: 'URL kopieren',
      urlCopied: 'kopiert',
      openInNewTab: 'In neuem Tab öffnen'
    },
    paste: {
      module: 'Modul einfügen',
      lecture: 'Vorlesung einfügen',
      section: 'Abschnitt einfügen',
      question: 'Frage einfügen',
      bubble: 'Blase einfügen',
      option: 'Option einfügen',
      branchSection: 'Zweigabschnitt einfügen'
    },
    course: {
      config: 'Konfiguration bearbeiten',
      edit: 'Kursinhalte bearbeiten',
      clone: 'Kurs klonen',
      invite: 'Benutzer oder Gruppen einladen',
      progress: 'Benutzerfortschritt prüfen',
      deleteInProgress: 'Kurs {name} wird gelöscht...',
      archiveInProgress: 'Kurs {name} wird archiviert...',
      unarchiveInProgress: 'Kurs {name} wird aus dem Archiv wiederhergestellt...'
    },
    lectureVisibility: {
      lecture: 'Sichtbarkeit der Vorlesung'
    }
  },
  openAi: {
    useThisTextButton: 'Verwende diesen Text',
    useThisImageButton: 'Verwende diese Bilde',
    usingOpenAiInfoBox: 'Wir verwenden die <strong>Open AI</strong>-API, um Sie bei Ihren Routineaufgaben zu unterstützen. Stellen Sie sicher, dass Sie die Integration mit Ihrem Open AI-Konto eingerichtet haben, und beginnen Sie, diesen Helfer für so ziemlich alles zu verwenden. ' +
      'Sie können zum Beispiel so etwas wie <strong>"Titel für einen Kurs zum Onboarding"</strong> oder <strong>"Schreiben Sie eine Beschreibung für eine Einführungsvorlesung zu Salesforce"</strong> ' +
      'oder <strong>"Generieren Sie eine Single-Choice-Frage zu Soft Skills"</strong>. Verwenden Sie Ihre natürliche Sprache, überprüfen Sie das Ergebnis, ' +
      'korrigieren Sie den Wortlaut bei Bedarf, entfernen Sie unnötige Leerzeichen und verwenden Sie ihn in Ihrem Kurs.',
    textCompletionExplanation: 'Verwenden Sie diesen Dialog, um Text zu jedem Thema zu generieren. Der Text ist auf {charLimit} Zeichen begrenzt.',
    imageCreationExplanation: 'Verwenden Sie diesen Dialog, um ein Bild zu jedem Thema zu generieren. Bitte beachten Sie, dass die Bildgenerierung derzeit in der Beta-Version ist. Das Bild wird mit der Größe {imageSize} generiert.',
    errorGeneratingContent: 'Es gab einen Fehler beim Erstellen von Inhalten: {err}',
    configureTheIntegration: ' | Bitte konfigurieren Sie die Integration mit OpenAI API im Abschnitt Admin/Integrationen.'
  },
  trialWorkspaceBanner: '😃 Du hast immer noch {daysLeft} Tage übrig von deiner Probezeit. Schalten Sie jetzt das volle Potenzial Ihres personalisierten Arbeitsplatzes frei!🚀',
  notAuthenticatedWorkspaceBanner: 'Bitte anmelden, um das volle Potenzial Ihres personalisierten Arbeitsplatzes freizuschalten!',
  trialWorkspaceCTA: 'Lass es uns tun!',
  notAuthenticatedWorkcpaceCTA: 'Registrieren',
  trialExpired: '😢 Deine Probezeit ist abgelaufen. Sie können keine keine Admin-Funktionen mehr erkunden. Schalten Sie jetzt das volle Potenzial Ihres personalisierten Arbeitsplatzes frei!',
  toast: {
    courseSaveSuccess: 'Kurs wurde gespeichert',
    courseCreatedSuccess: 'Kurs {name} erfolgreich erstellt!',
    courseCreatedError: 'Es gab einen Fehler beim Erstellen eines Kurses {name}: {err}',
    coursePublishSuccess: 'Kurs wurde veröffentlicht',
    courseUnpublishSuccess: 'Kurs wurde unveröffentlicht',
    courseCloneSuccess: 'Kurs wurde geklont',
    courseDeleteSuccess: 'Kurs {name} wurde gelöscht',
    courseArchiveSuccess: 'Kurs {name} wurde erfolgreich archiviert',
    courseUnarchiveSuccess: 'Kurs {name} wurde erfolgreich aus dem Archiv wiederhergestellt',
    courseArchiveError: 'Beim Archivieren des Kurses ist ein Fehler aufgetreten',
    courseDeleteError: 'Es ist ein Fehler beim Löschen des Kurses unterlaufen',
    courseSaveError: 'Beim Speichern des Kurses {name} ist ein Fehler aufgetreten: {err}',
    courseEditingLockError: 'Dieser Kurs wird bereits von {name}bearbeitet. Wollen Sie übernehmen? {name}\'s Fortschritt geht verloren.',
    courseEditingLockForced: 'Die Bearbeitung dieses Kurses wurde von {name} übernommen.',
    courseEditingLockByUserError: 'Sie bearbeiten diesen Kurs auf einem anderen Gerät oder Tab. Möchten Sie übernehmen?' +
      ' Ihr Fortschritt auf einem anderen Gerät oder Tab geht dabei verloren.',
    editAnyway: 'Übernehmen!',
    courseEditLockSuccess: 'Kursbearbeitungsmodus für aktuellen Benutzer erfolgreich aktiviert',
    courseEditUnlockSuccess: 'Kursbearbeitungsmodus für aktuellen Benutzer ausgeschaltet',
    courseUrlCopiedSuccessfully: 'Kurs-URL erfolgreich kopiert.',
    urlCopiedSuccessfully: 'URL erfolgreich kopiert.',
    courseUrlCopiedError: 'Kurs-URL konnte nicht kopiert werden: {err}.',
    urlCopiedError: 'Kurs-URL konnte nicht kopiert werden: {err}.',
    previewWillAppearHere: 'Die Vorschau des Codes wird hier angezeigt',
    checkInPopup: 'Ein Popup einchecken',
    workspaceChangesSaved: 'Arbeitsbereichskonfiguration erfolgreich gespeichert.',
    workspaceChangesSaveError: 'Beim Speichern der Arbeitsbereichsänderungen ist ein Fehler aufgetreten: {err}.',
    courseOrderUpdated: 'Die Reihenfolge der Kurse wurde erfolgreich aktualisiert: Der Kurs {courseName} wird in der Reihenfolge {order} angezeigt.',
    courseOrderUpdateError: 'Beim Aktualisieren der Kursreihenfolge ist ein Fehler aufgetreten: {err}.',
    userNameChangedSuccessfully: 'Der Name des Benutzers {name} wurde erfolgreich geändert.',
    userNameChangedError: 'Beim Ändern des Namens des Benutzers {name} ist ein Fehler aufgetreten: {err}',
    userEmailChangedSuccessfully: 'Die E-Mail-Adresse des Benutzers {name} wurde erfolgreich geändert.',
    userEmailChangedError: 'Beim Ändern der E-Mail-Adresse des Benutzers {name} ist ein Fehler aufgetreten: {err}',
    workspaceDoesntExist: 'Der Workspace {name} existiert nicht.',
    giveUpWithSuccess: 'Der Kurs {name} wurde erfolgreich abgebrochen',
    giveUpError: 'Es gab einen Fehler beim Aufgeben des Kurses {name}: {err}',
    archiveSuccess: 'Der Kurs {name} wurde erfolgreich archiviert',
    archiveError: 'Es gab einen Fehler beim Archivieren des Kurses {name}: {err}',
    unArchiveSuccess: 'Der Kurs {name} wurde erfolgreich wiederhergestellt',
    unArchiveError: 'Es gab einen Fehler bei der Wiederherstellung des Kurses {name}: {err}',
    certificateCantBeOpen: 'Beim Abrufen des Zertifikats mit der UUID {uud} ist ein Fehler aufgetreten: {err}',
    courseTranslationSuccess: 'Der Kurs {name} wurde erfolgreich übersetzt.',
    courseTranslationError: 'Beim Übersetzen des Kurses {name} ist ein Fehler aufgetreten: {err}',
    tagDeleteSuccess: 'Tag {name} wurde erfolgreich gelöscht',
    tagDeleteError: 'Beim Löschen des Tags {name} ist ein Fehler aufgetreten: {err}',
    resetTimerSuccess: 'Fragetimer erfolgreich zurückgesetzt.',
    defaultSaveError: 'Beim Speichern von {name} ist ein Fehler aufgetreten',
    forceSaveError: {
      CANNOT_DELETE_ALL_MODULES: 'Sie sind dabei, alle Module des Kurses zu löschen. Diese Aktion kann nicht rückgängig gemacht werden. Sind Sie sicher, dass Sie fortfahren möchten?',
      CANNOT_DELETE_LEARNING_STEP: 'Es gibt Benutzerfortschritte bei den Schritten, die Sie löschen möchten. Diese Aktion kann nicht rückgängig gemacht werden. Sind Sie sicher, dass Sie fortfahren möchten?',
      CANNOT_DELETE_LECTURES: 'Es gibt Benutzerfortschritte bei den Vorlesungen, die Sie löschen möchten. Diese Aktion kann nicht rückgängig gemacht werden. Sind Sie sicher, dass Sie fortfahren möchten?',
      CANNOT_DELETE_QUESTION_ANSWER: 'Es gibt Benutzerfortschritte bei den Quizzen, die Sie löschen möchten. Diese Aktion kann nicht rückgängig gemacht werden. Sind Sie sicher, dass Sie fortfahren möchten?',
      CANNOT_DELETE_SECTION: 'Es gibt Benutzerfortschritte in den Kursabschnitten, die Sie löschen möchten. Diese Aktion kann nicht rückgängig gemacht werden. Sind Sie sicher, dass Sie fortfahren möchten?',
      CANNOT_DELETE_LEVELS: 'Es gibt Fähigkeiten, die mit Benutzern auf Assets verbunden sind, die Sie löschen möchten. Diese Aktion kann nicht rückgängig gemacht werden. Sind Sie sicher, dass Sie fortfahren möchten?',
      CANNOT_DELETE_GROUP: 'Sie sind dabei, eine Gruppe zu löschen, die mit Assets (Benutzern, Kursen oder Lernpfaden) verknüpft ist. Alle diese Verbindungen gehen verloren. Sind Sie sicher, dass Sie fortfahren möchten?',
      DEFAULT: 'Es gibt Benutzerfortschritte bei den Assets, die Sie löschen möchten. Diese Aktion kann nicht rückgängig gemacht werden. Sind Sie sicher, dass Sie fortfahren möchten?'
    }
  },
  welcome: '<span class="welcome">Welcome</span> to the online education<br>and knowledge sharing world',
  forum: {
    title: 'Forum',
    sortingOptions: {
      newest: 'Neueste zuerst',
      oldest: 'Älteste zuerst',
      mostPopular: 'Am beliebtesten'
    },
    comment: 'Posten',
    leaveComment: 'Einen Kommentar hinterlassen',
    actions: {
      edit: 'Bearbeiten',
      follow: 'Folgen',
      reply: 'Antworten',
      delete: 'Löschen'
    },
    uploadImage: 'Bild hochladen',
    socialLearning: {
      DISABLEd: 'Forum deaktiviert',
      DISQUS: 'Forum Disqus aktivieren',
      WORKADEMY: 'Forum Workademy aktivieren'
    },
    toCourse: 'Zurück zum Kurs',
    toForum: 'Zum Kursforum',
    supportedText: 'Wählen Sie {supported} Datei',
    generalThreads: 'Allgemeine Threads',
    lecturesThreads: 'Vorlesungs-Threads'
  },
  dialogs: {
    editRichText: 'Formatierten Text ändern',
    saveAndClose: 'Speichern und schließen',
    confirmationDialog: {
      defaultDialog: {
        title: 'Sicher?',
        confirmButton: 'Ja!',
        cancelButton: 'Abbrechen'
      },
      confirmQuitScormCourse: {
        title: 'Möchten Sie den Kurs wirklich beenden?',
        subtitle: 'Keine Sorge! Sie können dort fortfahren, wo Sie aufgehört haben.',
        confirmButton: 'Ja, jetzt beenden'
      },
      confirmQuitScormLecture: {
        title: 'Sind Sie sicher, dass Sie die Lektion beenden möchten?',
        subtitle: 'Keine Sorge! Sie können die Lektion dort fortsetzen, wo Sie aufgehört haben.',
        confirmButton: 'Ja, jetzt beenden'
      }
    }
  },
  share: {
    shareDialogTitle: 'Teilen',
    doneButtonText: 'Fertig'
  },
  layout: {
    getStarted: 'Los geht\'s!'
  },
  landing: {
    welcome: 'Willkommen in der Welt der Online Education',
    goToCatalog: 'Zum Kurskatalog',
    learnAndShare: 'Lerne und teile dein Wissen mit {title}',
    viewAllCatalog: 'Katalogübersicht',
    allowsToLearnAndTeach: 'Mit {title} kannst du Lernen und Lehren',
    beingABridge: 'Sei die Brücke zwischen Wissenden und Leuten, die das Wissen brauchen',
    learnIconText: 'Hör niemals auf zu lernen mit {title}',
    everywhereIconText: 'Verfügbar auf jedem Gerät, jedem System, überall',
    communityIconText: 'Sei Teil der Community',
    teachIconText: 'Die Beste Art zu lernen ist "Lernen durch Lehren"',
    learn: 'Lerne',
    everywhere: 'Überall',
    community: 'Gemeinschaft',
    teach: 'Lehre',
    areYouReady: 'Bist du bereit?',
    viewAllCourses: 'Zur Kursübersicht',
    viewMyDashboard: 'Zum Dashboard',
    comingSoon: 'KOMMT BALD! Bald kannst du die Kursübersicht hier sehen!< Bleiben Sie dran!',
    catalogueTagline: '',
    footerDisclaimer: ''
  },
  dashboard: {
    dashboardTitle: 'Dashboard',
    coursesInProgressTitle: 'Kurse',
    coursesInProgressSubtitle: 'Kurse, für die Sie derzeit eingeschrieben sind',
    coursesCompletedTitle: 'Kurse',
    coursesCompletedSubtitle: 'Kurse, die bereits abgeschlossen wurden',
    learningPathsInProgressTitle: 'Lernpfade',
    learningPathsCompleted: 'Lernpfade',
    achievementsTitle: 'Erfolge',
    achievementsDescription: 'Klicke auf eine Erfolgskarte, um deinem Avatar einen neuen Rahmen hinzuzufügen.',
    searchLearningPaths: 'Suche Lernpfade',
    filters: {
      searchLearningPaths: 'Suche Lernpfade',
      search: {
        learningPaths: 'Suche nach Lernpfaden',
        courses: 'Suche nach Kursen'
      },
      showCoursesTitle: {
        all: 'Kurse anzeigen <strong>(alle)</strong>',
        completed: 'Kurse anzeigen <strong>(abgeschlossen)</strong>',
        active: 'Kurse anzeigen <strong>(aktiv)</strong>',
        archived: 'Zeige Kurse <strong>(archiviert)</strong>'
      },
      showAllCourses: 'Alle Kurse anzeigen',
      showActiveCourses: 'Aktive Kurse anzeigen',
      showCompletedCourses: 'Abgeschlossene Kurse anzeigen',
      showArchivedCourses: 'Archivierte Kurse anzeigen',
      showLearningPathsTitle: {
        all: 'Lernpfade anzeigen <strong>(alle)</strong>',
        completed: 'Lernpfade anzeigen <strong>(abgeschlossen)</strong>',
        active: 'Lernpfade anzeigen <strong>(aktiv)</strong>',
        archived: 'Zeige <strong>(archiviert)</strong> Lernpfad'
      },
      showAllLearningPaths: 'Alle Lernpfade anzeigen',
      showActiveLearningPaths: 'Aktive Lernpfade anzeigen',
      showCompletedLearningPaths: 'Abgeschlossene Lernpfade anzeigen',
      showArchivedLearningPaths: 'Archivierte Lernpfade anzeigen'
    },
    notFound: {
      course: {
        notEnrolled: {
          title: 'Sie sind in keinen Kursen eingeschrieben.',
          description: 'Überprüfen Sie die Kursliste, um sich für Kurse einzuschreiben.'
        },
        notFound: {
          title: 'Die Kurse konnten nicht gefunden werden.',
          description: 'Ändern Sie die Suchkriterien.'
        },
        noCompleted: {
          title: 'Sie haben noch keinen Kurs abgeschlossen.',
          description: 'Überprüfen Sie Ihre aktiven Kurse und versuchen Sie, sie abzuschließen.'
        }
      },
      learningPath: {
        notEnrolled: {
          title: 'Sie sind in keinen Lernpfaden eingeschrieben.'
        },
        notFound: {
          title: 'Die Lernpfade konnten nicht gefunden werden.',
          description: 'Ändern Sie die Suchkriterien.'
        },
        noCompleted: {
          title: 'Sie haben noch keinen Lernpfad abgeschlossen.',
          description: 'Überprüfen Sie Ihre aktiven Kurse und versuchen Sie, sie abzuschließen.'
        }
      }
    }
  },
  quiz: {
    questionNFrom: 'Frage {questionNumber} von {quizLength}',
    questionN: 'Frage {questionNumber}',
    checkTheAnswer: 'Antwort überprüfen',
    checkTheDroppable: 'Ich bin fertig!',
    associationQuestionExplanation: 'Klicken Sie auf den Artikel und dann auf die entsprechende Kategorie. Klicken Sie auf die ANTWORT ÜBERPRÜFEN Schaltfläche, wenn Sie fertig sind.',
    multipleAssociationQuestionExplanation: 'Klicken Sie auf den Artikel und dann auf die entsprechende Kategorie. Ein Artikel kann zu mehreren Kategorien gehören. Klicken Sie auf die ANTWORT ÜBERPRÜFEN Schaltfläche, wenn Sie fertig sind.',
    sortingQuestionExplanation: 'Ziehen Sie die Elemente an die richtige Stelle, um sie in die richtige Reihenfolge zu bringen. Klicken Sie auf die ANTWORT ÜBERPRÜFEN Schaltfläche, wenn Sie fertig sind.',
    numberOfQuestions: 'Keine Quizpunkte| Ein Punkt| {n} Punkte',
    noTries: 'Überprüfen Sie Ihre Antworten',
    noCorrect: 'Versuchen Sie es nochmal!',
    allCorrect: 'Gut gemacht! Sie haben alle Fragen richtig beantwortet!',
    allCorrectVariants: [
      'Gut gemacht!',
      'Bravo!',
      'Ausgezeichnet!'
    ],
    numberOfCorrect: 'Weiter so | Weiter so! Du hast 1 richtige Antwort von {length} Fragen | Weiter so! Du hast {correct} Antworten von {length} Fragen',
    usedAttempts: 'Sie haben {wrongCount} von {wrongLimit} möglichen Versuchen verwendet',
    questionType: 'Fragetyp',
    newAnswer: 'Ändern Sie hier den Text der Antwort',
    addAnswer: 'Frage hinzufügen',
    answerText: 'Text beantworten',
    explanationText: 'Erklärung vom Text',
    correctAnswerSize: 'Richtige Antworten: {size}',
    questionWeight: 'Fragengewichtung',
    questionPoints: 'Punkte: {points}',
    questionTimerTimeUp: 'Die Zeit ist um! Sie haben die Frage nicht in der vorgegebenen Zeit abgeschlossen. Bitte wenden Sie sich an Ihren Administrator, um Hilfe zu erhalten.',
    questionTimerMessage: 'Sie haben <strong class="primary--text">{time}</strong>, um diese Frage zu beantworten. Stellen Sie sicher, dass Sie bereit sind, bevor Sie beginnen.',
    feedback: {
      correct: 'Richtig',
      tryAgain: 'Falsch, versuche es erneut',
      incorrect: 'Falsch',
      noAttemptsLeft: 'Falsch, keine Versuche mehr übrig'
    },
    types: {
      MultipleChoice: 'Mehrfachauswahl',
      SingleChoice: 'Einzelauswahl',
      Categorization: 'Einzelverband',
      MultipleAssociation: 'Mehrfache Assoziation',
      SingleOrdering: 'Sortierung',
      OpenAnswer: 'Open Answer'
    },
    itemsToSortLabel: 'Artikel zu sortieren',
    sortedItemsLabel: 'Sortierte Artikel',
    itemsToCategoriseLabel: 'Artikel zum Sortieren',
    categories: 'Kategorien',
    categoriesQuestion: {
      itemNumber: 'Artikel',
      categoryNumber: 'Kategorie'
    },
    uploadFile: 'Datei hochladen',
    typeYourAnswerHere: 'Geben Sie hier Ihre Antwort ein',
    yourFile: 'Ihre Datei',
    submitAnswer: 'Antwort einreichen',
    fileURL: 'Datei-URL',
    noFileUploaded: 'Noch keine Datei hochgeladen',
    answerSubmittedWaiting: 'Antwort eingereicht. Warten auf Bewertung. Sie können diese noch bearbeiten.',
    answerSubmittedWrongAttemptsLeft: 'Antwort eingereicht. Sie ist falsch. Sie können diese noch bearbeiten.',
    answerSubmittedWrong: 'Antwort eingereicht. Sie ist falsch. Sie können diese nicht mehr bearbeiten.',
    answerSubmittedRight: 'Ihre Antwort ist richtig.',
    showCorrectAnswer: 'Richtige Antwort anzeigen'
  },
  courseTree: {
    courseOutlineTitle: 'Kursübersicht',
    courseWillStart: '✌️Dieser Kurs startet am {date} 🗓.<br>Bitte verwenden Sie das Menü, um diesen Bildschirm zu verlassen 👋',
    courseFinished: 'Dieser Kurs endete am {date} 🗓.<br> Bitte verwenden Sie das Menü, um diesen Bildschirm zu verlassen 👋',
    coursePendingAproval: 'Ihre Anmeldung für diesen Kurs erfordert eine Genehmigung durch einen Kursadministrator.<br>Bitte verwenden Sie das Menü, um diesen Bildschirm zu verlassen 👋',
    modulesTitle: 'Kursstruktur',
    sidebarTitle: 'Wichtige Informationen',
    tagsTitle: 'Kurs- Tags',
    moduleAvailableFrom: 'Verfügbar ab {from}',
    moduleAvailableFromUntil: 'Verfügbar ab {from} bis {until}',
    moduleAvailableFromUntilMobile: '{from}-{until}',
    practicalInfo: {
      availableFrom: 'Dieser Kurs startet am:',
      availableFromPast: 'Dieser Kurs startete am:',
      availableUntil: 'Dieser Kurs endet am:',
      availableUntilPast: 'Die Anmeldung bis:',
      expiresIn: 'Dieser Kurs läuft am:',
      doesntExpire: 'Dieser Kurs läuft nie ab',
      courseDuration: 'Kursdauer:',
      quizzesText: 'Dieser Kurs hat insgesamt:',
      startedCourse: 'Kursstart:',
      numberOfQuestions: 'Keine Punkte | {n} Punkt | {n} Punkte',
      numberOfAnswers: 'Sie haben bis jetzt keine Punkte verdient| Sie haben einen Punkt verdient | Sie haben {questions} Punkte verdient!',
      yourScore: 'Punktzahl:',
      addToCalendar: 'Zum Kalender hinzufügen'
    },
    gamification: {
      gamificationTitle: 'Ihre Erfolge',
      moreXToGo: '{x} zu gehen',
      checkAllAchievements: 'Klicken Sie hier, um ihre Erfolge zu sehen',
      achievementUnlocked: 'Sie haben gerade einen neuen Erfolg freigeschaltet!',
      goToAchievement: 'Gehe zu Erfolgen'
    },
    lectureIsNotDoneExplanation: 'Markieren Sie die Vorlesung als gesehen und beantworte die Vorlesungsfragen, um zur nächsten Vorlesung fortzufahren',
    lectureIsNotSeenExplanation: 'Markieren Sie die Vorlesung als gesehen, um zur nächsten übergehen zu können.',
    lectureIsNotStartedExplanation: 'Die nächste Vorlesung ist noch nicht verfügbar.'
  },
  lecture: {
    workbook: 'Anleitung',
    quiz: 'Quiz',
    quizDescription: 'Einleitung für den Quiz',
    previous: 'Vorherige Lektion',
    next: 'Nächste Lektion',
    duration: 'Länge {duration} Minuten',
    durationUnknown: 'Zeit zu vervollständigen: unbekannt',
    numberOfQuestions: 'Keine Fragen| 1 Frage| {size} Fragen',
    questionsSize: '0 frage | 1 frage | {size} frage',
    goToLecture: 'Zur Lektion',
    goToQuiz: 'Zum Quiz gehen',
    questionAnswersSize: 'Fragen: {total}',
    questionsAnswered: '{right}/{total} Fragen',
    pointsRight: '{right}/{total} Punkte',
    continue: 'Fortsetzen',
    liveLecture: {
      addToGoogleCalendar: 'Zu Google Kalender hinzufügen',
      addToOutlookCalendar: 'Zu Office365 Outlook Kalender hinzufügen',
      addToMicrosoftLiveCalendar: 'Zu Microsoft Live Calendar hinzufügen',
      joinLecture: 'Klicken Sie hier um die Lektion zu starten',
      startsIn: 'Diese Lektion beginnt',
      started: 'Die Lektion hat schon begonnen ',
      passed: 'Diese Lektion ist vorbei',
      areYouGoing: 'Gehst du?',
      yes: 'Ja',
      no: 'Nein'
    },
    dialog: {
      isTyping: 'schreibt'
    }
  },
  buttons: {
    add: 'Hinzufügen',
    register: 'Registrieren',
    open: 'Öffnen',
    new: 'Neu!',
    exploreCourse: 'Entdecken',
    testCertificate: 'Zertifikat anzeigen',
    printableVersion: 'Druckbare Version öffnen',
    clone: 'Duplizieren',
    resume: 'Weiter',
    enroll: 'Anmelden',
    enrollAndPay: 'Einschreiben und Bezahlen',
    payAndEnroll: 'Anmelden und Bezahlen {amount} {currency}',
    goToCourse: 'Zum Kurs',
    resumeCourse: 'Kurs fortsetzen',
    viewCourse: 'Kurs ansehen',
    loginAndEnroll: 'Anmelden',
    login: 'Einloggen',
    cancel: 'Abbrechen',
    giveUp: 'Kurs beenden',
    archive: 'Archivieren',
    unarchive: 'Unarchive',
    archiveCourse: 'Kurs archivieren',
    unarchiveCourse: 'Kurs aus dem Archiv wiederherstellen',
    chooseLanguage: 'Wählen Sie die bevorzugte Sprache aus',
    playVideo: 'Video anzeigen',
    backToTimeline: 'Zurück zur Zeitleiste',
    nextLecture: 'Nächste Lektion',
    subscribeToUpdates: 'Get notified',
    subscribeToUpdatesBig: 'I want to be notified on this course',
    goToTheMarketplace: 'Go to the Marketplace',
    goToTheLecture: 'Gehe zur Vorlesung {lecture}',
    goToTheLastLecture: 'Kurs fortsetzen',
    goToTheLastQuiz: 'Zertifizierung fortsetzen',
    startCourse: 'Kurs starten',
    startCertification: 'Start certification',
    getCertificate: 'Zertifikat erhalten',
    openCertificate: 'Zertifikat anzeigen',
    reactivate: 'Reaktivieren',
    completeCourse: 'Kurs abschließen',
    backToTheCourse: 'Zur Hauptseite des Kurses',
    viewAllCourses: 'Alle Kurse',
    viewMyDashboard: 'Dashboard',
    viewMyCourses: 'Meine Kurse',
    topNewCourses: 'Neueste Kurse',
    goToSettings: 'Meine Einstellungen',
    goToLearnerProfile: 'Profil',
    goToOrganization: 'Organisation',
    goToAdmin: 'Admin Bereich',
    toggleDark: 'Dunkelmodus einschalten',
    toggleCompleted: 'Anzeige abgeschlossen',
    toggleViewAsNonAdmin: 'Ansicht als Nicht- Administrator feststellen',
    logout: 'Ausloggen',
    languages: 'Sprachen',
    toggleEditingMode: 'Bearbeitungsmodus',
    deleteText: 'Löschen',
    save: 'Speichern',
    markAsSeen: 'Als gesehen markieren',
    attendedLiveLecture: 'Ich habe am Webinar teilgenommen',
    lectureSeen: 'Du hast die Lektion abgeschlossen',
    manageCourses: 'Kurse verwalten',
    manage: 'Verwalten',
    edit: 'Bearbeiten',
    export: 'Kurs exportieren',
    ok: 'Ok',
    switchSignUpToRegister: 'Ich habe noch kein Konto .',
    switchSignUpToLogin: 'Ich bin schon registriert.',
    continue: 'Fortsetzen',
    continueWithFacebook: 'Continue with Facebook',
    continueWithGoogle: 'Continue with Google',
    close: 'Close',
    forceUpdate: 'Ja, fortfahren!',
    showDetails: 'Details anzeigen',
    deleteCourse: 'Kurs löschen',
    translateCourse: 'Kurs übersetzen',
    selectCourse: 'Kurs auswählen',
    deleteLearningPath: 'Lernpfad löschen',
    downloadCertificate: 'Zertifikat herunterladen',
    connect: 'Verbinden',
    reconnect: 'Neu verbinden',
    sync: 'Synchronisieren',
    invite: 'Einladen',
    showUsers: 'Nutzer anzeigen',
    hideUsers: 'Nutzer verbergen',
    previousLecture: 'Vorherige Lektion',
    exitFullscreenLectureMode: 'Vollbildmodus beenden',
    enterFullscreenLectureMode: 'in den Vollbildmodus wechseln',
    download: 'Herunterladen',
    downloadForGroup: 'Gruppenbericht herunterladen',
    addField: 'Feld hinzufügen',
    delete: 'Löschen',
    startOver: 'Auswahl ändern',
    back: 'Zurück',
    continueWithOAuth: 'Fortsetzen mit {workspaceName}',
    comingSoon: 'Kommt bald!',
    answerTypeform: 'Beantworten Sie dies',
    proceed: 'Vorrgehen',
    exploreLearningPath: 'Entdecken',
    startNow: 'Start Now',
    uploadImage: 'Bild hochladen',
    addNew: 'Neue hinzufügen',
    iAmDone: 'Ich bin fertig!',
    clear: 'Klar',
    editCoverPhoto: 'Titelbild bearbeiten'
  },
  courses: {
    duration: '{duration}',
    modulesTitle: 'Kursbeschreibung',
    hours: 'Stunden',
    minutes: 'Minuten | Minute | Minuten',
    courses: 'Alle Kurse',
    courseNotSelected: 'Kurs ist nicht ausgewählt',
    myCourses: 'Mein Lernen',
    module: 'Modul {moduleNumber}',
    notEnrolled: 'Du bist noch in keinem Kurs angemeldet!',
    noCompleted: 'Sie haben noch keine Kurse abgeschlossen',
    clickToCatalog: 'Klicke hier, um die Kursübersicht zu sehen',
    exploreCourses: 'Kurse entdecken',
    numberOfModules: 'Module',
    finishAndGetCert: 'Zum Zertifikat',
    validUntil: 'Gültig bis {expireDate}',
    completedCoursesTitle: 'Abgeschlossene Kurse',
    completedCoursesSubtitle: 'Kurse, die Sie bereits abgeschlossen haben',
    courseIsCertifiable: 'Zertifikat am Ende des Kurses',
    achievementsEnabled: 'Leistungen für den Kursfortschritt',
    noCourses: 'Keine Kurse gefunden',
    goToDashboard: 'Prüfen Sie Ihr Dashboard auf Ihre Kurse',
    noLearningPaths: 'Keine Lernpfade gefunden',
    noCoursesWithSearch: 'Keine Kurse gefunden',
    tooltipShareUrl: 'URL teilen',
    titleCopyText: 'URL in die Zwischenablage kopieren',
    titleTextCopied: 'URL kopiert',
    buttonCopyText: 'Kopieren',
    buttonTextCopied: 'Kopiert',
    searchHeader: 'Suchen',
    searchLabel: 'Kurse durchsuchen...',
    aiSearchLabel: 'Kurse mit KI suchen...',
    aiSearchButton: 'KI-Suche',
    classicSearchButton: 'Klassische Suche',
    aiSearchDescription: 'Versteht natürliche Sprache. Beispiel: "Zeig mir Kurse für Ingenieure, um das Zeitmanagement zu verbessern."',
    classicSearchDescription: 'Sucht nach exakten Schlüsselwörtern in Kurstiteln, Beschreibungen und Inhalten.',
    totalFound: 'Keine Kurse gefunden | <strong>{n}</strong> Kurs gefunden | <strong>{n}</strong> Kurse gefunden',
    tagsHeader: 'Tags ({tags} ausgewählt)',
    durationHeader: 'Dauer ({durations} ausgewählt)',
    resetFilters: 'Filter zurücksetzen',
    filtersTitle: 'Filter',
    applyFilters: 'Filter anwenden',
    durations: {
      less30: 'weniger als 30 Minuten',
      between30and2: 'zwischen 30 Minuten und 2 Stunden',
      between2and4: 'zwischen 2 und 4 Stunden',
      more4: 'mehr als 4 Stunden'
    },
    tags: {
      loadMore: 'Mehr laden...',
      loadLess: 'Weniger laden...',
      noTags: 'Keine Tags gefunden',
      deleteTag: 'Tag löschen'
    },
    anonymousNotAllowed: 'Sie müssen für den Kurs eingeschrieben sein, um die Inhalte sehen zu können',
    badge: {
      template: 'Schablone',
      external: 'extern',
      scorm: 'SCORM',
      requiresApproval: 'Genehmigung erforderlich',
      archived: 'archiviert',
      inactive: 'inaktiv',
      paymentMissing: 'Zahlung fehlt'
    },
    myCoursesPast: 'Abgeschlossene Kurse',
    paidCourses: {
      payNowHeader: 'Jetzt bezahlen {amount} {currency}',
      payNowDescription: 'Nach der Zahlung haben Sie Zugang zum Kurs',
      payNowButton: 'Jetzt Bezahlen',
      paymentSucceeded: 'Die Zahlung für den Kurs {name} war erfolgreich',
      paymentFailed: 'Die Zahlung für den Kurs {name} ist fehlgeschlagen: {err}',
      finalisingPayment: 'Ihre Zahlung wird abgeschlossen, bitte einen Moment warten...⏳',
      voucherCode: 'Gutschein-Code',
      applyButton: 'Anwenden',
      payWithLiqpay: 'Mit LiqPay Bezahlen',
      payAmountCurrency: 'Zahlen Sie {amount} {currency}',
      vatIncluded: '(inkl. MwSt.)',
      applyPromocode: 'Wenn Sie einen Aktionscode haben, geben Sie ihn bitte unten in das Feld ein.',
      confirmSettingsAndProceed: 'Einstellungen bestätigen und fortfahren',
      wrongTaxId: 'Falsches Steuernummer-Format. Das korrekte Format ist <strong>{correctFormat}</strong>.<br>Aktualisieren Sie die Seite und versuchen Sie es erneut.'
    },
    failedCourse: {
      failedCourseTitle: 'Wichtige Aktualisierung zu Ihrem Kurs',
      failedCourseTooltip: 'Bitte starten Sie den Kurs neu, um ihn abschließen zu können.',
      failedCourseAlertMessage: 'Leider ist es nicht möglich, genügend Punkte für ein Zertifikat zu erzielen. Sie haben {correct} von {total} Punkten erreicht, aber es reicht nicht aus, um die Anforderung von {minRate}% zu erfüllen.',
      failedCourseOneTimeEnrolment: 'Kursneustart nicht möglich. Kontaktieren Sie den Administrator, um sich erneut anzumelden.',
      restartCourseButton: 'Kurs neu starten'
    },
    headers: {
      titleAndDescription: 'Kurstitel und Beschreibung',
      quizProgress: 'Fragenfortschritt',
      title: 'Kurstitel',
      description: 'Kursbeschreibung',
      ordering: 'Kursreihenfolge',
      progress: 'Kursfortschritt',
      createTime: 'Erstellt',
      updateTime: 'Aktualisiert',
      lecturesProgress: 'Kursfortschritt'
    },
    published: 'Veröffentlicht'
  },
  learningPaths: {
    noCompleted: 'Sie haben noch keinen Lernpfad abgeschlossen',
    noAssigned: 'Sie haben noch keine zugewiesenen Lernpfade',
    numberOfCourses: 'Keine Kurse | {completed}/1 Kurs | {completed}/{n} Kurse',
    achievementsLabel: 'Erfolge',
    skillsLabel: 'Skills',
    certificateLabel: 'Zertifikat am Ende',
    progressLabel: 'Fortschritt',
    totalFound: 'Keine Lernpfade gefunden | <strong>{n}</strong> Lernpfade gefunden | <strong>{n}</strong> Lernpfade gefunden',
    item: {
      title: 'Titel und Beschreibung',
      steps: 'Schritte',
      progress: 'Fortschritt',
      actions: 'Aktionen'
    }
  },
  auth: {
    or: 'ODER',
    dontHaveAnAccountYet: 'Haben Sie noch kein Konto?',
    enterPassword: 'Passwort',
    enterPhone: 'Telefonnummer eingeben',
    atLeastChars: 'Mindestens {numberCharacters} Buchstaben',
    forgotPassword: 'Passwort vergessen?',
    resetPassword: 'Passwort zurücksetzen!',
    passwordResetSuccess: 'Prüfe deine E-Mail um das Passwort zurückzusetzen!',
    nameLabel: 'Name',
    namePlaceholder: 'Matthias Adler',
    emailLabel: 'E-Mail',
    join: 'Registrieren!',
    alreadyHaveAccount: 'Hast du schon einen Account?',
    passwordChangeSuccess: 'Passwort wurde erfolgreich zurückgesetzt.',
    loginNow: 'Sie können sichjetzt einloggen!',
    token: 'Token',
    newPassword: 'Neues Passwort',
    repeatPassword: 'Gaben Sie das neue Passwort erneut ein',
    passwordRequired: 'Passwort zurücksetzen',
    passwordRule: 'Das Passwort muss mindestens 8 Buchstaben. Außerdem darf es nicht mehr als {maxChars} Buchstaben haben.',
    passwordShouldMatch: 'Die Passwörter müssen übereinstimmen.',
    emailRequired: 'E-Mail zurücksetzen',
    emailValid: 'Die eingegebene E-Mail ist ungültig',
    nameRequired: 'Name zurücksetzen',
    nameLessThan: 'Der Name darf nicht länger als {MAX_NAME_LENGTH} Zeichen sein',
    passwordValid: 'Das Passwort muss mindestens 8 Buchstaben. Außerdem darf es nicht mehr als {MAX_PASSWORD_LENGTH} Buchstaben haben.',
    repeatPasswordRequired: 'Bitte wiederholen Sie das Passwort',
    passwordsDontMatch: 'Passwörter stimmen nicht überein',
    phoneValid: 'Telefonnummer soll gültig sein',
    profilePicture: 'Profilbild',
    pictureLabel: 'Profilbild- URL',
    pictureHint: 'Kopieren Sie den Link zu Ihrem bevorzugtem Profilbild',
    phone: 'Telefonnummer',
    city: 'Stadt',
    street: 'Straße',
    postalCode: 'PLZ',
    country: 'Land',
    addressAndPhoneTitle: 'Adresse und Telefonnummer',
    taxIdTitle: 'Steuer-ID',
    changePassword: 'Passwort ändern',
    oldPasswordLabel: 'Altes Passwort',
    newPasswordLabel: 'Neues Passwort',
    repeatPasswordLabel: 'Passwort wiederholen',
    phoneLabels: {
      countrySelectorLabel: 'Landesvorwahl',
      countrySelectorError: 'Wählen Sie ein Land aus',
      phoneNumberLabel: 'Telefonnummer',
      example: 'Beispiel :'
    },
    consentRule: 'Sie müssen der Datenschutzerklärung zustimmen, um fortzufahren',
    consentLabel: 'Ich stimme der <a href="{url}" target="_blank">privacy policy</a> zu',
    loginSuccessful: 'Anmeldung erfolgreich',
    registrationSuccessful: 'Registration erfolgreich',
    loginTitle: 'Anmelden',
    registerTitle: 'Registrieren',
    loginDisclaimer: '',
    registerDisclaimer: '',
    whereToGoTitle: 'Welcher Workademy Workspace?',
    whereToGoSubtitle: 'Geben Sie den Namen Ihres Workademy Workspace ein. Zum Beispiel "workademy"',
    workspaceNameLabel: 'Workspace Name',
    workspaceNamePlaceholder: 'workademy',
    backToRipplingButton: 'Zurück zu Rippling',
    proceedToWorkspaceButton: 'Weiter zu {name}',
    loginWithRippling: 'Mit Rippling anmelden',
    loginWithDeel: 'Mit Deel anmelden',
    createNewWorkspace: 'Oder erstellen Sie einen neuen Arbeitsbereich'
  },
  errors: {
    59: 'Unzulässige Angaben oder Nutzername und Passwort ungültig',
    1000: 'Dieser Nutzername existiert bereits',
    1001: 'Unbekannter User',
    1002: 'Nutzername oder Passwort ungültig',
    1003: 'Nutzername oder Passwort ungültig',
    1004: 'Falsche Anmeldeinformationen',
    1100: 'Unzulässiger Token',
    1101: 'Token abgelaufen',
    1300: 'Bedingung nicht erfüllt: Kurs noch nicht abgeschlossen.',
    1500: 'Gutschein mit Code {code} nicht gefunden',
    1501: 'Der Gutschein mit diesem Code {code} wurde bereits verwendet',
    9904: 'Konnte sich nicht bei Personio authentifizieren. Überprüfen Sie die Anmeldeinformationen für die Verbindung.',
    9905: 'Bitte überprüfen Sie Ihre Facebook E-Mail Einstellungen. E-Mail muss verifiziert sein.',
    '-1': 'Unbekannter Fehler aufgetreten',
    popup_closed_by_user: 'Das Popup Fenster für die Google- Authentifizierung wurde geschlossen.',
    LOCKED: 'Ihr Konto ist gesperrt.Bitte setzen Sie ihr Passwort zurück.',
    PASSWORD_DONT_MATCH: 'Ihr Passwort stimmt nicht überein',
    1302: 'Sie sind bereits für diesen Kurs eingeschrieben. Eine Anmeldung zu diesem Kurs ist nur einmal möglich.',
    1307: 'Es gibt eine Abkühlungszeit von <strong>{period}</strong>, bevor du diesen Kurs erneut belegen kannst.',
    1308: 'Anmeldung nicht möglich: Sie haben diesen Kurs bereits abgeschlossen, und die Anmeldung ist nur einmal möglich.'
  },
  footer: {
    platformDescription: '<strong>{title}</strong> ist eine E-Learning Plattform, die sich auf die neuesten Trends für Wissenstransfer und Motivation dafür fokussiert',
    links: 'Links',
    contacts: 'Kontakte',
    github: 'GitHub',
    foundIssues: 'Haben Sie Probleme gefunden?',
    submitThem: 'Melde sie!',
    privacyUrl: 'https://www.theworkademy.com/privacy',
    workademyPrivacyLabel: 'Workademy- Datenschutzrichtlinien',
    privacyLabel: 'Datenschutzerklärung',
    contentLabel: 'Inhaltsrichtlinie',
    tacUrl: 'https://www.theworkademy.com/tac',
    workademyTacLabel: 'Allgemeine Geschäftsbedingungen von Workademy',
    tacLabel: 'Geschäftsbedingungen',
    contactUsTitle: 'Kontaktiere uns!',
    contactUsText: 'Schreib uns gern, wenn du Fragen hast oder dir ein Fehler im Kurs auffällt!',
    supportEmail: 'support@theworkademy.com',
    poweredBy: 'bereitgestellt von <a href="{companyUrl}" target="_blank" class="company-link">{company}</a>'
  },
  progress: {
    go: 'Auf geht\'s! Nur {completed} von {total}',
    nice: 'Super! {completed} von {total} Antworten bestanden! Weiter so!',
    almost: 'Fast fertig! {completed} von {total} Antworten korrekt!',
    done: 'Du bist ein Held! {completed} von {total} Antworten korrekt!',
    shorten: '{completed}/{total}',
    courseScore: 'Ihre Kurs Punktzahl: <strong>{percentage}%</strong>',
    yourProgress: 'Mein Fortschritt',
    answeredQuestions: '<strong>{score}</strong> Punkte auf richtig beantwortende Fragen',
    seenLecture: '<strong>{score}</strong> Lektionen gesehen',
    yourScore: 'Punktzahl: {score}',
    noScore: 'Dieser Kurs hat keine Quizzes',
    questionsProgress: 'Du hast {progress}% der Fragen beantwortet ({correct}/{total})',
    lecturesProgress: 'Du hast {progress}% der Vorlesungen gelesen ({correct}/{total})',
    overallProgress: 'Du hast {progressQuestions}% ({correctQuestions}/{totalQuestions}) der Fragen beantwortet und {progressLectures}% ({correctLectures}/{totalLectures}) Lektionen abgeschlossen.'
  },
  settings: {
    settings: 'Einstellungen',
    changeSettings: 'Speichern',
    changeSettingsSuccess: 'Ihre Änderungen wurden erfolgreich gespeichert!',
    changeSettingsError: 'Beim Ändern Ihrer Einstellungen ist ein Fehler aufgetreten: {err}.',
    passwordChangeSuccess: 'Ihr Passwort wurde erfolgreich geändert.',
    passwordChangeError: 'Beim Ändern Ihres Passworts ist ein Fehler aufgetreten: {err}.',
    language: 'Sprache',
    takeMeBack: 'Zurück',
    userPic: {
      change: 'Neues Profilbild hochladen (png oder jpeg)',
      add: 'Profilbild hinzufügen',
      chooseYourAvatar: 'Avatare'
    }
  },
  learnerProfile: { // REVIEW: Google translations
    learnerProfile: 'Profil',
    achievementsTitle: 'Meine Erfolge',
    skillsTitle: 'Meine Skills',
    viewAll: 'Alle anzeigen',
    courses: 'Kurse',
    learningPaths: 'Lernpfade',
    achievements: 'Erfolge',
    skills: 'Skills',
    level: 'Niveau',
    frames: 'Avatar-Rahmen',
    points: 'Kurspunkte'
  },
  organization: {
    organization: 'Meine Organisation',
    skills: 'Skills | Skills',
    members: 'Mitglied | Mitglieder',
    level: 'Niveau',
    noGroupsYet: 'Es wurden noch keine Organisationsgruppen erstellt.',
    noGroupsAdmin: 'Es wurden noch keine Gruppen erstellt. Bitte erstellen Sie Gruppen, um die Organisationsstruktur hier sehen zu können.',
    createGroupsBtn: 'Gruppen erstellen',
    points: 'Kurspunkte',
    loadMoreUsers: 'weitere Benutzer laden...'
  },
  certificates: {
    congratulations: 'Herzlichen Glückwunsch, Sie haben sich für ein Zertifikat qualifiziert!',
    eligibleHeadline: '👉 Punktzahl: {score}%. Nach Erhalt des Zertifikats endet der Kurs, aber die Materialien bleiben auf Ihrem Dashboard zugänglich.',
    eligibleHeadlineCombined: '👉 Fortschritt erreicht: {score} richtige Antworten und {lectures} abgeschlossene Vorlesungen. Nach Erreichen dieses Levels kannst du dein Zertifikat erhalten. Der Kurs endet, aber die Materialien bleiben in deinem Dashboard zugänglich.',
    youCanCancel: '👉 Sie können jetzt mit Ihrem Kurs fortfahren und Ihr Zertifikat später beanspruchen. Die Beantragungsoption bleibt verfügbar.',
    checkNameText: '⚠️ Achtung! Stellen Sie sicher, dass Ihr Name in den Einstellungen für das Zertifikat korrekt ist:',
    changeNameInSettingsText: 'Um den Namen zu korrigieren, verwenden Sie den <strong>Name Ändern</strong> Knopf und kehren Sie dann hierher zurück.',
    generateForName: 'Ich bestätige die Ausstellung des Zertifikats an <strong>{name}</strong>.',
    writeYourName: 'Das Zertifikat wird für {name} ausgestellt. Bitte geben Sie zur Bestätigung Ihren Namen erneut ein.Wenn dies nicht der richtige Name ist, ändern Sie ihn bitte zuerst in den Einstellungen',
    writeYourNameLabel: 'Geben Sie Ihren Namen ein',
    yourPercentage: 'Sie haben <strong>{score}%</strong>. Sie können immer noch versuchen, mehr zu erreichen!',
    getMoreButton: 'Zurück zum Kurs',
    notEligibleHeadline: 'Noch nicht möglich',
    notEligibleText: 'Gehen Sie zurück zum Kurs und beantworten Sie die ausstehenden Fragen.',
    notEligibleOkButton: 'OK',
    eligibleAnsweredAll: 'Du hast alle Fragen des Kurses beantwortet und kannst ihn jetzt abschließen. Nach dem Abschluss findest du den Kurs jederzeit im Bereich „Abgeschlossene Kurse“.',
    eligibleReadAll: 'Sie haben alle Vorlesungen als gelesen markiert und können den Kurs jetzt abschließen. Es wird immer im Bereich abgeschlossene Kurse verfügbar sein.',
    eligibleCancel: 'Du musst den Kurs nicht sofort abschließen – die Option bleibt immer verfügbar.',
    nameInSettingsText: 'Der Name auf dem Zertifikat ist',
    changeSettingsLinkText: 'Einstellungen ändern',
    changeNameLinkText: 'Change name',
    byProcedingWithCertGenText: 'Hiermit stimmen Sie dem Abschließen des Kurses und dem Erzeugen des Zertifikats zu.',
    instructions: 'Nachdem Sie das Zertifikat erhalten haben, werden Sie zu Ihrem Dashboard weitergeleitet. Sie können Ihre Antworten zu diesem Kurs nicht mehr sehen. Sie können sich jedoch erneut anmelden und dies wiederholen!',
    generate: 'Zertifikat',
    continueToCourse: 'Weiter zum Kurs',
    getCertificate: 'Zertifikat',
    openCertificate: 'Zertifikat öffnen',
    completeCourse: 'Kurs abschließen',
    dontGenerate: 'Abbrechen',
    certificateTitle: 'ABSCHLUSSZERTIFIKAT',
    issuedOn: 'ausgestellt am',
    toCertifyThat: 'Hiermit wird bestätigt, dass',
    hasCompletedTheCourse: 'erfolgreich den Kurs bestanden hat.',
    progress: 'abgeschlossen',
    withScore: 'with a total score of {score}%',
    ofADurationOf: 'Gesamtkurslänge: {duration}',
    withDuration: 'Gesamtkurslänge: {duration} Stunden',
    checkCertificateText: 'Die Echtheit des Zertifikats kann hier bestätigt werden:',
    wasCreatedByWorkademy: 'Der Kurs wurde erstellt von <a href="https://www.theworkademy.com" target="_blank">Workademy</a> &mdash; Academy at work, Academy that works.',
    shareMyAchievement: 'Meinen Erfolg teilen',
    sharingTitle: 'Ich habe gerade den Kurs {courseName} beendet',
    sharingQuote: 'Ich habe gerade den Kurs {courseName} beendet',
    canGetCertificate: 'Sie haben richtig beantwortet <strong>{score}</strong> von <strong>{total}%</strong> Fragen. <br> Sie können Ihr Zertifikat erhalten.',
    needMoreToGetCertificate: 'Sie müssen richtig beantworten <strong>{total}%</strong> von Fragen des Kurses. <br> Sie haben beantwortet<strong>{score}</strong>.',
    courseCompletedWithSuccess: 'Kurs {name} erfolgreich abgeschlossen!',
    youHaveToAnswerAllQuestions: 'Sie müssen alle Fragen beantworten, um den Kurs abschließen zu können.',
    youHaveToCompleteAllLectures: 'Sie müssen alle Vorlesungen absolvieren, um den Kurs abschließen zu können.',
    youHaveAnsweredAllQuestions: 'Sie haben alle Fragen des Kurses beantwortet und können den Kurs jetzt abschließen.',
    youHaveCompletedAllLectures: 'Sie haben alle Vorlesungen des Kurses abgeschlossen und können den Kurs jetzt abschließen.',
    youHaveAlreadyCompleted: 'Du kannst den Kurs jetzt abschließen.',
    youCompletedСertification: 'Sie haben diese Zertifizierung abgeschlossen',
    eligibleAllCertification: 'Sie haben alle Quizfragen erfolgreich beantwortet und können nun diese Zertifizierung abschließen. Sie wird immer im Abschnitt der abgeschlossenen Kurse verfügbar sein.',
    eligibleCancelCertification: 'Sie müssen die Zertifizierung jetzt nicht abschließen. Die Schaltfläche zum Abschließen der Zertifizierung wird immer verfügbar sein.',
    youHaveAlreadyCertificate: 'Ihr Zertifikat wurde Ihnen bereits ausgestellt. Klicken Sie auf die Schaltfläche, um darauf zuzugreifen.',
    shareOnLinkedIn: 'Zu LinkedIn hinzufügen',
    givenUpCourse: 'Anscheinend haben Sie diesen Kurs aufgegeben. Sie müssen diesen Kurs neu starten, wenn Sie ein Zertifikat erhalten möchten',
    cantFind: 'Das Zertifikat mit der UUID {uuid} konnte nicht gefunden werden.',
    proceedToMainPage: 'Zur Hauptseite gehen',
    youHaveToCompleteExternalCourse: 'Klicken Sie auf den Button, sobald Sie den Kurs abgeschlossen haben.',
    youHaveCompletedExternalCourse: 'Sie haben diesen Kurs bereits als abgeschlossen markiert',
    finishExternalCourseTitle: 'Kursabschluss bestätigen',
    finishExternalCourseSubtitle: 'Durch Klicken auf die Schaltfläche "Kurs abschließen" bestätigen Sie, dass Sie diesen Kurs abgeschlossen haben. Wenn Sie ihn noch nicht abgeschlossen haben, wählen Sie bitte "Abbrechen", um zurückzukehren und den Kurs fortzusetzen.'
  },
  vouchers: {
    introduceCode: 'Geben Sie Ihren Gutscheincode für die Anmeldung ein',
    voucherCode: 'Gutscheincode'
  },
  admin: {
    drawer: {
      adminToolsDrawer: {
        title: 'Kurs-Admin-Werkzeuge'
      }
    },
    attendance: {
      attending: 'Teilnahme:',
      notAttending: 'Nicht teilnehmen:',
      attendedLive: 'Teilgenommen:',
      seenBy: 'Gesehen von:'
    },
    enroll: {
      enrollIntoCourse: 'Benutzer in Kurs {name} einschreiben',
      enrollIntoLearningPath: 'Benutzer in Lernpfad {name} einschreiben',
      grantFreebieButton: 'Zugang gewähren',
      grantFreebieSuccess: 'Benutzer {name} wurde der Zugang zum Kurs gewährt',
      grantFreebieError: 'Beim Gewähren des Zugangs für den Benutzer {name} ist ein Fehler aufgetreten: {err}'
    },
    stepper: {
      basicInformationTitle: 'Grundlegende Informationen',
      mediaVisualsTitle: 'Medien & Visuals',
      enrollmentAccessTitle: 'Einschreibung & Zugang',
      certificationCompletionTitle: 'Zertifizierung & Abschluss',
      courseFeaturesTitle: 'Kurs & Funktionen',
      commercialSettingsTitle: 'Kommerzielle Einstellungen',
      miscellaneousTitle: 'Verschiedenes',
      externalUrlTitle: 'Quelle',

      title: 'Kurstitel *',
      titleDesc: 'Legen Sie den Namen des Kurses fest.',
      descriptionTitle: 'Beschreibung',
      descriptionDesc: 'Schreiben Sie eine kurze Zusammenfassung oder eine detaillierte Beschreibung des Kurses.',
      tagsTitle: 'Tags',
      tagsDesc: 'Fügen Sie Tags hinzu, um den Kursinhalt zu klassifizieren.',
      durationTitle: 'Dauer',
      durationDesc: 'Geben Sie die Länge des Kurses an.',
      durationLabel: 'Dauer in Minuten',
      typeTitle: 'Kurstart',
      typeDesc: 'Definieren Sie den Kurstyp, um seinen Zweck zu bestimmen. Jeder Typ ist auf einen spezifischen Lern- oder Zertifizierungsansatz zugeschnitten.',
      typeLabel: 'Kurstart auswählen',
      types: {
        base: 'Basiskurs',
        external: 'Externer Kurs',
        SCORM: 'SCORM',
        certification: 'Zertifizierungskurs',
        umbrella: 'Sammelkurs'
      },

      cardImageTitle: 'Kurskartenbild',
      cardImageDesc: 'Laden Sie das Bild hoch, das den Kurs in den Listen darstellt.',
      coverImageChooser: 'Wählen Sie das Titelbild für den Kurs',
      useDefaultCover: 'Standardbild verwenden',
      wideCoverTitle: 'Breites Kursbild',
      wideCoverDesc: 'Legen Sie das breite Titelbild für detaillierte Kursansichten fest.',

      externalTitle: 'Externe URL',
      externalDesc: 'Legen Sie eine URL fest, um Lernende zu externem Lernmaterial zu führen.',
      externalLabel: 'Link, auf den die externe Kurskarte verweist',

      anonymousAllowedTitle: 'Authentifizierungsanforderung',
      anonymousAllowedDesc: 'Entscheiden Sie, ob Benutzer sich ohne Authentifizierung anmelden können.',
      anonymousAllowedLabel: 'Anonym erlaubt',
      availableFromUntilTitle: 'Start- und Endzeiten',
      availableFromUntilDesc: 'Legen Sie die offiziellen Start- und Endzeiten des Kurses fest.',
      preEnrollAllowedTitle: 'Vorregistrierung',
      preEnrollAllowedDesc: 'Erlauben Sie Benutzern, sich vor dem Startdatum für den Kurs anzumelden.',
      preEnrollAllowedLabel: 'Vorregistrierung erlaubt',
      advancedTitle: 'Erweitert',
      enrollmentCodeTitle: 'Einschreibungscode',
      enrollmentCodeDesc: 'Aktivieren oder deaktivieren Sie die Notwendigkeit eines Codes zur Teilnahme.',
      enrollmentCodeLabel: 'Mit Einschreibungscode aktiviert',
      oneTimeEnrollmentTitle: 'Einmalige Einschreibung',
      oneTimeEnrollmentDesc: 'Geben Sie an, ob der Kurs nur einmal pro Benutzer belegt werden kann.',
      oneTimeEnrollmentLabel: 'Einmalige Einschreibung (keine Wiederholung möglich)',
      enrollmentApprovalTitle: 'Genehmigung der Einschreibung',
      enrollmentApprovalDesc: 'Legen Sie fest, ob Einschreibungen eine Genehmigung durch den Administrator erfordern.',
      enrollmentApprovalLabel: 'Einschreibung vorab genehmigen',
      recurringCourseTitle: 'Wiederkehrender Kurs',
      recurringCourseDesc: 'Definieren Sie, ob der Kurs wiederkehrend ist und das erste Wiederholungsdatum.',

      certificationTitle: 'Zertifizierungseinstellungen',
      certificationDesc: 'Aktivieren oder deaktivieren Sie Zertifizierungen für den Kurs.',
      gradeTitle: 'Notenanforderung',
      gradeDesc: 'Geben Sie den Prozentsatz an, der für die Zertifizierung erforderlich ist.',
      coolingOffPeriod: 'Abkühlzeit',
      coolingOffPeriodDesc: 'Legen Sie die Zeit fest, die Benutzer warten müssen, bevor sie den Kurs erneut versuchen können, falls sie scheitern.',
      coolingOffPeriodLabel: 'Abkühlzeit (in Stunden)',
      pointsEarnedTitle: 'Verdiente Punkte',
      pointsEarnedDesc: 'Legen Sie die Punkte fest, die Benutzer nach Abschluss des Kurses erhalten.',
      pointsEarnedLabel: 'Verdiente Punkte',

      learningSequenceTitle: 'Lernreihenfolge',
      learningSequenceDesc: 'Geben Sie an, ob das Lernen im Kurs sequenziell ist.',
      learningSequenceLabel: 'Sequenzielles Lernen (jedes Modul wird nach Abschluss des vorherigen freigeschaltet)',
      forumDiscussionTitle: 'Forendiskussion',
      forumDiscussionDesc: 'Aktivieren oder deaktivieren Sie Diskussionsforen für den Kurs.',

      paidTitle: 'Bezahlter Kurs',
      paidDesc: 'Geben Sie an, ob der Kurs kostenpflichtig ist und legen Sie den Preis fest.',
      exemptTitle: 'Kostenloser Zugang für Gruppen',
      exemptDesc: 'Benutzer, die folgenden Gruppen angehören, sind von der Zahlung befreit.',
      featuredTitle: 'Hervorgehobener Kurs',
      featuredDesc: 'Markieren Sie, ob der Kurs hervorgehoben und in einem speziellen Abschnitt angezeigt werden soll.',
      featuredLabel: 'Als hervorgehoben markieren',

      folderTitle: 'Ordner',
      folderDesc: 'Organisieren Sie Ihren Kurs in einem Ordner',
      disclaimerPopupTitle: 'Haftungsausschluss-Popup',
      disclaimerPopupDesc: 'Konfigurieren Sie das Haftungsausschluss-Popup während der Anmeldung.',
      templateTitle: 'Kursschablone',
      templateDesc: 'Geben Sie an, ob dieser Kurs von anderen Benutzern geklont oder kopiert werden kann.',
      templateLabel: 'Schablonen-Kurs',
      manualOrderTitle: 'Manuelle Reihenfolge',
      manualOrderDesc: 'Definieren Sie die manuelle Reihenfolge des Kurses in Kurslisten.',
      manualOrderLabel: 'Reihenfolge des Kurses',
      customFieldsTitle: 'Benutzerdefinierte Felder',
      customFieldsDesc: 'Fügen Sie benutzerdefinierte Felder hinzu, die für den Kurs relevant sind.',
      newFieldNameLabel: 'Feldname',
      newFieldValueLabel: 'Feldwert',
      newFieldNamePlaceholder: 'Name',
      newFieldValuePlaceholder: 'Wert',

      coverLabel: 'Titelbild',
      enterUrl: 'URL eingeben',

      certificateForAnsweredQuestions: 'Für beantwortete Fragen',
      certificateForAnsweredQuestionsInfo: 'Zertifikat für den Prozentsatz der beantworteten Fragen ausstellen',
      certificateForReadLectures: 'Für abgeschlossene Vorlesungen',
      certificateForReadLecturesInfo: 'Zertifikat nach Abschluss aller Vorlesungen ausstellen',
      passingRateLabel: 'Bestehensquote',

      modulesLabel: 'Anzahl der Module',
      lecturesLabel: 'Anzahl der Vorlesungen in jedem Modul',
      sectionsLabel: 'Anzahl der Abschnitte in jeder Vorlesung',
      createCourse: 'Kurs erstellen',
      updateCourse: 'Kurs aktualisieren',
      scormPreview: 'SCORM-Vorschau wird hier angezeigt',
      scormBeingProcessed: 'SCORM hochgeladen! Wir verarbeiten es nun, was bis zu zwei Minuten dauern kann. Sie können gerne warten oder später zurückkommen. <strong>Vergessen Sie nicht, Ihren Kurs zu speichern!</strong>',
      scormProcessedSuccessfully: 'SCORM erfolgreich verarbeitet!',
      scormProcessedError: 'Beim Verarbeiten der SCORM-Datei ist ein Fehler aufgetreten. Versuchen Sie, die Datei erneut hochzuladen.',
      oneTimeEnrollment: 'Einmalige Einschreibung',

      recurring: {
        isRecurringText: 'Dieser Kurs wiederholt sich.',
        isNotRecurringText: 'Dieser Kurs wiederholt sich nicht',
        periodLabel: 'Zeitraum der Wiederholung',
        firstExecutionLabel: 'Erste Wiedereinschreibung sollte erfolgen am:',
        firstExecutionExplanation: 'Das erste Mal, dass die Wiederholung angewendet wird. <br>' +
          'Die Lernenden, die im Kurs eingeschrieben sind und diesen bereits abgeschlossen haben, werden am diesem Datum zum ersten Mal wiedereingeschrieben.',
        amountLabel: 'Anzahl',
        timesToRepeat: 'Wiederholungsanzahl',
        periodOfRecurringText: 'Lernende müssen diesen Kurs alle ',
        saveRecurring: 'Wiederholungsinformationen speichern',
        deleteRecurring: 'Wiederholungseigenschaften entfernen',
        period: {
          MONTHLY: 'Monat | Monate',
          YEARLY: 'Jahr | Jahre'
        },
        messages: {
          createdSuccess: 'Wiederholungsplaner für Kurs {name} erfolgreich erstellt.',
          updatedSuccess: 'Wiederholungsplaner für Kurs {name} erfolgreich aktualisiert.',
          deletedSuccess: 'Wiederholungsplaner für Kurs {name} erfolgreich gelöscht.',
          createdError: 'Fehler beim Erstellen des Wiederholungsplaners für Kurs {name}: {err}.',
          updatedError: 'Fehler beim Aktualisieren des Wiederholungsplaners für Kurs {name}: {err}.',
          deletedError: 'Fehler beim Löschen des Wiederholungsplaners für Kurs {name}: {err}.'
        }
      },
      ai: {
        topicAndLocaleTitle: 'Thema und Sprache',
        contextTitle: 'Zusätzlicher Kontext',
        contextExplanation: 'Hier können Sie alles schreiben, was dazu beitragen kann, den Kurs auf die spezifischen Bedürfnisse des Unternehmens zuzuschneiden.',
        contextHint: 'Beispiel: Wir sind ein wachsendes Versicherungs-Technologieunternehmen, das nach Verkaufserfolg strebt.',
        contentSpecificationTitle: 'Inhaltsspezifikationen',
        numberOfThingsTitle: 'Inhaltspezifikation',
        topicLabel: 'Thema des Kurses',
        localeLabel: 'Sprache des Kurses',
        contextLabel: 'Zusätzlicher Kontext',
        noModulesLabel: 'Anzahl der Module',
        noTopicsLabel: 'Anzahl der Themen in jedem Modul',
        noOptionsLabel: 'Anzahl der Optionen in jeder Frage',
        noModulesHint: 'Anzahl der Module kann zwischen 1 und 10 liegen',
        noTopicsHint: 'Anzahl der Themen pro Modul darf nicht weniger als eins und nicht mehr als 5 sein',
        noOptionsHint: 'Anzahl der Optionen pro Frage darf nicht weniger als 3 und nicht mehr als 5 sein',
        specifyEveryModule: 'Geben Sie jedes Modul an, das in Ihrem Kurs erscheinen soll',
        specifyEveryModuleExplanation: 'Geben Sie den Titel jedes Moduls im Kurs an, z. B. "Grundlagen der DSGVO", "DSGVO und Versicherungstechnologie", "DSGVO für Entwickler"',
        modules: 'Module',
        lectures: 'Vorlesungen',
        questions: 'Fragen',
        businessGoalsLabel: 'Geschäftsziele des Kurses',
        businessGoalsHint: 'Beginnen Sie zu tippen, um zu suchen oder erstellen Sie Ihr eigenes Ziel',
        businessGoalsExplanation: 'Geschäftsziele sollten SMART sein – Spezifisch, Messbar, Erreichbar, Relevant, Zeitgebunden. ' +
          'Zum Beispiel, "Umsatz steigern: Erhöhe den Quartalsumsatz um 15% durch die Implementierung von fortgeschrittenem Verkaufstraining für das Team bis Ende Q2."',
        businessGoalsExamples: [
          'Umsatz steigern: Erhöhe den Quartalsumsatz um 15% durch die Implementierung von fortgeschrittenem Verkaufstraining für das Team bis Ende Q2.',
          'Kundenzufriedenheit verbessern: Erreiche eine Kundenzufriedenheitsbewertung von 90% durch das Training des Kundendienstpersonals in Konfliktlösung und Kommunikationsfähigkeiten über die nächsten 6 Monate.',
          'Mitarbeiterfähigkeiten verbessern: Stelle sicher, dass 100% der Marketingabteilung innerhalb der nächsten 3 Monate in Datenanalysetools geschult sind, um die Kampagneneffizienz zu verbessern.',
          'Betriebskosten reduzieren: Senke die Produktionskosten um 10% im nächsten Jahr durch optimierte Abläufe und Effizienztraining für das Produktionspersonal.',
          'Marktreichweite erweitern: Betritt 2 neue internationale Märkte bis Ende des Jahres, indem das Verkaufsteam bis Q3 in Sprachkenntnissen und kultureller Schulung vorbereitet wird.',
          'Markenbekanntheit steigern: Verbessere die Markenbekanntheit um 25% gemessen an der sozialen Medienbeteiligung durch eine Reihe von gezielten digitalen Marketingtrainings für das Marketingteam über das nächste Quartal.',
          'Führungsqualitäten verbessern: Entwickle die Führungsqualitäten in 20 mittleren Managern, indem sie bis zum Ende des Geschäftsjahres in einem umfassenden Führungskräftetraining eingeschrieben werden.',
          'Mitarbeiterbindung erhöhen: Reduziere die jährliche Mitarbeiterfluktuation um 5% durch verbesserte Managementpraktiken und Führungskräfteentwicklungskurse über die nächsten 12 Monate.',
          'Projektlieferzeiten verbessern: Verkürze die Projektlieferzeiten um 20% innerhalb der nächsten 9 Monate durch fortgeschrittenes Projektmanagementtraining für alle Projektleiter.',
          'Produktionseffizienz steigern: Erreiche eine 15%ige Steigerung der Produktionseffizienz durch die Schulung des Personals in neuen Produktionstechnologien innerhalb der nächsten 6 Monate.',
          'Digitale Transformation verbessern: Schule 90% der Belegschaft des Unternehmens bis zum Ende des Jahres in neuen digitalen Werkzeugen und Plattformen, um die Initiativen zur digitalen Transformation zu unterstützen.',
          'Gesundheit und Sicherheit verbessern: Erreiche null Arbeitsunfälle für das kommende Jahr durch umfassende Sicherheitsschulungen für alle neuen Mitarbeiter innerhalb ihres ersten Beschäftigungsmonats.',
          'Mitarbeiterengagement steigern: Erhöhe die Mitarbeiterengagementwerte um 10 Punkte durch Führungs- und Motivationstrainings bis zum Jahresende.',
          'Produktlinie erweitern: Bringe 3 neue Produkte bis Q4 auf den Markt, indem das Produktentwicklungsteam ab Q2 mit Innovationsmanagement-Schulungen vorbereitet wird.',
          'Kundenbeschwerden reduzieren: Verringere die Kundenbeschwerden um 20% innerhalb des nächsten Jahres durch verbesserte Serviceprotokolle und Beschwerdehandhabungstrainings für Kundendienstteams.',
          'Supply-Chain-Management optimieren: Verbessere die Effizienz der Lieferkette um 15% in den nächsten 6 Monaten durch spezialisierte Schulungen in der Lieferkettenlogistik für Teammitglieder.',
          'Cybersicherheitsmaßnahmen verbessern: Stelle sicher, dass 100% des IT-Personals bis Ende Q3 in den neuesten Cybersicherheitspraktiken und -reaktionen geschult sind, um Risiken zu mindern.',
          'Finanzberichterstattung verbessern: Erreiche 100% Genauigkeit in der Finanzberichterstattung, indem das Finanzteam über das nächste Quartal in neuer Software und Compliance-Standards geschult wird.',
          'IT-Effizienz maximieren: Erhöhe die Betriebszeit der IT-Systeme auf 99,9% durch fortlaufende technische Schulungen für das IT-Personal ab nächstem Monat.',
          'Strategisches Denken entwickeln: Fördere strategisches Denken in der gesamten Organisation durch Workshops für alle leitenden Manager über die nächsten 6 Monate.'
        ],
        averageAgeTitle: 'Durchschnittsalter',
        averageAgeLabel: 'Durchschnittsalter',
        averageAgeExplanation: 'Wie alt sind die Lernenden im Durchschnitt?',
        averageAgeHint: 'Wenn Ihr Team zwischen 20 und 50 Jahre alt ist, ist 35 die Antwort.',
        educationalBackgroundTitle: 'Bildungshintergrund',
        educationalBackgroundExplanation: 'Was ist der Bildungshintergrund der Lernenden? Sie können etwas schreiben, zum Beispiel "Erwachsene, die im Gesundheitswesen arbeiten, ohne vorherige Kenntnisse in Notfallmedizin."',
        educationalBackgroundLabel: 'Bildungshintergrund',
        educationalBackgroundHint: 'Beispiel: Meistens sind es Spezialisten mit Master-Abschluss, die in der Marktforschung tätig sind.',
        learningGoalsTitle: 'Lernziele',
        learningGoalsExplanation: 'Stellen Sie sicher, dass die Lernziele spezifisch, messbar und auf die Geschäftsziele abgestimmt sind.',
        learningGoalsLabel: 'Lernziele',
        learningGoalsHint: 'Beispiel: Die Lernenden werden in der Lage sein, grundlegende Erste-Hilfe-Techniken anzuwenden.',
        acquiredAbilitiesTitle: 'Erworbene Fähigkeiten',
        acquiredAbilitiesExplanation: 'Erworbene Fähigkeiten sollten handlungsorientiert sein und klar angeben, was die Lernenden können werden',
        acquiredAbilitiesLabel: 'Erworbene Fähigkeiten',
        acquiredAbilitiesHint: 'Die Lernenden werden in der Lage sein, eine Herz-Lungen-Wiederbelebung korrekt durchzuführen, Anzeichen eines Herzinfarkts zu erkennen und einen AED zu verwenden.',
        timeCommitmentHoursTitle: 'Zeitaufwand (in Gesamtstunden)',
        timeCommitmentHoursExplanation: 'Berücksichtigen Sie die Intensität und das Tempo des Kurses basierend auf der Verfügbarkeit der Lernenden.',
        timeCommitmentHoursLabel: 'Zeitaufwand',
        timeCommitmentHoursHint: 'Beispiel: Wenn die Lernenden 3 Stunden pro Woche für 4 Wochen haben, sind es 12.',
        pdfTitle: 'Bereichern Sie den Kursinhalt mit einem PDF',
        pdfExplanation: 'Wenn Sie bereits ein PDF mit spezifischem Inhalt für diesen Kurs haben, können Sie es hier hochladen.'
      },
      info: {
        step1: 'Wählen Sie in diesem Abschnitt das  Kurscover aus, geben Sie ihrem Kurs einen Titel und markieren Sie das Vorlagen - Ankreuzfeld, wenn dieser Kurs eine Vorlage für andere Kurse sein soll . <strong> Alle diese Einstellungen können später geändert werden.</strong>',
        step2: 'Geben Sie in diesem Abschnitt Ihrem Kurs eine ansprechende Beschreibung. Eine Liste mit Lernzielen kann eine Beschreibung schöne eines Kurses sein. Verwenden Sie den Rich- Editor, um wichtige Informationen vorzuheben, erstellen Sie Listen oder fügen Sie Farben hinzu. <strong> Die Kursbeschreibung kann auch nachträglich geändert werden.</strong>',
        step3: 'Verwenden Sie diesen Abschnitt, um die Tags zum Kurs hinzuzufügen. Sie können von den vorhandenen Tags auswählen oder neue erstellen. <strong>Course Tags können später hinzugefügt oder geändert werden.</srong>',
        step4: 'Bitte geben Sie die Kursdauer in Minuten an. Zum Beispiel, wenn es 10 Minuten dauert, dann sind es 10 Minuten, wenn es 2 h Stunden dauert, dann sind es 120 Minuten, etc. <strong>Course Dauer Einstellungen können später hinzugefügt oder geändert werden.</strong>',
        step5: 'Nutzen Sie diesen Abschnitt, um anzugeben, ob dieser Kurs zertifizierbar ist oder nicht. Sie können auch die Mindestquote zum Bestehen in Prozent von 0- 100 angeben. <strong> Diese Einstellungen können nachher festgelegt und geändert werden.</strong>',
        certificateScormExplanation: 'Verwenden Sie diesen Abschnitt, um anzugeben, ob dieser Kurs zertifizierbar sein soll oder nicht. ' +
          '<strong>Diese Einstellungen können später festgelegt und geändert werden.</strong>',
        step6: 'Soziales Lernen ist ein großartiges Werkzeug für Motivation! Markieren Sie das Ankreuzfeld, um das Disqus Forum nach jeder Vorlesung zu aktivieren. <strong> Diese Option kann später jederzeit aktiviert oder deaktiviert werden.</strong>',
        step7: '',
        step8: 'Verwenden Sie diesen Abschnitt, um die Anzahl der Module im Kurs, Vorlesungen pro Modul und Abschnitt pro Vorlesung anzugeben,. <strong> Dies ist keine endgültige Entscheidung. Nachdem der Kurs erstellt wurde, können Sie Module, Vorlesungen und Abschnitte hinzufügen oder entfernen.</strong>',
        anonymousAllowedExplanation: 'Aktivieren Sie dies, damit der Kurs ohne Authentifizierung anonym angezeigt werden kann. Beachten Sie jedoch, dass die Tests und Zertifikate in einem solchen Kurs keinen Sinn ergeben würden.',
        preEnrollAllowedExplanation: 'Deaktivieren Sie das Ankreuzfeld, um zu verhindern, dass sich Lernende vor Kursbeginn anmelden',
        externalUrl: 'Fügen Sie die externe URL ein, auf die die Kurskarte verweisen soll',
        paidCourse: {
          amount: 'Amount',
          currency: 'Currency',
          amountShouldBeAboveZero: 'Betrag kann nicht null sein',
          paymentTypes: {
            STRIPE: 'Stripe',
            LIQPAY: 'LiqPay'
          }
        },
        availableFromTo: 'Wählen Sie das Datum und die Uhrzeit aus, an denen der Kurs verfügbar ist. ' +
          'Beachten Sie, dass die Benutzer den Kurs vor dem Datum "Verfügbar ab" oder nach dem Datum "Verfügbar bis" nicht besuchen können.' +
          '<strong>Es ist jederzeit möglich, diese Einstellungen zu ändern.</strong>',
        sequentialLearning: 'Aktivieren Sie diese Option, wenn ein Lernender nur dann zu einem nächsten Vortrag übergehen kann, wenn er einen vorherigen abgeschlossen hat.',
        oneTimeEnrollment: 'Aktivieren Sie diese Option, um die mehrfache Einschreibung eines Lernenden in den Kurs zu deaktivieren.',
        paidCourseInfo: 'Richten Sie die Zahlungsinformationen ein. Es ist nicht möglich, den Zahlungsanbieter in der Zukunft zu ändern, jedoch können Sie den Betrag und die Währung ändern. ' +
          '<strong>Stellen Sie sicher, dass die entsprechende Integration des Zahlungsdienstleisters im Bereich <em>Admin -> Integrationen</em> konfiguriert ist</strong>',
        voucherActivated: 'Aktivieren Sie die Option, wenn Sie Einschreibecodes für diesen Kurs eingerichtet haben und der Kurs für den Zugriff auf die Einschreibecodes erforderlich ist.',
        customFields: 'Hier können Sie die benutzerdefinierten Felder des Kurses definieren <strong>(erweiterte Konfiguration)</strong>',
        scormUpload: 'Laden Sie hier die SCORM-Datei hoch. Sie können sie jederzeit in der Zukunft ändern.',
        ordering: 'Legen Sie die Reihenfolge des Kurses fest, wenn Sie möchten, dass dieser Kurs in einer anderen Reihenfolge in der Kursliste angezeigt wird. ' +
          'Stellen Sie sich zum Beispiel vor, Sie möchten, dass ein bestimmter Kurs als erster in der Liste erscheint. Setzen Sie dann die Reihenfolge auf <strong>1</strong>.' +
          '<br><br><em>Um die Reihenfolge zu ignorieren, setzen Sie den Wert auf <strong>1000</strong>. Der Kurs wird dann nach seinem Erstellungs- oder Aktualisierungszeitpunkt sortiert angezeigt.</em>',
        preEnrollDescription: 'Definieren Sie den HTML-Code des Voranmeldungs-Popups, das jedem Student angezeigt wird, bevor er sich für den Kurs einschreibt.',
        preApproveEnrollmentDescription: 'Wählen Sie diese Option aus, wenn eine Genehmigung der Anmeldung erforderlich ist. ' +
          'Die Lernenden werden versuchen, sich für Kurse anzumelden, können aber die Kurse erst beginnen, wenn die Administratoren ihre Anmeldung genehmigen.',
        aggregated: {
          metadata: 'Definieren Sie hier alle Kursmetadaten: Kursname, Titelbild, Beschreibung, Dauer, Tags. Legen Sie die Reihenfolge des Kurses und benutzerdefinierte Felder fest, falls erforderlich.',
          socialLearning: 'Soziales Lernen - legen Sie fest, ob das Diskussionsforum nach jedem Vortrag verfügbar ist oder nicht.',
          achievements: 'Definieren Sie die Kursleistungen – Avatar-Rahmen, Kurspunkte, Zertifikat.',
          courseAccess: 'Definieren Sie die Einstellungen in Bezug auf die Verfügbarkeit des Kurses: Start- und Enddatum, ob er für anonyme Ansicht verfügbar ist oder nicht, oder durch Einschreibecodes.',
          recurring: 'Legen Sie die Einstellungen fest, wenn der Kurs wiederkehrend sein muss: Die eingeschriebenen Benutzer müssen den Kurs regelmäßig wiederholen. ' +
            'Dies kann für einige obligatorische Schulungen wie Compliance nützlich sein. <strong>HINWEIS: gilt nur für Lernende, die als Gruppe eingeschrieben sind.</strong>'
        },
        ai: {
          topicAndLocale: 'Geben Sie ein Thema an und wählen Sie die Sprache des generierten Inhalts.',
          context: 'Geben Sie zusätzlichen Kontext an, z.B. was der Lernende aus diesem Kurs lernen wird, Ziele, Lernergebnisse, Geschäftsziele.',
          numberOfThings: 'Geben Sie die Anzahl der Module, Themen und Optionen in jeder Bewertungsfrage an.'
        },
        featuredDescription: 'Markieren Sie diesen Kurs als hervorgehoben. Er wird im großen Karussellabschnitt der Kursliste angezeigt.'
      },

      popup: {
        title: 'Titel',
        subtitle: 'Untertitel',
        content: 'Inhalt',
        action: 'Aktion'
      }
    },
    newCourse: {
      courseName: 'Kursname',
      courseDescription: 'Kursbeschreibung',
      createNewCourse: 'Neuen Kurs erstellen',
      newExternalResource: 'Neue externe Ressource erstellen',
      newAiCourse: 'Erstellen Sie einen neuen Kurs mit Hilfe von AI',
      newScormCourse: 'Neuen SCORM - Kurs erstellen',
      exploreAllWaysToCreateNewCourse: 'Erkunde alle Möglichkeiten zur Erstellung eines Kurses',
      newUmbrellaCourse: 'Neuen Regenschirm Kurs erstellen',
      importCourse: 'Kurs in JSON importieren',
      downloadJSON: 'Kurs im JSON Format herunterladen',
      uploadJSON: 'JSON hochladen',
      createUmbrellaCourse: 'Neuen Regenschirm Kurs erstellen',
      createUmbrellaCourseExplanation: 'Erstellen Sie einen Kurs, der einem Lernenden einen Entscheidungsbaum anzeigt.',
      createUmbrellaCourseCaption: 'Ein Lernender würde die Frage und wird nach Beantwortung zum richtigen Kurs geführt. Ein Lernender würde die Fragen beantworten und wird nach der Beantwortung zum richtigen Kurs geführt.',
      uploadJSONExplanation: 'JSON eines zuvor exportierten Kurses hochladen',
      uploadJSONCaption: 'Der beste Weg Kurse zwischen Arbeitsbereichen zu klonen!',
      usingWizard: 'Erstellen Sie einen Kurs mit unserem intelligenten Assistenten',
      basedOnBloom: 'basierend auf Rückwärtsplanung und Blooms Taxonomie',
      comingSoon: '(Kommt bald)',
      usingBasicStructure: 'Kurs mit einer Grundstruktur erstellen',
      usingExternalResource: 'Neuen Link zu einer externen Ressource erstellen',
      createExternalCourse: 'Erstellen Sie einen Link zu einer externen Ressource',
      createScormCourse: 'Importieren Sie ein SCORM-Kurspaket',
      lookingLikeCourseCard: 'Es wird aussehen wie eine normale Kurskarte',
      scormCourseDescription: 'Erstellen Sie einen Kurs und laden Sie Ihr SCORM-Paket hoch',
      scormCourseCaption: '(Oder ersetzen Sie die URL der SCORM-Datei)',
      pointingToExternalResource: 'Und es wird auf eine externe Ressource verweisen',
      toBeLaterFilledWithContent: 'Wird später mit Inhalt ausgefüllt',
      iKnowWhatDoing: '(Ich weiß, was ich tue!)',
      passingRateCantBeMore: 'Die Erfolgsquote darf nicht mehr als 100 betragen',
      passingRateCantBeLess: 'Die Erfolgsquote darf nicht kleiner als 0 sein',
      courseBeingCreated: 'Der Kurs {name} wird erstellt...',
      courseBeingUpdated: 'Der Kurs {name} wird aktualisiert...',
      usingAiTitle: 'Kursstruktur mit KI erstellen 🪄',
      aiCourseBeingGenerated: 'Ihr Kurs wird generiert...\n' +
        'Sie können warten, bis er fertig ist, oder ihn später unter "Kurse verwalten" überprüfen. Sie können dieses Fenster jetzt schließen.',
      usingAiDescription: 'Erstellen Sie eine Kursstruktur, indem Sie Anweisungen in eine Eingabeaufforderung tippen.',
      usingAiCaption: '(Ich fühle mich glücklich!)',
      beforeCreating: 'Download bevorzugen <strong><a href="https://assets.theworkademy.com/shared/WORKADEMY_CREATE_COURSE_FROM_SCRATCH.pdf" target="_blank">this PDF</a></strong> bevor Sie mit dem Erstellen von Kursen beginnen. Es hilft Ihnen bei der Kursstruktur'
    },
    editExistingCourses: 'Bestehende Kurse bearbeiten',
    editExistingLearningPaths: 'Vorhandene Lernpfade bearbeiten',
    editCourseInfo: 'Kursinformationen bearbeiten',
    enrollUsers: 'Registrieren Sie Benutzer',
    durationInMinutes: 'Dauer in Minuten',
    availabilityDates: 'Verfügbarkeitstermin für Kurse',
    manageCoursesTitle: 'Kurse verwalten',
    manageLearningPathsTitle: 'Lernpfade verwalten',
    templateCoursesTitle: 'Vorlagen',
    forumEnabled: 'Forum aktiviert (jeder Vorlesung ist ein Diskussionsforum angeschlossen)',
    voucherActivated: 'Gutscheinaktivierte Registrierung',
    certificateEnabled: 'Zertifikat aktiviert',
    sharableCertificate: 'Zertifikat kann zu LinkedIn hinzugefügt werden',
    publicCourse: 'Öffentlicher Kurs (für die Außenwelt verfügbar) – WIP',
    sequentialProgress: 'Sequential learning (each module opens after finishing the previous one)',
    oneTimeEnrollOnly: 'Einmalige Einschreibung (keine Wiederholungsmöglichkeit)',
    quiz: {
      questionText: 'Fragetext',
      questionSettings: 'Frageneinstellungen',
      questionAnswers: 'Anttworten',
      questionExplanation: 'Erklärung der Fragen',
      limitAttempts: 'Versuche einschränken',
      numberAttempts: 'Anzahl der Versuche',
      addTimeLimit: 'Zeitlimit hinzufügen',
      timeLimitseconds: 'Zeitlimit (Sekunden)',
      editAnswer: 'Antwort bearbeiten',
      editAnswerLabel: 'Antwort bearbeiten',
      explanation: 'Erklärung',
      editQuestion: 'Frage bearbeiten',
      addNewQuestion: 'Neue Quizfrage hinzufügen',
      questionType: 'Fragetyp',
      hasCorrectAnswer: 'Hat richtige Antwort',
      itemLabel: 'Artikel',
      categoryLabel: 'Kategorie',
      doesntCountForEvaluation: 'Zählt nicht zur Auswertung',
      mandatory: 'Als obligatorisch markieren',
      mandatoryExplanation: 'Der Lernende muss diese Frage beantworten, um fortzufahren (funktioniert zusammen mit sequenziellem Lernen).',
      openAnswer: {
        evaluateOpenAnswerOf: 'Evaluate open question answer of {user}',
        answer: 'Answer',
        usersFile: 'User\'s file',
        downloadFile: 'Download user\'s file',
        noFile: '{user} hasn\'t upload any file',
        markAsIncorrect: 'Mark as incorrect',
        markAsCorrect: 'Mark as correct',
        openInNew: 'In einem Popup öffnen',
        questionTitle: 'Frage',
        feedbackTitle: 'Feedback',
        changeFeedback: 'Feedback ändern',
        provideFeedback: 'Ein Feedback geben',
        addFeedback: 'Feedback ohne Bewertung hinzufügen',
        gradeAnswerButtonCaption: 'Wenn Sie die Antwort bewerten, wird das Feedback (falls gegeben) ebenfalls gesendet'
      }
    },
    editingMode: {
      editCourse: {
        editCourseTitle: 'Kurs {name} bearbeiten'
      },
      inlineEditorPlaceholder: 'Geben Sie den Text ein...',
      emojiPicker: {
        addEmoji: 'Emoji hinzufügen',
        unset: 'Zurücksetzen',
        change: 'Ändern',
        pickerTitle: 'Wähle dein Emoji...',
        search: 'Suchen',
        notfound: 'Kein Emoji gefunden',
        categories: {
          search: 'Suchergebnisse',
          recent: 'Häufig verwendet',
          smileys: 'Smileys & Emoticon',
          people: 'Menschen & Körper',
          nature: 'Tiere & Natur',
          foods: 'Essen & Trinken',
          activity: 'Aktivitäten',
          places: 'Reisen & Orte',
          objects: 'Objekte',
          symbols: 'Symbole',
          flags: 'Flaggen',
          custom: 'Benutzerdefiniert'
        }
      },
      placeholder: {
        courseTitle: 'Geben Sie den Kursnamen ein...',
        courseDescription: 'Geben Sie die Kursbeschreibung ein...',
        moduleTitle: 'Geben Sie den Modulnamen ein...',
        moduleDescription: 'Geben Sie die Modulbeschreibung ein...',
        lectureTitle: 'Geben Sie den Vorlesungstitel ein...',
        lectureDescription: 'Geben Sie die Vorlesungsbeschreibung ein...',
        sectionTitle: 'Geben Sie den Abschnittstitel ein...',
        sectionText: 'Geben Sie den Abschnittstext ein...',
        questionText: 'Geben Sie die Frage ein...',
        answerText: 'Geben Sie die Antwort ein...',
        bubbleText: 'Geben Sie den Text der Blase ein...',
        optionTitle: 'Geben Sie den Titel der Option ein...',
        accordionTitle: 'Geben Sie den Titel des Akkordeons ein...',
        accordionText: 'Geben Sie den Text ein...',
        quizDescription: 'Geben Sie die Quizbeschreibung ein...'
      },
      questionBank: {
        bankSwitch: 'Fragendatenbank',
        title: 'Fragendatenbank für diese Vorlesung/ dieses Modul erstellen und eine zufällig ausgewählte Anzahl von Fragen verwenden, die den Lernenden gezeigt werden.',
        weightLabel: 'Wie viele Gewichtsfragen {weight} sollen in der Datenbank verwendet werden?',
        weightHint: 'Maximal {max} erlaubt',
        usedText: 'Used <span class="font-weight-bold ">{numberOfUsedQuestions}</span> out of <span class="font-weight-bold ">{totalNumberOfQuestions}</span> total number of questions'
      },
      lecture: {
        editLecture: 'Vorlesung bearbeiten',
        topOfTheLectureHeader: 'Anfang der Vorlesung (Titelbild, Video, Typeform, SCORM oder Live-Vorlesung)',
        editLectureHeader: 'Anfang der Vorlesung',
        noHeader: 'keine Kopfzeile',
        editHeaderCover: 'Titelbild',
        addHeaderCover: 'Titelbild',
        editVideoSource: 'Videoquelle',
        addVideoSource: 'Videoquelle',
        editLiveLecture: 'Live lecture',
        editTypeformLecture: 'Typeform',
        addTypeformLecture: 'Typeform',
        editLoomLecture: 'Edit Loom',
        addLoomLecture: 'Add Loom',
        editScormLecture: 'Edit SCORM package',
        addScormLecture: 'Add SCORM package',
        enableLoom: 'Loom in Admin/ Integrationen konfigurieren',
        addLiveLecture: 'Live - Vortrag',
        pasteLiveLink: 'Link zu Zoom oder einer anderen Videokonferenz hinzufügen',
        liveStartTime: 'Startzeit',
        liveFinishTime: 'Endzeit',
        onClearHeader: 'Kopfzeile löschen',
        lectureSettings: 'Vorlesungseinstellungen',
        navigateLectureWith: 'Vorlesung navigieren mit:',
        navigateWithButton: 'Weiter - Schaltfläche (jeder nächste Vorlesungsabschnitt öffnet sich mit einem Klick auf die Schaltfläche “Weiter”)',
        navigateWithScroll: 'Scrollen (Alle Abschnitte werden standardmäßig geöffnet)',
        recordLoomVideo: 'Loom - Video aufnehmen',
        addLoomVideoUrl: 'Loom - Video - URL bearbeiten',
        addScormUrl: 'URL des SCORM-Pakets bearbeiten',
        editPdfSectionDesc: 'In diesem Abschnitt können Sie eine PDF innerhalb einer Vorlesung übertragen oder herunterladen.',
        lectureVisibility: {
          title: 'Regeln zur Sichtbarkeit der Vorlesung konfigurieren',
          buttonText: 'Sichtbarkeit der Vorlesung ändern',
          dialog: {
            title: 'Regeln zur Sichtbarkeit der Vorlesung',
            noRules: 'Es sind noch keine Sichtbarkeitsregeln definiert',
            allRules: 'Vorlesung anzeigen, wenn sie ALLEN diesen Regeln entspricht:',
            anyRules: 'Und EINER dieser Regeln entspricht:',
            addRuleButton: 'Regel hinzufügen',
            addAndRuleButton: 'UND-Regel hinzufügen',
            addOrRuleButton: 'ODER-Regel hinzufügen',
            saveRulesButton: 'Regeln speichern',
            whenText: 'Wann',
            operators: {
              QUESTIONS: {
                EQUALS: 'ist',
                NOT_EQUALS: 'ist nicht',
                CONTAINS: 'enthält',
                NOT_CONTAINS: 'enthält nicht'
              },
              GROUPS: {
                EQUALS: 'ist',
                NOT_EQUALS: 'ist nicht',
                CONTAINS: 'enthält eines',
                NOT_CONTAINS: 'enthält keines'
              }
            },
            connectors: {
              AND: 'Und',
              OR: 'Oder'
            },
            selectAQuestion: 'Wählen Sie eine Frage aus',
            selectAnAnswer: 'Wählen Sie eine Antwort aus'
          }
        }
      },
      editCourseStructure: 'Kursstruktur bearbeiten',
      clickHereToChangeText: 'Klicken Sie hier, um den Text zu ändern',
      editCourseInfo: 'Kursinformationen bearbeiten',
      enrollUsers: 'Registrieren Sie Benutzer',
      checkProgress: 'Benutzerfortschritt prüfen',
      editCourseDescription: 'Kursbeschreibung bearbeiten',
      editLectureDescription: 'Vorlesungsbeschreibung bearbeiten',
      addNewModule: 'Neues Modul hinzufügen',
      addNewLecture: 'Neue Vorlesung zum Modul hinzufügen',
      addNewSection: 'Neuen Abschnitt hinzufügen',
      addNewBranchSection: 'Neuen Zweigabschnitt hinzufügen',
      deleteModule: 'Modul löschen',
      editModuleDescription: 'Modulbeschreibung bearbeiten',
      deleteLecture: 'Vorlesung löschen',
      saveCourseBeforeEditingLecture: 'Kurs vor der Bearbeitung der Vorlesung speichern',
      addSection: 'Neuen Abschnitt hinzufügen',
      addQuestion: 'Neue Frage hinzufügen',
      addNewBubble: 'Neue Blase hinzufügen',
      newTextBubble: 'Sprechblase',
      newVideoBubble: 'Video Blase',
      newAudioBubble: 'Audio Blase',
      newQuestionBubble: 'Fragen - Blase',
      changeVideoSource: 'Videoquelle ändern',
      changeAudioSource: 'Audioquelle ändern',
      editSection: 'Abschnitt bearbeiten',
      deleteSection: 'Abschnitt löschen',
      deleteOption: 'Option löschen',
      addOption: 'Option hinzufügen',
      editMediaSource: 'Medienquelle bearbeiten',
      changeMediaSourceLabel: 'Medienquelle der Vorlesung wechseln',
      addVideoLabel: 'Fügen Sie den Link von YouTube, Vimeo, Wistia, Loom oder GoogleDrive ein',
      addVideoHint: 'Alternativ klicken Sie auf "URL kopieren" beim Videoelement in der Bibliothek und fügen Sie es hier ein.',
      videoSubtitles: 'Video-Untertitel',
      addVideoSubtitles: 'Untertitel hinzufügen',
      editVideoSubtitles: 'Untertitel bearbeiten',
      addVideoSubtitlesTrack: 'Untertitelspur hinzufügen',
      videoSubtitlesLocale: 'Sprache',
      videoPreview: 'Hier erscheint eine Video-Vorschau',
      addTypeformUrl: 'Fügen Sie Ihre Typeform - URL ein',
      addTypeformId: 'Fügen Sie Ihre Typeform ID ein',
      changeMediaSourceHint: 'Medienquelle kann ein Weg zu einem Bild im PNG- oder JPG/JPEG - Format sein. Es kann auch ein Weg zu einem Youtube - Video in Form von https://www.youtube.com/embed/qeUGOsW8ewk oder zu einem Vimeo - Video in Form von https://player.vimeo.com/video/334294316 sein. ',
      mediaSource: {
        clickToCreateVideoOrCover: 'Hier klicken, um einen Videovortrag zu erstellen oder einen Titelbild hinzuzufügen',
        clickHereToCreateLiveLecture: 'Hier klicken, um eine Live Zoom- oder Google Meets- Vorlesung zu erstellen (kommt bald)',
        clickToEditVideoSrc: 'Hier klicken, um eine Videoquelle zu bearbeiten oder durch ein Titelbild zu ersetzen',
        clickToEditCover: 'Hier klicken, um Titelbild zu ersetzen oder eine Videoquelle hinzuzufügen',
        canBeImage: 'Medienquelle kann ein Weg zu einem Bild im PNG- oder JPG Format sein.',
        canBeYoutube: 'Medienquelle kann ein Weg zu einem Youtube- Video sein, z.B. https://www.youtube.com/embed/qeUGOsW8ewk',
        canBeVimeo: 'Medienquelle kann ein Weg zum Vimeo- Video sein, z.B. https://player.vimeo.com/video/334294316',
        canBeTypeform: 'Medienquelle kann ein Weg zu einer Typeform- Umfrage sein, z.B. https://workademy.typeform.com/to/j2OAMk',
        dropZoomInvite: 'Einladung zu Ihrer Zoom- Vorlesung senden',
        addMediaSource: 'Medienquelle hinzufügen (Bild, Video oder Umfrage)',
        createZoomLecture: 'Zoom- Vorlesung erstellen'
      },
      editQuestion: 'Frage bearbeiten',
      addNewQuestion: 'Neue Quizfrage erstellen',
      questionType: 'Fragetyp',
      deleteQuestion: 'Frage löschen',
      deleteQuestionDialogTitle: 'Gefahrenzone!',
      deleteQuestionDialogText: 'Das Löschen einer Frage kann aufgrund der laufenden Arbeit  der Student zu Fehlern führen. Erwägen Sie, den Kurs zu speichern, bevor Sie dies ausprobieren.',
      newModuleName: 'Modulname',
      newModuleDescription: 'Modulbeschreibung',
      newLectureName: 'Vorlesungsname',
      newLectureDescription: 'Vorlesungsbeschreibung',
      resetBtn: 'Zurücksetzen',
      resetBtnTooltip: 'Setzen Sie Ihre Änderungen am Kurs zurück.',
      saveBtn: 'Speichern',
      saveOnlyBtn: 'Nur speichern',
      saveAndNotifyBtn: 'Speichern und Lernende benachrichtigen',
      saveAndNotifyDialog: {
        title: 'Speichern und Lernende benachrichtigen',
        subtitle: 'Speichern Sie den Kurs und benachrichtigen Sie die Lernenden über die neuesten Aktualisierungen.',
        notifyEveryone: 'Alle benachrichtigen',
        youAreAboutToNotify: 'Keine Lernenden entsprechen den ausgewählten Benachrichtigungskriterien. | Sie sind dabei, einen Lernenden zu benachrichtigen. Klicken Sie auf „Benachrichtigen“, um fortzufahren. | Sie sind dabei, {n} Lernende zu benachrichtigen. Sind Sie sicher, dass Sie fortfahren möchten?',
        youAreAboutToNotifyMany: 'Keine Lernenden entsprechen den ausgewählten Benachrichtigungskriterien. | Sie sind dabei, einen Lernenden zu benachrichtigen. Klicken Sie auf „Benachrichtigen“, um fortzufahren. | Sie sind dabei, {n} Lernende zu benachrichtigen. Das Benachrichtigen von mehr als 50 Personen kann bis zu 2 Stunden dauern, da die Nachrichten als Teil einer E-Mail-Kampagne versendet werden. Sind Sie sicher, dass Sie fortfahren möchten?',
        notifyActive: 'Aktive Lernende benachrichtigen',
        notifyGroup: 'Eine Gruppe benachrichtigen',
        message: 'Der Kurs {courseName} wurde aktualisiert. Bitte überprüfen Sie den Kurs für weitere Details.',
        messageTitle: 'Benachrichtigung senden',
        messageLabel: 'Bearbeiten Sie die Standardnachricht bei Bedarf.',
        notifyAGroup: 'Eine bestimmte Gruppe benachrichtigen',
        activeOrEveryoneTitle: 'Wählen Sie aus, ob nur aktive Lernende oder alle, einschließlich derjenigen, die den Kurs abgebrochen oder abgeschlossen haben, benachrichtigt werden sollen.',
        activeOrEveryone: {
          active: 'Nur aktive Lernende (empfohlen)',
          everyone: 'Alle Lernenden'
        },
        toast: {
          success: 'Die Lernenden wurden erfolgreich über die Aktualisierungen benachrichtigt.',
          error: 'Beim Benachrichtigen der Lernenden ist ein Fehler aufgetreten: {err}.'
        }
      },
      saveBtnTooltip: 'Es gibt einige nicht gespeicherte Änderungen. Speichern Sie sie oder setzen Sie sie zurück.',
      publishBtn: 'Verfügbar Machen',
      publishBtnTooltip: 'Ihren Kurs veröffentlichen oder die Veröffentlichung rückgängig machen, um ihn in der Liste der Kurse oder für SEO (für öffentliche Workspaces) verfügbar oder nicht verfügbar zu machen.',
      unpublishBtn: 'Nicht Verfügbar Machen',
      exportJSON: 'JSON exportieren',
      importJSON: 'JSON importieren',
      pasteJSON: 'JSON dem Kurs einfügen',
      errorReadingJSON: 'Fehler beim Lesen von JSON',
      copyCourseUrl: 'Kurs-URL kopieren',
      courseUrlCopied: 'Kurs-URL kopiert',
      sections: {
        newTextSection: 'Rich Text',
        newQuestionSection: 'Frage',
        newDialogSection: 'Dialog Abschnitt',
        newPDFSection: 'PDF',
        newButtonSection: 'Schaltfläche',
        newImageTextSection: 'Bild + Text',
        newVideoTextSection: 'Video + Text',
        newAudioTextSection: 'Audio + Text',
        newAccordionSection: 'Akkordeon',
        newBranchSection: 'Verzweigung',
        newImportantSection: 'Wichtig',
        newAdditionalInfoSection: 'Zusätzliche Information',
        newExamplesSection: 'Beispiele',
        newGridSection: 'Gitternetz',
        newTextSectionDescription: 'Dieser Abschnitt ist perfekt für jede Art von Text, den Sie Ihrer Vorlesung hinzufügen möchten. Sie können es mit Formatierungen, Aufzählungslisten, Bildern, Videos und jeder Art von HTML bereichern, die Sie mögen. ',
        newQuestionSectionDescription: 'Dieser Abschnitt dient immer dann, wenn Sie Ihrer Vorlesung eine Single- oder Multiple- Choice Frage hinzufügen möchten..',
        newDialogSectionDescription: 'Dieser Abschnitt dient dazu, einen kleinen Chat- änhlichen Inhalt mit Avataren und mehreren Blasen hinzuzufügen. Diese Blasen können Text-, Video-, Bild- oder sogar Fragenblasen sein!',
        newPDFSectionDescription: 'In diesem Abschnitt können Sie eine PDF- Datei innerhalb einer Vorlesung abgeben oder herunterladen .',
        newButtonSectionDescription: 'In diesem Abschnitt können Sie eine Schaltfläche innerhalb einer Vorlesung übertragen, die eher auf einen internen oder auf einen externen Link verweist.',
        newImageTextSectionDescription: 'Dieser Abschnitt ist eine einfache Möglichkeit, ein Bild mit etwas Text hinzuzufügen. Sie können mit einer Bild- oder Textgröße experimentieren und ihre Seiten ändern.',
        newVideoTextSectionDescription: 'Dieser Abschnitt ist eine einfache Möglichkeit, ein Youtube- oder Vimeo Video mit etwas Text hinzuzufügen. Sie können mit der Größe eines Videos oder Textes spielen und deren Seiten ändern.',
        newAudioTextSectionDescription: 'Dieser Abschnitt ist eine einfache Möglichkeit, ein Audio mit etwas Text hinzuzufügen. Sie können mit der Größe der Audioanzeige oder des Textes spielen und deren Seiten ändern.',
        newAccordionSectionDescription: 'Dieser Abschnitt ist eine perfekte Möglichkeit, einige optionale Informationen für diejenigen hinzuzufügen, die es genauer wissen möchten. Die Informationen werden in den erweiterbaren Optionen ausgeblendet.',
        newBranchSectionDescription: 'Geben Sie Ihren Lernenden eine gewisse Kontrolle, indem Sie mehrere Auswahlmöglichkeiten anbieten, nach denen sich der Verlauf der Vorlesung ändert. Derzeit nur die dialogähnlichen Abschnitte verfügbar. ',
        newImportantSectionDescription: 'Einige wichtige Informationen Ihres Vortrags markieren',
        newAdditionalInfoSectionDescription: 'Zusätzliche Informationen zu Ihrer Vorlesung markieren',
        newExamplesSectionDescription: 'Einige Beispiele in Ihrem Vortrag markieren',
        newGridSectionDescription: 'Erstellen Sie ein Raster mit so vielen Zeilen und Spalten, wie Sie benötigen, und füllen Sie es mit Bildern und/oder Text',
        newTypeFormSectionDescription: 'Erstellen Sie einen eingebetteten TypeForm-Abschnitt',
        newTableSection: 'Tabelle',
        newTableSectionDescription: 'Erstellen Sie eine Tabelle mit der gewünschten Anzahl an Zeilen und Spalten',
        typeForm: {
          pasteUrl: 'URL hier einfügen'
        },
        accordion: {
          accordionTitle: 'Akkordeon- Titel',
          enterTitle: 'Titel für diesen Akkordeon Abschnitt eingeben',
          addAccordionSection: 'Akkordeonabschnitt hinzufügen'
        },
        grid: {
          columnsLabel: 'Anzahl der Spalten',
          rowsLabel: 'Anzahl der Zeilen',
          maxHeightLabel: 'Maximale Höhe',
          text: 'Text',
          image: 'Bild',
          imageCaption: 'Bildunterschrift'
        },
        table: {
          sortable: 'Sortierbar',
          fixFirstColumn: 'Erste Spalte fixieren'
        },
        branch: {
          branchOptionName: 'Optionsname',
          branchingOptionsSectionsTitle: 'Verzweigungsoptionsabschnitte',
          addSection: 'Abschnitt hinzufügen',
          deleteOption: 'Option löschen',
          saveOption: 'Option speichern',
          addBranchingOption: 'Verzweigungsoption hinzufügen',
          option1Title: 'Option 1',
          option2Title: 'Option 2',
          optionTitle: 'Option- Titel'
        },
        dialog: {
          configureDialogSection: 'Dialogabschnitt konfigurieren',
          leftSide: 'Linke Seite des Gesprächs',
          rightSide: 'Rechte Seite des Gesprächs',
          avatarLink: 'Avatar Link',
          avatarName: 'Avatar Name',
          userPictureAvatar: 'Benutzerbild- Avatar'
        },
        examples: {
          branch: {
            option1: 'Option 1',
            option2: 'Option 2',
            option3: 'Option 3',
            text: 'Vielen Dank, dass Sie sich für die zweite Option entschieden haben'
          },
          dialog: {
            content1: 'Hallo',
            content2: 'Heute werden wir über das Wetter sprechen',
            content3: 'Vielen Dank, dass Sie sich uns angeschlossen haben'
          }
        },
        buttonSection: {
          buttonText: 'Schaltflächentext',
          buttonLink: 'Schaltflächenlink',
          buttonClass: 'Schaltflächen-CSS-Klasse',
          text: 'Dieser Text erscheint vor der Schaltfläche. Entfernen Sie es vollständig, wenn es nicht benötigt wird.',
          textExample: 'Klicken Sie auf die Schaltfläche, um <strong>Benutzereinstellungen</strong> zu gelangen',
          buttonTextExample: 'Los geht’s!'
        },
        importantLabel: 'Wichtig',
        additionalInfoLabel: 'Zusätzliche Information',
        examplesLabel: 'Beispiele'
      },
      tags: {
        searchTags: 'Tags durchsuchen',
        addTagsLabel: 'Dem Kurs Filter-Tags hinzufügen',
        noResults: 'Keine Ergebnisse passend zu "<strong>{search}</strong>". Drücken Sie <kbd>enter</kbd>, um eine neue zu erstellen'
      },
      lectureInClipboard: 'Vorlesung {lecture} befindet sich in der Zwischenablage. Sie können es jetzt nach jeder Vorlesung einfügen.',
      moduleInClipboard: 'Modul {module} befindet sich in der Zwischenablage. Sie können es jetzt nach jeder Vorlesung einfügen.',
      sectionInClipboard: 'Abschnitt des Typs {section} befindet sich in der Zwischenablage. Sie können es jetzt nach jeder Vorlesung einfügen.',
      copyModule: 'Modul kopieren',
      pasteModule: 'Modul einfügen',
      copyLecture: 'Vorlesung kopieren',
      pasteLecture: 'Vorlesung einfügen',
      createCourseOfLecture: 'Öffentlichen Kurs mit einer Seite erstellen',
      copyQuestion: 'Frage kopieren',
      pasteQuestion: 'Frage einfügen',
      copySection: 'Abschnitt kopieren',
      pasteSection: 'Abschnitt einfügen',
      quiz: {
        bankSwitch: 'Fragendatenbank',
        changeQuestion: 'Ändere hier den Text der Frage'
      },
      umbrella: {
        itemTitle: 'Schreiben Sie hier einen Titel (Frage) für die Entscheidung',
        addDecisionOption: 'Entscheidungsoption hinzufügen',
        deleteOption: 'Entscheidungsoption löschen',
        optionTitle: 'Optionstext',
        umbrellaCourse: 'Kurs {courseName}',
        umbrellaOptions: '{optionsNumber} Optionen',
        backButton: 'Zurück',
        nextButton: 'Nächste',
        decisionOption: 'Entscheidungsoption',
        courseOption: 'Kursoption'
      }
    },
    gamification: {
      typeLabel: 'Typ',
      nameLabel: 'Name',
      descriptionLabel: 'Beschreibung',
      editGamification: 'Erfolge bearbeiten',
      addGamificationItem: 'Erfolgselement hinzufügen',
      saveGamificationItems: 'Erfolge speichern',
      changeName: 'Name des Erfolgs',
      changeDescription: 'Beschreibung des Erfolgs',
      saveItems: 'Erfolgselemente speichern',
      hideEditing: 'Bearbeitungsmodus verbergen',
      editItem: 'Element bearbeiten',
      questionAnswerRateLabel: 'Rate der beantwortenden Fragen',
      chooseCompletedLectures: 'Vorlesungen auswählen, die absolviert werden sollen',
      chooseAnsweredQuestions: 'Fragen auswählen, die beantwortet werden sollen',
      types: {
        QUESTIONS_ANSWERED: 'Beantwortete Fragen',
        LECTURES_COMPLETED: 'Absolvierte Vorlesungen',
        QUESTIONS_ANSWERED_RATE: 'Rate der beantowortenden Fragen'
      },
      achievementTypes: {
        FRAME: 'Frame'
      },
      collectAchievements: 'Mit dem Sammeln der Abzeichen beginnen: Machen Sie Fortschritte in Ihren Kursen und beantworten Sie die Fragen'
    },
    progress: {
      courseNotStarted: 'Kurs noch nicht begonnen',
      courseInProgress: 'Kurs in Bearbeitung',
      courseFinished: 'Kurs abgeschlossen',
      coursesTitle: 'Kurse',
      learningPathsTitle: 'Lernpfade',
      learningPathCourses: 'Learning Path Courses',
      coursesTitleCoursesName: 'Kurse - {courseName}',
      learningPathTitleCoursesName: 'Lernpfade - {learningPathName}',
      coursesTitleCourseUserName: 'Kurse - {courseName} - {userName}',
      learningPathTitleUserName: 'Lernpfade - {learningPathName} - {userName}',
      clickOnLearningPathStep: 'Klicken Sie auf eine Kurskarte, um den Fortschritt von {name} in einem Kurs zu überprüfen',
      learningPathNoSteps: 'Dieser Lernpfad enthält keine Schritte',
      cantFetchDataLearningPathStep: 'Daten für den Schritt {stepName} können nicht abgerufen werden. Wahrscheinlich wurde der Schritt vom Benutzer {userName} abgeschlossen',
      startedOn: 'Begonnen am {startedOn}',
      finishedOn: 'Abgeschlossen am {finishedOn}',
      progress: 'Fortschritt: {progress}%',
      startedOnTitle: 'Begonnen am',
      finishedOnTitle: 'Abgeschlossen am',
      completedInTitle: 'Abgeschlossen in',
      progressTitle: 'Quiz-Fortschritt',
      lectureProgressTitle: 'Vorlesungsfortschritt',
      courseProgressTitle: 'Kursfortschritt',
      lastActivityTitle: 'Letzte Aktivität',
      statusTitle: 'Status',
      certificateTitle: 'Zertifikat',
      certificate: 'zertifikat',
      nameTitle: 'Name',
      emailTitle: 'E-Mail',
      noCourses: 'Sie haben noch keine Kurse erstellt',
      noCoursesWithSearch: 'Keine Kurse mit diesen Suchkriterien gefunden',
      createCourses: 'Kurse erstellen',
      createLearningPaths: 'Lernpfade erstellen',
      progressOfUser: 'Fortschritt von {userName}',
      answeredQuestions: 'Beantwortet <strong>{correct} / {total}</strong>',
      lecturesSeen: 'Gesehene Vorlesungen: <strong>{seen} / {total}</strong>',
      seen: 'Gesehen',
      lectureMarkedAsSeen: 'Als gesehen markiert',
      lectureIsNotMarkedAsSeen: 'Noch nicht gesehen',
      wrongAttempts: '{wrong} / {total} falsche Versuche',
      searchCoursePlaceholder: 'Name, Beschreibung, Tags, alles!',
      searchCourseLabel: 'Kurse suchen',
      usersPerPage: 'Lernende pro Seite',
      downloadCSV: 'CSV herunterladen',
      download: 'Bericht herunterladen',
      downloadFull: 'Vollständigen Bericht herunterladen',
      totalStudents: 'Insgesamt eingeschriebene Lernende: {total}',
      searchUserLabel: 'Benutzer per E-Mail suchen',
      searchUserPlaceholder: 'Genaue E-Mail, nach der gesucht werden soll',
      enrollCount: 'Keine Einschreibungen | Eine Einschreibung | {n} Einschreibungen',
      inactiveCount: 'Inaktiv: {n}',
      abandonedCount: 'Abgebrochen: {n}',
      runningCount: 'Aktive Einschreibungen: {n}',
      finishedCount: 'Abgeschlossen: {n}',
      noUsersInCourse: 'Es sind keine Benutzer in diesem Kurs eingeschrieben.',
      noUsersInLearningPath: 'Es sind keine Benutzer diesem Lernpfad zugewiesen.',
      totalCourses: 'Gesamtzahl der gefundenen Kurse: {total}',
      totalEnrollments: 'insgesamt gefunden: {total}',
      totalPendingEnrollments: 'Insgesamt {total} ausstehende Anmeldungen gefunden',
      approvePendingTitle: 'Genehmigen',
      approvePendingButton: 'Genehmigen',
      approvedSuccessfullyMessage: 'Die Anmeldung von {name} wurde erfolgreich genehmigt.',
      approvedErrorMessage: 'Die Anmeldung von {name} wurde aufgrund des Fehlers nicht genehmigt: {err}',
      reports: {
        reportIsGenerating: 'Der Bericht wird erstellt. Bitte warten…',
        reportGeneratedSuccessfully: 'Bericht erfolgreich erstellt.',
        reportGeneratedWithError: 'Berichterstellung fehlgeschlagen: {err}'
      },
      certificates: {
        userCertificateTitle: 'Zertifikat',
        changeCertificateData: 'Zertifikatsdaten ändern',
        dialog: {
          title: 'Zertifikatsdaten ändern',
          nameLabel: 'Lernendenname ändern',
          changeButton: 'Ändern',
          success: 'Zertifikatsdaten erfolgreich für {name} geändert',
          error: 'Fehler beim Ändern der Zertifikatsdaten für {name}: {err}'
        }
      },
      detailed: {
        done: 'Erledigt',
        inProgress: 'In Bearbeitung',
        notStarted: 'Nicht begonnen',
        hidden: 'Ausgeblendet',
        locked: 'Gesperrt'
      },
      tabs: {
        detailedProgress: 'Detaillierter Fortschritt',
        enrolledUsers: 'Gesamtfortschritt',
        questionAnswersProgress: 'Quiz-Antworten',
        pendingUsers: 'Ausstehende Benutzer',
        pendingGrading: 'Ausstehende Bewertung',
        preCourseSurvey: 'Umfrage vor dem Kurs',
        postCourseSurvey: 'Umfrage nach dem Kurs'
      },
      pendingGrading: {
        learnerTableTitle: 'Lernender',
        actionsTableTitle: 'Aktionen',
        questionTableTitle: 'Frage',
        answerTableTitle: 'Antwort',
        fileTableTitle: 'Datei',
        noPendingGradingFound: 'Keine Antworten zur Bewertung gefunden.',
        feedbackTitle: 'Kursadmin-Feedback',
        feedbackFieldTitle: 'Feedback geben/ändern',
        openToGiveFeedback: 'Öffnen, um ein Feedback zu geben',
        changeFeedback: 'Feedback ändern'
      },
      questionAnswers: {
        questionTableTitle: 'Frage',
        userTableTitle: 'Benutzer',
        correctTableTitle: 'Korrekt',
        userAnswerTableTitle: 'Benutzerantwort'
      }
    },
    usersManagement: {
      title: 'Benutzerverwaltung',
      searchUserLabel: 'Benutzer per E-Mail suchen',
      searchUserPlaceholder: 'john.doe@gmail.com',
      emailTitle: 'E-Mail',
      nameTitle: 'Name',
      sourceTitle: 'Source',
      invitedTitle: 'Eingeladen',
      adminTitle: 'Workspace Admin',
      acceptedTitle: 'angenommene Einladung',
      sendInvitationToEveryone: 'Alle Benutzer einladen',
      sendInvitationToGroup: 'Einladung an {groupName} senden',
      invited: 'invited',
      accepted: 'angenommene Einladung',
      sendInvitation: 'Einladung senden',
      resendInvitation: 'Einladung erneut versenden',
      revokeAccess: 'Zugriffsrechte entziehen'
    },
    staffManagement: {
      title: 'Mitarbeiterführung',
      inviteUsersDialogTitle: 'Benutzer einladen',
      addUsers: 'Benutzer hinzufügen',
      uploadUsersCSV: 'Oder laden Sie eine CSV-Datei hoch <strong>(Format: Vorname, Nachname, E-Mail, Gruppe (optional))</strong>',
      inviteUsersDialogDescriptions: 'Neue Mitglieder erhalten eine E-Mail-Einladung',
      inviteUsersByEmail: 'Benutzer per E-Mail einladen',
      searchUserLabel: 'Mitarbeiter nach E-Mail Adresse des Benutzers suchen',
      searchUserPlaceholder: 'john.doe@gmail.com',
      emailTitle: 'E-Mail',
      hasCourseCreationRights: 'Kann Kurse erstellen',
      hasVoucherCreationRights: 'Kann Gutscheine erstellen',
      addCourseCreationRights: 'Rechte zum Erstellen von Kursen hinzufügen',
      tabs: {
        userTabTitle: 'Benutzer',
        groupTabTitle: 'Gruppen',
        syncTabTitle: 'Einladungen verwalten'
      },
      totalStudents: 'Gesamtzahl der gefundenen Lernenden {total}',
      noGroups: 'Noch keine Gruppen zugewiesen',
      searchGroup: 'Suchgruppen',
      searchUsers: 'Benutzer suchen',
      inactiveForDays: 'Inaktiv für Tage',
      inactiveFor: 'Inaktiv für:',
      inactiveDaysCount: 'Anzahl der inaktiven Tage',
      inactivityPeriods: {
        WEEK: 'Woche',
        TWOWEEKS: 'zwei Wochen',
        MONTH: 'Monat',
        HALFAYEAR: 'ein halbes Jahr',
        YEAR: 'Jahr'
      },
      createGroupButtonTitle: 'Gruppe erstellen',
      createUsersButtonTitle: 'Benutzer erstellen',
      detailsButtonTitle: 'Details',
      totalGroups: 'Insgesamt {total} Gruppen gefunden',
      totalUsers: 'Insgesamt {total} Benutzer gefunden',
      noRoles: 'Keine Rollen zugewiesen',
      noUsers: 'Keine Mitglieder in der Gruppe | Ein Mitglied | {n} Mitglieder',
      learningJorneyTitle: 'Lernreise',
      timeSpentLearningTitle: 'Lernzeit:',
      userCoursesTitle: 'Benutzerkurse (insgesamt {n})',
      lastUserCoursesTitle: 'Benutzerkurse ({n})',
      lastUserLearningPathsTitle: 'Lernpfade des Benutzers ({n})',
      userTitle: 'Benutzer',
      usersTitle: 'Benutzer',
      coursesTitle: 'Kurse',
      skillsTitle: 'Skills',
      groupsTitle: 'Gruppen',
      assignSkillButton: 'Skill zuweisen',
      removeSkillButton: 'Fertigkeit entfernen',
      assignSkillsToUserTitle: 'Skills {name} zuweisen',
      assignGroupButton: 'Gruppe zuweisen',
      assignGroupsToUserTitle: 'Gruppen zu {name} zuweisen',
      assignUserToGroupButton: 'Benutzer zur Gruppe hinzufügen',
      removeUserFromGroupButton: 'Benutzer aus der Gruppe entfernen',
      permissionsTitle: 'Berechtigungen',
      assignPermissionButton: 'Berechtigungen ändern',
      blockUserButton: 'Benutzer blockieren',
      unBlockUserButton: 'Benutzer entsperren',
      deleteUserButton: 'Benutzer löschen',
      userBlockedSuccessfully: 'Benutzer {name} erfolgreich blockiert',
      userBlockedWithError: 'Fehler beim Blockieren des Benutzers {name}: {errorText}',
      userUnblockedSuccessfully: 'Benutzer {name} erfolgreich entsperrt',
      userUnblockedWithError: 'Beim Blockieren des Benutzers {name} ist ein Fehler aufgetreten: {errorText}',
      userDeletedSuccessfully: 'Benutzer {name} erfolgreich gelöscht',
      userDeletedWithError: 'Beim Löschen des Benutzers {name} ist ein Fehler aufgetreten: {errorText}',
      noSkillsYet: 'Noch keine Skills erworben',
      userCard: {
        name: 'Name',
        memberSince: 'Mitglied seit',
        email: 'Email',
        role: 'Rolle',
        group: 'Gruppen',
        timeSpentLearning: 'Insgesamt verbrachte Zeit mit Lernen auf {workspaceName}:',
        nameAndEmail: 'Name und E-Mail',
        status: 'Status'
      },
      roles: {
        ROLE_STUDENT: 'Student',
        ROLE_ADMIN: 'Workspace Administrator',
        ROLE_COURSE_ADMIN: 'Kursadministrator',
        ROLE_VOUCHER_ADMIN: 'Gutschein-Admin',
        ROLE_FILE_UPLOAD: 'Datei-Upload',
        ROLE_INTEGRATIONS_MANAGER: 'Integrations-Administrator'
      },
      statuses: {
        filterLabel: 'Benutzerstatus',
        inactiveUserCourses: 'Inaktiv',
        blockedUser: 'Deaktiviert',
        running: 'Aktiv',
        finished: 'Abgeschlossen',
        archived: 'Archiviert',
        abandoned: 'Abgebrochen',
        inactiveUserExplanation: 'Dieser Benutzer macht in einem der Kurse keine Fortschritte.'
      },
      notifyInactivityButton: 'Inaktivität benachrichtigen',
      resultsFound: 'Keine Ergebnisse gefunden | {n} Ergebnis gefunden | {n} Ergebnisse gefunden',
      notifications: {
        modal: {
          sendAlert: 'Sie sind dabei, die folgende Benachrichtigung an diesen Benutzer zu senden.',
          sendButton: 'Jetzt senden',
          inactiveUserCourses: {
            title: 'Inaktivität benachrichtigen',
            description: '',
            defaultMessage: 'Sieht so aus, als ob Sie bei einigen Ihrer Kurse seit langer Zeit keine Fortschritte gemacht haben. Bitte kehren Sie zu Ihren aktiven Kursen zurück oder bitten Sie Ihren Administrator, Sie einem neuen zuzuweisen.'
          },
          notificationSentSuccessfully: 'Benachrichtigung erfolgreich gesendet!',
          notificationSentWithError: 'Beim Senden der Benachrichtigung an den Benutzer ist ein Fehler aufgetreten: {errorText}'
        }
      },
      inviteUserSuccessful: 'Benutzer {name} wurde erfolgreich eingeladen',
      inviteGroupUsersSuccessful: 'Alle Benutzer der Gruppe {name} wurden erfolgreich eingeladen',
      inviteUserError: 'Es gab einen Fehler beim Einladen des Benutzers {name}: {err}',
      inviteGroupUsersError: 'Es gab einen Fehler beim Einladen der Benutzer der Gruppe {name}: {err}',
      addUsersSuccessful: 'Benutzer wurden erfolgreich hinzugefügt',
      addUsersError: 'Es gab einen Fehler beim Hinzufügen der Benutzer: {err}',
      groups: {
        title: 'Gruppentitel',
        participants: 'Teilnehmer',
        source: 'Quelle',
        created: 'Erstellt'
      }
    },
    campaignManagement: {
      titleCampaigns: 'Kampagnen',
      searchCampaign: 'Kampagnen suchen',
      totalCampaigns: 'Insgesamt Kampagnen gefunden: {total} ',
      titleCampaign: 'Kampagnen – {name} – {courseName}',
      createCampaign: 'Neue Kampagne erstellen',
      createDiscountCampaign: 'Neuen Rabatt erstellen',
      discountLabel: 'Rabatt (%)',
      noCampaigns: 'Noch keine Kampagnen erstellt',
      campaignName: 'Kampagnen Name',
      startDate: 'Startdatum',
      expireDate: 'Ablaufdatum',
      maxUsages: 'Maximale Anzahl von Verwendungen',
      newCampaign: 'Neue Kampagne',
      voucherCode: 'Registrierungscode',
      voucherUsage: 'Anzahl der Verwendungen',
      noVouchers: 'Der Kampagne wurden noch keine Gutscheine hinzugefügt',
      addVouchers: 'Gutscheine generieren',
      currentUsage: 'Verwendungen',
      campaignNameLabel: 'Kampagnen Name ändern',
      uniqueRedeem: 'Einzigartig einlösen',
      multipleRedeem: 'Mehrfach einlösen',
      campaignType: 'Kampagnentyp',
      withMaxNumberUsages: 'mit maximaler Nutzungshäufigkeit {maxUsages} Mal',
      editCampaign: 'Kampagne bearbeiten',
      deactivate: 'Kampagne für den Kurs deaktivieren',
      activate: 'Kampagne für den Kurs aktivieren',
      addMoreVouchers: 'Gutscheine generieren',
      uniqueRedeemExplanation: 'Mit dieser Kampagne verbundene Codes sind persönlich und können nur einmal eingelöst werden',
      multipleRedeemExplanation: 'Mit dieser Kampagne verbundene Codes können mehrmals eingelöst werden',
      newCampaignNameLabel: 'Der Kampagne einen Namen geben',
      campaignCourse: 'Kurs suchen',
      hideExpiredCampaigns: 'Abgelaufene Kampagnen verbergen',
      showExpiredCampaigns: 'Abgelaufene Kampagnen anzeigen',
      noPaymentInformationAlert: 'Es wurden keine Zahlungsinformationen angegeben. Bitte wählen Sie einen Kurs aus oder konfigurieren Sie die Zahlungsinformationen im ausgewählten Kurs.',
      paymentWithDiscountInfo: 'Ursprünglicher Kurspreis ist <strong>{price} {currency}</strong>. Der ermäßigte Preis beträgt <strong>{discounted} {currency}</strong>',
      campaignTypes: {
        labels: {
          COURSE_ENROLLMENT: 'Kampagne zur Beschränkung des Kurszugangs',
          COURSE_PERCENT_DISCOUNT: 'Zahlungsrabattkampagne'
        }
      },
      voucherActivated: {
        voucherActivatedMessage: 'Gutschein-Aktivierung für diesen Kurs ist aktiviert',
        voucherNotActivatedMessage: 'Vergessen Sie nicht, die Voucher-Aktivierung für diesen Kurs zu aktivieren',
        editCourseLinkText: 'Kurs bearbeiten'
      },
      editVoucherCodeLabel: 'Gutscheincode bearbeiten',
      editButton: 'Bearbeiten',
      editVoucherCodeSuccess: 'Der Gutscheincode wurde erfolgreich auf {code} geändert.',
      editVoucherCodeError: 'Beim Ändern des Gutscheincodes zu {code} ist ein Fehler aufgetreten: {err}',
      requiredInvalidMessage: 'Dies ist ein Pflichtfeld',
      periodInvalidMessage: 'Muss eine positive ganze Zahl sein',
      discountInvalidMessage: 'Der Rabatt muss zwischen 1 und 100 liegen.'
    },
    integrationsManagement: {
      newPopupTitle: 'Neue {name} Verbindung',
      editPopupTitle: 'Verbindung {name} bearbeiten',
      title: 'Integrationen',
      clientIdLabel: 'Kunden ID',
      clientSecretLabel: 'Kunden Geheimnis',
      documentCategoryLabel: 'Document category ID',
      clientEndpointLabel: 'Kunden Endpunkt',
      subdomainLabel: 'Subdomain (Ihres BambooHR Arbeitsbereichs)',
      tokenEndpointLabel: 'Token Endpunkt',
      responseTypeLabel: 'Antworttyp',
      scopeLabel: 'Scope',
      userEndpointLabel: 'Benutzer API Endpunkt',
      emailPropertyLabel: 'E- Mail Eigenschaft',
      authorizationEndpointLabel: 'Autorisierungsendpunkt',
      syncLabel: 'Verwaltung von Einladungen',
      syncUsersLabel: 'Sync',
      apiKeyLabel: 'API Schlüssel',
      appNameLabel: 'App Name',
      appKeyLabel: 'App Schlüssel',
      disqusIdLabel: 'Disqus ID',
      stripePublishableKeyLabel: 'Stripe veröffentlichbarer Schlüssel',
      stripeSecretKeyLabel: 'Stripe geheimer Schlüssel',
      stripeDefaultTaxId: 'Stripe Standard-Steuersatz-ID',
      stripeTaxationCountry: 'Stripe Steuerland',
      useInvoicing: 'Rechnungsstellung verwenden',
      paymentMethodConfigurationId: 'Zahlungsmethoden-Konfigurations-ID',
      openAiSecretKeyLabel: 'Open AI Secret Key',
      peopleForceApiKeyLabel: 'PeopleForce API Key',
      ripplingApiKeyLabel: 'Rippling API Key',
      liqpayPrivateKeyLabel: 'LiqPay Privatschlüssel',
      liqpayPublicKeyLabel: 'LiqPay öffentlicher Schlüssel',
      liqpaySandboxLabel: 'Ist es ein Testmodus?',
      xTokenKeyLabel: 'xToken',
      categories: {
        HR: 'Personalwesen',
        PAYMENT: 'Zahlungsdienste',
        CONTENT: 'Inhaltserstellung',
        SOCIAL: 'Sozial',
        DEFAULT: 'Defalut',
        DEV: 'Entwicklung – Authentifizierung, Webhooks, E-Mails',
        CRM: 'CRM'
      },
      personio: {
        description: '',
        explanation: '<ul>' +
          '<li>Go to settings > People > Documents > Categories and create a new category or just use one that suits uploading course certificates. Extract the id (by placing the mouse pointer above the category for example).</li>' +
          '<li>Go to Settings > API credentials. Create a new API Key (or reuse one of your choice). Give it a name, and select integration "Workademy"</li>' +
          '<li>Provide read access to "employees" and "documents" and write access to "documents". Select the following attributes: email, first name,  last name, employee id, and status.</li>' +
          '<li>Configure your integration with the information you collected, save, and synchronize.</li></ul>',
        syncSuccessful: 'Die Synchronisierung der Benutzer mit Personio war erfolgreich. Gehen Sie zur Benutzerverwaltungs Konsole, um die Einladungen zu überprüfen.',
        syncError: 'Die Synchronisierung der Benutzer mit Personio war nicht erfolgreich. {err}',
        connectSuccessful: 'Integration mit Personio API erfolgreich konfiguriert',
        connectError: 'Fehler beim Verbinden mit Personio. {err}',
        deleteSuccessful: 'Die Integration mit der Personio API wurde erfolgreich gelöscht',
        deleteError: 'Fehler beim Löschen der Integration mit Personio. {err}',
        mappingInstructions: 'Ordnen Sie die Werte benutzerdefinierter Felder in Personio den Gruppen in Workademy zu.',
        fieldValuesLabel: 'Feldwerte (drücken Sie Leertaste oder Tab zum Hinzufügen)',
        fieldNamePlaceholder: 'Feldname eingeben',
        valueInputPlaceholder: 'Wert eingeben und Leertaste/Tab drücken',
        addFieldButton: 'Benutzerdefiniertes Feld hinzufügen',
        certificateNameTemplateLabel: 'Zertifikatsnamen-Vorlage',
        certificateNameTemplateHint: 'Verfügbare Variablen: &#36;{{userName}}, &#36;{{date}}, &#36;{{courseName}}'
      },
      bamboo_hr: {
        description: '',
        explanation: 'Melden Sie sich bei Ihrem BambooHR-Administratorkonto an. Die Subdomain ist ein Teil der URL, die Ihr Unternehmen repräsentiert, z.B wenn es sich um company.bamboohr.com handelt, dann ist die Subdomain “company”. Klicken Sie auf Ihr Profilbild und wählen Sie dann API-Schlüssel aus. Fügen Sie einen neuen Schlüssel hinzu und kopieren Sie den Wert des API-Schlüssels hinterher.',
        syncSuccessful: 'Die Synchronisierung der Benutzer mit BambooHR war erfolgreich. Gehen Sie zur Benutzunerverwaltungs Konsole, um die Einstellungen zu überprüfen.',
        syncError: 'Die Synchronisierung von Benutzern mit BambooHR war nicht erfolgreich. {err}',
        connectSuccessful: 'Die Integration mit Ihrer BambooHR-API wurde erfolgreich konfiguriert',
        connectError: 'Fehler beim Verbinden mit BambooHR. {err}',
        deleteSuccessful: 'Die Integration mit der BambooHR- API wurde erfolgreich gelöscht',
        deleteError: 'Fehler beim Löschen der Integration mit BambooHR. {err}'
      },
      sage: {
        description: '',
        explanation: 'Melden Sie sich bei Ihrem Sage-Administratorkonto an. Die Subdomain ist ein Teil der URL, die Ihr Unternehmen repräsentiert, z.B wenn es sich um company.sage.com handelt, dann ist die Subdomain “company”. Klicken Sie auf Ihr Profilbild und wählen Sie dann API-Schlüssel aus. Fügen Sie einen neuen Schlüssel hinzu und kopieren Sie den Wert des API-Schlüssels hinterher.',
        syncSuccessful: 'Die Synchronisierung der Benutzer mit Sage war erfolgreich. Gehen Sie zur Benutzunerverwaltungs Konsole, um die Einstellungen zu überprüfen.',
        syncError: 'Die Synchronisierung von Benutzern mit BambooHR war nicht erfolgreich. {err}',
        connectSuccessful: 'Die Integration mit Ihrer Sage-API wurde erfolgreich konfiguriert',
        connectError: 'Fehler beim Verbinden mit Sage. {err}',
        deleteSuccessful: 'Die Integration mit der Sage- API wurde erfolgreich gelöscht',
        deleteError: 'Fehler beim Löschen der Integration mit Sage. {err}'
      },
      custom_oauth2: {
        description: '',
        explanation: '',
        syncSuccessful: 'Die Synchronisierung der Benutzer mit OAuth2 war erfolgreich. Gehen Sie zur Benutzerverwaltungs Konsole, um die Einstellungen zu überprüfen.',
        syncError: 'Die Synchronisierung von Benutzern mit OAuth2 war nicht erfolgreich. {err}',
        connectSuccessful: 'Die Integration mit Ihrer OAuth2-API wurde erfolgreich konfiguriert',
        connectError: 'Fehler beim Verbinden mit OAuth2. {err}',
        deleteSuccessful: 'Die Integration mit dem OAuth2-Server wurde erfolgreich gelöscht',
        deleteError: 'Fehler beim Löschen der Integration mit dem OAuth2-Server. {err}',
        authenticationScheme: 'Authentifizierungsschema',
        postAuthCheckTitle: 'Nach-Authentifizierungsprüfung',
        enablePostCheck: 'Nach-Authentifizierungsprüfung aktivieren',
        availableVarsTitle: 'Verfügbare Variablen',
        addVarsLabel: 'Variablen aus der OAuth2-Antwort hinzufügen',
        varsPlaceholder: 'z.B. abonnementStatus, kontotyp',
        varsHint: 'Diese Variablen werden im Bedingungseditor verfügbar sein',
        conditionTitle: 'Bedingung',
        varLabel: 'Variable',
        operatorLabel: 'Operator',
        valueLabel: 'Wert',
        conditionPreview: 'Bedingungsvorschau:',
        actionTitle: 'Aktion',
        actionType: 'Aktionstyp',
        redirectUrl: 'Weiterleitungs-URL'
      },
      oauth2: {
        description: '',
        explanation: 'Konfigurieren Sie hier Ihren OAuth2-Zugang. Alle Attribute sind verpflichtend. <p><strong>NOTE</strong>: in Ihrem OAuth2-Server konfigurieren Sie die <em>redirect_uri</em> as <em>https://{hostname}/signin/</em>.</p>',
        syncSuccessful: 'Die Synchronisierung der Benutzer mit OAuth2 war erfolgreich. Gehen Sie zur Benutzerverwaltungs Konsole, um die Einladungen zu überprüfen.',
        syncError: 'Die Synchronisierung von Benutzern mit OAuth2 war nicht erfolgreich. {err}',
        connectSuccessful: 'Die Integration mit Ihrer OAuth2-API wurde erfolgreich konfiguriert',
        connectError: 'Fehler beim Verbinden mit OAuth2. {err}',
        deleteSuccessful: 'Die Integration mit der OAuth2-API wurde erfolgreich gelöscht',
        deleteError: 'Fehler beim Löschen der Integration mit dem OAuth2-Server. {err}'
      },
      push_notification: {
        description: '',
        explanation: 'Konfigurieren Sie hier Ihren Endpunkt für Push-Benachrichtigungen. Stellen Sie sicher, dass ihr Endpunkt die Autorisierung “Basic”, den Inhaltstyp “application/json” und die Methode “POST” akzeptiert.',
        connectSuccessful: 'Die Integration mit Ihrem Endpunkt für Push-Benachrichtigungen wurde erfolgreich konfiguriert.',
        syncError: 'Die Synchronisierung mit dem Endpunkt Push-Benachrichtigungen war nicht erfolgreich. {err}',
        connectError: 'Fehler beim Verbinden mit dem Endpunkt für Push-Benachrichtigungen. {err}',
        deleteSuccessful: 'Die Integration mit dem Endpunkt für Push-Benachrichtigungen wurde erfolgreich gelöscht',
        deleteError: 'Fehler beim Löschen der Integration mit dem Endpunkt für Push-Benachrichtigungen. {err}'
      },
      loom: {
        description: '',
        explanation: 'Öffnen Sie Ihr Loom und kopieren Sie den App-Namen und den App-Schlüssel',
        syncSuccessful: 'Synchronisierung mit Loom erfolgreich',
        syncError: 'Synchronisierung mit Loom fehlgeschlagen. {err}',
        connectSuccessful: 'Integration mit Loom SDK erfolgreich!',
        connectError: 'Fehler beim Verbinden mit Loom SDK. {err}',
        deleteSuccessful: 'Die Integration mit dem Loom SDK wurde erfolgreich gelöscht',
        deleteError: 'Fehler beim Löschen der Integration mit Loom SDK. {err}'
      },
      disqus: {
        description: '',
        explanation: 'Öffnen Sie ihr Disqus-Konto und kopieren Sie den App-Namen',
        syncSuccessful: 'Synchronisierung mit Disqus erfolgreich',
        syncError: 'Synchronisierung mit Disqus fehlgeschlagen. {err}',
        connectSuccessful: 'Integration mit Disqus nicht erfolgreich!',
        connectError: 'Fehler beim Verbinden mit Disqus. {err}',
        deleteSuccessful: 'Die Integration mit Disqus wurde erfolgreich gelöscht',
        deleteError: 'Fehler beim Löschen der Integration mit Disqus. {err}'
      },
      stripe: {
        description: '',
        explanation: '<div>\n' +
          '  <h2>Erklärung:</h2>\n' +
          '  <ol>\n' +
          '    <li>\n' +
          '      <strong>Publishable Key:</strong><br />\n' +
          '      Öffnen Sie Ihr <a href="https://dashboard.stripe.com" target="_blank" class="tw-underline">Stripe-Dashboard</a> und kopieren Sie den <strong>Publishable Key</strong> aus den API-Einstellungen.\n' +
          '    </li>\n' +
          '    <li>\n' +
          '      <strong>Standard-Steuersatz-ID:</strong><br />\n' +
          '      Gehen Sie zum <a href="https://dashboard.stripe.com/tax-rates" target="_blank" class="tw-underline">Bereich Steuersätze</a> in Ihrem Stripe-Dashboard.<br />\n' +
          '      - Kopieren Sie eine bestehende <strong>inklusive Steuersatz-ID</strong>, oder<br />\n' +
          '      - Erstellen Sie bei Bedarf eine neue inklusive Steuersatz-ID.\n' +
          '    </li>\n' +
          '    <li>\n' +
          '      <strong>Besteuerungsland:</strong><br />\n' +
          '      Wählen Sie das Land aus, in dem Ihre Firma steuerlich registriert ist.<br />\n' +
          '      - Nur Nutzer in diesem Land werden besteuert.\n' +
          '    </li>\n' +
          '  </ol>\n' +
          '</div>\n',
        syncSuccessful: 'Synchronisierung mit Stripe erfolgreich',
        syncError: 'Synchronisierung mit Stripe nicht erfolgreich. {err}',
        connectSuccessful: 'Integration mit Stripe erfolgreich',
        connectError: 'Fehler beim Verbinden mit Stripe. {err}',
        deleteSuccessful: 'Integration mit Stripe erfolgreich gelöscht',
        deleteError: 'Fehler beim Löschen der Integration mit Stripe. {err}'
      },
      liqpay: {
        description: '',
        explanation: 'Öffnen Sie Ihr LiqPay-Dashboard und kopieren Sie private und öffentliche Schlüssel. Geben Sie an, ob es sich um eine Testumgebung handelt.',
        syncSuccessful: 'Synchronisation mit LiqPay erfolgreich',
        syncError: 'Synchronisation mit LiqPay nicht erfolgreich. {err}',
        connectSuccessful: 'Integration mit LiqPay erfolgreich',
        connectError: 'Fehler bei der Verbindung mit LiqPay. {err}',
        deleteSuccessful: 'Integration mit LiqPay erfolgreich gelöscht',
        deleteError: 'Fehler beim Löschen der Integration mit LiqPay. {err}'
      },
      revolut: {
        description: '',
        explanation: 'Öffnen Sie Ihr Revolut Dashboard und kopieren Sie die Client-Geheimnisschlüssel.',
        syncSuccessful: 'Synchronisation mit Revolut erfolgreich',
        syncError: 'Synchronisation mit Revolut nicht erfolgreich. {err}',
        connectSuccessful: 'Integration mit Revolut erfolgreich',
        connectError: 'Fehler bei der Verbindung mit Revolut. {err}',
        deleteSuccessful: 'Integration mit Revolut erfolgreich gelöscht',
        deleteError: 'Fehler beim Löschen der Integration mit Revolut. {err}'
      },
      open_ai: {
        description: '',
        explanation: 'Öffnen Sie Ihr Open AI Dashboard und kopieren Sie Ihren Schlüssel',
        syncSuccessful: 'Synchronisation mit Open AI erfolgreich',
        syncError: 'Synchronisation mit Open AI nicht erfolgreich. {err}',
        connectSuccessful: 'Integration mit Open AI erfolgreich',
        connectError: 'Fehler beim Verbinden mit Open AI. {err}',
        deleteSuccessful: 'Integration mit Open AI erfolgreich gelöscht',
        deleteError: 'Fehler beim Löschen der Integration mit Open AI. {err}'
      },
      people_force: {
        description: '',
        explanation: 'Öffnen Sie Ihr PeopleForce-Dashboard und kopieren Sie Ihren API-Schlüssel',
        syncSuccessful: 'Synchronisation mit PeopleForce erfolgreich',
        syncError: 'Synchronisation mit PeopleForce nicht erfolgreich. {err}',
        connectSuccessful: 'Integration mit PeopleForce erfolgreich',
        connectError: 'Fehler bei der Verbindung mit PeopleForce. {err}',
        deleteSuccessful: 'Integration mit PeopleForce erfolgreich gelöscht',
        deleteError: 'Fehler beim Löschen der Integration mit PeopleForce. {err}'
      },
      rippling: {
        description: '',
        explanation: 'Wenn Sie den API KEy als Authentifizierungsmodus wählen, müssen Sie Ihr Rippling-Dashboard öffnen und Ihren API-Schlüssel kopieren. Wenn Sie den Authentifizierungsmodus "User Credentials" wählen, müssen Sie nichts tun.',
        syncSuccessful: 'Synchronisierung mit Rippling erfolgreich',
        syncError: 'Synchronisierung mit Rippling nicht erfolgreich. {err}',
        connectSuccessful: 'Integration mit Rippling erfolgreich',
        connectError: 'Fehler beim Verbinden mit Rippling. {err}',
        deleteSuccessful: 'Integration mit Rippling erfolgreich gelöscht',
        deleteError: 'Fehler beim Löschen der Integration mit Rippling. {err}'
      },
      deel: {
        description: '',
        explanation: 'Öffnen Sie Ihr Deel-Dashboard und kopieren Sie den API-Zugriffsschlüssel.',
        syncSuccessful: 'Synchronisation mit Deel erfolgreich',
        syncError: 'Synchronisation mit Deel nicht erfolgreich. {err}',
        connectSuccessful: 'Integration mit Deel erfolgreich',
        connectError: 'Fehler bei der Verbindung zu Deel. {err}',
        deleteSuccessful: 'Integration mit Deel erfolgreich gelöscht',
        deleteError: 'Fehler beim Löschen der Integration mit Deel. {err}'
      },
      monobank: {
        description: '',
        explanation: 'Öffnen Sie Ihr Monobank-Dashboard und kopieren Sie Ihr xToken.',
        syncSuccessful: 'Synchronisation mit Monobank erfolgreich',
        syncError: 'Synchronisation mit Monobank nicht erfolgreich. {err}',
        connectSuccessful: 'Integration mit Monobank erfolgreich',
        connectError: 'Fehler bei der Verbindung mit Monobank. {err}',
        deleteSuccessful: 'Integration mit Monobank erfolgreich gelöscht',
        deleteError: 'Fehler beim Löschen der Integration mit Monobank. {err}'
      },
      hi_bob: {
        description: '',
        explanation: 'Melden Sie sich in Ihrem HiBob-Dashboard an und kopieren Sie Ihre clientId und clientSecret Schlüssel.',
        syncSuccessful: 'Synchronisation mit HiBob erfolgreich',
        syncError: 'Synchronisation mit HiBob nicht erfolgreich. {err}',
        connectSuccessful: 'Integration mit HiBob erfolgreich',
        connectError: 'Fehler beim Verbinden mit HiBob. {err}',
        deleteSuccessful: 'Integration mit HiBob erfolgreich gelöscht',
        deleteError: 'Fehler beim Löschen der Integration mit HiBob. {err}'
      },
      brevo: {
        description: '',
        eventTemplateMappingLabel: 'Vorlagen-Zuordnung',
        eventTemplateMappingDescription: 'Ordnen Sie Ihre Workademy E-Mail-Vorlagen den Brevo-Vorlagen zu, indem Sie die entsprechenden Brevo-Vorlagen-IDs eingeben.',
        explanation: 'Melden Sie sich in Ihrem <strong><u><a href="https://app.brevo.com/settings/keys/api" target="_blank">Brevo-Dashboard</a></u></strong> an und kopieren Sie Ihren API-Schlüssel.',
        syncSuccessful: 'Synchronisation mit Brevo erfolgreich.',
        syncError: 'Synchronisation mit Brevo war nicht erfolgreich. {err}',
        connectSuccessful: 'Integration mit Ihrem Brevo-Konto erfolgreich konfiguriert',
        connectError: 'Fehler bei der Verbindung mit Brevo. {err}',
        deleteSuccessful: 'Integration mit Brevo erfolgreich gelöscht',
        deleteError: 'Fehler beim Löschen der Integration mit Brevo. {err}',
        templateMappingExplanation: 'Vorlagen-IDs finden Sie in Ihrem <strong><u><a href="https://app.brevo.com/templates/listing" target="_blank">Brevo-Konto</a></u></strong> im Bereich E-Mail-Vorlagen.',
        defaultEmailsWhenNoMapping: 'Standard-E-Mails verwenden, wenn keine Zuordnung vorhanden ist (empfohlen).',
        templateMappingHeaders: {
          lmsTemplate: 'Vorlagen-Workademy',
          audience: 'Zielgruppe',
          description: 'Beschreibung',
          brevoTemplateID: 'Brevo-Vorlagen-ID'
        },
        templateMappingAudience: {
          learner: 'Lernende/r',
          admin: 'Administrator/in',
          any: 'jede/r'
        },
        templateMapping: {
          check_user_courses_notification_event: {
            title: 'Kursfortschritt prüfen',
            description: 'Wird an den Lernenden gesendet, um auf Inaktivität hinzuweisen'
          },
          new_open_ended_question_answered_event: {
            title: 'Neue offene Antwort',
            description: 'Benachrichtigt einen Administrator, wenn ein Lernender eine offene Antwort einreicht'
          },
          new_open_ended_question_graded_event: {
            title: 'Offene Frage bewertet',
            description: 'Benachrichtigt den Lernenden, wenn seine offene Frage bewertet wurde'
          },
          pending_user_course_approval_event: {
            title: 'Anmeldung ausstehend',
            description: 'Benachrichtigt den Administrator über eine ausstehende Kursanmeldung'
          },
          registration_event: {
            title: 'Neuer Benutzer registriert',
            description: 'Wird gesendet, wenn sich ein neuer Benutzer auf der Plattform registriert'
          },
          reset_password_event: {
            title: 'Passwortzurücksetzung angefordert',
            description: 'Wird gesendet, wenn ein Benutzer eine Passwortzurücksetzung anfordert'
          },
          user_course_assigned_event: {
            title: 'Neuer Kurs zugewiesen',
            description: 'Benachrichtigt den Lernenden über eine neue Kurszuweisung'
          },
          user_learning_path_assigned_event: {
            title: 'Neuer Lernpfad zugewiesen',
            description: 'Benachrichtigt den Lernenden über eine neue Lernpfad-Zuweisung'
          },
          workspace_invitation_event: {
            title: 'Einladung zum Workspace',
            description: 'Wird gesendet, wenn der Benutzer eingeladen wird, einem Workspace beizutreten'
          }
        }
      },
      salesforce_mc: {
      description: 'Salesforce Marketing Cloud',
      explanation: 'Sende automatisierte, personalisierte Transaktions-E-Mails aus Workademy mit deinem Salesforce Marketing Cloud-Konto.',
      syncSuccessful: 'Synchronisation mit Salesforce Marketing Cloud erfolgreich.',
      syncError: 'Synchronisation mit Salesforce Marketing Cloud nicht erfolgreich. {err}',
      connectSuccessful: 'Integration mit Salesforce Marketing Cloud erfolgreich!',
      connectError: 'Fehler bei der Verbindung mit Salesforce Marketing Cloud. {err}',
      deleteSuccessful: 'Integration mit Salesforce Marketing Cloud erfolgreich gelöscht.',
      deleteError: 'Fehler beim Löschen der Integration mit Salesforce Marketing Cloud. {err}',
      subdomainLabel: 'Subdomain',
      templateMapping: {
        welcome_to_course_event: {
          title: 'Willkommen zur Kursveranstaltung',
          description: 'Willkommen zur Kursveranstaltung'
        }
      },
      templateMappingHeaders: {
        salesforceTemplateID: 'Vorlagen-ID'
      }
  }
    },
    learningArtifactsManagement: {
      learningArtifactsManagement: 'Artefaktverwaltung', // Google translate...
      skillsTitle: 'Skills',
      achievementsTitle: 'Achievements',
      avatarsTitle: 'Avatars',
      skillLevel: 'Keine Stufen | Stufe 1 | Stufe {n}',
      skillLevelNameLabel: 'Skill-Name',
      skillLevelDescriptionLabel: 'Skill-Beschreibung',
      editCard: {
        numberOfLevelsSubtitle: 'Keine Ebenen | Keine Ebenen | {n} Ebenen'
      },
      noSkills: 'neue Skills werden bald eintreffen.',
      noAchievements: 'Neue Errungenschaften werden bald verfügbar sein'
    },
    workspaceManagement: {
      title: 'Workspaceverwaltung',
      tabs: {
        general: {
          title: 'Allgemein',
          workspaceName: {
            title: 'Name des Workspace',
            subtitle: 'Legen Sie den Namen des Workspace fest oder bearbeiten Sie ihn.',
            label: 'Workspace eingeben',
            rules: {
              required: 'Name ist erforderlich',
              lessThan: 'Name muss weniger als 64 Zeichen lang sein',
              invalidCharacters: 'Sonderzeichen sind nicht erlaubt'
            }
          },
          language: {
            title: 'Standardsprache',
            subtitle: 'Konfigurieren Sie die Standardsprache für den Workspace.',
            label: 'Standardsprache wählen'
          },
          privacySettings: {
            title: 'Datenschutzeinstellungen des Workspace',
            subtitle: 'Steuern Sie, ob der Workspace öffentlich ist und von Suchmaschinen indiziert werden kann.',
            label: 'Öffentlicher Workspace'
          },
          inviteOnly: {
            title: 'Optionen für den Beitritt zum Workspace',
            subtitle: 'Legen Sie fest, ob der Workspace für jeden zugänglich ist oder nur auf Einladung.',
            label: 'Nur auf Einladung'
          }
        },
        apiKeys: {
          title: 'API-Key',
          noApiKeys: 'Sie haben noch keine API-Key',
          errorCreating: 'Fehler beim Erstellen des API-Key: {error}',
          errorDeleting: 'Fehler beim Löschen des API-Key: {error}',
          copySuccessful: 'API-Key erfolgreich kopiert.',
          copyError: 'API-Key konnte nicht kopiert werden: {error}',
          createApiKeyButton: 'API-Key jetzt erstellen',
          removeApiKeyButton: 'API-Key entfernen'
        },
        userInteraction: {
          title: 'Benutzerinteraktion'
        },
        seoMetadata: {
          title: 'SEO & Metadaten',
          subtitle: 'Verwalten Sie Meta-Tags für Suchmaschinen und soziale Netzwerke (z.B. OpenGraph, Twitter Cards).',
          pageTitleLabel: 'Seitentitel',
          pageKeywordsLabel: 'Seiten-Schlüsselwörter',
          pageDescriptionLabel: 'Beschreibung',
          twitter: {
            title: 'Twitter/X',
            titleLabel: 'Twitter-Titel',
            descriptionLabel: 'Beschreibung'
          },
          opengraph: {
            title: 'OpenGraph',
            titleLabel: 'OpenGraph-Titel',
            descriptionLabel: 'OpenGraph-Beschreibung'
          },
          rules: {
            maxChars: 'Maximal {characters} Zeichen',
            alphaNumericSpacePunctuation: 'Es sind nur alphanumerische Zeichen, Leerzeichen und Satzzeichen erlaubt',
            alphaNumericCommasSpaces: 'Es sind nur alphanumerische Zeichen, Kommas und Leerzeichen erlaubt',
            alphaNumericCommasSpacesPipe: 'Es sind nur alphanumerische Zeichen, Leerzeichen und die Symbole |, - erlaubt',
            alphaNumericCommasSpacesPipeDash: 'Es sind nur alphanumerische Zeichen, Leerzeichen und die Symbole |, -, : erlaubt',
            invalidOpenGraphImage: 'Das hochgeladene Bild muss in einem der folgenden Formate vorliegen: JPG, PNG oder GIF.'
          }
        },
        popups: {
          title: 'Pop-ups',
          preEnrollPopup: {
            title: 'Kursvoranmeldung Pop-up',
            addDefaultContentButton: 'Mit Standardinhalt füllen'
          }
        },
        lookandfeel: {
          title: 'Look-and-Feel',
          folderView: {
            title: 'Assets-Anzeige',
            subtitle: 'Konfigurieren Sie, wie Kurse den Lernenden angezeigt werden',
            label: 'Ansicht',
            folder: 'Ordner',
            flat: 'Flach'
          }
        }
      }
    },
    mainAdminPage: {
      checkStudentsProgressTitle: 'Fortschritt der Studenten überprüfen',
      checkStudentsProgressDescription: 'Fortschritt der Studenten für jeden Kurs überprüfen und Reports erstellen.',
      checkAnalyticsDashboardTitle: 'Analyse-Dashboard überprüfen',
      checkAnalyticsDashboardDescription: 'In diesem Arbeitsbereich befinden sich allgemeine Auswertungen, Charts und Dashboards.',
      manageRolesTitle: 'Mitarbeiter dieses Arbeitsbereich verwalten',
      manageRolesDescription: 'Dem Benutzer dieses Arbeitsbereichs Rechte zur Kurserstellung hinzufügen oder entziehen',
      manageUsersTitle: 'Benutzer und Gruppen des Arbeitsbereichs verwalten',
      manageUsersDescription: 'Skills zuweisen, Benutzer blockieren, Rechte für die Benutzer dieses Arbeitsbereichs hinzufügen oder entziehen. Synchronisieren Sie die Benutzer von den integrierten Plattformen.',
      manageCampaignsTitle: 'Aktionen und Gutscheincodes verwalten',
      manageCampaignsDescription: 'Kampagnen für Kurse hinzufügen, bearbeiten, löschen und deren Gutschein- oder Einschreibecodes verwalten',
      manageIntegrationsTitle: 'Integrationen verwalten',
      manageIntegrationsDescription: 'Integrationen mit Tools und Plattformen von Drittanbietern hinzufügen, verwalten oder entfernen',
      manageLearningArtefactsTitle: 'Lernartefakte verwalten',
      manageLearningArtefactsDescription: 'Lernartefakte wie Fertigkeiten hinzufügen, verwalten und entfernen',
      manageWorkspaceTitle: 'Workspace Management',
      manageWorkspaceDescription: 'Einstellungen für Ansicht (Look&Feel), globale Pop-Ups und weitere Attribute.'
    },
    menu: {
      home: 'Startseite',
      staffMgmt: 'Mitarbeiterführung',
      usersMgmt: 'Benutzerverwaltung',
      groupsMgmt: 'Gruppenverwaltung',
      progress: 'Fortschritte der Student',
      dashboard: 'Analysen-Dashboard',
      campaignMgmt: 'Kampagnenverwaltung',
      integrationsMgmt: 'Integrationsmanagement',
      artifactsMgmt: 'Skill-Management',
      workspaceMgmt: 'Workspaceverwaltung'
    },
    library: {
      supported: {
        IMAGE: 'Bilder',
        PDF: 'PDF',
        MP3: 'mp3',
        ZIP: 'ZIP'
      },
      maxSizeAllFiles: 'PDFs dürfen {pdfSize}MB, Videos – {videoSize}MB, andere – {fileSize}MB nicht überschreiten',
      maxSizeNormalFiles: 'Jede Datei darf {fileSize}MB nicht überschreiten',
      fileTypeWithArticle: {
        IMAGE: 'ein Bild',
        PDF: 'eine PDF-Datei',
        MP3: 'eine MP3'
      },
      title: 'Ressourcenbibliothek',
      searchLibrary: 'Bibliothek durchsuchen',
      searchLibraryLabel: 'Dateien nach Namen suchen',
      uploadTitle: 'Upload',
      uploaderHelpText: '{supported} Datei wählen',
      uploadImagesOrMp3: 'andere Formate',
      uploadPdfs: 'PDF',
      errorUploadingFile: 'Es ist ein Fehler beim Hochladen der Datei aufgetreten: {err}',
      successUploadingFile: 'Datei {fileName} wurde erfolgreich hochgeladen',
      clickHereToOpenLibrary: 'Hier klicken, um die Bibliothek zu öffnen',
      dragImageHere: 'Bild hier hineinziehen',
      dragFileFromLibrary: '{fileType} aus der Bibliothek ziehen',
      dragPdfHere: 'PDF hier hineinziehen',
      fileName: 'Dateiname',
      category: 'Kategorie',
      updatingFile: 'Datei überall aktualisieren',
      categories: {
        ALL: 'Alles',
        AVATAR: 'Avatar',
        COVER_IMAGE: 'Covers',
        CONTENT: 'Inhalt',
        FRAME: 'Erfolge',
        OTHER: 'Anderes'
      },
      errors: {
        type: 'Ungültiger Dateityp. Nur {supported} Dateien erlaubt',
        size: 'Dateien sollten die Größe von {size} nicht überschreiten',
        pdfSize: 'PDF-Dateien sollten {size} nicht überschreiten.',
        mp4Size: 'MP4-Dateien sollten {size} nicht überschreiten.'
      },
      buttons: {
        download: 'Original herunterladen',
        delete: 'Aus Bibliothek löschen',
        replace: 'Datei ersetzen'
      },
      libraryItemTooltip: '<h6>{name}</h6><hr><div class="caption">Klicken, um die URL zu kopieren.</div>',
      showCourseFiles: 'Die angezeigten Dateien wurden innerhalb des aktuellen Kurses hochgeladen. Schalten Sie den Button um, um alle Dateien im Arbeitsbereich zu sehen.',
      showWorkspaceFiles: 'Alle Dateien aus dem Arbeitsbereich werden angezeigt. Schalten Sie den Button um, um nur die Dateien zu sehen, die innerhalb des aktuellen Kurses hochgeladen wurden.',
      showWorkspaceFilesToggleButton: 'Alle Arbeitsbereichsdateien anzeigen'
    },
    sectionsLibrary: {
      title: 'Abschnitte',
      previewAndDrag: 'Auf das Symbol klicken, um eine Vorschau anzuzeigen und Ihrer Vorlesung einen neuen Abschnitt hinzuzufügen'
    },
    analytics: {
      title: 'Analytics',
      startDateLabel: 'Anfangsdatum',
      endDateLabel: 'Enddatum',
      aggregateByLabel: 'Aggregate by',
      customInterval: 'Custom Interval',
      selectedIntervalWasNotPossible: 'There is no data for the period you have selected. Falling back to the largest period we could extract data for.',
      aggregations: {
        DAY: 'Tag',
        MONTH: 'Monat',
        MINUTE: 'Minute',
        WEEK: 'Woche',
        YEAR: 'Jahr',
        HOUR: 'Stunde'
      },
      intervals: {
        YESTERDAY: 'gestern',
        LAST24H: 'Letzte 24 Stunden',
        LASTWEEK: 'Letzte Woche',
        PREVIOUS7DAYS: 'Letzte 7 Tage',
        LASTMONTH: 'Letzten Monat',
        LAST3MONTHS: 'letzte 3 Monate',
        LAST6MONTHS: 'letzte 6 Monate',
        PREVIOUS30DAYS: 'Letzte 30 Tage',
        CUSTOM: 'benutzerdefiniert'
      },
      dashboard: {
        itemsPerPageText: 'Zeilen pro Seite',
        allCourses: 'Alle Kurse',
        allCountries: 'Alle Länder',
        allCampaigns: 'Alle Kampagnen',
        facts: {
          lectures: {
            title: 'Lectures'
          },
          enrolments: {
            title: 'Kursanmeldungen'
          },
          questions: {
            title: 'Fragen & Antworten'
          },
          certificates: {
            title: 'Zertifikate'
          },
          campaigns: {
            title: 'Kampagnen'
          },
          workspaceUsers: {
            title: 'Benutzer'
          }
        },
        coursesLabel: 'Kurse',
        countriesLabel: 'Länder',
        campaignsLabel: 'Kampagnen',
        modulesLabel: 'Module',
        certificatesLabel: 'Zertifikate',
        lecturesLabel: 'Vorträge',
        questionsLabel: 'Fragen',
        workspaceUsersLabel: 'Benutzer',
        enrolmentsCaption: 'eingeschrieben',
        seenCaption: 'gesehen',
        answeredCaption: 'beantwortet',
        issuedLabel: 'ausgegeben',
        campaignsCaption: 'eingelöst',
        workspaceUsersCaption: 'eingeloggt',
        funnelCaption: 'Top- Kurse-Konvertierung',
        funnelLabel: 'Trichter',
        funnel: {
          amountLogin: 'Angemeldete Nutzer',
          amountEnrolments: 'In Kurse eingeschriebene Nutzer',
          amountCertificates: 'ausgestellte Zertifikate',
          enrollments: 'Kursanmeldungen',
          finishedModule: 'Fertiges Modul'
        },
        chartLabels: {
          enrolments: {
            enrolled: 'Einschreibungen',
            started: 'Gestartet',
            ended: 'Beendet',
            abandoned: 'Verlassen',
            amountStarted: 'Einschreibungen',
            amountMsCourseStarted: 'Gestartet',
            amountEnded: 'Beendet',
            amountAbandoned: 'Verlassen',
            avgDaysBetweenEnded: 'Durchschnittliche Tage bis zum Schluss'
          },
          certificates: {
            amountIssued: 'Ausgegeben',
            avgScore: 'Durchschnittliche Punktzahl',
            minScore: 'Mindestpunktzahl',
            maxScore: 'maximale Punktzahl'
          },
          questions: {
            amountCorrect: 'Richtige Antworten ',
            amountWrong: 'Falsche Antworten',
            maxWrongAttempts: 'Maxmale Versuche',
            minWrongAttempts: 'Minimale Versuche',
            avgWrongAttempts: 'Durchschnittliche Versuche'
          },
          lectures: {
            seen: 'Gesehen',
            amountSeen: 'Gesehene Vorträge'
          },
          campaigns: {
            amountRedeemed: 'Eingelöst'
          },
          workspaceUsers: {
            amountLogin: 'Eingeloggt',
            amountRegister: 'Registriert'
          }
        },
        noDataToDisplay: 'Keine Daten zum Anzeigen',
        dataLoading: 'Wird geladen...'
      },
      validationRules: {
        startDateLessEndDate: 'Das Startdatum sollte vor dem Enddatum liegen'
      }
    },
    createCoursesHeader: {
      create: 'Erstellen',
      chooseOther: 'Andere Möglichkeiten zur Kurs-Erstellung auswählen',
      beforeCreatingCourseTitle: 'Vor dem Erstellen eines Kurses',
      beforeCreatingCourseDescription: 'Bitte lesen Sie dieses PDF, bevor Sie einen Kurs erstellen. Es wird dir helfen!',
      beforeCreatingCourseAction: 'PDF Herunterladen',
      createCourseTitle: 'Erstellen Sie einen Kurs',
      createCourseDescription: 'Wählen Sie die bequemste Methode zum Erstellen eines Kurses',
      createCourseAction: 'Fang hier an',
      createLearningPathTitle: 'Lernpfad erstellen',
      createLearningPathDescription: 'Erstellen Sie einen Lernplan aus den vorhandenen Kursen',
      createLearningPathAction: 'Fang hier an'
    },
    learningPaths: {
      title: 'Lernpfade',
      noLearningPaths: 'Noch keine Lernpfade erstellt',
      createNewLearningPathTitle: 'Neuen Lernpfad erstellen',
      editLearningPathTitle: 'Lernpfad {name} bearbeiten',
      saveInfo: {
        success: 'Lernpfad {name} wurde erfolgreich gespeichert'
      },
      stepper: {
        title: 'Titel- und Titelbild',
        titleLabel: 'Name des Lernpfads',
        coverImageChooser: 'Wählen Sie ein Titelbild für den Lernpfad aus',
        description: 'Beschreibung des Lernpfades',
        courses: 'Kurse des Lernpfads',
        learningPathSteps: 'Schritte und Ziele des Lernpfads',
        coursesOrder: 'Reihenfolge der Kurse',
        users: 'Benutzer zuweisen',
        achievements: 'Erfolge',
        createLearningPath: 'Lernpfad erstellen',
        editLearningPath: 'Lernpfad aktualisieren',
        checkAndSave: 'Prüfen und speichern',
        searchUsers: 'Benutzer suchen',
        skills: 'Skills zuweisen',
        searchSkills: 'Suchskills',
        assignUserToTheLearningPathButton: 'Benutzer zuweisen',
        assignSkillToTheLearningPathButton: 'Skill zuweisen',
        removeSkillFromTheLearningPathButton: 'Fertigkeit entfernen',
        assignGroupsToUserTitle: 'Gruppen zuweisen',
        searchGroups: 'Suchgruppen',
        certifiable: 'Zertifizierbar',
        timing: 'Zeitplan für den Lernpfad',
        achievementItem: {
          name: 'Geben Sie einen Namen für das Ziel ein',
          description: 'Geben Sie die Beschreibung des Ziels ein',
          image: 'Fügen Sie ein Bild für den Erfolg hinzu'
        },
        loadingCourses: 'Kurse laden...',
        selectedCourses: 'Keine Kurse ausgewählt | Ausgewählter {n} Kurs | Ausgewählte {n} Kurse',
        info: {
          title: 'Fügen Sie hier einen Titel und ein Titelbild für den Lernpfad hinzu. Sie können es in Zukunft ändern.',
          description: 'Fügen Sie hier eine Beschreibung des Lernpfads hinzu.',
          courses: 'Wählen Sie die Kurse aus, aus denen der Lernpfad bestehen soll.',
          coursesOrder: 'Sorgen Sie für die richtige Reihenfolge der Kurse.',
          users: 'Wählen Sie die Benutzer aus, denen Sie den Lernpfad zuweisen möchten.',
          skills: 'Wählen Sie die Fertigkeitsstufen aus, die Benutzer nach Abschluss des Lernpfads erwerben',
          achievements: 'Erstellen Sie Erfolge für den Lernpfad.',
          checkAndSave: 'Überprüfen Sie die Kurse und Erfolge und speichern Sie den Lernpfad, bevor Sie mit der Zuweisung von Benutzern fortfahren.',
          saveBeforeUser: 'Bitte fügen Sie mindestens einen Namen für Ihren Lernnamen hinzu, bevor Sie ihm Benutzer zuweisen.',
          learningPathSteps: 'Definieren Sie hier die Schritte des Lernpfads, die entsprechenden Kurse und Ziele. ' +
            'Ziehen und Ablegen der Schritte, um ihre Reihenfolge zu ändern.',
          certifiable: 'Zertifikat am Ende des Lernpfads aktivieren.',
          timing: {
            title: 'Zeitmanagement für Ihren Lernpfad',
            description: 'Konfigurieren Sie die Zeiteinstellungen für Ihren Lernpfad. Legen Sie die Anzahl der Tage fest, um Erinnerungen bei Inaktivität zu senden, sowie die maximal zulässige Dauer für den Abschluss, bevor eine automatische Stornierung erfolgt. Nur Lernpfade, die nach dieser Einstellung gestartet werden, werden berücksichtigt.',
            reminderAfterInactivity: {
              title: 'Erinnerung nach Inaktivität senden',
              description: 'Senden Sie automatisch eine Erinnerung an Lernende, wenn sie den Lernpfad nicht innerhalb von [N Tagen] ab dem Startdatum abgeschlossen haben. Halten Sie die Lernenden mit rechtzeitigen Erinnerungen engagiert.',
              label: 'Tage bis zur Erinnerung',
              tooltip: 'Geben Sie die Anzahl der Tage nach dem Startdatum ein, um eine Erinnerung für unvollständige Lernpfade zu senden.'
            },
            automaticCancellationTime: {
              title: 'Abschlussfrist festlegen',
              description: 'Definieren Sie die maximale Zeit (in Tagen), die für den Abschluss des Lernpfads erlaubt ist. Wenn der Lernende den Pfad nicht innerhalb von [N Tagen] ab dem Startdatum abschließt, wird der Lernpfad automatisch storniert. Nur Lernpfade, die nach dieser Einstellung gestartet werden, werden berücksichtigt.',
              label: 'Tage bis zur Stornierung',
              tooltip: 'Geben Sie die maximale Anzahl von Tagen ein, die für den Abschluss des Lernpfads zulässig ist. Nach diesem Zeitraum wird er automatisch storniert.'
            },
            automaticRetake: {
              title: 'Automatische Wiederholung',
              description: 'Den Lernpfad automatisch erneut starten (falls noch nicht begonnen), nachdem eine bestimmte Zeit seit dem letzten Start vergangen ist.',
              labelValue: 'Zeitwert',
              labelUnit: 'Zeiteinheit'
            }
          }
        },
        learningPathStepsPage: {
          addNewStepButton: 'Neuen Schritt basierend auf einem Kurs erstellen',
          addNewGoalButton: 'Ein Ziel hinzufügen',
          stepTitle: 'Schritt-Titel',
          stepDescription: 'Schritt-Beschreibung',
          addEditGoal: 'Ziel hinzufügen/bearbeiten',
          saveGoal: 'Ziel speichern',
          courseCardTitle: 'Kurs',
          goalCardTitle: 'Ziel'
        }
      }
    },
    skills: {
      newSkillTitle: 'Neuen Skill erstellen',
      editSkillTitle: 'Skill {Name} bearbeiten',
      titleLabel: 'Skill-Name',
      createSkill: 'Skill erstellen',
      editSkill: 'Skill aktualisieren',
      stepper: {
        title: 'Titel und Titelbild',
        titleLabel: 'Skill-Name',
        coverImageChooser: 'Wählen Sie ein Titelbild für den Skill',
        description: 'Beschreibung des Skills',
        level: 'levels of the skill',
        info: {
          title: 'Fügen Sie hier einen Titel und ein Titelbild für den Skill hinzu. Sie können es in Zukunft ändern.',
          description: 'Fügen Sie hier eine Beschreibung der Fertigkeit hinzu. Es ist möglich, dies in Zukunft zu ändern.',
          levels: 'Sie können eine einzigartige Ebene festlegen oder mehrere Ebenen auswählen und für jede eine andere Beschreibung festlegen. <strong>Alle diese Einstellungen können nachträglich geändert werden.</strong>'
        },
        createSkill: 'Skill erstellen',
        editSkill: 'Skill bearbeiten',
        levelTypesLabel: 'Level-Typen',
        uniqueLevelLabel: 'Einzigartige Stufe',
        multipleLevelLabel: 'Mehrere Ebenen',
        addNewSkillLevelButton: 'Stufe hinzufügen'
      }
    },
    groups: {
      newGroupTitle: 'Neue Gruppe erstellen',
      editGroupTitle: 'Gruppe {name} bearbeiten',
      titleLabel: 'Gruppenname',
      createGroup: 'Gruppe erstellen',
      editGroup: 'Gruppe aktualisieren',
      stepper: {
        title: 'Gruppentitel',
        titleLabel: 'Gruppenname',
        description: 'Beschreibung der Gruppe',
        users: 'Gruppenbenutzer',
        courses: 'Gruppenkurse',
        learningPaths: 'Gruppen-Lernpfade',
        titleErrorMessage: 'Gruppenname ist erforderlich',
        maximumCharactersErrorMessage: 'Maximale Zeichenanzahl überschritten.',
        info: {
          title: 'Füge hier einen Titel der Gruppe hinzu. Sie können es in Zukunft ändern',
          description: 'Fügen Sie hier eine Beschreibung der Gruppe hinzu. Es ist möglich, dies in Zukunft zu ändern.',
          users: 'Hier können Sie Benutzer hinzufügen und entfernen.',
          courses: 'Weisen Sie Kurse der Gruppe zu',
          learningPaths: 'Weisen Sie Lernpfade der Gruppe zu'
        },
        addUserToGroupButton: 'Benutzer hinzufügen',
        removeUserToGroupButton: 'Benutzer entfernen',
        createGroup: 'Gruppe erstellen',
        editGroup: 'Gruppe aktualisieren'
      }
    },
    statusMessages: {
      enrolledWithSuccess: 'Benutzer {name} wurde erfolgreich registriert',
      enrolledWithError: 'Beim Registrieren von {name} ist ein Fehler aufgetreten: {errorText}',
      unenrolledWithSuccess: 'Benutzer {name} wurde erfolgreich abgemeldet',
      unenrolledWithError: 'Beim Abmelden von {name} ist ein Fehler aufgetreten: {errorText}',
      learningPathAssignedWithSuccess: 'Benutzer {name} wurde erfolgreich dem Lernpfad zugewiesen',
      learningPathAssignedWithError: 'Beim Zuweisen des Lernpfads zum Benutzer {name} ist ein Fehler aufgetreten: {errorText}',
      learningPathDeletedWithSuccess: 'Lernpfad {name} wurde erfolgreich gelöscht',
      learningPathDeletedWithError: 'Beim Löschen des Lernpfades ist ein Fehler aufgetreten: {errorText}',
      newSkillCreated: 'Skill {name} erfolgreich erstellt',
      skillUpdated: 'Skill {name} erfolgreich aktualisiert',
      skillCreatedWithError: 'Beim Erstellen von Skill {name} ist ein Fehler aufgetreten: {errorText}',
      skillAssignedToLearningPathWithSuccess: 'Skill {name} wurde erfolgreich dem Lernpfad zugewiesen',
      skillAssignedToLearningPathWithError: 'Beim Zuweisen der Fähigkeit zum Lernpfad ist ein Fehler aufgetreten: {errorText}',
      skillAssignedToUserWithSuccess: 'Skill {name} wurde dem Benutzer {userName} erfolgreich zugewiesen',
      skillAssignedToUserWithError: 'Beim Zuweisen von Skill {name} zum Benutzer {userName} ist ein Fehler aufgetreten: {errorText}',
      skillUpdatedWithError: 'Beim Aktualisieren von Skill {name} ist ein Fehler aufgetreten: {errorText}',
      addedToGroupWithSuccess: 'Benutzer {userName} erfolgreich zur Gruppe {groupName} hinzugefügt',
      addedToGroupWithError: 'Beim Hinzufügen des Benutzers {userName} zur Gruppe {groupName} ist ein Fehler aufgetreten: {errorText}',
      removeFromGroupWithSuccess: 'Benutzer {userName} wurde erfolgreich aus der Gruppe {groupName} entfernt',
      removeFromGroupWithError: 'Beim Entfernen des Benutzers {userName} aus der Gruppe {groupName} ist ein Fehler aufgetreten: {errorText}',
      newGroupCreated: 'Gruppe {name} erfolgreich erstellt',
      groupCreatedWithError: 'Beim Erstellen der Gruppe {Name} ist ein Fehler aufgetreten: {errorText}',
      groupUpdated: 'Gruppe {name} erfolgreich aktualisiert',
      groupUpdatedWithError: 'Beim Aktualisieren der Gruppe {name} ist ein Fehler aufgetreten: {errorText}',
      groupAssignedToUserWithSuccess: 'Benutzer {userName} wurde erfolgreich zur Gruppe {name} hinzugefügt',
      groupAssignedToUserWithError: 'Beim Zuweisen des Benutzers {userName} zur Gruppe {name} ist ein Fehler aufgetreten: {errorText}',
      skillRemovedFromLearningPathWithSuccess: 'Skill {name} wurde erfolgreich aus dem Lernpfad entfernt.',
      skillRemovedFromLearningPathWithError: 'Beim Entfernen von Skill {name} aus dem Lernpfad ist ein Fehler aufgetreten: {errorText}.',
      skillRemovedFromUserWithSuccess: 'Skill {name} wurde erfolgreich vom Benutzer {userName} entfernt',
      skillRemovedFromUserWithError: 'Beim Entfernen von Skill {name} von Benutzer {userName} ist ein Fehler aufgetreten: {errorText}',
      groupRemovedFromUserWithSuccess: 'Benutzer {userName} wurde erfolgreich aus der Gruppe {name} entfernt',
      groupRemovedFromUserWithError: 'Beim Entfernen des Benutzers {userName} aus der Gruppe {name} ist ein Fehler aufgetreten: {errorText}'
    },
    dialogs: {
      courseOwnersTitle: 'Kursbesitzer und Editoren',
      courseOwnersTable: {
        username: 'Benutzer E-Mail',
        role: 'Rolle',
        creatorRole: 'Ersteller',
        editorRole: 'Redakteur'
      },
      enrollButton: {
        text: 'Eintragen',
        title: {
          course: 'Benutzer im Kurs eintragen',
          learningPath: 'Benutzer im Lernpfad eintragen'
        }
      },
      enrollNowButton: {
        text: 'Jetzt anmelden!',
        title: 'Melde jetzt alle in der Gruppe an'
      },
      linkButton: {
        text: 'Verknüpfen',
        title: 'Benutzer automatisch anmelden, sobald sie der Gruppe zugeordnet sind'
      },
      unlinkButton: {
        text: 'Verknüpfung lösen',
        title: 'Benutzer automatisch abmelden, sobald sie von der Gruppe getrennt sind'
      },
      unenrollButton: {
        text: 'Austragen',
        title: {
          course: 'Benutzer aus dem Kurs austragen',
          learningPath: 'Benutzer aus dem Lernpfad austragen'
        }
      },

      assignButton: {
        text: 'Zuordnen',
        title: {
          course: 'Gruppe dem Kurs zuordnen',
          learningPath: 'Gruppe dem Lernpfad zuordnen'
        }
      },
      unassignButton: {
        text: 'Zuordnung aufheben',
        title: {
          course: 'Gruppe vom Kurs trennen',
          learningPath: 'Gruppe vom Lernpfad trennen'
        }
      },
      addAdminButton: {
        text: 'Als Redakteur hinzufügen',
        title: {
          courseAdmins: 'Den Benutzer als Kursredakteur hinzufügen'
        }
      },
      removeAdminButton: {
        text: 'Redakteur Rolle entfernen',
        title: {
          courseAdmins: 'Den Benutzer als Kursredakteur entfernen'
        }
      },
      explanationGroups: {
        course: 'Klicken Sie auf die Schaltfläche <strong>Zuordnen</strong>, um eine Gruppe mit dem Kurs zu verknüpfen. ' +
          'Danach werden alle neuen Benutzer, die der Gruppe hinzugefügt werden, automatisch im Kurs eingetragen.' +
          '<br>Klicken Sie auf die Schaltfläche <strong>Eintragen</strong>, um alle aktuellen Benutzer der Gruppe im Kurs einzutragen.',
        learningPath: 'Klicken Sie auf die Schaltfläche <strong>Zuordnen</strong>, um eine Gruppe mit dem Lernpfad zu verknüpfen. ' +
          'Danach werden alle neuen Benutzer, die der Gruppe hinzugefügt werden, automatisch im Lernpfad eingetragen.' +
          '<br>Klicken Sie auf die Schaltfläche <strong>Eintragen</strong>, um alle aktuellen Benutzer der Gruppe im Lernpfad einzutragen.'
      },
      explanationUsers: {
        course: 'Klicken Sie auf die Schaltfläche <strong>Eintragen</strong>, um einen Benutzer im Kurs einzutragen. Der Benutzer erhält eine E-Mail.' +
          '<br>Klicken Sie auf die Schaltfläche <strong>Austragen</strong>, um einen Benutzer aus dem Kurs auszutragen.',
        learningPath: 'Klicken Sie auf die Schaltfläche <strong>Eintragen</strong>, um einen Benutzer im Lernpfad einzutragen. Der Benutzer erhält eine E-Mail.' +
          '<br>Klicken Sie auf die Schaltfläche <strong>Austragen</strong>, um einen Benutzer aus dem Lernpfad auszutragen.',
        courseAdmins: 'Klicken Sie auf den <strong>Als Redakteur hinzufügen</strong> Button, um einen Benutzer zum Kursredakteur zu machen.' +
          '<br>Klicken Sie auf den <strong>Redakteur Rolle entfernen</strong> Button, um einen Benutzer von der Liste der Kursredakteure zu entfernen.'
      },
      enrollUsersTitle: 'Benutzer eintragen',
      enrollGroupsTitle: 'Gruppen eintragen',
      addCourseAdminsTitle: 'Kursadministratoren hinzufügen',
      status: {
        groupAssociated: {
          success: {
            course: 'Die Gruppe {name} wurde erfolgreich mit dem Kurs verknüpft.',
            learningPath: 'Die Gruppe {name} wurde erfolgreich mit dem Lernpfad verknüpft.'
          },
          error: {
            course: 'Es ist ein Fehler aufgetreten, als die Gruppe {name} dem Kurs zugeordnet wurde: {err}.',
            learningPath: 'Es ist ein Fehler aufgetreten, als die Gruppe {name} dem Lernpfad zugeordnet wurde: {err}.'
          }
        },
        groupUnassociated: {
          success: {
            course: 'Die Gruppe {name} wurde erfolgreich vom Kurs gelöst.',
            learningPath: 'Die Gruppe {name} wurde erfolgreich von dem Lernpfad gelöst.'
          },
          error: {
            course: 'Es ist ein Fehler beim Lösen der Gruppe {name} vom Kurs aufgetreten: {err}.',
            learningPath: 'Es ist ein Fehler beim Lösen der Gruppe {name} von dem Lernpfad aufgetreten: {err}.'
          }
        },
        groupEnrolled: {
          success: {
            course: 'Die Benutzer der Gruppe {name} wurden erfolgreich für den Kurs eingeschrieben.',
            learningPath: 'Die Benutzer der Gruppe {name} wurden erfolgreich für den Lernpfad eingeschrieben.'
          },
          error: {
            course: 'Es ist ein Fehler beim Einschreiben der Benutzer der Gruppe {name} für den Kurs aufgetreten: {err}.',
            learningPath: 'Es ist ein Fehler beim Einschreiben der Benutzer der Gruppe {name} für den Lernpfad aufgetreten: {err}.'
          }
        },
        enrolled: {
          success: {
            course: 'Der Benutzer {name} wurde erfolgreich für den Kurs eingeschrieben.',
            learningPath: 'Der Benutzer {name} wurde erfolgreich für den Lernpfad eingeschrieben.'
          },
          error: {
            course: 'Es ist ein Fehler beim Einschreiben des Benutzers {name} für den Kurs aufgetreten: {err}.',
            learningPath: 'Es ist ein Fehler beim Einschreiben des Benutzers {name} für den Lernpfad aufgetreten: {err}.'
          }
        }
      }
    },
    generic: {
      createdOn: 'Erstellt:',
      updatedOn: 'Zuletzt gesehen am:',
      startedOn: 'Gestartet am:',
      finishedOn: 'Abgeschlossen am:',
      searchCourses: 'Kurse suchen',
      resetFilters: 'Filter zurücksetzen'
    },
    cloneOrShare: {
      title: 'Kurs klonen oder teilen',
      toCurrentWorkspace: 'Klone {name} in den aktuellen Arbeitsbereich',
      toOtherWorkspace: 'Klone {name} in einen anderen Arbeitsbereich',
      chooseWorkspace: 'Wählen Sie den Arbeitsbereich, um den Kurs zu klonen oder zu teilen',
      cloneCourseExplanation: '<strong>Klonen</strong> Sie {courseName} in den {workspaceName} Arbeitsbereich: Der Kurs wird geklont und im {workspaceName} Arbeitsbereich verwaltet.',
      shareCourseExplanation: '<strong>Teilen</strong> Sie {courseName} mit dem {workspaceName} Arbeitsbereich: Der Kurs wird mit {workspaceName} geteilt. Alle Änderungen im aktuellen Arbeitsbereich werden an den {workspaceName} Arbeitsbereich weitergegeben.',
      cloneButton: 'Kurs klonen',
      shareButton: 'Kurs teilen',
      cloningCourseOverlay: 'Der Kurs {name} wird geklont...',
      sharingCourseOverlay: 'Der Kurs {name} wird geteilt...',
      courseCloneSuccess: 'Der Kurs {name} wurde erfolgreich geklont.',
      courseCloneError: 'Es gab einen Fehler beim Klonen des Kurses {name}: {err}.',
      courseShareSuccess: 'Der Kurs {name} wurde erfolgreich geteilt.',
      courseShareError: 'Es gab einen Fehler beim Teilen des Kurses {name}: {err}.'
    },
    translateCourse: {
      title: 'Kurs übersetzen',
      languageLabel: 'Sprache wählen',
      contextLabel: 'Geben Sie einige Kontext- oder Anweisungen an',
      translateButtonLabel: 'Übersetzen',
      overlayText: 'Der Kurs {name} wird übersetzt. Dies wird einige Zeit dauern. ' +
        'Sie können dieses Fenster schließen und werden benachrichtigt, wenn die Übersetzung abgeschlossen ist.',
      warning: 'Bitte beachten Sie, dass dies eine <strong>BETA</strong>-Funktion ist. Einige Lektionen, insbesondere in <strong>großen Kursen</strong>, könnten nicht genau übersetzt werden. Daher wird eine menschliche Überprüfung immer notwendig sein.'
    }
  },
  analytics: {
    welcome: 'Willkommen im Analysebereich!',
    pleaseIntroduce: 'Bitte geben Sie die Zahlen {number1} und {number2} in den Abschnitt "zweistelligen Code eingeben" und klicken Sie auf “Enter”'
  },
  tourSteps: {
    snackbar: {
      title: 'Kurs Bearbeitungs Tour starten',
      description: 'Sie können diese Tour jederzeit neu starten, indem Sie einfach die Seite aktualisieren oder den Bearbeitungsmodus aus- und wieder einschalten',
      startButton: 'Beginnen',
      cancelButton: 'Schließen'
    },
    labels: {
      buttonSkip: 'Tour überspringen',
      buttonPrevious: 'Vorherige',
      buttonNext: 'Nächste',
      buttonStop: 'Beenden'
    },
    adminCourses: {
      createNewCourse: 'Hier klicken, um <strong> einen neuen Kurs zu erstellen</strong>',
      importJSON: 'Hier klicken, um <strong> einen Kurs im JSON Format zu importieren </strong>',
      listOfCourses: 'Kurse, die Sie verwalten können',
      paginationCourses: 'Durch Kursliste navigieren'
    },
    editingMenu: {
      resetButton: 'Hier klicken, um die letzten Änderungen zurückzusetzen',
      saveButton: 'Hier klicken, um die letzten Änderungen zu speichern',
      publishButton: 'Hier klicken, um den Kurs für die  verfügbar oder nicht verfügbar zu machen'
    },
    demoCourseEditing: {
      title: 'Kurs Bearbeitungs Tour',
      changeTitle: {
        title: '',
        content: 'Hier klicken, um den Kurstitel zu ändern'
      },
      changeDescription: {
        title: '',
        content: 'Hier klicken, um die Kursbeschreibung zu ändern. Verwenden Sie die Symbolleiste oben auf der Seite, um ihren Text zu gestalten, Aufzählungszeichen, Bilder und Links hinzuzufügen .'
      },
      addModule: {
        title: '',
        content: 'Hier klicken, um den Kurs ein neues Modul hinzuzufügen. Es erscheint als letztes Modul..'
      },
      addLecture: {
        title: '',
        content: 'Hier klicken, um dem Modul eine Vorlesung hinzuzufügen. Dies wird die letzte Vorlesung des Moduls sein, aber Sie können diese per Drag- and- Drop an die gewünschte Stelle verschieben.'
      },
      changeModuleTitle: {
        title: '',
        content: 'Sie können den Titel des Moduls ganz einfach ändern, indem Sie hier klicken und einfach mit der Eingabe beginnen.'
      },
      changeModuleDescription: {
        title: '',
        content: 'Beginnen Sie mit der Eingabe, um die Beschreibung des Moduls zu ändern. Verwenden Sie die Symbolleiste oben, um ihren Text zu gestalten. Beachten Sie jeoch, dass die Modulbeschreibung klein und knapp sein sollte.'
      },
      saveCourse: {
        title: '',
        content: 'Hier klicken, um die letzten Änderungen am Kurs zu speichern.'
      },
      changeLectureTitle: {
        title: '',
        content: 'Hier klicken und tippen, um den Titel der Vorlesung zu ändern.'
      },
      changeLectureDescription: {
        title: '',
        content: 'Sie können die Beschreibung der Vorlesung ganz einfach ändern (oder vollständig entfernen), indem Sie hier eingeben. Fühlen Sie sich frei, die Symbolleiste oben zu verwenden, um Ihren Text zu gestalten. Versuchen Sie, die Beschreibung kurz und knapp zu halten.'
      },
      resetChanges: {
        title: '',
        content: 'Hier klicken, um die Änderungen zurückzusetzen, die Sie seit dem letzten Speichern des Kurses vorgenommen haben.'
      },
      publishCourse: {
        title: '',
        content: 'Kurs für die Lernenden dieses Arbeitsbereiches sichtbar oder unsichtbar machen.'
      },
      unpublishCourse: {
        title: '',
        content: 'Kurs für die Lernenden dieses Arbeitsbereiches verbergen.'
      },
      copyLecture: {
        title: '',
        content: 'Hier klicken, um den Vortrag in die Zwischenablage zu kopieren.'
      },
      copyModule: {
        title: '',
        content: 'Hier klicken, um das Modul in die Zwischenablage zu kopieren- das gesamte Modul wird mit allen Vorlesungen kopiert. Sie können es dann nach jedem Modul eines beliebigen Kurses dieses Arbeitsbereichs einfügen.'
      },
      pasteLecture: {
        title: '',
        content: 'Hier klicken, um die kopierte Vorlesung nach dieser einzufügen. Die Vorlesung bleibt weiterhin in der Zwischenablage, sodass Sie diese immer wieder einfügen können. Die kopierte Vorlesung bleibt in der Zwischenablage, bis Sie eine andere kopieren. '
      },
      pasteModule: {
        title: '',
        content: 'Hier klicken, um das kopierte Modul nach diesem einzufügen. Das Modul bleibt in der Zwischenablage, sodass Sie es auch nach anderen Modulen einfügen können. Das Modul bleibt in der Zwischenablage, bis Sie ein anderes kopieren.'
      },
      deleteLecture: {
        title: '',
        content: 'Hier klicken, um die Vorlesung zu löschen. Denken Sie daran, dass sie keine Vorlesungen löschen können, wenn die Student bereits mit diesen interagiert haben!'
      },
      deleteModule: {
        title: '',
        content: 'Hier klicken, um dieses Modul zu löschen. Das ganze Modul wird mit all seinen Vorlesungen wegfallen. Denken Sie jedoch daran, dass Sie ein Modul nicht löschen können, in dem bereits Fortschritte der Student enthalten sind .'
      },
      changeModuleAvailableDates: {
        title: '',
        content: 'Hier klicken, um die verfügbaren Daten eines Moduls zu ändern. Klicken Sie doppelt auf ein Datum- dann ist das Modul ab dem gewählten Datum verfügbar. Ein Klick auf ein Datum gefolgt von einem Klick auf das nächste Datum- dann ist das Modul innerhalb der gewählten Daten verfügbar.'
      },
      dragModule: {
        title: '',
        content: 'Hier klicken, um dieses Modul neu zu positionieren. Sie können diese Funktionalität nach Abschluss der Tour testen.'
      },
      dragLecture: {
        title: '',
        content: 'Klicken und ziehen, um die Vorlesung innerhalb eines Modul neu zu positionieren. Sie können diese Funktionalität nach Abschluss der Tour testen .'
      },
      changeCourseInfo: {
        content: 'Hier klicken, um die grundlegenden Kursinformationen zu ändern, z.B verfügbare Daten, Bestehensquote, usw.'
      },
      editCourseTags: {
        content: 'Tags des Kurses hinzufügen oder entfernen. Diese Tags werden verändert, um den Kurs zu filtern.'
      },
      editCourseGamification: {
        content: 'Hier klicken, um Kursleitungen hinzuzufügen und zu bearbeiten.'
      },
      switchEditingMode: {
        content: 'Diesen Schalter verwenden, um zwischen dem Bearbeitungs- und Anzeigemodus zu wechseln.'
      },
      useEditorToolbar: {
        content: 'Symbolleiste verwenden, um den Textstil zu ändern, Bilder, Aufzählungszeichen Listen zu ihren Text hinzuzufügen.'
      },
      goToLecture: {
        content: 'Dem Link zum Vorlesungs Element folgen, um zur Vorlesungs Bearbeitung zu gelangen'
      }
    }
  },
  sectionsExamples: {
    richText: {
      title: 'Abschnittsüberschrift',
      content: 'Lorem ipsum dolor sit amet, <strong>consetetur sadipscing elitr</strong>, sed diam <em>nonumy eirmod tempor</em> invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
    }
  },
  accessibility: {
    configForVisualImpairments: 'Konfiguration für Nutzer mit Sehbehinderungen',
    changeFontSize: 'Schriftgröße',
    siteBackToNormal: 'Zur Standardansicht wechseln',
    changeColorOfTheWebsite: 'Farbschema',
    exampleBackgroundFont: 'Ein Beispiel, wie der Text aussehen wird',
    exampleHeader1: 'Titel Ebene 1',
    exampleHeader2: 'Titel Ebene 2',
    changeImagesLook: 'Bilddarstellung',
    exampleImagesLook: 'Ein Beispiel, wie die Bilder aussehen werden'
  },
  validation: {
    url: {
      required: 'URL ist erforderlich',
      valid: 'URL muss gültig sein'
    }
  },
  notifications: {
    title: 'Benachrichtigungen',
    clearAllButton: 'Alle als gelesen markieren',
    statuses: {
      INACTIVE_USER_COURSES: 'Inaktivität'
    },
    actions: {
      clear: 'klar',
      markAsRead: 'Als gelesen markieren'
    },
    noNotificationsToShow: 'Es gibt keine anzuzeigenden Benachrichtigungen'
  },
  header: {
    menu: {
      accessibility: 'Barrierefreiheit',
      toggleDarkMode: 'Dunklen Modus umschalten',
      profileSubtitle: {
        admin: 'Administrator',
        courseAdmin: 'Kurs-Admin',
        courseEditor: 'Kursredakteur',
        learner: 'Teilnehmer',
        adminViewNonAdmin: 'Admin<br><span class="caption">(betrachtet als Student)</span>',
        courseAdminViewNonAdmin: 'Kurs-Admin<br><span class="caption">(Anzeige als Student)</span>',
        courseEditorViewNonAdmin: 'Kursredakteur<br><span class="caption">(Ansicht als Student)</span>'
      },
      create: {
        course: 'Kurs',
        learningPath: 'Lernpfad',
        skill: 'Geschicklichkeit',
        group: 'Gruppe',
        users: 'Benutzer'
      }
    }
  },
  preCourseSurvey: {
    title: 'Vorkurs-Umfrage',
    subtitleNotStarted: 'Bitte füllen Sie diese Umfrage aus. Nachdem Sie sie ausgefüllt haben, können Sie den Kurs starten!',
    subtitleFinished: 'Sie können Ihre Antworten auf die Vorkurs-Umfrage ändern.',
    subtitleEditing: 'Bearbeiten Sie die Vorkurs-Umfrage.',
    editSurveyButton: 'Bearbeiten',
    finishEditSurveyButton: 'Bearbeitung abschließen',
    buttonTitle: 'Vorkurs-Umfrage',
    addNewSurveyQuestion: 'Neue Umfragefrage hinzufügen',
    editCourseSurvey: 'In diesem Abschnitt können Sie eine obligatorische Kurs-Umfrage hinzufügen oder bearbeiten. ' +
      'Diese Umfrage wird den Lernenden als Pop-up angezeigt, bevor sie den Kurs starten können.',
    fillCourseSurvey: 'Sie müssen die Umfrage abschließen, bevor Sie mit dem Kurs fortfahren können.',
    fillEditCourseSurvey: 'Sie können Ihre Antworten auf die Kurs-Umfrage bearbeiten.',
    filters: {
      button: 'Nach Fragen filtern',
      title: 'Nach Kursfragen und -antworten filtern',
      selectQuestionLabel: 'Frage auswählen',
      selectAnswerLabel: 'Antwort auswählen',
      addFilterButton: 'Filter hinzufügen',
      clearFilterButton: 'Löschen',
      applyFilterButton: 'Anwenden'
    }
  },
  postCourseSurvey: {
    title: 'Nachkurs-Umfrage',
    subtitleNotStarted: 'Bitte füllen Sie diese Umfrage aus. Nach dem Ausfüllen können Sie den Kurs abschließen!',
    subtitleFinished: 'Sie können Ihre Antworten auf die Nachkurs-Umfrage ändern.',
    subtitleEditing: 'Bearbeiten Sie die Nachkurs-Umfrage.',
    editSurveyButton: 'Bearbeiten',
    finishEditSurveyButton: 'Bearbeitung abschließen',
    buttonTitle: 'Nachkurs-Umfrage',
    addNewSurveyQuestion: 'Neue Umfragefrage hinzufügen',
    editCourseSurvey: 'In diesem Abschnitt können Sie eine obligatorische Nachkurs-Umfrage hinzufügen oder bearbeiten. ' +
      'Diese Umfrage wird als Pop-up für die Lernenden angezeigt, bevor sie ihr Zertifikat erhalten oder den Kurs abschließen können.',
    fillCourseSurvey: 'Sie müssen die Umfrage abschließen, bevor Sie den Kurs beenden können.',
    fillEditCourseSurvey: 'Sie können Ihre Antworten auf die Kursumfrage bearbeiten.'
  },
  getReadyAi: {
    title: 'Erstellen Sie Ihren Kurs mit KI',
    description: 'Geben Sie Ihre E-Mail-Adresse und das Kursthema ein, und wir senden Ihnen den Link zu Ihrem von KI generierten Kurs zu.',
    usernameLabel: 'Ihre E-Mail',
    courseTopicLabel: 'Kursthema',
    generateButton: 'Meinen Kurs erstellen',
    afterGenerateButton: 'Klicken Sie auf den obigen Button, und Sie erhalten bald eine E-Mail.',
    topicRequired: 'Thema ist erforderlich',
    setPasswordTitle: 'Legen Sie Ihr Passwort fest',
    setPasswordDesc: 'Nachdem Sie Ihr Passwort festgelegt haben, werden Sie zu Ihrem Kurs weitergeleitet.',
    setPasswordButton: 'Passwort festlegen und einloggen',
    tokenLabel: 'Token',
    passwordLabel: 'Passwort',
    courseCreationRequestSuccess: 'Ihr Kurs wird jetzt erstellt. ' +
      'Sie können diese Seite jetzt verlassen. ' +
      'Sie erhalten eine E-Mail, sobald Ihr Kurs fertiggestellt ist!'
  },
  meta: {
    titles: {
      pages: {
        admin: 'Admin',
        courses: 'Kurse',
        dashboard: 'Dashboard',
        signin: 'Anmelden',
        learnerProfile: 'Lernendenprofil',
        onboardingWithAi: 'Onboarding mit KI',
        organization: 'Organisation',
        paswordreset: 'Passwort zurücksetzen',
        printableCourse: 'Druckbarer Kurs'
      }
    }
  }
}
