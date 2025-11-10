/*
 * types.js
 * The copyright of this file belongs to Workademy GmbH. The file cannot be
 * reproduced in whole or in part, stored in a retrieval system, transmitted
 * in any form, or by any means electronic, mechanical, or otherwise, without
 * the prior permission of the owner. Please refer to the terms of the license
 * agreement.
 *
 * (c) 2020 Workademy GmbH, Rights Reserved.
 *
 * olga
 * 26/07/2020, 13:35
 */

export default {
  TYPE: '@type',
  TEXT: 'TEXT',
  HTML: 'HTML',
  JSON: 'JSON',
  SCROLL: 'SCROLL',
  BUTTON: 'BUTTON',
  MULTIPLE_CHOICE: 'MultipleChoice',
  SINGLE_CHOICE: 'SingleChoice',
  LIST: 'List',
  CATEGORIZATION: 'Categorization'
}

export const QUESTION_TYPES = {
  MULTIPLE_CHOICE: 'MultipleChoice',
  SINGLE_CHOICE: 'SingleChoice',
  LIST: 'List',
  CATEGORIZATION: 'Categorization',
  MULTIPLE_ASSOCIATION: 'MultipleAssociation',
  SINGLE_ORDERING: 'SingleOrdering',
  OPEN_ANSWER: 'OpenAnswer'
}

export const COURSE_QUESTION_TYPES = {
  MULTIPLE_CHOICE: 'MultipleChoice',
  SINGLE_CHOICE: 'SingleChoice',
  OPEN_ANSWER: 'OpenAnswer'
}

export const LECTURE_TYPES = {
  QUIZ: 'quiz',
  TEXT_VIDEO_QUIZ: 'textVideoQuiz',
  TEXT_VIDEO: 'textVideo',
  VIDEO_QUIZ: 'videoQuiz',
  TEXT_QUIZ: 'textQuiz',
  VIDEO: 'video',
  TEXT: 'text'
}

export const SECTION_TYPES = {
  JSON: 'JSON',
  DIALOG: 'DIALOG',
  TEXT: 'TEXT',
  QUESTION: 'QUESTION',
  PDF: 'PDF',
  IMAGE_TEXT: 'IMAGE_TEXT',
  HOTSPOT_IMAGE: 'HOTSPOT_IMAGE',
  VIDEO_TEXT: 'VIDEO_TEXT',
  AUDIO_TEXT: 'AUDIO_TEXT',
  ACCORDION: 'ACCORDION',
  BRANCH: 'BRANCH',
  IMPORTANT: 'IMPORTANT',
  ADDITIONAL_INFO: 'ADDITIONAL_INFO',
  EXAMPLES: 'EXAMPLES',
  BUTTON: 'BUTTON',
  GRID: 'GRID',
  TABLE: 'TABLE',
  TYPEFORM: 'TYPEFORM'
}

export const BUBBLE_TYPES = {
  TEXT: 'TEXT',
  VIDEO: 'VIDEO',
  AUDIO: 'AUDIO',
  QUESTION: 'QUESTION'
}

export const GAMIFICATION_TYPES = {
  LECTURES_COMPLETED: 'LECTURES_COMPLETED',
  QUESTIONS_ANSWERED: 'QUESTIONS_ANSWERED',
  QUESTIONS_ANSWERED_RATE: 'QUESTIONS_ANSWERED_RATE'
}

export const ACHIEVEMENT_TYPES = {
  FRAME: 'FRAME'
}

export const COURSE_TYPES = {
  EXTERNAL: 'EXTERNAL',
  SCORM: 'SCORM_COURSE',
  UMBRELLA: 'DECISION_TREE',
  BASIC: 'BASIC',
  AI: 'AI',
  CERTIFICATION: 'CERTIFICATION_COURSE'
}

export const PROGRESS_STATUS = {
  STARTED: 'STARTED',
  IN_PROGRESS: 'IN_PROGRESS',
  FINISHED: 'FINISHED'
}

export const UMBRELLA_TYPES = {
  TREE: 'DECISION_TREE',
  DECISION_OPTION: 'DECISION_OPTION',
  BUTTON: 'BUTTON',
  COURSE_OPTION: 'COURSE_OPTION'
}

export const PAYMENT_TYPES = {
  STRIPE: 'STRIPE',
  LIQPAY: 'LIQPAY'
}

export const COURSES_VIEW_TYPES = {
  FOLDER: 'FOLDER',
  FLAT: 'FLAT'
}
