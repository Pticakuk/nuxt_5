export default {
  actions: {
    delete: {
      module: 'Eliminar módulo',
      lecture: 'Eliminar lección',
      section: 'Eliminar sección',
      question: 'Eliminar pregunta',
      bubble: 'Eliminar globo de diálogo',
      option: 'Eliminar opción',
      branchSection: 'Eliminar sección de rama'
    },
    add: {
      module: 'Añadir módulo',
      lecture: 'Añadir lección',
      section: 'Añadir sección',
      question: 'Añadir pregunta',
      bubble: 'Añadir globo de diálogo',
      option: 'Añadir opción',
      branchSection: 'Añadir sección de rama'
    },
    duplicate: {
      module: 'Duplicar módulo',
      lecture: 'Duplicar lección',
      section: 'Duplicar sección',
      question: 'Duplicar pregunta',
      bubble: 'Duplicar globo de diálogo',
      option: 'Duplicar opción',
      branchSection: 'Duplicar sección de rama'
    },
    moveUp: {
      module: 'Mover módulo hacia arriba',
      lecture: 'Mover lección hacia arriba',
      section: 'Mover sección hacia arriba',
      question: 'Mover pregunta hacia arriba',
      bubble: 'Mover globo de diálogo hacia arriba',
      option: 'Mover opción hacia arriba',
      branchSection: 'Mover sección de rama hacia arriba'
    },
    moveDown: {
      module: 'Mover módulo hacia abajo',
      lecture: 'Mover lección hacia abajo',
      section: 'Mover sección hacia abajo',
      question: 'Mover pregunta hacia abajo',
      bubble: 'Mover globo de diálogo hacia abajo',
      option: 'Mover opción hacia abajo',
      branchSection: 'Mover sección de rama hacia abajo'
    },
    copy: {
      module: 'Copiar módulo',
      lecture: 'Copiar lección',
      section: 'Copiar sección',
      question: 'Copiar pregunta',
      bubble: 'Copiar globo de diálogo',
      option: 'Copiar opción',
      branchSection: 'Copiar sección de rama',
      courseUrl: 'copiar',
      courseUrlCopied: 'copiado',
      url: 'copiar',
      copiarUrl: 'Copiar URL',
      urlCopied: 'copiado',
      openInNewTab: 'Abrir en una nueva pestaña'
    },
    paste: {
      module: 'Pegar módulo',
      lecture: 'Pegar lección',
      section: 'Pegar sección',
      question: 'Pegar pregunta',
      bubble: 'Pegar globo de diálogo',
      option: 'Pegar opción',
      branchSection: 'Pegar sección de rama'
    },
    course: {
      config: 'Editar configuración',
      edit: 'Editar contenido del curso',
      clone: 'Clonar curso',
      invite: 'Invitar usuarios o grupos',
      progress: 'Revisar el progreso de los usuarios',
      deleteInProgress: 'Eliminando curso {name}...',
      archiveInProgress: 'Archivando curso {name}...',
      unarchiveInProgress: 'Desarchivando curso {name}...'
    },
    lectureVisibility: {
      lecture: 'Visibilidad de la lección'
    }
  },
  openAi: {
    title: 'Open AI',
    useThisTextButton: 'Usar este texto',
    useThisImageButton: 'Usar esta imagen',
    usingOpenAiInfoBox: 'Utilizamos la API de <strong>Open AI</strong> para ayudarte con tus tareas diarias. Asegúrate de tener la integración con tu cuenta de Open AI configurada y empieza a utilizar este asistente para prácticamente cualquier cosa. ' +
          'Por ejemplo, puedes escribir algo como <strong>"Título para un curso sobre onboarding"</strong> o <strong>"Redacta una descripción para una clase introductoria sobre Salesforce"</strong> ' +
          'o <strong>"Genera una pregunta de opción única sobre habilidades blandas"</strong>. Usa tu lenguaje natural, revisa el resultado, ' +
          'ajusta el texto si es necesario, elimina espacios vacíos innecesarios y utilízalo en tu curso.',
    textCompletionExplanation: 'Utiliza este cuadro de diálogo para generar texto sobre cualquier tema. El texto estará limitado a {charLimit} caracteres.',
    imageCreationExplanation: 'Utiliza este cuadro de diálogo para generar una imagen sobre cualquier tema. Ten en cuenta que la generación de imágenes está actualmente en versión Beta. La imagen se generará con un tamaño de {imageSize}.',
    errorGeneratingContent: 'Hubo un error al generar el contenido: {err}',
    configureTheIntegration: ' | Por favor, configura la integración con la API de OpenAI en la sección de administraciones/integraciones.'
  },
  trialWorkspaceBanner: '😃 Todavía tienes {daysLeft} días de tu período de prueba. ¡Desbloquea ya todo el potencial de tu workspace! 🚀',
  notAuthenticatedWorkspaceBanner: '¡Regístrate para desbloquear todo el potencial de tu workspace!',
  trialWorkspaceCTA: '¡Vamos!',
  notAuthenticatedWorkcpaceCTA: 'Registrarse',
  trialExpired: '😢 Tu período de prueba ha expirado. Ya no puedes acceder a las funciones de administración. ¡Desbloquea ahora todo el potencial de tu workspace!',
  toast: {
    courseSaveSuccess: 'Curso guardado correctamente',
    courseSaveAndNotifySuccess: 'Curso guardado correctamente y se notificó a los alumnos',
    courseCreatedSuccess: '¡Curso {name} creado con éxito!',
    courseCreatedError: 'Ocurrió un error al crear el curso {name}: {err}',
    coursePublishSuccess: 'Curso publicado correctamente',
    courseUnpublishSuccess: 'Curso despublicado correctamente',
    courseCloneSuccess: 'Curso clonado correctamente',
    courseDeleteSuccess: 'Curso {name} eliminado correctamente',
    courseArchiveSuccess: 'Curso {name} archivado con éxito',
    courseUnarchiveSuccess: 'Curso {name} desarchivado con éxito',
    courseDeleteError: 'Hubo un error al eliminar el curso',
    courseArchiveError: 'Hubo un error al archivar el curso',
    courseSaveError: 'Hubo un error al guardar el curso {name}: {err}',
    courseEditingLockError: 'Este curso está siendo editado por {name}. ¿Quieres tomar el control? Se perderá el progreso de {name}.',
    courseEditingLockForced: 'La edición del curso ha sido tomada por {name}.',
    courseEditingLockByUserError: 'Estás editando este curso en otro dispositivo o pestaña. ¿Quieres continuar? Tu progreso en el otro dispositivo o pestaña se perderá.',
    editAnyway: '¡Continuar!',
    courseEditLockSuccess: 'Modo de edición del curso activado con éxito para el usuario actual',
    courseEditUnlockSuccess: 'Modo de edición del curso desactivado con éxito para el usuario actual',
    courseUrlCopiedSuccessfully: 'URL del curso copiada con éxito.',
    urlCopiedSuccessfully: 'URL copiada con éxito',
    courseUrlCopiedError: 'No se pudo copiar la URL del curso: {err}.',
    urlCopiedError: 'No se pudo copiar la URL: {err}.',
    previewWillAppearHere: 'La vista previa del código aparecerá aquí',
    checkInPopup: 'Revisar en una ventana emergente',
    workspaceChangesSaved: 'La configuración del workspace se guardó correctamente.',
    workspaceChangesSaveError: 'Hubo un error al guardar los cambios en el workspace: {err}.',
    courseOrderUpdated: 'Orden del curso actualizado correctamente: el curso {courseName} aparecerá en la posición {order}.',
    courseOrderUpdateError: 'Hubo un error al actualizar el orden del curso: {err}.',
    userNameChangedSuccessfully: 'El nombre del usuario {name} se cambió con éxito.',
    userNameChangedError: 'Hubo un error al cambiar el nombre del usuario {name}: {err}',
    userEmailChangedSuccessfully: 'El correo del usuario {name} se cambió con éxito.',
    userEmailChangedError: 'Hubo un error al cambiar el correo electrónico del usuario {name}: {err}',
    workspaceDoesntExist: 'El workspace {name} no existe.',
    giveUpWithSuccess: 'Has abandonado el curso {name} con éxito',
    giveUpError: 'Hubo un error al abandonar el curso {name}: {err}',
    reactivateWithSuccess: 'El curso {name} se reactivó con éxito',
    reactivateError: 'Ya tienes otra instancia del mismo curso en progreso. Complétala o abandónala primero.',
    archiveSuccess: 'El curso {name} fue archivado con éxito',
    archiveError: 'Hubo un error al archivar el curso {name}: {err}',
    unArchiveSuccess: 'El curso {name} fue desarchivado con éxito',
    unArchiveError: 'Hubo un error al desarchivar el curso {name}: {err}',
    certificateCantBeOpen: 'Hubo un error al obtener el certificado con uuid {uud}: {err}',
    courseTranslationSuccess: 'El curso {name} fue traducido con éxito.',
    courseTranslationError: 'Hubo un error al traducir el curso {name}: {err}',
    resetTimerSuccess: 'Temporizador de la pregunta reiniciado con éxito',
    tagDeleteSuccess: 'Etiqueta {name} eliminada con éxito',
    tagDeleteError: 'Hubo un error al eliminar la etiqueta {name}: {err}',
    defaultSaveError: 'Se produjo un error al guardar el {name}',
    forceSaveError: {
      CANNOT_DELETE_ALL_MODULES: 'Está a punto de eliminar todos los módulos del curso. Esta acción no se puede reverter. ¿Está seguro de que desea continuar?',
      CANNOT_DELETE_LEARNING_STEP: 'Hay progreso del usuario en los pasos que está a punto de eliminar. Esta acción no se puede reverter. ¿Está seguro de que desea continuar?',
      CANNOT_DELETE_LECTURES: 'Hay progreso del usuario en las lecciones que está a punto de eliminar. Esta acción no se puede reverter. ¿Está seguro de que desea continuar?',
      CANNOT_DELETE_QUESTION_ANSWER: 'Hay progreso del usuario en los cuestionarios que está a punto de eliminar. Esta acción no se puede reverter. ¿Está seguro de que desea continuar?',
      CANNOT_DELETE_SECTION: 'Hay progreso del usuario en las secciones del curso que está a punto de eliminar. Esta acción no se puede reverter. ¿Está seguro de que desea continuar?',
      CANNOT_DELETE_LEVELS: 'Hay skills asociadas con los usuarios en los activos que está a punto de eliminar. Esta acción no se puede reverter. ¿Está seguro de que desea continuar?',
      CANNOT_DELETE_GROUP: 'Está a punto de eliminar un grupo que tiene usuarios, cursos o rutas de aprendizaje asociados. Todos estos vínculos se perderán. ¿Está seguro de que desea continuar?',
      DEFAULT: 'Hay progreso del usuario en los activos que está a punto de eliminar. Esta acción no se puede reverter. ¿Está seguro de que desea continuar?'
    }
  },
  welcome: '<span class="welcome">Bienvenido</span> al mundo de la educación en línea<br>y el intercambio de conocimiento',
  forum: {
    title: 'Foro',
    sortingOptions: {
      newest: 'Más recientes primero',
      oldest: 'Más antiguos primero',
      mostPopular: 'Más populares'
    },
    comment: 'Comentar',
    leaveComment: 'Deja un comentario',
    actions: {
      edit: 'Editar',
      follow: 'Seguir',
      reply: 'Responder',
      delete: 'Eliminar'
    },
    uploadImage: 'Subir imagen',
    socialLearning: {
      DISABLED: 'Foro desactivado',
      DISQUS: 'Activar foro Disqus',
      WORKADEMY: 'Activar foro Workademy'
    },
    toCourse: 'Volver al curso',
    toForum: 'Ir al foro del curso',
    supportedText: 'Selecciona un archivo {supported}',
    moreComments: 'Más comentarios',
    moreReplies: 'Más respuestas',
    generalThreads: 'Hilos generales',
    lecturesThreads: 'Hilos de las lecciones'
  },
  dialogs: {
    editRichText: 'Editar texto enriquecido',
    saveAndClose: 'Guardar y cerrar',
    confirmationDialog: {
      defaultDialog: {
        title: '¿Estás seguro?',
        confirmButton: '¡Sí!',
        cancelButton: 'Cancelar'
      },
      confirmQuitScormCourse: {
        title: '¿Realmente quieres salir del curso?',
        subtitle: '¡No te preocupes! Puedes reanudar desde donde lo dejaste.',
        confirmButton: 'Sí, salir ahora'
      },
      confirmQuitScormLecture: {
        title: '¿Estás seguro de que quieres salir de la lección?',
        subtitle: '¡No te preocupes! Puedes reanudar la lección desde donde la dejaste.',
        confirmButton: 'Sí, salir ahora'
      }
    }
  },
  share: {
    shareDialogTitle: 'Compartir',
    doneButtonText: 'Hecho'
  },
  layout: {
    getStarted: 'Comenzar'
  },
  landing: {
    welcome: '<span class="welcome">Bienvenido</span> al mundo de la educación en línea<br>y el intercambio de conocimiento',
    goToCatalog: 'Explora nuestros cursos',
    learnAndShare: 'Aprende y comparte tus conocimientos con {title}',
    learnIconText: 'Nunca dejes de aprender, accede a contenido de alta calidad con {title}',
    viewAllCatalog: 'Ver todo el catálogo',
    allowsToLearnAndTeach: '{title} te permite aprender y enseñar',
    beingABridge: 'siendo un puente entre los que poseen conocimiento y quienes lo necesitan',
    everywhereIconText: 'Usa cualquier dispositivo, cualquier sistema, en cualquier lugar',
    communityIconText: 'Participa en la red, sé parte de la comunidad',
    teachIconText: 'La forma más eficaz de aprender es enseñar. Desbloquea tu potencial docente con {title}',
    learn: 'Aprender',
    everywhere: 'En cualquier lugar',
    community: 'Comunidad',
    teach: 'Enseñar',
    areYouReady: '¿Estás listo para unirte al mundo de la educación en línea y compartir conocimiento?',
    viewAllCourses: 'todos los cursos',
    viewMyDashboard: 'mi panel',
    comingSoon: 'Este podría ser tu workspace. ¡Habla con nosotros!',
    footerDisclaimer: ''
  },
  dashboard: {
    dashboardTitle: 'Panel de control',
    coursesInProgressTitle: 'Cursos',
    coursesInProgressSubtitle: 'Cursos en los que estás inscrito actualmente',
    coursesCompletedTitle: 'Cursos completados',
    coursesCompletedSubtitle: 'Cursos que ya has completado',
    learningPathsInProgressTitle: 'Rutas de aprendizaje',
    learningPathsCompleted: 'Rutas de aprendizaje completadas',
    achievementsTitle: 'Logros',
    achievementsDescription: 'Haz clic en una tarjeta de logro para añadir el marco de logro a tu avatar.',
    searchLearningPaths: 'Buscar rutas de aprendizaje',
    searchCourseFolders: 'Buscar carpetas de cursos',
    filters: {
      searchLearningPaths: 'Buscar rutas de aprendizaje',
      search: {
        learningPaths: 'Buscar rutas de aprendizaje',
        courses: 'Buscar cursos'
      },
      showCoursesTitle: {
        all: 'Mostrar cursos <strong>(todos)</strong>',
        completed: 'Mostrar cursos <strong>(completados)</strong>',
        active: 'Mostrar cursos <strong>(activos)</strong>',
        archived: 'Mostrar cursos <strong>(archivados)</strong>'
      },
      showAllCourses: 'Mostrar todos los cursos',
      showActiveCourses: 'Mostrar cursos activos',
      showCompletedCourses: 'Mostrar cursos completados',
      showArchivedCourses: 'Mostrar cursos archivados',
      showLearningPathsTitle: {
        all: 'Mostrar rutas de aprendizaje <strong>(todas)</strong>',
        completed: 'Mostrar rutas de aprendizaje <strong>(completadas)</strong>',
        active: 'Mostrar rutas de aprendizaje <strong>(activas)</strong>',
        archived: 'Mostrar rutas de aprendizaje <strong>(archivadas)</strong>'
      },
      showAllLearningPaths: 'Mostrar todas las rutas de aprendizaje',
      showActiveLearningPaths: 'Mostrar rutas de aprendizaje activas',
      showCompletedLearningPaths: 'Mostrar rutas de aprendizaje completadas',
      showArchivedLearningPaths: 'Mostrar rutas de aprendizaje archivadas'
    },
    notFound: {
      course: {
        notEnrolled: {
          title: 'No estás inscrito en ningún curso.',
          description: 'Consulta la lista de cursos para inscribirte.'
        },
        notFound: {
          title: 'No se han encontrado cursos.',
          description: 'Cambia los criterios de búsqueda.'
        },
        noCompleted: {
          title: 'Todavía no has completado ningún curso.',
          description: 'Consulta tus cursos activos e intenta completarlos.'
        }
      },
      learningPath: {
        notEnrolled: {
          title: 'No estás inscrito en ninguna ruta de aprendizaje.'
        },
        notFound: {
          title: 'No se han encontrado rutas de aprendizaje.',
          description: 'Cambia los criterios de búsqueda.'
        },
        noCompleted: {
          title: 'Aún no has completado ninguna ruta de aprendizaje.',
          description: 'Revisa tus cursos activos e intenta completarlos.'
        }
      }
    }
  },
  quiz: {
    questionNFrom: 'Pregunta {questionNumber} de {quizLength}',
    questionN: 'Pregunta {questionNumber}',
    checkTheAnswer: 'Comprobar la respuesta',
    checkTheDroppable: '¡He terminado!',
    associationQuestionExplanation: 'Haz clic en el elemento y luego en la categoría correspondiente. Cuando hayas terminado, haz clic en el botón COMPROBAR LA RESPUESTA.',
    multipleAssociationQuestionExplanation: 'Haz clic en el elemento y luego en la categoría correspondiente. Un elemento puede pertenecer a más de una categoría. Cuando hayas terminado, haz clic en el botón COMPROBAR LA RESPUESTA.',
    sortingQuestionExplanation: 'Arrastra y suelta los elementos para colocarlos en el orden correcto. Cuando hayas terminado, haz clic en el botón COMPROBAR LA RESPUESTA.',
    numberOfQuestions: 'Sin puntos | Un punto | {n} puntos',
    noTries: 'Comprueba tus respuestas',
    noCorrect: '¡Sigue intentándolo!',
    allCorrect: '¡Buen trabajo! ¡Respondiste correctamente todas las preguntas!',
    allCorrectVariants: ['¡Buen trabajo!', '¡Bien hecho!', '¡Excelente!'],
    numberOfCorrect: '¡Bien hecho! | ¡Bien hecho! Tienes 1 respuesta correcta de {length} preguntas | ¡Bien hecho! Tienes {correct} respuestas correctas de {length} preguntas',
    usedAttempts: 'Has utilizado {wrongCount} de {wrongLimit} intentos posibles',
    questionType: 'Tipo de pregunta',
    newAnswer: 'Cambia aquí el texto de la respuesta',
    addAnswer: 'Añadir respuesta',
    answerText: 'Texto de la respuesta',
    explanationText: 'Texto de la explicación',
    correctAnswerSize: 'respuestas correctas: {size}',
    questionWeight: 'Peso de la pregunta',
    questionPoints: 'Puntos posibles: {points}',
    questionTimerTimeUp: '¡Se acabó el tiempo! No completaste la pregunta en el tiempo asignado. Contacta con tu administrador para obtener ayuda.',
    questionTimerMessage: 'Tienes <strong class="primary--text">{time}</strong> para completar esta pregunta. Asegúrate de estar listo antes de comenzar.',
    feedback: {
      correct: 'Correcto',
      incorrect: 'Incorrecto',
      tryAgain: 'Incorrecto, intenta nuevamente',
      noAttemptsLeft: 'Incorrecto, no quedan más intentos'
    },
    types: {
      MultipleChoice: 'Opción múltiple',
      SingleChoice: 'Elección única',
      Categorization: 'Asociación simple',
      MultipleAssociation: 'Asociación múltiple',
      SingleOrdering: 'Ordenación',
      OpenAnswer: 'Respuesta abierta'
    },
    itemsToSortLabel: 'Elementos a ordenar',
    sortedItemsLabel: 'Elementos ordenados',
    itemsToCategoriseLabel: 'Elementos a organizar',
    categories: 'Categorías',
    categoriesQuestion: {
      itemNumber: 'Elemento ',
      categoryNumber: 'Categoría '
    },
    uploadFile: 'Subir archivo',
    typeYourAnswerHere: 'Escribe aquí tu respuesta',
    yourFile: 'Tu archivo',
    submitAnswer: 'Enviar respuesta',
    fileURL: 'URL del archivo',
    noFileUploaded: 'Todavía no se ha subido ningún archivo',
    answerSubmittedWaiting: 'Respuesta enviada. Esperando evaluación. Aún puedes editarla.',
    answerSubmittedWrongAttemptsLeft: 'Respuesta enviada. Es incorrecta. Aún puedes editarla.',
    answerSubmittedWrong: 'Respuesta enviada. Es incorrecta. Ya no puedes editarla.',
    answerSubmittedRight: 'Tu respuesta es correcta.',
    showCorrectAnswer: 'Mostrar la respuesta correcta'
  },
  courseTree: {
    courseOutlineTitle: 'Esquema del curso',
    courseWillStart: '✌️Este curso comenzará el {date} 🗓.<br>Por favor, usa el menú para salir de esta pantalla 👋',
    courseFinished: 'Este curso finalizó el {date} 🗓.<br>Por favor, usa el menú para salir de esta pantalla 👋',
    courseExpired: 'Este curso ha expirado 🗓.<br>Por favor, usa el menú para salir de esta pantalla 👋',
    coursePendingAproval: 'Tu inscripción en este curso requiere la aprobación de un administrador del curso.<br>Por favor, usa el menú para salir de esta pantalla 👋',
    modulesTitle: 'Estructura del curso',
    sidebarTitle: 'Información práctica',
    tagsTitle: 'Etiquetas del curso',
    moduleAvailableFrom: 'Disponible desde {from}',
    moduleAvailableFromUntil: 'Disponible desde {from} hasta {until}',
    moduleAvailableFromUntilMobile: '{from}-{until}',
    practicalInfo: {
      availableFrom: 'Este curso comienza el:',
      availableFromPast: 'Este curso comenzó el:',
      availableUntil: 'Este curso finaliza el:',
      availableUntilPast: 'La inscripción hasta:',
      expiresIn: 'Este curso expira el:',
      doesntExpire: 'Este curso nunca expira',
      courseDuration: 'Duración de este curso:',
      startedCourse: 'Te inscribiste en este curso el:',
      quizzesText: 'Este curso tiene:',
      numberOfQuestions: 'Sin puntos | {n} punto | {n} puntos',
      numberOfAnswers: 'Aún no has obtenido ningún punto | Has obtenido un punto | Has obtenido {questions} puntos!',
      yourScore: 'Tu puntuación:',
      addToCalendar: 'Agregar al calendario'
    },
    gamification: {
      gamificationTitle: 'Tus logros',
      moreXToGo: 'Faltan {x}',
      checkAllAchievements: 'Haz clic aquí para ver tus logros',
      achievementUnlocked: '¡Acabas de desbloquear un nuevo logro!',
      goToAchievement: 'Ir a logros'
    },
    lectureIsNotSeenExplanation: 'Marca la lección como vista para poder continuar con la siguiente.',
    lectureIsNotDoneExplanation: 'Marca la lección como vista y responde las preguntas de la lección para continuar con la siguiente.',
    lectureIsNotStartedExplanation: 'La siguiente lección aún no está disponible.'
  },
  lecture: {
    workbook: 'Libro de trabajo',
    quiz: 'Por favor, responde las siguientes preguntas',
    quizDescription: 'Instrucciones para el cuestionario',
    previous: 'Lección anterior',
    next: 'Siguiente lección',
    duration: 'Duración {duration} minutos',
    durationUnknown: 'Tiempo de finalización: desconocido',
    numberOfQuestions: 'Sin preguntas | 1 pregunta | {size} preguntas',
    questionsSize: 'Sin puntos | 1 punto | {size} puntos',
    goToLecture: 'Ir a la lección',
    goToQuiz: 'Ir al cuestionario',
    questionAnswersSize: 'Preguntas: {total}',
    questionsAnswered: '{right}/{total} preguntas',
    pointsRight: '{right}/{total} puntos',
    continue: 'Continuar',
    liveLecture: {
      addToGoogleCalendar: 'Añadir a Google Calendar',
      addToOutlookCalendar: 'Añadir a calendario Office365 Outlook',
      addToMicrosoftLiveCalendar: 'Añadir a calendario Microsoft Live',
      joinLecture: 'Haz clic aquí para unirte al webinar',
      startsIn: 'Este webinar comienza ',
      started: 'El webinar ha comenzado ',
      passed: 'Este webinar ya ha terminado',
      areYouGoing: '¿Asistirás?',
      yes: 'Sí',
      no: 'No'
    },
    dialog: {
      isTyping: 'está escribiendo'
    }
  },
  buttons: {
    add: 'Añadir',
    remove: 'Eliminar',
    register: 'Registrarse',
    open: 'Abrir',
    new: '¡Nuevo!',
    exploreCourse: 'Revisar curso',
    testCertificate: 'Mostrar certificado',
    printableVersion: 'Abrir versión imprimible',
    clone: 'Clonar',
    resume: 'Continuar curso',
    enroll: 'Inscribirse',
    enrollAndPay: 'Inscribirse y pagar',
    payAndEnroll: 'Inscribirse y pagar {amount} {currency}',
    goToCourse: 'Ir al curso',
    resumeCourse: 'Continuar curso',
    viewCourse: 'Ver curso',
    loginAndEnroll: 'Inscribirse',
    login: 'Iniciar sesión',
    cancel: 'Cancelar',
    giveUp: 'Abandonar',
    archive: 'Archivar',
    unarchive: 'Desarchivar',
    archiveCourse: 'Archivar curso',
    unarchiveCourse: 'Desarchivar curso',
    chooseLanguage: 'Selecciona el idioma preferido',
    playVideo: 'Reproducir vídeo',
    backToTimeline: 'Volver al índice',
    nextLecture: 'Siguiente lección',
    subscribeToUpdates: 'Recibir notificaciones',
    subscribeToUpdatesBig: 'Quiero recibir notificaciones sobre este curso',
    goToTheMarketplace: 'Ir al marketplace',
    goToTheLecture: 'Ir a la lección {lecture}',
    goToTheLastLecture: 'Continuar curso',
    goToTheLastQuiz: 'Continuar certificación',
    startCourse: 'Comenzar curso',
    startCertification: 'Comenzar certificación',
    getCertificate: 'Obtener certificado',
    openCertificate: 'Abrir certificado',
    reactivate: 'Reactivar',
    completeCourse: 'Completar curso',
    backToTheCourse: 'A la página del curso',
    viewAllCourses: 'Todos los cursos',
    viewAllTopics: 'Todos los temas',
    viewMyDashboard: 'Mi panel',
    viewMyCourses: 'Mis cursos',
    topNewCourses: 'Últimos cursos',
    goToSettings: 'Mis ajustes',
    goToLearnerProfile: 'Perfil del estudiante',
    goToOrganization: 'Organización',
    goToAdmin: 'Área de administrador',
    toggleDark: 'Alternar modo oscuro',
    toggleCompleted: 'Mostrar completados',
    toggleViewAsNonAdmin: 'Ver como usuario normal',
    logout: 'Cerrar sesión',
    languages: 'Idiomas',
    toggleEditingMode: 'Modo edición',
    deleteText: 'eliminar',
    save: 'Guardar',
    markAsSeen: 'Marcar como visto',
    attendedLiveLecture: 'Asistí al webinar',
    lectureSeen: 'Has completado esta lección',
    manageCourses: 'Gestionar cursos',
    manage: 'Gestionar',
    edit: 'Editar',
    export: 'Exportar curso',
    ok: 'Aceptar',
    switchSignUpToRegister: 'Todavía no tengo cuenta.',
    switchSignUpToLogin: 'Ya estoy registrado.',
    continue: 'Continuar',
    continueWithFacebook: 'Continuar con Facebook',
    continueWithGoogle: 'Continuar con Google',
    close: 'Cerrar',
    forceUpdate: 'Sí, continuar!',
    showDetails: 'Mostrar detalles',
    deleteCourse: 'Eliminar curso',
    translateCourse: 'Traducir curso',
    selectCourse: 'Seleccionar curso',
    deleteLearningPath: 'Eliminar ruta de aprendizaje',
    downloadCertificate: 'Descargar certificado',
    connect: 'Conectar',
    reconnect: 'Reconectar',
    sync: 'Sincronizar',
    invite: 'Invitar',
    showUsers: 'Mostrar usuarios',
    hideUsers: 'Ocultar usuarios',
    previousLecture: 'Lección anterior',
    exitFullscreenLectureMode: 'Salir del modo pantalla completa',
    enterFullscreenLectureMode: 'Entrar en modo pantalla completa',
    download: 'Descargar',
    addField: 'Añadir campo',
    delete: 'Eliminar',
    startOver: 'Cambiar tu elección',
    back: 'Atrás',
    continueWithOAuth: 'Continuar con {workspaceName}',
    comingSoon: 'Próximamente',
    courses: 'Todos los cursos',
    answerTypeform: 'Responder esto',
    proceed: 'Proceder',
    launchFullscreen: 'Pantalla completa',
    collapse: 'Colapsar',
    expand: 'Expandir',
    goUp: 'Ir arriba',
    locked: 'Bloqueado',
    done: 'Hecho',
    exploreLearningPath: 'Explorar',
    startNow: 'Comenzar ahora',
    uploadImage: 'Subir una imagen',
    addNew: 'Añadir nuevo',
    deleteGroup: 'Eliminar grupo',
    deleteFolder: 'Eliminar carpeta',
    deleteSkill: 'Eliminar habilidad',
    forceDeleteGroup: 'Eliminar grupo de todas formas',
    forceDeleteFolder: 'Eliminar carpeta de todas formas',
    forceDeleteSkill: 'Eliminar habilidad de todas formas',
    iAmDone: '¡He terminado!',
    clear: 'Limpiar',
    editCoverPhoto: 'Editar foto de portada',
    payAndStart: 'Pagar y comenzar',
    openInOcx: 'Abrir en OC-X'
  },
  courses: {
    duration: '{duration}',
    modulesTitle: 'Descripción del curso',
    hours: 'horas | hora | horas',
    minutes: 'minutos | minuto | minutos',
    courses: 'Todos los cursos',
    courseNotSelected: 'Curso no seleccionado',
    myCourses: 'Mi aprendizaje',
    module: 'Módulo {moduleNumber}',
    notEnrolled: '¡No estás inscrito en ningún curso!',
    noCompleted: 'Aún no has completado ningún curso',
    clickToCatalog: 'Haz clic aquí para ver el catálogo de cursos',
    exploreCourses: 'Explorar cursos',
    numberOfModules: 'módulos',
    finishAndGetCert: 'Obtener certificado',
    validUntil: 'Válido hasta {expireDate}',
    completedCoursesTitle: 'Cursos completados',
    completedCoursesSubtitle: 'Cursos que ya has completado',
    courseIsCertifiable: 'Certificado al finalizar el curso',
    achievementsEnabled: 'Logros por progreso del curso',
    noCourses: 'Todavía no estás inscrito en ningún curso. Visita la página del catálogo.',
    noLearningPaths: 'No se encontraron rutas de aprendizaje',
    noCoursesWithSearch: 'No se encontraron cursos',
    tooltipShareUrl: 'Compartir URL',
    titleCopyText: 'Copiar URL al portapapeles',
    titleTextCopied: 'URL copiada',
    buttonCopyText: 'copiar',
    buttonTextCopied: 'copiado',
    searchHeader: 'Buscar',
    searchLabel: 'Buscar cursos...',
    aiSearchLabel: 'Buscar cursos con IA...',
    aiSearchButton: 'Búsqueda con IA',
    classicSearchButton: 'Búsqueda clásica',
    aiSearchDescription: 'Entiende el lenguaje natural. Prueba: "Muéstrame cursos para ingenieros para mejorar la gestión del tiempo."',
    classicSearchDescription: 'Busca por palabras clave exactas en los títulos de los cursos, descripciones y contenido.',
    totalFound: 'No se encontraron cursos | <strong>{n}</strong> curso encontrado | <strong>{n}</strong> cursos encontrados',
    tagsHeader: 'Etiquetas ({tags} seleccionadas)',
    durationHeader: 'Duración ({durations} seleccionadas)',
    resetFilters: 'Restablecer filtros',
    filtersTitle: 'Filtros',
    applyFilters: 'Aplicar filtros',
    durations: {
      less30: 'menos de 30 minutos',
      between30and2: 'entre 30 minutos y 2 horas',
      between2and4: 'entre 2 y 4 horas',
      more4: 'más de 4 horas'
    },
    tags: {
      loadMore: 'Cargar más...',
      loadLess: 'Cargar menos...',
      noTags: 'No se encontraron etiquetas',
      deleteTag: 'eliminar etiqueta'
    },
    anonymousNotAllowed: 'Debes estar inscrito en el curso para ver el contenido',
    badge: {
      template: 'plantilla',
      external: 'externo',
      scorm: 'scorm',
      umbrella: 'umbrella',
      requiresApproval: 'requiere aprobación',
      archived: 'archivado',
      inactive: 'inactivo',
      paymentMissing: 'pago pendiente'
    },
    paidCourses: {
      payNowHeader: 'Pagar ahora {amount} {currency}',
      payNowDescription: 'Después de realizar el pago tendrás acceso al curso',
      payNowButton: 'Pagar ahora',
      paymentSucceeded: 'El pago del curso {name} se realizó correctamente',
      paymentFailed: 'El pago del curso {name} falló: {err}',
      finalisingPayment: 'Finalizando tu pago, espera un momento...⏳',
      voucherCode: 'Código de cupón',
      applyButton: 'Aplicar',
      payWithLiqpay: 'Pagar con LiqPay',
      payAmountCurrency: 'Pagar {amount} {currency}',
      vatIncluded: '(IVA incluido)',
      applyPromocode: 'Si tienes un código promocional, introdúcelo a continuación.',
      checkYourSettings: 'Revisa tu país y la configuración de tu identificación fiscal',
      confirmSettingsAndProceed: 'Confirmar configuración y continuar',
      wrongTaxId: 'Formato de identificación fiscal incorrecto. El formato correcto es <strong>{correctFormat}</strong>.<br>Actualiza la página e inténtalo de nuevo.'
    },
    failedCourse: {
      failedCourseTitle: 'Aviso importante sobre tu curso',
      failedCourseTooltip: 'Por favor, reinicia el curso para poder completarlo',
      failedCourseAlertMessage: 'Lamentablemente, no es posible obtener suficientes puntos para un certificado. Obtuviste {correct} de {total} puntos, pero no es suficiente para alcanzar el {minRate}% requerido.',
      failedCourseOneTimeEnrolment: 'No es posible reiniciar el curso. Contacta con el administrador para reinscribirte.',
      restartCourseButton: 'Reiniciar curso'
    },
    headers: {
      title: 'Título del curso',
      titleAndDescription: 'Título y descripción del curso',
      description: 'Descripción del curso',
      ordering: 'Orden del curso',
      createTime: 'Creado',
      updateTime: 'Actualizado',
      progress: 'Progreso de preguntas',
      quizProgress: 'Progreso del cuestionario',
      lecturesProgress: 'Progreso de lecciones'
    },
    published: 'Publicado'
  },
  learningPaths: {
    noCompleted: 'Todavía no has completado ninguna ruta de aprendizaje',
    noAssigned: 'Aún no tienes rutas de aprendizaje asignadas',
    numberOfCourses: 'Sin cursos | {completed}/1 curso | {completed}/{n} cursos',
    achievementsLabel: 'Logros',
    skillsLabel: 'Habilidades',
    certificateLabel: 'Certificado al final',
    progressLabel: 'Progreso',
    totalFound: 'No se encontraron rutas de aprendizaje | <strong>{n}</strong> ruta de aprendizaje encontrada | <strong>{n}</strong> rutas de aprendizaje encontradas',
    item: {
      title: 'Título y descripción',
      steps: 'Pasos',
      progress: 'Progreso',
      actions: 'Acciones'
    }
  },
  courseFolders: {
    createFolder: 'Crear nueva carpeta',
    editFolder: 'Editar carpeta',
    folderNamePlaceholder: 'Nombre de la carpeta',
    selectFolderPlaceholder: 'Seleccionar carpeta del curso',
    addToFolderTitle: 'Añadir a carpeta',
    removeCourseFromFolder: 'Eliminar curso de la carpeta',
    folderDescriptionPlaceholder: 'Descripción de la carpeta',
    totalFound: 'No se encontraron carpetas de cursos | <strong>{n}</strong> carpeta de cursos encontrada | <strong>{n}</strong> carpetas de cursos encontradas',
    noCourseFoldersFound: 'No se encontraron carpetas',
    folderCourses: 'Sin cursos | {n} curso | {n} cursos | {n} cursos',
    item: {
      titleAndDescription: 'Título y descripción',
      noCourses: 'Número de cursos',
      actions: 'Acciones'
    }
  },
  auth: {
    or: 'O',
    dontHaveAnAccountYet: '¿Todavía no tienes una cuenta?',
    enterPassword: 'Introduce tu contraseña',
    enterPhone: 'Introduce tu número de teléfono',
    atLeastChars: 'Al menos {numberCharacters} caracteres',
    forgotPassword: '¿Olvidaste tu contraseña?',
    resetPassword: {
      title: 'Restablecer contraseña',
      description: 'Introduce tu dirección de correo electrónico y te enviaremos instrucciones para restablecer tu contraseña.',
      placeholder: 'Correo electrónico',
      button: 'Restablecer contraseña',
      info: 'Si no recibes nuestro correo en unos minutos, revisa tu carpeta de spam.',
      support: 'El correo será enviado desde info@theworkademy.com',
      passwordResetSuccess: '<b>¡Perfecto!</b> Las instrucciones para restablecer tu contraseña se enviaron por correo electrónico.',
      changePasswordTitle: 'Cambiar contraseña',
      changePasswordDesc: 'Introduce la contraseña que deseas utilizar.',
      passwordChangeSuccess: '<b>¡Perfecto!</b> Contraseña actualizada correctamente. Ahora estás conectado con tu nueva contraseña.',
      passwordChangeSuccessAndLogin: '<b>¡Perfecto!</b> Contraseña actualizada correctamente. Ya puedes iniciar sesión con tu nueva contraseña.'
    },
    nameLabel: 'Nombre',
    namePlaceholder: 'Juan Pérez',
    emailLabel: 'Correo electrónico',
    join: '¡Únete!',
    alreadyHaveAccount: '¿Ya tienes una cuenta?',
    loginNow: '¡Inicia sesión ahora!',
    token: 'Token',
    newPassword: 'Nueva contraseña',
    repeatPassword: 'Repite la nueva contraseña',
    passwordRequired: 'La contraseña es obligatoria',
    passwordRule: 'La contraseña debe tener al menos 8 caracteres y no exceder {maxChars} caracteres',
    passwordShouldMatch: 'Las contraseñas deben coincidir',
    emailRequired: 'El correo electrónico es obligatorio',
    emailValid: 'El correo electrónico debe ser válido',
    nameRequired: 'El nombre es obligatorio',
    nameLessThan: 'El nombre debe tener menos de {MAX_NAME_LENGTH} caracteres',
    passwordValid: 'La contraseña debe tener al menos 8 caracteres y no exceder {MAX_PASSWORD_LENGTH} caracteres',
    repeatPasswordRequired: 'Por favor, repita la contraseña',
    passwordsDontMatch: 'Las contraseñas no coinciden',
    phoneValid: 'El número de teléfono debe ser válido',
    profilePicture: 'Foto de perfil',
    pictureLabel: 'URL de la foto de perfil',
    pictureHint: 'Copia el enlace a tu foto de perfil favorita',
    phone: 'Número de teléfono',
    city: 'Ciudad',
    street: 'Calle',
    postalCode: 'Código postal',
    country: 'País',
    addressAndPhoneTitle: 'Dirección y número de teléfono',
    taxIdTitle: 'Identificación fiscal',
    changePassword: 'Cambiar contraseña',
    oldPasswordLabel: 'Contraseña actual',
    newPasswordLabel: 'Nueva contraseña',
    phoneLabels: {
      countrySelectorLabel: 'Código del país',
      countrySelectorError: 'Selecciona un país',
      phoneNumberLabel: 'Número de teléfono',
      example: 'Ejemplo:'
    },
    consentRule: 'Debes aceptar la política de privacidad para continuar',
    consentLabel: 'Acepto la <a href="{url}" target="_blank">política de privacidad</a>',
    loginSuccessful: 'Inicio de sesión exitoso',
    registrationSuccessful: 'Registro exitoso',
    loginWithEmail: 'Iniciar sesión con correo electrónico',
    registerWithEmail: 'Registrarse con correo electrónico',
    alreadyHaveAnAccount: '¿Ya tienes una cuenta?',
    loginTitle: 'Iniciar sesión',
    registerTitle: 'Registrarse',
    loginDisclaimer: '',
    registerDisclaimer: '',
    whereToGoTitle: '¿A qué workspace de Workademy quieres ir?',
    whereToGoSubtitle: 'Escribe el nombre de tu workspace de Workademy. Por ejemplo, "workademy"',
    workspaceNameLabel: 'Nombre del workspace',
    workspaceNamePlaceholder: 'workademy',
    backToRipplingButton: 'Volver a Rippling',
    proceedToWorkspaceButton: 'Ir a {name}',
    loginWithRippling: 'Iniciar sesión con Rippling',
    loginWithDeel: 'Iniciar sesión con Deel',
    loginWithOCID: 'Iniciar sesión con OC ID',
    createNewWorkspace: 'O crea un nuevo workspace'
  },
  errors: {
    '-1': 'Ocurrió un error desconocido',
    1000: 'Este nombre de usuario ya existe',
    1001: 'Usuario no encontrado',
    1002: 'Nombre de usuario o contraseña incorrectos',
    1003: 'Nombre de usuario o contraseña incorrectos',
    1004: 'Credenciales incorrectas',
    1100: 'Token no válido',
    1101: 'El token ha expirado',
    59: 'Credenciales incorrectas o usuario y contraseña no coinciden',
    1300: 'Condición previa no cumplida: El curso aún no está completo.',
    1500: 'No se encontró un cupón con el código {code}',
    1501: 'El cupón con código {code} ya ha sido utilizado',
    popup_closed_by_user: 'La ventana emergente de autenticación con Google se cerró',
    9905: 'Verifica tu configuración de correo electrónico en Facebook. El correo electrónico debe estar verificado.',
    9904: 'No se pudo autenticar con Personio. Comprueba las credenciales.',
    LOCKED: 'Tu cuenta está bloqueada. Restablece tu contraseña',
    PASSWORD_DONT_MATCH: 'Tu contraseña no coincide',
    1302: 'Ya estás inscrito en este curso. Solo es posible inscribirse una vez.',
    1307: 'Existe un período de espera de <strong>{period}</strong> antes de que puedas tomar este curso nuevamente',
    1308: 'No es posible inscribirse: ya has completado este curso y la inscripción está limitada a una sola vez.'
  },
  footer: {
    platformDescription: '<strong>{title}</strong> es una plataforma de e-learning centrada en las últimas tendencias en adquisición de conocimientos y motivación',
    links: 'Enlaces',
    contacts: 'Contactos',
    github: 'GitHub',
    foundIssues: '¿Encontraste algún problema?',
    submitThem: '¡repórtalo!',
    privacyUrl: 'https://www.theworkademy.com/privacy',
    workademyPrivacyLabel: 'Política de privacidad de Workademy',
    privacyLabel: 'Política de privacidad',
    contentLabel: 'Política de contenido',
    tacUrl: 'https://www.theworkademy.com/tac',
    workademyTacLabel: 'Términos y condiciones de Workademy',
    tacLabel: 'Términos y condiciones',
    contactUsTitle: '¡Contáctanos!',
    contactUsText: 'Si tienes preguntas o encuentras un error en algún curso, ¡escríbenos!',
    supportEmail: 'support@theworkademy.com',
    poweredBy: 'impulsado por <a href="{companyUrl}" target="_blank" class="company-link">{company}</a>'
  },
  progress: {
    go: '¡Vamos, vamos! Solo {completed} respondidas de {total}',
    nice: '¡Muy bien! {completed} de {total}. ¡Sigue así!',
    almost: '¡Casi listo! {completed} de {total}.',
    done: '¡Eres un héroe! {completed} de {total}.',
    shorten: '{completed}/{total}',
    courseScore: 'Tu puntuación en el curso: <strong>{percentage}%</strong>',
    yourProgress: 'Mi progreso',
    answeredQuestions: '<strong>{score}</strong> puntos en preguntas respondidas correctamente',
    seenLecture: '<strong>{score}</strong> lecciones vistas',
    yourScore: 'Puntuación: {score}',
    noScore: 'Este curso no tiene cuestionarios',
    questionsProgress: 'Has respondido al {progress}% de preguntas ({correct}/{total})',
    lecturesProgress: 'Has completado el {progress}% de lecciones ({correct}/{total})',
    overallProgress: 'Has respondido el {progressQuestions}% ({correctQuestions}/{totalQuestions}) de preguntas y completado el {progressLectures}% ({correctLectures}/{totalLectures}) de lecciones.'
  },
  settings: {
    settings: 'Ajustes',
    changeSettings: 'Cambiar ajustes',
    changeSettingsSuccess: '¡Tus cambios se han guardado correctamente!',
    changeSettingsError: 'Hubo un error al cambiar tus ajustes: {err}.',
    passwordChangeSuccess: 'Tu contraseña se cambió correctamente.',
    passwordChangeError: 'Hubo un error al cambiar tu contraseña: {err}.',
    language: 'Idioma',
    takeMeBack: 'Volver',
    userPic: {
      change: 'Subir nueva foto de perfil (png o jpeg)',
      add: 'Añadir foto de perfil (png o jpeg)',
      chooseYourAvatar: 'Avatares'
    }
  },
  learnerProfile: {
    learnerProfile: 'Perfil del estudiante',
    achievementsTitle: 'Mis logros',
    skillsTitle: 'Mis habilidades',
    viewAll: 'Ver todo',
    courses: 'Cursos',
    learningPaths: 'Rutas de aprendizaje',
    achievements: 'Logros',
    skills: 'Habilidades',
    level: 'Nivel',
    frames: 'Marcos de gamificación',
    points: 'Puntos del curso',
    learningTime: 'Tiempo de aprendizaje'
  },
  organization: {
    organization: 'Mi organización',
    skills: 'Habilidad | Habilidades',
    members: 'Miembro | Miembros',
    level: 'Nivel',
    noGroupsYet: 'Todavía no hay grupos organizacionales creados.',
    noGroupsAdmin: 'Todavía no hay grupos creados. Crea grupos para ver aquí la estructura organizacional.',
    createGroupsBtn: 'Crear grupos',
    points: 'Puntos del curso',
    loadMoreUsers: 'cargar más usuarios...'
  },
  certificates: {
    congratulations: '¡Felicidades, has calificado para un certificado!',
    eligibleHeadline: '👉 Puntuación: {score}. Al alcanzar esta puntuación, puedes obtener tu certificado. El curso termina, pero los materiales seguirán accesibles en tu panel de control.',
    eligibleHeadlineCombined: '👉 Progreso alcanzado: {score} respuestas correctas y {lectures} lecciones completadas. Al alcanzar este nivel, puedes obtener tu certificado. El curso termina, pero los materiales seguirán accesibles en tu panel de control.',
    youCanCancel: '👉 Puedes continuar tu curso ahora y reclamar tu certificado más tarde. La opción de reclamo seguirá disponible.',
    checkNameText: '⚠️ ¡Atención! Asegúrate de que tu nombre en la configuración del certificado es correcto:',
    changeNameInSettingsText: 'Para corregir el nombre, usa el botón <strong>Cambiar nombre</strong> y luego regresa aquí.',
    generateForName: 'Confirmo la emisión del certificado a nombre de <strong>{name}</strong>.',
    writeYourName: 'El certificado será emitido a nombre de {name}. ' +
      'Para confirmar, por favor escribe tu nombre nuevamente. Si este no es el nombre correcto, cámbialo primero en tu configuración.',
    writeYourNameLabel: 'Escribe tu nombre',
    yourPercentage: 'Has obtenido <strong>{score}%</strong>. ¡Aún puedes intentar obtener más!',
    getMoreButton: 'Volver al curso',
    notEligibleHeadline: 'Aún no eres elegible',
    notEligibleText: 'Vuelve al curso y responde las preguntas restantes',
    notEligibleOkButton: 'Ok, entiendo qué hacer',
    eligibleZeroScoreHeadline: 'Has finalizado el curso y ahora eres elegible para el certificado. El curso siempre estará disponible en la sección de cursos completados.',
    eligibleAnsweredAll: 'Has respondido todas las preguntas del curso y ahora puedes finalizarlo. Siempre estará disponible en la sección de cursos completados.',
    eligibleReadAll: 'Has marcado todas las lecciones como leídas y ahora puedes completar el curso. Siempre estará disponible en la sección de cursos completados.',
    eligibleCancel: 'No necesitas completar el curso ahora. El botón para finalizar el curso siempre estará disponible.',
    nameInSettingsText: 'El nombre que aparece en tu configuración es',
    changeSettingsLinkText: 'Cambiar configuración',
    changeNameLinkText: 'Cambiar nombre',
    byProcedingWithCertGenText: 'Al proceder con el siguiente paso, aceptas que has finalizado el curso y que el nombre arriba indicado, {name}, se refiere a ti.',
    instructions: 'Después de recibir el certificado, serás redirigido a tu panel de control. Ya no podrás ver tus respuestas a este curso.\n' +
      'Sin embargo, podrás reinscribirte y hacerlo nuevamente.',
    generate: 'Generar certificado',
    continueToCourse: 'Continuar con el curso',
    completeCourse: 'Completar curso',
    getCertificate: 'Certificado',
    openCertificate: 'Abrir certificado',
    reactivateCourse: 'Reactivar curso',
    reactivateDialogMessage: 'Este curso tiene un certificado asociado. Si continúas, este será eliminado y esta acción no se puede deshacer. ¿Estás seguro de que deseas continuar?',
    abandonCourse: 'Abandonar curso',
    dontGenerate: 'Cancelar',
    certificateTitle: 'CERTIFICADO DE FINALIZACIÓN',
    issuedOn: 'Fecha de emisión:',
    toCertifyThat: 'para certificar que',
    hasCompletedTheCourse: 'ha completado el curso',
    hasCompletedTheLearningPath: 'ha completado la ruta de aprendizaje',
    progress: 'progreso',
    withScore: 'con una puntuación total de {score}%',
    ofADurationOf: 'con una duración de {duration}',
    withDuration: 'Con una duración de menos de una hora | Con una duración de una hora | Con una duración de {duration} horas',
    checkCertificateText: 'La autenticidad de este certificado puede verificarse en:',
    wasCreatedByWorkademy: 'El curso fue creado por <a href="https://www.theworkademy.com" target="_blank">Workademy</a> &mdash; Academy at work, Academy that works.',
    shareMyAchievement: 'Compartir mi logro',
    sharingTitle: 'Acabo de finalizar el curso {courseName}',
    sharingQuote: 'Acabo de finalizar el curso {courseName}',
    sharingDescription: 'Acabo de finalizar el curso {name} y obtuve mi certificado.',
    canGetCertificate: 'Has respondido correctamente <strong>{score}</strong> de <strong>{total}%</strong> preguntas. <br>Puedes obtener tu certificado.',
    needMoreToGetCertificate: 'Debes alcanzar <strong>{total}%</strong> de respuestas correctas. <br> Has alcanzado <strong>{score}</strong>.',
    canGetCertificateLectures: 'Has leído <strong>{score}</strong> de <strong>{total}%</strong> de las lecciones. <br>Puedes obtener tu certificado.',
    needMoreToGetCertificateLectures: 'Debes completar <strong>{total}%</strong> de las lecciones. <br> Has completado <strong>{score}</strong> hasta ahora.',
    canGetCertificateBoth: 'Has respondido correctamente <strong>{totalScore}%</strong> de las preguntas y completado <strong>{totalLectures}%</strong> de las lecciones. <br>Puedes obtener tu certificado.',
    needMoreLectures: 'Has respondido suficientes preguntas para calificar, pero necesitas completar <strong>{totalLectures}%</strong> de las lecciones. <br> Has completado <strong>{score}</strong> hasta ahora.',
    needMoreQuestions: 'Has completado suficientes lecciones para calificar, pero necesitas responder <strong>{totalScore}%</strong> de las preguntas correctamente. <br> Has respondido <strong>{score}</strong> correctamente hasta ahora.',
    needMoreQuestionsAndLectures: 'Para calificar para el certificado, debes responder <strong>{totalScore}%</strong> de las preguntas correctamente y completar <strong>{totalLectures}%</strong> de las lecciones. <br> Has respondido <strong>{score}</strong> preguntas correctamente y completado <strong>{lecturesSeen}</strong> de las lecciones hasta ahora.',
    givenUpCourse: 'Parece que abandonaste este curso. Debes reiniciarlo si deseas obtener un certificado.',
    courseCompletedWithSuccess: 'Curso {name} completado con éxito.',
    youHaveToAnswerAllQuestions: 'Debes responder todas las preguntas para poder completar el curso.',
    youHaveToCompleteAllLectures: 'Debes completar todas las lecciones para poder completar el curso.',
    youHaveAnsweredAllQuestions: 'Has respondido todas las preguntas del curso y ahora puedes completarlo.',
    youHaveCompletedAllLectures: 'Has completado todas las lecciones del curso y ahora puedes finalizarlo.',
    youHaveAlreadyCompleted: 'Has completado este curso.',
    youCompletedCertification: 'Has completado esta certificación.',
    eligibleAllCertification: 'Has respondido correctamente todos los cuestionarios y ahora puedes completar esta certificación. Siempre estará disponible en la sección de cursos completados.',
    eligibleCancelCertification: 'No necesitas completar la certificación ahora. El botón para finalizar la certificación siempre estará disponible.',
    youHaveAlreadyCertificate: 'Tu certificado ya ha sido emitido. Haz clic en el botón para acceder a él.',
    shareOnLinkedIn: 'Añadir a LinkedIn',
    cantFind: 'No se pudo encontrar el certificado con UUID {uuid}.',
    proceedToMainPage: 'Ir a la página principal',
    youHaveToCompleteExternalCourse: 'Haz clic en el botón una vez que hayas completado el curso.',
    youHaveCompletedExternalCourse: 'Ya has marcado este curso como completado.',
    finishExternalCourseTitle: 'Confirmar finalización del curso',
    finishExternalCourseSubtitle: 'Al hacer clic en el botón "Completar curso", confirmas que has finalizado este curso. Si aún no lo has terminado, selecciona "Cancelar" para regresar y continuar con el curso.'
  },
  vouchers: {
    introduceCode: 'Introduce tu código de cupón para inscribirte en el curso',
    voucherCode: 'Código de cupón'
  },
  admin: {
    drawer: {
      adminToolsDrawer: {
        title: 'Herramientas de Administración del Curso'
      }
    },
    attendance: {
      attending: 'Asistiendo:',
      notAttending: 'No asistiendo:',
      attendedLive: 'Asistido:',
      seenBy: 'Visto por:'
    },
    enroll: {
      enrollIntoCourse: 'Inscribir usuarios en el curso {name}',
      enrollIntoLearningPath: 'Inscribir usuarios en la ruta de aprendizaje {name}',
      grantFreebieButton: 'Otorgar acceso',
      grantFreebieSuccess: 'Al usuario {name} se le otorgó acceso al curso',
      grantFreebieError: 'Hubo un error al otorgar acceso al usuario {name}: {err}'
    },
    stepper: {
      basicInformationTitle: 'Información Básica',
      mediaVisualsTitle: 'Medios y Visuales',
      enrollmentAccessTitle: 'Inscripción y Acceso',
      certificationCompletionTitle: 'Certificación y Finalización',
      courseFeaturesTitle: 'Curso y Funcionalidades',
      commercialSettingsTitle: 'Configuración Comercial',
      miscellaneousTitle: 'Misceláneos',
      externalUrlTitle: 'Fuente',
      title: 'Título del curso *',
      titleDesc: 'Establece el nombre del curso.',
      descriptionTitle: 'Descripción',
      descriptionDesc: 'Escribe un resumen breve o una descripción detallada del curso.',
      tagsTitle: 'Etiquetas',
      tagsDesc: 'Añade etiquetas para clasificar el contenido del curso.',
      durationTitle: 'Duración',
      durationDesc: 'Especifica la duración del curso.',
      durationLabel: 'Duración en minutos',
      typeTitle: 'Tipo de curso',
      typeDesc: 'Define el tipo de curso según su propósito. Cada tipo está diseñado para un enfoque específico de aprendizaje o certificación.',
      typeLabel: 'Selecciona el tipo de curso',
      types: {
        base: 'Curso básico',
        external: 'Curso externo',
        SCORM: 'SCORM',
        certification: 'Curso de certificación',
        umbrella: 'Curso paraguas'
      },
      cardImageTitle: 'Imagen de la tarjeta del curso',
      cardImageDesc: 'Carga la imagen que representa al curso en los listados.',
      coverImageChooser: 'Elige la imagen de portada del curso',
      useDefaultCover: 'Usar portada por defecto',
      wideCoverTitle: 'Imagen amplia de portada del curso',
      wideCoverDesc: 'Establece la imagen amplia de portada para vistas detalladas del curso.',

      externalTitle: 'URL externa',
      externalDesc: 'Establece una URL para dirigir a los estudiantes al material externo.',
      externalLabel: 'Enlace para apuntar la tarjeta del curso externo',

      anonymousAllowedTitle: 'Requisito de autenticación',
      anonymousAllowedDesc: 'Decide si los usuarios pueden inscribirse sin necesidad de autenticación.',
      anonymousAllowedLabel: 'Permitido anónimo',
      availableFromUntilTitle: 'Fechas de inicio y fin',
      availableFromUntilDesc: 'Establece las fechas oficiales de inicio y fin del curso.',
      preEnrollAllowedTitle: 'Preinscripción',
      preEnrollAllowedDesc: 'Permite que los usuarios se inscriban antes de la fecha de inicio',
      preEnrollAllowedLabel: 'Preinscripción permitida',
      advancedTitle: 'Avanzado',
      enrollmentCodeTitle: 'Código de inscripción',
      enrollmentCodeDesc: 'Activa o desactiva la necesidad de un código para inscribirse.',
      enrollmentCodeLabel: 'Activado con código de inscripción',
      oneTimeEnrollmentTitle: 'Inscripción única',
      oneTimeEnrollmentDesc: 'Especifica si el curso permite una única inscripción por usuario.',
      oneTimeEnrollmentLabel: 'Inscripción única (sin posibilidad de repetir el curso)',
      enrollmentApprovalTitle: 'Aprobación de inscripción',
      enrollmentApprovalDesc: 'Establece si las inscripciones requieren aprobación del administrador.',
      enrollmentApprovalLabel: 'Pre-aprobar la inscripción de estudiantes',
      recurringCourseTitle: 'Curso recurrente',
      recurringCourseDesc: 'Define si el curso es recurrente y la fecha de la primera recurrencia.',

      certificationTitle: 'Configuración de certificación',
      certificationDesc: 'Habilita o deshabilita la certificación para el curso.',
      gradeTitle: 'Requisito de calificación',
      gradeDesc: 'Establece el porcentaje requerido para obtener la certificación.',
      coolingOffPeriod: 'Período de espera',
      coolingOffPeriodDesc: 'Define el tiempo que los usuarios deben esperar antes de reintentar el curso si fallan.',
      coolingOffPeriodLabel: 'Tiempo de espera (horas)',
      pointsEarnedTitle: 'Puntos obtenidos',
      pointsEarnedDesc: 'Establece los puntos que los usuarios obtienen al completar el curso.',
      pointsEarnedLabel: 'Puntos obtenidos',

      learningSequenceTitle: 'Secuencia de aprendizaje',
      learningSequenceDesc: 'Especifica si el aprendizaje del curso es secuencial.',
      learningSequenceLabel: 'Aprendizaje secuencial (cada módulo se abre tras completar el anterior)',
      forumDiscussionTitle: 'Discusión en el foro',
      forumDiscussionDesc: 'Activa o desactiva los foros de discusión para el curso.',

      paidTitle: 'Curso de pago',
      paidDesc: 'Define si el curso es de pago y establece el precio.',
      exemptTitle: 'Acceso gratuito para grupos',
      exemptDesc: 'Los usuarios que pertenecen a los siguientes grupos están exentos de pago.',
      featuredTitle: 'Curso destacado',
      featuredDesc: 'Marca si el curso es destacado y debe aparecer en una sección especial.',
      featuredLabel: 'Marcar como destacado',

      folderTitle: 'Carpeta',
      folderDesc: 'Organiza tu curso en una carpeta',
      disclaimerPopupTitle: 'Aviso emergente',
      disclaimerPopupDesc: 'Configura el aviso emergente mostrado durante la inscripción.',
      templateTitle: 'Plantilla del curso',
      templateDesc: 'Especifica si este curso puede ser clonado por otros usuarios.',
      templateLabel: 'Curso plantilla',
      manualOrderTitle: 'Orden manual',
      manualOrderDesc: 'Define el orden manual del curso en los listados de cursos.',
      manualOrderLabel: 'Orden del curso',
      customFieldsTitle: 'Campos personalizados',
      customFieldsDesc: 'Añade cualquier campo personalizado relevante para el curso.',
      newFieldNameLabel: 'Nombre del campo',
      newFieldValueLabel: 'Valor del campo',
      newFieldNamePlaceholder: 'Nombre',
      newFieldValuePlaceholder: 'Valor',

      coverLabel: 'Imagen de portada',
      enterUrl: 'Introduce la URL',

      certificateForAnsweredQuestions: 'Por preguntas respondidas',
      certificateForAnsweredQuestionsInfo: 'Emitir certificado por el porcentaje de preguntas respondidas',
      certificateForReadLectures: 'Por lecciones completadas',
      certificateForReadLecturesInfo: 'Emitir certificado después de completar todas las lecciones',
      passingRateLabel: 'Tasa de aprobación',

      modulesLabel: 'Número de módulos',
      lecturesLabel: 'Número de lecciones en cada módulo',
      sectionsLabel: 'Número de secciones en cada lección',
      createCourse: 'Crear curso',
      updateCourse: 'Actualizar curso',
      scormPreview: 'La vista previa del SCORM aparecerá aquí',
      scormBeingProcessed: '¡SCORM cargado! Ahora lo estamos procesando, lo cual puede tardar hasta dos minutos. Puede esperar o volver más tarde. <strong>¡Recuerde guardar su curso!</strong>',
      scormProcessedSuccessfully: '¡SCORM procesado con éxito!',
      scormProcessedError: 'Se produjo un error al procesar el archivo SCORM. Intente cargarlo nuevamente.',
      oneTimeEnrollment: 'Inscripción única',
      popup: {
        title: 'Título',
        subtitle: 'Subtítulo',
        content: 'Contenido',
        action: 'Acción'
      },
      recurring: {
        isRecurringText: 'Este curso es recurrente.',
        isNotRecurringText: 'Este curso no es recurrente',
        periodLabel: 'Periodo de recurrencia',
        firstExecutionLabel: 'La primera reinscripción debe ocurrir el:',
        firstExecutionExplanation: 'La primera vez que se aplicará la recurrencia.<br>Los estudiantes inscritos que ya hayan terminado el curso serán reinscritos por primera vez en esta fecha.',
        amountLabel: 'Veces',
        timesToRepeat: 'Número de repeticiones',
        periodOfRecurringText: 'Los estudiantes deben repetir este curso cada ',
        saveRecurring: 'Guardar información de recurrencia',
        deleteRecurring: 'Eliminar propiedades recurrentes',
        period: {
          MONTHLY: 'Mes | Meses',
          YEARLY: 'Año | Años'
        },
        messages: {
          createdSuccess: 'Programación recurrente para el curso {name} creada con éxito.',
          updatedSuccess: 'Programación recurrente para el curso {name} actualizada con éxito.',
          deletedSuccess: 'Programación recurrente para el curso {name} eliminada con éxito.',
          createdError: 'Error al crear la programación recurrente para el curso {name}: {err}.',
          updatedError: 'Error al actualizar la programación recurrente para el curso {name}: {err}.',
          deletedError: 'Error al eliminar la programación recurrente para el curso {name}: {err}.'
        }
      },
      ai: {
        topicAndLocaleTitle: 'Tema e Idioma',
        contextExplanation: 'Aquí puedes escribir cualquier información que ayude a adaptar el curso a las necesidades específicas de la empresa.',
        contextHint: 'Ejemplo: Somos una empresa de tecnología de seguros en crecimiento que busca éxito en ventas.',
        contextTitle: 'Contexto Adicional',
        contentSpecificationTitle: 'Especificaciones del Contenido',
        topicLabel: 'Tema del curso',
        localeLabel: 'Idioma del curso',
        contextLabel: 'Contexto Adicional',
        noModulesLabel: 'Número de módulos',
        noTopicsLabel: 'Número de temas en cada módulo',
        noOptionsLabel: 'Número de opciones en cada pregunta',
        noModulesHint: 'El número de módulos puede ser de 1 a 10',
        noTopicsHint: 'El número de temas por módulo no puede ser menor que uno ni mayor que 5',
        noOptionsHint: 'El número de opciones por pregunta no puede ser menor que 3 ni mayor que 5',
        specifyEveryModule: 'Especifica cada módulo que deseas que aparezca en tu curso',
        specifyEveryModuleExplanation: 'Especifica el título de cada módulo del curso, por ejemplo, "Fundamentals of GDPR", "GDPR and insurance-tech", "GDPR for Developers"',
        modules: 'Módulos',
        lectures: 'Lecciones',
        questions: 'Preguntas',
        businessGoalsLabel: 'Objetivos Comerciales del curso',
        businessGoalsHint: 'Empieza a escribir para buscar o crear tu propio objetivo',
        businessGoalsExplanation: 'Los objetivos comerciales deben ser SMART – Específicos, Medibles, Alcanzables, Relevantes y Limitados en el Tiempo. Por ejemplo, "Aumentar los ingresos por ventas: Incrementar los ingresos trimestrales en un 15% implementando formación avanzada en ventas para el equipo antes del final del segundo trimestre."',
        businessGoalsExamples: [
          'Aumentar ingresos por ventas: Incrementar los ingresos trimestrales en un 15% mediante formación avanzada en ventas para el equipo antes del final del segundo trimestre.',
          'Mejorar satisfacción del cliente: Lograr una puntuación de satisfacción del cliente del 90% formando al personal de servicio al cliente en resolución de conflictos y habilidades comunicativas durante los próximos 6 meses.',
          'Potenciar las habilidades de los empleados: Asegurar que el 100% del departamento de marketing esté capacitado en herramientas de análisis de datos dentro de los próximos 3 meses para mejorar la eficiencia de las campañas.',
          'Reducir costes operativos: Disminuir costes de producción en un 10% durante el próximo año mediante operaciones optimizadas y formación en eficiencia para el personal de producción.',
          'Expandir alcance de mercado: Ingresar a 2 nuevos mercados internacionales antes de final de año, capacitando al equipo de ventas con habilidades lingüísticas y formación cultural antes del tercer trimestre.',
          'Aumentar reconocimiento de marca: Mejorar el reconocimiento de marca en un 25% según la interacción en redes sociales a través de sesiones específicas de formación en marketing digital para el equipo durante el próximo trimestre.',
          'Potenciar habilidades de liderazgo: Desarrollar habilidades de liderazgo en 20 mandos intermedios mediante su inscripción en un programa integral de formación en liderazgo antes del final del año fiscal.',
          'Mejorar la retención de empleados: Reducir la rotación anual de empleados en un 5% mediante mejores prácticas de gestión y cursos de desarrollo de liderazgo en los próximos 12 meses.',
          'Mejorar tiempos de entrega de proyectos: Acortar los tiempos de entrega de proyectos en un 20% dentro de los próximos 9 meses mediante formación avanzada en gestión de proyectos para todos los gestores.',
          'Aumentar eficiencia de producción: Lograr un aumento del 15% en eficiencia de producción capacitando al personal en nuevas tecnologías de fabricación en los próximos 6 meses.',
          'Potenciar transformación digital: Formar al 90% del personal de la empresa en nuevas herramientas digitales y plataformas antes del final del año para apoyar iniciativas de transformación digital.',
          'Mejorar salud y seguridad: Conseguir cero accidentes laborales durante el próximo año mediante formación integral en seguridad para todos los nuevos empleados en su primer mes de trabajo.',
          'Incrementar compromiso del empleado: Aumentar en 10 puntos las puntuaciones de compromiso mediante sesiones de formación en liderazgo y motivación antes del final del año.',
          'Expandir línea de productos: Lanzar 3 nuevos productos en el cuarto trimestre, preparando al equipo de desarrollo de producto con sesiones de formación en gestión de la innovación desde el segundo trimestre.',
          'Reducir quejas de clientes: Reducir las quejas de clientes en un 20% durante el próximo año mediante la mejora de protocolos de servicio y formación en gestión de reclamaciones para equipos de atención al cliente.',
          'Optimizar la gestión de cadena de suministro: Mejorar la eficiencia de la cadena de suministro en un 15% en los próximos 6 meses mediante formación especializada en logística para los miembros del equipo.',
          'Mejorar medidas de ciberseguridad: Asegurar que el 100% del personal de IT esté capacitado en las últimas prácticas y respuestas en ciberseguridad antes del final del tercer trimestre para mitigar riesgos.',
          'Mejorar informes financieros: Lograr el 100% de precisión en informes financieros formando al equipo de finanzas en nuevo software y normas de cumplimiento durante el próximo trimestre.',
          'Maximizar eficiencia TI: Incrementar el tiempo activo del sistema TI al 99.9% ofreciendo formación técnica continua al personal TI a partir del próximo mes.',
          'Desarrollar pensamiento estratégico: Fomentar el pensamiento estratégico en la organización mediante talleres para altos directivos en los próximos 6 meses.'
        ],
        averageAgeTitle: 'Edad media',
        averageAgeLabel: 'Edad media',
        averageAgeExplanation: '¿Cuál es la edad media de los estudiantes?',
        averageAgeHint: 'Si tu equipo tiene entre 20 y 50 años, 35 es la respuesta.',
        educationalBackgroundTitle: 'Formación Educativa',
        educationalBackgroundExplanation: '¿Cuál es la formación educativa de los estudiantes? Puedes escribir algo como, "Adultos trabajando en salud sin conocimientos previos en atención médica de emergencias."',
        educationalBackgroundLabel: 'Formación Educativa',
        educationalBackgroundHint: 'Ejemplo: Especialistas con maestría trabajando principalmente en investigación de mercados.',
        learningGoalsTitle: 'Objetivos de Aprendizaje',
        learningGoalsExplanation: 'Asegura que los objetivos de aprendizaje sean específicos, medibles y alineados con los objetivos comerciales.',
        learningGoalsLabel: 'Objetivos de Aprendizaje',
        learningGoalsHint: 'Ejemplo: Los estudiantes podrán aplicar técnicas básicas de primeros auxilios.',
        acquiredAbilitiesTitle: 'Habilidades Adquiridas',
        acquiredAbilitiesExplanation: 'Las habilidades adquiridas deben ser orientadas a la acción y declarar claramente lo que podrán hacer los estudiantes.',
        acquiredAbilitiesLabel: 'Habilidades Adquiridas',
        acquiredAbilitiesHint: 'Los estudiantes podrán realizar CPR correctamente, identificar signos de un ataque cardíaco y usar un AED.',
        timeCommitmentHoursTitle: 'Compromiso de tiempo (en horas totales)',
        timeCommitmentHoursExplanation: 'Considera la intensidad y ritmo del curso según disponibilidad del estudiante.',
        timeCommitmentHoursLabel: 'Compromiso de tiempo',
        timeCommitmentHoursHint: 'Ejemplo: Si los estudiantes tienen 3 horas por semana durante 4 semanas, son 12.',
        pdfTitle: 'Enriquece el contenido del curso con un PDF',
        pdfExplanation: 'Si ya tienes un PDF con contenido específico para este curso, puedes subirlo aquí.'
      },
      info: {
        step1: 'En esta sección, elige la imagen de portada del curso, dale un título al curso y marca la casilla template si este curso será una plantilla para otros cursos. ' +
          '<span class="font-weight-bold">Todas estas configuraciones pueden cambiarse posteriormente.</span>',
        step2: 'En esta sección, dale a tu curso una buena descripción. Una lista de objetivos de aprendizaje puede ser una buena descripción del curso. ' +
          'Usa el editor enriquecido para resaltar información importante, crear listas o añadir colores. ' +
          '<strong>La descripción del curso también se puede modificar posteriormente.</strong>',
        step3: 'Usa esta sección para añadir etiquetas al curso. Puedes elegir entre etiquetas existentes o crear nuevas. <strong>Las etiquetas del curso pueden añadirse y/o cambiarse posteriormente.</strong>',
        step4: 'Especifica la duración del curso en minutos. Por ejemplo, si dura 10 minutos, entonces son 10 minutos, si son 2 horas, entonces 120 minutos, etc. <strong>La duración del curso puede añadirse y cambiarse posteriormente.</strong>',
        step5: 'Usa esta sección para especificar si este curso tendrá certificación. También puedes especificar el porcentaje mínimo de aprobación, en porcentaje del 0 al 100. ' +
          '<strong>Estos ajustes pueden especificarse y cambiarse posteriormente.</strong>',
        certificateScormExplanation: 'Usa esta sección para especificar si este curso será certificable o no. ' +
          '<strong>Estos ajustes pueden especificarse y cambiarse posteriormente.</strong>',
        step6: '¡El aprendizaje social es una gran herramienta para la motivación! Marca la casilla para activar el foro Disqus después de cada lecture del curso. ' +
          '<strong>Esta opción puede activarse o desactivarse en cualquier momento.</strong>',
        step7: '',
        step8: 'Usa esta sección para especificar el número de módulos del curso, lectures por módulo y secciones por lecture. ' +
          '<strong>No es una decisión final, después de crear el curso puedes añadir o eliminar módulos, lectures y secciones.</strong>',
        anonymousAllowedExplanation: 'Activa esto para que el curso pueda verse de manera anónima sin autenticación. ' +
          'Sin embargo, ten en cuenta que las pruebas y certificados no tendrían sentido en este tipo de curso.',
        preEnrollAllowedExplanation: 'Desmarca para no permitir que los estudiantes se inscriban antes de que el curso comience.',
        externalUrl: 'Pega la URL externa a la que apuntará la tarjeta del curso.',
        paidCourse: {
          amount: 'Cantidad',
          currency: 'Moneda',
          paymentType: 'Tipo de pago',
          amountShouldBeAboveZero: 'La cantidad no puede ser menor que cero.',
          paymentTypes: {
            STRIPE: 'Stripe',
            LIQPAY: 'LiqPay',
            MONOBANK: 'Monobank',
            REVOLUT: 'Revolut'
          }
        },
        availableFromTo: 'Establece las fechas oficiales de inicio y fin del curso.',
        sequentialLearning: 'Activa esta opción si un estudiante solo puede avanzar a la siguiente lecture tras completar la anterior.',
        oneTimeEnrollment: 'Marca esta opción para evitar que un estudiante se inscriba varias veces en el curso.',
        paidCourseInfo: 'Configura la información de pago. No será posible cambiar el proveedor de pagos en el futuro, pero sí el monto y la moneda. ' +
          '<strong>Asegúrate de que la integración del proveedor de pagos correspondiente esté configurada en la sección <em>Admin -> Integrations</em>.</strong>',
        voucherActivated: 'Marca esta opción si has configurado códigos de inscripción para este curso y requiere esos códigos para acceder.',
        customFields: 'Aquí puedes definir campos personalizados para el curso <strong>(Configuración avanzada)</strong>.',
        scormUpload: 'Sube aquí el archivo SCORM. Puedes cambiarlo en cualquier momento en el futuro.',
        ordering: 'Especifica la posición deseada del curso en la lista. Si quieres que este curso se muestre en una posición específica, establece el valor ordering en consecuencia. Por ejemplo, si deseas que un curso en particular esté primero, establece el ordering en <strong>1</strong>.' +
          '<br><br><em>Para ignorar el orden y utilizar la clasificación por defecto, establece el valor ordering en <strong>1000</strong>. El curso entonces será ordenado según su fecha de creación o actualización.</em>',
        points: 'Define los puntos del curso (estos puntos se sumarán y mostrarán en la tarjeta de estudiante).',
        preEnrollDescription: 'Define el HTML del popup de preinscripción que aparecerá a cada estudiante antes de inscribirse en el curso.',
        preApproveEnrollmentDescription: 'Elige esta opción si se requiere aprobación de inscripción. ' +
          'Los estudiantes intentarán inscribirse en los cursos pero no podrán iniciarlos hasta que los administradores aprueben su inscripción.',
        courseFolder: 'Organiza tus cursos asignándolos a carpetas específicas. Esto ayuda a mantener un sistema claro y estructurado para una navegación y gestión más fácil.',
        aggregated: {
          metadata: 'Define aquí todos los metadatos del curso: título, imagen de portada, descripción, duración, etiquetas. Define el orden del curso y campos personalizados si es necesario.',
          socialLearning: 'Social Learning - define si estará disponible o no el foro de discusión después de cada lecture.',
          achievements: 'Define los logros del curso – marcos de avatar, puntos del curso, certificado.',
          courseAccess: 'Define las configuraciones relacionadas con la disponibilidad del curso: fechas de inicio y finalización, si está disponible para vista anónima o mediante códigos de inscripción.',
          recurring: 'Define la configuración si el curso necesita ser recurrente: los usuarios inscritos deben repetir periódicamente el curso. ' +
            'Puede ser útil para ciertas formaciones obligatorias como compliance. <strong>NOTA: aplica solamente a los estudiantes que están inscritos como grupo.</strong>'
        },
        ai: {
          topicAndLocale: 'Proporciona un tema del curso e indica el idioma del contenido generado.',
          context: 'Aquí puedes ajustar tu curso según las necesidades de tu negocio, objetivos de los estudiantes y otras especificidades.',
          specification: 'Proporciona títulos específicos para los módulos.',
          numberOfThings: 'Indica el número de módulos, temas y opciones en cada pregunta de evaluación.'
        },
        featuredDescription: 'Marca este curso como destacado. Aparecerá en la sección destacada del listado de cursos.'
      }
    },
    newCourse: {
      courseName: 'Título del curso',
      courseDescription: 'Descripción del curso',
      createNewCourse: 'Crear nuevo curso',
      createNewCertificationCourse: 'Crear nuevo curso de certificación',
      newExternalResource: 'Crear nuevo recurso externo',
      newAiCourse: 'Crear nuevo curso con ayuda de IA',
      newScormCourse: 'Crear nuevo curso SCORM',
      exploreAllWaysToCreateNewCourse: 'Explorar todas las formas de crear un curso',
      newUmbrellaCourse: 'Crear nuevo curso UMBRELLA',
      importCourse: 'Importar curso en JSON',
      downloadJSON: 'Descargar curso en formato JSON',
      uploadJSON: 'Subir JSON',
      createUmbrellaCourse: 'Crear curso general',
      createUmbrellaCourseExplanation: 'Crear un curso que muestre un árbol de decisión para un alumno.',
      createUmbrellaCourseCaption: 'Un alumno respondería a la pregunta y sería dirigido al curso correcto después de responderlas.',
      uploadJSONExplanation: 'Subir un json de un curso previamente exportado',
      uploadJSONCaption: '¡La mejor manera de clonar cursos entre espacios de trabajo!',
      usingWizard: 'Cree un curso con nuestro asistente inteligente',
      basedOnBloom: 'basado en la planificación retrospectiva y la taxonomía de Bloom',
      comingSoon: '(próximamente)',
      certificationTitle: 'Crear un curso de certificación',
      certificationSubtitle: 'Iniciar un programa centrado en la certificación y las evaluaciones',
      certificationCaption: '(¡Ideal para programas de certificación!)',
      usingBasicStructure: 'Crear un curso con una estructura básica',
      usingExternalResource: 'Crear un nuevo enlace a un recurso externo',
      createExternalCourse: 'Crear un enlace a un recurso externo',
      createScormCourse: 'Importar un paquete de cursos SCORM',
      lookingLikeCourseCard: 'Tendrá el aspecto de una tarjeta de curso normal',
      scormCourseDescription: 'Crea un curso y sube tu paquete SCORM',
      scormCourseCaption: '(O sustituye la URL del archivo SCORM)',
      pointingToExternalResource: 'y apuntará a un recurso externo',
      toBeLaterFilledWithContent: 'Para ser rellenado más tarde con contenido',
      iKnowWhatDoing: '(¡Sé lo que estoy haciendo!)',
      passingRateCantBeMore: 'La tasa de aprobados no puede ser superior al 100 %',
      passingRateCantBeLess: 'La tasa de aprobados no puede ser inferior al 0 %',
      courseBeingCreated: 'El curso {name} se está creando...',
      courseBeingUpdated: 'El curso {name} se está actualizando...',
      usingAiTitle: 'Crear esquema del curso con IA 🪄',
      aiCourseBeingGenerated: 'Generando su curso...\n' +
        'Puede esperar hasta que esté listo o consultarlo más tarde en "Gestionar cursos". Puede cerrar esta ventana ahora',
      usingAiDescription: 'Genere un esquema del curso escribiendo instrucciones en un mensaje',
      usingAiCaption: '(¡Me siento con suerte!)',
      beforeCreating: 'Considere descargar' +
        '<strong><a href="https://assets.theworkademy.com/shared/WORKADEMY_CREATE_COURSE_FROM_SCRATCH.pdf" target="_blank"">este PDF</a></strong> ' +
        'antes de empezar a crear cursos. ' +
        'Te ayudará con la estructura del curso'
    },
    editExistingCourses: 'Gestionar cursos existentes',
    editExistingLearningPaths: 'Gestionar itinerarios de aprendizaje existentes',
    editExistingFolders: 'Gestionar carpetas de cursos existentes',
    editCourseInfo: 'Editar información del curso',
    enrollUsers: 'Inscribir usuarios',
    checkProgress: 'Comprobar el progreso de los usuarios',
    durationInMinutes: 'Duración en minutos',
    availabilityDates: 'Fechas de disponibilidad del curso',
    manageCoursesTitle: 'Gestionar cursos',
    manageLearningPathsTitle: 'Gestionar itinerarios de aprendizaje',
    templateCoursesTitle: 'Plantillas',
    forumEnabled: 'Foro habilitado (cada clase tiene un foro de debate adjunto)',
    voucherActivated: 'Inscripción con cupón activado (debe configurar campañas en la sección de administración de gestión de campañas)',
    certificateEnabled: 'Certificado activado',
    sharableCertificate: 'Certificado que se puede añadir a LinkedIn',
    publicCourse: 'Curso público (disponible para el mundo exterior) - WIP',
    quiz: {
      questionText: 'Texto de la pregunta',
      questionSettings: 'Configuración de la pregunta',
      questionAnswers: 'Respuestas de la pregunta',
      questionExplanation: 'Explicación de la pregunta',
      limitAttempts: 'Limitar intentos',
      numberAttempts: 'Número de intentos',
      addTimeLimit: 'Agregar límite de tiempo',
      timeLimitseconds: 'Límite de tiempo (segundos)',
      editAnswer: 'Editar respuesta',
      editAnswerLabel: 'Editar la respuesta',
      explanation: 'Explicación',
      editQuestion: 'Editar pregunta',
      addNewQuestion: 'Agregar nueva pregunta al quiz',
      questionType: 'Tipo de pregunta',
      hasCorrectAnswer: 'Tiene respuesta correcta',
      itemLabel: 'Ítem',
      categoryLabel: 'Categoría',
      doesntCountForEvaluation: 'No cuenta para la evaluación',
      mandatory: 'Marcar como obligatoria',
      mandatoryExplanation: 'El alumno debe responder esta pregunta para poder continuar (funciona junto con el aprendizaje secuencial).',
      openAnswer: {
        evaluateOpenAnswerOf: 'Evaluar la respuesta abierta de {user}',
        answer: 'Respuesta',
        usersFile: 'Archivo del usuario',
        downloadFile: 'Descargar archivo del usuario',
        noFile: '{user} no ha subido ningún archivo',
        markAsIncorrect: 'Marcar como incorrecta',
        markAsCorrect: 'Marcar como correcta',
        openInNew: 'Abrir en una ventana emergente',
        questionTitle: 'Pregunta',
        feedbackTitle: 'Retroalimentación',
        changeFeedback: 'Cambiar retroalimentación',
        provideFeedback: 'Proporcionar retroalimentación',
        addFeedback: 'Agregar retroalimentación sin calificar',
        gradeAnswerButtonCaption: 'Cuando califiques la respuesta, la retroalimentación (si se proporciona) también se enviará'
      }
    },
    editingMode: {
      editCourse: {
        editCourseTitle: 'Editar curso {name}'
      },
      inlineEditorPlaceholder: 'Escribe el texto...',
      emojiPicker: {
        addEmoji: 'Añadir Emoji',
        unset: 'Desestablecer',
        change: 'Cambiar',
        pickerTitle: 'Elige tu emoji...',
        search: 'Buscar',
        notfound: 'No se encontró ningún emoji',
        categories: {
          search: 'Resultados de búsqueda',
          recent: 'Usados frecuentemente',
          smileys: 'Caras sonrientes y emoticonos',
          people: 'Personas y cuerpo',
          nature: 'Animales y naturaleza',
          foods: 'Comida y bebida',
          activity: 'Actividad',
          places: 'Viajes y lugares',
          objects: 'Objetos',
          symbols: 'Símbolos',
          flags: 'Banderas',
          custom: 'Personalizado'
        }
      },
      placeholder: {
        courseTitle: 'Escribe el título del curso...',
        courseDescription: 'Escribe la descripción del curso...',
        moduleTitle: 'Escribe el título del módulo...',
        moduleDescription: 'Escribe la descripción del módulo...',
        lectureTitle: 'Escribe el título de la lección...',
        lectureDescription: 'Escribe la descripción de la lección...',
        sectionTitle: 'Escribe el título de la sección...',
        sectionText: 'Escribe el texto de la sección...',
        questionText: 'Escribe la pregunta...',
        answerText: 'Escribe la respuesta...',
        bubbleText: 'Escribe el texto del mensaje...',
        optionTitle: 'Escribe el título de la opción...',
        accordionTitle: 'Escribe el título del acordeón...',
        accordionText: 'Escribe el texto...',
        quizDescription: 'Escribe la descripción del cuestionario...'
      },
      questionBank: {
        bankSwitch: 'Banco de Preguntas',
        title: 'Crea un banco de preguntas para esta lección/módulo y usa un número aleatorio de preguntas para mostrar a los alumnos.',
        weightLabel: '¿Cuántas preguntas con peso {weight} se usarán en el banco?',
        weightHint: 'Máximo permitido: {max}',
        usedText: 'Usadas <span class="font-weight-bold">{numberOfUsedQuestions}</span> de <span class="font-weight-bold">{totalNumberOfQuestions}</span> preguntas en total'
      },
      lecture: {
        editLecture: 'Editar lección',
        topOfTheLectureHeader: 'Encabezado de la lección (Imagen de portada, Video, Typeform, SCORM o Lección en Vivo)',
        editLectureHeader: 'Encabezado de la lección',
        noHeader: 'sin encabezado',
        editHeaderCover: 'Imagen de portada',
        addHeaderCover: 'Añadir imagen de portada',
        editVideoSource: 'Fuente del video',
        addVideoSource: 'Añadir fuente del video',
        editLiveLecture: 'Lección en vivo',
        editTypeformLecture: 'Typeform',
        addTypeformLecture: 'Añadir Typeform',
        editLoomLecture: 'Editar Loom',
        addLoomLecture: 'Añadir Loom',
        editScormLecture: 'Editar paquete SCORM',
        addScormLecture: 'Añadir paquete SCORM',
        enableLoom: 'Configurar Loom en admin/integraciones',
        addLiveLecture: 'Lección en vivo',
        pasteLiveLink: 'Pega el enlace de Zoom u otra videoconferencia',
        liveStartTime: 'Hora de inicio',
        liveFinishTime: 'Hora de finalización',
        onClearHeader: 'Eliminar encabezado',
        lectureSettings: 'Configuración de la lección',
        navigateLectureWith: 'Navegar por la lección con:',
        navigateWithButton: 'Botón Continuar (cada sección de la lección se abre con un clic en "Continuar")',
        navigateWithScroll: 'Desplazamiento (todas las secciones se abren por defecto)',
        recordLoomVideo: 'Grabar Video Loom',
        addLoomVideoUrl: 'Editar URL de Video Loom',
        addScormUrl: 'Editar URL del paquete SCORM',
        editPdfSectionDesc: 'Esta sección permite mostrar un PDF dentro de una lección y descargarlo.',
        editSevenTapsLecture: 'Editar lección 7taps',
        addSevenTapsLecture: 'Añadir lección 7taps',
        invalidPdfUrl: 'URL de PDF inválida (debe tener extensión .pdf)',
        lectureVisibility: {
          title: 'Configurar reglas de visibilidad de la lección',
          buttonText: 'Cambiar visibilidad de la lección',
          dialog: {
            title: 'Reglas de visibilidad de la lección',
            noRules: 'Aún no hay reglas de visibilidad definidas',
            allRules: 'Mostrar la lección si cumple TODAS estas reglas:',
            anyRules: 'Y cumple CUALQUIERA de estas reglas:',
            addRuleButton: 'Añadir regla',
            addAndRuleButton: 'Añadir regla AND',
            addOrRuleButton: 'Añadir regla OR',
            whenText: 'Cuando',
            operators: {
              QUESTIONS: {
                EQUALS: 'es',
                NOT_EQUALS: 'no es',
                CONTAINS: 'contiene',
                NOT_CONTAINS: 'no contiene'
              },
              GROUPS: {
                EQUALS: 'es',
                NOT_EQUALS: 'no es',
                CONTAINS: 'contiene alguno',
                NOT_CONTAINS: 'no contiene ninguno'
              }
            },
            connectors: {
              AND: 'y',
              OR: 'o'
            },
            selectionItems: {
              GROUPS: 'Grupos',
              QUESTIONS: 'Preguntas'
            },
            selectAQuestion: 'Selecciona una pregunta',
            selectAnAnswer: 'Selecciona una respuesta',
            saveRulesButton: 'Guardar reglas'
          }
        }
      },
      editCourseStructure: 'Editar estructura del curso',
      clickHereToChangeText: 'Haz clic aquí para cambiar el texto',
      editCourseInfo: 'Editar información del curso',
      enrollUsers: 'Inscribir usuarios',
      checkProgress: 'Ver progreso de los usuarios',
      editCourseDescription: 'Editar descripción del curso',
      editLectureDescription: 'Editar descripción de la lección',
      addNewModule: 'Añadir nuevo módulo',
      addNewLecture: 'Añadir nueva lección al módulo',
      addNewSection: 'Añadir nueva sección',
      deleteModule: 'Eliminar módulo',
      editModuleDescription: 'Editar descripción del módulo',
      deleteLecture: 'Eliminar lección',
      deleteGamificationItem: 'Eliminar ítem de gamificación',
      saveCourseBeforeEditingLecture: 'Guarda el curso antes de poder editar la lección',
      addSection: 'Añadir nueva sección',
      addQuestion: 'Añadir nueva pregunta',
      deleteQuestion: 'Eliminar pregunta',
      deleteQuestionDialogTitle: '¡Zona de peligro!',
      deleteQuestionDialogText: 'Eliminar una pregunta podría causar errores debido al progreso de los estudiantes. ' +
        'Considera guardar el curso antes de intentarlo.',
      newModuleName: 'Nombre del módulo',
      newModuleDescription: 'Descripción del módulo',
      newLectureName: 'Nombre de la lección',
      newLectureDescription: 'Descripción de la lección',
      resetBtn: 'Restablecer',
      saveBtn: 'Guardar',
      saveAndNotifyBtn: 'Guardar y Notificar a los alumnos',
      publishBtn: 'Publicar Curso',
      unpublishBtn: 'Despublicar Curso',
      exportJSON: 'Exportar JSON',
      importJSON: 'Importar JSON',
      copyCourseUrl: 'Copiar URL del curso',
      courseUrlCopied: 'URL del curso copiada',
      videoSubtitles: 'Subtítulos de video',
      addVideoSubtitles: 'Añadir subtítulos',
      editVideoSubtitles: 'Editar subtítulos',
      addVideoSubtitlesTrack: 'Añadir pista de subtítulos',
      videoSubtitlesLocale: 'Idioma',
      sections: {
        newTextSection: 'Texto Enriquecido',
        newQuestionSection: 'Pregunta',
        newPDFSection: 'PDF',
        newButtonSection: 'Botón',
        newImageTextSection: 'Imagen+Texto',
        newVideoTextSection: 'Video+Texto',
        newAudioTextSection: 'Audio+Texto',
        newAccordionSection: 'Acordeón',
        newBranchSection: 'Ramificación',
        newExamplesSection: 'Ejemplos',
        newGridSection: 'Cuadrícula',
        table: {
          sortable: 'Ordenable',
          fixFirstColumn: 'Fijar primera columna'
        },
        newTableSection: 'Tabla',
        newTableSectionDescription: 'Crea una tabla con el número exacto de filas y columnas que necesites'
      },
      tags: {
        searchTags: 'Buscar etiquetas',
        addTagsLabel: 'Añadir etiquetas de filtrado al curso'
      }
    },
    gamification: {
      typeLabel: 'Tipo',
      nameLabel: 'Nombre',
      descriptionLabel: 'Descripción',
      editGamification: 'Editar logros',
      addGamificationItem: 'Añadir logro',
      saveGamificationItems: 'Guardar logros',
      changeName: 'Nombre del logro',
      changeDescription: 'Descripción del logro',
      saveItems: 'Guardar logros',
      hideEditing: 'Ocultar modo de edición',
      editItem: 'editar logro',
      questionAnswerRateLabel: 'Tasa de respuestas correctas',
      chooseCompletedLectures: 'Selecciona las lecciones que deben completarse',
      chooseAnsweredQuestions: 'Selecciona las preguntas que deben responderse',
      types: {
        QUESTIONS_ANSWERED: 'Preguntas respondidas',
        LECTURES_COMPLETED: 'Lecciones completadas',
        QUESTIONS_ANSWERED_RATE: 'Tasa de respuestas correctas'
      },
      achievementTypes: {
        FRAME: 'Marco'
      },
      collectAchievements: 'Comienza a coleccionar insignias: avanza en tus cursos y responde preguntas'
    },
    progress: {
      courseNotStarted: 'Curso aún no iniciado',
      courseInProgress: 'Curso en progreso',
      courseFinished: 'Curso finalizado',
      coursesTitle: 'Cursos',
      learningPathsTitle: 'Rutas de aprendizaje',
      learningPathCourses: 'Cursos de la Ruta de Aprendizaje',
      coursesTitleCoursesName: 'Cursos – {courseName}',
      learningPathTitleCoursesName: 'Rutas de aprendizaje - {learningPathName}',
      coursesTitleCourseUserName: 'Cursos – {courseName} – {userName}',
      learningPathTitleUserName: 'Rutas de aprendizaje – {learningPathName} – {userName}',
      clickOnLearningPathStep: 'Haz clic en una tarjeta de curso para ver el progreso de {name} en un curso',
      learningPathNoSteps: 'Esta ruta de aprendizaje no contiene pasos',
      cantFetchDataLearningPathStep: 'No se pueden obtener datos para {stepName}. Lo más probable es que el paso ya haya sido realizado por el usuario {userName}',
      startedOn: 'Iniciado el {startedOn}',
      finishedOn: 'Finalizado el {finishedOn}',
      progress: 'Progreso: {progress}%',
      startedOnTitle: 'Iniciado el',
      finishedOnTitle: 'Finalizado el',
      completedInTitle: 'Completado en',
      progressTitle: 'Progreso del cuestionario',
      lectureProgressTitle: 'Progreso de las lecciones',
      courseProgressTitle: 'Progreso del curso',
      lastActivityTitle: 'Última actividad',
      statusTitle: 'Estado',
      certificateTitle: 'Certificado',
      certificate: 'certificado',
      nameTitle: 'Nombre',
      emailTitle: 'Correo electrónico',
      noCourses: 'Aún no has creado ningún curso',
      noCoursesWithSearch: 'No se encontraron cursos con este criterio de búsqueda',
      createCourses: 'Crear cursos',
      createLearningPaths: 'Crear rutas de aprendizaje',
      progressOfUser: 'Progreso de {userName}',
      answeredQuestions: 'Respondidas <strong>{correct} / {total}</strong>',
      lecturesSeen: 'Lecciones vistas: <strong>{seen} / {total}</strong>',
      seen: 'Visto',
      lectureMarkedAsSeen: 'Marcado como visto',
      lectureIsNotMarkedAsSeen: 'Aún no visto',
      wrongAttempts: '{wrong} / {total} intentos incorrectos',
      searchCoursePlaceholder: 'nombre, descripción, etiquetas, ¡lo que sea!',
      searchCourseLabel: 'Buscar cursos',
      usersPerPage: 'Usuarios por página',
      downloadCSV: 'Descargar CSV',
      download: 'Descargar informe',
      downloadForGroup: 'Descargar informe del grupo',
      downloadFull: 'Descargar informe completo',
      totalStudents: 'Total de alumnos inscritos: {total}',
      searchUserLabel: 'Buscar usuario por correo electrónico',
      searchUserPlaceholder: 'Correo electrónico exacto para buscar',
      enrollCount: 'Sin inscripciones | Una inscripción | {n} inscripciones',
      inactiveCount: 'Inactivos: {n}',
      abandonedCount: 'Abandonados: {n}',
      runningCount: 'Inscripciones activas: {n}',
      finishedCount: 'Finalizados: {n}',
      noUsersInCourse: 'No hay usuarios inscritos en este curso.',
      noUsersSatisfyingFilter: 'No hay usuarios que cumplan con el criterio de búsqueda o filtro',
      noQuestionsFound: 'No se encontraron preguntas en el curso',
      noUsersInLearningPath: 'No hay usuarios asignados a esta ruta de aprendizaje.',
      userNotEnrolled: 'El usuario {name} no está inscrito en este curso.',
      filterByUser: 'Filtrar por usuario',
      searchUser: 'Buscar usuario',
      totalCourses: 'Total de cursos encontrados: {total}',
      totalEnrollments: 'Total encontrados: {total}',
      totalPendingEnrollments: 'Total de inscripciones pendientes encontradas: {total}',
      approvePendingTitle: 'Aprobar',
      approvePendingButton: 'Aprobar',
      approvedSuccessfullyMessage: 'La inscripción de {name} fue aprobada con éxito.',
      approvedErrorMessage: 'No se pudo aprobar la inscripción de {name} debido al error: {err}',
      reports: {
        reportIsGenerating: 'El informe se está generando. Por favor, espera.',
        reportGeneratedSuccessfully: 'Informe generado con éxito.',
        reportGeneratedWithError: 'Error al generar el informe: {err}',
        csvInstructions: '<p>Para reconocer UTF-8 en el archivo descargado:</p>' +
          '<ol>' +
          '<li>Guarda el archivo exportado como csv</li>' +
          '<li>Abre Excel</li>' +
          '<li>Importa los datos desde Datos-->Importar Datos Externos --> Importar Datos</li>' +
          '<li>Selecciona el tipo de archivo "csv" y busca tu archivo</li>' +
          '<li>En el asistente de importación cambia el origen del archivo a "65001 UTF" (o elige el identificador de caracteres correcto)</li>' +
          '<li>Cambia el delimitador a coma</li>' +
          '<li>Selecciona dónde importar y finaliza</li>' +
          '<li>De esta forma, los caracteres especiales deberían mostrarse correctamente.</li>' +
          '</ol>'
      },
      certificates: {
        userCertificateTitle: 'Certificado',
        changeCertificateData: 'Cambiar datos del certificado',
        dialog: {
          title: 'Cambiar datos del certificado',
          nameLabel: 'Cambiar el nombre del alumno',
          changeButton: 'Cambiar',
          success: 'Los datos del certificado de {name} se cambiaron con éxito.',
          error: 'Hubo un error al cambiar los datos del certificado de {name}: {err}'
        }
      },
      detailed: {
        done: 'Completado',
        inProgress: 'En progreso',
        notStarted: 'No iniciado',
        hidden: 'Oculto',
        locked: 'Bloqueado'
      },
      tabs: {
        detailedProgress: 'Progreso detallado',
        enrolledUsers: 'Progreso general',
        questionAnswersProgress: 'Respuestas de cuestionarios',
        pendingUsers: 'Usuarios pendientes',
        pendingGrading: 'Calificación pendiente',
        preCourseSurvey: 'Encuesta previa al curso',
        postCourseSurvey: 'Encuesta posterior al curso'
      },
      pendingGrading: {
        learnerTableTitle: 'Alumno',
        actionsTableTitle: 'Acciones',
        questionTableTitle: 'Pregunta',
        answerTableTitle: 'Respuesta',
        fileTableTitle: 'Archivo',
        noPendingGradingFound: 'No se encontraron respuestas pendientes de calificación.',
        feedbackTitle: 'Retroalimentación del administrador del curso',
        feedbackFieldTitle: 'Proporcionar/Cambiar retroalimentación',
        openToGiveFeedback: 'Abrir para proporcionar retroalimentación',
        changeFeedback: 'Cambiar retroalimentación'
      },
      questionAnswers: {
        questionTableTitle: 'Pregunta',
        userTableTitle: 'Usuario',
        correctTableTitle: 'Correcto',
        userAnswerTableTitle: 'Respuesta del usuario'
      }
    },
    usersManagement: {
      title: 'Gestión de Usuarios',
      searchUserLabel: 'Buscar usuario por correo electrónico',
      searchUserPlaceholder: 'john.doe@gmail.com',
      emailTitle: 'Correo electrónico',
      nameTitle: 'Nombre',
      sourceTitle: 'Fuente',
      groupsTitle: 'Grupos',
      adminTitle: 'Administrador del workspace',
      invitedTitle: 'Invitado',
      acceptedTitle: 'Invitación aceptada',
      sendInvitationToEveryone: 'Invitar a todos los usuarios',
      sendInvitationToGroup: 'Invitar a {groupName}',
      invited: 'invitado',
      accepted: 'invitación aceptada',
      sendInvitation: 'Enviar invitación',
      resendInvitation: 'Reenviar invitación',
      revokeAccess: 'Revocar acceso'
    },
    staffManagement: {
      noUsersFound: 'No se encontraron usuarios',
      noGroupsFound: 'No se encontraron grupos',
      title: 'Gestión de Usuarios',
      inviteUsersDialogTitle: 'Invitar Usuarios',
      addUsers: 'Añadir Usuarios',
      uploadUsersCSV: 'O sube un archivo CSV <strong>(formato: Nombre, Apellido, Correo Electrónico, Grupo (opcional))</strong>',
      inviteUsersDialogDescriptions: 'Los nuevos miembros recibirán un correo electrónico después de ser invitados',
      inviteUsersByEmail: 'Invitar usuarios por correo electrónico. Escribe un correo y presiona enter para añadir otro.',
      searchUserLabel: 'Buscar un miembro del workspace por correo electrónico',
      searchUserPlaceholder: 'john.doe@gmail.com',
      emailTitle: 'Correo electrónico',
      hasCourseCreationRights: 'Puede crear cursos',
      hasVoucherCreationRights: 'Puede crear vales',
      addCourseCreationRights: 'Añadir permisos para crear cursos',
      tabs: {
        userTabTitle: 'Usuarios',
        groupTabTitle: 'Grupos',
        syncTabTitle: 'Gestionar Invitaciones'
      },
      totalStudents: 'Total de alumnos encontrados {total}',
      noGroups: 'Aún no hay grupos asignados',
      searchGroup: 'Buscar grupos',
      filterByGroup: 'Filtrar por Grupo',
      searchUsers: 'Buscar Usuarios',
      inactiveForDays: 'Inactivo por días',
      inactiveFor: 'Inactivo por',
      inactiveDaysCount: 'Número de días inactivo',
      inactivityPeriods: {
        WEEK: 'más de una semana',
        TWOWEEKS: 'más de dos semanas',
        MONTH: 'más de un mes',
        HALFAYEAR: 'más de medio año',
        YEAR: 'más de un año'
      },
      createGroupButtonTitle: 'Crear Grupo',
      createUsersButtonTitle: 'Crear Usuarios',
      detailsButtonTitle: 'Detalles',
      totalGroups: 'Total de grupos encontrados {total}',
      totalUsers: 'Total de usuarios encontrados {total}',
      noRoles: 'No hay roles asignados',
      noUsers: 'No hay miembros en el grupo | Un miembro | {n} miembros',
      learningJorneyTitle: 'Trayectoria de Aprendizaje',
      timeSpentLearningTitle: 'Tiempo de Aprendizaje',
      userCoursesTitle: 'Cursos del Usuario (total {n})',
      lastUserCoursesTitle: 'Últimos cursos del usuario ({n})',
      lastUserLearningPathsTitle: 'Últimas rutas de aprendizaje del usuario ({n})',
      userTitle: 'Usuario',
      usersTitle: 'Usuarios',
      coursesTitle: 'Cursos',
      skillsTitle: 'Habilidades',
      groupsTitle: 'Grupos',
      assignSkillButton: 'Asignar Habilidad',
      removeSkillButton: 'Eliminar Habilidad',
      assignSkillsToUserTitle: 'Asignar habilidades a {name}',
      assignGroupButton: 'Asignar Grupo',
      assignGroupsToUserTitle: 'Asignar Grupos a {name}',
      assignUserToGroupButton: 'Añadir usuario al Grupo',
      removeUserFromGroupButton: 'Eliminar usuario del Grupo',
      permissionsTitle: 'Permisos',
      assignPermissionButton: 'Cambiar Permisos',
      blockUserButton: 'Bloquear Usuario',
      unBlockUserButton: 'Desbloquear Usuario',
      deleteUserButton: 'Eliminar Usuario',
      userBlockedSuccessfully: 'El usuario {name} fue bloqueado con éxito',
      userBlockedWithError: 'Hubo un error al bloquear al usuario {name}: {errorText}',
      userUnblockedSuccessfully: 'El usuario {name} fue desbloqueado con éxito',
      userUnblockedWithError: 'Hubo un error al desbloquear al usuario {name}: {errorText}',
      userDeletedSuccessfully: 'El usuario {name} fue eliminado con éxito',
      userDeletedWithError: 'Hubo un error al eliminar al usuario {name}: {errorText}',
      noSkillsYet: 'Aún no se han adquirido habilidades',
      userCard: {
        name: 'Nombre',
        memberSince: 'Miembro desde',
        email: 'Correo electrónico',
        role: 'Rol',
        group: 'Grupos',
        timeSpentLearning: 'Tiempo total de aprendizaje en {workspaceName}:',
        nameAndEmail: 'Nombre y Correo Electrónico',
        status: 'Estado'
      },
      roles: {
        ROLE_STUDENT: 'Estudiante',
        ROLE_ADMIN: 'Administrador del workspace',
        ROLE_COURSE_ADMIN: 'Administrador del curso',
        ROLE_VOUCHER_ADMIN: 'Administrador de vales',
        ROLE_FILE_UPLOAD: 'Carga de archivos',
        ROLE_INTEGRATIONS_MANAGER: 'Administrador de Integraciones'
      },
      statuses: {
        filterLabel: 'Estado del usuario',
        inactiveUserCourses: 'Inactivo',
        blockedUser: 'Bloqueado',
        running: 'En curso',
        finished: 'Finalizado',
        archived: 'Archivado',
        abandoned: 'Abandonado',
        inactiveUserExplanation: 'Este usuario no está avanzando en ninguno de los cursos.'
      },
      notifyInactivityButton: 'Notificar Inactividad',
      resultsFound: 'No se encontraron resultados | {n} resultado encontrado | {n} resultados encontrados',
      notifications: {
        modal: {
          sendingAlert: 'Estás a punto de enviar la siguiente notificación a este usuario.',
          sendingButton: 'Enviar Ahora',
          inactiveUserCourses: {
            title: 'Notificar inactividad',
            description: '',
            defaultMessage: 'Parece que no has progresado en mucho tiempo en algunos de tus cursos. Por favor, regresa a tus cursos activos o pide a tu administrador que te asigne uno nuevo.'
          },
          notificationSentSuccessfully: '¡Notificación enviada con éxito!',
          notificationSentWithError: 'Hubo un error al enviar la notificación al usuario: {errorText}'
        }
      },
      inviteUserSuccessful: 'El usuario {name} fue invitado con éxito',
      inviteGroupUsersSuccessful: 'Todos los usuarios del grupo {name} fueron invitados con éxito',
      inviteUserError: 'Hubo un error al invitar al usuario {name}: {err}',
      inviteGroupUsersError: 'Hubo un error al invitar a los usuarios del grupo {name}: {err}',
      addUsersSuccessful: 'Los usuarios fueron añadidos con éxito',
      addUsersError: 'Hubo un error al añadir usuarios: {err}',
      groups: {
        title: 'Título del Grupo',
        participants: 'Participantes',
        source: 'Fuente',
        created: 'Creado'
      }
    },
    campaignManagement: {
      titleCampaigns: 'Campañas',
      searchCampaign: 'Buscar campañas',
      totalCampaigns: 'Total de campañas encontradas: {total}',
      titleCampaign: 'Campañas – {name} – {courseName}',
      createCampaign: 'Crear nueva campaña',
      createDiscountCampaign: 'Crear nuevo descuento',
      discountLabel: 'Descuento (%)',
      noCampaigns: 'Aún no se han creado campañas',
      campaignName: 'Nombre de la campaña',
      startDate: 'Fecha de inicio',
      expireDate: 'Fecha de expiración',
      maxUsages: 'Número máximo de usos',
      newCampaign: 'Nueva campaña',
      voucherCode: 'Código de inscripción',
      voucherUsage: 'Número de usos',
      noVouchers: 'Aún no se han añadido vales a la campaña',
      addVouchers: 'Generar vales',
      currentUsage: 'Usos',
      campaignNameLabel: 'Cambiar el nombre de la campaña',
      uniqueRedeem: 'Redención única',
      multipleRedeem: 'Redención múltiple',
      campaignType: 'Tipo de campaña',
      withMaxNumberUsages: 'con un máximo de {maxUsages} usos',
      editCampaign: 'Editar campaña',
      deactivate: 'Desactivar campaña para el curso',
      activate: 'Activar campaña para el curso',
      addMoreVouchers: 'Generar más vales',
      uniqueRedeemExplanation: 'Los códigos asociados a esta campaña son personales y solo pueden canjearse una vez',
      multipleRedeemExplanation: 'Los códigos asociados a esta campaña pueden canjearse varias veces',
      newCampaignNameLabel: 'Asigna un nombre a la campaña',
      campaignCourse: 'Buscar curso',
      hideExpiredCampaigns: 'Ocultar campañas expiradas',
      showExpiredCampaigns: 'Mostrar campañas expiradas',
      noPaymentInformationAlert: 'No se ha proporcionado información de pago. Por favor, elige un curso o configura la información de pago en el curso seleccionado.',
      paymentWithDiscountInfo: 'El precio original del curso es <strong>{price} {currency}</strong>. El precio con descuento es <strong>{discounted} {currency}</strong>',
      campaignTypes: {
        labels: {
          COURSE_ENROLLMENT: 'Campaña de Restricción de Acceso al Curso',
          COURSE_PERCENT_DISCOUNT: 'Campaña de Descuento en Pago'
        }
      },
      voucherActivated: {
        voucherActivatedMessage: 'La activación de vales para este curso está habilitada',
        voucherNotActivatedMessage: 'No olvides habilitar la activación de vales para este curso',
        editCourseLinkText: 'Editar curso'
      },
      editVoucherCodeLabel: 'Editar código del vale',
      editButton: 'Editar',
      editVoucherCodeSuccess: 'Código del vale cambiado con éxito a {code}.',
      editVoucherCodeError: 'Hubo un error al cambiar el código del vale a {code}: {err}',
      requiredInvalidMessage: 'Este es un campo obligatorio',
      periodInvalidMessage: 'Debe ser un número entero positivo',
      discountInvalidMessage: 'El descuento debe estar entre 1 y 100.'
    },
    integrationsManagement: {
      newPopupTitle: 'Nueva conexión {name}',
      editPopupTitle: 'Editar conexión {name}',
      title: 'Integraciones',
      clientIdLabel: 'ID del cliente',
      clientSecretLabel: 'Secreto del cliente',
      documentCategoryLabel: 'ID de la categoría del documento',
      clientEndpointLabel: 'Endpoint del cliente',
      subdomainLabel: 'Subdominio (de tu workspace en BambooHR)',
      tokenEndpointLabel: 'Endpoint del token',
      responseTypeLabel: 'Tipo de respuesta',
      scopeLabel: 'Alcance',
      userEndpointLabel: 'Endpoint de la API de usuario',
      emailPropertyLabel: 'Propiedad del correo electrónico',
      firstNamePropertyLabel: 'Nombre',
      lastNamePropertyLabel: 'Apellido',
      oauth2IdPropertyLabel: 'Propiedad de ID OAuth2',
      authorizationEndpointLabel: 'Endpoint de autorización',
      syncLabel: 'Gestionar invitaciones',
      syncUsersLabel: 'Sincronizar',
      apiKeyLabel: 'Clave de acceso a la API',
      appNameLabel: 'Nombre de la aplicación',
      appKeyLabel: 'Clave de la aplicación',
      disqusIdLabel: 'ID de Disqus',
      stripePublishableKeyLabel: 'Clave publicable de Stripe',
      stripeSecretKeyLabel: 'Clave secreta de Stripe',
      stripeDefaultTaxId: 'ID de la tasa de impuesto predeterminada en Stripe',
      stripeTaxationCountry: 'País de tributación en Stripe',
      useInvoicing: 'Usar facturación',
      paymentMethodConfigurationId: 'ID de configuración del método de pago',
      openAiSecretKeyLabel: 'Clave secreta de Open AI',
      peopleForceApiKeyLabel: 'Clave de API de PeopleForce',
      ripplingApiKeyLabel: 'Clave de API de Rippling',
      liqpayPrivateKeyLabel: 'Clave privada de LiqPay',
      liqpayPublicKeyLabel: 'Clave pública de LiqPay',
      liqpaySandboxLabel: '¿Es entorno de prueba (sandbox)?',
      xTokenKeyLabel: 'xToken',
      xCmsLabel: 'xCms',
      categories: {
        HR: 'Recursos Humanos',
        PAYMENT: 'Servicios de Pago',
        CONTENT: 'Creación de Contenido',
        SOCIAL: 'Social',
        DEFAULT: 'Por Defecto',
        DEV: 'Desarrollo – Autenticación, Webhooks, Correos',
        CRM: 'CRM'
      },
      personio: {
        description: 'Sincronizar usuarios y grupos. Subir automáticamente certificados a perfiles de empleados.',
        explanation: '<ul>' +
          '<li>Ve a Configuración > Personas > Documentos > Categorías y crea una nueva categoría o usa una existente adecuada para cargar certificados de cursos. Extrae el ID (colocando el cursor sobre la categoría, por ejemplo).</li>' +
          '<li>Ve a Configuración > Credenciales de API. Crea una nueva clave de API (o reutiliza una existente). Asígnale un nombre y selecciona la integración "Workademy".</li>' +
          '<li>Otorga acceso de lectura a "empleados" y "documentos", y acceso de escritura a "documentos". Selecciona los siguientes atributos: correo electrónico, nombre, apellido, ID de empleado y estado.</li>' +
          '<li>Configura tu integración con la información recopilada, guarda y sincroniza.</li></ul>',
        syncSuccessful: 'La sincronización de usuarios con Personio fue completada con éxito. Ve a la consola de gestión de usuarios para revisar las invitaciones.',
        syncError: 'La sincronización de usuarios con Personio no fue completada con éxito. {err}',
        connectSuccessful: 'Integración con la API de Personio configurada correctamente',
        connectError: 'Error al conectar con Personio. {err}',
        deleteSuccessful: 'Integración con la API de Personio eliminada correctamente',
        deleteError: 'Error al eliminar la integración con Personio. {err}',
        mappingInstructions: 'Asigna los valores de los campos personalizados de Personio a los grupos de Workademy.',
        fieldValuesLabel: 'Valores del campo (presione espacio o tab para agregar)',
        fieldNamePlaceholder: 'Ingrese el nombre del campo',
        valueInputPlaceholder: 'Escriba un valor y presione espacio/tab',
        addFieldButton: 'Agregar campo personalizado',
        certificateNameTemplateLabel: 'Plantilla de nombre de certificado',
         certificateNameTemplateHint: 'Variables disponibles: &#36;{userName}, &#36;{date}, &#36;{courseName}'
      },
      bamboo_hr: {
        description: 'Mantén tus datos de equipo alineados con sincronización de usuarios y grupos.',
        explanation: 'Inicia sesión en tu cuenta de administrador de BambooHR. El Subdominio es parte de la URL que representa tu empresa, ej. si es empresa.bamboohr.com, entonces el subdominio es "empresa". Haz clic en tu foto de perfil, luego selecciona API Keys. Añade una nueva clave y copia el valor de la API key aquí',
        syncSuccessful: 'Sincronización de usuarios con BambooHR exitosa. Ve a la consola de gestión de usuarios para revisar las invitaciones.',
        syncError: 'Sincronización de usuarios con BambooHR no exitosa. {err}',
        connectSuccessful: 'Integración con tu API de BambooHR configurada exitosamente',
        connectError: 'Error al conectar con BambooHR. {err}',
        deleteSuccessful: 'Integración con API de BambooHR eliminada exitosamente',
        deleteError: 'Error al eliminar la integración con BambooHR. {err}'
      },
      sage: {
        description: 'Sincronizar usuarios y líneas de reporte en Workademy.',
        explanation: 'Inicia sesión en tu cuenta de administrador de Sage. El subdominio es parte de la URL que representa tu empresa, ej. si es empresa.sage.com, entonces el subdominio es "empresa". Haz clic en tu foto de perfil, luego selecciona API Keys. Añade una nueva clave y copia el valor de la API key aquí',
        syncSuccessful: 'Sincronización de usuarios con Sage exitosa. Ve a la consola de gestión de usuarios para revisar las invitaciones.',
        syncError: 'Sincronización de usuarios con Sage no exitosa. {err}',
        connectSuccessful: 'Integración con tu API de Sage configurada exitosamente',
        connectError: 'Error al conectar con Sage. {err}',
        deleteSuccessful: 'Integración con API de Sage eliminada exitosamente',
        deleteError: 'Error al eliminar la integración con Sage. {err}'
      },
      custom_oauth2: {
        description: '',
        explanation: '',
        syncSuccessful: 'Sincronización de usuarios con OAuth2 exitosa. Ve a la consola de gestión de usuarios para revisar las invitaciones.',
        syncError: 'Sincronización de usuarios con OAuth2 no exitosa. {err}',
        connectSuccessful: 'Integración con tu API de OAuth2 configurada exitosamente',
        connectError: 'Error al conectar con OAuth2. {err}',
        deleteSuccessful: 'Integración con servidor OAuth2 eliminada exitosamente',
        deleteError: 'Error al eliminar la integración con el servidor OAuth2. {err}'
      },
      oauth2: {
        description: '',
        explanation: 'Configura tu acceso OAuth2 aquí. Todos los atributos son obligatorios. ' +
          '<p><strong>NOTA</strong>: en tu servidor OAuth2 configura el <em>redirect_uri</em> como ' +
          '<em>https://{hostname}/signin/</em>.</p>',
        syncSuccessful: 'Sincronización de usuarios con OAuth2 exitosa. Ve a la consola de gestión de usuarios para revisar las invitaciones.',
        syncError: 'Sincronización de usuarios con OAuth2 no exitosa. {err}',
        connectSuccessful: 'Integración con tu API de OAuth2 configurada exitosamente',
        connectError: 'Error al conectar con OAuth2. {err}',
        deleteSuccessful: 'Integración con API de OAuth2 eliminada exitosamente',
        deleteError: 'Error al eliminar la integración con el servidor OAuth2. {err}',
        authenticationScheme: 'Esquema de autenticación',
        postAuthCheckTitle: 'Verificación post-autenticación',
        enablePostCheck: 'Habilitar verificación post-autenticación',
        availableVarsTitle: 'Variables disponibles',
        addVarsLabel: 'Añadir variables de la respuesta OAuth2',
        varsPlaceholder: 'ej. estadoSuscripcion, tipoCuenta',
        varsHint: 'Estas variables estarán disponibles en el constructor de condiciones',
        conditionTitle: 'Condición',
        varLabel: 'Variable',
        operatorLabel: 'Operador',
        valueLabel: 'Valor',
        conditionPreview: 'Vista previa de condición:',
        actionTitle: 'Acción',
        actionType: 'Tipo de acción',
        redirectUrl: 'URL de redirección'
      },
      push_notification: {
        description: '',
        explanation: 'Configura tu endpoint de webhooks aquí. ' +
          'Asegúrate de que tu endpoint acepte Authorization "Basic", Content-Type "application/json" y el método "POST".',
        connectSuccessful: 'Integración con tu endpoint de webhooks configurada exitosamente',
        syncError: 'Sincronización con el endpoint de webhooks no exitosa. {err}',
        connectError: 'Error al conectar con el endpoint de webhooks. {err}',
        deleteSuccessful: 'Integración con el endpoint de webhooks eliminada exitosamente',
        deleteError: 'Error al eliminar la integración con el endpoint de webhooks. {err}'
      },
      loom: {
        description: 'Incrusta y gestiona videos de Loom directamente en tus cursos.',
        explanation: 'Abre tu cuenta de Loom y copia el nombre de la aplicación y la clave de la aplicación',
        syncSuccessful: 'Sincronización con Loom exitosa',
        syncError: 'Sincronización con Loom no exitosa. {err}',
        connectSuccessful: '¡Integración con el SDK de Loom exitosa!',
        connectError: 'Error al conectar con el SDK de Loom. {err}',
        deleteSuccessful: 'Integración con el SDK de Loom eliminada exitosamente',
        deleteError: 'Error al eliminar la integración con el SDK de Loom. {err}'
      },
      disqus: {
        description: 'Añade hilos de discusión e interacción social a tus cursos.',
        explanation: 'Abre tu cuenta de Disqus y copia el nombre de la aplicación',
        syncSuccessful: 'Sincronización con Disqus exitosa',
        syncError: 'Sincronización con Disqus no exitosa. {err}',
        connectSuccessful: '¡Integración con Disqus exitosa!',
        connectError: 'Error al conectar con Disqus. {err}',
        deleteSuccessful: 'Integración con Disqus eliminada exitosamente',
        deleteError: 'Error al eliminar la integración con Disqus. {err}'
      },
      stripe: {
      description: 'Habilitar pagos y facturación automática.',
        explanation: '<ol>\n' +
          '    <li>\n' +
          '      <strong>Clave Publicable:</strong><br />\n' +
          '      Abre tu <a href="https://dashboard.stripe.com" target="_blank" class="tw-underline">Panel de Stripe</a> y copia la <strong>Clave Publicable</strong> en la configuración de API.\n' +
          '    </li>\n' +
          '    <li>\n' +
          '      <strong>ID de Tasa de Impuesto Predeterminada:</strong><br />\n' +
          '      Ve a la sección de <a href="https://dashboard.stripe.com/tax-rates" target="_blank" class="tw-underline">Tasas de Impuesto</a> en tu panel de Stripe.<br />\n' +
          '      - Copia un <strong>ID de Tasa de Impuesto Inclusivo</strong> existente, o<br />\n' +
          '      - Crea una nueva tasa de impuesto inclusiva si es necesario.\n' +
          '    </li>\n' +
          '    <li>\n' +
          '      <strong>País de Tributación:</strong><br />\n' +
          '      Selecciona el país donde tu empresa está registrada para efectos fiscales.<br />\n' +
          '      - Solo los usuarios ubicados en este país estarán sujetos a impuestos.\n' +
          '    </li>\n' +
          '  </ol>',
        syncSuccessful: 'Sincronización con Stripe completada con éxito',
        syncError: 'La sincronización con Stripe no fue completada con éxito. {err}',
        connectSuccessful: 'Integración con Stripe completada con éxito',
        connectError: 'Error al conectar con Stripe. {err}',
        deleteSuccessful: 'Integración con Stripe eliminada correctamente',
        deleteError: 'Error al eliminar la integración con Stripe. {err}'
      },
      liqpay: {
        description: 'Acepta pagos ucranianos fácilmente.',
        explanation: 'Abre tu panel de LiqPay y copia las claves pública y privada. Indica si es un entorno de pruebas (sandbox).',
        syncSuccessful: 'Sincronización con LiqPay exitosa',
        syncError: 'Sincronización con LiqPay no exitosa. {err}',
        connectSuccessful: 'Integración con LiqPay configurada exitosamente',
        connectError: 'Error al conectar con LiqPay. {err}',
        deleteSuccessful: 'Integración con LiqPay eliminada exitosamente',
        deleteError: 'Error al eliminar la integración con LiqPay. {err}'
      },
      revolut: {
        description: 'Habilita pagos internacionales con la integración de Revolut.',
        explanation: 'Abre tu panel de Revolut y copia las claves secretas del cliente.',
        syncSuccessful: 'Sincronización con Revolut exitosa',
        syncError: 'Sincronización con Revolut no exitosa. {err}',
        connectSuccessful: 'Integración con Revolut configurada exitosamente',
        connectError: 'Error al conectar con Revolut. {err}',
        deleteSuccessful: 'Integración con Revolut eliminada exitosamente',
        deleteError: 'Error al eliminar la integración con Revolut. {err}'
      },
      open_ai: {
        description: 'Genera contenido para cursos usando tu cuenta de OpenAI.',
        explanation: 'Abre tu panel de OpenAI y copia tu clave API',
        syncSuccessful: 'Sincronización con OpenAI exitosa',
        syncError: 'Sincronización con OpenAI no exitosa. {err}',
        connectSuccessful: 'Integración con OpenAI configurada exitosamente',
        connectError: 'Error al conectar con OpenAI. {err}',
        deleteSuccessful: 'Integración con OpenAI eliminada exitosamente',
        deleteError: 'Error al eliminar la integración con OpenAI. {err}'
      },
      people_force: {
        description: 'Sincroniza registros y estructura de empleados directamente.',
        explanation: 'Abre tu panel de PeopleForce y copia tu clave API',
        syncSuccessful: 'Sincronización con PeopleForce exitosa',
        syncError: 'Sincronización con PeopleForce no exitosa. {err}',
        connectSuccessful: 'Integración con PeopleForce configurada exitosamente',
        connectError: 'Error al conectar con PeopleForce. {err}',
        deleteSuccessful: 'Integración con PeopleForce eliminada exitosamente',
        deleteError: 'Error al eliminar la integración con PeopleForce. {err}'
      },
      rippling: {
        description: 'Automatiza la gestión de usuarios y grupos fácilmente.',
        explanation: 'Si eliges API Key como modo de autenticación, debes ' +
          'abrir tu panel de Rippling y copiar tu clave API. ' +
          'No necesitas hacer nada si eliges el modo de autenticación por credenciales de usuario.',
        syncSuccessful: 'Sincronización con Rippling exitosa',
        syncError: 'Sincronización con Rippling no exitosa. {err}',
        connectSuccessful: 'Integración con Rippling configurada exitosamente',
        connectError: 'Error al conectar con Rippling. {err}',
        deleteSuccessful: 'Integración con Rippling eliminada exitosamente',
        deleteError: 'Error al eliminar la integración con Rippling. {err}'
      },
      deel: {
        description: 'Sincroniza equipos distribuidos sin problemas.',
        explanation: 'Abre tu panel de Deel y copia la clave de acceso API.',
        syncSuccessful: 'Sincronización con Deel exitosa',
        syncError: 'Sincronización con Deel no exitosa. {err}',
        connectSuccessful: 'Integración con Deel configurada exitosamente',
        connectError: 'Error al conectar con Deel. {err}',
        deleteSuccessful: 'Integración con Deel eliminada exitosamente',
        deleteError: 'Error al eliminar la integración con Deel. {err}'
      },
      monobank: {
        description: 'Conecta Monobank para flujos de pago locales.',
        explanation: 'Abre tu panel de Monobank y copia tu xToken y xCms si aplica.',
        syncSuccessful: 'Sincronización con Monobank exitosa',
        syncError: 'Sincronización con Monobank no exitosa. {err}',
        connectSuccessful: 'Integración con Monobank configurada exitosamente',
        connectError: 'Error al conectar con Monobank. {err}',
        deleteSuccessful: 'Integración con Monobank eliminada exitosamente',
        deleteError: 'Error al eliminar la integración con Monobank. {err}'
      },
      hi_bob: {
        description: 'Mantén personas y permisos sincronizados sin esfuerzo.',
        explanation: 'Inicia sesión en tu panel de HiBob y copia tus claves clientId y clientSecret.',
        syncSuccessful: 'Sincronización con HiBob exitosa',
        syncError: 'Sincronización con HiBob no exitosa. {err}',
        connectSuccessful: 'Integración con HiBob configurada exitosamente',
        connectError: 'Error al conectar con HiBob. {err}',
        deleteSuccessful: 'Integración con HiBob eliminada exitosamente',
        deleteError: 'Error al eliminar la integración con HiBob. {err}'
      },
      alexis_hr: {
        description: 'Alinea usuarios y roles desde tu núcleo de HR.',
        explanation: 'Inicia sesión en tu panel de AlexisHR y copia tus claves clientSecret.',
        syncSuccessful: 'Sincronización de usuarios con AlexisHR exitosa. Ve a la consola de gestión de usuarios para revisar las invitaciones.',
        syncError: 'Sincronización de usuarios con AlexisHR no exitosa. {err}',
        connectSuccessful: 'Integración con tu API de AlexisHR configurada exitosamente',
        connectError: 'Error al conectar con AlexisHR. {err}',
        deleteSuccessful: 'Integración con API de AlexisHR eliminada exitosamente',
        deleteError: 'Error al eliminar la integración con AlexisHR. {err}'
      },
      intercom: {
        description: 'Chatea, incorpora y segmenta usuarios según sus interacciones.',
        explanation: '<div tw-leading-[1.5]><div class="tw-mb-3">Para integrar con Intercom, sigue estos pasos esenciales:</div>' +
          '<div class="tw-mb-1.5"><strong>1.</strong> Crea una App en Intercom <br>Ve a Configuración > Integraciones > Intercom Developer Hub y crea una app para habilitar acceso API. Tras crearla, obtendrás un Access Token.</div>' +
          '<div class="tw-mb-1.5"><strong>2.</strong> Instala Intercom Messenger en tu sitio <br>Ve a Configuración > Canales > Messenger > Instalar y copia el appId de los ejemplos de código.</div>' +
          '<div class="tw-mb-1.5"><strong>3.</strong> Obtén el Web Identity Secret <br>Esto se encuentra en la sección de Instalación bajo Verificación de Identidad.</div></div>',
        syncSuccessful: 'Sincronización con Intercom exitosa.',
        syncError: 'Sincronización con Intercom no exitosa. {err}',
        connectSuccessful: '¡Integración con Intercom exitosa!',
        connectError: 'Error al conectar con Intercom. {err}',
        deleteSuccessful: 'Integración con Intercom eliminada exitosamente.',
        deleteError: 'Error al eliminar la integración con Intercom. {err}'
      },
      brevo: {
        description: 'Lanza campañas automáticas para involucrar a tus alumnos.',
        eventTemplateMappingLabel: 'Mapeo de Plantillas',
        eventTemplateMappingDescription: 'Asigna eventos de Workademy a tus plantillas de Brevo ingresando los IDs de plantilla correspondientes.',
        explanation: 'Inicia sesión en tu <strong><u><a href="https://app.brevo.com/settings/keys/api" target="_blank">panel de Brevo</a></u></strong> y copia tu clave API.',
        syncSuccessful: 'Sincronización con Brevo completada con éxito.',
        syncError: 'La sincronización con Brevo no fue completada con éxito. {err}',
        connectSuccessful: 'Integración con Brevo configurada correctamente',
        connectError: 'Error al conectar con Brevo. {err}',
        deleteSuccessful: 'Integración con Brevo eliminada correctamente',
        deleteError: 'Error al eliminar la integración con Brevo. {err}',
        templateMappingExplanation: 'Los IDs de plantilla se pueden encontrar en tu <strong><u><a href="https://app.brevo.com/templates/listing" target="_blank">cuenta de Brevo</a></u></strong> en la sección de Plantillas de Correo',
        defaultEmailsWhenNoMapping: 'Aplicar correos predeterminados cuando no haya mapeo (recomendado).',
        templateMappingHeaders: {
          lmsTemplate: 'Eventos de Workademy',
          audience: 'Audiencia',
          description: 'Descripción',
          brevoTemplateID: 'ID de Plantilla de Brevo'
        },
        templateMappingAudience: {
          learner: 'estudiante',
          admin: 'administrador',
          any: 'cualquiera'
        },
        templateMapping: {
          check_user_courses_notification_event: {
            title: 'Revisar progreso del curso',
            description: 'Enviado al estudiante cuando se le notifica inactividad'
          },
          new_open_ended_question_answered_event: {
            title: 'Nueva respuesta de pregunta abierta',
            description: 'Notificación a un administrador cuando un estudiante envía una respuesta de pregunta abierta'
          },
          new_open_ended_question_graded_event: {
            title: 'Nueva pregunta abierta calificada',
            description: 'Alerta al estudiante cuando su pregunta abierta ha sido calificada'
          },
          pending_user_course_approval_event: {
            title: 'Inscripción pendiente',
            description: 'Notifica al administrador sobre una inscripción pendiente en un curso'
          },
          registration_event: {
            title: 'Nuevo usuario registrado',
            description: 'Enviado cuando un nuevo usuario se registra en la plataforma'
          },
          reset_password_event: {
            title: 'Solicitud de restablecimiento de contraseña',
            description: 'Enviado cuando un usuario solicita restablecer su contraseña'
          },
          user_course_assigned_event: {
            title: 'Asignación de nuevo curso',
            description: 'Notifica al estudiante sobre un nuevo curso asignado'
          }
        }
      },
      salesforce_mc: {
        description: 'Salesforce Marketing Cloud',
        explanation: ' Envíe emails transaccionales automatizados y personalizados desde Workademy utilizando su cuenta de Salesforce Marketing Cloud.',
        syncSuccessful: 'Sincronización con Salesforce Marketing Cloud exitosa.',
        syncError: 'Sincronización con Salesforce Marketing Cloud no exitosa. {err}',
        connectSuccessful: '¡Integración con Salesforce Marketing Cloud exitosa!',
        connectError: 'Error al conectar con Salesforce Marketing Cloud. {err}',
        deleteSuccessful: 'Integración con Salesforce Marketing Cloud eliminada correctamente.',
        deleteError: 'Error al eliminar la integración con Salesforce Marketing Cloud. {err}',
        subdomainLabel: 'Subdominio',
        templateMapping: {
          welcome_to_course_event: {
            title: 'Bienvenido al evento del curso',
            description: 'Bienvenido al evento del curso'
          }
        },
        templateMappingHeaders: {
          salesforceTemplateID: 'ID de plantilla'
        }
      }
    },
    learningArtifactsManagement: {
      learningArtifactsManagement: 'Gestión de Artefactos de Aprendizaje',
      skillsTitle: 'Habilidades',
      achievementsTitle: 'Logros',
      avatarsTitle: 'Avatares',
      skillLevel: 'Sin Nivel | Nivel 1 | Nivel {n}',
      skillLevelNameLabel: 'Nombre de la Habilidad',
      skillLevelDescriptionLabel: 'Descripción de la Habilidad',
      editCard: {
        numberOfLevelsSubtitle: 'Sin niveles | Sin niveles | {n} niveles'
      },
      noSkills: 'Aún no se han adquirido habilidades',
      noAchievements: 'Aún no hay logros'
    },
    workspaceManagement: {
      title: 'Gestión del workspace',
      tabs: {
        general: {
          title: 'General',
          workspaceName: {
            title: 'Nombre del workspace',
            subtitle: 'Establece o edita el nombre del workspace.',
            label: 'Escribe el nombre del workspace',
            rules: {
              required: 'El nombre es obligatorio',
              lessThan: 'El nombre debe tener menos de 64 caracteres',
              invalidCharacters: 'No se permiten caracteres especiales'
            }
          },
          language: {
            title: 'Idioma Predeterminado',
            subtitle: 'Configura el idioma predeterminado para el workspace.',
            label: 'Elige el idioma predeterminado'
          },
          privacySettings: {
            title: 'Configuración de Privacidad del workspace',
            subtitle: 'Controla si el workspace es público y puede ser indexado por los motores de búsqueda.',
            label: 'workspace público'
          },
          inviteOnly: {
            title: 'Opciones de Ingreso al workspace',
            subtitle: 'Define si el workspace está abierto para que cualquiera se una o si es solo por invitación.',
            label: 'Solo por invitación'
          }
        },
        apiKeys: {
          title: 'Clave API',
          noApiKeys: 'Aún no tienes una clave API',
          errorCreating: 'Error al crear la clave API: {error}',
          errorDeleting: 'Error al eliminar la clave API: {error}',
          copySuccessful: 'Clave API copiada con éxito.',
          copyError: 'No se pudo copiar la clave API: {error}',
          createApiKeyButton: 'Crear Clave API Ahora',
          removeApiKeyButton: 'Eliminar Clave API'
        },
        userInteraction: {
          title: 'Interacción del Usuario'
        },
        seoMetadata: {
          title: 'SEO y Metadatos',
          subtitle: 'Gestiona las etiquetas meta para motores de búsqueda y redes sociales (e.g., OpenGraph, Twitter Cards).',
          pageTitleLabel: 'Título de la página',
          pageKeywordsLabel: 'Palabras clave de la página',
          pageDescriptionLabel: 'Descripción',
          twitter: {
            title: 'Twitter/X',
            titleLabel: 'Título en Twitter',
            descriptionLabel: 'Descripción'
          },
          opengraph: {
            title: 'OpenGraph',
            titleLabel: 'Título OpenGraph',
            descriptionLabel: 'Descripción OpenGraph'
          },
          rules: {
            maxChars: 'Máximo {characters} caracteres',
            alphaNumericSpacePunctuation: 'Solo se permiten caracteres alfanuméricos, espacios y signos de puntuación',
            alphaNumericCommasSpaces: 'Solo se permiten caracteres alfanuméricos, comas y espacios',
            alphaNumericCommasSpacesPipe: 'Solo se permiten caracteres alfanuméricos, espacios y símbolos |, -',
            alphaNumericCommasSpacesPipeDash: 'Solo se permiten caracteres alfanuméricos, espacios y símbolos |, -, :',
            invalidOpenGraphImage: 'La imagen subida debe estar en uno de los siguientes formatos: JPG, PNG o GIF'
          }
        },
        popups: {
          title: 'Pop-ups',
          preEnrollPopup: {
            title: 'Pop-up de Preinscripción al Curso',
            addDefaultContentButton: 'Rellenar con Contenido Predeterminado'
          }
        },
        lookandfeel: {
          title: 'Apariencia y Diseño',
          folderView: {
            title: 'Visualización de Assets',
            subtitle: 'Configura cómo se muestran los cursos a los estudiantes',
            label: 'Vista',
            folder: 'Carpetas',
            flat: 'Plano'
          }
        }
      }
    },
    mainAdminPage: {
      checkStudentsProgressTitle: 'Revisar el progreso de los estudiantes',
      checkStudentsProgressDescription: 'Consulta el progreso de los estudiantes en cada curso de este workspace',
      checkAnalyticsDashboardTitle: 'Ver el panel de análisis',
      checkAnalyticsDashboardDescription: 'Consulta las métricas generales de cada curso en este workspace',
      manageRolesTitle: 'Gestionar el equipo de este workspace',
      manageRolesDescription: 'Añadir o revocar permisos de creación de cursos a los usuarios de este workspace',
      manageUsersTitle: 'Gestionar usuarios y grupos del workspace',
      manageUsersDescription: 'Asignar habilidades, bloquear usuarios, añadir o revocar permisos de los usuarios de este workspace. Sincronizar usuarios desde plataformas integradas.',
      manageCampaignsTitle: 'Gestionar campañas y códigos de inscripción',
      manageCampaignsDescription: 'Añadir, editar y eliminar campañas para cursos, así como gestionar sus códigos de inscripción o vales',
      manageIntegrationsTitle: 'Gestionar integraciones',
      manageIntegrationsDescription: 'Añadir, gestionar y eliminar integraciones con herramientas y plataformas de terceros',
      manageLearningArtefactsTitle: 'Gestionar artefactos de aprendizaje',
      manageLearningArtefactsDescription: 'Añadir, gestionar y eliminar artefactos de aprendizaje como habilidades',
      manageWorkspaceTitle: 'Gestionar el workspace',
      manageWorkspaceDescription: 'Gestionar la apariencia del workspace, pop-ups globales y atributos del workspace.'
    },
    menu: {
      home: 'Inicio',
      staffMgmt: 'Gestión del Personal',
      usersMgmt: 'Gestión de Usuarios',
      groupsMgmt: 'Gestión de Grupos',
      progress: 'Progreso de los Estudiantes',
      dashboard: 'Panel de Análisis',
      campaignMgmt: 'Gestión de Campañas',
      integrationsMgmt: 'Gestión de Integraciones',
      artifactsMgmt: 'Gestión de Habilidades',
      workspaceMgmt: 'Gestión del workspace'
    },
    library: {
      supported: {
        IMAGE: 'imágenes',
        PDF: 'pdf',
        MP3: 'mp3',
        MP4: 'mp4',
        ZIP: 'zip',
        CSV: 'csv',
        XLS: 'excel',
        JSON: 'json'
      },
      maxSizeAllFiles: 'Los PDFs no deben superar los {pdfSize}MB, los videos – {videoSize}MB, otros archivos – {fileSize}MB',
      maxSizeNormalFiles: 'Cada archivo no debe superar los {fileSize}MB',
      fileTypeWithArticle: {
        IMAGE: 'una imagen',
        PDF: 'un pdf',
        MP3: 'un MP3',
        MP4: 'un MP4',
        XLS: 'un archivo de excel'
      },
      title: 'Biblioteca de Recursos',
      searchLibrary: 'Buscar en la biblioteca',
      searchLibraryLabel: 'Buscar archivos por nombre',
      uploadTitle: 'Subir',
      uploaderHelpText: 'Elige un archivo {supported}',
      uploadImagesOrMp3: 'otros formatos',
      uploadPdfs: 'PDF',
      errorUploadingFile: 'Hubo un error al subir el archivo: {err}',
      successUploadingFile: 'El archivo {fileName} se subió correctamente',
      clickHereToOpenLibrary: 'Haz clic aquí para abrir la biblioteca',
      dragImageHere: 'Arrastra la imagen aquí',
      dragFileFromLibrary: 'Arrastra {fileType} desde la biblioteca',
      dragPdfHere: 'Arrastra el pdf aquí',
      fileName: 'Nombre del archivo',
      category: 'Categoría',
      updatingFile: 'Actualizando el archivo en todas partes',
      categories: {
        ALL: 'Todos',
        AVATAR: 'Avatar',
        COVER_IMAGE: 'Portadas',
        CONTENT: 'Contenido',
        FRAME: 'Logros',
        OTHER: 'Otros'
      },
      errors: {
        type: 'Tipo de archivo no válido. Solo se permiten archivos {supported}',
        pdfSize: 'Los archivos PDF no deben superar los {size}MB',
        mp4Size: 'Los archivos MP4 no deben superar los {size}MB',
        size: 'Los archivos no deben superar los {size}MB'
      },
      buttons: {
        download: 'Descargar original',
        delete: 'Eliminar de la biblioteca',
        replace: 'Reemplazar archivo'
      },
      libraryItemTooltip: '<h6>{name}</h6><hr><div class="caption">Haz clic para copiar la URL.</div>',
      showCourseFiles: 'Los archivos mostrados fueron subidos dentro del curso actual. Activa el botón para ver todos los archivos del workspace.',
      showWorkspaceFiles: 'Se muestran todos los archivos del workspace. Desactiva el botón para ver solo los archivos subidos dentro del curso actual.',
      showWorkspaceFilesToggleButton: 'Mostrar Todos los Archivos del workspace'
    },
    sectionsLibrary: {
      title: 'Secciones',
      previewAndDrag: 'haz clic en el icono para previsualizar y añadir una nueva sección a tu lección'
    },
    analytics: {
      title: 'Análisis',
      startDateLabel: 'Fecha de inicio',
      endDateLabel: 'Fecha de fin',
      aggregateByLabel: 'Agrupar por',
      customInterval: 'Intervalo personalizado',
      selectedIntervalWasNotPossible: 'No hay datos para el período seleccionado. Se usará el período más amplio del que se pudo extraer datos.',
      aggregations: {
        DAY: 'día',
        MONTH: 'mes',
        MINUTE: 'minuto',
        WEEK: 'semana',
        YEAR: 'año',
        HOUR: 'hora'
      },
      intervals: {
        YESTERDAY: 'ayer',
        LAST24H: 'últimas 24 horas',
        LASTWEEK: 'última semana',
        PREVIOUS7DAYS: 'últimos 7 días',
        LASTMONTH: 'último mes',
        LAST3MONTHS: 'últimos 3 meses',
        LAST6MONTHS: 'últimos 6 meses',
        PREVIOUS30DAYS: 'últimos 30 días',
        PREVIOUS365DAYS: 'últimos 365 días',
        LASTYEAR: 'último año',
        CUSTOM: 'personalizado'
      },
      dashboard: {
        itemsPerPageText: 'Filas por página',
        allCourses: 'Todos los cursos',
        allCountries: 'Todos los países',
        allCampaigns: 'Todas las campañas',
        facts: {
          lectures: {
            title: 'Lecciones'
          },
          enrolments: {
            title: 'Inscripciones en cursos'
          },
          questions: {
            title: 'Respuestas a preguntas'
          },
          certificates: {
            title: 'Certificados'
          },
          campaigns: {
            title: 'Campañas'
          },
          workspaceUsers: {
            title: 'Usuarios'
          }
        },
        coursesLabel: 'Cursos',
        countriesLabel: 'Países',
        campaignsLabel: 'Campañas',
        modulesLabel: 'Módulos',
        certificatesLabel: 'Certificados',
        lecturesLabel: 'Lecciones',
        questionsLabel: 'Preguntas',
        workspaceUsersLabel: 'Usuarios',
        enrolmentsCaption: 'inscritos',
        seenCaption: 'visto',
        answeredCaption: 'respondido',
        issuedLabel: 'emitidos',
        campaignsCaption: 'canjeados',
        workspaceUsersCaption: 'sesiones iniciadas',
        funnelCaption: 'conversión de los cursos principales',
        funnelLabel: 'Embudo',
        funnel: {
          amountLogin: 'Usuarios con sesión iniciada',
          amountEnrolments: 'Usuarios inscritos en cursos',
          amountCertificates: 'Certificados emitidos',
          enrollments: 'Inscripciones en cursos',
          finishedModule: 'Módulo completado'
        },
        chartLabels: {
          enrolments: {
            enrolled: 'Inscripciones',
            started: 'Iniciado',
            ended: 'Finalizado',
            abandoned: 'Abandonado',
            amountStarted: 'Inscripciones',
            amountMsCourseStarted: 'Iniciado',
            amountEnded: 'Finalizados',
            amountAbandoned: 'Abandonados',
            avgDaysBetweenEnded: 'Media de días para finalizar'
          },
          certificates: {
            amountIssued: 'Emitidos',
            avgScore: 'Puntuación media',
            minScore: 'Puntuación mínima',
            maxScore: 'Puntuación máxima'
          },
          questions: {
            amountCorrect: 'Respuestas correctas',
            amountWrong: 'Respuestas incorrectas',
            maxWrongAttempts: 'Máximos intentos',
            minWrongAttempts: 'Mínimos intentos',
            avgWrongAttempts: 'Media de intentos'
          },
          lectures: {
            seen: 'Visto',
            amountSeen: 'Lecciones vistas'
          },
          campaigns: {
            amountRedeemed: 'Canjeados'
          },
          workspaceUsers: {
            amountLogin: 'Sesiones iniciadas',
            amountRegister: 'Registrados'
          }
        },
        noDataToDisplay: 'No hay datos para mostrar',
        dataLoading: 'Cargando...'
      },
      validationRules: {
        startDateLessEndDate: 'La fecha de inicio debe ser anterior a la fecha de fin'
      }
    },
    createCoursesHeader: {
      create: 'Crear',
      chooseOther: 'Otras opciones de creación de cursos',
      beforeCreatingCourseTitle: 'Antes de crear un curso',
      beforeCreatingCourseDescription: 'Por favor, lee este PDF antes de crear un curso. Te ayudará a estructurar un curso perfecto.',
      beforeCreatingCourseAction: 'Descargar PDF',
      createCourseTitle: 'Crear un curso',
      createCourseDescription: 'Elige la forma más conveniente para crear un curso.',
      createCourseAction: 'Comenzar aquí',
      createLearningPathTitle: 'Crear una ruta de aprendizaje',
      createLearningPathDescription: 'Crea un plan de aprendizaje a partir de los cursos existentes.',
      createLearningPathAction: 'Comenzar aquí'
    },
    learningPaths: {
      title: 'Rutas de Aprendizaje',
      noLearningPaths: 'Aún no se han creado rutas de aprendizaje.',
      createNewLearningPathTitle: 'Crear Nueva Ruta de Aprendizaje',
      editLearningPathTitle: 'Editar Ruta de Aprendizaje {name}',
      saveInfo: {
        success: 'La ruta de aprendizaje {name} se guardó correctamente.',
        error: 'Hubo un error al guardar la ruta de aprendizaje {name}: {err}.'
      },
      stepper: {
        title: 'Título e Imagen de Portada',
        titleLabel: 'Nombre de la Ruta de Aprendizaje',
        titleErrorMessage: 'El Nombre de la Ruta de Aprendizaje es obligatorio',
        coverImageChooser: 'Elige una imagen de portada para la ruta de aprendizaje',
        description: 'Descripción de la Ruta de Aprendizaje',
        courses: 'Cursos de la Ruta de Aprendizaje',
        learningPathSteps: 'Pasos y Objetivos de la Ruta de Aprendizaje',
        coursesOrder: 'Orden de los Cursos',
        users: 'Asignar Usuarios',
        achievements: 'Logros',
        createLearningPath: 'Crear Ruta de Aprendizaje',
        editLearningPath: 'Actualizar Ruta de Aprendizaje',
        checkAndSave: 'Revisar y Guardar',
        searchUsers: 'Buscar Usuarios',
        skills: 'Asignar Habilidades',
        searchSkills: 'Buscar Habilidades',
        assignUserToTheLearningPathButton: 'Asignar Usuario',
        assignSkillToTheLearningPathButton: 'Asignar Habilidad',
        removeSkillFromTheLearningPathButton: 'Eliminar Habilidad',
        assignGroupsToUserTitle: 'Asignar Grupos',
        searchGroups: 'Buscar Grupos',
        certifiable: 'Certificable',
        timing: 'Tiempo de la Ruta de Aprendizaje',
        achievementItem: {
          name: 'Escribe el nombre del objetivo',
          description: 'Escribe la descripción del objetivo',
          image: 'Añadir una imagen para el logro'
        },
        loadingCourses: 'Cargando Cursos',
        selectedCourses: 'Ningún curso seleccionado | {n} curso seleccionado | {n} cursos seleccionados',
        info: {
          title: 'Agrega un título y una imagen de portada para la ruta de aprendizaje aquí. Podrás cambiarlo en el futuro.',
          description: 'Añade aquí la descripción de la ruta de aprendizaje. Se puede modificar en el futuro.',
          courses: 'Elige los cursos que formarán parte de la ruta de aprendizaje.',
          coursesOrder: 'Ordena los cursos en el orden adecuado.',
          users: 'Elige los usuarios a los que se les asignará la ruta de aprendizaje.',
          skills: 'Elige los niveles de habilidades que los usuarios adquirirán al completar la ruta de aprendizaje.',
          achievements: 'Crea logros para cada uno de los cursos de la ruta de aprendizaje.',
          checkAndSave: 'Revisa los cursos y logros y guarda la ruta de aprendizaje antes de asignar usuarios.',
          saveBeforeUser: 'Por favor, agrega al menos un título a tu ruta de aprendizaje antes de asignar usuarios.',
          learningPathSteps: 'Define los pasos de la ruta de aprendizaje aquí, los cursos correspondientes y los objetivos. ' +
            'Arrastra y suelta los pasos para cambiar su orden.',
          certifiable: 'Habilita la emisión de certificados al final de la ruta de aprendizaje.',
          timing: {
            title: 'Gestionar el Tiempo de la Ruta de Aprendizaje',
            description: 'Configura las opciones de tiempo para tu ruta de aprendizaje. Especifica el número de días para enviar recordatorios de inactividad y la duración máxima permitida para completarla antes de su cancelación automática. Solo se aplicará a las rutas de aprendizaje iniciadas después de esta configuración.',
            reminderAfterInactivity: {
              title: 'Enviar un Recordatorio tras Inactividad',
              description: 'Envía automáticamente un recordatorio a los alumnos si no han completado la ruta de aprendizaje dentro de [N días] desde la fecha de inicio. Mantén a los alumnos comprometidos con recordatorios oportunos.',
              label: 'Días Hasta el Recordatorio',
              tooltip: 'Introduce el número de días después de la fecha de inicio para enviar un recordatorio de rutas de aprendizaje incompletas.'
            },
            automaticCancellationTime: {
              title: 'Establecer Plazo de Finalización',
              description: 'Define el tiempo máximo (en días) permitido para completar la ruta de aprendizaje. Si el alumno no la finaliza dentro de [N días] desde la fecha de inicio, la ruta de aprendizaje se cancelará automáticamente. Solo se aplicará a rutas iniciadas después de esta configuración.',
              label: 'Días Hasta la Cancelación',
              tooltip: 'Introduce el número máximo de días permitidos para completar la ruta de aprendizaje. Después de este período, se cancelará automáticamente.'
            },
            automaticRetake: {
              title: 'Reinicio Automático',
              description: 'Reinicia automáticamente la ruta de aprendizaje (si aún no ha sido iniciada) después de un cierto período de tiempo desde que fue iniciada por última vez.',
              retakeErrorMessage: 'El plazo de finalización debe ser menor que el período de reinicio.',
              labelValue: 'Valor de tiempo',
              labelUnit: 'Unidad de tiempo'
            }
          }
        },
        learningPathStepsPage: {
          addNewStepButton: 'Crear un Nuevo Paso Basado en un Curso',
          addNewGoalButton: 'Añadir un Objetivo',
          stepTitle: 'Título del Paso',
          stepDescription: 'Descripción del Paso',
          addEditGoal: 'Añadir/Editar Objetivo',
          saveGoal: 'Guardar Objetivo',
          courseCardTitle: 'Curso',
          goalCardTitle: 'Objetivo'
        }
      }
    },
    skills: {
      newSkillTitle: 'Crear Nueva Habilidad',
      editSkillTitle: 'Editar Habilidad {name}',
      titleLabel: 'Nombre de la Habilidad',
      createSkill: 'Crear Habilidad',
      editSkill: 'Actualizar Habilidad',
      stepper: {
        title: 'Título e Imagen de Portada',
        titleLabel: 'Nombre de la Habilidad',
        coverImageChooser: 'Elige una Imagen de Portada para la Habilidad',
        description: 'Descripción de la Habilidad',
        levels: 'Niveles de la Habilidad',
        info: {
          title: 'Agrega un título y una imagen de portada para la habilidad aquí. Podrás cambiarlo en el futuro.',
          description: 'Añade aquí la descripción de la habilidad. Se puede modificar en el futuro.',
          levels: 'Puedes establecer un nivel único o seleccionar varios niveles y asignar una descripción diferente a cada uno. <strong>Todos estos ajustes se pueden modificar más adelante.</strong>'
        },
        createSkill: 'Crear Habilidad',
        editSkill: 'Editar Habilidad',
        levelTypesLabel: 'Tipos de Nivel',
        uniqueLevelLabel: 'Nivel Único',
        multipleLevelLabel: 'Niveles Múltiples',
        addNewSkillLevelButton: 'Añadir Nivel'
      }
    },
    groups: {
      newGroupTitle: 'Crear Nuevo Grupo',
      editGroupTitle: 'Editar Grupo {name}',
      titleLabel: 'Nombre del Grupo',
      createGroup: 'Crear Grupo',
      editGroup: 'Actualizar Grupo',
      stepper: {
        title: 'Título del Grupo',
        titleLabel: 'Nombre del Grupo',
        description: 'Descripción del Grupo',
        users: 'Usuarios del Grupo',
        courses: 'Cursos del Grupo',
        learningPaths: 'Rutas de Aprendizaje del Grupo',
        titleErrorMessage: 'El título del grupo es obligatorio',
        maximumCharactersErrorMessage: 'Se ha superado el límite máximo de caracteres.',
        info: {
          title: 'Añade un título para el grupo aquí. Podrás cambiarlo en el futuro.',
          description: 'Añade una descripción para el grupo aquí. Se puede modificar en el futuro.',
          users: 'Aquí puedes añadir y eliminar usuarios.',
          courses: 'Asigna cursos al grupo',
          learningPaths: 'Asigna rutas de aprendizaje al grupo'
        },
        addUserToGroupButton: 'Añadir usuario',
        removeUserToGroupButton: 'Eliminar usuario',
        createGroup: 'Crear Grupo',
        editGroup: 'Actualizar Grupo'
      }
    },
    folders: {
      newFolderTitle: 'Crear Nueva Carpeta',
      editFolderTitle: 'Editar Carpeta {name}',
      titleLabel: 'Nombre de la Carpeta',
      createFolder: 'Crear Carpeta',
      editFolder: 'Actualizar Carpeta',
      stepper: {
        title: 'Título de la Carpeta',
        titleLabel: 'Nombre de la Carpeta',
        description: 'Descripción de la Carpeta',
        courses: 'Cursos en la Carpeta',
        info: {
          title: 'Añade un título para la carpeta aquí. Podrás cambiarlo en el futuro.',
          description: 'Añade una descripción para la carpeta aquí. Se puede modificar en el futuro.',
          courses: 'Añade cursos a la carpeta'
        },
        addCourseToFolderButton: 'Añadir curso',
        removeCourseFromFolderButton: 'Eliminar curso',
        createFolder: 'Crear Carpeta',
        editFolder: 'Actualizar Carpeta'
      }
    },
    statusMessages: {
      enrolledWithSuccess: 'El usuario {name} fue inscrito con éxito',
      enrolledWithError: 'Hubo un error al inscribir a {name}: {errorText}',
      unenrolledWithSuccess: 'El usuario {name} fue dado de baja con éxito',
      unenrolledWithError: 'Hubo un error al dar de baja a {name}: {errorText}',
      learningPathAssignedWithSuccess: 'El usuario {name} fue asignado a la ruta de aprendizaje con éxito',
      learningPathAssignedWithError: 'Hubo un error al asignar la ruta de aprendizaje al usuario {name}: {errorText}',
      learningPathDeletedWithSuccess: 'La ruta de aprendizaje {name} fue eliminada con éxito',
      learningPathDeletedWithError: 'Hubo un error al eliminar la ruta de aprendizaje: {errorText}',
      newSkillCreated: 'La habilidad {name} se creó con éxito',
      skillUpdated: 'La habilidad {name} se actualizó con éxito',
      skillCreatedWithError: 'Hubo un error al crear la habilidad {name}: {errorText}',
      skillAssignedToLearningPathWithSuccess: 'La habilidad {name} fue asignada a la ruta de aprendizaje con éxito',
      skillAssignedToLearningPathWithError: 'Hubo un error al asignar la habilidad a la ruta de aprendizaje: {errorText}',
      skillAssignedToUserWithSuccess: 'La habilidad {name} fue asignada al usuario {userName} con éxito',
      skillAssignedToUserWithError: 'Hubo un error al asignar la habilidad {name} al usuario {userName}: {errorText}',
      skillUpdatedWithError: 'Hubo un error al actualizar la habilidad {name}: {errorText}',
      addedToGroupWithSuccess: 'El usuario {userName} fue añadido al grupo {groupName} con éxito',
      addedToGroupWithError: 'Hubo un error al añadir el usuario {userName} al grupo {groupName}: {errorText}',
      removedFromGroupWithSuccess: 'El usuario {userName} fue eliminado del grupo {groupName} con éxito',
      removedFromGroupWithError: 'Hubo un error al eliminar el usuario {userName} del grupo {groupName}: {errorText}',
      newGroupCreated: 'El grupo {name} fue creado con éxito',
      groupCreatedWithError: 'Hubo un error al crear el grupo {name}: {errorText}',
      groupUpdated: 'El grupo {name} se actualizó con éxito',
      groupUpdatedWithError: 'Hubo un error al actualizar el grupo {name}: {errorText}',
      groupAssignedToUserWithSuccess: 'El usuario {userName} fue añadido al grupo {name} con éxito',
      groupAssignedToUserWithError: 'Hubo un error al asignar el usuario {userName} al grupo {name}: {errorText}',
      skillRemovedFromLearningPathWithSuccess: 'La habilidad {name} fue eliminada de la ruta de aprendizaje con éxito',
      skillRemovedFromLearningPathWithError: 'Hubo un error al eliminar la habilidad {name} de la ruta de aprendizaje: {errorText}',
      skillRemovedFromUserWithSuccess: 'La habilidad {name} fue eliminada del usuario {userName} con éxito',
      skillRemovedFromUserWithError: 'Hubo un error al eliminar la habilidad {name} del usuario {userName}: {errorText}',
      groupRemovedFromUserWithSuccess: 'El usuario {userName} fue eliminado del grupo {name} con éxito',
      groupRemovedFromUserWithError: 'Hubo un error al eliminar el usuario {userName} del grupo {name}: {errorText}',
      groupDeletedWithSuccess: 'El grupo {name} fue eliminado con éxito',
      groupDeletedWithError: 'Hubo un error al eliminar el grupo {name}: {errorText}',
      skillDeletedWithSuccess: 'La habilidad {name} fue eliminada con éxito',
      skillDeletedWithError: 'Hubo un error al eliminar la habilidad {name}: {errorText}',
      newFolderCreated: 'La carpeta {name} fue creada con éxito',
      folderCreatedWithError: 'Hubo un error al crear la carpeta {name}: {errorText}',
      folderUpdated: 'La carpeta {name} se actualizó con éxito',
      folderUpdatedWithError: 'Hubo un error al actualizar la carpeta {name}: {errorText}',
      folderAssignedToCourseWithSuccess: 'El curso {courseName} fue añadido a la carpeta {name} con éxito',
      folderAssignedToCourseWithError: 'Hubo un error al asignar el curso {courseName} a la carpeta {name}: {errorText}',
      folderRemovedFromCourseWithSuccess: 'El curso {courseName} fue eliminado de la carpeta {name} con éxito',
      folderRemovedFromCourseWithError: 'Hubo un error al eliminar el curso {courseName} de la carpeta {name}: {errorText}',
      folderDeletedWithSuccess: 'La carpeta {name} fue eliminada con éxito',
      folderDeletedWithError: 'Hubo un error al eliminar la carpeta {name}: {errorText}'
    },
    dialogs: {
      courseOwnersTitle: 'Propietarios y Editores del Curso',
      courseOwnersTable: {
        username: 'Correo Electrónico del Usuario',
        role: 'Rol',
        creatorRole: 'Creador',
        editorRole: 'Editor'
      },
      enrollButton: {
        text: 'Inscribir',
        title: {
          course: 'Inscribir Usuarios No Inscritos en el Curso',
          learningPath: 'Inscribir Usuarios No Inscritos en la Ruta de Aprendizaje'
        }
      },
      enrollNowButton: {
        text: '¡Inscribirse ahora!',
        title: 'Inscribir a todos en el grupo ahora'
      },
      linkButton: {
        text: 'Vincular',
        title: 'Inscribir automáticamente a los usuarios una vez asociados con el grupo'
      },
      unlinkButton: {
        text: 'Desvincular',
        title: 'Darse de baja automáticamente una vez desvinculados del grupo'
      },
      unenrollButton: {
        text: 'Dar de Baja',
        title: {
          course: 'Dar de Baja a Usuarios del Curso',
          learningPath: 'Dar de Baja a Usuarios de la Ruta de Aprendizaje'
        }
      },
      checkProgress: {
        text: 'Revisar Progreso',
        title: {
          course: 'Revisar el Progreso del Estudiante en el Curso',
          learningPath: 'Revisar el Progreso del Estudiante en la Ruta de Aprendizaje'
        }
      },
      assignButton: {
        text: 'Asociar',
        title: {
          course: 'Asociar el Grupo con el Curso',
          learningPath: 'Asociar el Grupo con la Ruta de Aprendizaje'
        }
      },
      unassignButton: {
        text: 'Desasociar',
        title: {
          course: 'Desasociar el Grupo del Curso',
          learningPath: 'Desasociar el Grupo de la Ruta de Aprendizaje'
        }
      },
      addAdminButton: {
        text: 'Agregar como Editor',
        title: {
          courseAdmins: 'Agregar al Usuario como Editor del Curso'
        }
      },
      removeAdminButton: {
        text: 'Eliminar Rol de Editor',
        title: {
          courseAdmins: 'Eliminar al Usuario como Editor del Curso'
        }
      },
      explanationGroups: {
        course: 'Haz clic en el botón <strong>Asociar</strong> para asociar un grupo con el curso. ' +
          'Después de esto, todos los nuevos usuarios añadidos al grupo serán inscritos automáticamente en el curso.' +
          '<br>Haz clic en el botón <strong>Inscribir</strong> para inscribir a todos los usuarios actuales del grupo en el curso.',
        learningPath: 'Haz clic en el botón <strong>Asociar</strong> para asociar un grupo con la ruta de aprendizaje. ' +
          'Después de esto, todos los nuevos usuarios añadidos al grupo serán inscritos automáticamente en la ruta de aprendizaje. ' +
          '<br>Haz clic en el botón <strong>Inscribir</strong> para inscribir a todos los usuarios actuales del grupo en la ruta de aprendizaje.'
      },
      explanationUsers: {
        course: 'Haz clic en el botón <strong>Inscribir</strong> para inscribir a un usuario en el curso. El usuario recibirá un correo electrónico.' +
          '<br>Haz clic en el botón <strong>Dar de Baja</strong> para desinscribir a un usuario del curso.',
        learningPath: 'Haz clic en el botón <strong>Inscribir</strong> para inscribir a un usuario en la ruta de aprendizaje. El usuario recibirá un correo electrónico.' +
          '<br>Haz clic en el botón <strong>Dar de Baja</strong> para desinscribir a un usuario de la ruta de aprendizaje.',
        courseAdmins: 'Haz clic en el botón <strong>Agregar como Editor</strong> para convertir a un usuario en editor del curso.' +
          '<br>Haz clic en el botón <strong>Eliminar Rol de Editor</strong> para quitar a un usuario de la lista de editores del curso.'
      },
      enrollUsersTitle: 'Inscribir Usuarios',
      enrollGroupsTitle: 'Inscribir Grupos',
      addCourseAdminsTitle: 'Agregar Editores del Curso',
      status: {
        groupAssociated: {
          success: {
            course: 'El grupo {name} se ha asociado con éxito al curso.',
            learningPath: 'El grupo {name} se ha asociado con éxito a la ruta de aprendizaje.'
          },
          error: {
            course: 'Hubo un error al asociar el grupo {name} con el curso: {err}.',
            learningPath: 'Hubo un error al asociar el grupo {name} con la ruta de aprendizaje: {err}.'
          }
        },
        groupUnassociated: {
          success: {
            course: 'El grupo {name} se ha desasociado con éxito del curso.',
            learningPath: 'El grupo {name} se ha desasociado con éxito de la ruta de aprendizaje.'
          },
          error: {
            course: 'Hubo un error al desasociar el grupo {name} del curso: {err}.',
            learningPath: 'Hubo un error al desasociar el grupo {name} de la ruta de aprendizaje: {err}.'
          }
        },
        folderAdded: {
          success: {
            course: 'El curso se ha agregado con éxito a la carpeta {name}.'
          },
          error: {
            course: 'Hubo un error al agregar el curso a la carpeta {name}: {err}.'
          }
        },
        folderRemoved: {
          success: {
            course: 'El curso se ha eliminado con éxito de la carpeta {name}.'
          },
          error: {
            course: 'Hubo un error al eliminar el curso de la carpeta {name}: {err}.'
          }
        },
        groupEnrolled: {
          success: {
            course: 'Los usuarios del grupo {name} se han inscrito con éxito en el curso.',
            learningPath: 'Los usuarios del grupo {name} se han inscrito con éxito en la ruta de aprendizaje.'
          },
          error: {
            course: 'Hubo un error al inscribir a los usuarios del grupo {name} en el curso: {err}.',
            learningPath: 'Hubo un error al inscribir a los usuarios del grupo {name} en la ruta de aprendizaje: {err}.'
          }
        },
        enrolled: {
          success: {
            course: 'El usuario {name} se inscribió con éxito en el curso.',
            learningPath: 'El usuario {name} se inscribió con éxito en la ruta de aprendizaje.'
          },
          error: {
            course: 'Hubo un error al inscribir al usuario {name} en el curso: {err}.',
            learningPath: 'Hubo un error al inscribir al usuario {name} en la ruta de aprendizaje: {err}.'
          }
        }
      }
    },
    generic: {
      createdOn: 'Creado:',
      updatedOn: 'Última vista:',
      startedOn: 'Iniciado el:',
      finishedOn: 'Finalizado el:',
      searchCourses: 'Buscar Cursos',
      resetFilters: 'Restablecer Filtros'
    },
    cloneOrShare: {
      searchWorkspace: 'Buscar workspace',
      title: 'Clonar o Compartir Curso',
      toCurrentWorkspace: 'Clonar {name} en el workspace actual',
      toOtherWorkspace: 'Clonar {name} en otro workspace',
      chooseWorkspace: 'Elige el workspace para clonar o compartir el curso',
      cloneCourseExplanation: '<strong>Clonar</strong> {courseName} en el workspace {workspaceName}: el curso será clonado y gestionado en el workspace {workspaceName}.',
      shareCourseExplanation: '<strong>Compartir</strong> {courseName} con el workspace {workspaceName}: el curso será compartido con {workspaceName}. Cualquier cambio realizado en el workspace actual se propagará al workspace {workspaceName}.',
      cloneButton: 'Clonar Curso',
      shareButton: 'Compartir Curso',
      cloningCourseOverlay: 'El curso {name} está siendo clonado...',
      sharingCourseOverlay: 'El curso {name} está siendo compartido...',
      courseCloneSuccess: 'El curso {name} se ha clonado con éxito.',
      courseCloneError: 'Hubo un error al clonar el curso {name}: {err}.',
      courseShareSuccess: 'El curso {name} se ha compartido con éxito.',
      courseShareError: 'Hubo un error al compartir el curso {name}: {err}.'
    },
    translateCourse: {
      title: 'Traducir Curso',
      languageLabel: 'Elige un Idioma',
      contextLabel: 'Proporciona Algo de Contexto o Instrucciones',
      translateButtonLabel: 'Traducir',
      overlayText: 'El curso {name} está siendo traducido. Esto tomará algún tiempo. Puedes cerrar esta ventana y recibirás una notificación cuando la traducción esté lista.',
      warning: 'Ten en cuenta que esta es una función en <strong>BETA</strong>. Algunas lecciones, especialmente en <strong>cursos grandes</strong>, pueden no traducirse con precisión. Por lo tanto, siempre será necesaria una revisión humana.'
    }
  },
  analytics: {
    welcome: '¡Bienvenido a la sección de analíticas!',
    pleaseIntroduce: 'Introduce los números {number1} y {number2} en la sección "Introduce el código de dos partes" y haz clic en enter'
  },
  tourSteps: {
    snackbar: {
      title: 'Iniciar el recorrido de edición de curso',
      description: 'Siempre puedes reiniciar este recorrido simplemente actualizando la página o cambiando el modo de edición de apagado a encendido',
      startButton: 'Iniciar',
      cancelButton: 'Cerrar'
    },
    labels: {
      buttonSkip: 'Saltar recorrido',
      buttonPrevious: 'Anterior',
      buttonNext: 'Siguiente',
      buttonStop: 'Finalizar'
    },
    adminCourses: {
      createNewCourse: 'Haz clic aquí para <strong>crear un nuevo curso</strong>',
      importJSON: 'Haz clic aquí para <strong>importar un curso en formato JSON</strong>',
      listOfCourses: 'Cursos que puedes gestionar',
      paginationCourses: 'Navega por la lista de cursos'
    },
    editingMenu: {
      resetButton: 'Haz clic en este botón para restablecer los últimos cambios',
      saveButton: 'Haz clic en este botón para guardar los últimos cambios',
      publishButton: 'Haz clic en este botón para hacer que el curso esté disponible o no para los estudiantes'
    },
    demoCourseEditing: {
      title: 'Recorrido de Edición del Curso',
      changeTitle: {
        content: 'Haz clic aquí para cambiar el título del curso'
      },
      changeDescription: {
        content: 'Haz clic aquí para cambiar la descripción del curso. Usa la barra de herramientas de edición en la parte superior de la página para dar estilo a tu texto, agregar listas, imágenes y enlaces.'
      },
      addModule: {
        content: 'Haz clic aquí para agregar un nuevo módulo al curso. Aparecerá como el último módulo.'
      },
      addLecture: {
        content: 'Haz clic aquí para agregar una nueva lección al módulo. Será la última lección en el módulo, pero puedes moverla arrastrando y soltando.'
      },
      changeModuleTitle: {
        content: 'Puedes cambiar fácilmente el título del módulo haciendo clic aquí y escribiendo.'
      },
      changeModuleDescription: {
        content: 'Escribe aquí para cambiar la descripción del módulo. Usa la barra de herramientas para dar formato a tu texto. La descripción del módulo debe ser breve y concisa.'
      },
      saveCourse: {
        content: 'Haz clic aquí para guardar los últimos cambios en el curso.'
      },
      changeLectureTitle: {
        content: 'Haz clic y escribe aquí para cambiar el título de la lección.'
      },
      changeLectureDescription: {
        content: 'Cambia la descripción de la lección (o elimínala) escribiendo aquí. Usa la barra de herramientas para formatear el texto.'
      },
      resetChanges: {
        content: 'Haz clic aquí para restablecer los cambios realizados desde la última vez que guardaste el curso.'
      },
      publishCourse: {
        content: 'Haz que el curso sea visible o invisible para los estudiantes de este workspace.'
      },
      unpublishCourse: {
        content: 'Oculta el curso para los estudiantes de este workspace.'
      },
      copyLecture: {
        content: 'Haz clic aquí para copiar la lección al portapapeles.'
      },
      copyModule: {
        content: 'Haz clic aquí para copiar el módulo al portapapeles. Podrás pegarlo en cualquier curso dentro de este workspace.'
      },
      pasteLecture: {
        content: 'Haz clic aquí para pegar la lección copiada después de esta. Permanecerá en el portapapeles hasta que copies otra.'
      },
      pasteModule: {
        content: 'Haz clic aquí para pegar el módulo copiado después de este.'
      },
      deleteLecture: {
        content: 'Haz clic aquí para eliminar esta lección. No podrás eliminar lecciones si los estudiantes ya han interactuado con ellas.'
      },
      deleteModule: {
        content: 'Haz clic aquí para eliminar este módulo. No podrás eliminar un módulo si ya tiene progreso registrado de estudiantes.'
      },
      changeModuleAvailableDates: {
        content: 'Haz clic aquí para cambiar las fechas de disponibilidad del módulo.'
      },
      dragModule: {
        content: 'Haz clic y arrastra para reposicionar este módulo.'
      },
      dragLecture: {
        content: 'Haz clic y arrastra para reposicionar esta lección dentro de un módulo.'
      },
      changeCourseInfo: {
        content: 'Haz clic aquí para cambiar la información básica del curso, como las fechas de disponibilidad y el porcentaje de aprobación.'
      },
      editCourseTags: {
        content: 'Añadir o eliminar etiquetas del curso. Se usarán para filtrar los cursos.'
      },
      editCourseGamification: {
        content: 'Haz clic aquí para añadir y editar los logros del curso.'
      },
      switchEditingMode: {
        content: 'Usa este botón para cambiar entre los modos de edición y visualización.'
      },
      useEditorToolbar: {
        content: 'Usa la barra de herramientas del editor para cambiar el estilo del texto, agregar imágenes, listas y más.'
      },
      goToLecture: {
        content: 'Haz clic en cada lección para acceder a la edición de la misma.'
      }
    }
  },
  sectionsExamples: {
    richText: {
      title: 'Título de la Sección',
      content: 'Lorem ipsum dolor sit amet, <strong>consetetur sadipscing elitr</strong>, sed diam <em>nonumy eirmod tempor</em> invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
    }
  },
  accessibility: {
    configForVisualImpairments: 'Configuración para usuarios con discapacidades visuales',
    changeFontSize: 'Cambiar tamaño de fuente',
    siteBackToNormal: 'Versión regular del sitio web',
    changeColorOfTheWebsite: 'Cambiar el color del sitio web',
    exampleBackgroundFont: 'Ejemplo de cómo se verá el texto',
    exampleHeader1: 'Títulos nivel 1',
    exampleHeader2: 'Títulos nivel 2',
    changeImagesLook: 'Cambiar la apariencia de las imágenes',
    exampleImagesLook: 'Ejemplo de cómo se verán las imágenes'
  },
  validation: {
    url: {
      required: 'La URL es obligatoria',
      valid: 'La URL debe ser válida'
    }
  },
  notifications: {
    title: 'Notificaciones',
    clearAllButton: 'Marcar todas como leídas',
    statuses: {
      INACTIVE_USER_COURSES: 'Inactividad'
    },
    actions: {
      clear: 'Borrar',
      markAsRead: 'Marcar como leído'
    },
    noNotificationsToShow: 'No hay notificaciones para mostrar'
  },
  header: {
    menu: {
      home: 'Inicio',
      courses: 'Cursos',
      accessibility: 'Accesibilidad',
      toggleDarkMode: 'Activar/Desactivar Modo Oscuro',
      profileSubtitle: {
        admin: 'Administrador',
        courseAdmin: 'Administrador de Curso',
        courseEditor: 'Editor de Curso',
        learner: 'Estudiante',
        adminViewNonAdmin: 'Administrador<br><span class="caption">(viendo como estudiante)</span>',
        courseAdminViewNonAdmin: 'Administrador de curso<br><span class="caption">(viendo como estudiante)</span>',
        courseEditorViewNonAdmin: 'Editor de curso<br><span class="caption">(viendo como estudiante)</span>'
      },
      create: {
        course: 'Curso',
        learningPath: 'Ruta de Aprendizaje',
        skill: 'Habilidad',
        group: 'Grupo',
        users: 'Usuarios',
        folder: 'Carpeta de Cursos'
      },
      languages: {
        uk: 'Українська',
        pt: 'Portugués',
        en: 'Inglés (EE.UU.)',
        en_gb: 'Inglés (GB)',
        de: 'Alemán',
        pl: 'Polaco',
        fr: 'Francés',
        ru: 'Ruso',
        ar: 'Árabe'
      },
      languagesShort: {
        uk: 'UA',
        pt: 'PT',
        en: 'EN',
        en_gb: 'EN (GB)',
        de: 'DE',
        pl: 'PL',
        fr: 'FR',
        ru: 'RU',
        ar: 'AR'
      }
    }
  },
  preCourseSurvey: {
    title: 'Encuesta Pre-Curso',
    subtitleNotStarted: 'Por favor, completa esta encuesta. Después de hacerlo, podrás comenzar el curso.',
    subtitleFinished: 'Puedes cambiar tu respuesta a la encuesta pre-curso.',
    subtitleEditing: 'Editar la encuesta pre-curso.',
    editSurveyButton: 'Editar',
    finishEditSurveyButton: 'Finalizar Edición',
    buttonTitle: 'Encuesta Pre-Curso',
    addNewSurveyQuestion: 'Añadir Nueva Pregunta de Encuesta',
    editCourseSurvey: 'En esta sección puedes agregar o editar una encuesta obligatoria del curso. ' +
      'Esta encuesta aparecerá como un pop-up para los estudiantes antes de que puedan comenzar el curso.',
    fillCourseSurvey: 'Debes completar la encuesta antes de proceder con el curso.',
    fillEditCourseSurvey: 'Puedes editar tus respuestas a la encuesta del curso.',
    filters: {
      button: 'Filtrar por Preguntas',
      title: 'Filtrar por Preguntas y Respuestas del Curso',
      selectQuestionLabel: 'Seleccionar Pregunta',
      selectAnswerLabel: 'Seleccionar Respuesta',
      addFilterButton: 'Añadir Filtro',
      clearFilterButton: 'Limpiar',
      applyFilterButton: 'Aplicar'
    }
  },
  postCourseSurvey: {
    title: 'Encuesta Post-Curso',
    subtitleNotStarted: 'Por favor, completa esta encuesta. Después de hacerlo, podrás finalizar el curso.',
    subtitleFinished: 'Puedes cambiar la respuesta a tu encuesta post-curso.',
    subtitleEditing: 'Editar la encuesta post-curso.',
    editSurveyButton: 'Editar',
    finishEditSurveyButton: 'Finalizar Edición',
    buttonTitle: 'Encuesta Post-Curso',
    addNewSurveyQuestion: 'Añadir Nueva Pregunta de Encuesta',
    editCourseSurvey: 'En esta sección puedes agregar o editar una encuesta post-curso obligatoria. ' +
      'Esta encuesta aparecerá como un pop-up para los estudiantes antes de que puedan obtener su certificado o finalizar el curso.',
    fillCourseSurvey: 'Debes completar la encuesta antes de poder finalizar el curso.',
    fillEditCourseSurvey: 'Puedes editar tus respuestas a la encuesta del curso.'
  },
  getReadyAi: {
    title: 'Crea tu Curso con IA',
    description: 'Escribe tu correo electrónico y el tema del curso, y te enviaremos un enlace a tu curso generado por IA.',
    usernameLabel: 'Tu Correo Electrónico',
    courseTopicLabel: 'Tema del Curso',
    generateButton: 'Crear mi Curso',
    afterGenerateButton: 'Haz clic en el botón de arriba y recibirás un correo electrónico pronto.',
    topicRequired: 'El tema es obligatorio',
    setPasswordTitle: 'Configura tu Contraseña',
    setPasswordDesc: 'Después de establecer tu contraseña, serás redirigido a tu curso.',
    setPasswordButton: 'Establecer Contraseña e Iniciar Sesión',
    tokenLabel: 'Token',
    passwordLabel: 'Contraseña',
    courseCreationRequestSuccess: 'Tu curso está siendo creado. ' +
      'Puedes salir de esta página ahora. ' +
      'Recibirás un correo electrónico tan pronto como tu curso esté listo.'
  },
  meta: {
    titles: {
      pages: {
        admin: 'Admin',
        courses: 'Cursos',
        dashboard: 'Panel de Control',
        signin: 'Iniciar Sesión',
        learnerProfile: 'Perfil del Estudiante',
        onboardingWithAi: 'Incorporación con IA',
        organization: 'Organización',
        paswordreset: 'Restablecer Contraseña',
        printableCourse: 'Curso Imprimible'
      }
    }
  },
  ocid: {
    connect: 'Conectar OC-ID',
    reconnect: 'Reconectar OC-ID',
    yourOCID: 'Tu OC-ID: <strong><a href="{url}" target="_blank">{ocid}</a></strong>',
    connectionSuccess: 'Conexión con OC-ID completada con éxito',
    reconnectionSuccess: 'Reconexión con OC-ID completada con éxito',
    connectionError: 'Hubo un error al conectar con OC-ID: {err}',
    reconnectionError: 'Hubo un error al reconectar con OC-ID: {err}'
  }
}
