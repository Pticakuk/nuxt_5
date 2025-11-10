export default {
  actions: {
    delete: {
      module: 'Excluir módulo',
      lecture: 'Excluir aula',
      section: 'Excluir seção',
      question: 'Excluir pergunta',
      bubble: 'Excluir balão',
      option: 'Excluir opção',
      branchSection: 'Excluir seção ramificada'
    },
    add: {
      module: 'Adicionar módulo',
      lecture: 'Adicionar aula',
      section: 'Adicionar seção',
      question: 'Adicionar pergunta',
      bubble: 'Adicionar balão',
      option: 'Adicionar opção',
      branchSection: 'Adicionar seção ramificada'
    },
    duplicate: {
      module: 'Duplicar módulo',
      lecture: 'Duplicar aula',
      section: 'Duplicar seção',
      question: 'Duplicar pergunta',
      bubble: 'Duplicar balão',
      option: 'Duplicar opção',
      branchSection: 'Duplicar seção ramificada'
    },
    moveUp: {
      module: 'Mover módulo para cima',
      lecture: 'Mover aula para cima',
      section: 'Mover seção para cima',
      question: 'Mover pergunta para cima',
      bubble: 'Mover balão para cima',
      option: 'Mover opção para cima',
      branchSection: 'Mover seção ramificada para cima'
    },
    moveDown: {
      module: 'Mover módulo para baixo',
      lecture: 'Mover aula para baixo',
      section: 'Mover seção para baixo',
      question: 'Mover pergunta para baixo',
      bubble: 'Mover balão para baixo',
      option: 'Mover opção para baixo',
      branchSection: 'Mover seção ramificada para baixo'
    },
    copy: {
      module: 'Copiar módulo',
      lecture: 'Copiar aula',
      section: 'Copiar seção',
      question: 'Copiar pergunta',
      bubble: 'Copiar balão',
      option: 'Copiar opção',
      branchSection: 'Copiar seção ramificada',
      courseUrl: 'copiar',
      courseUrlCopied: 'copiado',
      url: 'copiar',
      copyUrl: 'Copiar URL',
      urlCopied: 'copiado',
      openInNewTab: 'Abrir em novo separador'
    },
    paste: {
      module: 'Colar módulo',
      lecture: 'Colar aula',
      section: 'Colar seção',
      question: 'Colar pergunta',
      bubble: 'Colar balão',
      option: 'Colar opção',
      branchSection: 'Colar seção ramificada'
    },
    course: {
      config: 'Editar configuração',
      edit: 'Editar conteúdo do curso',
      clone: 'Clone de curso',
      invite: 'Convidar utilizadores ou grupos',
      progress: 'Verificar o progresso dos utilizadores',
      deleteInProgress: 'A eliminar o curso {name}...',
      archiveInProgress: 'A arquivar o curso {name}...',
      unarchiveInProgress: 'A desarquivar o curso {name}...'
    },
    lectureVisibility: {
      lecture: 'Visibilidade da Aula'
    }
  },
  openAi: {
    useThisTextButton: 'Usar este texto',
    useThisImageButton: 'Usar esta imagem',
    usingOpenAiInfoBox: 'Usamos a API <strong>Open AI</strong> para ajudá-lo nas suas tarefas de rotina. Certifique-se de ter a integração com sua conta Open AI e comece a usar este auxiliar para praticamente qualquer coisa. ' +
      'Por exemplo, você pode solicitar algo como <strong>"Título de um curso sobre integração"</strong> ou <strong>"Escrever uma descrição para uma aula introdutória no Salesforce"</strong> ' +
      'ou <strong>"Gerar uma pergunta de escolha única sobre soft skills"</strong>. Use sua linguagem natural, confira o resultado, ' +
      'corrija o texto se necessário, remova espaços vazios desnecessários e use-o em seu curso.',
    textCompletionExplanation: 'Use este diálogo para gerar texto sobre qualquer tópico. O texto será limitado a {charLimit} caracteres.',
    imageCreationExplanation: 'Use este diálogo para gerar uma imagem sobre qualquer tópico. Repare que a geração de imagens está atualmente em versão beta. A imagem será gerada com o tamanho {imageSize}.',
    errorGeneratingContent: 'Aconteceu um erro durante geração de conteudo: {err}',
    configureTheIntegration: ' | Por favor configure a integração com a API OpenAI na secção admin/integrations.'
  },
  toast: {
    previewWillAppearHere: 'A visualização do código aparecerá aqui',
    checkInPopup: 'Verifica num pop-up',
    workspaceChangesSaved: 'Configuração do workspace guardada com sucesso.',
    workspaceChangesSaveError: 'Ocorreu um erro ao salvar as alterações do workspace: {err}.',
    courseOrderUpdated: 'Ordem do curso atualizada com sucesso: o curso {courseName} será exibido na ordem {order}.',
    courseOrderUpdateError: 'Houve um erro ao atualizar a ordem do curso: {err}.',
    courseSaveSuccess: 'Curso {name} atualizado com sucesso!',
    courseCreatedSuccess: 'Curso {name} criado com sucesso!',
    courseCreatedError: 'Ocorreu um erro ao criar o curso {name}: {err}',
    courseSaveError: 'Ocorreu um erro ao autalizar o curso {name}: {err}',
    userNameChangedSuccessfully: 'O nome do utilizador {name} foi alterado com sucesso.',
    userNameChangedError: 'Ocorreu um erro ao alterar o nome do utilizador {name}: {err}',
    userEmailChangedSuccessfully: 'O email do utilizador {name} foi alterado com sucesso.',
    userEmailChangedError: 'Ocorreu um erro ao alterar o email do utilizador {name}: {err}',
    courseEditingLockForced: 'A edição deste curso foi assumida por {name}.',
    courseEditingLockByUserError: 'Você está a editar este curso num outro dispositivo ou uma outra tab. Quer assumir o controlo?' +
      ' O progresso num outro dispositivo ou uma outra tab será perdido.',
    workspaceDoesntExist: 'O workspace {name} não existe.',
    giveUpWithSuccess: 'O curso {name} foi abandonado com sucesso',
    giveUpError: 'Ocorreu um erro ao desistir do curso {name}: {err}',
    archiveSuccess: 'O curso {name} foi arquivado com sucesso',
    archiveError: 'Ocorreu um erro ao arquivar o curso {name}: {err}',
    unArchiveSuccess: 'O curso {name} foi desarquivado com sucesso',
    unArchiveError: 'Ocorreu um erro ao desarquivar o curso {name}: {err}',
    certificateCantBeOpen: 'Ocorreu um erro ao buscar o certificado com uuid {uud}: {err}',
    courseTranslationSuccess: 'O curso {name} foi traduzido com sucesso.',
    courseTranslationError: 'Ocorreu um erro ao traduzir o curso {name}: {err}',
    resetTimerSuccess: 'Temporizador da pergunta redefinido com sucesso.',
    tagDeleteSuccess: 'Tag {name} eliminado com sucesso',
    tagDeleteError: 'Ocorreu um erro ao eliminar o tag {name}: {err}',
    courseArchiveSuccess: 'Curso {name} arquivado com sucesso',
    courseUnarchiveSuccess: 'Curso {name} desarquivado com sucesso',
    courseDeleteError: 'Ocorreu um erro ao eliminar o curso',
    courseArchiveError: 'Ocorreu um erro ao arquivar o curso',
    defaultSaveError: 'Ocorreu um erro ao salvar o {name}',
    forceSaveError: {
      CANNOT_DELETE_ALL_MODULES: 'Está prestes a excluir todos os módulos do curso. Esta acção não pode ser revertida. Deseja continuar?',
      CANNOT_DELETE_LEARNING_STEP: 'Há progresso de utilizadores nos materiais que está prestes a excluir. Esta acção não pode ser revertida. Deseja continuar?',
      CANNOT_DELETE_LECTURES: 'Há progresso de utilizadores nas aulas que está prestes a excluir. Esta acção não pode ser revertida. Deseja continuar?',
      CANNOT_DELETE_QUESTION_ANSWER: 'Há progresso de utilizadores nos questionários que está prestes a excluir. Esta acção não pode ser desfeita. Deseja continuar?',
      CANNOT_DELETE_SECTION: 'Há progresso de utilizadores nas secções do curso que está prestes a excluir. Esta acção não pode ser revertida. Deseja continuar?',
      CANNOT_DELETE_LEVELS: 'Há skills associados a utilizadores que está prestes a excluir. Esta acção não pode ser revertida. Deseja continuar?',
      CANNOT_DELETE_GROUP: 'Está prestes a excluir um grupo que possui itens (utilizadores, cursos ou learning paths) associados. Todas estas ligações serão perdidas. Deseja continuar?',
      DEFAULT: 'Há progresso de utilizadores em materiais que está prestes a excluir. Esta acção não pode ser revertida. Deseja continuar?'
    }
  },
  tourSteps: {
    snackbar: {
      title: 'Iniciar tour de edição de curso',
      startButton: 'Iniciar',
      cancelButton: 'Fechar'
    },
    labels: {
      buttonSkip: 'Saltar tour',
      buttonPrevious: 'Anterior',
      buttonNext: 'Próximo',
      buttonStop: 'Finalizar'
    },
    adminCourses: {
      createNewCourse: 'Clique aqui para <strong>criar um novo curso</strong>',
      importJSON: 'Clique aqui para <strong>importar um curso no formato JSON</strong>',
      listOfCourses: 'Cursos que pode gerir',
      paginationCourses: 'Navegar pela lista de cursos'
    },
    editingMenu: {
      resetButton: 'Clique aqui para remover as últimas alterações',
      saveButton: 'Clique neste botão para gravar as últimas alterações',
      publishButton: 'Clique neste botão para fazer com o curso fique ou não disponível para os estudantes'
    },
    demoCourseEditing: {
      title: 'Demonstração de Edição do Curso',
      changeTitle: {
        title: '',
        content: 'Clique aqui para alterar o título do curso'
      },
      changeDescription: {
        title: '',
        content: 'Clique aqui para alterar a descrição do curso. Faça uso da barra de ferramentas para estilizar a descrição.'
      },
      addModule: {
        title: '',
        content: 'Clique aqui para adicionar um novo módulo ao curso. Irá aparecer como último.'
      },
      addLecture: {
        title: '',
        content: 'Clique aqui para adicionar uma nova aula ao módulo. Irá aparecer como última aula do módulo, mas é possível movê-la para a posição desejada.'
      },
      changeModuleTitle: {
        title: '',
        content: 'Poderá facilmente alterar o título do módulo, bastando para isso começar a escrever.'
      },
      changeModuleDescription: {
        title: '',
        content: 'Comece a escrever para alterar a descrição do módulo. Faça uso da barra de ferramentas para estilizar o título. No entanto tenha em conta que este deverá ser curto e conciso.'
      },
      saveCourse: {
        title: '',
        content: 'Clique aqui para gravar as últimas alterações feitas ao curso.'
      },
      changeLectureTitle: {
        title: '',
        content: 'Clique e escreva para alterar o título da aula.'
      },
      changeLectureDescription: {
        title: '',
        content: 'Poderá facilmente editar a descrição da aula (ou até mesmo removê-la) escrevendo aqui. Não se esqueça que as descrições da aula deverão ser curtas e concisas.'
      },
      resetChanges: {
        title: '',
        content: 'Clique aqui para remover as alterações introduzidas desde a última vez que gravou que gravou o curso.'
      },
      publishCourse: {
        title: '',
        content: 'Fazer com que o curso fique visível neste workspace.'
      },
      unpublishCourse: {
        title: '',
        content: 'Fazer com que o curso fique indisponível neste workspace.'
      },
      copyLecture: {
        title: '',
        content: 'Clique aqui para copiar a aula para a área de transferência.'
      },
      copyModule: {
        title: '',
        content: 'Clique aqui para copiar o módulo para a área de transferência. Todo o seu conteúdo irá ser copiado e mais tarde poderá colá-lo em qualquer curso do workspace.'
      },
      pasteLecture: {
        title: '',
        content: 'Clique aqui para colar a aula que copiou depois desta. A aula permanecerá na área de transferência e poderá ser usada posteriormente até uma nova ser copiada.'
      },
      pasteModule: {
        title: '',
        content: 'Clique aqui para colar o módulo depois deste. O módulo permanecerá na área de transferência e poderá ser usado posteriormente até um novo ser copiado.'
      },
      deleteLecture: {
        title: '',
        content: 'Clique aqui para remover esta aula. Tenha em conta que não será possível caso alunos já tenham interagido com a mesma!'
      },
      deleteModule: {
        title: '',
        content: 'Clique aqui para remover este módulo. Todo o módulo incluindo as suas aulas iram ser também removidas Caso já tenha havido interação com as aulas no módulo esta operação não será possível.'
      },
      changeModuleAvailableDates: {
        title: '',
        content: 'Clique aqui para editar as datas em que o módulo estará disponível. Ao fazer duplo-clique na data - o módulo ficará disponível na data desejada. Ao clicar numa data e imediatamente noutra o módulo ficará disponível durante o periodo seleccionado.'
      },
      dragModule: {
        title: '',
        content: 'Clique para arrastar e posicionar este módulo'
      },
      dragLecture: {
        title: '',
        content: 'Clique para arrastar e posicionar esta lecture no módulo'
      },
      changeCourseInfo: {
        content: 'Clique para mudar a informação básica sobre o curso, tal como as datas de disponibilidade do curso, etc.'
      },
      editCourseTags: {
        content: 'Adicione ou remova as tags do curso. Essas tags posteriormente vão ser usadas para filtrar os cursos do seu workspace.'
      },
      editCourseGamification: {
        content: 'Clique aqui para adicionar os itens de gamification do curso.'
      },
      switchEditingMode: {
        content: 'Use este toggle para mudar entre os modos de edição e visualisação de curso.'
      },
      useEditorToolbar: {
        content: 'Use esta toolbar de edição para mudar o estilo do texto'
      },
      goToLecture: {
        content: 'Clique o link em cada item da aula para proseguir a edição de aula.'
      }
    }
  },
  forum: {
    title: 'Fórum',
    sortingOptions: {
      newest: 'Mais recentes primeiro',
      oldest: 'Mais antigos primeiro',
      mostPopular: 'Mais populares'
    },
    comment: 'Comentário',
    leaveComment: 'Deixe um comentário',
    actions: {
      edit: 'Editar',
      follow: 'Seguir',
      reply: 'Responder',
      delete: 'Eliminar'
    },
    uploadImage: 'Adicionar imagem',
    socialLearning: {
      DISABLEd: 'Fórum desativado',
      DISQUS: 'Ativar fórum Disqus',
      WORKADEMY: 'Ativar fórum Workademy'
    },
    toCourse: 'Voltar ao curso',
    toForum: 'Para o fórum do curso',
    supportedText: 'Escolher ficheiro {supported}',
    generalThreads: 'Tópicos gerais',
    lecturesThreads: 'Tópicos das aulas'
  },
  layout: {
    getStarted: 'Registar'
  },
  dialogs: {
    editRichText: 'Editar texto',
    saveAndClose: 'Guardar e fechar',
    confirmationDialog: {
      defaultDialog: {
        title: 'Tem a certeza?',
        confirmButton: 'Sim!',
        cancelButton: 'Cancelar'
      },
      confirmQuitScormCourse: {
        title: 'Tem a certeza de que pretende sair do curso?',
        subtitle: 'Não se preocupe! Pode retomar do ponto onde parou.',
        confirmButton: 'Sim, sair agora'
      },
      confirmQuitScormLecture: {
        title: 'Tem a certeza de que pretende sair da aula?',
        subtitle: 'Não se preocupe! Pode retomar a aula do ponto onde parou.',
        confirmButton: 'Sim, sair agora'
      }
    }
  },
  share: {
    shareDialogTitle: 'Partilhar',
    doneButtonText: 'Ok!'
  },
  landing: {
    welcome: 'Bem vindos ao mundo da educação online<br>e partilha de conhecimento',
    goToCatalog: 'Abrir catálogo',
    catalogueTagline: '',
    learnAndShare: 'Aprende e partilha conhecimento com a {title}',
    viewAllCatalog: 'Ver catálogo',
    allowsToLearnAndTeach: '{title} permite-te aprender e ensinar',
    beingABridge: 'funcionando como ponte entre os possuidores de conhecimento e os que dele necessitam',
    learnIconText: 'Nunca pares de aprender. Acede a conteúdo de alta qualidade com {title}',
    everywhereIconText: 'Disponível qualquer dispositivo, qualquer sistema, em qualquer lado',
    communityIconText: 'Faz parte da nossa comunidade',
    teachIconText: 'A forma mais eficaz de aprender é ensinar. Desbloqueia o teu potencial de formador com {title}',
    learn: 'Aprender',
    everywhere: 'Em todo lado',
    community: 'Comunidade',
    teach: 'Ensinar',
    areYouReady: 'Está pronto?',
    viewAllCourses: 'Ver todos os cursos',
    viewMyDashboard: 'Ver os meus cursos',
    comingSoon: 'Cursos disponíveis em breve!',
    footerDisclaimer: ''
  },
  dashboard: {
    dashboardTitle: 'Meu Gabinete',
    coursesInProgressTitle: 'Cursos',
    coursesInProgressSubtitle: 'Cursos em que está iscrito',
    coursesCompletedTitle: 'Cursos',
    coursesCompletedSubtitle: 'Cursos terminados',
    learningPathsInProgressTitle: 'Trajetorias',
    learningPathsCompleted: 'Trajetorias',
    achievementsTitle: 'Conquistas',
    achievementsDescription: 'Clique no cartão de conquistas para adicionar um novo frame ao seu avatar.',
    searchLearningPaths: 'Procurar por trajetorias de aprendizagem',
    filters: {
      searchLearningPaths: 'Procurar por trajetorias de aprendizagem',
      search: {
        learningPaths: 'Procurar por trajetorias de aprendizagem',
        courses: 'Procurar por cursos'
      },
      showCoursesTitle: {
        all: 'Mostrar <strong>(todos)</strong> cursos',
        completed: 'Mostrar cursos <strong>(concluídos)</strong>',
        active: 'Mostrar cursos <strong>(ativos)</strong>',
        archived: 'Mostrar cursos <strong>(arquivados)</strong>'
      },
      showAllCourses: 'Mostrar todos os cursos',
      showActiveCourses: 'Mostrar cursos ativos',
      showCompletedCourses: 'Mostrar cursos concluídos',
      showArchivedCourses: 'Mostrar cursos arquivados',
      showLearningPathsTitle: {
        all: 'Mostrar <strong>(todas)</strong> trajetorias de aprendizagem',
        completed: 'Mostrar trajetorias de aprendizagem <strong>(concluídos)</strong>',
        active: 'Mostrar trajetorias de aprendizagem <strong>(ativos)</strong>',
        archived: 'Mostrar trajetorias de aprendizagem <strong>(arquivadas)</strong>'
      },
      showAllLearningPaths: 'Mostrar todas os trajetorias de aprendizagem',
      showActiveLearningPaths: 'Mostrar trajetorias de aprendizagem ativas',
      showCompletedLearningPaths: 'Mostrar trajetorias de aprendizagem concluídas',
      showArchivedLearningPaths: 'Mostrar trajetorias de aprendizagem arquivadas'
    },
    notFound: {
      course: {
        notEnrolled: {
          title: 'Não está inscrito em nenhum curso.',
          description: 'Verifique a lista de cursos para se inscrever nos cursos.'
        },
        notFound: {
          title: 'Os cursos não encontrados.',
          description: 'Altere os critérios de pesquisa.'
        },
        noCompleted: {
          title: 'Ainda não concluiu nenhum curso.',
          description: 'Verifique seus cursos ativos e tente concluí-los.'
        }
      },
      learningPath: {
        notEnrolled: {
          title: 'Não está inscrito em nenhuma trajetoria de aprendizagem.'
        },
        notFound: {
          title: 'As trajetorias de aprendizagem não puderam ser encontrados.',
          description: 'Altere os critérios de pesquisa.'
        },
        noCompleted: {
          title: 'Ainda não concluiu nenhuma trajetoria de aprendizagem.',
          description: 'Verifique suas trajetorias de aprendizagem ativas e tente concluí-las.'
        }
      }
    }
  },
  quiz: {
    questionNFrom: 'Pergunta {questionNumber} de {quizLength}',
    questionN: 'Pergunta {questionNumber}',
    checkTheAnswer: 'Verificar resposta',
    checkTheDroppable: 'Estou pronto',
    associationQuestionExplanation: 'Clique no item e depois na categoria correspondente. Clique no botão VERIFICAR RESPOSTA quando terminar.',
    multipleAssociationQuestionExplanation: 'Clique no item e depois na categoria correspondente. Um item pode pertencer a mais de uma categoria. Clique no botão VERIFICAR RESPOSTA quando terminar.',
    sortingQuestionExplanation: 'Arraste os itens para colocá-los na ordem correta. Clique no botão VERIFICAR RESPOSTA quando terminar.',
    usedAttempts: 'Usaste {wrongCount} de {wrongLimit} possíveis tentativas de resposta',
    showCorrectAnswer: 'Mostrar a resposta correta',
    questionTimerTimeUp: 'O tempo acabou! Não completou a pergunta no tempo disponível. Por favor, contacte o seu administrador para obter assistência.',
    questionTimerMessage: 'Tem <strong class="primary--text">{time}</strong> para completar esta pergunta. Certifique-se de que está pronto antes de começar.',
    feedback: {
      correct: 'Correto',
      incorrect: 'Incorreto',
      tryAgain: 'Incorreto, tente novamente',
      noAttemptsLeft: 'Incorreto, sem mais tentativas'
    }
  },
  courseTree: {
    courseOutlineTitle: 'Estrutura do Curso',
    courseWillStart: '✌️Este curso começará em {date} 🗓<br>Por favor, use o menu para sair 👋',
    courseFinished: 'Este curso terminou em {date} 🗓<br>Por favor, use o menu para sair 👋',
    courseExpired: 'Este curso expirou 🗓<br>Por favor, use o menu para sair desta tela 👋',
    coursePendingAproval: 'A sua inscrição neste curso necessita de aprovação por um administrador do curso.<br>Por favor, use o menu para sair desta tela 👋',
    modulesTitle: 'Estrutura do Curso',
    sidebarTitle: 'Informações práticas',
    tagsTitle: 'Tags do Curso',
    moduleAvailableFrom: 'Disponível a partir de {from}',
    moduleAvailableFromUntil: 'Disponível de {from} até {until}',
    moduleAvailableFromUntilMobile: '{from}-{until}',
    practicalInfo: {
      availableFrom: 'Este curso começa em:',
      availableFromPast: 'Este curso começou em:',
      availableUntil: 'Este curso termina em:',
      availableUntilPast: 'A inscrição até:',
      expiresIn: 'Este curso expira em:',
      doesntExpire: 'Este curso nunca expira',
      courseDuration: 'A duração deste curso:',
      startedCourse: 'Inscreveu-se neste curso em:',
      quizzesText: 'Este curso tem:',
      numberOfQuestions: 'Sem pontos | {n} ponto | {n} pontos',
      numberOfAnswers: 'Ainda não ganhou nenhum ponto | Ganhou um ponto | Ganhou {questions} pontos!',
      yourScore: 'A sua pontuação:',
      addToCalendar: 'Adicionar ao Calendário'
    },
    gamification: {
      gamificationTitle: 'As suas Conquistas',
      moreXToGo: 'Faltam {x}',
      checkAllAchievements: 'Clique aqui para verificar as suas conquistas',
      achievementUnlocked: 'Acabou de desbloquear uma nova conquista!',
      goToAchievement: 'Ir para conquistas'
    },
    lectureIsNotSeenExplanation: 'Marque a aula como vista para poder prosseguir para a próxima.',
    lectureIsNotDoneExplanation: 'Marque a aula como vista e responda às questões da aula para prosseguir para a próxima.',
    lectureIsNotStartedExplanation: 'A próxima aula ainda não está disponível.'
  },
  lecture: {
    workbook: 'Workbook',
    quiz: 'Questionário',
    previous: 'Aula anterior',
    next: 'Próxima aula',
    duration: 'Duration {duration} minutes',
    durationUnknown: 'Time to complete: unknown',
    questionsSize: 'No há pontos | 1 ponto | {size} pontos',
    goToLecture: 'Ir para aula',
    goToQuiz: 'Ir para o questionário',
    questionAnswersSize: 'Perguntas: {total}',
    questionsAnswered: '{right}/{total} perguntas',
    pointsRight: '{right}/{total} pontos',
    continue: 'Continuar',
    liveLecture: {
      addToGoogleCalendar: 'Adicionar ao calendário Google',
      addToOutlookCalendar: 'Adicionar ao calendário Office365 outlook',
      addToMicrosoftLiveCalendar: 'Adicionar ao calendário Microsoft live',
      joinLecture: 'Entrar na aula',
      startsIn: 'Aula começa ',
      started: 'Aula começou ',
      passed: 'Aula passou',
      areYouGoing: 'Vais?',
      yes: 'Sim',
      no: 'Não'
    },
    dialog: {
      isTyping: 'está a escrever'
    }
  },
  buttons: {
    add: 'Adicionar',
    remove: 'Remover',
    register: 'Registrar',
    open: 'Abrir',
    new: 'Novo!',
    exploreCourse: 'Revisar Curso',
    testCertificate: 'Mostrar Certificado',
    printableVersion: 'Abrir Versão para Impressão',
    clone: 'Clonar',
    resume: 'Retomar Curso',
    enroll: 'Inscrever-se',
    enrollAndPay: 'Inscrever-se e Pagar',
    payAndEnroll: 'Inscrever-se e Pagar {amount} {currency}',
    goToCourse: 'Ir para o Curso',
    resumeCourse: 'Retomar Curso',
    viewCourse: 'Ver Curso',
    loginAndEnroll: 'Inscrever-se',
    login: 'Entrar',
    cancel: 'Cancelar',
    giveUp: 'Desistir',
    archive: 'Arquivar',
    unarchive: 'Desarquivar',
    archiveCourse: 'Arquivar Curso',
    unarchiveCourse: 'Desarquivar Curso',
    chooseLanguage: 'Selecionar o idioma preferido',
    playVideo: 'Reproduzir Vídeo',
    backToTimeline: 'Voltar à Linha do Tempo',
    nextLecture: 'Próxima Aula',
    subscribeToUpdates: 'Receber notificações',
    subscribeToUpdatesBig: 'Quero ser notificado sobre este curso',
    goToTheMarketplace: 'Ir para o Marketplace',
    goToTheLecture: 'Ir para a aula {lecture}',
    goToTheLastLecture: 'Retomar curso',
    goToTheLastQuiz: 'Continuar Certificação',
    startCourse: 'Iniciar curso',
    startCertification: 'Iniciar certificação',
    getCertificate: 'Obter certificado',
    openCertificate: 'Abrir certificado',
    reactivate: 'Reativar',
    completeCourse: 'Concluir curso',
    backToTheCourse: 'Ir para a página do curso',
    viewAllCourses: 'Todos os cursos',
    viewAllTopics: 'Todos os tópicos',
    viewMyDashboard: 'Meu Painel',
    viewMyCourses: 'Meus Cursos',
    topNewCourses: 'Últimos Cursos',
    goToSettings: 'Minhas Configurações',
    goToLearnerProfile: 'Perfil do Aluno',
    goToOrganization: 'Organização',
    goToAdmin: 'Área do Administrador',
    toggleDark: 'Alternar para Modo Escuro',
    toggleCompleted: 'Mostrar concluídos',
    toggleViewAsNonAdmin: 'Alternar para visão de não administrador',
    logout: 'Sair',
    languages: 'Idiomas',
    toggleEditingMode: 'Modo de Edição',
    deleteText: 'excluir',
    save: 'Salvar',
    markAsSeen: 'Marcar como Visto',
    attendedLiveLecture: 'Participei do webinar',
    lectureSeen: 'Você assistiu a esta aula',
    manageCourses: 'Gerir Cursos',
    manage: 'Administrar',
    edit: 'Editar',
    export: 'Exportar curso',
    ok: 'Ok',
    switchSignUpToRegister: 'Ainda não tenho uma conta.',
    switchSignUpToLogin: 'Já estou registrado.',
    continue: 'Continuar',
    continueWithFacebook: 'Continuar com Facebook',
    continueWithGoogle: 'Continuar com Google',
    close: 'Fechar',
    forceUpdate: 'Sim, continuar!',
    showDetails: 'Mostrar detalhes',
    deleteCourse: 'Excluir curso',
    translateCourse: 'Traduzir curso',
    selectCourse: 'Selecionar curso',
    deleteLearningPath: 'Excluir caminho de aprendizado',
    downloadCertificate: 'Baixar Certificado',
    connect: 'Conectar',
    reconnect: 'Reconectar',
    sync: 'Sincronizar',
    invite: 'Convidar',
    showUsers: 'Mostrar Usuários',
    hideUsers: 'Ocultar Usuários',
    previousLecture: 'Aula Anterior',
    exitFullscreenLectureMode: 'Sair do Modo Tela Cheia',
    enterFullscreenLectureMode: 'Entrar no Modo Tela Cheia',
    download: 'Baixar',
    addField: 'Adicionar Campo',
    delete: 'Excluir',
    startOver: 'Alterar sua escolha',
    back: 'Voltar',
    continueWithOAuth: 'Continuar com {workspaceName}',
    comingSoon: 'Em Breve',
    courses: 'Todos os cursos',
    answerTypeform: 'Responder isso',
    proceed: 'Continuar',
    launchFullscreen: 'Iniciar em Tela Cheia',
    collapse: 'Recolher',
    expand: 'Expandir',
    goUp: 'Subir',
    locked: 'Bloqueado',
    done: 'Concluído',
    exploreLearningPath: 'Explorar',
    startNow: 'Começar Agora',
    uploadImage: 'Carregar uma imagem',
    addNew: 'Adicionar Novo',
    deleteGroup: 'Excluir Grupo',
    deleteFolder: 'Excluir Pasta',
    deleteSkill: 'Excluir Competência',
    forceDeleteGroup: 'Excluir Grupo Mesmo Assim',
    forceDeleteFolder: 'Excluir Pasta Mesmo Assim',
    forceDeleteSkill: 'Excluir Competência Mesmo Assim',
    iAmDone: 'Terminei!',
    clear: 'Limpar',
    editCoverPhoto: 'Editar foto de capa',
    payAndStart: 'Pagar e Começar',
    openInOcx: 'Abrir no OC-X'
  },
  courses: {
    duration: '{duration}',
    hours: 'horas | hora | horas',
    courses: 'Todos Cursos',
    courseNotSelected: 'Curso não seleccionado',
    myCourses: 'O meu progresso',
    module: 'Módulo {moduleNumber}',
    notEnrolled: 'Não está inscrito em nenhum curso!',
    noCompleted: 'Não terminou nenhum curso',
    clickToCatalog: 'Clica aqui para aceder ao catálogo',
    exploreCourses: 'Explorar cursos',
    numberOfModules: 'módulos',
    finishAndGetCert: 'Obter certificado',
    validUntil: 'Válido até {expireDate}',
    courseIsCertifiable: 'Certificado no fim do curso',
    noCourses: 'Não está inscrito em nenhum curso. Por favor veja o catálogo.',
    goToDashboard: 'Verifique o seu dashboard para os seus cursos',
    noLearningPaths: 'Nenhuma trajetoria de aprendizagem encontrada',
    tooltipShareUrl: 'Partilhar URL',
    titleCopyText: 'Copiar URL para area de transferência',
    titleTextCopied: 'URL copiado',
    buttonCopyText: 'copiar',
    buttonTextCopied: 'copiado',
    anonymousNotAllowed: 'You must be enrolled to the course in order to see the content',
    aiSearchLabel: 'Pesquisar cursos com IA...',
    aiSearchButton: 'Pesquisa com IA',
    classicSearchButton: 'Pesquisa clássica',
    aiSearchDescription: 'Entende linguagem natural. Tente: "Mostre-me cursos para engenheiros para melhorar a gestão do tempo."',
    classicSearchDescription: 'Procura por palavras-chave exatas nos títulos dos cursos, descrições e conteúdo.',
    badge: {
      template: 'template',
      external: 'external',
      requiresApproval: 'requre aprovação',
      archived: 'arquivado',
      inactive: 'inativo',
      paymentMissing: 'pagamento em falta'
    },
    paidCourses: {
      payNowHeader: 'Pay Now {amount} {currency}',
      payNowDescription: 'Depois do pagamento terá acesso ao curso',
      payNowButton: 'Pagar Agora',
      paymentSucceeded: 'Pagamento do curso {name} concluído com sucesso',
      paymentFailed: 'Pagamento do curso {name} falhou: {err}',
      finalisingPayment: 'A finalizar pagamento, espere um pouco...⏳',
      voucherCode: 'Código Promocional',
      applyButton: 'Aplicar',
      payWithLiqpay: 'Pagar com LiqPay',
      payAmountCurrency: 'Pagar {amount} {currency}',
      vatIncluded: '(IVA incluído)',
      applyPromocode: 'Se tem um código promocional, por favor insira-o no campo abaixo.',
      confirmSettingsAndProceed: 'Confirmar definições e prosseguir',
      wrongTaxId: 'Formato de Identificação Fiscal errado. O formato correto é <strong>{correctFormat}</strong>.<br>Atualize a página e tente novamente.'
    },
    failedCourse: {
      failedCourseTitle: 'Atualização Importante no Seu Curso',
      failedCourseTooltip: 'Por favor, reinicie o curso para poder completá-lo.',
      failedCourseAlertMessage: 'Infelizmente, não é possível obter pontuação suficiente para um certificado. Obteve {correct} de {total} pontos, mas não é suficiente para cumprir o requisito de {minRate}%',
      failedCourseOneTimeEnrolment: 'Não é possível reiniciar o curso. Entre em contato com o administrador para se reinscrever.',
      restartCourseButton: 'Reiniciar o curso'
    },
    headers: {
      titleAndDescription: 'Título e Descrição do Curso',
      quizProgress: 'Progresso das Perguntas',
      title: 'Título do Curso',
      description: 'Descrição do Curso',
      ordering: 'Ordem do Curso',
      progress: 'Progresso do Curso',
      createTime: 'Criado',
      updateTime: 'Atualizado'
    },
    published: 'Publicado'
  },
  learningPaths: {
    noCompleted: 'You have not completed any learning path yet',
    noAssigned: 'You have no assigned learning paths yet',
    numberOfCourses: 'No courses | {completed}/1 course | {completed}/{n} courses',
    achievementsLabel: 'Achievements',
    skillsLabel: 'Skills',
    certificateLabel: 'Certificado no final',
    progressLabel: 'Progresso',
    totalFound: 'Nenhuma trajetoria de aprendizagem encontrado | <strong>{n}</strong> trajetoria de aprendizagem encontrada | <strong>{n}</strong> trajetorias de aprendizagem encontradas',
    item: {
      title: 'Título e Descrição',
      steps: 'Passos',
      progress: 'Progresso',
      actions: 'Ações'
    }
  },
  auth: {
    or: 'OU',
    dontHaveAnAccountYet: 'Ainda não tem conta?',
    enterPassword: 'Introduza a sua password',
    enterPhone: 'Introduza o número de telefone',
    atLeastChars: 'Pelo menos {numberCharacters} caracteres',
    forgotPassword: 'Esqueceu-se da sua Password?',
    resetPassword: {
      title: 'Mudar Password',
      description: 'Introduza o seu endereço de email e receberá as instruções para mudar a sua password.',
      placeholder: 'Endereço de email',
      button: 'Mudar password',
      info: 'Se não receber um email nos próximos minutos verifique a sua pasta de Spam.',
      support: 'O email irá ser enviado de info@theworkademy.com',
      passwordResetSuccess: '<b>Certo!</b> As instruções já deverão estar no seu email.',
      changePasswordTitle: 'Mudar Password',
      changePasswordDesc: 'Digite a sua password.',
      passwordChangeSuccess: '<b>Certo!</b> A password foi mudada com sucesso. Já se encontra com a sessão iniciada com a nova password.',
      passwordChangeSuccessAndLogin: '<b>Certo!</b> A password foi mudada com sucesso. Pode agora iniciar a sessão com a nova password.'
    },
    nameLabel: 'Nome',
    namePlaceholder: 'João Martins',
    emailLabel: 'E-mail',
    join: 'Junte-se a nós!',
    alreadyHaveAccount: 'Já tem conta?',
    loginNow: 'Agora pode entrar!',
    token: 'Token',
    newPassword: 'Nova Password',
    repeatPassword: 'Repetir a nova Password',
    passwordRequired: 'É necessário uma password',
    passwordRule: 'A Password tem de conter no mínimo 8 caracteres e não pode conter mais do que {maxChars} caracteres',
    passwordShouldMatch: 'As Passwords tem de coincidir',
    passwordValid: 'A Password tem de conter no mínimo 8 caracteres e não pode conter mais do que {MAX_PASSWORD_LENGTH} caracteres',
    repeatPasswordRequired: 'Por favor, repita a senha',
    passwordsDontMatch: 'As senhas não coincidem',
    profilePicture: 'Foto de perfil',
    pictureLabel: 'URL da foto de perfil',
    pictureHint: 'Copie o link da sua imagem de perfil favorita',
    phone: 'Número de telefone',
    city: 'Cidade',
    street: 'Rua',
    postalCode: 'Código postal',
    country: 'País',
    addressAndPhoneTitle: 'Endereço e número de telefone',
    changePassword: 'Alterar Password',
    oldPasswordLabel: 'Password antiga',
    newPasswordLabel: 'Nova password',
    phoneLabels: {
      countrySelectorLabel: 'Código do país',
      countrySelectorError: 'Selecione país',
      phoneNumberLabel: 'Número de telefone',
      example: 'Exemplo:'
    },
    consentRule: 'É necessário concordar com política de privacidade de dados para proseguir',
    consentLabel: 'Concordo com a <a href="{url}" target="_blank">política de privacidade</a>',
    loginTitle: 'Entrar',
    registerTitle: 'Registar',
    loginDisclaimer: '',
    registerDisclaimer: '',
    whereToGoTitle: 'Qual o workspace da Workademy?',
    whereToGoSubtitle: 'Digite o nome do seu workspace da Workademy. Por exemplo, "workademy"',
    workspaceNameLabel: 'Nome do Workspace',
    workspaceNamePlaceholder: 'workademy',
    backToRipplingButton: 'Voltar para Rippling',
    proceedToWorkspaceButton: 'Prosseguir para {name}',
    loginWithRippling: 'Login com Rippling',
    loginWithDeel: 'Login com Deel',
    createNewWorkspace: 'Ou crie um novo workspace'
  },
  errors: {
    '-1': 'Aconteceu um erro inesperado!',
    1000: 'Este e-mail já existe',
    1001: 'Utilizador não encontrado',
    1002: 'O endereço de email ou password não é válido',
    1003: 'O endereço de email ou password não é válido',
    1100: 'Token inválido',
    1101: 'Token expirado',
    59: 'O nome de utilizador e password não coincidem',
    1300: 'O curso ainda não está terminado.',
    1500: 'O voucher com o código {code} não foi encontrado',
    1501: 'O voucher com o código {code} já foi usado',
    9905: 'Por favor verifique as configurações do correio eletronico no Facebook. ',
    1302: 'Já se encontra enscrito neste curso. Só é possível inscrever-se uma vez a este curso.',
    1307: 'Há um período de reflexão de <strong>{period}</strong> antes que possa fazer este curso novamente.',
    1308: 'Inscrição impossível: Já concluiu este curso, e a inscrição é limitada a uma única vez.'
  },
  footer: {
    platformDescription: '<strong>{title}</strong> é uma plataforma de ensino online criada com foco na motivação e vontade de aprender',
    links: 'Links',
    contacts: 'Contactos',
    github: 'GitHub',
    foundIssues: 'Encontraste problemas?',
    submitThem: 'submete-os!',
    privacyUrl: 'https://www.theworkademy.com/privacy',
    workademyPrivacyLabel: 'Privacidade da Workademy',
    privacyLabel: 'Privacidade',
    contentLabel: 'Content Policy',
    contactUsTitle: 'Contacte-nos!',
    contactUsText: 'Se tiver alguma questão ou encontrar um erro num curso, escreva-nos!',
    supportEmail: 'support@theworkademy.com',
    poweredBy: 'fornecido por <a href="{companyUrl}" target="_blank" class="company-link">{company}</a>'
  },
  progress: {
    go: 'Siga! Apenas {completed} de {total} perguntas respondidas',
    nice: 'Boa! {completed} de {total} perguntas correctamente respondidas! Continua assim!',
    almost: 'Está quase! {completed} de {total} perguntas respondidas!',
    done: 'Feito! {completed} de {total} perguntas correctamente respondidas!',
    shorten: '{completed}/{total}',
    answeredQuestions: '<strong>{score}</strong> perguntas respondidas',
    seenLecture: '<strong>{score}</strong> lições terminadas',
    yourScore: 'Pontuação: {score}',
    questionsProgress: 'Respondeu a {progress}% das perguntas ({correct}/{total})',
    lecturesProgress: 'Leu {progress}% das lições ({correct}/{total})',
    overallProgress: 'Respondeu a {progressQuestions}% ({correctQuestions}/{totalQuestions}) das perguntas e leu {progressLectures}% ({correctLectures}/{totalLectures}) das lições.'
  },
  settings: {
    settings: 'Definições',
    changeSettings: 'Alterar Definições',
    changeSettingsSuccess: 'Suas alterações foram guardadads com sucesso!',
    changeSettingsError: 'Ocorreu um erro ao alterar suas configurações: {err}.',
    passwordChangeSuccess: 'Sua senha foi alterada com sucesso.',
    passwordChangeError: 'Ocorreu um erro ao alterar sua senha: {err}.',
    language: 'Língua',
    takeMeBack: 'Voltar',
    userPic: {
      change: 'Mudar imagem de perfil (png ou jpeg)',
      add: 'Addicionar uma imagem de perfil (png ou jpeg)',
      chooseYourAvatar: 'Avatares'
    }
  },
  learnerProfile: {
    learnerProfile: 'Perfil de Aprendiz',
    achievementsTitle: 'Os Meus Achievements',
    skillsTitle: 'Os Meus Skills',
    viewAll: 'Ver Todos',
    courses: 'Cursos',
    learningPaths: 'Trajetorias',
    achievements: 'Achievements',
    skills: 'Skills',
    level: 'Nível',
    frames: 'Frames de Gamificação',
    points: 'Pontos dos cursos'
  },
  organization: {
    organization: 'A minha organização',
    skills: 'Skill | Skills',
    members: 'Membro | Membros',
    level: 'Nível',
    noGroupsYet: 'Não há grupos organizacionais criados ainda.',
    noGroupsAdmin: 'Não há grupos criados ainda. Por favor, crie grupos para poder ver a estrutura organizacional aqui.',
    createGroupsBtn: 'Criar Grupos',
    points: 'Pontos dos cursos',
    loadMoreUsers: 'carregar mais utilizadores...'
  },
  certificates: {
    congratulations: 'Parabéns, qualificou-se para um certificado!',
    eligibleHeadline: '👉 Pontuação: {score}%. Após o certificado, o curso termina mas os materiais permanecem acessíveis no seu painel de controlo.',
    eligibleHeadlineCombined: '👉 Progresso alcançado: {score} respostas corretas e {lectures} aulas concluídas. Ao atingir este nível, você pode obter seu certificado. O curso termina, mas os materiais permanecem acessíveis no seu painel.',
    youCanCancel: '👉 Pode continuar o seu curso agora e pedir o seu certificado mais tarde. A opção de pedir o certificado permanecerá disponível.',
    checkNameText: '⚠️ Atenção! Certifique-se de que o nome no certificado nas configurações está correto:',
    changeNameInSettingsText: 'Para corrigir o nome, use o botão <strong>Alterar Nome</strong> e depois volte aqui.',
    generateForName: 'Confirmo a emissão do certificado para <strong>{name}</strong>.',
    notEligibleHeadline: 'Condições não reunidas',
    notEligibleText: 'Volta para o curso e responde todas as perguntas que faltam para responder',
    notEligibleOkButton: 'Ok, eu sei o que devo fazer',
    nameInSettingsText: 'O nome que consta nas configurações do teu perfil é',
    changeSettingsLinkText: 'Mudar as configurações do perfil',
    byProcedingWithCertGenText: 'Ao proseguir com a geração do certificado concordas em terminar o curso e gerar o certificado',
    changeNameLinkText: 'Mudar o nome',
    generate: 'Receber certificado',
    continueToCourse: 'Continuar para o curso',
    getCertificate: 'Certificado',
    openCertificate: 'Abrir o certificado',
    completeCourse: 'Completar o curso',
    dontGenerate: 'Cancelar',
    certificateTitle: 'CERTIFICADO',
    issuedOn: 'Emitido em',
    toCertifyThat: 'certifica que',
    hasCompletedTheCourse: 'completou o curso',
    ofADurationOf: 'Com uma duração de {duration}',
    withDuration: 'Com uma duração de {duration} horas',
    checkCertificateText: 'A autenticidade deste certificado poderá ser verificada através do link',
    canGetCertificate: 'You have correctly answered <strong>{score}</strong> out of <strong>{total}%</strong> questions. <br>You can get your certificate.',
    needMoreToGetCertificate: 'You have to correctly answer <strong>{total}%</strong> of questions of the course. <br> You\'ve answered <strong>{score}</strong>.',
    givenUpCourse: 'Seems like you gave up this course. You have to restart this course if you want to get a certificate',
    courseCompletedWithSuccess: 'Course {name} completed with success!',
    youHaveToAnswerAllQuestions: 'You have to answer all the questions to be able to complete the course.',
    youHaveToCompleteAllLectures: 'You have to complete all the lecture to be able to complete the course.',
    youHaveAnsweredAllQuestions: 'You have answered all the questions of the course and you can complete the course now.',
    youHaveCompletedAllLectures: 'You have completed all the lectures of the course and you can complete the course now.',
    youHaveAlreadyCompleted: 'You have already completed this course',
    youCompletedСertification: 'Você concluiu esta certificação',
    eligibleAllCertification: 'Você respondeu com sucesso a todos os questionários e agora pode concluir esta certificação. Ela estará sempre disponível na seção de cursos concluídos.',
    eligibleCancelCertification: 'Você não precisa concluir a certificação agora. O botão para concluir a certificação estará sempre disponível.',
    youHaveAlreadyCertificate: 'Your certificate has already been issued to you. Click the button to access it',
    shareOnLinkedIn: 'Adicionar ao LinkedIn',
    cantFind: 'O certificado com UUID {uuid} não pôde ser encontrado.',
    proceedToMainPage: 'Prossiga para a página principal',
    youHaveToCompleteExternalCourse: 'Clique no botão quando tiver concluído o curso.',
    youHaveCompletedExternalCourse: 'Já marcou este curso como concluído',
    finishExternalCourseTitle: 'Confirmar Conclusão do Curso',
    finishExternalCourseSubtitle: 'Ao clicar no botão "Concluir Curso", confirma que concluiu este curso. Se não o tiver concluído, selecione "Cancelar" para voltar e continuar o curso.'
  },
  vouchers: {
    introduceCode: 'Introduze o código do teu voucher para te inscreveres no curso',
    voucherCode: 'Código'
  },
  admin: {
    drawer: {
      adminToolsDrawer: {
        title: 'Ferramentas de Administração do Curso'
      }
    },
    attendance: {
      attending: 'Presentes:',
      notAttending: 'Ausentes:',
      attendedLive: 'Assistiram:',
      seenBy: 'Visto por:'
    },
    enroll: {
      enrollIntoCourse: 'Inscrever utilizadores no curso {name}',
      enrollIntoLearningPath: 'Inscrever utilizadores na trajetoria de aprendizagem {name}',
      grantFreebieButton: 'Conceder Acesso',
      grantFreebieSuccess: 'O utilizador {name} foi concedido acesso ao curso',
      grantFreebieError: 'Ocorreu um erro ao conceder acesso ao utilizador {name}: {err}'
    },
    stepper: {
      basicInformationTitle: 'Informações Básicas',
      mediaVisualsTitle: 'Mídia e Visuais',
      enrollmentAccessTitle: 'Inscrição e Acesso',
      certificationCompletionTitle: 'Certificação e Conclusão',
      courseFeaturesTitle: 'Curso e Recursos',
      commercialSettingsTitle: 'Configurações Comerciais',
      miscellaneousTitle: 'Diversos',
      externalUrlTitle: 'Fonte',

      title: 'Título do Curso *',
      titleDesc: 'Defina o nome do curso.',
      descriptionTitle: 'Descrição',
      descriptionDesc: 'Escreva um resumo breve ou uma descrição detalhada do curso.',
      tagsTitle: 'Tags',
      tagsDesc: 'Adicione tags para classificar o conteúdo do curso.',
      durationTitle: 'Duração',
      durationDesc: 'Especifique a duração do curso.',
      durationLabel: 'Duração em Minutos',
      typeTitle: 'Tipo de Curso',
      typeDesc: 'Defina o tipo de curso para corresponder ao seu propósito. Cada tipo é adaptado a uma abordagem específica de aprendizagem ou certificação.',
      typeLabel: 'Selecione o tipo de curso',
      types: {
        base: 'Curso Básico',
        external: 'Curso Externo',
        SCORM: 'SCORM',
        certification: 'Curso de Certificação',
        umbrella: 'Curso Integrado'
      },

      cardImageTitle: 'Imagem do Cartão do Curso',
      cardImageDesc: 'Carregue a imagem que representa o curso nas listas.',
      coverImageChooser: 'Escolha a imagem de capa para o curso',
      useDefaultCover: 'Usar Capa Padrão',
      wideCoverTitle: 'Capa Ampla do Curso',
      wideCoverDesc: 'Defina a capa ampla para visualizações detalhadas do curso.',

      externalTitle: 'URL Externo',
      externalDesc: 'Defina um URL para direcionar os alunos ao material de aprendizado externo.',
      externalLabel: 'Link que aponta para o cartão do curso externo',

      anonymousAllowedTitle: 'Requisito de Autenticação',
      anonymousAllowedDesc: 'Decida se os usuários podem se inscrever sem autenticação.',
      anonymousAllowedLabel: 'Anônimo permitido',
      availableFromUntilTitle: 'Horários de Início e Fim',
      availableFromUntilDesc: 'Defina os horários oficiais de início e término do curso.',
      preEnrollAllowedTitle: 'Pré-inscrição',
      preEnrollAllowedDesc: 'Permitir que os usuários se inscrevam antes da data de início.',
      preEnrollAllowedLabel: 'Pré-inscrição permitida',
      advancedTitle: 'Avançado',
      enrollmentCodeTitle: 'Código de Inscrição',
      enrollmentCodeDesc: 'Ativar ou desativar a necessidade de um código para participar.',
      enrollmentCodeLabel: 'Ativado com código de inscrição',
      oneTimeEnrollmentTitle: 'Inscrição Única',
      oneTimeEnrollmentDesc: 'Especifique se o curso permite apenas uma inscrição por usuário.',
      oneTimeEnrollmentLabel: 'Inscrição única (sem possibilidade de repetição do curso)',
      enrollmentApprovalTitle: 'Aprovação de Inscrição',
      enrollmentApprovalDesc: 'Defina se as inscrições exigem aprovação do administrador.',
      enrollmentApprovalLabel: 'Pré-aprovar a Inscrição dos Alunos',
      recurringCourseTitle: 'Curso Recorrente',
      recurringCourseDesc: 'Defina se o curso é recorrente e a data da primeira recorrência.',

      certificationTitle: 'Configurações de Certificação',
      certificationDesc: 'Ativar ou desativar a certificação para o curso.',
      gradeTitle: 'Requisito de Nota',
      gradeDesc: 'Defina o percentual de nota necessário para certificação.',
      coolingOffPeriod: 'Período de Espera',
      coolingOffPeriodDesc: 'Defina o tempo que os usuários devem aguardar antes de tentar o curso novamente em caso de reprovação.',
      coolingOffPeriodLabel: 'Período de Espera (horas)',
      pointsEarnedTitle: 'Pontos Ganhos',
      pointsEarnedDesc: 'Defina os pontos ganhos pelos usuários ao concluir o curso.',
      pointsEarnedLabel: 'Pontos Ganhos',

      learningSequenceTitle: 'Sequência de Aprendizado',
      learningSequenceDesc: 'Especifique se o aprendizado do curso é sequencial.',
      learningSequenceLabel: 'Aprendizado sequencial (cada módulo abre após a conclusão do anterior)',
      forumDiscussionTitle: 'Discussão em Fórum',
      forumDiscussionDesc: 'Ativar ou desativar os fóruns de discussão para o curso.',

      paidTitle: 'Curso Pago',
      paidDesc: 'Defina se o curso é pago e estabeleça o preço.',
      exemptTitle: 'Acesso gratuito para grupos',
      exemptDesc: 'Os usuários pertencentes aos seguintes grupos estão isentos de pagamento.',
      featuredTitle: 'Curso em Destaque',
      featuredDesc: 'Marque se o curso está em destaque e deve aparecer em uma seção destacada.',
      featuredLabel: 'Marcar como Destaque',

      folderTitle: 'Pasta',
      folderDesc: 'Organize seu curso em uma pasta',
      disclaimerPopupTitle: 'Pop-up de Isenção de Responsabilidade',
      disclaimerPopupDesc: 'Configurar o pop-up de isenção exibido durante a inscrição.',
      templateTitle: 'Modelo de Curso',
      templateDesc: 'Especifique se este curso pode ser clonado ou copiado por outros usuários.',
      templateLabel: 'Curso Modelo',
      manualOrderTitle: 'Ordem Manual',
      manualOrderDesc: 'Defina a ordem manual do curso nas listas.',
      manualOrderLabel: 'Ordem do curso',
      customFieldsTitle: 'Campos Personalizados',
      customFieldsDesc: 'Adicione campos personalizados relevantes para o curso.',
      newFieldNameLabel: 'Nome do Campo',
      newFieldValueLabel: 'Valor do Campo',
      newFieldNamePlaceholder: 'Nome',
      newFieldValuePlaceholder: 'Valor',

      coverLabel: 'Imagem de Capa',
      enterUrl: 'Digite o URL',

      certificateForAnsweredQuestions: 'Para perguntas respondidas',
      certificateForAnsweredQuestionsInfo: 'Emitir certificado para a porcentagem de perguntas respondidas',
      certificateForReadLectures: 'Para aulas concluídas',
      certificateForReadLecturesInfo: 'Emitir certificado após a conclusão de todas as aulas',
      passingRateLabel: 'Taxa de Aprovação',

      modulesLabel: 'Número de módulos',
      lecturesLabel: 'Número de aulas em cada módulo',
      sectionsLabel: 'Número de seções em cada aula',
      createCourse: 'Criar Curso',
      updateCourse: 'Atualizar Curso',
      scormPreview: 'Pré-visualização SCORM aparecerá aqui',
      scormBeingProcessed: 'SCORM carregado! Estamos a processá-lo, o que pode demorar até dois minutos. Pode aguardar ou voltar mais tarde. <strong>Não se esqueça de guardar o seu curso!</strong>',
      scormProcessedSuccessfully: 'SCORM processado com sucesso!',
      scormProcessedError: 'Ocorreu um erro ao processar o ficheiro SCORM. Tente carregá-lo novamente.',
      oneTimeEnrollment: 'Inscrição Única',
      recurring: {
        isRecurringText: 'Este curso é recorrente.',
        isNotRecurringText: 'Este curso não é recorrente',
        periodLabel: 'Período de recorrência',
        firstExecutionLabel: 'A primeira reinscrição deve ocorrer em:',
        firstExecutionExplanation: 'A primeira vez que a recorrência será aplicada. <br>' +
          'Os aprendizes que estão inscritos no curso e já o concluíram serão reinscritos pela primeira vez nesta data.',
        amountLabel: 'Vezes',
        timesToRepeat: 'Vezes a repetir',
        periodOfRecurringText: 'Os alunos devem repetir este curso a cada ',
        saveRecurring: 'Guardar informações recorrentes',
        deleteRecurring: 'Remover propriedades recorrentes',
        period: {
          MONTHLY: 'Mês | Meses',
          YEARLY: 'Ano | Anos'
        },
        messages: {
          createdSuccess: 'Agendador recorrente para o curso {name} criado com sucesso.',
          updatedSuccess: 'Agendador recorrente para o curso {name} atualizado com sucesso.',
          deletedSuccess: 'Agendador recorrente para o curso {name} apagado com sucesso.',
          createdError: 'Erro ao criar o agendador recorrente para o curso {name}: {err}.',
          updatedError: 'Erro ao atualizar o agendador recorrente para o curso {name}: {err}.',
          deletedError: 'Erro ao apagar o agendador recorrente para o curso {name}: {err}.'
        }
      },
      ai: {
        topicAndLocaleTitle: 'Tópico e Língua',
        contextTitle: 'Contexto Adicional',
        contextExplanation: 'Aqui pode escrever tudo o que ajudará a adaptar o curso às necessidades específicas da empresa.',
        contextHint: 'Exemplo: Somos uma empresa emergente de tecnologia de seguros em busca de sucesso nas vendas.',
        contentSpecificationTitle: 'Especificações de Conteúdo',
        numberOfThingsTitle: 'Especificação de Conteúdo',
        topicLabel: 'Tópico do curso',
        localeLabel: 'Língua do curso',
        contextLabel: 'Contexto Adicional',
        noModulesLabel: 'Número de módulos',
        noTopicsLabel: 'Número de tópicos em cada módulo',
        noOptionsLabel: 'Número de opções em cada questão',
        noModulesHint: 'O número de módulos pode ser de 1 a 10',
        noTopicsHint: 'O número de tópicos por módulo não pode ser menos de um e mais de 5',
        noOptionsHint: 'O número de opções por questão não pode ser menos de 3 e mais de 5',
        specifyEveryModule: 'Especifique cada módulo que deseja que apareça no seu curso',
        specifyEveryModuleExplanation: 'Especifique o título de cada módulo no curso, por exemplo, "Fundamentos do GDPR", "GDPR e tecnologia de seguros", "GDPR para Desenvolvedores"',
        modules: 'Módulos',
        lectures: 'Aulas',
        questions: 'Perguntas',
        businessGoalsLabel: 'Objetivos de negócio do curso',
        businessGoalsHint: 'Comece a digitar para pesquisar ou criar o seu próprio objetivo',
        businessGoalsExplanation: 'Os objetivos de negócio devem ser SMART – Específicos, Mensuráveis, Alcançáveis, Relevantes, Temporais. ' +
          'Por exemplo, "Aumentar a Receita de Vendas: Aumentar a receita de vendas trimestral em 15% implementando formação avançada de vendas para a equipa até ao final do Q2."',
        businessGoalsExamples: [
          'Aumentar a Receita de Vendas: Aumentar a receita de vendas trimestral em 15% implementando formação avançada de vendas para a equipa até ao final do Q2.',
          'Melhorar a Satisfação do Cliente: Alcançar uma pontuação de satisfação do cliente de 90% treinando o pessoal de atendimento ao cliente em resolução de conflitos e habilidades de comunicação nos próximos 6 meses.',
          'Aprimorar as Competências dos Empregados: Garantir que 100% do departamento de marketing seja treinado em ferramentas de análise de dados nos próximos 3 meses para melhorar a eficiência das campanhas.',
          'Reduzir Custos Operacionais: Diminuir os custos de produção em 10% no próximo ano através de operações otimizadas e treino de eficiência para o pessoal de produção.',
          'Expandir o Alcance de Mercado: Entrar em 2 novos mercados internacionais até o final do ano, preparando a equipa de vendas com habilidades linguísticas e treino cultural até o Q3.',
          'Aumentar a Consciência da Marca: Melhorar a consciência da marca em 25% medido pelo envolvimento nas redes sociais através de uma série de sessões de treino de marketing digital direcionado para a equipa de marketing no próximo trimestre.',
          'Aprimorar Habilidades de Liderança: Desenvolver habilidades de liderança em 20 gerentes de nível médio matriculando-os num programa de treino de liderança abrangente até o fim do ano fiscal.',
          'Aumentar a Retenção de Empregados: Reduzir a rotatividade anual de empregados em 5% através de práticas de gestão melhoradas e cursos de desenvolvimento de liderança ao longo dos próximos 12 meses.',
          'Melhorar os Tempos de Entrega de Projetos: Reduzir os tempos de entrega de projetos em 20% nos próximos 9 meses através de formação avançada em gestão de projetos para todos os gestores de projetos.',
          'Aumentar a Eficiência da Produção: Alcançar um aumento de 15% na eficiência da produção treinando o pessoal em novas tecnologias de fabricação nos próximos 6 meses.',
          'Aprimorar a Transformação Digital: Treinar 90% da força de trabalho da empresa em novas ferramentas e plataformas digitais até o fim do ano para apoiar iniciativas de transformação digital.',
          'Melhorar a Saúde e Segurança: Alcançar zero acidentes no local de trabalho para o próximo ano através de treino de segurança abrangente para todos os novos empregados no seu primeiro mês de emprego.',
          'Aumentar o Compromisso dos Empregados: Aumentar os scores de compromisso dos empregados em 10 pontos através de sessões de treino de liderança e motivação até ao final do ano.',
          'Expandir a Linha de Produtos: Lançar 3 novos produtos até o Q4, preparando a equipe de desenvolvimento de produto com sessões de treino de gestão de inovação a partir do Q2.',
          'Reduzir Reclamações de Clientes: Diminuir as reclamações de clientes em 20% no próximo ano através de protocolos de serviço melhorados e treino de tratamento de reclamações para as equipas de atendimento ao cliente.',
          'Otimizar a Gestão da Cadeia de Suprimentos: Melhorar a eficiência da cadeia de suprimentos em 15% nos próximos 6 meses através de treino especializado em logística da cadeia de suprimentos para membros da equipe.',
          'Aprimorar Medidas de Cibersegurança: Assegurar que 100% do pessoal de TI seja treinado nas práticas e respostas de cibersegurança mais recentes até ao fim do Q3 para mitigar riscos.',
          'Melhorar o Relatório Financeiro: Alcançar 100% de precisão no relatório financeiro treinando a equipe financeira em novo software e padrões de conformidade ao longo do próximo trimestre.',
          'Maximizar a Eficiência de TI: Aumentar o tempo de funcionamento dos sistemas de TI para 99.9% através de treino técnico contínuo para o pessoal de TI a partir do próximo mês.',
          'Desenvolver Pensamento Estratégico: Cultivar o pensamento estratégico em toda a organização através de workshops para todos os gestores sêniores ao longo dos próximos 6 meses.'
        ],
        averageAgeTitle: 'Idade Média',
        averageAgeLabel: 'Idade Média',
        averageAgeExplanation: 'Qual é a idade média dos aprendizes?',
        averageAgeHint: 'Se a sua equipe tem entre 20 e 50 anos, 35 é a resposta.',
        educationalBackgroundTitle: 'Contexto Educacional',
        educationalBackgroundExplanation: 'Qual é o contexto educacional dos aprendizes? Você pode escrever algo como, por exemplo, "Adultos trabalhando na área da saúde sem conhecimento prévio sobre cuidados médicos de emergência."',
        educationalBackgroundLabel: 'Contexto Educacional',
        educationalBackgroundHint: 'Exemplo: Na maioria são especialistas com mestrado trabalhando em pesquisa de mercado.',
        learningGoalsTitle: 'Objetivos de Aprendizagem',
        learningGoalsExplanation: 'Certifique-se de que os objetivos de aprendizagem sejam específicos, mensuráveis e alinhados aos objetivos de negócio.',
        learningGoalsLabel: 'Objetivos de Aprendizagem',
        learningGoalsHint: 'Exemplo: Os aprendizes serão capazes de aplicar técnicas básicas de primeiros socorros.',
        acquiredAbilitiesTitle: 'Habilidades Adquiridas',
        acquiredAbilitiesExplanation: 'As habilidades adquiridas devem ser orientadas para ação e declarar claramente o que os aprendizes serão capazes de fazer',
        acquiredAbilitiesLabel: 'Habilidades Adquiridas',
        acquiredAbilitiesHint: 'Os aprendizes serão capazes de realizar a RCP corretamente, identificar sinais de um ataque cardíaco e usar um DEA.',
        timeCommitmentHoursTitle: 'Compromisso de Tempo (em Horas Totais)',
        timeCommitmentHoursExplanation: 'Considere a intensidade e o ritmo do curso com base na disponibilidade dos aprendizes.',
        timeCommitmentHoursLabel: 'Compromisso de Tempo',
        timeCommitmentHoursHint: 'Exemplo: se os aprendizes têm 3 horas por semana durante 4 semanas, são 12.',
        pdfTitle: 'Enriqueça o conteúdo do curso com um PDF',
        pdfExplanation: 'Se você já possui um PDF com conteúdo específico para este curso, você pode carregá-lo aqui.'
      },
      info: {
        step1: '<p>In this section, choose the course cover, give your course a title, and tick the template checkbox if this course will be a template for other courses.</p>' +
          '<p><strong>All these settings can be changed afterwards.</strong></p>',
        step2: '<p>In this section, give your course a nice description. A list of learning objectives can be a nice description of a course. ' +
          'Use rich editor to highlight important information, create lists, or add colors.</p>' +
          '<p><strong>Course description can also be changed afterwards.</strong></p>',
        step3: '<p>Use this section to add the tags to the course. You can choose from the existing tags or create new ones.</p>' +
          '<p><strong>Course tags can be added and/or changed afterwards.</srong></p>',
        step4: '<p>Please specify the course duration in minutes. For example, if it lasts for 10 minutes, then it\'s 10 minutes, if it\'s 2 hours, then it\'s 120 minutes, etc.</p>' +
          '<p><strong>Course duration settings can be added and changed afterwards.</strong></p>',
        step5: '<p>Use this section to specify whether or not this course will be certifiable. You can also specify the minimum passing rate, in percentage from 0 to 100.</p>' +
          '<p><strong>These settings can be specified and changed afterwards.</strong></p>',
        certificateScormExplanation: 'Especifique se os alunos devem receber certificados apos terminarem o curso. ' +
          '<strong>Esta configuração pode ser mudada após criação do curso.</strong>',
        step6: '<p>Social learning is a great tool for motivation! Tick the box to enable Disqus forum after every lecture in the course.</p>' +
          '<p><strong>This option can be enabled and disabled any time afterwards.</strong></p>',
        step7: '',
        step8: '<p>Use this section to specify the number of modules in the course, lectures per module, and section per lecture.</p>' +
          '<p><strong>It\'s not a final decision, after the course is created, you can add or remove modules, lectures, and sections.</strong></p>',
        preEnrollAllowedExplanation: 'Untick to disallow learners enrolling before course starts',
        paidCourse: {
          amount: 'Amount',
          currency: 'Currency',
          amountShouldBeAboveZero: 'O valor não pode ser zero',
          paymentTypes: {
            STRIPE: 'Stripe',
            LIQPAY: 'LiqPay'
          }
        },
        availableFromTo: 'Escolha a data e hora em que o curso estará disponível. ' +
          'Note que os utilizadores não poderão ter acesso o curso antes da data de início ou depois da data de término.' +
          '<strong>É possível alterar essas configurações a qualquer momento.</strong>',
        sequentialLearning: 'Ative esta opção se um utilizador só puder passar para a próxima aula depois de concluir a anterior.',
        oneTimeEnrollment: 'Marque esta opção para impedir que um utilizador se inscreva várias vezes no curso.',
        paidCourseInfo: 'Configure as informações de pagamento. Não é possível alterar o fornecedor de pagamento no futuro, no entanto, é possível alterar o montante e a moeda. ' +
          '<strong>Certifique-se de que a integração do Prestador de Serviços de Pagamento correspondente está configurada na secção <em>Admin -> Integrações</em></strong>',
        voucherActivated: 'Marque a opção se tiver configurado voucher codes para este curso e o curso exigir os voucher codes para acesso.',
        customFields: 'Aqui você pode definir os campos personalizados do curso <strong>(Configuração avançada)</strong>.',
        scormUpload: 'Faça upload do arquivo SCORM aqui. Pode alterá-lo a qualquer momento no futuro.',
        ordering: 'Defina a ordem do curso caso queira que ele apareça em uma posição diferente na lista de cursos. ' +
          'Por exemplo, imagine que um curso específico tem de ser o primeiro da lista. Então defina a ordem como <strong>1</strong>.' +
          '<br><br><em>Para ignorar a ordem, defina o valor como <strong>1000</strong>. Em seguida, o curso será exibido ordenado por sua data de criação ou atualização.</em>',
        preEnrollDescription: 'Defina o HTML do pop-up de pré-inscrição que aparecerá para todos os alunos antes de serem matriculados no curso.',
        preApproveEnrollmentDescription: 'Escolha esta opção se a aprovação da inscrição for necessária. ' +
          'Os alunos tentarão se inscrever em cursos, mas não poderão iniciar os cursos enquanto os administradores não aprovarem sua inscrição.',
        aggregated: {
          metadata: 'Defina todos os metadados do curso aqui: título do curso, imagem de capa, descrição, duração, tags. Defina a ordem do curso e campos personalizados, se necessário.',
          socialLearning: 'Aprendizado social - defina se o fórum de discussão está disponível ou não após cada aula.',
          achievements: 'Defina as conquistas do curso – molduras de avatar, pontos do curso, certificado.',
          courseAccess: 'Defina as configurações relacionadas à disponibilidade do curso: data de início e término, se está disponível para visualização anônima ou por meio de códigos de inscrição.',
          recurring: 'Defina as configurações se o curso precisar ser recorrente: os usuários inscritos têm de repetir periodicamente o curso. ' +
            'Pode ser útil para alguns treinamentos obrigatórios, como conformidade. <strong>NOTA: aplica-se apenas aos aprendizes inscritos em grupo.</strong>'
        },
        ai: {
          topicAndLocale: 'Forneça um tópico e indique a língua do conteúdo gerado.',
          context: 'Forneça contexto adicional, por exemplo, o que o aprendiz vai aprender com este curso, objetivos, resultados de aprendizagem, metas de negócio.',
          numberOfThings: 'Indique o número de módulos, tópicos e opções em cada questão de avaliação.'
        },
        featuredDescription: 'Marque este curso como destacado. Aparecerá na grande secção de carrossel da lista de cursos.'
      },
      popup: {
        title: 'Título do popup',
        subtitle: 'Subtítulo do popup',
        content: 'Conteúdo do popup',
        action: 'Ação do popup'
      }
    },
    newCourse: {
      createNewCourse: 'Criar novo curso',
      newExternalResource: 'Criar novo recurso externo',
      newAiCourse: 'Criar novo curso com ajuda da IA',
      exploreAllWaysToCreateNewCourse: 'Explore todas as maneiras de criar um curso',
      newUmbrellaCourse: 'Criar um novo curso guarda-chuva',
      usingWizard: 'Crie um curso usando nosso assistente inteligente',
      basedOnBloom: 'baseado na taxonomia do Bloom',
      comingSoon: '(em breve)',
      usingBasicStructure: 'Criar um curso com uma estrutura básica',
      usingExternalResource: 'Criar um novo link para um recurso externo',
      createExternalCourse: 'Criar um link para um recurso externo',
      createScormCourse: 'Importar um pacote de curso SCORM',
      lookingLikeCourseCard: 'Parecerá um cartão de curso normal',
      scormCourseDescription: 'Criar um curso e adicionar o seu pacote SCORM',
      scormCourseCaption: '(Ou substitua a URL do ficheiro SCORM)',
      pointingToExternalResource: 'mas vai apontar para um recurso externo',
      toBeLaterFilledWithContent: 'Para ser posteriormente preenchido com conteúdo',
      iKnowWhatDoing: '(Eu sei o que estou a fazer!)',
      passingRateCantBeMore: 'A taxa de aprovação não pode ser superior a 100',
      passingRateCantBeLess: 'A taxa de aprovação não pode ser inferior a 0',
      courseBeingUpdated: 'O curso {name} está sendo atualizado...',
      usingAiTitle: 'Criar esboço de curso com IA 🪄',
      aiCourseBeingGenerated: 'A gerar o seu curso...\n' +
        'Pode esperar até estar pronto, ou verificar mais tarde em "Gerir Cursos". Pode fechar esta janela agora.',
      usingAiDescription: 'Gere um esboço de curso digitando instruções num prompt.',
      usingAiCaption: '(Estou com sorte!)'
    },
    editExistingCourses: 'Gerir Cursos',
    editExistingLearningPaths: 'Gerir trajetorias',
    editCourseInfo: 'Editar Informação do Curso',
    enrollUsers: 'Inscrever Utilisadores',
    durationInMinutes: 'Duração em minutos',
    availabilityDates: 'Datas de disponibilidade do curso',
    manageCoursesTitle: 'Administrar cursos',
    manageLearningPathsTitle: 'Administrar learning paths',
    templateCoursesTitle: 'Templates',
    forumEnabled: 'Fórum ativado (cada aula tem um fórum de discussão em anexo)',
    voucherActivated: 'Inscrição ativada por voucher',
    certificateEnabled: 'Ativar certificação',
    sharableCertificate: 'Certificado pode ser adicionado ao LinkedIn',
    oneTimeEnrollOnly: 'Inscrição única (sem possibilidade de repetição do curso)',
    quiz: {
      questionText: 'Texto da pergunta',
      questionSettings: 'Configurações da Pergunta',
      questionAnswers: 'Respostas das pergunta',
      questionExplanation: 'Explicação da pergunta',
      limitAttempts: 'Limitar tentativas',
      numberAttempts: 'Número de tentativas',
      addTimeLimit: 'Adicionar limite de tempo',
      timeLimitseconds: 'Limite de tempo (segundos)',
      editAnswer: 'Editar a resposta',
      editAnswerLabel: 'Edite a resposta',
      explanation: 'Explicação',
      doesntCountForEvaluation: 'Não conta para avaliação',
      mandatory: 'Marcar como obrigatório',
      mandatoryExplanation: 'O aluno deve responder a esta pergunta para prosseguir (funciona em conjunto com a aprendizagem sequencial).',
      hasCorrectAnswer: 'Tem resposta correta',
      openAnswer: {
        evaluateOpenAnswerOf: 'Avaliar resposta de questão aberta de {user}',
        answer: 'Resposta',
        usersFile: 'Ficheiro do utilizador',
        downloadFile: 'Baixar o ficheiro do utilizador',
        noFile: '{user} não carregou nenhum ficheiro',
        markAsIncorrect: 'Marcar como incorreto',
        markAsCorrect: 'Marcar como correto',
        openInNew: 'Abrir numa janela pop-up',
        questionTitle: 'Pergunta',
        feedbackTitle: 'Feedback',
        changeFeedback: 'Alterar feedback',
        provideFeedback: 'Dar um feedback',
        addFeedback: 'Adicionar feedback sem avaliação',
        gradeAnswerButtonCaption: 'Quando avaliar a resposta, o feedback (se fornecido) também será enviado'
      }
    },
    editingMode: {
      editCourse: {
        editCourseTitle: 'Editar curso {name}'
      },
      inlineEditorPlaceholder: 'Digite o texto...',
      emojiPicker: {
        addEmoji: 'Adicionar Emoji',
        unset: 'Desfazer',
        change: 'Alterar',
        pickerTitle: 'Escolha o seu emoji...',
        search: 'Pesquisar',
        notfound: 'Nenhum Emoji encontrado',
        categories: {
          search: 'Resultados da Pesquisa',
          recent: 'Usados Frequentemente',
          smileys: 'Sorrisos & Emoticon',
          people: 'Pessoas & Corpo',
          nature: 'Animais & Natureza',
          foods: 'Comida & Bebida',
          activity: 'Atividade',
          places: 'Viagens & Lugares',
          objects: 'Objetos',
          symbols: 'Símbolos',
          flags: 'Bandeiras',
          custom: 'Personalizados'
        }
      },
      placeholder: {
        courseTitle: 'Digite o título do curso...',
        courseDescription: 'Digite a descrição do curso...',
        moduleTitle: 'Digite o título do módulo...',
        moduleDescription: 'Digite a descrição do módulo...',
        lectureTitle: 'Digite o título da aula...',
        lectureDescription: 'Digite a descrição da aula...',
        sectionTitle: 'Digite o título da seção...',
        sectionText: 'Digite o texto da seção...',
        questionText: 'Digite a pergunta...',
        answerText: 'Digite a resposta...',
        bubbleText: 'Digite o texto da bolha...',
        optionTitle: 'Digite o título da opção...',
        accordionTitle: 'Digite o título do acordeão...',
        accordionText: 'Digite o texto...',
        quizDescription: 'Digite a descrição do quiz...'
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
        topOfTheLectureHeader: 'Início da áula (Imagem de capa, Vídeo, Typeform, SCORM ou Áula ao vivo)',
        editLectureHeader: 'Início da áula',
        noHeader: 'no header',
        editHeaderCover: 'Cover image',
        addHeaderCover: 'Cover image',
        editVideoSource: 'Video source',
        addVideoSource: 'Video source',
        editLiveLecture: 'Live lecture',
        editTypeformLecture: 'Typeform',
        addTypeformLecture: 'Typeform',
        editLoomLecture: 'Loom',
        addLoomLecture: 'Loom',
        addLiveLecture: 'Live lecture',
        pasteLiveLink: 'Paste link to Zoom or any other video conference',
        liveStartTime: 'Start Time',
        liveFinishTime: 'Finish Time',
        onClearHeader: 'Clear Header',
        lectureSettings: 'Definições da Aula',
        navigateLectureWith: 'Navigate lecture with:',
        navigateWithButton: 'Next Button (each next lecture opens on a next button click',
        navigateWithScroll: 'Scroll (all sections are opened by default)',
        recordLoomVideo: 'Record Loom Video',
        addLoomVideoUrl: 'Add Loom Video URL',
        addScormUrl: 'Edit SCORM package URL',
        editPdfSectionDesc: 'This section allows you to render a PDF inside a lecture and to download it.',
        invalidPdfUrl: 'Invalid PDF URL',
        lectureVisibility: {
          title: 'Configurar Regras de Visibilidade da Aula',
          buttonText: 'Alterar Visibilidade da Aula',
          dialog: {
            title: 'Regras de Visibilidade da Aula',
            noRules: 'Ainda não há regras de visibilidade definidas',
            allRules: 'Mostrar aula se corresponder a TODAS estas regras:',
            anyRules: 'E corresponder a QUALQUER uma destas regras:',
            addRuleButton: 'Adicionar Regra',
            addAndRuleButton: 'Adicionar regra AND',
            addOrRuleButton: 'Adicionar regra OR',
            saveRulesButton: 'Guardar regras',
            whenText: 'Quando',
            operators: {
              QUESTIONS: {
                EQUALS: 'é',
                NOT_EQUALS: 'não é',
                CONTAINS: 'contém',
                NOT_CONTAINS: 'não contém'
              },
              GROUPS: {
                EQUALS: 'é',
                NOT_EQUALS: 'não é',
                CONTAINS: 'contém algum',
                NOT_CONTAINS: 'não contém nenhum'
              }
            },
            connectors: {
              AND: 'e',
              OR: 'ou'
            },
            selectAQuestion: 'Selecionar uma Pergunta',
            selectAnAnswer: 'Selecionar uma Resposta'
          }
        }
      },
      editCourseStructure: 'Edtar a estrutura do curso',
      editCourseInfo: 'Editar informações do curso',
      enrollUsers: 'Inscrever Utilisadores',
      checkProgress: 'Verificar o progresso',
      editCourseDescription: 'Editar descrição do curso',
      editLectureDescription: 'Editar descrição da aula',
      addNewModule: 'Adicionar novo módulo',
      addNewLecture: 'Adicionar nova aula ao módulo',
      addNewSection: 'Adicionar nova seção',
      addNewBranchSection: 'Adicionar nova seção \'branching\'',
      deleteModule: 'Apagar módulo',
      editModuleDescription: 'Editar descrição do módulo',
      deleteLecture: 'Apagar aula',
      deleteGamificationItem: 'Apagar gamification item',
      saveCourseBeforeEditingLecture: 'Guarda o curso antes de poder editar a aula',
      addSection: 'Adicionar nova seção',
      addQuestion: 'Adicionar nova pergunta',
      addNewBubble: 'adicionar novo balão',
      newTextBubble: 'Balão de texto',
      newVideoBubble: 'Balão de vídeo',
      newAudioBubble: 'Balão de áudio',
      newQuestionBubble: 'Balão de pergunta',
      changeVideoSource: 'Alterar fonte de vídeo',
      changeAudioSource: 'Alterar fonte de áudio',
      editSection: 'Editar seção',
      deleteSection: 'Apagar seção',
      deleteOption: 'Apagar opção',
      editMediaSource: 'Editar fonte de mídia',
      changeMediaSourceLabel: 'Alterar fonte de mídia da aula',
      addVideoLabel: 'Copie o link do YouTube, Vimeo, Wistia, Loom ou GoogleDrive',
      addVideoHint: 'Alternativamente, clique em "copiar URL" no item de vídeo na biblioteca e cole aqui.',
      videoSubtitles: 'Legendas de vídeo',
      addVideoSubtitles: 'Adicionar legendas',
      editVideoSubtitles: 'Editar legendas',
      addVideoSubtitlesTrack: 'Adicionar faixa de legendas',
      videoSubtitlesLocale: 'Idioma',
      videoPreview: 'A prévia do vídeo aparecerá aqui',
      addTypeformUrl: 'Copie o link para o formulário Typeform',
      addSevenTapsUrl: 'Paste your 7 Taps url',
      addTypeformId: 'Paste your typeform ID',
      changeMediaSourceHint: 'A fonte de mídia pode ser um link para uma imagem no formato png ou jpg/jpeg.  ' +
        'Também pode ser um link para um vídeo do YouTube em https://www.youtube.com/embed/qeUGOsW8ewk ' +
        'ou pode ser um link para um vídeo do Vimeo na forma de https://player.vimeo.com/video/334294316',
      mediaSource: {
        clickToCreateVideoOrCover: 'Criar aula de vídeo ou adicionar uma imagem de capa',
        clickToEditVideoSrc: 'Editar orígem de vídeo ou a imagem de capa',
        clickToEditCover: 'Editar imagem de capa ou adicionar vídeo',
        canBeImage: 'A origem da mídia pode ser um link para uma imagem no formato PNG ou JPG.',
        canBeYoutube: 'A origem da mídia pode ser um link para um vídeo do YouTube, por exemplo https://www.youtube.com/embed/qeUGOsW8ewk',
        canBeVimeo: 'A origem de mídia pode ser um link para um vídeo do Vimeo, por exemplo, https://player.vimeo.com/video/334294316',
        canBeTypeform: 'A origem da mídia pode ser um link para um questionário Typeform, por exemplo, https://workademy.typeform.com/to/j2OAMk ',
        dropZoomInvite: 'Copie um convite para sua aula de Zoom',
        addMediaSource: 'Adicionar uma fonte de mídia (imagem, vídeo ou typeform)',
        createZoomLecture: 'Criar uma aula de Zoom'
      },
      editQuestion: 'Editar Pergunta',
      deleteQuestion: 'Apagar Pergunta',
      deleteQuestionDialogTitle: 'Zona de perigo!',
      deleteQuestionDialogText: ' Apagar uma pergunta pode resultar em erro devido ao trabalho dos alunos em curso. ' +
        'Considere salvar o curso antes de faze-lo.',
      newModuleName: 'Novo Módulo',
      newModuleDescription: 'Lorem Ipsum',
      newLectureName: 'Nova aula',
      newLectureDescription: 'Lorem Ipsum Aula',
      resetBtn: 'Reset',
      resetBtnTooltip: 'Cancelar todas as alterações feitas no curso.',
      saveBtn: 'Guardar',
      saveOnlyBtn: 'Guardar Apenas',
      saveAndNotifyBtn: 'Guardar e Notificar os Formandos',
      saveAndNotifyDialog: {
        title: 'Guardar e Notificar os Formandos',
        subtitle: 'Guarde o curso e notifique os formandos sobre as atualizações recentes.',
        notifyEveryone: 'Notificar Todos',
        youAreAboutToNotify: 'Nenhum formando corresponde aos critérios selecionados para notificação. | Está prestes a notificar um formando. Clique em "Notificar" para continuar. | Está prestes a notificar {n} formandos. Tem a certeza de que deseja continuar?',
        youAreAboutToNotifyMany: 'Nenhum formando corresponde aos critérios selecionados para notificação. | Está prestes a notificar um formando. Clique em "Notificar" para continuar. | Está prestes a notificar {n} formandos. Notificar mais de 50 pessoas pode levar até 2 horas, pois as mensagens são enviadas como parte de uma campanha de e-mail. Tem a certeza de que deseja continuar?',
        notifyActive: 'Notificar Formandos Ativos',
        notifyGroup: 'Notificar um Grupo',
        message: 'O curso {courseName} foi atualizado. Por favor, consulte o curso para mais detalhes.',
        messageTitle: 'Enviar Notificação',
        messageLabel: 'Modifique a mensagem predefinida, se necessário.',
        notifyAGroup: 'Notificar um Grupo Específico',
        activeOrEveryoneTitle: 'Escolha se deseja notificar apenas os formandos ativos ou todos, incluindo aqueles que abandonaram ou concluíram o curso.',
        activeOrEveryone: {
          active: 'Apenas Formandos Ativos (Recomendado)',
          everyone: 'Todos os Formandos'
        },
        toast: {
          success: 'Os formandos foram notificados com sucesso sobre as atualizações.',
          error: 'Ocorreu um erro ao notificar os formandos: {err}.'
        }
      },
      saveBtnTooltip: 'Existem alterações não guardadas. Guarde agora ou cancele.',
      publishBtn: 'Publicar Curso',
      publishBtnTooltip: 'publique ou cancele a publicação de seu curso para ficar disponível ou indisponível na lista de cursos ou para SEO (para os workspaces públicos).',
      unpublishBtn: 'Esconder Curso',
      exportJSON: 'Export JSON',
      importJSON: 'Import JSON',
      pasteJSON: 'Paste JSON of the course',
      errorReadingJSON: 'Erro ao ler o JSON',
      copyCourseUrl: 'Copiar URL do curso',
      courseUrlCopied: 'URL do curso copiado',
      sections: {
        newTextSection: 'Rich Text',
        newQuestionSection: 'Question',
        newDialogSection: 'Dialog-like',
        newPDFSection: 'PDF',
        newButtonSection: 'Botão',
        newImageTextSection: 'Image+Text',
        newVideoTextSection: 'Video+Text',
        newAudioTextSection: 'Áudio+Texto',
        newAccordionSection: 'Accordion',
        newBranchSection: 'Decisão',
        newImportantSection: 'Importante',
        newAdditionalInfoSection: 'Info adicional',
        newExamplesSection: 'Exemplos',
        newGridSection: 'Grelha',
        newTextSectionDescription: 'This section is perfect for any type of text you want to add to your lecture. ' +
          'You can enrich it with formatting, bullet lists, images, videos, and any type of HTML you like.',
        newQuestionSectionDescription: 'This section serves whenever you want to add a single or multiple choice question inside your lecture.',
        newDialogSectionDescription: 'This section serves to add a small piece of chat-like content, with avatar and several bubbles. ' +
          'These bubbles can be text, video, image, or even a question bubbles!',
        newPDFSectionDescription: 'This section allows you to render a PDF inside a lecture and to download it.',
        newButtonSectionDescription: 'This section allows you to render a button inside a lecture pointing rather to internal or to external link.',
        newImageTextSectionDescription: 'This section is an easy way to add an image with some text. You can play with a size of image or text and change their sides.',
        newVideoTextSectionDescription: 'This section is an easy way to add a YouTube or a Vimeo video with some text. You can play with a size of a video or text and change their sides.',
        newAudioTextSectionDescription: 'Esta secção é uma maneira fácil de adicionar um áudio com algum texto. Pode brincar com o tamanho da exibição de áudio ou texto e mudar os seus lados.',
        newAccordionSectionDescription: 'This section is a perfect way to add some optional information for those who want to know in a deeper detail. ' +
          'The information will be hidden inside the expandable options.',
        newBranchSectionDescription: 'Give some control to your learners providing several choices after which the course of the lecture will change. ' +
          'Currently only available for the dialog-like sections',
        newImportantSectionDescription: 'Highlight some important information of your lecture',
        newAdditionalInfoSectionDescription: 'Highlight some additional information of your lecture',
        newExamplesSectionDescription: 'Highlight some examples within your lecture',
        newGridSectionDescription: 'Crie uma grelha com tantas linhas e colunas que precisa e preencha com imagem e/ou texto',
        newTypeFormSectionDescription: 'Criar uma secção incorporada do TypeForm',
        newTableSection: 'Tabela',
        newTableSectionDescription: 'Crie uma tabela com o número exato de linhas e colunas que você precisa',
        typeForm: {
          pasteUrl: 'Cole o URL aqui'
        },
        accordion: {
          accordionTitle: 'Título do Acordeão',
          enterTitle: 'Título para esta seção do acordeão',
          addAccordionSection: 'Adicionar uma seção do acordeão'
        },
        branch: {
          branchOptionName: 'Nome da opção de decisão',
          branchingOptionsSectionsTitle: 'secções de opção de decisão',
          addSection: 'adicionar secção',
          deleteOption: 'apagar opção',
          saveOption: 'guardar opção',
          addBranchingOption: 'adicionar opção de decisão',
          option1Title: 'Opção 1',
          option2Title: 'Opção 2'
        },
        grid: {
          columnsLabel: 'Número de colunas',
          rowsLabel: 'Número de linhas',
          maxHeightLabel: 'Altura máxima de coluna',
          text: 'Text',
          image: 'Imagem',
          imageCaption: 'Legenda da imagem'
        },
        table: {
          sortable: 'Ordenável',
          fixFirstColumn: 'Fixar primeira coluna'
        },
        dialog: {
          configureDialogSection: 'Configure secção de diálogo',
          leftSide: 'Lado esquerdo da conversa',
          rightSide: 'Lado direito da conversa',
          avatarLink: 'Link de avatar',
          avatarName: 'Nome de avatar',
          userPictureAvatar: 'Avatar do utilizador'
        },
        examples: {
          branch: {
            option1: 'Opção 1',
            option2: 'Opção 2',
            option3: 'Opção 3',
            text: 'Obrigada por escolher a segunda opção'
          },
          dialog: {
            content1: 'Olá',
            content2: 'Vamos falar sobre o tempo',
            content3: 'Obrigada por estar connosco'
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
        importantLabel: 'Importante',
        additionalInfoLabel: 'Informação adicional',
        examplesLabel: 'Exemplos'
      },
      tags: {
        searchTags: 'Pesquisar tags',
        addTagsLabel: 'Adicionar tags ao curso',
        noResults: 'Não há resultados correspondentes ao "<strong>{search}</strong>". Prima <kbd>enter</kbd> para criar uma nova tag'
      },
      lectureInClipboard: 'Aula "{lecture}" está em area de transferencia. Pode copia-la depois de uma outra aula qualquer.',
      moduleInClipboard: 'Module "{lecture}" está em area de transferencia. Pode copia-lo depois de um outra module qualquer.',
      sectionInClipboard: 'Seçao do tipo {section} está em area de transferencia. Pode copia-la depois de um outra seçao qualquer.',
      copyModule: 'Copiar Módulo',
      pasteModule: 'Colar Módulo',
      copyLecture: 'Copiar Aula',
      pasteLecture: 'Colar Aula',
      createCourseOfLecture: 'Criar um curso publico de página única',
      copyQuestion: 'Copiar Pergunta',
      pasteQuestion: 'Colar Pergunta',
      copySection: 'Copiar Secção',
      pasteSection: 'Colar Secção',
      quiz: {
        bankSwitch: 'Banco de Perguntas',
        changeQuestion: 'Altere o texto da pergunta aqui'
      },
      umbrella: {
        itemTitle: 'Escreva o título (questão) para a decisão',
        addDecisionOption: 'Adicionar opção de decisão',
        deleteOption: 'Apagar a opcão de decisão',
        optionTitle: 'Texto da opção',
        umbrellaCourse: 'Curso {courseName}',
        umbrellaOptions: '{optionsNumber} opções',
        backButton: 'Voltar',
        nextButton: 'Próximo',
        decisionOption: 'Opção decisão',
        courseOption: 'Opção curso'
      }
    },
    gamification: {
      typeLabel: 'Tipo',
      nameLabel: 'Nome',
      descriptionLabel: 'Descrição',
      editGamification: 'Editar itens de gamificação',
      addGamificationItem: 'Adicionar itens de gamificação',
      saveGamificationItems: 'Guardar itens de gamificação',
      changeName: 'Mude o nome do item',
      changeDescription: 'Mude a descrição de item',
      saveItems: 'Guardar itens de gamificação',
      hideEditing: 'Não mostrar o modo de edição',
      editItem: 'editar iten',
      questionAnswerRateLabel: 'Racio de questões respondidas',
      chooseCompletedLectures: 'Selecione as aulas que devem ser passadas',
      chooseAnsweredQuestions: 'Selecione as perguntas que devem ser respondidas',
      types: {
        QUESTIONS_ANSWERED: 'Perguntas respondidas',
        LECTURES_COMPLETED: 'Aulas passadas',
        QUESTIONS_ANSWERED_RATE: 'Rácio de perguntas respondidas'
      },
      achievementTypes: {
        FRAME: 'Frame'
      },
      collectAchievements: 'Comece colecionar badges respondendo as questões e progredindo sobre os cursos'
    },
    progress: {
      courseNotStarted: 'Curso ainda não foi começado',
      courseInProgress: 'Curso em progresso',
      courseFinished: 'Curso concluído',
      coursesTitle: 'Cursos',
      learningPathsTitle: 'Caminhos de Aprendizagem',
      learningPathCourses: 'Cursos do Caminho de Aprendizagem',
      coursesTitleCoursesName: 'Cursos - {courseName}',
      learningPathTitleCoursesName: 'Trajetórias de Aprendizagem - {learningPathName}',
      coursesTitleCourseUserName: 'Cursos - {courseName} - {userName}',
      learningPathTitleUserName: 'Trajetórias de Aprendizagem - {learningPathName} - {userName}',
      clickOnLearningPathStep: 'Clique num cartão de curso para verificar o progresso de {name} num curso',
      learningPathNoSteps: 'Esta Trajetórias de aprendizagem não contém passos',
      cantFetchDataLearningPathStep: 'Não é possível obter dados para o passo {stepName}. Provavelmente, o passo foi concluído pelo utilizador {userName}',
      startedOn: 'Iniciado {startedOn}',
      finishedOn: 'Terminado {finishedOn}',
      progress: 'Progresso: {progress}%',
      startedOnTitle: 'Iniciado',
      finishedOnTitle: 'Terminado',
      completedInTitle: 'Concluído em',
      progressTitle: 'Progresso do Questionário',
      lectureProgressTitle: 'Progresso das Aulas',
      courseProgressTitle: 'Progresso dos cursos',
      lastActivityTitle: 'Atividade recente',
      statusTitle: 'Status',
      certificateTitle: 'Certificate',
      certificate: 'certificate',
      nameTitle: 'Nome',
      emailTitle: 'Email',
      noCourses: 'Ainda não criou nenhum curso',
      noCoursesWithSearch: 'Foi impossível encontrar cursos',
      createCourses: 'Criar cursos',
      createLearningPaths: 'Criar trajetórias de aprendizagem',
      progressOfUser: 'Progreso do {userName}',
      answeredQuestions: 'Respondido: <strong>{correct} / {total}</strong>',
      lecturesSeen: 'Aulas vistas: <strong>{seen} / {total}</strong>',
      seen: 'Visto',
      lectureMarkedAsSeen: 'Marcado como visto',
      lectureIsNotMarkedAsSeen: 'Ainda não visto',
      wrongAttempts: '{wrong} / {total} tentativas erradas',
      searchCoursePlaceholder: 'nome, descrição, tags, etc!',
      searchCourseLabel: 'Procurar cursos',
      usersPerPage: 'Utilisadores por página',
      downloadCSV: 'Download CSV',
      download: 'Baixar o relatório',
      downloadFull: 'Baixar o relatório completo',
      totalStudents: 'Total enrolled learners: {total}',
      searchUserPlaceholder: 'Procurar utilizador por email',
      enrollCount: 'Sem inscrições | Uma inscrição | {n} inscrições',
      inactiveCount: 'Inativo: {n}',
      abandonedCount: 'Abandonado: {n}',
      runningCount: 'Inscrições ativas: {n}',
      finishedCount: 'Concluído: {n}',
      noUsersInCourse: 'Não existem utilizadores inscritos neste curso.',
      noUsersInLearningPath: 'Não existem utilizadores atribuídos a esta trajetória de aprendizagem.',
      searchUserLabel: 'Email exacto para procurar',
      totalCourses: 'Total de cursos encontrados: {total}',
      totalEnrollments: 'Total encontradas: {total}',
      totalPendingEnrollments: 'Total de inscrições pendentes encontradas: {total}',
      approvePendingTitle: 'Aprovar',
      approvePendingButton: 'Aprovar',
      approvedSuccessfullyMessage: 'A inscrição de {name} foi aprovada com sucesso.',
      approvedErrorMessage: 'A inscrição de {name} não foi aprovada devido ao seguinte erro: {err}',
      reports: {
        reportIsGenerating: 'O relatório está a ser gerado. Por favor, aguarde.',
        reportGeneratedSuccessfully: 'Relatório gerado com sucesso.',
        reportGeneratedWithError: 'Falha na geração do relatório: {err}'
      },
      certificates: {
        userCertificateTitle: 'Certificado',
        changeCertificateData: 'Alterar dados do certificado',
        dialog: {
          title: 'Alterar dados do certificado',
          nameLabel: 'Alterar nome do aluno',
          changeButton: 'Alterar',
          success: 'Dados do certificado alterados com sucesso para {name}',
          error: 'Ocorreu um erro ao alterar os dados do certificado para {name}: {err}'
        }
      },
      detailed: {
        done: 'Concluído',
        inProgress: 'Em Progresso',
        notStarted: 'Não Iniciado',
        hidden: 'Oculto',
        locked: 'Bloqueado'
      },
      tabs: {
        detailedProgress: 'Progresso Detalhado',
        enrolledUsers: 'Progresso Geral',
        questionAnswersProgress: 'Respostas ao Questionário',
        pendingUsers: 'Utilizadores Pendentes',
        pendingGrading: 'Avaliação Pendente',
        preCourseSurvey: 'Inquérito Pré-Curso',
        postCourseSurvey: 'Inquérito Pós-Curso'
      },
      pendingGrading: {
        learnerTableTitle: 'Aprendente',
        actionsTableTitle: 'Ações',
        questionTableTitle: 'Pergunta',
        answerTableTitle: 'Resposta',
        fileTableTitle: 'Ficheiro',
        noPendingGradingFound: 'Não foram encontradas respostas pendentes de avaliação.',
        feedbackTitle: 'Feedback do Administrador do Curso',
        feedbackFieldTitle: 'Fornecer/Alterar Feedback',
        openToGiveFeedback: 'Abrir para dar um feedback',
        changeFeedback: 'Alterar feedback'
      },
      questionAnswers: {
        questionTableTitle: 'Pergunta',
        userTableTitle: 'Utilizador',
        correctTableTitle: 'Correto',
        userAnswerTableTitle: 'Resposta do Utilizador'
      }
    },
    groups: {
      newGroupTitle: 'Criar novo grupo',
      editGroupTitle: 'Editar grupo {name}',
      titleLabel: 'Nome do grupo',
      createGroup: 'Criar grupo',
      editGroup: 'Atualizar grupo',
      stepper: {
        title: 'Nome do grupo',
        titleLabel: 'Nome do grupo',
        description: 'Descrição do grupo',
        users: 'Usuários no grupo',
        courses: 'Cursos do grupo',
        learningPaths: 'Trilhas de aprendizado do grupo',
        titleErrorMessage: 'O título do grupo é obrigatório',
        maximumCharactersErrorMessage: 'Limite máximo de caracteres excedido.',
        info: {
          title: 'Adicione aqui o nome do grupo. Você poderá alterá-lo no futuro.',
          description: 'Adicione aqui a descrição do grupo. Você poderá alterá-la no futuro.',
          users: 'Você pode adicionar e remover usuários do grupo aqui.'
        },
        addUserToGroupButton: 'adicionar usuário',
        removeUserToGroupButton: 'remover usuário',
        createGroup: 'Criar grupo',
        editGroup: 'Atualizar grupo'
      }
    },
    staffManagement: {
      title: 'Administração de utilizadores',
      inviteUsersDialogTitle: 'Convidar Utilizadores',
      addUsers: 'Adicionar Utilizadores',
      uploadUsersCSV: 'Ou carregue um ficheiro CSV <strong>(formato: Primeiro Nome, Apelido, Email, Grupo (opcional))</strong>',
      inviteUsersDialogDescriptions: 'Novos membros receberão um e-mail após serem convidados',
      inviteUsersByEmail: 'Convidar utilizadores por e-mail',
      searchUserLabel: 'Procurar utilizador por email',
      searchUserPlaceholder: 'john.doe@gmail.com',
      emailTitle: 'Email',
      hasCourseCreationRights: 'Pode criar cursos',
      hasVoucherCreationRights: 'Pode criar campanhas',
      addCourseCreationRights: 'Adicionar poder de criar cursos',
      tabs: {
        userTabTitle: 'Usuários',
        groupTabTitle: 'Grupos',
        syncTabTitle: 'Administrar convites'
      },
      totalStudents: 'Total de alunos encontrados {total}',
      noGroups: 'Nenhum grupo atribuído ainda',
      searchGroup: 'Pesquisar grupos',
      searchUsers: 'Procurar utilizadores',
      inactiveForDays: 'Inativo por dias',
      inactiveFor: 'Inativo por:',
      inactiveDaysCount: 'Número de dias inativos',
      inactivityPeriods: {
        WEEK: 'mais de uma semana',
        TWOWEEKS: 'mais de duas semanas',
        MONTH: 'mais de um mês',
        HALFAYEAR: 'mais de meio ano',
        YEAR: 'mais de um ano'
      },
      createUsersButtonTitle: 'Criar usuários',
      detailsButtonTitle: 'Detalhes',
      totalGroups: 'Total de grupos encontrados: {total}',
      totalUsers: 'Total de usuários encontrados: {total}',
      createGroupButtonTitle: 'Criar Grupo',
      noRoles: 'Nenhuma função atribuída',
      noUsers: 'Nenhum membro no grupo | Um membro | {n} membros',
      learningJorneyTitle: 'Learning Journey',
      timeSpentLearningTitle: 'Tempo usado para aprendizagem',
      userCoursesTitle: 'Cursos do utilizador (total {n})',
      lastUserCoursesTitle: 'Cursos do utilizador ({n})',
      lastUserLearningPathsTitle: 'Caminhos de aprendizagem do usuário ({n})',
      userTitle: 'Do utilizador',
      usersTitle: 'Utilizadores',
      coursesTitle: 'Cursos',
      skillsTitle: 'Skills',
      groupsTitle: 'Grupos',
      assignSkillButton: 'Atribuir skill',
      removeSkillButton: 'Remover Skill',
      assignSkillsToUserTitle: 'Atribuir skill a {name}',
      assignGroupButton: 'Atribuir Grupo',
      assignGroupsToUserTitle: 'Atribuir grupos a {name}',
      assignUserToGroupButton: 'Adicionar utilisador ao grupo',
      removeUserFromGroupButton: 'Remover utilisador do grupo',
      permissionsTitle: 'Permissões',
      assignPermissionButton: 'Alterar Permissões',
      blockUserButton: 'Bloquear usuário',
      unBlockUserButton: 'Desbloquear usuário',
      deleteUserButton: 'Apagar usuário',
      userBlockedSuccessfully: 'Usuário {name} bloqueado com sucesso',
      userBlockedWithError: 'Ocorreu um erro ao bloquear o usuário {name}: {errorText}',
      userUnblockedSuccessfully: 'Usuário {name} desbloqueado com sucesso',
      userUnblockedWithError: 'Ocorreu um erro ao bloquear o usuário {name}: {errorText}',
      userDeletedSuccessfully: 'Usuário {name} apagado com sucesso',
      userDeletedWithError: 'Ocorreu um erro ao apagar o usuário {name}: {errorText}',
      noSkillsYet: 'Nenhuma habilidade adquirida ainda',
      userCard: {
        nome: 'nome',
        memberSince: 'Membro desde',
        email: 'E-mail',
        role: 'Função',
        group: 'Grupos',
        timeSpentLearning: 'Tempo total que foi usado para aprendizagem no {workspaceName}:',
        nameAndEmail: 'Nome e E-mail',
        status: 'Estado'
      },
      roles: {
        ROLE_STUDENT: 'Aluno',
        ROLE_ADMIN: 'Administrador do Workspace',
        ROLE_COURSE_ADMIN: 'Administrador do curso',
        ROLE_COURSE_EDITOR: 'Editor do curso',
        ROLE_VOUCHER_ADMIN: 'Administrador do voucher',
        ROLE_FILE_UPLOAD: 'Upload de arquivo',
        ROLE_INTEGRATIONS_MANAGER: 'Administrador de integrações'
      },
      statuses: {
        filterLabel: 'User status',
        inactiveUserCourses: 'Inativo',
        blocked: 'Bloqueado',
        running: 'Em andamento',
        finished: 'Concluído',
        archived: 'Arquivado',
        abandoned: 'Abandonado',
        inactiveUserExplanation: 'Este utilizador não está a progredir num dos seus cursos.'
      },
      notifyInactivityButton: 'Notificar inatividade',
      resultsFound: 'No há resultados | {n} resultado | {n} resultados',
      notifications: {
        modal: {
          sendingAlert: 'Está prestes a enviar a seguinte notificação para utilizador.',
          sendingButton: 'Enviar',
          inactiveUserCourses: {
            title: 'Notificar inatividade',
            description: '',
            defaultMessage: 'Parece que não está a progredir num dos seus cursos. Verifique os seus cursos ativos.'
          },
          notificationSentSuccessfully: 'Notificação enviada com sucesso!',
          notificationSentWithError: 'Aconteceu um erro ao enviar a notificação para utilizador: {errorText}'
        }
      },
      inviteGroupUsersSuccessful: 'Todos os utilizadores do grupo {name} foram convidados com sucesso',
      inviteUserError: 'Ocorreu um erro ao convidar o utilizador {name}: {err}',
      inviteGroupUsersError: 'Ocorreu um erro ao convidar os utilizadores do grupo {name}: {err}',
      inviteUserSuccessful: 'Utilizador {name} foi convidado com sucesso',
      addUsersSuccessful: 'Os utilizadores foram adicionados com sucesso',
      addUsersError: 'Ocorreu um erro ao adicionar os utilizadores: {err}',
      groups: {
        title: 'Título do Grupo',
        participants: 'Participantes',
        source: 'Fonte',
        created: 'Criado'
      }
    },
    campaignManagement: {
      searchCampaign: 'Pesquisar campanhas',
      totalCampaigns: 'Total de campanhas encontradas: {total}',
      editVoucherCodeLabel: 'Editar Código do Voucher',
      editButton: 'Editar',
      editVoucherCodeSuccess: 'Código do voucher alterado com sucesso para {code}.',
      editVoucherCodeError: 'Ocorreu um erro ao alterar o código do voucher para {code}: {err}',
      requiredInvalidMessage: 'Este é um campo obrigatório',
      periodInvalidMessage: 'Deve ser um número inteiro positivo',
      discountInvalidMessage: 'O desconto deve estar entre 1 e 100.'
    },
    usersManagement: {
      title: 'Administração de utilizadores',
      searchUserLabel: 'Procurar utilizadores por e-mail',
      searchUserPlaceholder: 'john.doe@gmail.com',
      emailTitle: 'E-mail',
      nameTitle: 'Nome',
      source: 'Source',
      adminTitle: 'Workspace Admin',
      invitedTitle: 'Convidado',
      acceptedTitle: 'Convite Aceite',
      sendInvitationToEveryone: 'Convidar todos os utilizadores',
      sendInvitationToGroup: 'Convidar {groupName}',
      invited: 'convidado',
      accepted: 'convite aceite',
      sendInvitation: 'Enviar convite',
      resendInvitation: 'Reenviar convite',
      revokeAccess: 'Revogar acesso'
    },
    integrationsManagement: {
      newPopupTitle: 'Nova ligação {name}',
      editPopupTitle: 'Editar ligação {name}',
      title: 'Integrações',
      clientIdLabel: 'ID do cliente',
      clientSecretLabel: 'Chave secreta do cliente',
      documentCategoryLabel: 'ID da categoria de documentos',
      clientEndpointLabel: 'Endpoint do cliente',
      subdomainLabel: 'Subdomínio (do seu espaço de trabalho BambooHR)',
      tokenEndpointLabel: 'Endpoint do token',
      responseTypeLabel: 'Tipo de resposta',
      scopeLabel: 'Âmbito',
      userEndpointLabel: 'Endpoint da API de utilizador',
      emailPropertyLabel: 'Propriedade de email',
      firstNamePropertyLabel: 'Primeiro nome',
      lastNamePropertyLabel: 'Último nome',
      oauth2IdPropertyLabel: 'Propriedade do ID OAuth2',
      authorizationEndpointLabel: 'Endpoint de autorização',
      syncLabel: 'Gerir convites',
      syncUsersLabel: 'Sincronizar',
      apiKeyLabel: 'Chave de acesso API',
      appNameLabel: 'Nome da aplicação',
      appKeyLabel: 'Chave da aplicação',
      disqusIdLabel: 'ID do Disqus',
      stripePublishableKeyLabel: 'Chave publicável do Stripe',
      stripeSecretKeyLabel: 'Chave secreta do Stripe',
      stripeDefaultTaxId: 'ID da taxa padrão do Stripe',
      stripeTaxationCountry: 'País de tributação do Stripe',
      useInvoicing: 'Usar faturação',
      paymentMethodConfigurationId: 'ID da configuração do método de pagamento',
      openAiSecretKeyLabel: 'Chave secreta do Open AI',
      peopleForceApiKeyLabel: 'Chave API do PeopleForce',
      ripplingApiKeyLabel: 'Chave API do Rippling',
      liqpayPrivateKeyLabel: 'Chave privada do LiqPay',
      liqpayPublicKeyLabel: 'Chave pública do LiqPay',
      liqpaySandboxLabel: 'É sandbox?',
      xTokenKeyLabel: 'xToken',
      xCmsLabel: 'xCms',
      categories: {
        HR: 'Recursos Humanos',
        PAYMENT: 'Serviços de Pagamento',
        CONTENT: 'Criação de Conteúdo',
        SOCIAL: 'Social',
        DEFAULT: 'Padrão',
        DEV: 'Desenvolvimento – Autenticação, Webhooks, Emails',
        CRM: 'CRM'
      },
      personio: {
        description: 'Sincronize utilizadores e grupos. Carregue certificados automaticamente nos perfis dos colaboradores.',
        explanation: '<ul>' +
          '<li>Vá a Configurações > Pessoas > Documentos > Categorias e crie uma nova categoria ou utilize uma existente que sirva para carregar certificados de cursos. Extraia o ID (colocando o cursor sobre a categoria, por exemplo).</li>' +
          '<li>Vá a Configurações > Credenciais API. Crie uma nova chave API (ou reutilize uma existente). Dê-lhe um nome e selecione a integração "Workademy".</li>' +
          '<li>Conceda acesso de leitura a "empregados" e "documentos" e acesso de escrita a "documentos". Selecione os seguintes atributos: email, primeiro nome, último nome, ID do empregado e estado.</li>' +
          '<li>Configure a sua integração com as informações recolhidas, guarde e sincronize.</li></ul>',
        syncSuccessful: 'Sincronização de utilizadores com o Personio bem-sucedida. Vá à consola de gestão de utilizadores para rever os convites.',
        syncError: 'Sincronização de utilizadores com o Personio falhou. {err}',
        connectSuccessful: 'Integração com a API do Personio configurada com sucesso.',
        connectError: 'Erro ao conectar-se ao Personio. {err}',
        deleteSuccessful: 'Integração com a API do Personio eliminada com sucesso.',
        deleteError: 'Erro ao eliminar a integração com o Personio. {err}',
        mappingInstructions: 'Mapeia os valores dos campos personalizados do Personio para os grupos do Workademy.',
        fieldValuesLabel: 'Valores do campo (pressione espaço ou tab para adicionar)',
        fieldNamePlaceholder: 'Digite o nome do campo',
        valueInputPlaceholder: 'Digite um valor e pressione espaço/tab',
        addFieldButton: 'Adicionar campo personalizado',
        certificateNameTemplateLabel: 'Modelo de nome do certificado',
        certificateNameTemplateHint: 'Variáveis disponíveis: &#36;{userName}, &#36;{date}, &#36;{courseName}'
      },
      bamboo_hr: {
        description: 'Mantenha os dados da sua equipa alinhados com a sincronização de utilizadores e grupos.',
        explanation: 'Entre na sua conta de administrador do BambooHR. O subdomínio é uma parte do URL que representa a sua empresa, por exemplo, se for company.bamboohr.com, o subdomínio é "company". Clique na sua foto de perfil, depois selecione Chaves API. Adicione uma nova chave e copie o valor da chave API aqui.',
        syncSuccessful: 'Sincronização de utilizadores com o BambooHR bem-sucedida. Vá à consola de gestão de utilizadores para rever os convites.',
        syncError: 'Sincronização de utilizadores com o BambooHR falhou. {err}',
        connectSuccessful: 'Integração com a API do BambooHR configurada com sucesso.',
        connectError: 'Erro ao conectar-se ao BambooHR. {err}',
        deleteSuccessful: 'Integração com a API do BambooHR eliminada com sucesso.',
        deleteError: 'Erro ao eliminar a integração com o BambooHR. {err}'
      },
      sage: {
        description: 'Sincronize utilizadores e linhas de reporte no Workademy.',
        explanation: 'Entre na sua conta de administrador do Sage. O subdomínio é uma parte do URL que representa a sua empresa, por exemplo, se for company.sage.com, o subdomínio é "company". Clique na sua foto de perfil, depois selecione Chaves API. Adicione uma nova chave e copie o valor da chave API aqui.',
        syncSuccessful: 'Sincronização de utilizadores com o Sage bem-sucedida. Vá à consola de gestão de utilizadores para rever os convites.',
        syncError: 'Sincronização de utilizadores com o Sage falhou. {err}',
        connectSuccessful: 'Integração com a API do Sage configurada com sucesso.',
        connectError: 'Erro ao conectar-se ao Sage. {err}',
        deleteSuccessful: 'Integração com a API do Sage eliminada com sucesso.',
        deleteError: 'Erro ao eliminar a integração com o Sage. {err}'
      },
      custom_oauth2: {
        description: '',
        explanation: '',
        syncSuccessful: 'Sincronização de utilizadores com OAuth2 bem-sucedida. Vá à consola de gestão de utilizadores para rever os convites.',
        syncError: 'Sincronização de utilizadores com OAuth2 falhou. {err}',
        connectSuccessful: 'Integração com a API OAuth2 configurada com sucesso.',
        connectError: 'Erro ao conectar-se ao OAuth2. {err}',
        deleteSuccessful: 'Integração com o servidor OAuth2 eliminada com sucesso.',
        deleteError: 'Erro ao eliminar a integração com o servidor OAuth2. {err}'
      },
      oauth2: {
        description: '',
        explanation: 'Configure aqui o seu acesso OAuth2. Todos os atributos são obrigatórios. ' +
          '<p><strong>NOTA:</strong> no seu servidor OAuth2 configure o <em>redirect_uri</em> como ' +
          '<em>https://{hostname}/signin/</em>.</p>',
        syncSuccessful: 'Sincronização de utilizadores com OAuth2 bem-sucedida. Vá à consola de gestão de utilizadores para rever os convites.',
        syncError: 'Sincronização de utilizadores com OAuth2 falhou. {err}',
        connectSuccessful: 'Integração com a API OAuth2 configurada com sucesso.',
        connectError: 'Erro ao conectar-se ao OAuth2. {err}',
        deleteSuccessful: 'Integração com a API OAuth2 eliminada com sucesso.',
        deleteError: 'Erro ao eliminar a integração com o servidor OAuth2. {err}',
        authenticationScheme: 'Esquema de autenticação',
        postAuthCheckTitle: 'Verificação pós-autenticação',
        enablePostCheck: 'Ativar verificação pós-autenticação',
        availableVarsTitle: 'Variáveis disponíveis',
        addVarsLabel: 'Adicionar variáveis da resposta OAuth2',
        varsPlaceholder: 'ex. statusAssinatura, tipoConta',
        varsHint: 'Estas variáveis estarão disponíveis no construtor de condições',
        conditionTitle: 'Condição',
        varLabel: 'Variável',
        operatorLabel: 'Operador',
        valueLabel: 'Valor',
        conditionPreview: 'Pré-visualização da condição:',
        actionTitle: 'Ação',
        actionType: 'Tipo de ação',
        redirectUrl: 'URL de redirecionamento'
      },
      push_notification: {
        description: '',
        explanation: 'Configure aqui o endpoint das notificações push. ' +
          'Certifique-se de que o endpoint aceita Autorização "Basic", o Content-Type "application/json" e o método "POST".',
        connectSuccessful: 'Integração com o endpoint de notificações push configurada com sucesso.',
        syncError: 'Sincronização com o endpoint de notificações push falhou. {err}',
        connectError: 'Erro ao conectar-se ao endpoint de notificações push. {err}',
        deleteSuccessful: 'Integração com o endpoint de notificações push eliminada com sucesso.',
        deleteError: 'Erro ao eliminar a integração com o endpoint de notificações push. {err}'
      },
      loom: {
        description: 'Incorpore vídeos do Loom diretamente nos seus cursos.',
        explanation: 'Abra a sua conta Loom e copie o nome da aplicação e a chave da aplicação.',
        syncSuccessful: 'Sincronização com o Loom bem-sucedida.',
        syncError: 'Sincronização com o Loom falhou. {err}',
        connectSuccessful: 'Integração com o SDK do Loom configurada com sucesso!',
        connectError: 'Erro ao conectar-se ao SDK do Loom. {err}',
        deleteSuccessful: 'Integração com o SDK do Loom eliminada com sucesso.',
        deleteError: 'Erro ao eliminar a integração com o SDK do Loom. {err}'
      },
      disqus: {
        description: 'Adicione discussões e interação social aos seus cursos.',
        explanation: 'Abra a sua conta Disqus e copie o nome da aplicação.',
        syncSuccessful: 'Sincronização com o Disqus bem-sucedida.',
        syncError: 'Sincronização com o Disqus falhou. {err}',
        connectSuccessful: 'Integração com o Disqus configurada com sucesso!',
        connectError: 'Erro ao conectar-se ao Disqus. {err}',
        deleteSuccessful: 'Integração com o Disqus eliminada com sucesso.',
        deleteError: 'Erro ao eliminar a integração com o Disqus. {err}'
      },
      stripe: {
        description: 'Ative pagamentos e faturação automática.',
        explanation: '<ol>\n' +
          '    <li>\n' +
          '      <strong>Chave publicável:</strong><br />\n' +
          '      Abra o seu <a href="https://dashboard.stripe.com" target="_blank" class="tw-underline">Painel Stripe</a> e copie a <strong>Chave Publicável</strong> nas definições de API.\n' +
          '    </li>\n' +
          '    <li>\n' +
          '      <strong>ID da taxa de imposto padrão:</strong><br />\n' +
          '      Aceda à <a href="https://dashboard.stripe.com/tax-rates" target="_blank" class="tw-underline">secção de taxas de imposto</a> no painel Stripe.<br />\n' +
          '      - Copie um <strong>ID de Taxa de Imposto Inclusiva</strong> existente, ou<br />\n' +
          '      - Crie uma nova Taxa de Imposto Inclusiva, se necessário.\n' +
          '    </li>\n' +
          '    <li>\n' +
          '      <strong>País de tributação:</strong><br />\n' +
          '      Escolha o país onde a sua entidade está registada para fins fiscais.<br />\n' +
          '      - Apenas os utilizadores deste país serão sujeitos a impostos.\n' +
          '    </li>\n' +
          '  </ol>',
        syncSuccessful: 'Sincronização com o Stripe bem-sucedida.',
        syncError: 'Sincronização com o Stripe falhou. {err}',
        connectSuccessful: 'Integração com o Stripe configurada com sucesso.',
        connectError: 'Erro ao conectar-se ao Stripe. {err}',
        deleteSuccessful: 'Integração com o Stripe eliminada com sucesso.',
        deleteError: 'Erro ao eliminar a integração com o Stripe. {err}'
      },
      liqpay: {
        description: 'Aceite pagamentos ucranianos facilmente.',
        explanation: 'Abra o seu painel LiqPay e copie as chaves privada e pública. Indique se é um ambiente de sandbox.',
        syncSuccessful: 'Sincronização com o LiqPay bem-sucedida.',
        syncError: 'Sincronização com o LiqPay falhou. {err}',
        connectSuccessful: 'Integração com o LiqPay configurada com sucesso.',
        connectError: 'Erro ao conectar-se ao LiqPay. {err}',
        deleteSuccessful: 'Integração com o LiqPay eliminada com sucesso.',
        deleteError: 'Erro ao eliminar a integração com o LiqPay. {err}'
      },
      revolut: {
        description: 'Ative pagamentos internacionais com a integração do Revolut.',
        explanation: 'Abra o seu painel Revolut e copie as chaves secretas do cliente.',
        syncSuccessful: 'Sincronização com o Revolut bem-sucedida.',
        syncError: 'Sincronização com o Revolut falhou. {err}',
        connectSuccessful: 'Integração com o Revolut configurada com sucesso.',
        connectError: 'Erro ao conectar-se ao Revolut. {err}',
        deleteSuccessful: 'Integração com o Revolut eliminada com sucesso.',
        deleteError: 'Erro ao eliminar a integração com o Revolut. {err}'
      },
      open_ai: {
        description: 'Gere conteúdo de cursos utilizando a sua conta OpenAI.',
        explanation: 'Abra o painel do Open AI e copie a sua chave.',
        syncSuccessful: 'Sincronização com o Open AI bem-sucedida.',
        syncError: 'Sincronização com o Open AI falhou. {err}',
        connectSuccessful: 'Integração com o Open AI configurada com sucesso.',
        connectError: 'Erro ao conectar-se ao Open AI. {err}',
        deleteSuccessful: 'Integração com o Open AI eliminada com sucesso.',
        deleteError: 'Erro ao eliminar a integração com o Open AI. {err}'
      },
      people_force: {
        description: 'Sincronize diretamente os registos e a estrutura dos colaboradores.',
        explanation: 'Abra o painel PeopleForce e copie a sua chave API.',
        syncSuccessful: 'Sincronização com o PeopleForce bem-sucedida.',
        syncError: 'Sincronização com o PeopleForce falhou. {err}',
        connectSuccessful: 'Integração com o PeopleForce configurada com sucesso.',
        connectError: 'Erro ao conectar-se ao PeopleForce. {err}',
        deleteSuccessful: 'Integração com o PeopleForce eliminada com sucesso.',
        deleteError: 'Erro ao eliminar a integração com o PeopleForce. {err}'
      },
      rippling: {
        description: 'Automatize a gestão de utilizadores e grupos com facilidade.',
        explanation: 'Se escolher o modo de autenticação por chave API, terá ' +
          'de abrir o painel Rippling e copiar a sua chave API. ' +
          'Não precisa de fazer nada se escolher o modo de autenticação por credenciais de utilizador.',
        syncSuccessful: 'Sincronização com o Rippling bem-sucedida.',
        syncError: 'Sincronização com o Rippling falhou. {err}',
        connectSuccessful: 'Integração com o Rippling configurada com sucesso.',
        connectError: 'Erro ao conectar-se ao Rippling. {err}',
        deleteSuccessful: 'Integração com o Rippling eliminada com sucesso.',
        deleteError: 'Erro ao eliminar a integração com o Rippling. {err}'
      },
      deel: {
        description: 'Sincronize equipas distribuídas de forma simples e eficaz.',
        explanation: 'Abra o painel Deel e copie a chave de acesso API.',
        syncSuccessful: 'Sincronização com o Deel bem-sucedida.',
        syncError: 'Sincronização com o Deel falhou. {err}',
        connectSuccessful: 'Integração com o Deel configurada com sucesso.',
        connectError: 'Erro ao conectar-se ao Deel. {err}',
        deleteSuccessful: 'Integração com o Deel eliminada com sucesso.',
        deleteError: 'Erro ao eliminar a integração com o Deel. {err}'
      },
      monobank: {
        description: 'Conecte o Monobank para um fluxo de pagamentos local.',
        explanation: 'Abra o painel Monobank e copie o seu xToken e xCms, se aplicável.',
        syncSuccessful: 'Sincronização com o Monobank bem-sucedida.',
        syncError: 'Sincronização com o Monobank falhou. {err}',
        connectSuccessful: 'Integração com o Monobank configurada com sucesso.',
        connectError: 'Erro ao conectar-se ao Monobank. {err}',
        deleteSuccessful: 'Integração com o Monobank eliminada com sucesso.',
        deleteError: 'Erro ao eliminar a integração com o Monobank. {err}'
      },
      hi_bob: {
        description: 'Mantenha pessoas e permissões sincronizadas de forma eficiente.',
        explanation: 'Inicie sessão no painel HiBob e copie os valores de clientId e clientSecret.',
        syncSuccessful: 'Sincronização com o HiBob bem-sucedida.',
        syncError: 'Sincronização com o HiBob falhou. {err}',
        connectSuccessful: 'Integração com o HiBob configurada com sucesso.',
        connectError: 'Erro ao conectar-se ao HiBob. {err}',
        deleteSuccessful: 'Integração com o HiBob eliminada com sucesso.',
        deleteError: 'Erro ao eliminar a integração com o HiBob. {err}'
      },
      alexis_hr: {
        description: 'Alinhe utilizadores e funções a partir do seu núcleo de RH.',
        explanation: 'Inicie sessão no painel AlexisHR e copie a chave clientSecret.',
        syncSuccessful: 'Sincronização de utilizadores com o AlexisHR bem-sucedida. Vá à consola de gestão de utilizadores para rever os convites.',
        syncError: 'Sincronização de utilizadores com o AlexisHR falhou. {err}',
        connectSuccessful: 'Integração com a API do AlexisHR configurada com sucesso.',
        connectError: 'Erro ao conectar-se ao AlexisHR. {err}',
        deleteSuccessful: 'Integração com a API do AlexisHR eliminada com sucesso.',
        deleteError: 'Erro ao eliminar a integração com o AlexisHR. {err}'
      },
      brevo: {
        description: 'Envolva os alunos com campanhas automatizadas de CRM.',
        eventTemplateMappingLabel: 'Mapeamento de Modelos',
        eventTemplateMappingDescription: 'Mapeie eventos do Workademy para os seus modelos do Brevo inserindo os IDs correspondentes.',
        explanation: 'Inicie sessão no seu <strong><u><a href="https://app.brevo.com/settings/keys/api" target="_blank">painel Brevo</a></u></strong> e copie a sua chave API.',
        syncSuccessful: 'Sincronização com o Brevo bem-sucedida.',
        syncError: 'Sincronização com o Brevo falhou. {err}',
        connectSuccessful: 'Integração com a conta Brevo configurada com sucesso.',
        connectError: 'Erro ao conectar-se ao Brevo. {err}',
        deleteSuccessful: 'Integração com o Brevo eliminada com sucesso.',
        deleteError: 'Erro ao eliminar a integração com o Brevo. {err}',
        templateMappingExplanation: 'Os IDs dos modelos podem ser encontrados na sua <strong><u><a href="https://app.brevo.com/templates/listing" target="_blank">conta Brevo</a></u></strong> na secção de Modelos de Email.',
        defaultEmailsWhenNoMapping: 'Aplicar emails padrão quando não houver mapeamento (recomendado).',
        templateMappingHeaders: {
          lmsTemplate: 'Eventos do Workademy',
          audience: 'Público',
          description: 'Descrição',
          brevoTemplateID: 'ID do Modelo Brevo'
        },
        templateMappingAudience: {
          learner: 'aprendiz',
          admin: 'administrador',
          any: 'qualquer'
        },
        templateMapping: {
          check_user_courses_notification_event: {
            title: 'Verificar progresso do curso',
            description: 'Enviado ao aprendiz ao notificá-lo de inatividade.'
          },
          new_open_ended_question_answered_event: {
            title: 'Nova resposta aberta',
            description: 'Notificação ao administrador quando o aprendiz envia uma resposta aberta.'
          },
          new_open_ended_question_graded_event: {
            title: 'Nova questão aberta avaliada',
            description: 'Alerta o aprendiz quando a sua questão aberta é avaliada.'
          },
          pending_user_course_approval_event: {
            title: 'Inscrição pendente',
            description: 'Notifica o administrador sobre inscrições pendentes no curso.'
          },
          registration_event: {
            title: 'Novo utilizador registado',
            description: 'Enviado quando um novo utilizador se regista na plataforma.'
          },
          reset_password_event: {
            title: 'Pedido de redefinição de senha',
            description: 'Enviado quando um utilizador solicita redefinição de senha.'
          },
          user_course_assigned_event: {
            title: 'Novo curso atribuído',
            description: 'Notifica o aprendiz sobre um novo curso atribuído.'
          },
          user_learning_path_assigned_event: {
            title: 'Novo caminho de aprendizagem atribuído',
            description: 'Notifica o aprendiz sobre um novo caminho de aprendizagem atribuído.'
          },
          workspace_invitation_event: {
            title: 'Convite para participar do espaço de trabalho',
            description: 'Enviado quando o utilizador é convidado a participar de um espaço de trabalho.'
          }
        }
      },
      intercom: {
        description: 'Chat, integração e segmentação com base nas interações dos usuários.',
        explanation: '<div tw-leading-[1.5]><div class="tw-mb-3">Para integrar com o Intercom, siga estes passos essenciais:</div>' +
          '<div class="tw-mb-1.5"><strong>1.</strong> Crie um App no Intercom <br>Acesse Configurações > Integrações > Intercom Developer Hub e crie um app para ativar o acesso à API. Após criar o app, você obterá um Token de Acesso.</div>' +
          '<div class="tw-mb-1.5"><strong>2.</strong> Instale o Intercom Messenger no seu site <br>Acesse Configurações > Canais > Messenger > Instalar e copie o appId dos exemplos de código.</div>' +
          '<div class="tw-mb-1.5"><strong>3.</strong> Obtenha o Web Identity Secret <br>Isso pode ser encontrado na seção de Instalação, em Verificação de Identidade.</div></div>',
        syncSuccessful: 'Sincronização com o Intercom bem-sucedida.',
        syncError: 'Sincronização com o Intercom não foi bem-sucedida. {err}',
        connectSuccessful: 'Integração com o Intercom realizada com sucesso!',
        connectError: 'Erro ao conectar com o Intercom. {err}',
        deleteSuccessful: 'Integração com o Intercom removida com sucesso.',
        deleteError: 'Erro ao excluir a integração com o Intercom. {err}'
      },
      salesforce_mc: {
        description: 'Salesforce Marketing Cloud',
        explanation: 'Envia emails transacionais automatizados e personalizados a partir da Workademy, utilizando a tua conta Salesforce Marketing Cloud.',
        syncSuccessful: 'Sincronização com Salesforce Marketing Cloud bem-sucedida.',
        syncError: 'Sincronização com Salesforce Marketing Cloud não bem-sucedida. {err}',
        connectSuccessful: 'Integração com Salesforce Marketing Cloud bem-sucedida!',
        connectError: 'Erro ao conectar com Salesforce Marketing Cloud. {err}',
        deleteSuccessful: 'Integração com Salesforce Marketing Cloud excluída com sucesso.',
        deleteError: 'Erro ao excluir a integração com Salesforce Marketing Cloud. {err}',
        subdomainLabel: 'Subdomínio',
        templateMapping: {
          welcome_to_course_event: {
            title: 'Bem-vindo ao evento do curso',
            description: 'Bem-vindo ao evento do curso'
          }
        },
        templateMappingHeaders: {
          salesforceTemplateID: 'ID do modelo'
        }
      }
    },
    learningArtifactsManagement: {
      learningArtifactsManagement: 'Gestão de Artefactos',
      skillsTitle: 'Skills',
      achievementsTitle: 'Achievements',
      avatarsTitle: 'Avatars',
      skillLevel: 'Sem Nível | Nível 1 | Nível {n}',
      skillLevelNameLabel: 'Nome da Skill',
      skillLevelDescriptionLabel: 'Descrição da Skill',
      editCard: {
        numberOfLevelsSubtitle: 'Sem níveis | Sem níveis | {n} níveis'
      },
      noSkills: 'Os skills vão aparecer aqui em breve',
      noAchievements: 'Os achievements vão aparecer aqui em breve'
    },
    workspaceManagement: {
      title: 'Administração de Espaço de Trabalho',
      tabs: {
        general: {
          title: 'Geral',
          workspaceName: {
            title: 'Nome do Espaço de Trabalho',
            subtitle: 'Defina ou edite o nome do espaço de trabalho.',
            label: 'Escreva o nome do espaço de trabalho',
            rules: {
              required: 'O nome é obrigatório',
              lessThan: 'O nome deve ter menos de 64 caracteres',
              invalidCharacters: 'Caracteres especiais não são permitidos'
            }
          },
          language: {
            title: 'Idioma Padrão',
            subtitle: 'Configure o idioma padrão para o espaço de trabalho.',
            label: 'Escolha o idioma padrão'
          },
          privacySettings: {
            title: 'Configurações de Privacidade do Espaço de Trabalho',
            subtitle: 'Controle se o espaço de trabalho é público e pode ser indexado por motores de busca.',
            label: 'Espaço de trabalho público'
          },
          inviteOnly: {
            title: 'Opções de Adesão ao Espaço de Trabalho',
            subtitle: 'Defina se o espaço de trabalho está aberto a todos ou apenas por convite.',
            label: 'Apenas por convite'
          }
        },
        apiKeys: {
          title: 'Chaves API',
          noApiKeys: 'Ainda não tem chaves API',
          errorCreating: 'Erro ao criar chave API: {error}',
          errorDeleting: 'Erro ao eliminar chave API: {error}',
          copySuccessful: 'Chave API copiada com sucesso.',
          copyError: 'Não foi possível copiar a chave API: {error}',
          createApiKeyButton: 'Criar Chave API Agora',
          removeApiKeyButton: 'Remover Chave API'
        },
        userInteraction: {
          title: 'Interação do Utilizador'
        },
        seoMetadata: {
          title: 'SEO e Metadados',
          subtitle: 'Gerir as meta tags para motores de busca e partilha social (por exemplo, OpenGraph, cartões Twitter).',
          pageTitleLabel: 'Título da página',
          pageKeywordsLabel: 'Palavras-chave da página',
          pageDescriptionLabel: 'Descrição',
          twitter: {
            title: 'Twitter/X',
            titleLabel: 'Título do Twitter',
            descriptionLabel: 'Descrição'
          },
          opengraph: {
            title: 'OpenGraph',
            titleLabel: 'Título do OpenGraph',
            descriptionLabel: 'Descrição do OpenGraph'
          },
          rules: {
            maxChars: 'Máximo {characters} caracteres',
            alphaNumericSpacePunctuation: 'Apenas são permitidos caracteres alfanuméricos, espaços e pontuação',
            alphaNumericCommasSpaces: 'Apenas são permitidos caracteres alfanuméricos, vírgulas e espaços',
            alphaNumericCommasSpacesPipe: 'Apenas são permitidos caracteres alfanuméricos, espaços e símbolos |, -',
            alphaNumericCommasSpacesPipeDash: 'Apenas são permitidos caracteres alfanuméricos, espaços e símbolos |, -, :',
            invalidOpenGraphImage: 'A imagem carregada deve estar em um dos seguintes formatos: JPG, PNG ou GIF.'
          }
        },
        popups: {
          title: 'Pop-ups',
          preEnrollPopup: {
            title: 'Pop-up de Pré-Inscrição em Curso',
            addDefaultContentButton: 'Preencher com Conteúdo Padrão'
          }
        },
        lookandfeel: {
          title: 'Aparência',
          folderView: {
            title: 'Exibição de Assets',
            subtitle: 'Configure como os cursos são exibidos aos alunos',
            label: 'Visualização',
            folder: 'Pastas',
            flat: 'Plano'
          }
        }
      }
    },
    mainAdminPage: {
      checkStudentsProgressTitle: 'Verificar o progreso de alunos',
      checkStudentsProgressDescription: 'Verifique o progersso dos alunos para cada curso criado',
      checkAnalyticsDashboardTitle: 'Ver dashboard de analítica',
      checkAnalyticsDashboardDescription: 'Ver o dashboard genérico para cada curso deste portal',
      manageRolesTitle: 'Administrar utilizadores',
      manageRolesDescription: 'Adicione ou retire os poderes de criação de cursos aos utilizadores deste portal',
      manageCampaignsTitle: 'Administrar campanhas',
      manageCampaignsDescription: 'Adicionar, editar, apagar campanhas e administrar os seus respectivos códigos de vouchers',
      manageUsersTitle: 'Administrar utilizadores e grupos',
      manageUsersDescription: 'Atribuir skills, bloquear utilizadores, adicionar ou revogar permissões. Sincronizar os utilizadores das plataformas integradas.',
      manageWorkspaceTitle: 'Administrar Espaço de Trabalho',
      manageWorkspaceDescription: 'Administre a aparência e sensação do espaço de trabalho, pop-ups globais e atributos do espaço de trabalho.'
    },
    menu: {
      home: 'Página admin',
      userMgmt: 'Administração de utilizadores',
      progress: 'Progreso dos alunos',
      usersMgmt: 'Gestão de Utilizadores',
      groupsMgmt: 'Gestão de Grupos',
      dashboard: 'Analítica',
      campaignMgmt: 'Administração de campanhas',
      artifactsMgmt: 'Administração das Skills',
      workspaceMgmt: 'Administração de Workspace'
    },
    library: {
      supported: {
        IMAGE: 'imagens',
        PDF: 'pdf',
        MP3: 'mp3'
      },
      maxSizeAllFiles: 'PDFs não devem exceder {pdfSize}MB, vídeos – {videoSize}MB, outros – {fileSize}MB',
      maxSizeNormalFiles: 'Cada ficheiro não deve exceder {fileSize}MB',
      fileTypeWithArticle: {
        IMAGE: 'uma imagem',
        PDF: 'um ficheiro pdf',
        MP3: 'um ficheiro MP3'
      },
      title: 'Biblioteca de recursos',
      searchLibrary: 'Procurar',
      searchLibraryLabel: 'Procurar ficheiros pelo nome',
      uploadTitle: 'Upload',
      uploaderHelpText: 'Selecione {supported}',
      uploadImagesOrMp3: 'outros formatos',
      uploadPdfs: 'PDF',
      errorUploadingFile: 'Ocorreu um erro ao enviar o arquivo: {err}',
      successUploadingFile: 'Arquivo {fileName} enviado com sucesso',
      clickHereToOpenLibrary: 'Abrir biblioteca',
      dragFileFromLibrary: 'Arrastar {fileType} da biblioteca',
      dragPdfHere: 'Arrastar pdf',
      fileName: 'Nome do ficheiro',
      category: 'Categoria',
      updatingFile: 'Atualizando o ficheiro em todo o lado',
      categories: {
        ALL: 'Todos',
        AVATAR: 'Avatar',
        COVER_IMAGE: 'Cover',
        CONTENT: 'Conteudo',
        FRAME: 'Conquistas',
        OTHER: 'Outros'
      },
      errors: {
        type: 'O tipo de ficheiro errado. Só suportados {supported}',
        size: 'O tamanho de ficheiros não podem exceder {size}',
        pdfSize: 'Os ficheiros PDF não devem exceder {size}.',
        mp4Size: 'Os ficheiros MP4 não devem exceder {size}.'
      },
      buttons: {
        download: 'Abrir o original',
        delete: 'Apagar da biblioteca',
        replace: 'Substituir arquivo'
      },
      libraryItemTooltip: '<h6>{name}</h6><hr><div class="caption">Clique para copiar o URL.</div>',
      showCourseFiles: 'Os ficheiros exibidos foram carregados dentro do curso atual. Alterne o botão para ver todos os ficheiros no espaço de trabalho.',
      showWorkspaceFiles: 'Todos os ficheiros do espaço de trabalho estão exibidos. Desative o botão para ver apenas os ficheiros que foram carregados dentro do curso atual.',
      showWorkspaceFilesToggleButton: 'Mostrar Todos os Ficheiros do Espaço de Trabalho'
    },
    analytics: {
      title: 'Analytics',
      startDateLabel: 'Start date',
      endDateLabel: 'End date',
      aggregateByLabel: 'Aggregate by',
      customInterval: 'Custom Interval',
      aggregations: {
        DAY: 'by day',
        MONTH: 'by month',
        MINUTE: 'by minute',
        WEEK: 'by week',
        YEAR: 'by year',
        HOUR: 'by hour'
      },
      intervals: {
        YESTERDAY: 'yesterday',
        LAST24H: 'last 24 hours',
        LASTWEEK: 'last week',
        PREVIOUS7DAYS: 'previous 7 days',
        LASTMONTH: 'last month',
        LAST3MONTHS: 'últimos 3 meses',
        LAST6MONTHS: 'últimos 6 meses',
        PREVIOUS30DAYS: 'previous 30 days',
        PREVIOUS365DAYS: 'last 365 days',
        LASTYEAR: 'last year',
        CUSTOM: 'escolher'
      },
      dashboard: {
        itemsPerPageText: 'rows per page',
        allCourses: 'All courses',
        facts: {
          lectures: {
            title: 'Lectures'
          },
          enrolments: {
            title: 'Course enrolments'
          },
          questions: {
            title: 'Questions Answeres'
          },
          certificates: {
            title: 'Certificates'
          }
        },
        coursesLabel: 'Courses',
        modulesLabel: 'Modules',
        certificatesLabel: 'Certificates',
        lecturesLabel: 'Lectures',
        questionsLabel: 'Questions',
        enrolmentsCaption: 'Enrollments',
        seenCaption: 'Seen',
        answeredCaption: 'Answered',
        issuedLabel: 'Issued',
        chartLabels: {
          enrolments: {
            enrolled: 'Matrículas',
            started: 'Started',
            ended: 'Finished',
            abandoned: 'Abandoned',
            amountStarted: 'Matrículas',
            amountMsCourseStarted: 'Started',
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
      create: 'Criar',
      chooseOther: 'Outras possibilidades de criação de cursos'
    },
    dialogs: {
      courseOwnersTitle: 'Proprietários e Editores do Curso',
      courseOwnersTable: {
        username: 'Email do Utilizador',
        role: 'Função',
        creatorRole: 'Criador',
        editorRole: 'Editor'
      },
      enrollButton: {
        text: 'Inscrever',
        title: {
          course: 'Inscrever Utilizadores no Curso',
          learningPath: 'Inscrever Utilizadores na Trajetoria de Aprendizagem'
        }
      },
      enrollNowButton: {
        text: 'Inscreva-se agora!',
        title: 'Inscreva todos no grupo agora'
      },
      linkButton: {
        text: 'Vincular',
        title: 'Inscrever automaticamente os usuários assim que forem associados ao grupo'
      },
      unlinkButton: {
        text: 'Desvincular',
        title: 'Cancelar automaticamente a inscrição dos usuários assim que forem desvinculados do grupo'
      },
      unenrollButton: {
        text: 'Desinscrever',
        title: {
          course: 'Desinscrever Utilizadores do Curso',
          learningPath: 'Desinscrever Utilizadores da Trajetoria de Aprendizagem'
        }
      },
      checkProgress: {
        text: 'Verificar Progresso',
        title: {
          course: 'Verificar Progresso do Aluno no Curso',
          learningPath: 'Verificar Progresso do Aluno no Caminho de Aprendizagem'
        }
      },
      assignButton: {
        text: 'Associar',
        title: {
          course: 'Associar o Grupo ao Curso',
          learningPath: 'Associar o Grupo à Trajetoria de Aprendizagem'
        }
      },
      unassignButton: {
        text: 'Desassociar',
        title: {
          course: 'Desassociar o Grupo do Curso',
          learningPath: 'Desassociar o Grupo da Trajetoria de Aprendizagem'
        }
      },
      addAdminButton: {
        text: 'Adicionar como Editor',
        title: {
          courseAdmins: 'Adicionar o Utilizador como Editor do Curso'
        }
      },
      removeAdminButton: {
        text: 'Remover Função de Editor',
        title: {
          courseAdmins: 'Remover o Utilizador como Editor do Curso'
        }
      },
      explanationGroups: {
        course: 'Clique no botão <strong>Associar</strong> para associar um grupo ao curso. ' +
          'Depois disso, todos os novos utlizadores adicionados ao grupo serão automaticamente inscritos no curso.' +
          '<br>Clique no botão <strong>Inscrever</strong> para inscrever todos os utlizadores do grupo atual no curso.',
        learningPath: 'Clique no botão <strong>Associar</strong> para associar um grupo à trajetoria de aprendizagem. ' +
          'Depois disso, todos os novos utlizadores adicionados ao grupo serão automaticamente inscritos na trajetoria de aprendizagem. ' +
          '<br>Clique no botão <strong>Inscrever</strong> para inscrever todos os usuários do grupo atual na trajetoria de aprendizagem.'
      },
      explanationUsers: {
        course: 'Clique no botão <strong>Inscrever</strong> para inscrever um utilizador no curso. O utilizador receberá um e-mail.' +
          '<br>Clique no botão <strong>Desinscrever</strong> para desinscrever um utilizador do curso.',
        learningPath: 'Clique no botão <strong>Inscrever</strong> para inscrever um utilizador na trajetoria de aprendizagem. O utilizador receberá um e-mail.' +
          '<br>Clique no botão <strong>Desinscrever</strong> para desinscrever um utilizador da trajetoria de aprendizagem.',
        courseAdmins: 'Clique no botão <strong>Adicionar como Editor</strong> para tornar um utilizador o editor do curso.' +
          '<br>Clique no botão <strong>Remover Função de Editor</strong> para remover um utilizador da lista de editores do curso.'
      },
      enrollUsersTitle: 'Inscrever Usuários',
      enrollGroupsTitle: 'Inscrever Grupos',
      addCourseAdminsTitle: 'Adicionar Editores do Curso',
      status: {
        groupAssociated: {
          success: {
            course: 'O grupo {name} foi associado com sucesso ao curso.',
            learningPath: 'O grupo {name} foi associado com sucesso a trajetoria de aprendizagem.'
          },
          error: {
            course: 'Ocorreu um erro ao associar o grupo {name} ao curso: {err}.',
            learningPath: 'Ocorreu um erro ao associar o grupo {name} a trajetoria de aprendizagem: {err}.'
          }
        },
        groupUnassociated: {
          success: {
            course: 'O grupo {name} foi desassociado com sucesso do curso.',
            learningPath: 'O grupo {name} foi desassociado com sucesso da trajetoria de aprendizagem.'
          },
          error: {
            course: 'Ocorreu um erro ao desassociar o grupo {name} do curso: {err}.',
            learningPath: 'Houve um erro ao dissociar o grupo {name} da trajetoria de aprendizado: {err}.'
          }
        },
        groupEnrolled: {
          success: {
            course: 'Os utilizadores do grupo {name} foram inscritos com sucesso no curso.',
            learningPath: 'Os utilizadores do grupo {name} foram inscritos com sucesso na trajetoria de aprendizado.'
          },
          error: {
            course: 'Houve um erro ao inscrever os utilizadores do grupo {name} no curso: {err}.',
            learningPath: 'Houve um erro ao inscrever os utilizadores do grupo {name} na trajetoria de aprendizado: {err}.'
          }
        },
        enrolled: {
          success: {
            course: 'O utilizador {name} foi inscrito com sucesso no curso.',
            learningPath: 'O utilizador {name} foi inscrito com sucesso na trajetoria de aprendizado.'
          },
          error: {
            course: 'Houve um erro ao inscrever o utilizador {name} no curso: {err}.',
            learningPath: 'Houve um erro ao inscrever o utilizador {name} na trajetoria de aprendizado: {err}.'
          }
        }
      }
    },
    generic: {
      createdOn: 'Criado:',
      updatedOn: 'Última visualização:',
      startedOn: 'Iniciado em:',
      finishedOn: 'Terminado em:'
    },
    cloneOrShare: {
      title: 'Clonar ou Partilhar Curso',
      toCurrentWorkspace: 'Clonar {name} para o espaço de trabalho atual',
      toOtherWorkspace: 'Clonar {name} para outro espaço de trabalho',
      chooseWorkspace: 'Escolha o espaço de trabalho para clonar ou partilhar o curso',
      cloneCourseExplanation: '<strong>Clonar</strong> {courseName} para o espaço de trabalho {workspaceName}: o curso será clonado e gerido no espaço de trabalho {workspaceName}.',
      shareCourseExplanation: '<strong>Partilhar</strong> {courseName} com o espaço de trabalho {workspaceName}: o curso será partilhado com {workspaceName}. Quaisquer alterações introduzidas no espaço de trabalho atual serão propagadas para o espaço de trabalho {workspaceName}.',
      cloneButton: 'Clonar Curso',
      shareButton: 'Partilhar Curso',
      cloningCourseOverlay: 'O curso {name} está a ser clonado...',
      sharingCourseOverlay: 'O curso {name} está a ser partilhado...',
      courseCloneSuccess: 'O curso {name} foi clonado com sucesso.',
      courseCloneError: 'Ocorreu um erro a clonar o curso {name}: {err}.',
      courseShareSuccess: 'O curso {name} foi partilhado com sucesso.',
      courseShareError: 'Ocorreu um erro a partilhar o curso {name}: {err}.'
    },
    translateCourse: {
      title: 'Traduzir Curso',
      languageLabel: 'Escolher idioma',
      contextLabel: 'Fornecer algum contexto ou instruções',
      translateButtonLabel: 'Traduzir',
      overlayText: 'O curso {name} está a ser traduzido. Isto levará algum tempo. ' +
        'Pode fechar esta janela e será notificado quando a tradução estiver concluída.',
      warning: 'Por favor, note que esta é uma funcionalidade <strong>BETA</strong>. Algumas lições, especialmente em <strong>cursos grandes</strong>, podem não ser traduzidas com precisão. Portanto, uma verificação humana será sempre necessária.'
    },
    learningPaths: {
      stepper: {
        certifiable: 'Certificável',
        timing: 'Cronograma do Percurso de Aprendizagem',
        info: {
          certifiable: 'Ativar certificado no final do percurso de aprendizagem.',
          timing: {
            title: 'Gerir o Cronograma do Seu Percurso de Aprendizagem',
            description: 'Configure as definições de tempo para o seu percurso de aprendizagem. Especifique o número de dias para enviar lembretes de inatividade e a duração máxima permitida para conclusão antes do cancelamento automático.',
            reminderAfterInactivity: {
              title: 'Enviar Lembrete Após Inatividade',
              description: 'Envie automaticamente um lembrete aos aprendizes caso não concluam o percurso de aprendizagem dentro de [N dias] a partir da data de início. Mantenha os aprendizes motivados com lembretes oportunos.',
              label: 'Dias Até ao Lembrete',
              tooltip: 'Introduza o número de dias após a data de início para enviar um lembrete sobre percursos de aprendizagem incompletos.'
            },
            automaticCancellationTime: {
              title: 'Definir Prazo de Conclusão',
              description: 'Defina o tempo máximo (em dias) permitido para concluir o percurso de aprendizagem. Se o aprendiz não concluir dentro de [N dias] a partir da data de início, o percurso será automaticamente cancelado.',
              label: 'Dias Até ao Cancelamento',
              tooltip: 'Introduza o número máximo de dias permitidos para concluir o percurso de aprendizagem. Após este período, será automaticamente cancelado.'
            },
            automaticRetake: {
              title: 'Repetição Automática',
              description: 'Reiniciar automaticamente o percurso de aprendizagem (se ainda não tiver sido iniciado) após um determinado período desde o último início.',
              labelValue: 'Valor de tempo',
              labelUnit: 'Unidade de tempo'
            }
          }
        }
      }
    }
  },
  header: {
    menu: {
      create: {
        course: 'Curso',
        learningPath: 'Learning Path',
        skill: 'Skill',
        group: 'Grupo',
        users: 'Utilizadores'
      },
      profileSubtitle: {
        courseEditor: 'Editor do Curso',
        courseEditorViewNonAdmin: 'Editor do Curso<br><span class="caption">(visualização como estudante)</span>'
      }
    }
  },
  preCourseSurvey: {
    title: 'Inquérito Pré-Curso',
    subtitleNotStarted: 'Por favor, preencha este inquérito. Após preenchê-lo, poderá iniciar o curso!',
    subtitleFinished: 'Pode alterar as suas respostas ao inquérito pré-curso.',
    subtitleEditing: 'Edite o inquérito pré-curso.',
    editSurveyButton: 'Editar',
    finishEditSurveyButton: 'Concluir Edição',
    buttonTitle: 'Inquérito Pré-Curso',
    addNewSurveyQuestion: 'Adicionar Nova Pergunta ao Inquérito',
    editCourseSurvey: 'Nesta secção, pode adicionar ou editar um inquérito obrigatório do curso. ' +
      'Este inquérito aparecerá como um pop-up para os alunos antes de poderem iniciar o curso.',
    fillCourseSurvey: 'Deve concluir o inquérito antes de prosseguir para o curso.',
    fillEditCourseSurvey: 'Pode editar as suas respostas ao inquérito do curso.',
    filters: {
      button: 'Filtrar por Perguntas',
      title: 'Filtrar por Perguntas e Respostas do Curso',
      selectQuestionLabel: 'Selecionar Pergunta',
      selectAnswerLabel: 'Selecionar Resposta',
      addFilterButton: 'Adicionar Filtro',
      clearFilterButton: 'Limpar',
      applyFilterButton: 'Aplicar'
    }
  },
  postCourseSurvey: {
    title: 'Inquerito Pós-Curso',
    subtitleNotStarted: 'Por favor, preencha este inquerito. Após preenchê-lo, poderá concluir o curso!',
    subtitleFinished: 'Pode alterar suas respostas do inquerito pós-curso.',
    subtitleEditing: 'Editar o inquerito pós-curso.',
    editSurveyButton: 'Editar',
    finishEditSurveyButton: 'Concluir Edição',
    buttonTitle: 'Inquerito Pós-Curso',
    addNewSurveyQuestion: 'Adicionar Nova Pergunta ao Inquerito',
    editCourseSurvey: 'Nesta seção, pode adicionar ou editar inquerito pós-curso obrigatório. ' +
      'Esse inquerito aparecerá como um pop-up para os alunos antes de eles poderem obter seu certificado ou concluir o curso.',
    fillCourseSurvey: 'Deve concluir o inquerito antes de poder finalizar o curso.',
    fillEditCourseSurvey: 'Pode editar suas respostas ao inquerito do curso.'
  },
  getReadyAi: {
    title: 'Crie o seu Curso com a IA',
    description: 'Digite o seu email e o tema do curso e nós enviaremos o link para o seu curso gerado por IA.',
    usernameLabel: 'O seu Email',
    courseTopicLabel: 'Tema do Curso',
    generateButton: 'Criar o meu Curso',
    afterGenerateButton: 'Clique no botão acima e receberá um email em breve.',
    topicRequired: 'O tema é obrigatório',
    setPasswordTitle: 'Defina a sua Senha',
    setPasswordDesc: 'Após definir a sua senha, será redirecionado para o seu curso.',
    setPasswordButton: 'Definir Senha e Entrar',
    tokenLabel: 'Token',
    passwordLabel: 'Senha',
    courseCreationRequestSuccess: 'O seu curso está agora a ser criado. ' +
      'Pode sair desta página agora. ' +
      'Receberá um e-mail assim que o seu curso estiver concluído!'
  },
  meta: {
    titles: {
      pages: {
        admin: 'Administração',
        courses: 'Cursos',
        dashboard: 'Painel de Controlo',
        signin: 'Iniciar Sessão',
        learnerProfile: 'Perfil do Formando',
        onboardingWithAi: 'Integração com IA',
        organization: 'Organização',
        paswordreset: 'Repor Palavra-passe',
        printableCourse: 'Curso Imprimível'
      }
    }
  }
}
