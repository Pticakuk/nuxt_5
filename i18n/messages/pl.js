export default {
  actions: {
    delete: {
      module: 'Usuń moduł',
      lecture: 'Usuń wykład',
      section: 'Usuń sekcję',
      question: 'Usuń pytanie',
      bubble: 'Usuń bańkę',
      option: 'Usuń opcję',
      branchSection: 'Usuń sekcję gałęzi'
    },
    add: {
      module: 'Dodaj moduł',
      lecture: 'Dodaj wykład',
      section: 'Dodaj sekcję',
      question: 'Dodaj pytanie',
      bubble: 'Dodaj bańkę',
      option: 'Dodaj opcję',
      branchSection: 'Dodaj sekcję gałęzi'
    },
    duplicate: {
      module: 'Zduplikuj moduł',
      lecture: 'Zduplikuj wykład',
      section: 'Zduplikuj sekcję',
      question: 'Zduplikuj pytanie',
      bubble: 'Zduplikuj bańkę',
      option: 'Zduplikuj opcję',
      branchSection: 'Zduplikuj sekcję gałęzi'
    },
    moveUp: {
      module: 'Przenieś moduł w górę',
      lecture: 'Przenieś wykład w górę',
      section: 'Przenieś sekcję w górę',
      question: 'Przenieś pytanie w górę',
      bubble: 'Przenieś bańkę w górę',
      option: 'Przenieś opcję w górę',
      branchSection: 'Przenieś sekcję gałęzi w górę'
    },
    moveDown: {
      module: 'Przenieś moduł w dół',
      lecture: 'Przenieś wykład w dół',
      section: 'Przenieś sekcję w dół',
      question: 'Przenieś pytanie w dół',
      bubble: 'Przenieś bańkę w dół',
      option: 'Przenieś opcję w dół',
      branchSection: 'Przenieś sekcję gałęzi w dół'
    },
    copy: {
      module: 'Skopiuj moduł',
      lecture: 'Skopiuj wykład',
      section: 'Skopiuj sekcję',
      question: 'Skopiuj pytanie',
      bubble: 'Skopiuj bańkę',
      option: 'Skopiuj opcję',
      branchSection: 'Skopiuj sekcję gałęzi',
      courseUrl: 'kopiować',
      courseUrlCopied: 'kopiować',
      url: 'kopiować',
      copyUrl: 'Kopiuj URL',
      urlCopied: 'kopiować',
      openInNewTab: 'Otwórz w nowej karcie'
    },
    paste: {
      module: 'Wklej moduł',
      lecture: 'Wklej wykład',
      section: 'Wklej sekcję',
      question: 'Wklej pytanie',
      bubble: 'Wklej bańkę',
      option: 'Wklej opcję',
      branchSection: 'Wklej sekcję gałęzi'
    },
    course: {
      config: 'Edytuj konfigurację',
      edit: 'Edytuj treść kursu',
      clone: 'Kurs klonowania',
      invite: 'Zaproś użytkowników lub grupy',
      progress: 'Sprawdź postępy użytkowników',
      archiveInProgress: 'Archiwizowanie kursu {name}...',
      unarchiveInProgress: 'Przywracanie kursu {name} z archiwum...'
    },
    lectureVisibility: {
      lecture: 'Widoczność wykładu'
    }
  },
  openAi: {
    title: 'Open AI',
    useThisTextButton: 'Użyj tego tekstu',
    useThisImageButton: 'Użyj tego obrazu',
    usingOpenAiInfoBox: 'Wykorzystujemy API <strong>Open AI</strong>, aby pomóc Ci w codziennych zadaniach. Upewnij się, że masz skonfigurowane połączenie z Twoim kontem Open AI i zacznij korzystać z tego pomocnika do praktycznie wszystkiego. ' +
      'Na przykład możesz wpisać coś takiego jak <strong>"Tytuł dla kursu na temat wprowadzania do pracy"</strong> lub <strong>"Napisz opis wprowadzającego wykładu na temat Salesforce"</strong> ' +
      'lub <strong>"Wygeneruj pytanie jednokrotnego wyboru na temat umiejętności miękkich"</strong>. Używaj naturalnego języka, sprawdź wynik, ' +
      'popraw słownictwo, usuń niepotrzebne puste miejsca i użyj tego w swoim kursie.',
    textCompletionExplanation: 'Użyj tego okna dialogowego, aby wygenerować tekst na dowolny temat. Tekst będzie ograniczony do {charLimit} znaków.',
    imageCreationExplanation: 'Użyj tego okna dialogowego, aby wygenerować obraz na dowolny temat. Zwróć uwagę, że generowanie obrazów jest obecnie w wersji Beta. Obraz zostanie wygenerowany o rozmiarze {imageSize}.',
    errorGeneratingContent: 'Wystąpił błąd podczas generowania treści: {err}',
    configureTheIntegration: ' | Skonfiguruj integrację z API OpenAI w sekcji admin/integrations.'
  },
  trialWorkspaceBanner: '😃 Masz jeszcze {daysLeft} dni swojego okresu próbnego. Odblokuj pełny potencjał swojej spersonalizowanej przestrzeni roboczej teraz! 🚀',
  notAuthenticatedWorkspaceBanner: 'Zarejestruj się, aby odblokować pełny potencjał swojej przestrzeni roboczej!',
  trialWorkspaceCTA: 'Zacznij!',
  notAuthenticatedWorkcpaceCTA: 'Zarejestruj się',
  trialExpired: '😢 Twój okres próbny wygasł. Nie możesz już korzystać z funkcji administratora. Odblokuj pełny potencjał swojej spersonalizowanej przestrzeni roboczej teraz!',
  toast: {
    courseSaveSuccess: 'Kurs został pomyślnie zapisany',
    courseCreatedSuccess: 'Kurs {name} pomyślnie utworzony!',
    courseCreatedError: 'Wystąpił błąd podczas tworzenia kursu {name}: {err}',
    coursePublishSuccess: 'Kurs został pomyślnie opublikowany',
    courseUnpublishSuccess: 'Kurs został pomyślnie wycofany z publikacji',
    courseCloneSuccess: 'Kurs został pomyślnie sklonowany',
    courseDeleteSuccess: 'Kurs {name} został pomyślnie usunięty',
    courseArchiveSuccess: 'Kurs {name} został pomyślnie zarchiwizowany',
    courseUnarchiveSuccess: 'Kurs {name} został pomyślnie przywrócony z archiwum',
    courseArchiveError: 'Wystąpił błąd podczas archiwizacji kursu',
    courseDeleteError: 'Wystąpił błąd podczas usuwania kursu',
    courseSaveError: 'Wystąpił błąd podczas zapisywania kursu {name}: {err}',
    courseEditingLockError: 'Ten kurs jest edytowany przez użytkownika {name}. Czy chcesz przejąć kontrolę? Postęp {name} zostanie utracony.',
    courseEditingLockForced: 'Edycja tego kursu została przejęta przez użytkownika {name}.',
    courseEditingLockByUserError: 'Edytujesz ten kurs na innym urządzeniu lub karcie. Czy chcesz przejąć kontrolę?' +
      ' Postęp na innym urządzeniu lub karcie zostanie utracony.',
    editAnyway: 'Przejmij kontrolę!',
    courseEditLockSuccess: 'Pomyślnie włączono tryb edycji kursu dla bieżącego użytkownika',
    courseEditUnlockSuccess: 'Pomyślnie wyłączono tryb edycji kursu dla bieżącego użytkownika',
    courseUrlCopiedSuccessfully: 'Adres URL kursu został pomyślnie skopiowany.',
    urlCopiedSuccessfully: 'Adres URL został pomyślnie skopiowany.',
    courseUrlCopiedError: 'Nie można skopiować adresu URL kursu: {err}.',
    urlCopiedError: 'Nie można skopiować adresu URL: {err}.',
    previewWillAppearHere: 'Podgląd kodu pojawi się tutaj',
    checkInPopup: 'Zamelduj się w wyskakującym okienku',
    workspaceChangesSaved: 'Konfiguracja obszaru roboczego została pomyślnie zapisana.',
    workspaceChangesSaveError: 'Wystąpił błąd podczas zapisywania zmian w obszarze roboczym: {err}.',
    courseOrderUpdated: 'Kolejność kursów została pomyślnie zaktualizowana: kurs {courseName} będzie wyświetlany w kolejności {order}.',
    courseOrderUpdateError: 'Wystąpił błąd podczas aktualizacji kolejności kursów: {err}.',
    userNameChangedSuccessfully: 'Nazwa użytkownika {name} została pomyślnie zmieniona.',
    userNameChangedError: 'Wystąpił błąd podczas zmiany nazwy użytkownika {name}: {err}',
    userEmailChangedSuccessfully: 'Adres e-mail użytkownika {name} został pomyślnie zmieniony.',
    userEmailChangedError: 'Wystąpił błąd podczas zmiany adresu e-mail użytkownika {name}: {err}',
    workspaceDoesntExist: 'Workspace {name} nie istnieje.',
    giveUpWithSuccess: 'Kurs {name} został pomyślnie porzucony',
    giveUpError: 'Wystąpił błąd podczas porzucania kursu {name}: {err}',
    archiveSuccess: 'Kurs {name} został pomyślnie zarchiwizowany',
    archiveError: 'Wystąpił błąd podczas archiwizacji kursu {name}: {err}',
    unArchiveSuccess: 'Kurs {name} został pomyślnie przywrócony z archiwum',
    unArchiveError: 'Wystąpił błąd podczas przywracania kursu {name} z archiwum: {err}',
    certificateCantBeOpen: 'Wystąpił błąd podczas pobierania certyfikatu o uuid {uud}: {err}',
    courseTranslationSuccess: 'Kurs {name} został pomyślnie przetłumaczony.',
    courseTranslationError: 'Wystąpił błąd podczas tłumaczenia kursu {name}: {err}',
    resetTimerSuccess: 'Czasomierz pytania został pomyślnie zresetowany.',
    tagDeleteSuccess: 'Tag {name} został pomyślnie usunięty',
    tagDeleteError: 'Wystąpił błąd podczas usuwania tagu {name}: {err}',
    defaultSaveError: 'Wystąpił błąd podczas zapisywania {name}',
    forceSaveError: {
      CANNOT_DELETE_ALL_MODULES: 'Zamierzasz usunąć wszystkie moduły kursu. Tej operacji nie można cofnąć. Czy na pewno chcesz kontynuować?',
      CANNOT_DELETE_LEARNING_STEP: 'Istnieje postęp użytkownika na krokach, które zamierzasz usunąć. Tej operacji nie można cofnąć. Czy na pewno chcesz kontynuować?',
      CANNOT_DELETE_LECTURES: 'Istnieje postęp użytkownika na wykładach, które zamierzasz usunąć. Tej operacji nie można cofnąć. Czy na pewno chcesz kontynuować?',
      CANNOT_DELETE_QUESTION_ANSWER: 'Istnieje postęp użytkownika w quizach, które zamierzasz usunąć. Tej operacji nie można cofnąć. Czy na pewno chcesz kontynuować?',
      CANNOT_DELETE_SECTION: 'Istnieje postęp użytkownika w sekcjach kursu, które zamierzasz usunąć. Tej operacji nie można cofnąć. Czy na pewno chcesz kontynuować?',
      CANNOT_DELETE_LEVELS: 'Istnieją umiejętności powiązane z użytkownikami w zasobach, które zamierzasz usunąć. Tej operacji nie można cofnąć. Czy na pewno chcesz kontynuować?',
      CANNOT_DELETE_GROUP: 'Zamierzasz usunąć grupę powiązaną z zasobami (użytkownikami, kursami lub ścieżkami edukacyjnymi). Wszystkie te powiązania zostaną utracone. Czy na pewno chcesz kontynuować?',
      DEFAULT: 'Istnieje postęp użytkownika w zasobach, które zamierzasz usunąć. Tej operacji nie można cofnąć. Czy na pewno chcesz kontynuować?'
    }
  },
  welcome: '<span class="welcome">Witaj</span> w świecie online\'owych szkoleń<br>i udostępniania wiedzy',
  forum: {
    title: 'Forum',
    sortingOptions: {
      newest: 'Najnowsze najpierw',
      oldest: 'Najstarsze najpierw',
      mostPopular: 'Najpopularniejsze'
    },
    comment: 'Komentarz',
    leaveComment: 'Zostaw komentarz',
    actions: {
      edit: 'Edytuj',
      follow: 'Obserwuj',
      reply: 'Odpowiedz',
      delete: 'Usuń'
    },
    uploadImage: 'Prześlij obraz',
    socialLearning: {
      DISABLED: 'Forum wyłączone',
      DISQUS: 'Włącz forum Disqus',
      WORKADEMY: 'Włącz forum Workademy'
    },
    toCourse: 'Powrót do kursu',
    toForum: 'Do forum kursu',
    supportedText: 'Wybierz plik {supported}',
    generalThreads: 'Wątki ogólne',
    lecturesThreads: 'Wątki wykładów'
  },
  dialogs: {
    editRichText: 'Edytuj tekst sformatowany',
    saveAndClose: 'Zapisz i zamknij',
    confirmationDialog: {
      defaultDialog: {
        title: 'Czy jesteś pewien?',
        confirmButton: 'Tak!',
        cancelButton: 'Anuluj'
      },
      confirmQuitScormCourse: {
        title: 'Czy na pewno chcesz zakończyć kurs?',
        subtitle: 'Nie martw się! Możesz wznowić od miejsca, w którym przerwałeś.',
        confirmButton: 'Tak, zakończ teraz'
      },
      confirmQuitScormLecture: {
        title: 'Czy na pewno chcesz zakończyć lekcję?',
        subtitle: 'Nie martw się! Możesz wznowić lekcję od miejsca, w którym przerwałeś.',
        confirmButton: 'Tak, zakończ teraz'
      }
    }
  },
  share: {
    shareDialogTitle: 'Udostępnij',
    doneButtonText: 'Gotowe'
  },
  layout: {
    getStarted: 'Rozpocznij'
  },
  landing: {
    welcome: '<span class="welcome">Witaj</span> w świecie edukacji online<br>i dzielenia się wiedzą',
    goToCatalog: 'Przeglądaj nasze kursy',
    learnAndShare: 'Ucz się i dziel swoją wiedzą z {title}',
    viewAllCatalog: 'Przeglądaj cały katalog',
    allowsToLearnAndTeach: '{title} pozwala na naukę i nauczanie',
    beingABridge: 'stanowiąc łącznik między posiadaczami wiedzy a tymi, którzy potrzebują tej wiedzy',
    learnIconText: 'Nigdy nie przestawaj się uczyć, uzyskaj dostęp do wysokiej jakości treści z {title}',
    everywhereIconText: 'Używaj każdego urządzenia, dowolnego systemu, gdziekolwiek jesteś',
    communityIconText: 'Bierz udział w sieci, bądź częścią społeczności',
    teachIconText: 'Najskuteczniejszym sposobem nauki jest nauczanie. Odblokuj swój potencjał dydaktyczny z {title}',
    learn: 'Ucz się',
    everywhere: 'Wszędzie',
    community: 'Społeczność',
    teach: 'Nauczaj',
    areYouReady: 'Jesteś gotowy, by dołączyć do świata edukacji online i dzielenia się wiedzą?',
    viewAllCourses: 'wszystkie kursy',
    viewMyDashboard: 'moja tablica',
    comingSoon: 'To może być Twoja przestrzeń robocza. Porozmawiaj z nami!',
    footerDisclaimer: ''
  },
  dashboard: {
    dashboardTitle: 'Tablica',
    coursesInProgressTitle: 'Kursy',
    coursesInProgressSubtitle: 'Kursy, na które się zapisano',
    coursesCompletedTitle: 'Ukończone kursy',
    coursesCompletedSubtitle: 'Kursy, które już ukończyłeś',
    learningPathsInProgressTitle: 'Ścieżki uczenia się',
    learningPathsCompleted: 'Ukończone ścieżki uczenia się',
    achievementsTitle: 'Osiągnięcia',
    achievementsDescription: 'Kliknij na kartę osiągnięcia, aby dodać ramkę osiągnięcia do swojego awatara.',
    searchLearningPaths: 'Wyszukaj ścieżki nauki',
    filters: {
      searchLearningPaths: 'Wyszukaj ścieżki nauki',
      search: {
        learningPaths: 'Wyszukaj ścieżki nauki',
        courses: 'Wyszukaj kursy'
      },
      showCoursesTitle: {
        all: 'Pokaż kursy <strong>(wszystkie)</strong>',
        completed: 'Pokaż kursy <strong>(ukończone)</strong>',
        active: 'Pokaż kursy <strong>(aktywne)</strong>',
        archived: 'Pokaż kursy <strong>(zarchiwizowane)</strong>'
      },
      showAllCourses: 'Pokaż wszystkie kursy',
      showActiveCourses: 'Pokaż aktywne kursy',
      showCompletedCourses: 'Pokaż ukończone kursy',
      showArchivedCourses: 'Pokaż zarchiwizowane kursy',
      showLearningPathsTitle: {
        all: 'Pokaż ścieżki nauki <strong>(wszystkie)</strong>',
        completed: 'Pokaż ścieżki nauki <strong>(ukończone)</strong>',
        active: 'Pokaż ścieżki nauki <strong>(aktywne)</strong>',
        archived: 'Pokaż <strong>(zarchiwizowany)</strong> ścieżkę nauki'
      },
      showAllLearningPaths: 'Pokaż wszystkie ścieżki nauki',
      showActiveLearningPaths: 'Pokaż aktywne ścieżki nauki',
      showCompletedLearningPaths: 'Pokaż ukończone ścieżki nauki',
      showArchivedLearningPaths: 'Pokaż zarchiwizowane ścieżki uczenia się'
    },
    notFound: {
      course: {
        notEnrolled: {
          title: 'Nie jesteś zapisany na żaden kurs.',
          description: 'Sprawdź listę kursów, aby zapisać się na nie.'
        },
        notFound: {
          title: 'Nie znaleziono kursów.',
          description: 'Zmień kryteria wyszukiwania.'
        },
        noCompleted: {
          title: 'Nie ukończyłeś jeszcze żadnego kursu.',
          description: 'Sprawdź swoje aktywne kursy i spróbuj je ukończyć.'
        }
      },
      learningPath: {
        notEnrolled: {
          title: 'Nie jesteś zapisany na żadną ścieżkę nauki.'
        },
        notFound: {
          title: 'Nie znaleziono ścieżek nauki.',
          description: 'Zmień kryteria wyszukiwania.'
        },
        noCompleted: {
          title: 'Nie ukończyłeś jeszcze żadnej ścieżki nauki.',
          description: 'Sprawdź swoje aktywne kursy i spróbuj je ukończyć.'
        }
      }
    }
  },
  quiz: {
    questionNFrom: 'Pytanie {questionNumber} z {quizLength}',
    questionN: 'Pytanie {questionNumber}',
    checkTheAnswer: 'Sprawdź odpowiedź',
    checkTheDroppable: 'Skończyłem!',
    associationQuestionExplanation: 'Kliknij na przedmiot, a następnie na odpowiednią kategorię. Kliknij przycisk SPRAWDŹ ODPOWIEDŹ, gdy skończysz.',
    multipleAssociationQuestionExplanation: 'Kliknij na przedmiot, a następnie na odpowiednią kategorię. Jeden przedmiot może należeć do więcej niż jednej kategorii. Kliknij przycisk SPRAWDŹ ODPOWIEDŹ, gdy skończysz.',
    sortingQuestionExplanation: 'Przeciągnij i upuść przedmioty, aby ustawić je we właściwej kolejności. Kliknij przycisk SPRAWDŹ ODPOWIEDŹ, gdy skończysz.',
    numberOfQuestions: 'Brak punktów w quizie | 1 punkt | {n} punkty',
    noTries: 'Sprawdź swoje odpowiedzi',
    noCorrect: 'Nie poddałeś się!',
    allCorrect: 'Dobra robota! Odpowiedziałeś na wszystkie pytania!',
    allCorrectVariants: ['Dobra robota!', 'Brawo!', 'Świetnie!'],
    numberOfCorrect: 'Tak trzymaj | Masz 1 poprawną odpowiedź z {length} pytań | Masz {correct} poprawnych odpowiedzi z {length} pytań',
    usedAttempts: 'Wykorzystałeś {wrongCount} z {wrongLimit} możliwych prób',
    questionType: 'Typ pytania',
    newAnswer: 'Zmień tekst odpowiedzi tutaj',
    addAnswer: 'Dodaj odpowiedź',
    answerText: 'Tekst odpowiedzi',
    explanationText: 'Tekst wyjaśnienia',
    correctAnswerSize: 'poprawne odpowiedzi: {size}',
    questionWeight: 'Waga pytania',
    questionPoints: 'punkty: {points}',
    questionTimerTimeUp: 'Czas minął! Nie ukończyłeś pytania w wyznaczonym czasie. Proszę skontaktuj się z administratorem w celu uzyskania pomocy.',
    questionTimerMessage: 'Masz <strong class="primary--text">{time}</strong> na ukończenie tego pytania. Upewnij się, że jesteś gotowy, zanim zaczniesz.',
    feedback: {
      correct: 'Poprawnie',
      incorrect: 'Niepoprawnie',
      tryAgain: 'Niepoprawnie, spróbuj ponownie',
      noAttemptsLeft: 'Niepoprawnie, brak prób'
    },
    types: {
      MultipleChoice: 'Wielokrotny wybór',
      SingleChoice: 'Jednokrotny wybór',
      Categorization: 'Jedna kategoria',
      MultipleAssociation: 'Wiele kategorii',
      SingleOrdering: 'Sortowanie',
      OpenAnswer: 'Odpowiedź otwarta'
    },
    itemsToSortLabel: 'Elementy do posortowania',
    sortedItemsLabel: 'Posortowane elementy',
    itemsToCategoriseLabel: 'Elementy do zorganizowania',
    categories: 'Kategorie',
    categoriesQuestion: {
      itemNumber: 'Element ',
      categoryNumber: 'Kategoria '
    },
    uploadFile: 'Prześlij plik',
    typeYourAnswerHere: 'Wpisz tutaj swoją odpowiedź',
    yourFile: 'Twój plik',
    submitAnswer: 'Wyślij odpowiedź',
    fileURL: 'Adres URL pliku',
    noFileUploaded: 'Nie przesłano jeszcze pliku',
    answerSubmittedWaiting: 'Odpowiedź przesłana. Oczekiwanie na ocenę. Nadal możesz ją edytować.',
    answerSubmittedWrongAttemptsLeft: 'Odpowiedź przesłana. Jest błędna. Nadal możesz ją edytować.',
    answerSubmittedWrong: 'Odpowiedź przesłana. Jest błędna. Nie możesz już jej edytować.',
    answerSubmittedRight: 'Twoja odpowiedź jest poprawna.',
    showCorrectAnswer: 'Pokaż poprawną odpowiedź'
  },
  courseTree: {
    courseOutlineTitle: 'Zarys kursu',
    courseWillStart: '✌️Ten kurs rozpocznie się {date} 🗓.<br>Proszę użyć menu, aby opuścić ten ekran 👋',
    courseFinished: 'Ten kurs zakończył się {date} 🗓.<br>Proszę użyć menu, aby opuścić ten ekran 👋',
    courseExpired: 'Ten kurs wygasł 🗓.<br>Proszę użyć menu, aby opuścić ten ekran 👋',
    coursePendingAproval: 'Twoja rejestracja na ten kurs wymaga zatwierdzenia przez administratora kursu.<br>Proszę użyj menu, aby opuścić ten ekran 👋',
    modulesTitle: 'Struktura kursu',
    sidebarTitle: 'Informacje praktyczne',
    tagsTitle: 'Tagi kursu',
    moduleAvailableFrom: 'Dostępne od {from}',
    moduleAvailableFromUntil: 'Dostępne od {from} do {until}',
    moduleAvailableFromUntilMobile: '{from}-{until}',
    practicalInfo: {
      availableFrom: 'Ten kurs rozpoczyna się:',
      availableFromPast: 'Ten kurs rozpoczął się:',
      availableUntil: 'Ten kurs kończy się:',
      availableUntilPast: 'Rejestracja do kursu zakończyła się:',
      expiresIn: 'Ten kurs wygasa:',
      doesntExpire: 'Ten kurs nigdy nie wygasa',
      courseDuration: 'Długość kursu:',
      startedCourse: 'Zapisałeś się na ten kurs w dniu:',
      numberOfQuestions: 'nie zawiera quizów | 1 punkt | łącznie {questions} punktów',
      numberOfAnswers: 'Nie zdobyłeś jeszcze punktów | Zdobyłeś jeden punkt | Zdobyłeś {questions} punktów!',
      yourScore: 'Twój wynik:',
      addToCalendar: 'Dodaj do kalendarza'
    },
    gamification: {
      gamificationTitle: 'Twoje osiągnięcia',
      moreXToGo: '{x} do osiągnięcia',
      checkAllAchievements: 'Kliknij tutaj, aby sprawdzić swoje osiągnięcia',
      achievementUnlocked: 'Odblokowałeś właśnie nowe osiągnięcie!',
      goToAchievement: 'Przejdź do osiągnięć'
    },
    lectureIsNotSeenExplanation: 'Oznacz wykład jako obejrzany, aby przejść do następnego.',
    lectureIsNotStartedExplanation: 'Następny wykład jest jeszcze niedostępny.',
    lectureIsNotDoneExplanation: 'Oznacz wykład jako obejrzany i odpowiedz na pytania dotyczące wykładu, aby przejść do następnego'
  },
  lecture: {
    workbook: 'Skrypt zajęć',
    quiz: 'Proszę odpowiedzieć na poniższe pytania',
    quizDescription: 'Instrukcje dla quizu',
    previous: 'Poprzedni wykład',
    next: 'Następny wykład',
    duration: 'Czas trwania {duration} minut',
    durationUnknown: 'Czas ukończenia: nieznany',
    numberOfQuestions: 'Brak pytań | 1 pytanie | {size} pytań',
    questionsSize: 'Brak punktów | 1 punkt | {size} punktów',
    goToLecture: 'Przejdź do wykładu',
    goToQuiz: 'Przejdź do quizu',
    questionAnswersSize: 'Pytania: {total}',
    questionsAnswered: '{right}/{total} pytań',
    pointsRight: '{right}/{total} punktów',
    continue: 'Kontynuuj',
    liveLecture: {
      addToGoogleCalendar: 'Dodaj do kalendarza Google',
      addToOutlookCalendar: 'Dodaj do kalendarza Office365 outlook',
      addToMicrosoftLiveCalendar: 'Dodaj do kalendarza Microsoft live',
      joinLecture: 'Kliknij tutaj, aby dołączyć do lekcji',
      startsIn: 'Ta lekcja rozpoczyna się ',
      started: 'Lekcja rozpoczęła się ',
      passed: 'Ta lekcja minęła',
      areYouGoing: 'Idziesz?',
      yes: 'Tak',
      no: 'Nie'
    },
    dialog: {
      isTyping: 'pisze'
    }
  },
  buttons: {
    add: 'Dodaj',
    register: 'Zarejestruj się',
    open: 'Otwórz',
    new: 'Nowy!',
    exploreCourse: 'Przeglądaj kurs',
    testCertificate: 'Pokaż Certyfikat',
    printableVersion: 'Otwórz wersję do druku',
    clone: 'Klonuj',
    resume: 'Wznów kurs',
    enroll: 'Zapisz się',
    enrollAndPay: 'Zapisz się i Zapłać',
    payAndEnroll: 'Zapisz się i zapłać {amount} {currency}',
    goToCourse: 'Przejdź do kursu',
    resumeCourse: 'Wznów kurs',
    viewCourse: 'Zobacz kurs',
    loginAndEnroll: 'Zapisz się',
    login: 'Zaloguj się',
    cancel: 'Anuluj',
    giveUp: 'Zrezygnuj',
    archive: 'Archiwum',
    unarchive: 'Unarchive',
    archiveCourse: 'Zarchiwizuj kurs',
    unarchiveCourse: 'Przywróć kurs z archiwum',
    chooseLanguage: 'Wybierz preferowany język',
    playVideo: 'Odtwórz wideo',
    backToTimeline: 'Powrót do osi czasu',
    nextLecture: 'Następna lekcja',
    subscribeToUpdates: 'Powiadom mnie',
    subscribeToUpdatesBig: 'Chcę otrzymywać powiadomienia o tym kursie',
    goToTheMarketplace: 'Przejdź do Marketplace',
    goToTheLecture: 'Przejdź do wykładu {lecture}',
    goToTheLastLecture: 'Wznów kurs',
    goToTheLastQuiz: 'Wznów certyfikację',
    startCourse: 'Rozpocznij kurs',
    startCertification: 'Start certification',
    getCertificate: 'Otrzymaj certyfikat',
    openCertificate: 'Otwórz certyfikat',
    reactivate: 'Przywróć',
    completeCourse: 'Ukończ kurs',
    backToTheCourse: 'Do strony kursu',
    viewAllCourses: 'Wszystkie kursy',
    viewMyDashboard: 'Moja Tablica',
    viewMyCourses: 'Moje Kursy',
    topNewCourses: 'Najnowsze Kursy',
    goToSettings: 'Moje ustawienia',
    goToLearnerProfile: 'Profil ucznia',
    goToOrganization: 'Organizacja',
    goToAdmin: 'Obszar administratora',
    toggleDark: 'Przełącz na tryb ciemny',
    toggleCompleted: 'Pokaż ukończone',
    toggleViewAsNonAdmin: 'Przełącz na widok nie-administratora',
    logout: 'Wyloguj się',
    languages: 'Języki',
    toggleEditingMode: 'Tryb edycji',
    deleteText: 'usuń',
    save: 'Zapisz',
    markAsSeen: 'Oznacz jako przeczytane',
    attendedLiveLecture: 'Uczestniczyłem w webinarium',
    lectureSeen: 'Ukończyłeś tę lekcję',
    manageCourses: 'Zarządzaj kursami',
    manage: 'Zarządzaj',
    edit: 'Edytuj',
    export: 'Eksportuj kurs',
    ok: 'Ok',
    switchSignUpToRegister: 'Nie mam jeszcze konta.',
    switchSignUpToLogin: 'Jestem już zarejestrowany.',
    continue: 'Kontynuuj',
    continueWithFacebook: 'Kontynuuj z Facebookiem',
    continueWithGoogle: 'Kontynuuj z Googlem',
    close: 'Zamknij',
    forceUpdate: 'Tak, kontynuuj!',
    showDetails: 'Pokaż szczegóły',
    deleteCourse: 'Usuń kurs',
    translateCourse: 'Tłumacz kurs',
    selectCourse: 'Wybierz kurs',
    deleteLearningPath: 'Usuń ścieżkę nauki',
    downloadCertificate: 'Pobierz certyfikat',
    connect: 'Połącz',
    reconnect: 'Połącz ponownie',
    sync: 'Synchronizuj',
    invite: 'Zaproś',
    showUsers: 'Pokaż użytkowników',
    hideUsers: 'Ukryj użytkowników',
    previousLecture: 'Poprzednia lekcja',
    exitFullscreenLectureMode: 'Wyjdź z trybu pełnoekranowego',
    enterFullscreenLectureMode: 'Wejdź w tryb pełnoekranowy',
    download: 'Pobierz',
    downloadForGroup: 'Pobierz raport grupowy',
    addField: 'Dodaj pole',
    delete: 'Usuń',
    startOver: 'Zmień wybór',
    back: 'Wstecz',
    continueWithOAuth: 'Kontynuuj z {workspaceName}',
    comingSoon: 'Wkrótce dostępne',
    courses: 'Wszystkie kursy',
    answerTypeform: 'Odpowiedz na to',
    proceed: 'Przejdź dalej',
    launchFullscreen: 'Uruchom w trybie pełnoekranowym',
    collapse: 'Zwiń',
    expand: 'Rozwiń',
    goUp: 'Przejdź do góry',
    locked: 'Zablokowane',
    done: 'Gotowe',
    exploreLearningPath: 'Odkryj',
    startNow: 'Rozpocznij teraz',
    uploadImage: 'Prześlij obraz',
    addNew: 'Dodaj nowe',
    deleteGroup: 'Usuń grupę',
    deleteSkill: 'Usuń umiejętność',
    forceDeleteGroup: 'Usuń grupę mimo wszystko',
    forceDeleteSkill: 'Usuń umiejętność mimo wszystko',
    iAmDone: 'Skończyłem!',
    editCoverPhoto: 'Edytuj zdjęcie na okładce'
  },
  courses: {
    duration: '{duration}',
    modulesTitle: 'Opis kursu',
    hours: 'godzin | godzina | godziny',
    minutes: 'minut | minuta | minuty',
    courses: 'Wszystkie kursy',
    courseNotSelected: 'Nie wybrano kursu',
    myCourses: 'Moje kursy',
    module: 'Moduł {moduleNumber}',
    notEnrolled: 'Nie jesteś zapisany na żaden kurs!',
    noCompleted: 'Nie ukończyłeś jeszcze żadnego kursu',
    clickToCatalog: 'Kliknij tutaj, aby zobaczyć katalog kursów',
    exploreCourses: 'Przeglądaj kursy',
    numberOfModules: 'moduły',
    finishAndGetCert: 'Otrzymaj certyfikat',
    validUntil: 'Ważne do {expireDate}',
    completedCoursesTitle: 'Ukończone kursy',
    completedCoursesSubtitle: 'Kursy, które już ukończyłeś',
    courseIsCertifiable: 'Certyfikat na końcu kursu',
    achievementsEnabled: 'Osiągnięcia za postęp w kursie',
    noCourses: 'Nie znaleziono kursów',
    goToDashboard: 'Sprawdź swój dashboard, aby zobaczyć swoje kursy',
    noLearningPaths: 'Nie znaleziono ścieżek uczenia się',
    noCoursesWithSearch: 'Nie znaleziono kursów',
    tooltipShareUrl: 'Udostępnij adres URL',
    titleCopyText: 'Skopiuj adres URL do schowka',
    titleTextCopied: 'Adres URL skopiowany',
    buttonCopyText: 'kopiuj',
    buttonTextCopied: 'skopiowane',
    searchHeader: 'Szukaj',
    searchLabel: 'Szukaj kursów...',
    aiSearchLabel: 'Szukaj kursów za pomocą AI...',
    aiSearchButton: 'Wyszukiwanie AI',
    classicSearchButton: 'Wyszukiwanie klasyczne',
    aiSearchDescription: 'Rozumie język naturalny. Spróbuj: "Pokaż mi kursy dla inżynierów, które poprawią zarządzanie czasem."',
    classicSearchDescription: 'Wyszukuje według dokładnych słów kluczowych w tytułach kursów, opisach i treści.',
    totalFound: 'Nie znaleziono kursów | Znaleziono kurs <strong>{n}</strong> | znaleziono <strong>{n}</strong> kursów',
    tagsHeader: 'Tagi ({tags} wybranych)',
    durationHeader: 'Czas trwania ({durations} wybranych)',
    resetFilters: 'Zresetuj filtry',
    filtersTitle: 'Filtry',
    applyFilters: 'Zastosuj filtry',
    durations: {
      less30: 'mniej niż 30 minut',
      between30and2: 'od 30 minut do 2 godzin',
      between2and4: 'od 2 do 4 godzin',
      more4: 'więcej niż 4 godziny'
    },
    tags: {
      loadMore: 'Załaduj więcej...',
      loadLess: 'Załaduj mniej...',
      noTags: 'Nie znaleziono tagów',
      deleteTag: 'usuń tag'
    },
    anonymousNotAllowed: 'Musisz być zapisany na kurs, aby zobaczyć zawartość',
    badge: {
      template: 'szablon',
      external: 'zewnętrzny',
      scorm: 'scorm',
      requiresApproval: 'wymaga zatwierdzenia',
      archived: 'zarchiwizowany',
      inactive: 'nieaktywny',
      paymentMissing: 'brakująca płatność'
    },
    paidCourses: {
      payNowHeader: 'Zapłać teraz {amount} {currency}',
      payNowDescription: 'Po dokonaniu płatności będziesz miał dostęp do kursu',
      payNowButton: 'Zapłać teraz',
      paymentSucceeded: 'Płatność za kurs {name} zakończona sukcesem',
      paymentFailed: 'Płatność za kurs {name} nie powiodła się: {err}',
      finalisingPayment: 'Finalizowanie płatności, proszę czekać...⏳',
      voucherCode: 'Kod vouchera',
      applyButton: 'Zastosuj',
      payWithLiqpay: 'Zapłać za pomocą LiqPay',
      payAmountCurrency: 'Zapłać {amount} {currency}',
      vatIncluded: '(z VAT)',
      applyPromocode: 'Jeśli masz kod promocyjny, wprowadź go w poniższe pole.',
      confirmSettingsAndProceed: 'Potwierdź ustawienia i kontynuuj',
      wrongTaxId: 'Nieprawidłowy format identyfikatora podatkowego. Prawidłowy format to <strong>{correctFormat}</strong>.<br>Odśwież stronę i spróbuj ponownie.'
    },
    failedCourse: {
      failedCourseTitle: 'Ważna Aktualizacja Twojego Kursu',
      failedCourseTooltip: 'Proszę ponownie uruchomić kurs, aby go ukończyć.',
      failedCourseAlertMessage: 'Niestety, niemożliwe jest uzyskanie wystarczającej liczby punktów do otrzymania certyfikatu. Zdobyłeś {correct} z {total} punktów, ale to nie wystarcza, aby spełnić wymaganie {minRate}%',
      failedCourseOneTimeEnrolment: 'Nie można ponownie uruchomić kursu. Skontaktuj się z administratorem w celu ponownej rejestracji.',
      restartCourseButton: 'Uruchom ponownie kurs'
    },
    headers: {
      titleAndDescription: 'Tytuł kursu i opis',
      quizProgress: 'Postęp pytań',
      title: 'Tytuł kursu',
      description: 'Opis kursu',
      ordering: 'Kolejność kursu',
      progress: 'Postęp w kursie',
      createTime: 'Utworzono',
      updateTime: 'Zaktualizowano'
    },
    published: 'Opublikowany'
  },
  learningPaths: {
    noCompleted: 'Nie ukończyłeś jeszcze żadnej ścieżki edukacyjnej',
    noAssigned: 'Nie masz jeszcze żadnych przypisanych ścieżek edukacyjnych',
    numberOfCourses: 'Brak kursów | {completed}/1 kurs | {completed}/{n} kursów',
    achievementsLabel: 'Osiągnięcia',
    skillsLabel: 'Umiejętności',
    certificateLabel: 'Certyfikat na końcu',
    progressLabel: 'Postęp',
    totalFound: 'Nie znaleziono ścieżek nauki | Znaleziono <strong>{n}</strong> ścieżek nauki | Znaleziono <strong>{n}</strong> ścieżek nauki',
    item: {
      title: 'Tytuł i opis',
      steps: 'Kroki',
      progress: 'Postęp',
      actions: 'Akcje'
    }
  },
  auth: {
    or: 'LUB',
    dontHaveAnAccountYet: 'Nie masz jeszcze konta?',
    enterPassword: 'Wprowadź hasło',
    enterPhone: 'Wprowadź numer telefonu',
    atLeastChars: 'Co najmniej {numberCharacters} znaków',
    forgotPassword: 'Zapomniane hasło?',
    resetPassword: {
      title: 'Zresetuj hasło',
      description: 'Wprowadź swój adres e-mail, a wyślemy Ci e-mail z instrukcjami dotyczącymi resetowania hasła.',
      placeholder: 'Adres e-mail',
      button: 'Zresetuj hasło',
      info: 'Jeśli nie otrzymasz od nas wiadomości e-mail w ciągu kilku minut, sprawdź folder ze spamem, ponieważ czasem tam trafiają.',
      support: 'E-mail będzie wysłany z adresu info@theworkademy.com',
      passwordResetSuccess: '<b>Dobra robota!</b> Instrukcje dotyczące resetowania hasła zostały wysłane na Twój adres e-mail. Sprawdź swoją skrzynkę pocztową.',
      changePasswordTitle: 'Zmień hasło',
      changePasswordDesc: 'Wprowadź nowe hasło.',
      passwordChangeSuccess: '<b>Dobra robota!</b> Hasło zostało pomyślnie zaktualizowane. Zaloguj się teraz swoim nowym hasłem.',
      passwordChangeSuccessAndLogin: '<b>Dobra robota!</b> Hasło zostało pomyślnie zaktualizowane. Teraz możesz zalogować się swoim nowym hasłem.'
    },
    nameLabel: 'Nazwa',
    namePlaceholder: 'Jan Kowalski',
    emailLabel: 'E-mail',
    join: 'Dołącz do nas!',
    alreadyHaveAccount: 'Masz już konto?',
    loginNow: 'Możesz teraz się zalogować!',
    token: 'Token',
    newPassword: 'Nowe hasło',
    repeatPassword: 'Powtórz nowe hasło',
    passwordRequired: 'Wymagane hasło',
    passwordRule: 'Hasło musi mieć co najmniej 8 znaków i nie powinno przekraczać {maxChars} znaków',
    passwordShouldMatch: 'Hasła powinny być identyczne',
    emailRequired: 'Adres e-mail jest wymagany',
    emailValid: 'Adres e-mail musi być poprawny',
    nameRequired: 'Nazwa jest wymagana',
    nameLessThan: 'Nazwa musi mieć mniej niż {MAX_NAME_LENGTH} znaków',
    passwordValid: 'Hasło musi mieć co najmniej 8 znaków i nie powinno przekraczać {MAX_PASSWORD_LENGTH} znaków',
    repeatPasswordRequired: 'Proszę powtórzyć hasło',
    passwordsDontMatch: 'Hasła nie pasują do siebie',
    phoneValid: 'Numer telefonu powinien być poprawny',
    profilePicture: 'Zdjęcie profilowe',
    pictureLabel: 'Adres URL zdjęcia profilowego',
    pictureHint: 'Skopiuj link do ulubionego zdjęcia profilowego',
    phone: 'Numer telefonu',
    city: 'Miasto',
    street: 'Ulica',
    postalCode: 'Kod pocztowy',
    country: 'Kraj',
    addressAndPhoneTitle: 'Adres i numer telefonu',
    changePassword: 'Zmień hasło',
    oldPasswordLabel: 'Stare hasło',
    newPasswordLabel: 'Nowe hasło',
    phoneLabels: {
      countrySelectorLabel: 'Kod kraju',
      countrySelectorError: 'Wybierz kraj',
      phoneNumberLabel: 'Numer telefonu',
      example: 'Przykład :'
    },
    consentRule: 'Musisz wyrazić zgodę na politykę prywatności, aby kontynuować',
    consentLabel: 'Zgadzam się z <a href="{url}" target="_blank">polityką prywatności</a>',
    loginSuccessful: 'Zalogowanie powiodło się',
    registrationSuccessful: 'Rejestracja powiodła się',
    loginWithEmail: 'Zaloguj się za pomocą e-maila',
    registerWithEmail: 'Zarejestruj się za pomocą e-maila',
    alreadyHaveAnAccount: 'Masz już konto?',
    loginTitle: 'Zaloguj się',
    registerTitle: 'Zarejestruj się',
    loginDisclaimer: '',
    registerDisclaimer: '',
    whereToGoTitle: 'Który workspace Workademy?',
    whereToGoSubtitle: 'Wpisz nazwę swojego workspace Workademy. Na przykład "workademy"',
    workspaceNameLabel: 'Workspace Name',
    workspaceNamePlaceholder: 'workademy',
    backToRipplingButton: 'Wróć do Rippling',
    proceedToWorkspaceButton: 'Przejdź do {name}',
    loginWithRippling: 'Zaloguj się za pomocą Rippling',
    loginWithDeel: 'Zaloguj się za pomocą Deel',
    createNewWorkspace: 'Lub utwórz nowe środowisko pracy'
  },
  errors: {
    '-1': 'Wystąpił nieznany błąd',
    1000: 'Ta nazwa użytkownika już istnieje',
    1001: 'Użytkownik nie znaleziony',
    1002: 'Nazwa użytkownika lub hasło jest nieprawidłowe',
    1003: 'Nazwa użytkownika lub hasło jest nieprawidłowe',
    1004: 'Nieprawidłowe dane uwierzytelniające',
    1100: 'Nieprawidłowy token',
    1101: 'Token wygasł',
    59: 'Nieprawidłowe dane uwierzytelniające lub nazwa użytkownika i hasło nie pasują do siebie',
    1300: 'Nie spełniono warunku wstępnego: użytkownik jeszcze nie ukończył kursu',
    1500: 'Nie znaleziono Vouchera z kodem {code}',
    1501: 'Voucher z tym kodem {code} został już wykorzystany',
    popup_closed_by_user: 'Okno uwierzytelniania Google zostało zamknięte przez użytkownika',
    9905: 'Sprawdź ustawienia e-mail na Facebooku. E-mail musi być zweryfikowany.',
    9904: 'Nie udało się uwierzytelnić z Personio. Sprawdź dane połączenia.',
    LOCKED: 'Twoje konto jest zablokowane. Proszę zresetuj swoje hasło',
    PASSWORD_DONT_MATCH: 'Twoje hasło nie pasuje',
    1302: 'Jesteś już zapisany na ten kurs. Można zapisać się tylko raz na ten kurs',
    1307: 'Obowiązuje okres schładzania wynoszący <strong>{period}</strong>, zanim będziesz mógł ponownie przystąpić do tego kursu.',
    1308: 'Rejestracja niemożliwa: Ukończyłeś już ten kurs, a zapis jest możliwy tylko raz.'
  },
  footer: {
    platformDescription: '<strong>{title}</strong> jest platformą e-learningową, która skupia się na najnowszych trendach w zdobywaniu wiedzy i motywacji do tego.',
    links: 'Linki',
    contacts: 'Kontakty',
    github: 'GitHub',
    foundIssues: 'Znalazłeś jakieś problemy?',
    submitThem: 'zgłoś je!',
    privacyUrl: 'https://www.theworkademy.com/privacy',
    workademyPrivacyLabel: 'Polityka prywatności Workademy',
    privacyLabel: 'Polityka prywatności',
    contentLabel: 'Polityka treści',
    tacUrl: 'https://www.theworkademy.com/tac',
    workademyTacLabel: 'Regulamin Workademy',
    tacLabel: 'Regulamin',
    contactUsTitle: 'Skontaktuj się z nami!',
    contactUsText: 'Jeśli masz jakiekolwiek pytania lub znajdziesz błąd w kursie, napisz do nas!',
    supportEmail: 'support@theworkademy.com',
    poweredBy: 'zasilane przez <a href="{companyUrl}" target="_blank" class="company-link">{company}</a>'
  },
  progress: {
    go: 'Do dzieła! Odpowiedziałeś tylko na {completed} z {total}',
    nice: 'Dobrze! {completed} z {total}! Tak trzymaj!',
    almost: 'Prawie gotowe! {completed} z {total}!',
    done: 'Jesteś bohaterem! {completed} z {total}!',
    shorten: '{completed}/{total}',
    courseScore: 'Twój wynik w kursie: <strong>{percentage}%</strong>',
    yourProgress: 'Mój postęp',
    answeredQuestions: '<strong>{score}</strong> punktów za poprawnie udzielone odpowiedzi',
    seenLecture: '<strong>{score}</strong> lekcji obejrzanych',
    yourScore: 'Wynik: {score}',
    noScore: 'Ten kurs nie ma quizów',
    questionsProgress: 'Odpowiedziałeś na {progress}% pytań ({correct}/{total})',
    lecturesProgress: 'Przeczytałeś {progress}% wykładów ({correct}/{total})',
    overallProgress: 'Odpowiedziałeś na {progressQuestions}% ({correctQuestions}/{totalQuestions}) pytań i przeczytałeś {progressLectures}% ({correctLectures}/{totalLectures}) wykładów.'
  },
  settings: {
    settings: 'Ustawienia',
    changeSettings: 'Zmień ustawienia',
    changeSettingsSuccess: 'Twoje zmiany zostały pomyślnie zapisane!',
    changeSettingsError: 'Wystąpił błąd podczas zmiany ustawień: {err}.',
    passwordChangeSuccess: 'Twoje hasło zostało pomyślnie zmienione.',
    passwordChangeError: 'Wystąpił błąd podczas zmiany hasła: {err}.',
    language: 'Język',
    takeMeBack: 'Wróć mnie',
    userPic: {
      change: 'Wgraj nowe zdjęcie profilowe (png lub jpeg)',
      add: 'Dodaj zdjęcie profilowe (png lub jpeg)',
      chooseYourAvatar: 'Avatary'
    }
  },
  learnerProfile: {
    learnerProfile: 'Profil ucznia',
    achievementsTitle: 'Moje osiągnięcia',
    skillsTitle: 'Moje umiejętności',
    viewAll: 'Zobacz wszystkie',
    courses: 'Kursy',
    learningPaths: 'Ścieżki nauki',
    achievements: 'Osiągnięcia',
    skills: 'Umiejętności',
    level: 'Poziom',
    frames: 'Gamification Frames',
    points: 'Punkty kursu'
  },
  organization: {
    organization: 'Moja organizacja',
    skills: 'Umiejętność | Umiejętności',
    members: 'Członek | Członkowie',
    level: 'Poziom',
    noGroupsYet: 'Nie utworzono jeszcze grup organizacyjnych.',
    noGroupsAdmin: 'Nie utworzono jeszcze grup. Aby zobaczyć strukturę organizacyjną, należy utworzyć grupy.',
    createGroupsBtn: 'Utwórz grupy',
    points: 'Punkty kursu',
    loadMoreUsers: 'załaduj więcej użytkowników...'
  },
  certificates: {
    congratulations: 'Gratulacje, zakwalifikowałeś się do otrzymania certyfikatu!',
    eligibleHeadline: '👉 Wynik: {score}%. Po uzyskaniu certyfikatu kurs się kończy, ale materiały pozostają dostępne na Twoim pulpicie.',
    eligibleHeadlineCombined: '👉 Osiągnięty postęp: {score} poprawnych odpowiedzi i {lectures} ukończonych wykładów. Po osiągnięciu tego poziomu możesz otrzymać certyfikat. Kurs się kończy, ale materiały pozostają dostępne na twoim pulpicie nawigacyjnym.',
    youCanCancel: '👉 Możesz kontynuować kurs teraz i odebrać swój certyfikat później. Możliwość odbioru pozostanie dostępna.',
    checkNameText: '⚠️ Uwaga! Upewnij się, że nazwa na certyfikacie w ustawieniach jest poprawna:',
    changeNameInSettingsText: 'Aby poprawić nazwę, użyj przycisku <strong>Zmień Nazwę</strong> i wróć tutaj.',
    generateForName: 'Potwierdzam wydanie certyfikatu na <strong>{name}</strong>.',
    writeYourName: 'Certyfikat zostanie wydany na nazwisko {name}. ' +
      'Aby potwierdzić wpisz ponownie swoje imię i nazwisko. Jeśli to nie jest poprawne, najpierw zmień swoje ustawienia',
    writeYourNameLabel: 'Wpisz swoje imię i nazwisko',
    yourPercentage: 'Otrzymałeś <strong>{score}%</strong>. Możesz nadal spróbować zdobyć więcej!',
    getMoreButton: 'Powrót do kursu',
    notEligibleHeadline: 'Nie spełniasz jeszcze wymagań',
    notEligibleText: 'Wróć do kursu i odpowiedz na pozostałe pytania',
    notEligibleOkButton: 'Ok, rozumiem co zrobić',
    eligibleZeroScoreHeadline: 'Ukończyłeś kurs i spełniasz wymagania do uzyskania certyfikatu. Kurs zawsze będzie dostępny w sekcji ukończonych kursów.',
    eligibleAnsweredAll: 'Odpowiedziałeś na wszystkie pytania kursu i teraz możesz go ukończyć. Kurs zawsze będzie dostępny w sekcji ukończonych kursów.',
    eligibleReadAll: 'Oznaczyłeś wszystkie wykłady jako przeczytane i teraz możesz ukończyć kurs. Kurs zawsze będzie dostępny w sekcji ukończonych kursów.',
    eligibleCancel: 'Nie musisz ukończyć kursu teraz. Przycisk do ukończenia kursu będzie zawsze widoczny.',
    nameInSettingsText: 'Imię i nazwisko w Twoich ustawieniach to',
    changeSettingsLinkText: 'Zmień ustawienia',
    changeNameLinkText: 'Zmień nazwisko',
    byProcedingWithCertGenText: 'Przechodząc do kolejnego kroku zgadzasz się, że ukończyłeś kurs i nazwa powyżej, {name} odnosi się do Ciebie.',
    instructions: 'Po otrzymaniu certyfikatu zostaniesz przekierowany do swojego pulpitu nawigacyjnego. Nie będziesz już mógł zobaczyć swoich odpowiedzi na ten kurs.\n' +
      ' Jednak będziesz mógł ponownie zapisać się na kurs i ponownie go ukończyć!',
    generate: 'Generuj certyfikat',
    continueToCourse: 'Przejdź do kursu',
    completeCourse: 'Ukończ kurs',
    getCertificate: 'Certyfikat',
    openCertificate: 'Otwórz certyfikat',
    dontGenerate: 'Anuluj',
    certificateTitle: 'CERTYFIKAT UKOŃCZENIA',
    issuedOn: 'Data wydania:',
    toCertifyThat: 'świadczyć, że',
    hasCompletedTheCourse: 'ukończył(a) kurs',
    progress: 'postęp',
    withScore: 'z wynikiem {score}%',
    ofADurationOf: 'o długości {duration}',
    withDuration: 'Z długością mniejszą niż jedna godzina | Z długością jednej godziny | Z długością {duration} godzin',
    checkCertificateText: 'Autentyczność tego certyfikatu można zweryfikować pod adresem:',
    wasCreatedByWorkademy: 'Kurs został stworzony przez <a href="https://www.theworkademy.com" target="_blank">Workademy</a> — Akademia w pracy, Praca w akademii.',
    shareMyAchievement: 'Podziel się moim osiągnięciem',
    sharingTitle: 'Właśnie ukończyłem(a) kurs {courseName}',
    sharingQuote: 'Właśnie ukończyłem(a) kurs {courseName}',
    sharingDescription: 'Właśnie ukończyłem(a) kurs {name} i otrzymałem(a) certyfikat!',
    canGetCertificate: 'Poprawnie odpowiedziałeś/łaś na <strong>{score}</strong> z <strong>{total}%</strong> pytań. <br>Możesz otrzymać swój certyfikat.',
    needMoreToGetCertificate: 'Musisz poprawnie odpowiedzieć na <strong>{total}%</strong> pytań kursu. <br>Odpowiedziałeś/łaś poprawnie na <strong>{score}</strong>.',
    givenUpCourse: 'Wydaje się, że porzuciłeś/łaś ten kurs. Musisz zrestartować ten kurs, jeśli chcesz otrzymać certyfikat.',
    courseCompletedWithSuccess: 'Kurs {name} został pomyślnie ukończony!',
    youHaveToAnswerAllQuestions: 'Aby ukończyć kurs, musisz odpowiedzieć na wszystkie pytania.',
    youHaveToCompleteAllLectures: 'Aby ukończyć kurs, musisz ukończyć wszystkie wykłady.',
    youHaveAnsweredAllQuestions: 'Odpowiedziałeś/łaś na wszystkie pytania kursu i możesz teraz ukończyć kurs.',
    youHaveCompletedAllLectures: 'Ukończyłeś/łaś wszystkie wykłady kursu i możesz teraz ukończyć kurs.',
    youHaveAlreadyCompleted: 'Już ukończyłeś/łaś ten kurs.',
    youCompletedСertification: 'Ukończyłeś tę certyfikację',
    eligibleAllCertification: 'Pomyślnie odpowiedziałeś na wszystkie quizy i możesz teraz ukończyć tę certyfikację. Zawsze będzie dostępna w sekcji ukończonych kursów.',
    eligibleCancelCertification: 'Nie musisz teraz kończyć certyfikacji. Przycisk do ukończenia certyfikacji zawsze będzie dostępny.',
    youHaveAlreadyCertificate: 'Twój certyfikat został już wydany. Kliknij przycisk, aby go otworzyć.',
    shareOnLinkedIn: 'Dodaj do LinkedIn',
    cantFind: 'Certyfikat o UUID {uuid} nie mógł zostać znaleziony.',
    proceedToMainPage: 'Przejdź do strony głównej',
    youHaveToCompleteExternalCourse: 'Kliknij przycisk, gdy ukończysz kurs.',
    youHaveCompletedExternalCourse: 'Oznaczyłeś już ten kurs jako ukończony',
    finishExternalCourseTitle: 'Potwierdź ukończenie kursu',
    finishExternalCourseSubtitle: 'Klikając przycisk „Zakończ kurs”, potwierdzasz ukończenie kursu. Jeśli nie ukończyłeś kursu, wybierz „Anuluj”, aby wrócić i kontynuować kurs.'
  },
  vouchers: {
    introduceCode: 'Wpisz kod vouchera, aby zapisać się na kurs',
    voucherCode: 'Kod vouchera'
  },
  admin: {
    drawer: {
      adminToolsDrawer: {
        title: 'Narzędzia administracyjne kursu'
      }
    },
    attendance: {
      attending: 'Uczestniczący:',
      notAttending: 'Nieuczestniczący:',
      attendedLive: 'Uczestniczył:',
      seenBy: 'Widziany przez:'
    },
    enroll: {
      enrollIntoCourse: 'Zapisz użytkowników na kurs {name}',
      enrollIntoLearningPath: 'Zapisz użytkowników na ścieżkę edukacyjną {name}',
      grantFreebieButton: 'Przyznaj dostęp',
      grantFreebieSuccess: 'Użytkownik {name} otrzymał dostęp do kursu',
      grantFreebieError: 'Wystąpił błąd przy przyznawaniu dostępu użytkownikowi {name}: {err}'
    },
    stepper: {
      basicInformationTitle: 'Podstawowe Informacje',
      mediaVisualsTitle: 'Media i Wizualizacje',
      enrollmentAccessTitle: 'Rejestracja i Dostęp',
      certificationCompletionTitle: 'Certyfikaty i Ukończenie',
      courseFeaturesTitle: 'Kurs i Funkcje',
      commercialSettingsTitle: 'Ustawienia Handlowe',
      miscellaneousTitle: 'Różne',
      externalUrlTitle: 'Źródło',

      title: 'Tytuł Kursu *',
      titleDesc: 'Ustaw nazwę kursu.',
      descriptionTitle: 'Opis',
      descriptionDesc: 'Napisz krótki podsumowanie lub szczegółowy opis kursu.',
      tagsTitle: 'Tagi',
      tagsDesc: 'Dodaj tagi do klasyfikacji treści kursu.',
      durationTitle: 'Czas trwania',
      durationDesc: 'Określ długość trwania kursu.',
      durationLabel: 'Czas trwania w minutach',
      typeTitle: 'Typ kursu',
      typeDesc: 'Określ typ kursu zgodnie z jego celem. Każdy typ jest dostosowany do określonego podejścia edukacyjnego lub certyfikacyjnego.',
      typeLabel: 'Wybierz typ kursu',
      types: {
        base: 'Kurs podstawowy',
        external: 'Kurs zewnętrzny',
        SCORM: 'SCORM',
        certification: 'Kurs certyfikacyjny',
        umbrella: 'Kurs nadrzędny'
      },

      cardImageTitle: 'Obrazek Karty Kursu',
      cardImageDesc: 'Prześlij obrazek reprezentujący kurs na listach.',
      coverImageChooser: 'Wybierz obrazek okładki kursu',
      useDefaultCover: 'Użyj Domyślnej Okładki',
      wideCoverTitle: 'Szeroka Okładka Kursu',
      wideCoverDesc: 'Ustaw szeroką okładkę dla szczegółowych widoków kursu.',

      externalTitle: 'Zewnętrzny URL',
      externalDesc: 'Ustaw URL prowadzący uczestników do zewnętrznych materiałów edukacyjnych.',
      externalLabel: 'Link kierujący do kursu zewnętrznego',

      anonymousAllowedTitle: 'Wymóg Uwierzytelniania',
      anonymousAllowedDesc: 'Zdecyduj, czy użytkownicy mogą zapisywać się bez uwierzytelniania.',
      anonymousAllowedLabel: 'Anonimowy dostęp dozwolony',
      availableFromUntilTitle: 'Czas rozpoczęcia i zakończenia',
      availableFromUntilDesc: 'Ustaw oficjalne godziny rozpoczęcia i zakończenia kursu.',
      preEnrollAllowedTitle: 'Przedrejestracja',
      preEnrollAllowedDesc: 'Zezwól użytkownikom na zapisanie się przed datą rozpoczęcia kursu.',
      preEnrollAllowedLabel: 'Przedrejestracja dozwolona',
      advancedTitle: 'Zaawansowane',
      enrollmentCodeTitle: 'Kod Rejestracji',
      enrollmentCodeDesc: 'Włącz lub wyłącz konieczność użycia kodu rejestracyjnego.',
      enrollmentCodeLabel: 'Aktywacja za pomocą kodu rejestracyjnego',
      oneTimeEnrollmentTitle: 'Jednorazowa Rejestracja',
      oneTimeEnrollmentDesc: 'Określ, czy kurs pozwala na jednokrotną rejestrację na użytkownika.',
      oneTimeEnrollmentLabel: 'Jednorazowa rejestracja (bez możliwości powtarzania kursu)',
      enrollmentApprovalTitle: 'Zatwierdzanie Rejestracji',
      enrollmentApprovalDesc: 'Określ, czy rejestracje wymagają zatwierdzenia przez administratora.',
      enrollmentApprovalLabel: 'Wstępna akceptacja rejestracji uczestników',
      recurringCourseTitle: 'Kurs Cykliczny',
      recurringCourseDesc: 'Określ, czy kurs jest cykliczny i podaj datę pierwszego cyklu.',

      certificationTitle: 'Ustawienia Certyfikacji',
      certificationDesc: 'Włącz lub wyłącz certyfikację dla kursu.',
      gradeTitle: 'Wymagana Ocena',
      gradeDesc: 'Określ procent wymaganego wyniku do uzyskania certyfikatu.',
      coolingOffPeriod: 'Okres Oczekiwania',
      coolingOffPeriodDesc: 'Określ czas, jaki uczestnicy muszą odczekać przed ponownym podejściem do kursu po niezaliczeniu.',
      coolingOffPeriodLabel: 'Czas Oczekiwania (godziny)',
      pointsEarnedTitle: 'Zdobyte Punkty',
      pointsEarnedDesc: 'Określ liczbę punktów zdobywanych po ukończeniu kursu.',
      pointsEarnedLabel: 'Zdobyte Punkty',

      learningSequenceTitle: 'Sekwencja Nauki',
      learningSequenceDesc: 'Określ, czy nauka na kursie jest sekwencyjna.',
      learningSequenceLabel: 'Nauka sekwencyjna (każdy moduł otwiera się po ukończeniu poprzedniego)',
      forumDiscussionTitle: 'Dyskusja na Forum',
      forumDiscussionDesc: 'Włącz lub wyłącz fora dyskusyjne dla kursu.',

      paidTitle: 'Kurs Płatny',
      paidDesc: 'Określ, czy kurs jest płatny i ustal cenę.',
      exemptTitle: 'Darmowy dostęp dla grup',
      exemptDesc: 'Użytkownicy należący do następujących grup są zwolnieni z płatności.',
      featuredTitle: 'Kurs Polecany',
      featuredDesc: 'Oznacz, jeśli kurs powinien pojawić się w wyróżnionej sekcji.',
      featuredLabel: 'Oznacz jako Polecany',

      folderTitle: 'Folder',
      folderDesc: 'Zorganizuj swój kurs w folderze',
      disclaimerPopupTitle: 'Pop-up Zrzeczenia się Odpowiedzialności',
      disclaimerPopupDesc: 'Skonfiguruj pop-up z zastrzeżeniem wyświetlanym podczas rejestracji.',
      templateTitle: 'Szablon Kursu',
      templateDesc: 'Określ, czy ten kurs może być kopiowany przez innych użytkowników.',
      templateLabel: 'Kurs Szablonowy',
      manualOrderTitle: 'Ręczna Kolejność',
      manualOrderDesc: 'Określ ręczną kolejność kursu w listach.',
      manualOrderLabel: 'Kolejność Kursu',
      customFieldsTitle: 'Pola Niestandardowe',
      customFieldsDesc: 'Dodaj niestandardowe pola związane z kursem.',
      newFieldNameLabel: 'Nazwa Pola',
      newFieldValueLabel: 'Wartość Pola',
      newFieldNamePlaceholder: 'Nazwa',
      newFieldValuePlaceholder: 'Wartość',

      coverLabel: 'Obrazek Okładki',
      enterUrl: 'Wprowadź URL',

      certificateForAnsweredQuestions: 'Za odpowiedzi na pytania',
      certificateForAnsweredQuestionsInfo: 'Wydaj certyfikat za określony procent odpowiedzi na pytania',
      certificateForReadLectures: 'Za ukończone wykłady',
      certificateForReadLecturesInfo: 'Wydaj certyfikat po ukończeniu wszystkich wykładów',
      passingRateLabel: 'Próg Zaliczenia',

      modulesLabel: 'Liczba modułów',
      lecturesLabel: 'Liczba wykładów w każdym module',
      sectionsLabel: 'Liczba sekcji w każdym wykładzie',
      createCourse: 'Utwórz Kurs',
      updateCourse: 'Zaktualizuj Kurs',
      scormPreview: 'Podgląd SCORM pojawi się tutaj',
      scormBeingProcessed: 'SCORM został przesłany! Trwa jego przetwarzanie, co może zająć do dwóch minut. Możesz poczekać lub wrócić później. <strong>Pamiętaj, aby zapisać swój kurs!</strong>',
      scormProcessedSuccessfully: 'SCORM został pomyślnie przetworzony!',
      scormProcessedError: 'Wystąpił błąd podczas przetwarzania pliku SCORM. Spróbuj przesłać go ponownie.',
      oneTimeEnrollment: 'Jednorazowa Rejestracja',
      recurring: {
        isRecurringText: 'Ten kurs jest cykliczny.',
        isNotRecurringText: 'Ten kurs nie jest cykliczny',
        periodLabel: 'Okres cykliczności',
        firstExecutionLabel: 'Pierwsza rekrutacja powinna nastąpić:',
        firstExecutionExplanation: 'Pierwszy raz, gdy cykliczność zostanie zastosowana. <br>' +
          'Uczestnicy zapisani na kurs i którzy go już ukończyli, zostaną po raz pierwszy ponownie zapisani w tym terminie.',
        amountLabel: 'Ilość',
        timesToRepeat: 'Liczba powtórzeń',
        periodOfRecurringText: 'Uczestnicy muszą powtarzać ten kurs co ',
        saveRecurring: 'Zapisz informacje o cykliczności',
        deleteRecurring: 'Usuń właściwości cykliczności',
        period: {
          MONTHLY: 'Miesiąc | Miesiące',
          YEARLY: 'Rok | Lata'
        },
        messages: {
          createdSuccess: 'Planowanie cykliczności kursu {name} utworzone pomyślnie.',
          updatedSuccess: 'Planowanie cykliczności kursu {name} zaktualizowane pomyślnie.',
          deletedSuccess: 'Planowanie cykliczności kursu {name} usunięte pomyślnie.',
          createdError: 'Błąd podczas tworzenia planowania cykliczności kursu {name}: {err}.',
          updatedError: 'Błąd podczas aktualizacji planowania cykliczności kursu {name}: {err}.',
          deletedError: 'Błąd podczas usuwania planowania cykliczności kursu {name}: {err}.'
        }
      },
      ai: {
        topicAndLocaleTitle: 'Temat i Język',
        contextTitle: 'Dodatkowy Kontekst',
        contextExplanation: 'Tutaj możesz napisać wszystko, co pomoże dostosować kurs do konkretnych potrzeb firmy.',
        contextHint: 'Przykład: Jesteśmy rozwijającą się firmą ubezpieczeniowo-technologiczną, dążącą do sukcesu sprzedażowego.',
        contentSpecificationTitle: 'Specyfikacje Treści',
        numberOfThingsTitle: 'Specyfikacja treści',
        topicLabel: 'Temat kursu',
        localeLabel: 'Język kursu',
        contextLabel: 'Dodatkowy Kontekst',
        noModulesLabel: 'Liczba modułów',
        noTopicsLabel: 'Liczba tematów w każdym module',
        noOptionsLabel: 'Liczba opcji w każdym pytaniu',
        noModulesHint: 'Liczba modułów może wynosić od 1 do 10',
        noTopicsHint: 'Liczba tematów na moduł nie może być mniejsza niż jeden i większa niż 5',
        noOptionsHint: 'Liczba opcji na pytanie nie może być mniejsza niż 3 i większa niż 5',
        specifyEveryModule: 'Określ każdy moduł, który ma się pojawić w twoim kursie',
        specifyEveryModuleExplanation: 'Określ tytuł każdego modułu w kursie, np. "Podstawy RODO", "RODO a technologia ubezpieczeniowa", "RODO dla programistów"',
        modules: 'Moduły',
        lectures: 'Wykłady',
        questions: 'Pytania',
        businessGoalsLabel: 'Cele biznesowe kursu',
        businessGoalsHint: 'Zacznij pisać, aby wyszukać lub stwórz własny cel',
        businessGoalsExplanation: 'Cele biznesowe powinny być SMART – Specyficzne, Mierzalne, Osiągalne, Istotne, Ograniczone czasowo. ' +
          'Na przykład, "Zwiększenie przychodów ze sprzedaży: Zwiększ przychody kwartalne o 15% poprzez wdrożenie zaawansowanego szkolenia sprzedażowego dla zespołu do końca Q2."',
        businessGoalsExamples: [
          'Zwiększenie przychodów ze sprzedaży: Zwiększ przychody kwartalne o 15% poprzez wdrożenie zaawansowanego szkolenia sprzedażowego dla zespołu do końca Q2.',
          'Poprawa satysfakcji klientów: Osiągnij ocenę satysfakcji klientów na poziomie 90% poprzez szkolenie personelu obsługi klienta w rozwiązywaniu konfliktów i umiejętnościach komunikacyjnych w ciągu następnych 6 miesięcy.',
          'Rozwój umiejętności pracowników: Zapewnij, że 100% działu marketingowego zostanie przeszkolone w narzędziach analityki danych w ciągu następnych 3 miesięcy, aby poprawić efektywność kampanii.',
          'Redukcja kosztów operacyjnych: Obniż koszty produkcji o 10% w przyszłym roku poprzez usprawnienie operacji i szkolenia z efektywności dla personelu produkcyjnego.',
          'Rozszerzenie zasięgu rynkowego: Wejdź na 2 nowe rynki międzynarodowe do końca roku, przygotowując zespół sprzedażowy w zakresie umiejętności językowych i szkolenia kulturowego do Q3.',
          'Zwiększenie świadomości marki: Popraw świadomość marki o 25% mierzoną zaangażowaniem w mediach społecznościowych poprzez serię ukierunkowanych szkoleń z marketingu cyfrowego dla zespołu marketingowego w ciągu następnego kwartału.',
          'Rozwój umiejętności liderów: Rozwijaj umiejętności lidera wśród 20 menedżerów średniego szczebla, zapisując ich na kompleksowy program szkolenia liderów do końca roku fiskalnego.',
          'Zwiększenie retencji pracowników: Zmniejsz roczny obrót pracowników o 5% poprzez ulepszone praktyki zarządzania i kursy rozwoju liderów przez następne 12 miesięcy.',
          'Poprawa czasów dostawy projektów: Skróć czasy dostawy projektów o 20% w ciągu najbliższych 9 miesięcy dzięki zaawansowanemu szkoleniu z zarządzania projektami dla wszystkich kierowników projektów.',
          'Zwiększenie wydajności produkcji: Osiągnij 15% wzrost efektywności produkcji poprzez szkolenie personelu w nowych technologiach produkcyjnych w ciągu najbliższych 6 miesięcy.',
          'Rozwój transformacji cyfrowej: Przeszkol 90% pracowników firmy w nowych narzędziach cyfrowych i platformach do końca roku, aby wspierać inicjatywy transformacji cyfrowej.',
          'Poprawa zdrowia i bezpieczeństwa: Osiągnij zero wypadków w miejscu pracy w nadchodzącym roku poprzez kompleksowe szkolenia bezpieczeństwa dla wszystkich nowych pracowników w ich pierwszym miesiącu pracy.',
          'Zwiększenie zaangażowania pracowników: Podnieś wyniki zaangażowania pracowników o 10 punktów poprzez sesje szkoleniowe z zakresu liderowania i motywacji do końca roku.',
          'Rozwój linii produktów: Wprowadź na rynek 3 nowe produkty do Q4, przygotowując zespół rozwoju produktu przez sesje szkoleniowe z zarządzania innowacjami rozpoczynające się w Q2.',
          'Zmniejszenie skarg klientów: Zredukuj skargi klientów o 20% w ciągu najbliższego roku poprzez ulepszone protokoły obsługi i szkolenia z obsługi reklamacji dla zespołów obsługi klienta.',
          'Optymalizacja zarządzania łańcuchem dostaw: Popraw efektywność łańcucha dostaw o 15% w ciągu najbliższych 6 miesięcy poprzez specjalistyczne szkolenia z logistyki łańcucha dostaw dla członków zespołu.',
          'Poprawa środków cyberbezpieczeństwa: Zapewnij, że 100% personelu IT zostanie przeszkolone w najnowszych praktykach i reakcjach dotyczących cyberbezpieczeństwa do końca Q3 w celu złagodzenia ryzyka.',
          'Poprawa raportowania finansowego: Osiągnij 100% dokładności w raportowaniu finansowym poprzez szkolenie zespołu finansowego w nowym oprogramowaniu i standardach zgodności w ciągu najbliższego kwartału.',
          'Maksymalizacja efektywności IT: Zwiększ czas pracy systemów IT do 99,9% poprzez ciągłe szkolenia techniczne dla personelu IT rozpoczynające się w przyszłym miesiącu.',
          'Rozwój myślenia strategicznego: Kultywuj myślenie strategiczne w całej organizacji poprzez warsztaty dla wszystkich wyższych menedżerów w ciągu najbliższych 6 miesięcy.'
        ],
        averageAgeTitle: 'Średni Wiek',
        averageAgeLabel: 'Średni Wiek',
        averageAgeExplanation: 'Jaki jest średni wiek uczestników?',
        averageAgeHint: 'Jeśli Twój zespół ma od 20 do 50 lat, odpowiedzią jest 35.',
        educationalBackgroundTitle: 'Wykształcenie',
        educationalBackgroundExplanation: 'Jakie jest wykształcenie uczestników? Możesz napisać coś takiego jak "Dorośli pracujący w opiece zdrowotnej bez wcześniejszej wiedzy o opiece medycznej w nagłych wypadkach."',
        educationalBackgroundLabel: 'Wykształcenie',
        educationalBackgroundHint: 'Przykład: Głównie specjaliści z tytułem magistra pracujący nad badaniami rynku.',
        learningGoalsTitle: 'Cele Edukacyjne',
        learningGoalsExplanation: 'Upewnij się, że cele edukacyjne są konkretne, mierzalne i zgodne z celami biznesowymi.',
        learningGoalsLabel: 'Cele Edukacyjne',
        learningGoalsHint: 'Przykład: Uczestnicy będą potrafili stosować podstawowe techniki pierwszej pomocy.',
        acquiredAbilitiesTitle: 'Nabyte Umiejętności',
        acquiredAbilitiesExplanation: 'Nabyte umiejętności powinny być zorientowane na działanie i jasno określać, co uczestnicy będą potrafili robić',
        acquiredAbilitiesLabel: 'Nabyte Umiejętności',
        acquiredAbilitiesHint: 'Uczestnicy będą potrafili prawidłowo wykonać resuscytację krążeniowo-oddechową, rozpoznać objawy zawału serca i używać defibrylatora AED.',
        timeCommitmentHoursTitle: 'Zaangażowanie Czasowe (w Całkowitych Godzinach)',
        timeCommitmentHoursExplanation: 'Zważ na intensywność i tempo kursu, biorąc pod uwagę dostępność uczestników.',
        timeCommitmentHoursLabel: 'Zaangażowanie Czasowe',
        timeCommitmentHoursHint: 'Przykład: jeśli uczestnicy mają 3 godziny tygodniowo przez 4 tygodnie, wynosi to 12.',
        pdfTitle: 'Wzbogać treść kursu o PDF',
        pdfExplanation: 'Jeśli masz już PDF ze specyficzną treścią dla tego kursu, możesz go tutaj przesłać.'
      },
      info: {
        step1: 'W tej sekcji wybierz zdjęcie okładki kursu, nadaj kursowi tytuł i zaznacz pole wyboru "Kurs szablonowy", jeśli będzie on służył jako szablon dla innych kursów. ' +
          '<span class="font-weight-bold">Wszystkie te ustawienia można później zmienić.</span>',
        step2: 'W tej sekcji napisz ładny opis kursu. Lista celów edukacyjnych może być dobrym opisem kursu. ' +
          'Użyj bogatego edytora, aby podkreślić ważne informacje, utworzyć listy lub dodać kolory. ' +
          '<strong>Opis kursu można również zmienić później.</strong>',
        step3: 'Użyj tej sekcji, aby dodać tagi do kursu. Możesz wybrać istniejące tagi lub stworzyć nowe. <strong>Tagi kursu mogą zostać dodane i/lub zmienione później.</strong>',
        step4: 'Proszę określić czas trwania kursu w minutach. Na przykład, jeśli trwa 10 minut, to 10 minut, jeśli trwa 2 godziny, to 120 minut, itd. <strong>Ustawienia czasu trwania kursu mogą być dodane i zmienione później.</strong>',
        step5: 'Użyj tej sekcji, aby określić, czy kurs będzie certyfikowalny, czy nie. Możesz także określić minimalny wynik zaliczenia, w procentach od 0 do 100. ' +
          '<strong>Te ustawienia można określić i zmienić później.</strong>',
        certificateScormExplanation: 'Użyj tej sekcji, aby określić, czy kurs będzie certyfikowalny, czy nie. ' +
          '<strong>Te ustawienia można określić i zmienić później.</strong>',
        step6: 'Nauka społeczna to doskonałe narzędzie motywacyjne! Zaznacz pole wyboru, aby włączyć forum Disqus po każdej wykładzie w kursie. ' +
          '<strong>Tę opcję można włączyć i wyłączyć w dowolnym momencie później.</strong>',
        step7: '',
        step8: 'Użyj tej sekcji, aby określić liczbę modułów w kursie, wykładów na moduł i sekcji na wykład. ' +
          '<strong>To nie jest ostateczna decyzja, po utworzeniu kursu można dodawać lub usuwać moduły, wykłady i sekcje.</strong>',
        anonymousAllowedExplanation: 'Włącz to, aby umożliwić anonimowe przeglądanie kursu bez autoryzacji. ' +
          'Uważaj jednak, że testy i certyfikaty nie miałyby sensu w tego typu kursie.',
        preEnrollAllowedExplanation: 'Odznacz, aby uniemożliwić uczniom zapisywanie się przed rozpoczęciem kursu',
        externalUrl: 'Wklej zewnętrzny adres URL, do którego będzie prowadziła karta kursu',
        paidCourse: {
          amount: 'Kwota',
          currency: 'Waluta',
          amountShouldBeAboveZero: 'Kwota nie może wynosić zero',
          paymentTypes: {
            STRIPE: 'Stripe',
            LIQPAY: 'LiqPay'
          }
        },
        availableFromTo: 'Wybierz datę i godzinę, od kiedy kurs będzie dostępny oraz do kiedy. ' +
          'Zwróć uwagę, że użytkownicy nie będą mogli uczestniczyć w kursie przed datą rozpoczęcia lub po dacie zakończenia.' +
          '<strong>Możesz zmienić te ustawienia w dowolnym momencie.</strong>',
        sequentialLearning: 'Włącz tę opcję, jeśli uczestnik może przejść do następnej lekcji dopiero po ukończeniu poprzedniej.',
        oneTimeEnrollment: 'Zaznacz tę opcję, aby uniemożliwić uczestnikowi wielokrotną rejestrację na kurs.',
        paidCourseInfo: 'Ustaw informacje dotyczące płatności. Nie można zmienić dostawcy płatności w przyszłości, ale można zmienić kwotę i walutę. ' +
          '<strong>Upewnij się, że odpowiednia integracja dostawcy usług płatniczych jest skonfigurowana w sekcji <em>Admin -> Integracje</em></strong>',
        voucherActivated: 'Zaznacz tę opcję, jeśli skonfigurowałeś kody rejestracji dla tego kursu i wymagasz kodów rejestracji do dostępu do kursu.',
        customFields: 'Tutaj możesz zdefiniować niestandardowe pola kursu <strong>(Zaawansowana konfiguracja)</strong>.',
        scormUpload: 'Prześlij plik SCORM tutaj. Możesz go zmienić w dowolnym momencie w przyszłości.',
        ordering: 'Ustal kolejność wyświetlania kursu, jeśli chcesz, aby kurs ten pojawił się na innej pozycji na liście kursów. ' +
          'Na przykład, wyobraź sobie, że masz konkretny kurs, który chcesz, aby był pierwszy na liście. Następnie ustaw kolejność na <strong>1</strong>.' +
          '<br><br><em>Aby zignorować kolejność, ustaw wartość na <strong>1000</strong>. Kurs zostanie wtedy posortowany według daty utworzenia lub aktualizacji.</em>',
        preEnrollDescription: 'Określ kod HTML wyskakującego okienka wstępnej rejestracji, które będzie wyświetlane każdemu uczniowi przed zapisaniem się na kurs.',
        preApproveEnrollmentDescription: 'Wybierz tę opcję, jeśli wymagane jest zatwierdzenie zapisu. ' +
          'Uczniowie będą próbowali zapisać się na kursy, ale nie będą mogli rozpocząć kursów, dopóki administratorzy nie zatwierdzą ich zapisu.',
        aggregated: {
          metadata: 'Zdefiniuj tutaj wszystkie metadane kursu: tytuł kursu, obraz okładki, opis, czas trwania, tagi. Określ kolejność kursu oraz niestandardowe pola, jeśli jest to konieczne.',
          socialLearning: 'Nauka społeczna - określ, czy forum dyskusyjne jest dostępne po każdym wykładzie, czy nie.',
          achievements: 'Zdefiniuj osiągnięcia kursu – ramki awatara, punkty kursu, certyfikat.',
          courseAccess: 'Zdefiniuj ustawienia związane z dostępnością kursu: daty rozpoczęcia i zakończenia, czy jest dostępny do anonimowego wyświetlania, czy za pomocą kodów zapisów.',
          recurring: 'Określ ustawienia, jeśli kurs ma być cykliczny: zapisani użytkownicy muszą okresowo powtarzać kurs. ' +
            'Może to być przydatne dla niektórych obowiązkowych szkoleń, takich jak zgodność. <strong>UWAGA: dotyczy tylko uczestników zapisanych jako grupa.</strong>'
        },
        ai: {
          topicAndLocale: 'Podaj temat i wskaż język generowanej treści.',
          context: 'Podaj dodatkowy kontekst, np. czego uczeń nauczy się na tym kursie, cele, rezultaty uczenia się, cele biznesowe.',
          numberOfThings: 'Wskaż liczbę modułów, tematów i opcji w każdym pytaniu oceniającym.'
        },
        featuredDescription: 'Oznacz ten kurs jako wyróżniony. Pojawi się on w dużej sekcji karuzeli na liście kursów.'
      },
      popup: {
        title: 'Tytuł',
        subtitle: 'Podtytuł',
        content: 'Treść',
        action: 'Akcja'
      }
    },
    newCourse: {
      courseName: 'Tytuł kursu',
      courseDescription: 'Opis kursu',
      createNewCourse: 'Stwórz nowy kurs',
      newExternalResource: 'Stwórz nowe zewnętrzne źródło',
      newAiCourse: 'Stwórz nowy kurs z pomocą AI',
      newScormCourse: 'Stwórz nowy kurs SCORM',
      exploreAllWaysToCreateNewCourse: 'Odkryj wszystkie sposoby tworzenia nowego kursu',
      newUmbrellaCourse: 'Stwórz nowy kurs UMBRELLA',
      importCourse: 'Importuj kurs w formacie JSON',
      downloadJSON: 'Pobierz kurs w formacie JSON',
      uploadJSON: 'Prześlij JSON',
      createUmbrellaCourse: 'Stwórz kurs UMBRELLA',
      createUmbrellaCourseExplanation: 'Stwórz kurs, który wyświetli drzewo decyzyjne dla ucznia.',
      createUmbrellaCourseCaption: 'Uczeń odpowie na pytanie i zostanie poprowadzony do właściwego kursu po ich zakończeniu.',
      uploadJSONExplanation: 'Prześlij wcześniej wyeksportowany plik JSON kursu.',
      uploadJSONCaption: 'Najlepszy sposób na klonowanie kursów między przestrzeniami roboczymi!',
      usingWizard: 'Stwórz kurs za pomocą naszego inteligentnego kreatora',
      basedOnBloom: 'oparty na planowaniu wstecznym i taksonomii Blooma',
      comingSoon: '(już wkrótce)',
      usingBasicStructure: 'Stwórz kurs o podstawowej strukturze',
      usingExternalResource: 'Stwórz nowe połączenie do zewnętrznego źródła',
      createExternalCourse: 'Stwórz łącze do zewnętrznego źródła',
      createScormCourse: 'Importuj pakiet kursu SCORM',
      lookingLikeCourseCard: 'Będzie wyglądać jak normalna karta kursu',
      scormCourseDescription: 'Stwórz kurs i załaduj swój pakiet SCORM',
      scormCourseCaption: '(Lub zamień URL pliku SCORM)',
      pointingToExternalResource: 'i będzie wskazywał na zewnętrzne źródło',
      toBeLaterFilledWithContent: 'Do wypełnienia treścią w późniejszym czasie',
      iKnowWhatDoing: '(Wiem, co robię!)',
      passingRateCantBeMore: 'Wynik progu zdawalności nie może być większy niż 100',
      passingRateCantBeLess: 'Wynik progu zdawalności nie może być mniejszy niż 0',
      courseBeingCreated: 'Trwa tworzenie kursu {name}...',
      courseBeingUpdated: 'Kurs {name} jest aktualizowany...',
      usingAiTitle: 'Stwórz zarys kursu z AI 🪄',
      aiCourseBeingGenerated: 'Tworzenie Twojego kursu...\n' +
        'Możesz poczekać, aż będzie gotowy, lub sprawdzić go później w sekcji "Zarządzanie Kursami". Możesz teraz zamknąć to okno.',
      usingAiDescription: 'Generuj zarys kursu, wpisując instrukcje do monitu.',
      usingAiCaption: '(Czuję się szczęśliwy!)',
      beforeCreating: 'Przed rozpoczęciem tworzenia kursów rozważ pobranie ' +
        '<strong><a href="https://assets.theworkademy.com/shared/WORKADEMY_CREATE_COURSE_FROM_SCRATCH.pdf" target="_blank">tego pliku PDF</a></strong> ' +
        'Pomoże on w tworzeniu struktury kursu.'
    },
    editExistingCourses: 'Edytuj istniejące kursy',
    editExistingLearningPaths: 'Edytuj istniejące ścieżki uczenia się',
    editCourseInfo: 'Edytuj informacje o kursie',
    enrollUsers: 'Zapisz użytkowników',
    durationInMinutes: 'Czas trwania w minutach',
    availabilityDates: 'Daty dostępności kursu',
    manageCoursesTitle: 'Zarządzaj kursami',
    manageLearningPathsTitle: 'Zarządzaj ścieżkami uczenia się',
    templateCoursesTitle: 'Szablony',
    forumEnabled: 'Forum włączone (dla każdej lekcji dołączone forum dyskusyjne)',
    voucherActivated: 'Zapisy aktywowane za pomocą kuponów (należy ustawić kampanie w sekcji zarządzania kampaniami)',
    certificateEnabled: 'Certyfikat włączony',
    sharableCertificate: 'Certyfikat można dodać do LinkedIn',
    publicCourse: 'Kurs publiczny (dostępny dla całego świata) - W trakcie prac',
    sequentialProgress: 'Sekwencyjne uczenie się (każdy moduł otwiera się po zakończeniu poprzedniego)',
    oneTimeEnrollOnly: 'Jednorazowy zapis (brak możliwości powtórzenia kursu)',
    quiz: {
      questionText: 'Treść pytania',
      questionSettings: 'Ustawienia Pytania',
      questionAnswers: 'Odpowiedzi na pytanie',
      questionExplanation: 'Wyjaśnienie pytania',
      limitAttempts: 'Ograniczenie prób',
      numberAttempts: 'Liczba prób',
      addTimeLimit: 'Dodaj limit czasu',
      timeLimitseconds: 'Limit czasu (sekundy)',
      editAnswer: 'Edytuj odpowiedź',
      editAnswerLabel: 'Edytuj odpowiedź',
      explanation: 'Wyjaśnienie',
      editQuestion: 'Edytuj pytanie',
      addNewQuestion: 'Dodaj nowe pytanie quizu',
      questionType: 'Typ pytania',
      hasCorrectAnswer: 'Ma poprawną odpowiedź',
      itemLabel: 'Pozycja',
      categoryLabel: 'Kategoria',
      doesntCountForEvaluation: 'Nie liczy się do oceny',
      mandatory: 'Oznacz jako obowiązkowe',
      mandatoryExplanation: 'Uczestnik musi odpowiedzieć na to pytanie, aby przejść dalej (działa wraz z uczeniem sekwencyjnym).',
      openAnswer: {
        evaluateOpenAnswerOf: 'Oceń otwarte pytanie odpowiedzi użytkownika {user}',
        answer: 'Odpowiedź',
        usersFile: 'Plik użytkownika',
        downloadFile: 'Pobierz plik użytkownika',
        noFile: '{user} nie przesłał/a żadnego pliku',
        markAsIncorrect: 'Oznacz jako nieprawidłowe',
        markAsCorrect: 'Oznacz jako prawidłowe',
        openInNew: 'Otwórz w nowym oknie',
        questionTitle: 'Pytanie',
        feedbackTitle: 'Opinia',
        changeFeedback: 'Zmień opinię',
        provideFeedback: 'Udziel opinii',
        addFeedback: 'Dodaj opinię bez oceniania',
        gradeAnswerButtonCaption: 'Gdy ocenisz odpowiedź, opinia (jeśli została udzielona) zostanie również wysłana'
      }
    },
    editingMode: {
      editCourse: {
        editCourseTitle: 'Edytuj kurs {name}'
      },
      inlineEditorPlaceholder: 'Wpisz tekst...',
      emojiPicker: {
        addEmoji: 'Dodaj Emoji',
        unset: 'Usuń',
        change: 'Zmień',
        pickerTitle: 'Wybierz swoje emoji...',
        search: 'Szukaj',
        notfound: 'Nie znaleziono Emoji',
        categories: {
          search: 'Wyniki wyszukiwania',
          recent: 'Często używane',
          smileys: 'Buźki & Emotikony',
          people: 'Ludzie & Ciało',
          nature: 'Zwierzęta & Natura',
          foods: 'Jedzenie & Napoje',
          activity: 'Aktywność',
          places: 'Podróże & Miejsca',
          objects: 'Obiekty',
          symbols: 'Symbole',
          flags: 'Flagi',
          custom: 'Niestandardowe'
        }
      },
      placeholder: {
        courseTitle: 'Wpisz tytuł kursu...',
        courseDescription: 'Wpisz opis kursu...',
        moduleTitle: 'Wpisz tytuł modułu...',
        moduleDescription: 'Wpisz opis modułu...',
        lectureTitle: 'Wpisz tytuł wykładu...',
        lectureDescription: 'Wpisz opis wykładu...',
        sectionTitle: 'Wpisz tytuł sekcji...',
        sectionText: 'Wpisz tekst sekcji...',
        questionText: 'Wpisz pytanie...',
        answerText: 'Wpisz odpowiedź...',
        bubbleText: 'Wpisz tekst dymka...',
        optionTitle: 'Wpisz tytuł opcji...',
        accordionTitle: 'Wpisz tytuł akordeonu...',
        accordionText: 'Wpisz tekst...',
        quizDescription: 'Wpisz opis quizu...'
      },
      questionBank: {
        bankSwitch: 'Bank pytań',
        title: 'Utwórz bank pytań dla tej lekcji/modułu i wykorzystaj losową liczbę pytań, które zostaną pokazane uczestnikom.',
        weightLabel: 'Ile pytań o wadze {weight} wykorzystać w banku?',
        weightHint: 'Maksymalnie dozwolone {max}',
        usedText: 'Wykorzystano <span class="font-weight-bold ">{numberOfUsedQuestions}</span> z <span class="font-weight-bold ">{totalNumberOfQuestions}</span> całkowitej liczby pytań'
      },
      lecture: {
        editLecture: 'Edytuj lekcję',
        topOfTheLectureHeader: 'Początek wykładu (Obraz okładki, Wideo, Typeform, SCORM lub wykład na żywo)',
        editLectureHeader: 'Początek wykładu',
        noHeader: 'brak nagłówka',
        editHeaderCover: 'Obrazek okładki',
        addHeaderCover: 'Obrazek okładki',
        editVideoSource: 'Źródło wideo',
        addVideoSource: 'Źródło wideo',
        editLiveLecture: 'Lekcja na żywo',
        editTypeformLecture: 'Typeform',
        addTypeformLecture: 'Typeform',
        editLoomLecture: 'Edytuj Loom',
        addLoomLecture: 'Dodaj Loom',
        editScormLecture: 'Edytuj pakiet SCORM',
        addScormLecture: 'Dodaj pakiet SCORM',
        enableLoom: 'Skonfiguruj Loom w panelu admin/integracje',
        addLiveLecture: 'Lekcja na żywo',
        pasteLiveLink: 'Wklej link do Zoom lub innego programu do wideokonferencji',
        liveStartTime: 'Czas rozpoczęcia',
        liveFinishTime: 'Czas zakończenia',
        onClearHeader: 'Wyczyść nagłówek',
        lectureSettings: 'Ustawienia wykładu',
        navigateLectureWith: 'Nawiguj lekcję za pomocą:',
        navigateWithButton: 'Przycisk "Kontynuuj" (każda kolejna sekcja lekcji otwiera się po kliknięciu przycisku "Kontynuuj")',
        navigateWithScroll: 'Przewijanie (wszystkie sekcje są domyślnie otwarte)',
        recordLoomVideo: 'Nagraj wideo Loom',
        addLoomVideoUrl: 'Edytuj adres URL wideo Loom',
        addScormUrl: 'Edytuj adres URL pakietu SCORM',
        editPdfSectionDesc: 'Ta sekcja pozwala na umieszczenie pliku PDF wewnątrz lekcji oraz na pobranie go.',
        editSevenTapsLecture: 'Edytuj lekcję 7taps',
        addSevenTapsLecture: 'Dodaj lekcję 7taps',
        invalidPdfUrl: 'Nieprawidłowy adres URL pliku PDF (musi kończyć się na .pdf)',
        lectureVisibility: {
          title: 'Konfiguruj zasady widoczności wykładu',
          buttonText: 'Zmień widoczność wykładu',
          dialog: {
            title: 'Zasady widoczności wykładu',
            noRules: 'Nie zdefiniowano jeszcze żadnych zasad widoczności',
            allRules: 'Pokaż wykład, jeśli spełnia WSZYSTKIE te zasady:',
            anyRules: 'I spełnia DOWOLNĄ z tych zasad:',
            addRuleButton: 'Dodaj zasadę',
            addAndRuleButton: 'Dodaj regułę AND',
            addOrRuleButton: 'Dodaj regułę OR',
            saveRulesButton: 'Zapisz reguły',
            whenText: 'Kiedy',
            operators: {
              QUESTIONS: {
                EQUALS: 'jest',
                NOT_EQUALS: 'nie jest',
                CONTAINS: 'zawiera',
                NOT_CONTAINS: 'nie zawiera'
              },
              GROUPS: {
                EQUALS: 'jest',
                NOT_EQUALS: 'nie jest',
                CONTAINS: 'zawiera którykolwiek',
                NOT_CONTAINS: 'nie zawiera żadnego'
              }
            },
            connectors: {
              AND: 'i',
              OR: 'lub'
            },
            selectAQuestion: 'Wybierz pytanie',
            selectAnAnswer: 'Wybierz odpowiedź'
          }
        }
      },
      editCourseStructure: 'Edytuj strukturę kursu',
      clickHereToChangeText: 'Kliknij tutaj, aby zmienić tekst',
      editCourseInfo: 'Edytuj informacje o kursie',
      enrollUsers: 'Zapisz użytkowników',
      checkProgress: 'Sprawdź postęp',
      editCourseDescription: 'Edytuj opis kursu',
      editLectureDescription: 'Edytuj opis wykładu',
      addNewModule: 'Dodaj nowy moduł',
      addNewLecture: 'Dodaj nowy wykład do modułu',
      addNewSection: 'Dodaj nową sekcję',
      addNewBranchSection: 'Dodaj nową sekcję gałęzi',
      deleteModule: 'Usuń moduł',
      editModuleDescription: 'Edytuj opis modułu',
      deleteLecture: 'Usuń wykład',
      deleteGamificationItem: 'Usuń element gamifikacji',
      saveCourseBeforeEditingLecture: 'Zapisz kurs przed edycją wykładu',
      addSection: 'Dodaj nową sekcję',
      addQuestion: 'Dodaj nowe pytanie',
      addNewBubble: 'Dodaj nową bańkę',
      newTextBubble: 'Bańka tekstowa',
      newVideoBubble: 'Bańka wideo',
      newAudioBubble: 'Bańka audio',
      newQuestionBubble: 'Bańka z pytaniem',
      changeVideoSource: 'Zmień źródło wideo',
      changeAudioSource: 'Zmień źródło audio',
      editSection: 'Edytuj sekcję',
      deleteSection: 'Usuń sekcję',
      deleteOption: 'Usuń opcję',
      addOption: 'Dodaj opcję',
      editMediaSource: 'Edytuj źródło multimediów',
      changeMediaSourceLabel: 'Zmień źródło multimediów wykładu',
      addVideoLabel: 'Wklej link do YouTube, Vimeo, Wistia, Loom lub GoogleDrive',
      addVideoHint: 'Alternatywnie, kliknij "kopiuj URL" przy elemencie wideo w bibliotece i wklej go tutaj.',
      videoSubtitles: 'Napisy do wideo',
      addVideoSubtitles: 'Dodaj napisy',
      editVideoSubtitles: 'Edytuj napisy',
      addVideoSubtitlesTrack: 'Dodaj ścieżkę napisów',
      videoSubtitlesLocale: 'Język',
      videoPreview: 'Podgląd wideo pojawi się tutaj',
      addTypeformUrl: 'Wklej swój link Typeform',
      addSevenTapsUrl: 'Wklej swój link kursu 7Taps',
      addTypeformId: 'Wklej swój identyfikator Typeform',
      changeMediaSourceHint: 'Źródło multimediów może być ścieżką do obrazu w formacie PNG lub JPG / JPEG. ' +
        'Może to również być ścieżka do filmu na YouTube w formie https://www.youtube.com/embed/qeUGOsW8ewk ' +
        'lub może to być ścieżka do filmu na Vimeo w formie https://player.vimeo.com/video/334294316',
      mediaSource: {
        clickToCreateVideoOrCover: 'Kliknij tutaj, aby utworzyć wykład wideo lub dodać okładkę',
        clickHereToCreateLiveLecture: 'Kliknij tutaj, aby utworzyć wykład na żywo Zoom lub Google Meets (wkrótce)',
        clickToEditVideoSrc: 'Kliknij tutaj, aby edytować źródło wideo lub zamienić je na okładkę',
        clickToEditCover: 'Kliknij tutaj, aby zamienić okładkę lub dodać źródło wideo',
        canBeImage: 'Źródło multimediów może być ścieżką do obrazu w formacie PNG lub JPG.',
        canBeYoutube: 'Źródło multimediów może być ścieżką do filmu na YouTube, np. https://www.youtube.com/embed/qeUGOsW8ewk',
        canBeVimeo: 'Źródło multimediów może być ścieżką do filmu na Vimeo, np. https://player.vimeo.com/video/334294316',
        canBeTypeform: 'Źródło multimediów może być ścieżką do ankiety Typeform, np. https://workademy.typeform.com/to/j2OAMk',
        dropZoomInvite: 'Upuść zaproszenie na swój wykład Zoom',
        addMediaSource: 'Dodaj źródło mediów (obraz, wideo lub ankieta)',
        createZoomLecture: 'Utwórz wykład Zoom'
      },
      editQuestion: 'Edytuj pytanie',
      addNewQuestion: 'Dodaj nowe pytanie quizu',
      questionType: 'Typ pytania',
      deleteQuestion: 'Usuń pytanie',
      deleteQuestionDialogTitle: 'Strefa zagrożenia!',
      deleteQuestionDialogText: ' Usunięcie pytania może spowodować błędy z powodu pracy studentów w toku. ' +
        'Rozważ zapisanie kursu przed podjęciem tej operacji.',
      newModuleName: 'Nazwa modułu',
      newModuleDescription: 'Opis modułu',
      newLectureName: 'Nazwa wykładu',
      newLectureDescription: 'Opis wykładu',
      resetBtn: 'Reset',
      resetBtnTooltip: 'Resetuj zmiany na kursie.',
      saveBtn: 'Zapisz',
      saveOnlyBtn: 'Tylko zapisz',
      saveAndNotifyBtn: 'Zapisz i powiadom uczestników',
      saveAndNotifyDialog: {
        title: 'Zapisz i powiadom uczestników',
        subtitle: 'Zapisz kurs i powiadom uczestników o najnowszych aktualizacjach.',
        notifyEveryone: 'Powiadom wszystkich',
        youAreAboutToNotify: 'Żaden uczestnik nie spełnia wybranych kryteriów powiadomienia. | Masz zamiar powiadomić jednego uczestnika. Kliknij „Powiadom”, aby kontynuować. | Masz zamiar powiadomić {n} uczestników. Czy na pewno chcesz kontynuować?',
        youAreAboutToNotifyMany: 'Żaden uczestnik nie spełnia wybranych kryteriów powiadomienia. | Masz zamiar powiadomić jednego uczestnika. Kliknij „Powiadom”, aby kontynuować. | Masz zamiar powiadomić {n} uczestników. Powiadomienie więcej niż 50 osób może potrwać do 2 godzin, ponieważ wiadomości są wysyłane w ramach kampanii e-mailowej. Czy na pewno chcesz kontynuować?',
        notifyActive: 'Powiadom aktywnych uczestników',
        notifyGroup: 'Powiadom grupę',
        message: 'Kurs {courseName} został zaktualizowany. Sprawdź szczegóły kursu.',
        messageTitle: 'Wyślij powiadomienie',
        messageLabel: 'Edytuj domyślną wiadomość, jeśli to konieczne.',
        notifyAGroup: 'Powiadom określoną grupę',
        activeOrEveryoneTitle: 'Wybierz, czy powiadomić tylko aktywnych uczestników, czy wszystkich, w tym tych, którzy porzucili lub ukończyli kurs.',
        activeOrEveryone: {
          active: 'Tylko aktywni uczestnicy (zalecane)',
          everyone: 'Wszyscy uczestnicy'
        },
        toast: {
          success: 'Uczestnicy zostali pomyślnie powiadomieni o aktualizacjach.',
          error: 'Wystąpił błąd podczas powiadamiania uczestników: {err}.'
        }
      },
      saveBtnTooltip: 'Są niezapisane zmiany. Zapisz je lub zresetuj.',
      publishBtn: 'Opublikuj',
      publishBtnTooltip: 'Opublikuj lub wycofaj publikację kursu, aby stał się dostępny lub niedostępny na liście kursów lub dla SEO (dla publicznych przestrzeni roboczych).',
      unpublishBtn: 'Wzcofaj Publikacje',
      exportJSON: 'Eksportuj JSON',
      importJSON: 'Importuj JSON',
      pasteJSON: 'Wklej JSON kursu',
      errorReadingJSON: 'Błąd odczytu JSON',
      copyCourseUrl: 'Kopiuj adres URL kursu',
      CourseUrlCopied: 'Url kursu został skopiowany',
      sections: {
        newTextSection: 'Rich Text',
        newQuestionSection: 'Pytanie',
        newDialogSection: 'Podobne do Dialogu',
        newPDFSection: 'PDF',
        newButtonSection: 'Przycisk',
        newImageTextSection: 'Obraz+Tekst',
        newVideoTextSection: 'Wideo+Tekst',
        newAudioTextSection: 'Audio+Tekst',
        newAccordionSection: 'Akordeon',
        newBranchSection: 'Rozgałęzienie',
        newImportantSection: 'Ważne',
        newAdditionalInfoSection: 'Dodatkowe Informacje',
        newExamplesSection: 'Przykłady',
        newGridSection: 'Siatka',
        newTextSectionDescription: 'Ta sekcja jest idealna do dodania dowolnego rodzaju tekstu do Twojej lekcji. ' +
          'Możesz wzbogacić go o formatowanie, listy punktowane, obrazy, filmy i dowolny rodzaj kodu HTML.',
        newQuestionSectionDescription: 'Ta sekcja służy do dodawania pojedynczego lub wielokrotnego wyboru pytań w Twojej lekcji.',
        newDialogSectionDescription: 'Ta sekcja służy do dodawania małego kawałka treści podobnej do rozmowy z awatarem i kilkoma dymkami. ' +
          'Te dymki mogą zawierać tekst, wideo, obraz lub nawet pytania!',
        newPDFSectionDescription: 'Ta sekcja umożliwia wyświetlanie i pobieranie pliku PDF wewnątrz lekcji.',
        newButtonSectionDescription: 'Ta sekcja umożliwia wyświetlanie przycisku wewnątrz lekcji, który prowadzi do wewnętrznych lub zewnętrznych linków.',
        newImageTextSectionDescription: 'Ta sekcja to łatwy sposób dodania obrazu z tekstem. Możesz zmienić rozmiar obrazu lub tekstu i zmienić ich położenie.',
        newVideoTextSectionDescription: 'Ta sekcja to łatwy sposób dodania filmu z YouTube lub Vimeo z tekstem. Możesz zmienić rozmiar filmu lub tekstu i zmienić ich położenie.',
        newAudioTextSectionDescription: 'Ta sekcja to łatwy sposób na dodanie dźwięku wraz z tekstem. Możesz eksperymentować z rozmiarem wyświetlanego dźwięku lub tekstu i zmieniać ich strony.',
        newAccordionSectionDescription: 'Ta sekcja to idealny sposób dodawania opcjonalnych informacji dla tych, którzy chcą dowiedzieć się o czymś bardziej szczegółowo. ' +
          'Informacje będą ukryte w rozkładanych opcjach.',
        newBranchSectionDescription: 'Daj uczącym się nieco kontroli, dostarczając kilka wyborów, po których kurs wykładu się zmieni. ' +
          'Obecnie dostępne tylko dla sekcji typu dialog.',
        newImportantSectionDescription: 'Podkreśl niektóre ważne informacje w twoim wykładzie',
        newAdditionalInfoSectionDescription: 'Podkreśl niektóre dodatkowe informacje w twoim wykładzie',
        newExamplesSectionDescription: 'Podkreśl niektóre przykłady w twoim wykładzie',
        newGridSectionDescription: 'Stwórz siatkę z taką ilością wierszy i kolumn, jakiej potrzebujesz i wypełnij ją obrazem i/lub tekstem',
        newTypeFormSectionDescription: 'Utwórz osadzoną sekcję TypeForm',
        newTableSection: 'Tabela',
        newTableSectionDescription: 'Utwórz tabelę z dokładną liczbą wierszy i kolumn, której potrzebujesz',
        typeForm: {
          pasteUrl: 'Wklej tutaj URL'
        },
        accordion: {
          accordionTitle: 'Tytuł sekcji',
          enterTitle: 'Wprowadź tytuł dla tej sekcji akordeonu',
          addAccordionSection: 'Dodaj sekcję akordeonu'
        },
        grid: {
          columnsLabel: 'Liczba kolumn',
          rowsLabel: 'Liczba wierszy',
          maxHeightLabel: 'Maksymalna wysokość',
          text: 'Text',
          image: 'Obraz',
          imageCaption: 'Podpis obrazu'
        },
        table: {
          sortable: 'Sortowalne',
          fixFirstColumn: 'Zablokuj pierwszą kolumnę'
        },
        branch: {
          branchOptionName: 'Nazwa opcji',
          branchingOptionsSectionsTitle: 'sekcje wyborów',
          addSection: 'dodaj sekcję',
          deleteOption: 'usuń opcję',
          saveOption: 'zapisz opcję',
          addBranchingOption: 'Dodaj opcję rozgałęzienia',
          option1Title: 'Opcja 1',
          option2Title: 'Opcja 2',
          optionTitle: 'Tytuł opcji'
        },
        dialog: {
          configureDialogSection: 'Konfiguruj sekcję dialogową',
          leftSide: 'Lewa strona rozmowy',
          rightSide: 'Prawa strona rozmowy',
          avatarLink: 'Link do awatara',
          avatarName: 'Nazwa awatara',
          userPictureAvatar: 'Awatar użytkownika'
        },
        examples: {
          branch: {
            option1: 'Opcja 1',
            option2: 'Opcja 2',
            option3: 'Opcja 3',
            text: 'Dziękuję za wybranie drugiej opcji'
          },
          dialog: {
            content1: 'Cześć',
            content2: 'Dziś będziemy rozmawiać o pogodzie',
            content3: 'Dziękuję za dołączenie'
          }
        },
        buttonSection: {
          buttonText: 'Tekst przycisku',
          buttonLink: 'Link przycisku',
          buttonClass: 'Klasa CSS przycisku',
          text: 'Ten tekst pojawi się przed przyciskiem. Usuń go całkowicie, jeśli nie jest potrzebny',
          textExample: 'Kliknij przycisk, aby przejść do <strong>ustawień użytkownika</strong>',
          buttonTextExample: 'Chodźmy!'
        },
        importantLabel: 'Ważne',
        additionalInfoLabel: 'Dodatkowe informacje',
        examplesLabel: 'Przykłady'
      },
      tags: {
        searchTags: 'Wyszukaj tagi',
        addTagsLabel: 'Dodaj tagi filtrujące do kursu',
        noResults: 'Nie znaleziono wyników pasujących do "<strong>{search}</strong>". Naciśnij <kbd>enter</kbd>, aby utworzyć nowy.'
      },
      lectureInClipboard: 'Lekcja {lecture} znajduje się w schowku. Możesz ją teraz wkleić po dowolnej lekcji.',
      moduleInClipboard: 'Moduł {module} znajduje się w schowku. Możesz go teraz wkleić po dowolnym module.',
      sectionInClipboard: 'Sekcja typu {section} znajduje się w schowku. Możesz ją teraz wkleić po dowolnej sekcji.',
      copyModule: 'Kopiuj moduł',
      pasteModule: 'Wklej moduł',
      copyLecture: 'Kopiuj lekcję',
      pasteLecture: 'Wklej lekcję',
      createCourseOfLecture: 'Utwórz kurs publiczny na jednej stronie',
      copyQuestion: 'Kopiuj pytanie',
      pasteQuestion: 'Wklej pytanie',
      copySection: 'Kopiuj sekcję',
      pasteSection: 'Wklej sekcję',
      quiz: {
        bankSwitch: 'Bank pytań',
        changeQuestion: 'Zmień treść pytania tutaj'
      },
      umbrella: {
        itemTitle: 'Podaj tytuł (pytanie) dla decyzji tutaj',
        addDecisionOption: 'Dodaj opcję decyzji',
        deleteOption: 'Usuń opcję decyzji',
        optionTitle: 'Tekst opcji',
        umbrellaCourse: 'Kurs {courseName}',
        umbrellaOptions: '{optionsNumber} opcji',
        backButton: 'Wstecz',
        nextButton: 'Dalej',
        decisionOption: 'Opcja decyzji',
        courseOption: 'Opcja kursu'
      }
    },
    gamification: {
      typeLabel: 'Typ',
      nameLabel: 'Nazwa',
      descriptionLabel: 'Opis',
      editGamification: 'Edytuj osiągnięcia',
      addGamificationItem: 'Dodaj pozycję osiągnięć',
      saveGamificationItems: 'Zapisz osiągnięcia',
      changeName: 'Nazwa osiągnięcia',
      changeDescription: 'Opis osiągnięcia',
      saveItems: 'Zapisz pozycje osiągnięć',
      hideEditing: 'Ukryj tryb edycji',
      editItem: 'edytuj pozycję',
      questionAnswerRateLabel: 'Stopień odpowiedzi na pytania',
      chooseCompletedLectures: 'Wybierz wykłady, które należy ukończyć',
      chooseAnsweredQuestions: 'Wybierz pytania, na które należy odpowiedzieć',
      types: {
        QUESTIONS_ANSWERED: 'Pytania z odpowiedziami',
        LECTURES_COMPLETED: 'Ukończone wykłady',
        QUESTIONS_ANSWERED_RATE: 'Stopień odpowiedzi na pytania'
      },
      achievementTypes: {
        FRAME: 'Ramka'
      },
      collectAchievements: 'Zacznij zbierać odznaki: postęp w kursach i odpowiadaj na pytania'
    },
    progress: {
      courseNotStarted: 'Kurs jeszcze się nie rozpoczął',
      courseInProgress: 'Kurs w trakcie',
      courseFinished: 'Kurs zakończony',
      coursesTitle: 'Kursy',
      learningPathsTitle: 'Ścieżki nauki',
      learningPathCourses: 'Kursy ścieżki edukacyjnej',
      coursesTitleCoursesName: 'Kursy - {courseName}',
      learningPathTitleCoursesName: 'Ścieżki nauki - {learningPathName}',
      coursesTitleCourseUserName: 'Kursy - {courseName} - {userName}',
      learningPathTitleUserName: 'Ścieżki nauki - {learningPathName} - {userName}',
      clickOnLearningPathStep: 'Kliknij na kartę kursu, aby sprawdzić postęp {name} w kursie',
      learningPathNoSteps: 'Ta ścieżka nauki nie zawiera kroków',
      cantFetchDataLearningPathStep: 'Nie można pobrać danych dla kroku {stepName}. Najprawdopodobniej krok został wykonany przez użytkownika {userName}',
      startedOn: 'Rozpoczęto {startedOn}',
      finishedOn: 'Zakończono {finishedOn}',
      progress: 'Postęp: {progress}%',
      startedOnTitle: 'Rozpoczęto',
      finishedOnTitle: 'Zakończono',
      completedInTitle: 'Ukończono w',
      progressTitle: 'Postęp Quizu',
      lectureProgressTitle: 'Postęp Wykładów',
      courseProgressTitle: 'Postępy w kursach',
      lastActivityTitle: 'Ostatnia aktywność',
      statusTitle: 'Status',
      certificateTitle: 'Certyfikat',
      certificate: 'certyfikat',
      nameTitle: 'Imię i nazwisko',
      emailTitle: 'Adres email',
      noCourses: 'Nie utworzyłeś jeszcze żadnych kursów',
      noCoursesWithSearch: 'Nie znaleziono kursów odpowiadających kryteriom wyszukiwania',
      createCourses: 'Utwórz kursy',
      createLearningPaths: 'Utwórz ścieżki nauki',
      progressOfUser: 'Postęp użytkownika {userName}',
      answeredQuestions: 'Odpowiedziałeś na <strong>{correct} / {total}</strong>',
      lecturesSeen: 'Obejrzane wykłady: <strong>{seen} / {total}</strong>',
      seen: 'Obejrzane',
      lectureMarkedAsSeen: 'Oznaczone jako obejrzane',
      lectureIsNotMarkedAsSeen: 'Jeszcze nie obejrzane',
      wrongAttempts: '{wrong} / {total} błędnych prób',
      searchCoursePlaceholder: 'nazwa, opis, tagi, cokolwiek!',
      searchCourseLabel: 'Szukaj kursów',
      usersPerPage: 'Uczniów na stronie',
      downloadCSV: 'Pobierz plik CSV',
      download: 'Pobierz Raport',
      downloadFull: 'Pobierz pełny raport',
      totalStudents: 'Liczba zapisanych uczniów: {total}',
      searchUserLabel: 'Wyszukaj użytkownika po adresie e-mail',
      searchUserPlaceholder: 'Dokładny adres e-mail do wyszukania',
      enrollCount: 'Brak zapisów | Jedno zapisanie | {n} zapisów',
      inactiveCount: 'Nieaktywne: {n}',
      abandonedCount: 'Porzucone: {n}',
      runningCount: 'Aktywne zapisy: {n}',
      finishedCount: 'Zakończono: {n}',
      noUsersInCourse: 'Nie ma użytkowników zapisanych na ten kurs.',
      noUsersInLearningPath: 'Nie ma użytkowników przypisanych do tej ścieżki nauki.',
      userNotEnrolled: 'Użytkownik {name} nie jest zapisany na ten kurs.',
      filterByUser: 'Filtruj według użytkownika',
      searchUser: 'Wyszukaj użytkownika',
      totalCourses: 'Wszystkie znalezione kursy: {total}',
      totalEnrollments: 'Znaleziono łącznie: {total}',
      totalPendingEnrollments: 'Łącznie znaleziono oczekujących zapisów: {total}',
      approvePendingTitle: 'Zatwierdź',
      approvePendingButton: 'Zatwierdź',
      approvedSuccessfullyMessage: 'Zapis {name} został pomyślnie zatwierdzony.',
      approvedErrorMessage: 'Zapis {name} nie został zatwierdzony z powodu błędu: {err}',
      reports: {
        reportIsGenerating: 'Raport jest generowany. Proszę czekać.',
        reportGeneratedSuccessfully: 'Raport wygenerowany pomyślnie.',
        reportGeneratedWithError: 'Generowanie raportu nie powiodło się: {err}'
      },
      certificates: {
        userCertificateTitle: 'Certyfikat',
        changeCertificateData: 'Zmień dane certyfikatu',
        dialog: {
          title: 'Zmień dane certyfikatu',
          nameLabel: 'Zmień imię uczącego się',
          changeButton: 'Zmień',
          success: 'Dane certyfikatu zostały pomyślnie zmienione dla {name}',
          error: 'Wystąpił błąd podczas zmiany danych certyfikatu dla {name}: {err}'
        }
      },
      detailed: {
        done: 'Zakończono',
        inProgress: 'W trakcie',
        notStarted: 'Nie rozpoczęto',
        hidden: 'Ukryte',
        locked: 'Zablokowane'
      },
      tabs: {
        detailedProgress: 'Szczegółowy postęp',
        enrolledUsers: 'Ogólny Postęp',
        questionAnswersProgress: 'Odpowiedzi na Quiz',
        pendingUsers: 'Oczekujący użytkownicy',
        pendingGrading: 'Oczekujące na ocenę',
        preCourseSurvey: 'Ankieta przed kursem',
        postCourseSurvey: 'Ankieta po kursie'
      },
      pendingGrading: {
        learnerTableTitle: 'Uczący się',
        actionsTableTitle: 'Akcje',
        questionTableTitle: 'Pytanie',
        answerTableTitle: 'Odpowiedź',
        fileTableTitle: 'Plik',
        noPendingGradingFound: 'Nie znaleziono odpowiedzi oczekujących na ocenę.',
        feedbackTitle: 'Opinia administratora kursu',
        feedbackFieldTitle: 'Udzielanie/Zmiana opinii',
        openToGiveFeedback: 'Otwórz, aby udzielić opinii',
        changeFeedback: 'Zmień opinię'
      },
      questionAnswers: {
        questionTableTitle: 'Pytanie',
        userTableTitle: 'Użytkownik',
        correctTableTitle: 'Poprawna',
        userAnswerTableTitle: 'Odpowiedź Użytkownika'
      }
    },
    usersManagement: {
      title: 'Zarządzanie użytkownikami',
      searchUserLabel: 'Szukaj użytkownika po adresie e-mail',
      searchUserPlaceholder: 'jan.kowalski@gmail.com',
      emailTitle: 'Adres e-mail',
      nameTitle: 'Imię i nazwisko',
      sourceTitle: 'Source',
      adminTitle: 'Workspace Admin',
      invitedTitle: 'Zaproszenie wysłane',
      acceptedTitle: 'Zaproszenie zaakceptowane',
      sendInvitationToEveryone: 'Zaproś wszystkich użytkowników',
      sendInvitationToGroup: 'Zaproś {groupName}',
      invited: 'zaproszony',
      accepted: 'zaakceptowane zaproszenie',
      sendInvitation: 'Wyślij zaproszenie',
      resendInvitation: 'Wyślij ponownie zaproszenie',
      revokeAccess: 'Odwołaj dostęp'
    },
    staffManagement: {
      title: 'Zarządzanie użytkownikami',
      inviteUsersDialogTitle: 'Zaproś użytkowników',
      addUsers: 'Dodaj użytkowników',
      uploadUsersCSV: 'Lub prześlij plik CSV <strong>(format: Imię, Nazwisko, E-mail, Grupa (opcjonalnie))</strong>',
      inviteUsersDialogDescriptions: 'Nowi członkowie otrzymają e-mail po zaproszeniu',
      inviteUsersByEmail: 'Zaproś użytkowników za pomocą e-mail',
      searchUserLabel: 'Wyszukaj członka zespołu po adresie e-mail',
      searchUserPlaceholder: 'john.doe@gmail.com',
      emailTitle: 'Adres e-mail',
      hasCourseCreationRights: 'Może tworzyć kursy',
      hasVoucherCreationRights: 'Może tworzyć kupony',
      addCourseCreationRights: 'Dodaj uprawnienia do tworzenia kursów',
      tabs: {
        userTabTitle: 'Użytkownicy',
        groupTabTitle: 'Grupy',
        syncTabTitle: 'Zarządzaj zaproszeniami'
      },
      totalStudents: 'Znaleziono łącznie {total} uczniów',
      noGroups: 'Nie przypisano jeszcze żadnych grup',
      searchGroup: 'Szukaj grup',
      searchUsers: 'Szukaj użytkowników',
      inactiveForDays: 'Nieaktywny przez dni',
      inactiveFor: 'Nieaktywny przez:',
      inactiveDaysCount: 'Liczba dni nieaktywności',
      inactivityPeriods: {
        WEEK: 'ponad tydzień',
        TWOWEEKS: 'ponad dwa tygodnie',
        MONTH: 'ponad miesiąc',
        HALFAYEAR: 'ponad pół roku',
        YEAR: 'ponad rok'
      },
      createUsersButtonTitle: 'Utwórz użytkowników',
      totalUsers: 'Znaleziono łącznie {total} użytkowników',
      createGroupButtonTitle: 'Utwórz grupę',
      detailsButtonTitle: 'Szczegóły',
      totalGroups: 'Znaleziono łącznie {total} grup',
      noRoles: 'Nie przypisano żadnych ról',
      noUsers: 'Nie ma członków w grupie | Jeden członek | {n} członków',
      learningJorneyTitle: 'Ścieżka edukacyjna',
      timeSpentLearningTitle: 'Czas spędzony na nauce',
      userCoursesTitle: 'Kursy użytkownika (łącznie {n})',
      lastUserCoursesTitle: 'Kursy użytkownika ({n})',
      lastUserLearningPathsTitle: 'Ścieżki edukacyjne użytkownika ({n})',
      userTitle: 'Użytkownik',
      usersTitle: 'Użytkowniky',
      coursesTitle: 'Kursy',
      skillsTitle: 'Umiejętności',
      groupsTitle: 'Grupy',
      assignSkillButton: 'Przypisz umiejętność',
      removeSkillButton: 'Usuń umiejętność',
      assignSkillsToUserTitle: 'Przypisz umiejętności do użytkownika {name}',
      assignGroupButton: 'Przypisz grupę',
      assignGroupsToUserTitle: 'Przypisz grupy do użytkownika {name}',
      assignUserToGroupButton: 'Dodaj użytkownika do grupy',
      removeUserFromGroupButton: 'Usuń użytkownika z grupy',
      permissionsTitle: 'Uprawnienia',
      assignPermissionButton: 'Zmień uprawnienia',
      blockUserButton: 'Zablokuj użytkownika',
      unBlockUserButton: 'Odblokuj użytkownika',
      deleteUserButton: 'Usuń użytkownika',
      userBlockedSuccessfully: 'Użytkownik {name} został pomyślnie zablokowany',
      userBlockedWithError: 'Wystąpił błąd podczas blokowania użytkownika {name}: {errorText}',
      userUnblockedSuccessfully: 'Użytkownik {name} został pomyślnie odblokowany',
      userUnblockedWithError: 'Wystąpił błąd podczas odblokowywania użytkownika {name}: {errorText}',
      userDeletedSuccessfully: 'Użytkownik {name} został pomyślnie usunięty',
      userDeletedWithError: 'Wystąpił błąd podczas usuwania użytkownika {name}: {errorText}',
      noSkillsYet: 'Nie zdobyto jeszcze żadnych umiejętności',
      userCard: {
        name: 'Imię i nazwisko',
        memberSince: 'Członek od',
        email: 'E-mail',
        role: 'Rola',
        group: 'Grupy',
        timeSpentLearning: 'Łączny czas spędzony na nauce na {workspaceName}:',
        nameAndEmail: 'Imię i Email',
        status: 'Status'
      },
      roles: {
        ROLE_STUDENT: 'Uczeń',
        ROLE_ADMIN: 'Workspace Administrator',
        ROLE_COURSE_ADMIN: 'Administrator kursów',
        ROLE_VOUCHER_ADMIN: 'Administrator kuponów',
        ROLE_FILE_UPLOAD: 'Przesyłanie plików',
        ROLE_INTEGRATIONS_MANAGER: 'Administrator integracji'
      },
      statuses: {
        filterLabel: 'Status użytkownika',
        inactiveUserCourses: 'Nieaktywny',
        blocked: 'Zablokowany',
        running: 'W trakcie',
        finished: 'Zakończony',
        archived: 'Zarchiwizowany',
        abandoned: 'Porzucone',
        inactiveUserExplanation: 'Ten użytkownik nie dokonuje postępów w jednym z kursów.'
      },
      notifyInactivityButton: 'Powiadom o nieaktywności',
      resultsFound: 'Nie znaleziono wyników | Znaleziono {n} wynik | Znaleziono {n} wyników',
      notifications: {
        modal: {
          sendingAlert: 'Zamierzasz wysłać następujące powiadomienie do tego użytkownika.',
          sendingButton: 'Wyślij teraz',
          inactiveUserCourses: {
            title: 'Powiadom o nieaktywności',
            description: '',
            defaultMessage: 'Wygląda na to, że od dłuższego czasu nie dokonywałeś postępów w niektórych swoich kursach. Wróć do swoich aktywnych kursów lub poproś swojego administratora o przypisanie Ci nowego.'
          },
          notificationSentSuccessfully: 'Powiadomienie zostało pomyślnie wysłane!',
          notificationSentWithError: 'Wystąpił błąd podczas wysyłania powiadomienia do użytkownika: {errorText}'
        }
      },
      inviteUserSuccessful: 'Użytkownik {name} został zaproszony pomyślnie',
      inviteGroupUsersSuccessful: 'Wszyscy użytkownicy grupy {name} zostali pomyślnie zaproszeni',
      inviteUserError: 'Wystąpił błąd podczas zapraszania użytkownika {name}: {err}',
      inviteGroupUsersError: 'Wystąpił błąd podczas zapraszania użytkowników grupy {name}: {err}',
      addUsersSuccessful: 'Użytkownicy zostali dodani pomyślnie',
      addUsersError: 'Wystąpił błąd podczas dodawania użytkowników: {err}',
      groups: {
        title: 'Tytuł grupy',
        participants: 'Uczestnicy',
        source: 'Źródło',
        created: 'Utworzono'
      }
    },
    campaignManagement: {
      titleCampaigns: 'Kampanie',
      searchCampaign: 'Szukaj kampanii',
      totalCampaigns: 'Liczba znalezionych kampanii: {total}',
      titleCampaign: 'Kampanie - {name} - {courseName}',
      createCampaign: 'Utwórz nową kampanię',
      createDiscountCampaign: 'Utwórz nową zniżkę',
      discountLabel: 'Zniżka (%)',
      noCampaigns: 'Brak utworzonych kampanii',
      campaignName: 'Nazwa kampanii',
      startDate: 'Data rozpoczęcia',
      expireDate: 'Data wygaśnięcia',
      maxUsages: 'Maksymalna liczba wykorzystań',
      newCampaign: 'Nowa kampania',
      voucherCode: 'Kod rejestracji',
      voucherUsage: 'Liczba wykorzystań',
      noVouchers: 'Brak utworzonych kodów rejestracji dla kampanii',
      addVouchers: 'Wygeneruj kody',
      currentUsage: 'Wykorzystania',
      campaignNameLabel: 'Zmień nazwę kampanii',
      uniqueRedeem: 'Unikalne wykorzystanie',
      multipleRedeem: 'Wielokrotne wykorzystanie',
      campaignType: 'Typ kampanii',
      withMaxNumberUsages: 'z maksymalną liczbą wykorzystań {maxUsages} razy',
      editCampaign: 'Edytuj kampanię',
      deactivate: 'Dezaktywuj kampanię dla kursu',
      activate: 'Aktywuj kampanię dla kursu',
      addMoreVouchers: 'Wygeneruj więcej kodów',
      uniqueRedeemExplanation: 'Kody przypisane do kampanii są osobiste i można je wykorzystać tylko raz',
      multipleRedeemExplanation: 'Kody przypisane do kampanii można wykorzystać wielokrotnie',
      newCampaignNameLabel: 'Nadaj kampanii nazwę',
      campaignCourse: 'Wyszukaj kurs',
      hideExpiredCampaigns: 'Ukryj wygasłe kampanie',
      showExpiredCampaigns: 'Pokaż wygasłe kampanie',
      noPaymentInformationAlert: 'Brak informacji o płatności. Wybierz kurs lub skonfiguruj informacje o płatności w wybranym kursie.',
      paymentWithDiscountInfo: 'Oryginalna cena kursu to <strong>{price} {currency}</strong>. Zniżka wynosi <strong>{discounted} {currency}</strong>',
      campaignTypes: {
        labels: {
          COURSE_ENROLLMENT: 'Kampania z ograniczeniem dostępu do kursu',
          COURSE_PERCENT_DISCOUNT: 'Kampania zniżkowa na płatność za kurs'
        }
      },
      voucherActivated: {
        voucherActivatedMessage: 'Aktywacja kodu rejestracji dla tego kursu jest włączona',
        voucherNotActivatedMessage: 'Nie zapomnij włączyć aktywacji kodu rejestracji dla tego kursu',
        editCourseLinkText: 'Edytuj kurs'
      },
      editVoucherCodeLabel: 'Edytuj kod vouchera',
      editButton: 'Edytuj',
      editVoucherCodeSuccess: 'Pomyślnie zmieniono kod vouchera na {code}.',
      editVoucherCodeError: 'Wystąpił błąd podczas zmiany kodu vouchera na {code}: {err}',
      requiredInvalidMessage: 'To jest pole wymagane',
      periodInvalidMessage: 'Musi być dodatnią liczbą całkowitą',
      discountInvalidMessage: 'Zniżka musi wynosić od 1 do 100.'
    },
    integrationsManagement: {
      newPopupTitle: 'Nowe połączenie {name}',
      editPopupTitle: 'Edytuj połączenie {name}',
      title: 'Integracje',
      clientIdLabel: 'ID klienta',
      clientSecretLabel: 'Tajny klucz klienta',
      documentCategoryLabel: 'ID kategorii dokumentu',
      clientEndpointLabel: 'Koniec klienta',
      subdomainLabel: 'Subdomena (twojej przestrzeni roboczej BambooHR)',
      tokenEndpointLabel: 'Koniec tokena',
      responseTypeLabel: 'Typ odpowiedzi',
      scopeLabel: 'Zasięg',
      userEndpointLabel: 'Koniec API użytkownika',
      emailPropertyLabel: 'Właściwość e-mail',
      authorizationEndpointLabel: 'Koniec autoryzacji',
      syncLabel: 'Zarządzaj zaproszeniami',
      syncUsersLabel: 'Sync',
      apiKeyLabel: 'Klucz API',
      appNameLabel: 'Nazwa aplikacji',
      appKeyLabel: 'Klucz aplikacji',
      disqusIdLabel: 'ID Disqus',
      stripePublishableKeyLabel: 'Klucz publiczny Stripe',
      stripeSecretKeyLabel: 'Klucz tajny Stripe',
      stripeDefaultTaxId: 'Domyślny identyfikator stawki podatkowej Stripe',
      stripeTaxationCountry: 'Kraj opodatkowania Stripe',
      useInvoicing: 'Użyj fakturowania',
      paymentMethodConfigurationId: 'Identyfikator konfiguracji metody płatności',
      openAiSecretKeyLabel: 'Tajny klucz Open AI',
      peopleForceApiKeyLabel: 'Klucz API PeopleForce',
      ripplingApiKeyLabel: 'Rippling API Key',
      liqpayPrivateKeyLabel: 'Prywatny klucz LiqPay',
      liqpayPublicKeyLabel: 'Publiczny klucz LiqPay',
      liqpaySandboxLabel: 'Czy to jest sandbox?',
      xTokenKeyLabel: 'xToken',
      categories: {
        HR: 'Zasoby Ludzkie',
        PAYMENT: 'Usługi Płatnicze',
        CONTENT: 'Tworzenie Treści',
        SOCIAL: 'Społecznościowy',
        DEFAULT: 'Default',
        DEV: 'Rozwój – Autoryzacja, Webhooki, E-maile',
        CRM: 'CRM'
      },
      personio: {
        description: 'Synchronizuj użytkowników i grupy. Automatycznie przesyłaj certyfikaty do profili pracowników.',
        explanation: '<ul>' +
          '<li>Przejdź do ustawień > Ludzie > Dokumenty > Kategorie i utwórz nową kategorię lub po prostu użyj jednej, która nadaje się do przesyłania certyfikatów kursów. Wyodrębnij identyfikator (umieszczając wskaźnik myszy nad kategorią, na przykład).</li>' +
          '<li>Przejdź do Ustawień > Poświadczenia API. Utwórz nowy klucz API (lub użyj ponownie jednego z wyboru). Nadaj mu nazwę i wybierz integrację "Workademy"</li>' +
          '<li>Udziel dostępu do odczytu "pracowników" i "dokumentów" oraz zapisu "dokumentów". Wybierz następujące atrybuty: e-mail, imię, nazwisko, identyfikator pracownika i stan.</li>' +
          '<li>Skonfiguruj integrację z zebranymi informacjami, zapisz i zsynchronizuj.</li></ul>',
        syncSuccessful: 'Synchronizacja użytkowników z Personio powiodła się. Przejdź do konsoli zarządzania użytkownikami, aby przejrzeć zaproszenia.',
        syncError: 'Synchronizacja użytkowników z Personio nie powiodła się. {err}',
        connectSuccessful: 'Pomyślnie skonfigurowano integrację z Personio API',
        connectError: 'Błąd podczas łączenia z Personio. {err}',
        deleteSuccessful: 'Pomyślnie usunięto integrację z Personio API',
        deleteError: 'Błąd podczas usuwania integracji z Personio. {err}',
        mappingInstructions: 'Mapuj wartości pól niestandardowych z Personio do grup w Workademy.',
        fieldValuesLabel: 'Wartości pola (naciśnij spację lub tab, aby dodać)',
        fieldNamePlaceholder: 'Wprowadź nazwę pola',
        valueInputPlaceholder: 'Wpisz wartość i naciśnij spację/tab',
        addFieldButton: 'Dodaj niestandardowe pole',
        certificateNameTemplateLabel: 'Szablon nazwy certyfikatu',
        certificateNameTemplateHint: 'Dostępne zmienne: &#36;{userName}, &#36;{date}, &#36;{courseName}'
      },
      bamboo_hr: {
        description: 'Utrzymuj dane zespołu zsynchronizowane dzięki synchronizacji użytkowników i grup.',
        explanation: 'Zaloguj się do swojego konta administratora BambooHR. Subdomena jest częścią adresu URL, który reprezentuje Twoją firmę, np. jeśli to firma.bamboohr.com, to subdomena to "firma". Kliknij na swoje zdjęcie profilowe, a następnie wybierz Klucze API. Dodaj nowy klucz i skopiuj jego wartość tutaj',
        syncSuccessful: 'Synchronizacja użytkowników z BambooHR zakończona powodzeniem. Przejdź do konsoli zarządzania użytkownikami, aby przejrzeć zaproszenia.',
        syncError: 'Synchronizacja użytkowników z BambooHR nie powiodła się. {err}',
        connectSuccessful: 'Pomyślnie skonfigurowano integrację z Twoim API BambooHR',
        connectError: 'Błąd podczas łączenia z BambooHR. {err}',
        deleteSuccessful: 'Pomyślnie usunięto integrację z BambooHR API',
        deleteError: 'Błąd podczas usuwania integracji z BambooHR. {err}'
      },
      sage: {
        description: 'Synchronizuj użytkowników i linie raportowania w Workademy.',
        explanation: 'Zaloguj się do swojego konta administratora Sage. Subdomena jest częścią adresu URL, który reprezentuje Twoją firmę, np. jeśli to firma.sage.com, to subdomena to "firma". Kliknij na swoje zdjęcie profilowe, a następnie wybierz Klucze API. Dodaj nowy klucz i skopiuj jego wartość tutaj',
        syncSuccessful: 'Synchronizacja użytkowników z Sage zakończona powodzeniem. Przejdź do konsoli zarządzania użytkownikami, aby przejrzeć zaproszenia.',
        syncError: 'Synchronizacja użytkowników z Sage nie powiodła się. {err}',
        connectSuccessful: 'Pomyślnie skonfigurowano integrację z Twoim API Sage',
        connectError: 'Błąd podczas łączenia z Sage. {err}',
        deleteSuccessful: 'Pomyślnie usunięto integrację z Sage API',
        deleteError: 'Błąd podczas usuwania integracji z Sage. {err}'
      },
      custom_oauth2: {
        description: '',
        explanation: '',
        syncSuccessful: 'Synchronizacja użytkowników z OAuth2 zakończona powodzeniem. Przejdź do konsoli zarządzania użytkownikami, aby przejrzeć zaproszenia.',
        syncError: 'Synchronizacja użytkowników z OAuth2 nie powiodła się. {err}',
        connectSuccessful: 'Pomyślnie skonfigurowano integrację z Twoim API OAuth2',
        connectError: 'Błąd podczas łączenia z OAuth2. {err}',
        deleteSuccessful: 'Pomyślnie usunięto integrację z serwerem OAuth2',
        deleteError: 'Błąd podczas usuwania integracji z serwerem OAuth2. {err}'
      },
      oauth2: {
        description: '',
        explanation: 'Skonfiguruj tutaj swoje dostępy OAuth2. Wszystkie atrybuty są obowiązkowe. ' +
          '<p><strong>UWAGA</strong>: w swoim serwerze OAuth2 skonfiguruj <em>redirect_uri</em> jako ' +
          '<em>https://{hostname}/signin/</em>.</p>',
        syncSuccessful: 'Synchronizacja użytkowników z OAuth2 zakończona powodzeniem. Przejdź do konsoli zarządzania użytkownikami, aby przejrzeć zaproszenia.',
        syncError: 'Synchronizacja użytkowników z OAuth2 nie powiodła się. {err}',
        connectSuccessful: 'Pomyślnie skonfigurowano integrację z Twoim API OAuth2',
        connectError: 'Błąd podczas łączenia z OAuth2. {err}',
        deleteSuccessful: 'Pomyślnie usunięto integrację z OAuth2 API',
        deleteError: 'Błąd podczas usuwania integracji z serwerem OAuth2. {err}',
        authenticationScheme: 'Schemat uwierzytelniania',
        postAuthCheckTitle: 'Weryfikacja po uwierzytelnieniu',
        enablePostCheck: 'Włącz weryfikację po uwierzytelnieniu',
        availableVarsTitle: 'Dostępne zmienne',
        addVarsLabel: 'Dodaj zmienne z odpowiedzi OAuth2',
        varsPlaceholder: 'np. statusSubskrypcji, typKonta',
        varsHint: 'Te zmienne będą dostępne w konstruktorze warunków',
        conditionTitle: 'Warunek',
        varLabel: 'Zmienna',
        operatorLabel: 'Operator',
        valueLabel: 'Wartość',
        conditionPreview: 'Podgląd warunku:',
        actionTitle: 'Akcja',
        actionType: 'Typ akcji',
        redirectUrl: 'URL przekierowania'
      },
      push_notification: {
        description: '',
        explanation: 'Skonfiguruj tutaj swój endpoint powiadomień push. ' +
          'Upewnij się, że Twój endpoint akceptuje autoryzację "Basic", typ zawartości "application/json" i metodę "POST".',
        connectSuccessful: 'Pomyślnie skonfigurowano integrację z Twoim endpointem powiadomień push',
        syncError: 'Synchronizacja z endpointem powiadomień push nie powiodła się. {err}',
        connectError: 'Błąd podczas łączenia się z endpointem powiadomień push. {err}',
        deleteSuccessful: 'Pomyślnie usunięto integrację z endpointem powiadomień push',
        deleteError: 'Błąd podczas usuwania integracji z endpointem powiadomień push. {err}'
      },
      loom: {
        description: 'Osadzaj i zarządzaj filmami Loom bezpośrednio w swoich kursach.',
        explanation: 'Otwórz swoje konto Loom i skopiuj nazwę i klucz aplikacji',
        syncSuccessful: 'Synchronizacja z Loom zakończona pomyślnie',
        syncError: 'Synchronizacja z Loom nie powiodła się. {err}',
        connectSuccessful: 'Integracja z Loom SDK zakończona pomyślnie!',
        connectError: 'Błąd podczas łączenia się z Loom SDK. {err}',
        deleteSuccessful: 'Pomyślnie usunięto integrację z Loom SDK',
        deleteError: 'Błąd podczas usuwania integracji z Loom SDK. {err}'
      },
      disqus: {
        description: 'Dodaj wątki dyskusyjne i interakcję społeczną do swoich kursów.',
        explanation: 'Otwórz swoje konto Disqus i skopiuj nazwę aplikacji',
        syncSuccessful: 'Synchronizacja z Disqus zakończona pomyślnie',
        syncError: 'Synchronizacja z Disqus nie powiodła się. {err}',
        connectSuccessful: 'Integracja z Disqus zakończona pomyślnie!',
        connectError: 'Błąd podczas łączenia się z Disqus. {err}',
        deleteSuccessful: 'Pomyślnie usunięto integrację z Disqus',
        deleteError: 'Błąd podczas usuwania integracji z Disqus. {err}'
      },
      stripe: {
        description: 'Włącz płatności i automatyczne fakturowanie.',
        explanation: '<div>\n' +
          '  <h2>Wyjaśnienie:</h2>\n' +
          '  <ol>\n' +
          '    <li>\n' +
          '      <strong>Klucz publiczny (Publishable Key):</strong><br />\n' +
          '      Otwórz <a href="https://dashboard.stripe.com" target="_blank" class="tw-underline">Stripe Dashboard</a> i skopiuj <strong>klucz publiczny</strong> z ustawień API.\n' +
          '    </li>\n' +
          '    <li>\n' +
          '      <strong>Domyślne ID stawki podatkowej:</strong><br />\n' +
          '      Przejdź do sekcji <a href="https://dashboard.stripe.com/tax-rates" target="_blank" class="tw-underline">Stawki Podatkowe</a> w Stripe Dashboard.<br />\n' +
          '      - Skopiuj istniejące <strong>inclusive Tax Rate ID</strong> lub<br />\n' +
          '      - Utwórz nową stawkę podatkową inclusive, jeśli to konieczne.\n' +
          '    </li>\n' +
          '    <li>\n' +
          '      <strong>Kraj podatkowy:</strong><br />\n' +
          '      Wybierz kraj, w którym Twoja firma jest zarejestrowana do celów podatkowych.<br />\n' +
          '      - Tylko użytkownicy z tego kraju będą podlegać opodatkowaniu.\n' +
          '    </li>\n' +
          '  </ol>\n' +
          '</div>\n',
        syncSuccessful: 'Synchronizacja z Stripe zakończona pomyślnie',
        syncError: 'Synchronizacja z Stripe nie powiodła się. {err}',
        connectSuccessful: 'Integracja z Stripe zakończona pomyślnie',
        connectError: 'Błąd podczas łączenia się z Stripe. {err}',
        deleteSuccessful: 'Pomyślnie usunięto integrację z Stripe',
        deleteError: 'Błąd podczas usuwania integracji z Stripe. {err}'
      },
      liqpay: {
        description: 'Łatwo akceptuj płatności z Ukrainy.',
        explanation: 'Otwórz swoją tablicę LiqPay i skopiuj klucze prywatne i publiczne. Wskaz, czy jest to środowisko testowe.',
        syncSuccessful: 'Synchronizacja z LiqPay powiodła się',
        syncError: 'Synchronizacja z LiqPay nie powiodła się. {err}',
        connectSuccessful: 'Integracja z LiqPay powiodła się',
        connectError: 'Błąd podczas łączenia z LiqPay. {err}',
        deleteSuccessful: 'Pomyślnie usunięto integrację z LiqPay',
        deleteError: 'Błąd podczas usuwania integracji z LiqPay. {err}'
      },
      revolut: {
        description: 'Włącz płatności międzynarodowe dzięki integracji z Revolut.',
        explanation: 'Otwórz swoją tablicę rozdzielczą Revolut i skopiuj sekretne klucze klienta.',
        syncSuccessful: 'Synchronizacja z Revolut zakończona powodzeniem',
        syncError: 'Synchronizacja z Revolut nieudana. {err}',
        connectSuccessful: 'Integracja z Revolut zakończona powodzeniem',
        connectError: 'Błąd podczas łączenia się z Revolut. {err}',
        deleteSuccessful: 'Integracja z Revolut została pomyślnie usunięta',
        deleteError: 'Błąd podczas usuwania integracji z Revolut. {err}'
      },
      open_ai: {
        description: 'Generuj treści kursów za pomocą swojego konta OpenAI.',
        explanation: 'Otwórz swój panel Open AI i skopiuj swój klucz',
        syncSuccessful: 'Synchronizacja z Open AI powiodła się',
        syncError: 'Synchronizacja z Open AI nie powiodła się. {err}',
        connectSuccessful: 'Integracja z Open AI powiodła się',
        connectError: 'Błąd podczas łączenia z Open AI. {err}',
        deleteSuccessful: 'Pomyślnie usunięto integrację z Open AI',
        deleteError: 'Błąd podczas usuwania integracji z Open AI. {err}'
      },
      people_force: {
        description: 'Bezpośrednio synchronizuj dane pracowników i strukturę organizacyjną.',
        explanation: 'Otwórz swój panel PeopleForce i skopiuj swój klucz API',
        syncSuccessful: 'Synchronizacja z PeopleForce powiodła się',
        syncError: 'Synchronizacja z PeopleForce nie powiodła się. {err}',
        connectSuccessful: 'Integracja z PeopleForce powiodła się',
        connectError: 'Błąd podczas łączenia z PeopleForce. {err}',
        deleteSuccessful: 'Pomyślnie usunięto integrację z PeopleForce',
        deleteError: 'Błąd podczas usuwania integracji z PeopleForce. {err}'
      },
      rippling: {
        description: 'Automatyzuj zarządzanie użytkownikami i grupami z łatwością.',
        explanation: 'Jeśli wybierzesz "API Key" jako tryb uwierzytelniania, musisz otworzyć panel Rippling i skopiować swój klucz API. Nie musisz nic robić, jeśli wybierzesz tryb uwierzytelniania za pomocą "User Credentials".',
        syncSuccessful: 'Pomyślnie zsynchronizowano z Rippling',
        syncError: 'Nie udało się zsynchronizować z Rippling. {err}',
        connectSuccessful: 'Pomyślnie połączono z Rippling',
        connectError: 'Błąd podczas łączenia z Rippling. {err}',
        deleteSuccessful: 'Pomyślnie usunięto integrację z Rippling',
        deleteError: 'Błąd podczas usuwania integracji z Rippling. {err}'
      },
      deel: {
        description: 'Bezproblemowo synchronizuj rozproszone zespoły.',
        explanation: 'Otwórz pulpit Deel i skopiuj klucz dostępu API.',
        syncSuccessful: 'Synchronizacja z Deel zakończona sukcesem',
        syncError: 'Synchronizacja z Deel nieudana. {err}',
        connectSuccessful: 'Integracja z Deel zakończona sukcesem',
        connectError: 'Błąd podczas łączenia się z Deel. {err}',
        deleteSuccessful: 'Pomyślnie usunięto integrację z Deel',
        deleteError: 'Błąd podczas usuwania integracji z Deel. {err}'
      },
      monobank: {
        description: 'Połącz Monobank dla lokalnego przepływu płatności.',
        explanation: 'Otwórz swój panel Monobank i skopiuj swój xToken.',
        syncSuccessful: 'Synchronizacja z Monobank powiodła się',
        syncError: 'Synchronizacja z Monobank nie powiodła się. {err}',
        connectSuccessful: 'Integracja z Monobank powiodła się',
        connectError: 'Błąd podczas łączenia z Monobank. {err}',
        deleteSuccessful: 'Pomyślnie usunięto integrację z Monobank',
        deleteError: 'Błąd podczas usuwania integracji z Monobank. {err}'
      },
      hi_bob: {
        description: 'Utrzymuj synchronizację osób i uprawnień bez wysiłku.',
        explanation: 'Melden Sie sich in Ihrem HiBob-Dashboard an und kopieren Sie Ihre clientId und clientSecret Schlüssel.',
        syncSuccessful: 'Synchronisation mit HiBob erfolgreich',
        syncError: 'Synchronisation mit HiBob nicht erfolgreich. {err}',
        connectSuccessful: 'Integration mit HiBob erfolgreich',
        connectError: 'Fehler beim Verbinden mit HiBob. {err}',
        deleteSuccessful: 'Integration mit HiBob erfolgreich gelöscht',
        deleteError: 'Fehler beim Löschen der Integration mit HiBob. {err}'
      },
      brevo: {
        description: 'Angażuj uczniów za pomocą zautomatyzowanych kampanii CRM.',
        eventTemplateMappingLabel: 'Mapowanie Szablonów',
        eventTemplateMappingDescription: 'Mapuj swoje szablony e-mail Workademy do szablonów Brevo, wprowadzając odpowiadające im identyfikatory szablonów Brevo.',
        explanation: 'Zaloguj się do swojego <strong><u><a href="https://app.brevo.com/settings/keys/api" target="_blank">panelu Brevo</a></u></strong> i skopiuj klucz API.',
        syncSuccessful: 'Synchronizacja z Brevo zakończona sukcesem.',
        syncError: 'Synchronizacja z Brevo nie powiodła się. {err}',
        connectSuccessful: 'Pomyślnie skonfigurowano integrację z kontem Brevo',
        connectError: 'Błąd połączenia z Brevo. {err}',
        deleteSuccessful: 'Pomyślnie usunięto integrację z Brevo',
        deleteError: 'Błąd usuwania integracji z Brevo. {err}',
        templateMappingExplanation: 'Identyfikatory szablonów znajdziesz w swoim <strong><u><a href="https://app.brevo.com/templates/listing" target="_blank">koncie Brevo</a></u></strong> w sekcji Szablony E-mail.',
        defaultEmailsWhenNoMapping: 'Używaj domyślnych e-maili, gdy brak mapowania (zalecane).',
        templateMappingHeaders: {
          lmsTemplate: 'Szablonu Workademy',
          audience: 'Odbiorca',
          description: 'Opis',
          brevoTemplateID: 'ID Szablonu Brevo'
        },
        templateMappingAudience: {
          learner: 'uczestnik',
          admin: 'administrator',
          any: 'dowolny'
        },
        templateMapping: {
          check_user_courses_notification_event: {
            title: 'Sprawdź postęp kursu',
            description: 'Wysyłane do uczestnika w przypadku powiadamiania o braku aktywności'
          },
          new_open_ended_question_answered_event: {
            title: 'Nowa odpowiedź otwarta',
            description: 'Powiadamia administratora, gdy uczestnik przesyła odpowiedź otwartą'
          },
          new_open_ended_question_graded_event: {
            title: 'Oceniono pytanie otwarte',
            description: 'Powiadamia uczestnika, gdy jego odpowiedź na pytanie otwarte jest oceniona'
          },
          pending_user_course_approval_event: {
            title: 'Zapis oczekujący',
            description: 'Powiadamia administratora o oczekującym zapisie na kurs'
          },
          registration_event: {
            title: 'Nowy użytkownik zarejestrowany',
            description: 'Wysyłane po zarejestrowaniu nowego użytkownika na platformie'
          },
          reset_password_event: {
            title: 'Żądanie zresetowania hasła',
            description: 'Wysyłane, gdy użytkownik prosi o zresetowanie hasła'
          },
          user_course_assigned_event: {
            title: 'Nowe przypisanie kursu',
            description: 'Powiadamia uczestnika o przypisaniu nowego kursu'
          },
          user_learning_path_assigned_event: {
            title: 'Nowe przypisanie ścieżki edukacyjnej',
            description: 'Powiadamia uczestnika o przypisaniu nowej ścieżki edukacyjnej'
          },
          workspace_invitation_event: {
            title: 'Zaproszenie do workspace',
            description: 'Wysyłane, gdy użytkownik zostaje zaproszony do dołączenia do workspace'
          }
        }
      },
      intercom: {
        description: 'Czat, onboarding i segmentacja na podstawie interakcji użytkowników.',
        explanation: '<div tw-leading-[1.5]><div class="tw-mb-3">Aby zintegrować z Intercom, wykonaj następujące kroki:</div>' +
          '<div class="tw-mb-1.5"><strong>1.</strong> Utwórz aplikację w Intercom <br>Przejdź do Ustawienia > Integracje > Intercom Developer Hub i utwórz aplikację, aby włączyć dostęp API. Po utworzeniu aplikacji otrzymasz Token Dostępu.</div>' +
          '<div class="tw-mb-1.5"><strong>2.</strong> Zainstaluj Intercom Messenger na swojej stronie <br>Przejdź do Ustawienia > Kanały > Messenger > Instalacja i skopiuj appId z przykładowego kodu.</div>' +
          '<div class="tw-mb-1.5"><strong>3.</strong> Uzyskaj Web Identity Secret <br>Można to znaleźć w sekcji Instalacja pod weryfikacją tożsamości.</div></div>',
        syncSuccessful: 'Synchronizacja z Intercom zakończona sukcesem.',
        syncError: 'Synchronizacja z Intercom nie powiodła się. {err}',
        connectSuccessful: 'Integracja z Intercom zakończona sukcesem!',
        connectError: 'Błąd podczas łączenia z Intercom. {err}',
        deleteSuccessful: 'Pomyślnie usunięto integrację z Intercom.',
        deleteError: 'Błąd podczas usuwania integracji z Intercom. {err}'
      },
      salesforce_mc: {
        description: 'Salesforce Marketing Cloud',
        explanation: 'Wysyłaj zautomatyzowane, spersonalizowane wiadomości transakcyjne z Workademy, korzystając ze swojego konta Salesforce Marketing Cloud.',
        syncSuccessful: 'Synchronizacja z Salesforce Marketing Cloud powiodła się.',
        syncError: 'Synchronizacja z Salesforce Marketing Cloud nie powiodła się. {err}',
        connectSuccessful: 'Integracja z Salesforce Marketing Cloud powiodła się!',
        connectError: 'Błąd podczas łączenia z Salesforce Marketing Cloud. {err}',
        deleteSuccessful: 'Pomyślnie usunięto integrację z Salesforce Marketing Cloud.',
        deleteError: 'Błąd podczas usuwania integracji z Salesforce Marketing Cloud. {err}',
        subdomainLabel: 'Domena podrzędna',
        templateMapping: {
          welcome_to_course_event: {
            title: 'Witamy na wydarzeniu kursowym',
            description: 'Witamy na wydarzeniu kursowym'
          }
        },
        templateMappingHeaders: {
          salesforceTemplateID: 'ID szablonu'
        }
      }
    },
    learningArtifactsManagement: {
      learningArtifactsManagement: 'Zarządzanie artefaktami',
      skillsTitle: 'Umiejętności',
      achievementsTitle: 'Osiągnięcia',
      avatarsTitle: 'Awatary',
      skillLevel: 'Brak poziomu | Poziom 1 | Poziom {n}',
      skillLevelNameLabel: 'Nazwa umiejętności',
      skillLevelDescriptionLabel: 'Opis umiejętności',
      editCard: {
        numberOfLevelsSubtitle: 'Brak poziomów | Brak poziomów | {n} poziomów'
      },
      noSkills: 'Nie zdobyto jeszcze żadnych umiejętności',
      noAchievements: 'Brak osiągnięć'
    },
    workspaceManagement: {
      title: 'Zarządzanie przestrzenią roboczą',
      tabs: {
        general: {
          title: 'Ogólne',
          workspaceName: {
            title: 'Nazwa przestrzeni roboczej',
            subtitle: 'Ustaw lub edytuj nazwę przestrzeni roboczej.',
            label: 'Wpisz nazwę przestrzeni roboczej',
            rules: {
              required: 'Nazwa jest wymagana',
              lessThan: 'Nazwa musi mieć mniej niż 64 znaki',
              invalidCharacters: 'Znaki specjalne są niedozwolone'
            }
          },
          language: {
            title: 'Domyślny język',
            subtitle: 'Skonfiguruj domyślny język dla przestrzeni roboczej.',
            label: 'Wybierz domyślny język'
          },
          privacySettings: {
            title: 'Ustawienia prywatności przestrzeni roboczej',
            subtitle: 'Kontroluj, czy przestrzeń robocza jest publiczna i może być indeksowana przez wyszukiwarki.',
            label: 'Publiczna przestrzeń robocza'
          },
          inviteOnly: {
            title: 'Opcje dołączania do przestrzeni roboczej',
            subtitle: 'Ustaw, czy przestrzeń robocza jest otwarta dla wszystkich, czy tylko na zaproszenie.',
            label: 'Tylko na zaproszenie'
          }
        },
        apiKeys: {
          title: 'Klucze API',
          noApiKeys: 'Nie masz jeszcze kluczy API',
          errorCreating: 'Błąd podczas tworzenia klucza API: {error}',
          errorDeleting: 'Błąd podczas usuwania klucza API: {error}',
          copySuccessful: 'Klucz API został pomyślnie skopiowany.',
          copyError: 'Nie udało się skopiować klucza API: {error}',
          createApiKeyButton: 'Utwórz klucz API teraz',
          removeApiKeyButton: 'Usuń klucz API'
        },
        userInteraction: {
          title: 'Interakcje użytkownika'
        },
        seoMetadata: {
          title: 'SEO i Metadane',
          subtitle: 'Zarządzaj meta tagami dla wyszukiwarek i mediów społecznościowych (np. OpenGraph, karty Twitter).',
          pageTitleLabel: 'Tytuł strony',
          pageKeywordsLabel: 'Słowa kluczowe strony',
          pageDescriptionLabel: 'Opis',
          twitter: {
            title: 'Twitter/X',
            titleLabel: 'Tytuł Twittera',
            descriptionLabel: 'Opis'
          },
          opengraph: {
            title: 'OpenGraph',
            titleLabel: 'Tytuł OpenGraph',
            descriptionLabel: 'Opis OpenGraph'
          },
          rules: {
            maxChars: 'Maksymalnie {characters} znaków',
            alphaNumericSpacePunctuation: 'Dozwolone są tylko znaki alfanumeryczne, spacje i znaki interpunkcyjne',
            alphaNumericCommasSpaces: 'Dozwolone są tylko znaki alfanumeryczne, przecinki i spacje',
            alphaNumericCommasSpacesPipe: 'Dozwolone są tylko znaki alfanumeryczne, spacje i symbole |, -',
            alphaNumericCommasSpacesPipeDash: 'Dozwolone są tylko znaki alfanumeryczne, spacje i symbole |, -, :',
            invalidOpenGraphImage: 'Przesłany obraz musi być w jednym z następujących formatów: JPG, PNG lub GIF.'
          }
        },
        popups: {
          title: 'Wyskakujące okienka',
          preEnrollPopup: {
            title: 'Okienko przed zapisem na kurs',
            addDefaultContentButton: 'Wypełnij domyślną zawartością'
          }
        },
        lookandfeel: {
          title: 'Wygląd i wrażenia',
          folderView: {
            title: 'Wyświetlanie Zasobów',
            subtitle: 'Skonfiguruj sposób wyświetlania kursów dla uczących się',
            label: 'Widok',
            folder: 'Foldery',
            flat: 'Płaski'
          }
        }
      }
    },
    mainAdminPage: {
      checkStudentsProgressTitle: 'Sprawdź postępy uczniów',
      checkStudentsProgressDescription: 'Sprawdź postępy uczniów dla każdego kursu na tej przestrzeni roboczej',
      checkAnalyticsDashboardTitle: 'Sprawdź pulpit analityczny',
      checkAnalyticsDashboardDescription: 'Sprawdź ogólne statystyki dla każdego kursu na tej przestrzeni roboczej',
      manageRolesTitle: 'Zarządzaj personelem tej przestrzeni roboczej',
      manageRolesDescription: 'Dodawaj lub usuwaj uprawnienia do tworzenia kursów dla użytkowników tej przestrzeni roboczej',
      manageUsersTitle: 'Zarządzaj użytkownikami i grupami tej przestrzeni roboczej',
      manageUsersDescription: 'Przypisuj umiejętności, blokuj użytkowników, dodawaj lub usuwaj uprawnienia dla użytkowników tej przestrzeni roboczej. Synchronizuj użytkowników z zintegrowanych platform.',
      manageCampaignsTitle: 'Zarządzaj kampaniami i kodami voucherów',
      manageCampaignsDescription: 'Dodawaj, edytuj, usuwaj kampanie dla kursów i zarządzaj ich kodami voucherów lub zapisu',
      manageIntegrationsTitle: 'Zarządzaj integracjami',
      manageIntegrationsDescription: 'Dodawaj, zarządzaj i usuwaj integracje z narzędziami i platformami 3d stron',
      manageLearningArtefactsTitle: 'Zarządzaj artefaktami edukacyjnymi',
      manageLearningArtefactsDescription: 'Dodawaj, zarządzaj i usuwaj artefakty edukacyjne, takie jak umiejętności',
      manageWorkspaceTitle: 'Zarządzaj przestrzenią roboczą',
      manageWorkspaceDescription: 'Zarządzaj wyglądem i wrażeniami przestrzeni roboczej, globalnymi okienkami wyskakującymi oraz atrybutami przestrzeni roboczej.'
    },
    menu: {
      home: 'Strona główna',
      staffMgmt: 'Zarządzanie personelem',
      usersMgmt: 'Zarządzanie użytkownikami',
      groupsMgmt: 'Zarządzanie grupami',
      progress: 'Postęp studentów',
      dashboard: 'Panel analityki',
      campaignMgmt: 'Zarządzanie kampaniami',
      integrationsMgmt: 'Zarządzanie integracjami',
      artifactsMgmt: 'Zarządzanie umiejętnościami',
      workspaceMgmt: 'Zarządzanie przestrzenią roboczą'
    },
    library: {
      supported: {
        IMAGE: 'zdjęć',
        PDF: 'pdf-ów',
        MP3: 'plików MP3',
        ZIP: 'plików zip'
      },
      maxSizeAllFiles: 'PDFy nie mogą przekraczać {pdfSize}MB, filmy – {videoSize}MB, inne – {fileSize}MB',
      maxSizeNormalFiles: 'Każdy plik nie może przekraczać {fileSize}MB',
      fileTypeWithArticle: {
        IMAGE: 'zdjęcie',
        PDF: 'plik pdf',
        MP3: 'plik MP3'
      },
      title: 'Biblioteka zasobów',
      searchLibrary: 'Przeszukaj bibliotekę',
      searchLibraryLabel: 'Przeszukaj pliki według nazwy',
      uploadTitle: 'Wgraj',
      uploaderHelpText: 'Wybierz plik {supported}',
      uploadImagesOrMp3: 'innych formatów',
      uploadPdfs: 'PDF',
      errorUploadingFile: 'Wystąpił błąd podczas przesyłania pliku: {err}',
      successUploadingFile: 'Plik {fileName} został przesłany pomyślnie',
      clickHereToOpenLibrary: 'Kliknij tutaj, aby otworzyć bibliotekę',
      dragImageHere: 'Przeciągnij tutaj zdjęcie',
      dragFileFromLibrary: 'Przeciągnij {fileType} z biblioteki',
      dragPdfHere: 'Przeciągnij tutaj pdf',
      fileName: 'Nazwa pliku',
      category: 'Kategoria',
      updatingFile: 'Aktualizacja pliku wszędzie',
      categories: {
        ALL: 'Wszystkie',
        AVATAR: 'Awatar',
        COVER_IMAGE: 'Okładki',
        CONTENT: 'Zawartość',
        FRAME: 'Osiągnięcia',
        OTHER: 'Inne'
      },
      errors: {
        type: 'Nieprawidłowy format pliku. Tylko pliki {supported} są dozwolone',
        size: 'Plik nie może przekraczać {size}',
        pdfSize: 'Pliki PDF nie powinny przekraczać {size}.',
        mp4Size: 'Pliki MP4 nie powinny przekraczać {size}.'
      },
      buttons: {
        download: 'Pobierz oryginał',
        delete: 'Usuń z biblioteki',
        replace: 'Zamień plik'
      },
      libraryItemTooltip: '<h6>{name}</h6><hr><div class="caption">Kliknij, aby skopiować URL.</div>',
      showCourseFiles: 'Wyświetlane pliki zostały przesłane w ramach bieżącego kursu. Przełącz przycisk, aby zobaczyć wszystkie pliki w przestrzeni roboczej.',
      showWorkspaceFiles: 'Wyświetlone są wszystkie pliki z przestrzeni roboczej. Przełącz przycisk, aby zobaczyć tylko pliki przesłane w ramach bieżącego kursu.',
      showWorkspaceFilesToggleButton: 'Pokaż wszystkie pliki w przestrzeni roboczej'
    },
    sectionsLibrary: {
      title: 'Sekcje',
      previewAndDrag: 'kliknij na ikonę, aby zobaczyć podgląd i dodać nową sekcję do twojego wykładu'
    },
    analytics: {
      title: 'Analizy',
      startDateLabel: 'Data początkowa',
      endDateLabel: 'Data końcowa',
      aggregateByLabel: 'Agreguj według',
      customInterval: 'Niestandardowy przedział czasowy',
      selectedIntervalWasNotPossible: 'Brak danych dla wybranego okresu. Używamy największego okresu, dla którego jest dostępna analiza.',
      aggregations: {
        DAY: 'dzień',
        MONTH: 'miesiąc',
        MINUTE: 'minuta',
        WEEK: 'tydzień',
        YEAR: 'rok',
        HOUR: 'godzina'
      },
      intervals: {
        YESTERDAY: 'wczoraj',
        LAST24H: 'ostatnie 24 godziny',
        LASTWEEK: 'ostatni tydzień',
        PREVIOUS7DAYS: 'ostatnie 7 dni',
        LASTMONTH: 'ostatni miesiąc',
        LAST3MONTHS: 'ostatnie 3 miesiące',
        LAST6MONTHS: 'ostatnie 6 miesięcy',
        PREVIOUS30DAYS: 'ostatnie 30 dni',
        PREVIOUS365DAYS: 'ostatnie 365 dni',
        LASTYEAR: 'ostatni rok',
        CUSTOM: 'niestandardowy'
      },
      dashboard: {
        itemsPerPageText: 'Wierszy na stronę',
        allCourses: 'Wszystkie kursy',
        allCountries: 'Wszystkie kraje',
        allCampaigns: 'Wszystkie kampanie',
        facts: {
          lectures: {
            title: 'Wykłady'
          },
          enrolments: {
            title: 'Zapisy na kursy'
          },
          questions: {
            title: 'Pytania i odpowiedzi'
          },
          certificates: {
            title: 'Certyfikaty'
          },
          campaigns: {
            title: 'Kampanie'
          },
          workspaceUsers: {
            title: 'Użytkownicy'
          }
        },
        coursesLabel: 'Kursy',
        countriesLabel: 'Kraje',
        campaignsLabel: 'Kampanie',
        modulesLabel: 'Moduły',
        certificatesLabel: 'Certyfikaty',
        lecturesLabel: 'Wykłady',
        questionsLabel: 'Pytania',
        workspaceUsersLabel: 'Użytkownicy',
        enrolmentsCaption: 'zapisano się',
        seenCaption: 'obejrzane',
        answeredCaption: 'odpowiedziane',
        issuedLabel: 'wydane',
        campaignsCaption: 'wykorzystane',
        workspaceUsersCaption: 'zalogowano się',
        funnelCaption: 'najlepsze konwersje kursów',
        funnelLabel: 'Lejek',
        funnel: {
          amountLogin: 'Zalogowani użytkownicy',
          amountEnrolments: 'Użytkownicy zapisani na kursy',
          amountCertificates: 'Wydane certyfikaty',
          enrollments: 'Zapisy na kursy',
          finishedModule: 'Zakończony moduł'
        },
        chartLabels: {
          enrolments: {
            enrolled: 'Zapisy',
            started: 'Rozpoczęte',
            ended: 'Zakończone',
            abandoned: 'Porzucone',
            amountStarted: 'Zapisy',
            amountMsCourseStarted: 'Rozpoczęte',
            amountEnded: 'Zakończone',
            amountAbandoned: 'Porzucone',
            avgDaysBetweenEnded: 'Średnia liczba dni do ukończenia'
          },
          certificates: {
            amountIssued: 'Wydane',
            avgScore: 'Średni wynik',
            minScore: 'Minimalny wynik',
            maxScore: 'Maksymalny wynik'
          },
          questions: {
            amountCorrect: 'Poprawne odpowiedzi',
            amountWrong: 'Błędne odpowiedzi',
            maxWrongAttempts: 'Maksymalna liczba prób',
            minWrongAttempts: 'Minimalna liczba prób',
            avgWrongAttempts: 'Średnia liczba prób'
          },
          lectures: {
            seen: 'Obejrzane',
            amountSeen: 'Obejrzane wykłady'
          },
          campaigns: {
            amountRedeemed: 'Odzyskane'
          },
          workspaceUsers: {
            amountLogin: 'Zalogowani',
            amountRegister: 'Zarejestrowani'
          }
        },
        noDataToDisplay: 'Brak danych do wyświetlenia',
        dataLoading: 'Ładowanie...'
      },
      validationRules: {
        startDateLessEndDate: 'Data rozpoczęcia powinna być wcześniejsza niż data zakończenia'
      }
    },
    createCoursesHeader: {
      create: 'Stwórz',
      chooseOther: 'Inne sposoby tworzenia kursów',
      beforeCreatingCourseTitle: 'Przed utworzeniem kursu',
      beforeCreatingCourseDescription: 'Przeczytaj ten plik PDF przed utworzeniem kursu. Pomoże to w stworzeniu idealnej struktury kursu.',
      beforeCreatingCourseAction: 'Pobierz PDF',
      createCourseTitle: 'Stwórz kurs',
      createCourseDescription: 'Wybierz najwygodniejszy sposób na stworzenie kursu.',
      createCourseAction: 'Rozpocznij tutaj',
      createLearningPathTitle: 'Stwórz ścieżkę edukacyjną',
      createLearningPathDescription: 'Utwórz plan edukacyjny z istniejących kursów.',
      createLearningPathAction: 'Rozpocznij tutaj'
    },
    learningPaths: {
      title: 'Ścieżki nauki',
      noLearningPaths: 'Nie utworzono jeszcze żadnych ścieżek nauki.',
      createNewLearningPathTitle: 'Utwórz nową ścieżkę nauki',
      editLearningPathTitle: 'Edytuj ścieżkę nauki {name}',
      saveInfo: {
        success: 'Ścieżka nauki {name} została pomyślnie zapisana.'
      },
      stepper: {
        title: 'Tytuł i obraz okładki',
        titleLabel: 'Nazwa ścieżki nauki',
        coverImageChooser: 'Wybierz obraz okładki dla ścieżki nauki',
        description: 'Opis ścieżki nauki',
        courses: 'Kursy ścieżki nauki',
        learningPathSteps: 'Kroki i Cele Ścieżki Uczenia',
        coursesOrder: 'Kolejność kursów',
        users: 'Przypisz użytkowników',
        achievements: 'Osiągnięcia',
        createLearningPath: 'Utwórz ścieżkę nauki',
        editLearningPath: 'Aktualizuj ścieżkę nauki',
        checkAndSave: 'Sprawdź i zapisz',
        searchUsers: 'Wyszukaj użytkowników',
        skills: 'Przypisz umiejętności',
        searchSkills: 'Wyszukaj umiejętności',
        assignUserToTheLearningPathButton: 'Przypisz użytkownika',
        assignSkillToTheLearningPathButton: 'Przypisz umiejętność',
        removeSkillFromTheLearningPathButton: 'Usuń umiejętność',
        assignGroupsToUserTitle: 'Przypisz grupy',
        searchGroups: 'Wyszukaj grupy',
        certifiable: 'Certyfikowalny',
        timing: 'Harmonogram ścieżki nauki',
        achievementItem: {
          name: 'Wpisz nazwę celu',
          description: 'Wpisz opis celu',
          image: 'Dodaj obraz dla osiągnięcia'
        },
        loadingCourses: 'Wczytywanie kursów',
        selectedCourses: 'Nie wybrano żadnego kursu | Wybrano {n} kurs | Wybrano {n} kursy | Wybrano {n} kursów',
        info: {
          title: 'Dodaj tutaj tytuł i obraz okładki dla ścieżki nauki. Będziesz mógł je zmienić w przyszłości.',
          description: 'Dodaj tutaj opis ścieżki nauki. Będzie możliwe zmienienie go w przyszłości.',
          courses: 'Wybierz kursy, z których składać się będzie ścieżka nauki.',
          coursesOrder: 'Ustaw właściwą kolejność kursów.',
          users: 'Wybierz użytkowników, którzy mają być przypisani do ścieżki nauki.',
          skills: 'Wybierz poziomy umiejętności, jakie użytkownicy zdobędą po ukończeniu ścieżki nauki',
          achievements: 'Utwórz osiągnięcia dla każdego z kursów w ścieżce nauki.',
          checkAndSave: 'Sprawdź kursy i osiągnięcia oraz zapisz ścieżkę nauki przed przystąpieniem do przypisywania użytkowników.',
          saveBeforeUser: 'Proszę dodać co najmniej tytuł do ścieżki uczenia się przed przypisywaniem jej użytkowników.',
          learningPathSteps: 'Zdefiniuj tutaj kroki ścieżki uczenia, odpowiadające kursy i cele. ' +
            'Przeciągnij i upuść kroki, aby zmienić ich kolejność.',
          certifiable: 'Włącz certyfikat na końcu ścieżki nauki.',
          timing: {
            title: 'Zarządzaj harmonogramem swojej ścieżki nauki',
            description: 'Skonfiguruj ustawienia harmonogramu dla swojej ścieżki nauki. Określ liczbę dni na wysyłanie przypomnień o braku aktywności oraz maksymalny czas na ukończenie przed automatycznym anulowaniem.',
            reminderAfterInactivity: {
              title: 'Wyślij przypomnienie po braku aktywności',
              description: 'Automatycznie wyślij przypomnienie do uczących się, jeśli nie ukończyli ścieżki nauki w ciągu [N dni] od daty rozpoczęcia. Utrzymuj zaangażowanie uczących się dzięki terminowym przypomnieniom.',
              label: 'Liczba dni do przypomnienia',
              tooltip: 'Wprowadź liczbę dni od daty rozpoczęcia, aby wysłać przypomnienie o nieukończonych ścieżkach nauki.'
            },
            automaticCancellationTime: {
              title: 'Ustaw termin ukończenia',
              description: 'Określ maksymalny czas (w dniach) na ukończenie ścieżki nauki. Jeśli uczący się nie ukończy jej w ciągu [N dni] od daty rozpoczęcia, ścieżka zostanie automatycznie anulowana.',
              label: 'Liczba dni do anulowania',
              tooltip: 'Wprowadź maksymalną liczbę dni na ukończenie ścieżki nauki. Po tym okresie zostanie ona automatycznie anulowana.'
            },
            automaticRetake: {
              title: 'Automatyczne powtórzenie',
              description: 'Automatycznie ponownie rozpocznij ścieżkę edukacyjną (jeśli nie została jeszcze rozpoczęta) po określonym czasie od ostatniego rozpoczęcia.',
              labelValue: 'Wartość czasu',
              labelUnit: 'Jednostka czasu'
            }
          }
        },
        learningPathStepsPage: {
          addNewStepButton: 'Utwórz Nowy Krok na podstawie Kursu',
          addNewGoalButton: 'Dodaj Cel',
          stepTitle: 'Tytuł Kroku',
          stepDescription: 'Opis Kroku',
          addEditGoal: 'Dodaj/Edytuj Cel',
          saveGoal: 'Zapisz Cel',
          courseCardTitle: 'Kurs',
          goalCardTitle: 'Cel'
        }
      }
    },
    skills: {
      newSkillTitle: 'Utwórz nową umiejętność',
      editSkillTitle: 'Edytuj umiejętność {name}',
      titleLabel: 'Nazwa umiejętności',
      createSkill: 'Utwórz umiejętność',
      editSkill: 'Edytuj umiejętność',
      stepper: {
        title: 'Tytuł i okładka',
        titleLabel: 'Nazwa umiejętności',
        coverImageChooser: 'Wybierz obraz okładki dla umiejętności',
        description: 'Opis umiejętności',
        levels: 'Poziomy umiejętności',
        info: {
          title: 'Dodaj tytuł i obraz okładki dla umiejętności tutaj. Będziesz mógł go zmienić w przyszłości.',
          description: 'Dodaj tutaj opis umiejętności. Można go zmienić w przyszłości.',
          levels: 'Możesz ustawić unikalny poziom lub wybrać wiele poziomów i ustawić dla każdego z nich inny opis. <strong>Wszystkie te ustawienia można później zmienić.</strong>'
        },
        createSkill: 'Utwórz umiejętność',
        editSkill: 'Edytuj umiejętność',
        levelTypesLabel: 'Typy poziomów',
        uniqueLevelLabel: 'Unikalny poziom',
        multipleLevelLabel: 'Wiele poziomów',
        addNewSkillLevelButton: 'Dodaj poziom'
      }
    },
    groups: {
      newGroupTitle: 'Utwórz nową grupę',
      editGroupTitle: 'Edytuj grupę {name}',
      titleLabel: 'Nazwa grupy',
      createGroup: 'Utwórz grupę',
      editGroup: 'Aktualizuj grupę',
      stepper: {
        title: 'Nazwa grupy',
        titleLabel: 'Nazwa grupy',
        description: 'Opis grupy',
        users: 'Użytkownicy w grupie',
        courses: 'Kursy grupowe',
        learningPaths: 'Ścieżki uczenia się grupowe',
        titleErrorMessage: 'Nazwa grupy jest wymagana',
        maximumCharactersErrorMessage: 'Przekroczono maksymalny limit znaków.',
        info: {
          title: 'Dodaj tutaj nazwę grupy. Będziesz mógł ją zmienić w przyszłości.',
          description: 'Dodaj tutaj opis grupy. Będziesz mógł go zmienić w przyszłości.',
          users: 'Możesz tutaj dodawać i usuwać użytkowników z grupy.'
        },
        addUserToGroupButton: 'dodaj użytkownika',
        removeUserToGroupButton: 'usuń użytkownika',
        createGroup: 'Utwórz grupę',
        editGroup: 'Aktualizuj grupę'
      }
    },
    statusMessages: {
      enrolledWithSuccess: 'Użytkownik {name} został zapisany pomyślnie',
      enrolledWithError: 'Wystąpił błąd podczas zapisywania {name}: {errorText}',
      unenrolledWithSuccess: 'Użytkownik {name} został wypisany pomyślnie',
      unenrolledWithError: 'Wystąpił błąd podczas wypisywania {name}: {errorText}',
      learningPathAssignedWithSuccess: 'Użytkownik {name} został przypisany do ścieżki edukacji z powodzeniem',
      learningPathAssignedWithError: 'Wystąpił błąd podczas przypisywania ścieżki edukacji do użytkownika {name}: {errorText}',
      learningPathDeletedWithSuccess: 'Ścieżka edukacji {name} została usunięta pomyślnie',
      learningPathDeletedWithError: 'Wystąpił błąd podczas usuwania ścieżki edukacji: {errorText}',
      newSkillCreated: 'Umiejętność {name} została utworzona pomyślnie',
      skillUpdated: 'Umiejętność {name} została zaktualizowana pomyślnie',
      skillCreatedWithError: 'Wystąpił błąd podczas tworzenia umiejętności {name}: {errorText}',
      skillAssignedToLearningPathWithSuccess: 'Umiejętność {name} została przypisana do ścieżki edukacji z powodzeniem',
      skillAssignedToLearningPathWithError: 'Wystąpił błąd podczas przypisywania umiejętności do ścieżki edukacji: {errorText}',
      skillAssignedToUserWithSuccess: 'Umiejętność {name} została przypisana do użytkownika {userName} z powodzeniem',
      skillAssignedToUserWithError: 'Wystąpił błąd podczas przypisywania umiejętności {name} do użytkownika {userName}: {errorText}',
      skillUpdatedWithError: 'Wystąpił błąd podczas aktualizowania umiejętności {name}: {errorText}',
      addedToGroupWithSuccess: 'Użytkownik {userName} został dodany do grupy {groupName} z powodzeniem',
      addedToGroupWithError: 'Wystąpił błąd podczas dodawania użytkownika {userName} do grupy {groupName}: {errorText}',
      removedFromGroupWithSuccess: 'Użytkownik {userName} został usunięty z grupy {groupName} z powodzeniem',
      removedFromGroupWithError: 'Wystąpił błąd podczas usuwania użytkownika {userName} z grupy {groupName}: {errorText}',
      newGroupCreated: 'Grupa {name} została utworzona pomyślnie',
      groupCreatedWithError: 'Wystąpił błąd podczas tworzenia grupy {name}: {errorText}',
      groupUpdated: 'Grupa {name} została zaktualizowana z powodzeniem',
      groupUpdatedWithError: 'Wystąpił błąd podczas aktualizowania grupy {name}: {errorText}',
      groupAssignedToUserWithSuccess: 'Użytkownik {userName} został pomyślnie dodany do grupy {name}',
      groupAssignedToUserWithError: 'Wystąpił błąd podczas przypisywania użytkownika {userName} do grupy {name}: {errorText}',
      skillRemovedFromLearningPathWithSuccess: 'Umiejętność {name} została pomyślnie usunięta z ścieżki nauki',
      skillRemovedFromLearningPathWithError: 'Wystąpił błąd podczas usuwania umiejętności {name} z ścieżki nauki: {errorText}',
      skillRemovedFromUserWithSuccess: 'Umiejętność {name} została pomyślnie usunięta z użytkownika {userName}',
      skillRemovedFromUserWithError: 'Wystąpił błąd podczas usuwania umiejętności {name} z użytkownika {userName}: {errorText}',
      groupRemovedFromUserWithSuccess: 'Użytkownik {userName} został pomyślnie usunięty z grupy {name}',
      groupRemovedFromUserWithError: 'Wystąpił błąd podczas usuwania użytkownika {userName} z grupy {name}: {errorText}',
      groupDeletedWithSuccess: 'Grupa {name} została pomyślnie usunięta',
      groupDeletedWithError: 'Wystąpił błąd podczas usuwania grupy {name}: {errorText}',
      skillDeletedWithSuccess: 'Umiejętność {name} została pomyślnie usunięta',
      skillDeletedWithError: 'Wystąpił błąd podczas usuwania umiejętności {name}: {errorText}'
    },
    dialogs: {
      courseOwnersTitle: 'Właściciele i Edytorzy kursu',
      courseOwnersTable: {
        username: 'Email użytkownika',
        role: 'Rola',
        creatorRole: 'Twórca',
        editorRole: 'Redaktor'
      },
      enrollButton: {
        text: 'Zapisz',
        title: {
          course: 'Zapisz użytkowników na kursie',
          learningPath: 'Zapisz użytkowników na ścieżce edukacyjnej'
        }
      },
      enrollNowButton: {
        text: 'Zapisz się teraz!',
        title: 'Zapisz wszystkich w grupie teraz'
      },
      linkButton: {
        text: 'Połącz',
        title: 'Automatycznie zapisuj użytkowników po powiązaniu z grupą'
      },
      unlinkButton: {
        text: 'Odłącz',
        title: 'Automatycznie wypisz użytkowników po odłączeniu od grupy'
      },
      unenrollButton: {
        text: 'Wypisz',
        title: {
          course: 'Wypisz użytkowników z kursu',
          learningPath: 'Wypisz użytkowników ze ścieżki edukacyjnej'
        }
      },
      checkProgress: {
        text: 'Sprawdź postęp',
        title: {
          course: 'Sprawdź postęp ucznia w kursie',
          learningPath: 'Sprawdź postęp ucznia na ścieżce edukacyjnej'
        }
      },
      assignButton: {
        text: 'Powiąż',
        title: {
          course: 'Powiąż grupę z kursem',
          learningPath: 'Powiąż grupę ze ścieżką edukacyjną'
        }
      },
      unassignButton: {
        text: 'Rozwiąż',
        title: {
          course: 'Rozwiąż powiązanie grupy z kursem',
          learningPath: 'Rozwiąż powiązanie grupy ze ścieżką edukacyjną'
        }
      },
      addAdminButton: {
        text: 'Dodaj jako Redaktora',
        title: {
          courseAdmins: 'Dodaj użytkownika jako Redaktora kursu'
        }
      },
      removeAdminButton: {
        text: 'Usuń rolę Redaktora',
        title: {
          courseAdmins: 'Usuń użytkownika jako Redaktora kursu'
        }
      },
      explanationGroups: {
        course: 'Kliknij przycisk <strong>Powiąż</strong>, aby powiązać grupę z kursem. ' +
          'Po tym, wszystkie nowe osoby dodane do grupy będą automatycznie zapisane na kursie.' +
          '<br>Kliknij przycisk <strong>Zapisz</strong>, aby zapisać wszystkich obecnych użytkowników grupy na kursie.',
        learningPath: 'Kliknij przycisk <strong>Powiąż</strong>, aby powiązać grupę ze ścieżką edukacyjną. ' +
          'Po tym, wszystkie nowe osoby dodane do grupy będą automatycznie zapisane na ścieżce edukacyjnej. ' +
          '<br>Kliknij przycisk <strong>Zapisz</strong>, aby zapisać wszystkich obecnych użytkowników grupy na ścieżce edukacyjnej.'
      },
      explanationUsers: {
        course: 'Kliknij przycisk <strong>Zapisz</strong>, aby zapisać użytkownika na kursie. Użytkownik otrzyma email.' +
          '<br>Kliknij przycisk <strong>Wypisz</strong>, aby wypisać użytkownika z kursu.',
        learningPath: 'Kliknij przycisk <strong>Zapisz</strong>, aby zapisać użytkownika na ścieżce edukacyjnej. Użytkownik otrzyma email.' +
          '<br>Kliknij przycisk <strong>Wypisz</strong>, aby wypisać użytkownika ze ścieżki edukacyjnej.',
        courseAdmins: 'Kliknij przycisk <strong>Dodaj jako Redaktora</strong>, aby użytkownik stał się redaktorem kursu.' +
          '<br>Kliknij przycisk <strong>Usuń rolę Redaktora</strong>, aby usunąć użytkownika z listy redaktorów kursu.'
      },
      enrollUsersTitle: 'Zapisz użytkowników',
      enrollGroupsTitle: 'Zapisz grupy',
      addCourseAdminsTitle: 'Dodaj Administratorów kursu',
      status: {
        groupAssociated: {
          success: {
            course: 'Grupa {name} została pomyślnie powiązana z kursem.',
            learningPath: 'Grupa {name} została pomyślnie powiązana ze ścieżką edukacyjną.'
          },
          error: {
            course: 'Wystąpił błąd podczas łączenia grupy {name} z kursem: {err}.',
            learningPath: 'Wystąpił błąd podczas łączenia grupy {name} z ścieżką nauki: {err}.'
          }
        },
        groupUnassociated: {
          success: {
            course: 'Grupa {name} została pomyślnie odłączona od kursu.',
            learningPath: 'Grupa {name} została pomyślnie odłączona od ścieżki nauki.'
          },
          error: {
            course: 'Wystąpił błąd podczas odłączania grupy {name} od kursu: {err}.',
            learningPath: 'Wystąpił błąd podczas odłączania grupy {name} od ścieżki nauki: {err}.'
          }
        },
        groupEnrolled: {
          success: {
            course: 'Użytkownicy grupy {name} zostali pomyślnie zapisani na kurs.',
            learningPath: 'Użytkownicy grupy {name} zostali pomyślnie zapisani na ścieżkę nauki.'
          },
          error: {
            course: 'Wystąpił błąd podczas zapisywania użytkowników grupy {name} na kurs: {err}.',
            learningPath: 'Wystąpił błąd podczas zapisywania użytkowników grupy {name} na ścieżkę nauki: {err}.'
          }
        },
        enrolled: {
          success: {
            course: 'Użytkownik {name} został pomyślnie zapisany na kurs.',
            learningPath: 'Użytkownik {name} został pomyślnie zapisany na ścieżkę nauki.'
          },
          error: {
            course: 'Wystąpił błąd podczas zapisywania użytkownika {name} na kurs: {err}.',
            learningPath: 'Wystąpił błąd podczas zapisywania użytkownika {name} na ścieżkę nauki: {err}.'
          }
        }
      }
    },
    generic: {
      createdOn: 'Utworzono:',
      updatedOn: 'Ostatnio widziany:',
      startedOn: 'Rozpoczęto:',
      finishedOn: 'Zakończone:',
      searchCourses: 'Szukaj Kursów',
      resetFilters: 'Zresetuj Filtry'
    },
    cloneOrShare: {
      title: 'Klonuj lub udostępnij kurs',
      toCurrentWorkspace: 'Sklonuj {name} do bieżącej przestrzeni roboczej',
      toOtherWorkspace: 'Sklonuj {name} do innej przestrzeni roboczej',
      chooseWorkspace: 'Wybierz przestrzeń roboczą, do której chcesz sklonować lub udostępnić kurs',
      cloneCourseExplanation: '<strong>Klonuj</strong> {courseName} do przestrzeni roboczej {workspaceName}: kurs zostanie sklonowany i zarządzany w przestrzeni roboczej {workspaceName}.',
      shareCourseExplanation: '<strong>Udostępnij</strong> {courseName} do przestrzeni roboczej {workspaceName}: kurs zostanie udostępniony do {workspaceName}. Wszelkie zmiany wprowadzone w bieżącej przestrzeni roboczej zostaną przekazane do przestrzeni roboczej {workspaceName}.',
      cloneButton: 'Sklonuj kurs',
      shareButton: 'Udostępnij kurs',
      cloningCourseOverlay: 'Kurs {name} jest klonowany...',
      sharingCourseOverlay: 'Kurs {name} jest udostępniany...',
      courseCloneSuccess: 'Kurs {name} został pomyślnie sklonowany.',
      courseCloneError: 'Wystąpił błąd podczas klonowania kursu {name}: {err}.',
      courseShareSuccess: 'Kurs {name} został pomyślnie udostępniony.',
      courseShareError: 'Wystąpił błąd podczas udostępniania kursu {name}: {err}.'
    },
    translateCourse: {
      title: 'Tłumacz kurs',
      languageLabel: 'Wybierz język',
      contextLabel: 'Podaj kontekst lub instrukcje',
      translateButtonLabel: 'Tłumacz',
      overlayText: 'Kurs {name} jest tłumaczony. To potrwa trochę czasu. ' +
        'Możesz zamknąć to okno i zostaniesz powiadomiony, gdy tłumaczenie będzie gotowe.',
      warning: 'Proszę zauważyć, że jest to funkcja <strong>BETA</strong>. Niektóre lekcje, szczególnie w <strong>dużych kursach</strong>, mogą nie być przetłumaczone dokładnie. Dlatego zawsze będzie konieczna weryfikacja przez człowieka.'
    }
  },
  tourSteps: {
    snackbar: {
      title: 'Rozpocznij przewodnik po edycji kursu',
      description: 'Możesz zawsze ponownie rozpocząć ten przewodnik, po prostu odświeżając stronę lub włączając i wyłączając tryb edycji',
      startButton: 'Rozpocznij',
      cancelButton: 'Zamknij'
    },
    labels: {
      buttonSkip: 'Pomiń przewodnik',
      buttonPrevious: 'Wstecz',
      buttonNext: 'Dalej',
      buttonStop: 'Zakończ'
    },
    adminCourses: {
      createNewCourse: 'Kliknij tutaj, aby <strong>utworzyć nowy kurs</strong>',
      importJSON: 'Kliknij tutaj, aby <strong>zaimportować kurs w formacie JSON</strong>',
      listOfCourses: 'Kursy, którymi możesz zarządzać',
      paginationCourses: 'Poruszaj się po liście kursów'
    },
    editingMenu: {
      resetButton: 'Kliknij ten przycisk, aby zresetować ostatnie zmiany',
      saveButton: 'Kliknij ten przycisk, aby zapisać ostatnie zmiany',
      publishButton: 'Kliknij ten przycisk, aby udostępnić lub ukryć kurs dla studentów'
    },
    demoCourseEditing: {
      title: 'Przewodnik po Edycji Kursu',
      changeTitle: {
        title: '',
        content: 'Kliknij tutaj, aby zmienić tytuł kursu'
      },
      changeDescription: {
        title: '',
        content: 'Kliknij tutaj, aby zmienić opis kursu. Możesz użyć paska narzędziowego na górze strony, aby formatować tekst, dodać punkty listy, obrazy i linki.'
      },
      addModule: {
        title: '',
        content: 'Kliknij tutaj, aby dodać nowy moduł do kursu. Zostanie on dodany jako ostatni moduł.'
      },
      addLecture: {
        title: '',
        content: 'Kliknij tutaj, aby dodać nową lekcję do modułu. Będzie to ostatnia lekcja w module, ale możesz użyć przeciągnij i upuść, aby przesunąć ją tam, gdzie chcesz.'
      },
      changeModuleTitle: {
        title: '',
        content: 'Możesz łatwo zmienić tytuł modułu, klikając tutaj i zaczynając pisać.'
      },
      changeModuleDescription: {
        title: '',
        content: 'Zacznij pisać, aby zmienić opis modułu. Użyj paska narzędziowego na górze, aby formatować swój tekst. Pamiętaj jednak, że opis modułu powinien być krótki i zwięzły.'
      },
      saveCourse: {
        title: '',
        content: 'Kliknij tutaj, aby zapisać ostatnie zmiany w kursie.'
      },
      changeLectureTitle: {
        title: '',
        content: 'Kliknij tutaj i wpisz tytuł wykładu.'
      },
      changeLectureDescription: {
        title: '',
        content: 'Możesz łatwo zmienić opis wykładu (lub go całkowicie usunąć), pisząc tutaj. Możesz użyć paska narzędziowego na górze, aby formatować swój tekst. Staraj się zachować opisy wykładów krótkie i zwięzłe.'
      },
      resetChanges: {
        title: '',
        content: 'Kliknij tutaj, aby zresetować zmiany, które wprowadziłeś od ostatniego zapisania kursu.'
      },
      publishCourse: {
        title: '',
        content: 'Udostępnij kurs lub ukryj go przed uczestnikami tej przestrzeni roboczej.'
      },
      unpublishCourse: {
        title: '',
        content: 'Ukryj kurs przed uczestnikami tej przestrzeni roboczej.'
      },
      copyLecture: {
        title: '',
        content: 'Kliknij tutaj, aby skopiować wykład do schowka.'
      },
      copyModule: {
        title: '',
        content: 'Kliknij tutaj, aby skopiować moduł do schowka - zostanie skopiowany cały moduł ze wszystkimi wykładami. Następnie będziesz mógł wkleić go po dowolnym module w dowolnym kursie w tej przestrzeni roboczej.'
      },
      pasteLecture: {
        title: '',
        content: 'Kliknij tutaj, aby wkleić skopiowany wykład po tym. Wykład pozostanie w schowku, więc będziesz mógł go wkleić jeszcze kilka razy. Skopiowany wykład pozostaje w schowku, dopóki nie skopiujesz innego.'
      },
      pasteModule: {
        title: '',
        content: 'Kliknij tutaj, aby wkleić skopiowany moduł po tym. Moduł pozostanie w schowku, więc będziesz mógł go wkleić po innych modułach. Skopiowany moduł pozostaje w schowku, dopóki nie skopiujesz innego.'
      },
      deleteLecture: {
        title: '',
        content: 'Kliknij tutaj, aby usunąć ten wykład. Pamiętaj, że nie będziesz mógł usuwać wykładów, jeśli studenci już z nimi wchodzili w interakcje!'
      },
      deleteModule: {
        title: '',
        content: 'Kliknij tutaj, aby usunąć ten moduł. Cały moduł ze wszystkimi wykładami zostanie usunięty. Pamiętaj jednak, że nie będziesz mógł usunąć modułu, który już ma postęp studentów.'
      },
      changeModuleAvailableDates: {
        title: '',
        content: 'Kliknij tutaj, aby zmienić daty dostępności modułu. Dwukrotnie kliknij datę - moduł będzie dostępny od wybranej daty. Kliknij raz na datę, a następnie raz na kolejną datę - moduł będzie dostępny w wybranych terminach.'
      },
      dragModule: {
        title: '',
        content: 'Kliknij i przeciągnij, aby zmienić pozycję tego modułu. Będziesz mógł przetestować tę funkcjonalność po zakończeniu przewodnika.'
      },
      dragLecture: {
        title: '',
        content: 'Kliknij i przeciągnij, aby zmienić pozycję tego wykładu w ramach modułu. Będziesz mógł przetestować tę funkcjonalność po zakończeniu przewodnika.'
      },
      changeCourseInfo: {
        content: 'Kliknij tutaj, aby zmienić podstawowe informacje o kursie, takie jak daty dostępności, wymagane wyniki itp.'
      },
      editCourseTags: {
        content: 'Dodaj lub usuń tagi kursu. Tagi te będą używane do filtrowania kursów.'
      },
      editCourseGamification: {
        content: 'Kliknij tutaj, aby móc dodawać i edytować osiągnięcia kursu.'
      },
      switchEditingMode: {
        content: 'Użyj tego przełącznika, aby przełączyć się między trybami edycji i przeglądania.'
      },
      useEditorToolbar: {
        content: 'Użyj paska narzędzi edytora, aby zmienić styl tekstu, dodać obrazy, punkty i listy do tekstu.'
      },
      goToLecture: {
        content: 'Kliknij link na każdym elemencie wykładu, aby przejść do edycji wykładu.'
      }
    }
  },
  sectionsExamples: {
    richText: {
      title: 'Tytuł sekcji',
      content: 'Lorem ipsum dolor sit amet, <strong>consetetur sadipscing elitr</strong>, sed diam <em>nonumy eirmod tempor</em> invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
    }
  },
  accessibility: {
    configForVisualImpairments: 'Konfiguracja dla użytkowników z wadami wzroku',
    changeFontSize: 'Zmień rozmiar czcionki',
    siteBackToNormal: 'Zwykła wersja strony internetowej',
    changeColorOfTheWebsite: 'Zmień kolor strony internetowej',
    exampleBackgroundFont: 'Przykład, jak będzie wyglądał tekst',
    exampleHeader1: 'Tytuły poziomu 1',
    exampleHeader2: 'Tytuły poziomu 2',
    changeImagesLook: 'Zmień wygląd obrazów',
    exampleImagesLook: 'Przykład, jak będą wyglądać obrazy'
  },
  validation: {
    url: {
      required: 'Adres URL jest wymagany',
      valid: 'Adres URL musi być prawidłowy'
    }
  },
  notifications: {
    title: 'Powiadomienia',
    clearAllButton: 'Oznacz wszystkie jako przeczytane',
    statuses: {
      INACTIVE_USER_COURSES: 'Nieaktywność'
    },
    actions: {
      clear: 'Wyczyść',
      markAsRead: 'Oznacz jako przeczytane'
    },
    noNotificationsToShow: 'Nie ma powiadomień do wyświetlenia'
  },
  header: {
    menu: {
      accessibility: 'Dostępność',
      toggleDarkMode: 'Przełącz tryb ciemny',
      profileSubtitle: {
        admin: 'Admin',
        courseAdmin: 'Administrator kursu',
        learner: 'Uczeń',
        adminViewNonAdmin: 'Admin<br><span class="caption">(przeglądanie jako student)</span>',
        courseAdminViewNonAdmin: 'Administrator kursu<br><span class="caption">(przeglądanie jako student)</span>',
        courseEditor: 'Redaktor kursu',
        courseEditorViewNonAdmin: 'Redaktor kursu<br><span class="caption">(przeglądanie jako student)</span>'
      },
      create: {
        course: 'Kurs',
        learningPath: 'Ścieżka uczenia się',
        skill: 'Umiejętność',
        group: 'Grupa',
        users: 'Użytkownicy'
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
  },
  preCourseSurvey: {
    title: 'Ankieta przed kursem',
    subtitleNotStarted: 'Proszę wypełnić tę ankietę. Po jej wypełnieniu będziesz mógł rozpocząć kurs!',
    subtitleFinished: 'Możesz zmienić swoje odpowiedzi w ankiecie przedkursoowej.',
    subtitleEditing: 'Edytuj ankietę przedkursoową.',
    editSurveyButton: 'Edytuj',
    finishEditSurveyButton: 'Zakończ edycję',
    buttonTitle: 'Ankieta przed kursem',
    addNewSurveyQuestion: 'Dodaj nowe pytanie ankiety',
    editCourseSurvey: 'W tej sekcji możesz dodać lub edytować obowiązkową ankietę kursu. ' +
      'Ankieta ta pojawi się jako wyskakujące okienko dla uczestników, zanim będą mogli rozpocząć kurs.',
    fillCourseSurvey: 'Musisz ukończyć ankietę, zanim przejdziesz do kursu.',
    fillEditCourseSurvey: 'Możesz edytować swoje odpowiedzi na ankietę kursu.',
    filters: {
      button: 'Filtruj według pytań',
      title: 'Filtruj według pytań i odpowiedzi kursu',
      selectQuestionLabel: 'Wybierz pytanie',
      selectAnswerLabel: 'Wybierz odpowiedź',
      addFilterButton: 'Dodaj filtr',
      clearFilterButton: 'Wyczyść',
      applyFilterButton: 'Zastosuj'
    }
  },
  postCourseSurvey: {
    title: 'Ankieta po kursie',
    subtitleNotStarted: 'Proszę wypełnić tę ankietę. Po jej wypełnieniu będziesz mógł zakończyć kurs!',
    subtitleFinished: 'Możesz zmienić swoje odpowiedzi w ankiecie po kursie.',
    subtitleEditing: 'Edytuj ankietę po kursie.',
    editSurveyButton: 'Edytuj',
    finishEditSurveyButton: 'Zakończ edycję',
    buttonTitle: 'Ankieta po kursie',
    addNewSurveyQuestion: 'Dodaj nowe pytanie do ankiety',
    editCourseSurvey: 'W tej sekcji możesz dodać lub edytować obowiązkową ankietę po kursie. ' +
      'Ta ankieta pojawi się jako wyskakujące okienko przed uzyskaniem certyfikatu lub zakończeniem kursu.',
    fillCourseSurvey: 'Musisz wypełnić ankietę przed ukończeniem kursu.',
    fillEditCourseSurvey: 'Możesz edytować swoje odpowiedzi w ankiecie kursu.'
  },
  getReadyAi: {
    title: 'Stwórz swój kurs z AI',
    description: 'Wpisz swój email i temat kursu, a wyślemy Ci link do Twojego kursu wygenerowanego przez AI.',
    usernameLabel: 'Twój Email',
    courseTopicLabel: 'Temat kursu',
    generateButton: 'Stwórz mój Kurs',
    afterGenerateButton: 'Kliknij powyższy przycisk, a wkrótce otrzymasz email.',
    topicRequired: 'Temat jest wymagany',
    setPasswordTitle: 'Ustaw swoje Hasło',
    setPasswordDesc: 'Po ustawieniu hasła zostaniesz przekierowany do swojego kursu.',
    setPasswordButton: 'Ustaw Hasło i Zaloguj się',
    tokenLabel: 'Token',
    passwordLabel: 'Hasło',
    courseCreationRequestSuccess: 'Twój kurs jest teraz tworzony. ' +
      'Możesz już opuścić tę stronę. ' +
      'Otrzymasz e-mail, jak tylko Twój kurs zostanie zakończony!'
  },
  meta: {
    titles: {
      pages: {
        admin: 'Administrator',
        courses: 'Kursy',
        dashboard: 'Pulpit',
        signin: 'Zaloguj się',
        learnerProfile: 'Profil Ucznia',
        onboardingWithAi: 'Wprowadzenie z AI',
        organization: 'Organizacja',
        paswordreset: 'Resetowanie Hasła',
        printableCourse: 'Kurs do Druku'
      }
    }
  }
}
