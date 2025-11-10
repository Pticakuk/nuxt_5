/*
 * courseManipulations.js
 * The copyright of this file belongs to Workademy GmbH. The file cannot be
 * reproduced in whole or in part, stored in a retrieval system, transmitted
 * in any form, or by any means electronic, mechanical, or otherwise, without
 * the prior permission of the owner. Please refer to the terms of the license
 * agreement.
 *
 * (c) 2020 Workademy GmbH, Rights Reserved.
 *
 * olga
 * 24/08/2020, 22:52
 */
import pkg from 'lodash'; const { cloneDeep, merge, mergeWith, map, findIndex, uniqueId, reduce, forEach, concat } = pkg
import { GAMIFICATION_TYPES, QUESTION_TYPES, SECTION_TYPES } from '~/enums/types'
import { fixHtml, flatLectures, flatQuestions, updateURLs } from '~/utils/utils'
const { v4: uuidv4 } = require('uuid')

function getEntityFromCourse (course, {
  moduleIndex = 0,
  lectureIndex = 0,
  sectionIndex = 0,
  questionIndex = 0,
  sectionQuestionIndex = 0,
  globalUserIndex = 0
}) {
  const modules = [...(course.modules || [])]
  const module = modules[moduleIndex] || {}
  const lectures = [...(module.lectures || [])]
  const lecture = lectures?.[lectureIndex] || {}
  const sections = [...(lecture.sections || [])]
  const section = sections[sectionIndex] || {}
  const questions = [...(lecture.questionAnswers || [])]
  const question = questions[questionIndex] || {}
  const sectionQuestions = [...(section.questionAnswers || [])]
  const sectionQuestion = sectionQuestions[sectionQuestionIndex] || {}
  const globalUsers = [...(course.entities) || []]
  const globalUser = globalUsers[globalUserIndex] || {}

  return {
    modules,
    module,
    lectures,
    lecture,
    sections,
    section,
    questions,
    sectionQuestions,
    question,
    sectionQuestion,
    globalUsers,
    globalUser
  }
}

function customizer (objValue, srcValue, key, object, source, stack) {
  if (Array.isArray(objValue)) {
    return srcValue
  }
  if (object && object['@type'] &&
    (object['@type'] === QUESTION_TYPES.CATEGORIZATION || object['@type'] === QUESTION_TYPES.MULTIPLE_ASSOCIATION)) {
    return srcValue
  }
}

export const patchCourse = (course, newCourse) => {
  const clone = cloneDeep(course)
  return mergeWith(clone, newCourse, customizer)
}

export const addGlobalUser = (course = {}, globalUser = {}, globalUserIndex = 0) => {
  const clone = cloneDeep(course)
  const { globalUsers } = getEntityFromCourse(clone)
  globalUsers.splice(globalUserIndex, 0, {
    ...globalUser,
    internalId: uuidv4()
  })
  return {
    ...clone,
    entities: globalUsers.map((globalUser, index) => ({
      ...globalUser,
      number: index
    }))
  }
}

export const setGlobalUser = (course = {}, globalUser = {}, { globalUserIndex = 0 }) => {
  const clone = cloneDeep(course)
  const { globalUsers } = getEntityFromCourse(clone, { globalUserIndex })
  globalUsers[globalUserIndex] = merge(globalUsers[globalUserIndex], globalUser)
  clone.entities = globalUsers
  return clone
}

export const deleteGlobalUser = (course = {}, globalUserIndex = 0) => {
  const clone = cloneDeep(course)
  const { globalUsers } = getEntityFromCourse(clone, { globalUserIndex })
  globalUsers.splice(globalUserIndex, 1)
  clone.entities = globalUsers
  return clone
}

export const setGlobalUsers = (course = {}, globalUsers) => ({
  ...cloneDeep(course),
  entities: globalUsers.map((globalUser, index) => ({
    ...globalUser,
    number: index
  }))
})

export const addModule = (course = {}, courseModule = {}, index = 0) => {
  const clone = cloneDeep(course)
  const { modules } = getEntityFromCourse(clone, { moduleIndex: index })
  modules.splice(index, 0, {
    ...courseModule,
    internalId: uuidv4()
  })

  return {
    ...clone,
    modules: modules.map((clonedModule, index) => ({
      ...clonedModule,
      number: index
    }))
  }
}

export const moveModuleUp = (course = {}, module = {}, { moduleIndex = 0 }) => {
  const clone = cloneDeep(course)
  const { modules } = getEntityFromCourse(clone, { moduleIndex })
  module = modules.splice(moduleIndex, 1)[0]
  modules.splice(moduleIndex - 1, 0, module)
  clone.modules = modules.map((entitySection, index) => ({
    ...entitySection,
    number: index
  }))
  return clone
}

export const moveModuleDown = (course = {}, module = {}, { moduleIndex = 0 }) => {
  const clone = cloneDeep(course)
  const { modules } = getEntityFromCourse(clone, { moduleIndex })
  module = modules.splice(moduleIndex, 1)[0]
  modules.splice(moduleIndex + 1, 0, module)
  clone.modules = modules.map((entitySection, index) => ({
    ...entitySection,
    number: index
  }))
  return clone
}

export const setModule = (course = {}, module = {}, { moduleIndex = 0 }) => {
  const clone = cloneDeep(course)
  const { modules } = getEntityFromCourse(clone, { moduleIndex })
  modules[moduleIndex] = merge(modules[moduleIndex], module)
  clone.modules = modules
  return clone
}

export const deleteModule = (course = {}, moduleIndex = 0) => {
  const clone = cloneDeep(course)
  const { modules } = getEntityFromCourse(clone, { moduleIndex })
  modules.splice(moduleIndex, 1)
  clone.modules = modules
  return clone
}

export const setModules = (course = {}, modules) => ({
  ...cloneDeep(course),
  modules: modules.map((module, index) => ({
    ...module,
    number: index
  }))
})

export const addLecture = (course = {}, lecture = {}, { moduleIndex = 0, lectureIndex = 0 }) => {
  const clone = cloneDeep(course)
  const { modules, lectures } = getEntityFromCourse(clone, { moduleIndex, lectureIndex })
  lectures.splice(lectureIndex, 0, {
    ...lecture,
    internalId: uuidv4()
  })
  modules[moduleIndex].lectures = lectures.map((entityLecture, index) => ({
    ...entityLecture,
    number: index
  }))
  clone.modules = modules
  return clone
}

export const setLecture = (course = {}, lecture = {}, { moduleIndex = 0, lectureIndex = 0 }) => {
  const clone = cloneDeep(course)
  const { modules, lectures } = getEntityFromCourse(clone, { moduleIndex, lectureIndex })
  lectures[lectureIndex] = merge(lectures[lectureIndex], lecture)
  if (lecture?.advancedConfig) {
    lectures[lectureIndex].advancedConfig = cloneDeep(lecture?.advancedConfig)
  }
  modules[moduleIndex].lectures = lectures
  clone.modules = modules
  return clone
}

export const setLectureVisibilityRules = (course = {}, visibilityRules = {}, { moduleIndex = 0, lectureIndex = 0 }) => {
  const clone = cloneDeep(course)
  const { modules, lectures } = getEntityFromCourse(clone, { moduleIndex, lectureIndex })
  lectures[lectureIndex].visibilityRules = cloneDeep(visibilityRules)
  modules[moduleIndex].lectures = lectures
  clone.modules = modules
  return clone
}

export const moveLectureUp = (course = {}, lecture = {}, { moduleIndex = 0, lectureIndex = 0 }) => {
  const clone = cloneDeep(course)
  const { modules, lectures } = getEntityFromCourse(clone, { moduleIndex, lectureIndex })
  lecture = lectures.splice(lectureIndex, 1)[0]
  lectures.splice(lectureIndex - 1, 0, lecture)
  modules[moduleIndex].lectures = lectures.map((entitySection, index) => ({
    ...entitySection,
    number: index
  }))
  clone.modules = modules
  return clone
}

export const moveLectureDown = (course = {}, lecture = {}, { moduleIndex = 0, lectureIndex = 0 }) => {
  const clone = cloneDeep(course)
  const { modules, lectures } = getEntityFromCourse(clone, { moduleIndex, lectureIndex })
  lecture = lectures.splice(lectureIndex, 1)[0]
  lectures.splice(lectureIndex + 1, 0, lecture)
  modules[moduleIndex].lectures = lectures.map((entitySection, index) => ({
    ...entitySection,
    number: index
  }))
  clone.modules = modules
  return clone
}

export const deleteLecture = (course = {}, lectureIndex = 0, { moduleIndex = 0 }) => {
  const clone = cloneDeep(course)
  const { modules, lectures } = getEntityFromCourse(clone, { moduleIndex, lectureIndex })
  lectures.splice(lectureIndex, 1)
  modules[moduleIndex].lectures = lectures
  clone.modules = modules
  return clone
}
export const setLectures = (course = {}, lectures = [], { moduleIndex = 0 }) => {
  const clone = cloneDeep(course)
  const { modules, module } = getEntityFromCourse(clone, { moduleIndex })
  modules[moduleIndex] = {
    ...module,
    lectures: lectures.map((lecture, index) => ({
      ...lecture,
      number: index
    }))
  }
  clone.modules = modules
  return clone
}

export const addSection = (course = {}, section = {}, { moduleIndex = 0, lectureIndex = 0, sectionIndex = 0 }) => {
  const clone = cloneDeep(course)
  const { modules, module, lectures, lecture, sections } = getEntityFromCourse(clone, {
    moduleIndex,
    lectureIndex,
    sectionIndex
  })
  sections.splice(sectionIndex, 0, {
    ...section,
    internalId: uuidv4()
  })
  lecture.sections = sections.map((entitySection, index) => ({
    ...entitySection,
    number: index
  }))
  lectures[lectureIndex] = lecture
  module.lectures = lectures
  modules[moduleIndex] = module
  clone.modules = modules
  return clone
}

export const moveSectionUp = (course = {}, section = {}, { moduleIndex = 0, lectureIndex = 0, sectionIndex = 0 }) => {
  const clone = cloneDeep(course)
  const { modules, module, lectures, lecture, sections } = getEntityFromCourse(clone, {
    moduleIndex,
    lectureIndex,
    sectionIndex
  })
  section = sections.splice(sectionIndex, 1)[0]
  sections.splice(sectionIndex - 1, 0, section)
  lecture.sections = sections.map((entitySection, index) => ({
    ...entitySection,
    number: index
  }))
  lectures[lectureIndex] = lecture
  module.lectures = lectures
  modules[moduleIndex] = module
  clone.modules = modules
  return clone
}

export const moveSectionDown = (course = {}, section = {}, { moduleIndex = 0, lectureIndex = 0, sectionIndex = 0 }) => {
  const clone = cloneDeep(course)
  const { modules, module, lectures, lecture, sections } = getEntityFromCourse(clone, {
    moduleIndex,
    lectureIndex,
    sectionIndex
  })
  section = sections.splice(sectionIndex, 1)[0]
  sections.splice(sectionIndex + 1, 0, section)
  lecture.sections = sections.map((entitySection, index) => ({
    ...entitySection,
    number: index
  }))
  lectures[lectureIndex] = lecture
  module.lectures = lectures
  modules[moduleIndex] = module
  clone.modules = modules
  return clone
}

export const setSection = (course = {}, section = {}, { moduleIndex = 0, lectureIndex = 0, sectionIndex = 0 }) => {
  const clone = cloneDeep(course)
  const { modules, lectures, sections } = getEntityFromCourse(clone, { moduleIndex, lectureIndex, sectionIndex })
  sections[sectionIndex] = merge(sections[sectionIndex], section)
  lectures[lectureIndex].sections = sections
  modules[moduleIndex].lectures = lectures
  clone.modules = modules
  return clone
}

export const deleteSection = (course = {}, sectionIndex = 0, { moduleIndex = 0, lectureIndex = 0 }) => {
  const clone = cloneDeep(course)
  const { modules, lectures, sections } = getEntityFromCourse(clone, { moduleIndex, lectureIndex, sectionIndex })
  const section = sections[sectionIndex]
  if (section['@type'] === SECTION_TYPES.JSON) {
    const json = JSON.parse(section.json)
    const type = json.type
    const content = json.content
    if (type === SECTION_TYPES.QUESTION) {
      const questionIndex = content.questionIndex
      deleteSectionQuestion(course, questionIndex, { moduleIndex, lectureIndex, sectionIndex })
    }
  }
  sections.splice(sectionIndex, 1)
  lectures[lectureIndex].sections = sections
  modules[moduleIndex].lectures = lectures
  clone.modules = modules
  return clone
}

export const setSections = (course = {}, sections = [], { moduleIndex = 0, lectureIndex = 0 }) => {
  const clone = cloneDeep(course)
  const { modules, lectures } = getEntityFromCourse(clone, { moduleIndex, lectureIndex })
  lectures[lectureIndex].sections = sections.map((section, index) => ({
    ...section,
    number: index
  }))
  modules[moduleIndex].lectures = lectures
  clone.modules = modules
  return clone
}

export const addQuestion = (course = {}, question = {}, { surveyType = '', moduleIndex = 0, lectureIndex = 0, questionIndex = 0 }) => {
  if (surveyType) {
    return addCourseQuestion(surveyType, course, question, { questionIndex })
  }
  const clone = cloneDeep(course)
  const { modules, lectures, questions } = getEntityFromCourse(clone, { moduleIndex, lectureIndex, questionIndex })
  questions.splice(questionIndex, 0, {
    ...question,
    internalId: uuidv4()
  })
  lectures[lectureIndex].questionAnswers = questions.map((entityQuestion, index) => ({
    ...entityQuestion,
    number: index
  }))
  modules[moduleIndex].lectures = lectures
  clone.modules = modules
  return clone
}
export const addCourseQuestion = (surveyType = '', course = {}, question = {}, { questionIndex = 0 }) => {
  const clone = cloneDeep(course)
  const questionsKey = surveyType === 'post' ? 'postSurveyQuestionAnswers' : 'questionAnswers'
  const questions = clone[questionsKey] || []

  questions.splice(questionIndex, 0, {
    ...question,
    requiresCorrectAnswer: false,
    internalId: uuidv4()
  })

  clone[questionsKey] = questions.map((entityQuestion, index) => ({
    ...entityQuestion,
    number: index
  }))

  return clone
}

export const moveQuestionUp = (course = {}, question = {}, { surveyType = '', moduleIndex = 0, lectureIndex = 0, questionIndex = 0 }) => {
  if (surveyType) {
    return moveCourseQuestionUp(surveyType, course, question, { questionIndex })
  }
  const clone = cloneDeep(course)
  const { modules, lectures, questions } = getEntityFromCourse(clone, { moduleIndex, lectureIndex, questionIndex })
  question = questions.splice(questionIndex, 1)[0]
  questions.splice(questionIndex - 1, 0, question)
  lectures[lectureIndex].questionAnswers = questions.map((entityQuestion, index) => ({
    ...entityQuestion,
    number: index
  }))
  modules[moduleIndex].lectures = lectures
  clone.modules = modules
  return clone
}

export const moveCourseQuestionUp = (surveyType = '', course = {}, question = {}, { questionIndex = 0 }) => {
  const clone = cloneDeep(course)
  const questionsKey = surveyType === 'post' ? 'postSurveyQuestionAnswers' : 'questionAnswers'
  const questions = clone[questionsKey] || []

  question = questions.splice(questionIndex, 1)[0]
  questions.splice(questionIndex - 1, 0, question)

  clone[questionsKey] = questions.map((entityQuestion, index) => ({
    ...entityQuestion,
    number: index
  }))

  return clone
}

export const moveQuestionDown = (course = {}, question = {}, { surveyType = '', moduleIndex = 0, lectureIndex = 0, questionIndex = 0 }) => {
  if (surveyType) {
    return moveCourseQuestionDown(surveyType, course, question, { questionIndex })
  }
  const clone = cloneDeep(course)
  const { modules, lectures, questions } = getEntityFromCourse(clone, { moduleIndex, lectureIndex, questionIndex })
  question = questions.splice(questionIndex, 1)[0]
  questions.splice(questionIndex + 1, 0, question)
  lectures[lectureIndex].questionAnswers = questions.map((entityQuestion, index) => ({
    ...entityQuestion,
    number: index
  }))
  modules[moduleIndex].lectures = lectures
  clone.modules = modules
  return clone
}
export const moveCourseQuestionDown = (surveyType = '', course = {}, question = {}, { questionIndex = 0 }) => {
  const clone = cloneDeep(course)
  const questionsKey = surveyType === 'post' ? 'postSurveyQuestionAnswers' : 'questionAnswers'
  const questions = clone[questionsKey] || []

  question = questions.splice(questionIndex, 1)[0]
  questions.splice(questionIndex + 1, 0, question)

  clone[questionsKey] = questions.map((entityQuestion, index) => ({
    ...entityQuestion,
    number: index
  }))

  return clone
}
export const setQuestion = (course = {}, question = {}, { surveyType = '', moduleIndex = 0, lectureIndex = 0, questionIndex = 0 }) => {
  if (surveyType) {
    return setCourseQuestion(surveyType, course, question, { questionIndex })
  }
  const clone = cloneDeep(course)
  const {
    modules,
    lectures,
    lecture,
    questions,
    module
  } = getEntityFromCourse(clone, { moduleIndex, lectureIndex, questionIndex })
  questions[questionIndex] = mergeWith(questions[questionIndex], question, customizer)
  lecture.questionAnswers = questions
  lectures[lectureIndex] = lecture
  module.lectures = lectures
  modules[moduleIndex] = module
  clone.modules = modules
  return clone
}
export const setCourseQuestion = (surveyType = '', course = {}, question = {}, { questionIndex = 0 }) => {
    const clone = cloneDeep(course)
    const questionsKey = surveyType === 'post' ? 'postSurveyQuestionAnswers' : 'questionAnswers'
    const questions = clone[questionsKey] || []

    questions[questionIndex] = mergeWith(questions[questionIndex], question, customizer)

    clone[questionsKey] = questions

    return clone
}
export const deleteQuestion = (course = {}, questionIndex = 0, { surveyType = '', moduleIndex = 0, lectureIndex = 0 }) => {
  if (surveyType) {
    return deleteCourseQuestion(surveyType, course, questionIndex)
  }
  const clone = cloneDeep(course)
  const { modules, lectures, questions } = getEntityFromCourse(clone, { moduleIndex, lectureIndex, questionIndex })
  questions.splice(questionIndex, 1)
  lectures[lectureIndex].questionAnswers = questions
  modules[moduleIndex].lectures = lectures
  clone.modules = modules
  return clone
}
export const deleteCourseQuestion = (surveyType = '', course = {}, questionIndex = 0) => {
  const clone = cloneDeep(course)
  const questionsKey = surveyType === 'post' ? 'postSurveyQuestionAnswers' : 'questionAnswers'
  const questions = clone[questionsKey] || []

  questions.splice(questionIndex, 1)

  clone[questionsKey] = questions

  return clone
}

export const setQuestions = (course = {}, questions, { moduleIndex = 0, lectureIndex = 0 }) => {
  const clone = cloneDeep(course)
  const { modules, lectures } = getEntityFromCourse(clone, { moduleIndex, lectureIndex })
  lectures[lectureIndex].questionAnswers = questions.map((question, index) => ({
    ...question,
    number: index
  }))
  modules[moduleIndex].lectures = lectures
  clone.modules = modules
  return clone
}

export const setCourseQuestions = (course = {}, questions) => {
  const clone = cloneDeep(course)
  clone.questionAnswers = questions.map((question, index) => ({
    ...question,
    number: index
  }))
  return clone
}

export const addSectionQuestion = (course = {}, question, {
  moduleIndex = 0,
  lectureIndex = 0,
  sectionIndex = 0,
  questionIndex = 0
}) => {
  const clone = cloneDeep(course)
  const { modules, lectures, lecture, sections, section, sectionQuestions } = getEntityFromCourse(clone, {
    moduleIndex,
    lectureIndex,
    sectionIndex
  })

  sectionQuestions.splice(questionIndex, 0, {
    ...question,
    internalId: uuidv4()
  })
  section.questionAnswers = sectionQuestions.map((sectionQuestion, index) => ({
    ...sectionQuestion,
    number: index
  }))

  sections[sectionIndex] = section
  lecture.sections = sections
  lectures[lectureIndex] = lecture
  modules[moduleIndex].lectures = lectures
  clone.modules = modules
  return clone
}

export const setSectionQuestion = (course = {}, question, {

  moduleIndex = 0,
  lectureIndex = 0,
  sectionIndex = 0,
  questionIndex = 0
}) => {
  const clone = cloneDeep(course)
  const { modules, lectures, lecture, sections, section, sectionQuestions } = getEntityFromCourse(clone, {
    moduleIndex,
    lectureIndex,
    sectionIndex
  })
  sectionQuestions[questionIndex] = mergeWith(sectionQuestions[questionIndex], question, customizer)
  section.questionAnswers = sectionQuestions
  sections[sectionIndex] = section
  lecture.sections = sections
  lectures[lectureIndex] = lecture
  modules[moduleIndex].lectures = lectures
  clone.modules = modules
  return clone
}

export const deleteSectionQuestion = (course = {}, questionIndex, {
  moduleIndex = 0,
  lectureIndex = 0,
  sectionIndex = 0
}) => {
  const clone = cloneDeep(course)
  const { modules, lectures, lecture, sections, section, sectionQuestions } = getEntityFromCourse(clone, {
    moduleIndex,
    lectureIndex,
    sectionIndex
  })
  sectionQuestions.splice(questionIndex, 1)
  section.questionAnswers = sectionQuestions
  sections[sectionIndex] = section
  lecture.sections = sections
  lectures[lectureIndex] = lecture
  modules[moduleIndex].lectures = lectures
  clone.modules = modules
  return clone
}

export const setSectionQuestions = (course = {}, questions, { moduleIndex = 0, lectureIndex = 0, sectionIndex = 0 }) => {
  const clone = cloneDeep(course)
  const { modules, module, lectures, lecture, sections, section } = getEntityFromCourse(clone, {
    moduleIndex,
    lectureIndex,
    sectionIndex
  })
  section.questionAnswers = questions.map((question, index) => ({
    ...question,
    number: index
  }))
  sections[sectionIndex] = section
  lecture.sections = sections
  lectures[lectureIndex] = lecture
  module.lectures = lectures
  modules[moduleIndex] = module
  clone.modules = modules
  return clone
}

export const addGamificationItems = (course = {}, gamificationItems) => {
  const clone = cloneDeep(course)
  clone.gamificationItems = gamificationItems
  return clone
}

export const addTags = (course = {}, tags) => {
  const clone = cloneDeep(course)
  clone.tags = tags
  return clone
}

export const mapGamificationItems = (course = {}, copyFromCourse = {}) => {
  const newLectures = flatLectures(course)
  const oldLectures = flatLectures(copyFromCourse)
  const newQuestions = flatQuestions(course)
  const oldQuestions = flatQuestions(copyFromCourse)
  const gamificationItems = map(copyFromCourse.gamificationItems, (item) => {
    const newItem = cloneDeep(item)
    delete newItem.id
    if (newItem['@type'] === GAMIFICATION_TYPES.LECTURES_COMPLETED) {
      newItem.lectureIds = map(newItem.lectureIds, (id) => {
        const index = findIndex(oldLectures, { lectureId: id })
        return newLectures[index].lectureId
      })
    } else if (newItem['@type'] === GAMIFICATION_TYPES.QUESTIONS_ANSWERED) {
      newItem.questionAnswerIds = map(newItem.questionAnswerIds, (id) => {
        const index = findIndex(oldQuestions, { id })
        return newQuestions[index].id
      })
    }
    return newItem
  })
  return gamificationItems
}

function fromArrayTypeToObjectType (oldType, newType) {
  return (oldType === QUESTION_TYPES.MULTIPLE_CHOICE || oldType === QUESTION_TYPES.SINGLE_CHOICE || oldType === QUESTION_TYPES.SINGLE_ORDERING) && (newType === QUESTION_TYPES.CATEGORIZATION || newType === QUESTION_TYPES.MULTIPLE_ASSOCIATION)
}

function fromObjectTypeToArrayType (oldType, newType) {
  return (oldType === QUESTION_TYPES.CATEGORIZATION || oldType === QUESTION_TYPES.MULTIPLE_ASSOCIATION) && (newType === QUESTION_TYPES.SINGLE_CHOICE || newType === QUESTION_TYPES.MULTIPLE_CHOICE || newType === QUESTION_TYPES.SINGLE_ORDERING)
}

export const changeQuestionType = (oldType, newType, answer, correctAnswer) => {
  if (oldType === QUESTION_TYPES.MULTIPLE_CHOICE && newType === QUESTION_TYPES.SINGLE_CHOICE) {
    return {
      answer,
      correctAnswer: [correctAnswer[0]]
    }
  } else if (fromArrayTypeToObjectType(oldType, newType)) {
    const mapping = reduce(answer, (result, item, index) => {
      result[uniqueId('item_')] = item
      return result
    }, {})
    return {
      answer: {
        itemMapping: mapping,
        categoryMapping: {},
        solution: {}
      },
      correctAnswer: {}
    }
  } else if (fromObjectTypeToArrayType(oldType, newType)) {
    return {
      answer: (answer.map ? map(answer.items, (item) => {
        return answer.map[item]
      }) : answer.items) || ['A', 'B', 'C'],
      correctAnswer: [newType === QUESTION_TYPES.SINGLE_CHOICE || QUESTION_TYPES.MULTIPLE_CHOICE ? 1 : 0]
    }
  } else {
    return {
      answer,
      correctAnswer
    }
  }
}
export const flatQuestionsPerLecture = (lecture = {}) => {
  const questionAnswers = lecture.questionAnswers.slice(0) || []
  return reduce(lecture.sections, (result, section) => {
    if (section.questionAnswers && section.questionAnswers.length) {
      result = concat(result, section.questionAnswers)
    }
    return result
  }, questionAnswers)
}
export const flatLecturesPerModule = (module = {}) => {
  return reduce(module.lectures, (result, lecture) => {
    const questions = flatQuestionsPerLecture(lecture)
    if (questions.length) {
      result.push({
        lectureId: lecture.id,
        name: lecture.name,
        questions
      })
    }
    return result
  }, [])
}
export const flatQuestionPerCourse = (course = {}) => {
  const modules = course.modules
  return reduce(modules, (result, module, index) => {
    const lectures = flatLecturesPerModule(module)
    if (lectures.length) {
      result.push({
        moduleId: module.id,
        moduleIndex: index,
        name: module.name,
        lectures
      })
    }
    return result
  }, [])
}

export const flatQuestionAnswersItems = (course = {}) => {
  return reduce(flatQuestionPerCourse(course), (result, moduleItem) => {
    const moduleResults = []

    // Iterate through lectures and filter valid questions
    forEach(moduleItem.lectures, (lecture, index) => {
      forEach(lecture.questions, (question) => {
        const type = question?.['@type']
        if (type === 'MultipleChoice' || type === 'SingleChoice') {
          moduleResults.push({
            moduleIndex: moduleItem.moduleIndex,
            group: lecture.name,
            lectureIndex: index,
            text: `${fixHtml(moduleItem.name)} | ${fixHtml(lecture.name)} | ${fixHtml(question.question)}`,
            ...question
          })
        }
      })
    })

    // Add module header only if there are valid questions
    if (moduleResults.length) {
      result.push({ header: fixHtml(moduleItem.name) }, ...moduleResults)
    }

    return result
  }, [])
}

 export const replaceFileUrlInCourse = (course = {}, url) => {
  const clone = cloneDeep(course)
  updateURLs(clone, url)
  return clone
}
