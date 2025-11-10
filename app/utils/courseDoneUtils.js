/*
 * courseDoneUtils.js
 * The copyright of this file belongs to Workademy GmbH. The file cannot be
 * reproduced in whole or in part, stored in a retrieval system, transmitted
 * in any form, or by any means electronic, mechanical, or otherwise, without
 * the prior permission of the owner. Please refer to the terms of the license
 * agreement.
 *
 * (c) 2021 Workademy GmbH, Rights Reserved.
 *
 * olga
 * 12/08/2021, 18:33
 */
import pkg from 'lodash'; const { filter, size, every, isFinite, reduce, find, forEach, flatten } = pkg
import { calcPercentage, ratioInPercentage, ratioInPercentageText } from '../utils/utils'
import { COURSE_STATUSES } from '../enums/status'

/**
 * Check if a specific question is already violating wrong limit
 * @param questionAnswer
 * @returns {boolean|boolean}
 */
export const isViolatingWrongLimit = (questionAnswer = {}) => {
  const { wrongLimit, wrongCount } = questionAnswer
  return isFinite(wrongLimit) && wrongCount >= wrongLimit
}
/**
 * If a specific question is violating wrong limit return its number of total points
 * @param questionAnswer
 * @returns {number|*}
 */
export const totalPointsOfAQuestionThatViolatesWrongLimit = (questionAnswer = {}) => {
  const { weight } = questionAnswer
  if (isViolatingWrongLimit(questionAnswer)) {
    return weight
  }
  return 0
}
/**
 * Returns the number of violations per lecture
 * @param lecture
 * @returns {number}
 */
export const lectureViolations = (lecture = {}) => {
  const questionAnswers = lecture.questionAnswers || []
  return size(filter(questionAnswers, isViolatingWrongLimit))
}
/**
 * Returns total number of points of violated questions per lecture
 * @param lecture
 * @returns {number}
 */
export const lectureViolationsTotalPoints = (lecture = {}) => {
  const questionAnswers = lecture.questionAnswers || []
  return reduce(questionAnswers, (result, questionAnswer) => {
    return result + totalPointsOfAQuestionThatViolatesWrongLimit(questionAnswer)
  }, 0)
}
/**
 * Get all the questionanswers per lecture (lecture questionAnswers and all the sections questionAnswers)
 * @param lecture
 * @returns {*[]}
 */
export const flatQuestionsPerLecture_v2 = (lecture = {}) => {
  const result = []
  if (lecture.questionAnswers) {
    result.push(lecture.questionAnswers)
  }
  if (!lecture.sections) {
    return flatten(result)
  }
  forEach(lecture.sections, (section) => {
    if (section.questionAnswers) {
      result.push(section.questionAnswers)
    }
  })
  return flatten(result)
}
/**
 * Return all the questionanswers that have zero weight and are mandatory
 * @param lecture
 * @returns {{weight: number, mandatory: boolean}[]}
 */
export const mandatoryQuestionsWithZeroPoints = (lecture = {}) => {
  const flatQuestions = flatQuestionsPerLecture_v2(lecture)
  return filter(flatQuestions, { mandatory: true, weight: 0 })
}
export const allMandatoryQuestionsWithZeroPointsAnswered = (lecture = {}) => {
  const questionsWithZeroPoints = mandatoryQuestionsWithZeroPoints(lecture)
  if (questionsWithZeroPoints.length === 0) {
    return true
  }
  return every(questionsWithZeroPoints, (questionAnswer) => {
    return questionAnswer.userAnswer !== null
  })
}
/**
 * Returns true if the number of correctly answered questions
 * plus the amount of questions with violated limit of attempts is equal to the questions size
 * @param lecture
 * @returns {boolean}
 */
export const isLectureDone = (lecture = {}) => {
  const isRead = isLectureRead(lecture)
  const allMandatoryQuestionsAnswered = allMandatoryQuestionsWithZeroPointsAnswered(lecture)
  if (!lecture.totalPoints && allMandatoryQuestionsAnswered) {
    return isRead
  }
  const rightQuestionAnswers = lecture.correctPoints || 0
  return isRead && (rightQuestionAnswers + lectureViolationsTotalPoints(lecture) >= lecture.totalPoints) && allMandatoryQuestionsAnswered
}
/**
 * Returns true if the lecture is read
 *
 * @param lecture
 * @returns {boolean}
 */
export const isLectureRead = (lecture = {}) => {
  return lecture.doneTime !== undefined && lecture.doneTime !== null
}
/**
 * Returns true if all the lectures of a module are done
 * @param module
 * @returns {boolean}
 */
export const isModuleDone = (module = {}) => {
  const lectures = (module.lectures || []).filter(lecture => lecture?.visible)
  if (lectures.length === 0) {
    return false
  }
  return every(lectures, isLectureDone)
}
/**
 * Returns true if all the lectures of a module are read
 * @param module
 * @returns {boolean}
 */
export const isModuleRead = (module = {}) => {
  const lectures = module.lectures || []
  if (lectures.length === 0) {
    return false
  }
  return every(lectures, isLectureRead)
}
/**
 * Returns true if the required amount of question for the certificate is answered and the required number of lessons is read
 * @param course
 * @returns {boolean}
 */
export const isCourseDone = (course = {}) => {
  const {
    status,
    certifiable,
    finishTime,
    modules = [],
    totalPoints,
    correctPoints = 0,
    minScoreRate,
    lectureSize,
    minLectureCompletionRate
  } = course
  const lecturesSeen = course.lecturesSeen
  if (status && status === COURSE_STATUSES.EXPIRED) {
    return false
  }
  if (finishTime !== null && finishTime !== undefined) {
    return true
  }

  if (modules.length === 0) {
    return false
  }
  if (certifiable) {
      // certifiable by questions
    if (totalPoints && minScoreRate && !minLectureCompletionRate) {
      const ratio = totalPoints ? correctPoints / totalPoints : 0
      return ratio >= minScoreRate
    }
    // certifiable by read
    if (minLectureCompletionRate && !minScoreRate) {
      const ratio = lectureSize ? lecturesSeen / lectureSize : 0
      return ratio >= minLectureCompletionRate
    }
    // cover old certifiable logic by read
    if (lectureSize && !minLectureCompletionRate && !minScoreRate) {
      return every(modules, isModuleRead)
    }
    // certifiable by questions and read
    if (totalPoints && minScoreRate && minLectureCompletionRate) {
      const questionRatio = totalPoints ? correctPoints / totalPoints : 0
      const lectureRatio = lectureSize ? lecturesSeen / lectureSize : 0
      return questionRatio >= minScoreRate && lectureRatio >= minLectureCompletionRate
    }
  }

  // done by read
  if (minScoreRate === 0) {
    return every(modules, isModuleRead)
  }
  // done by answers
  if (totalPoints && totalPoints === correctPoints) {
    return true
  }
  return every(modules, isModuleDone)
}
/**
 * Returns true if ALL the questions are correctly answered and ALL the lectures are marked as seen
 */
export const isCourseCompletelyDone = (course = {}) => {
  const {
    modules = []
  } = course
  return every(modules, isModuleDone)
}
/**
 * Returns true if the lecture is seen
 * @param lecture
 * @returns {boolean}
 */
export const isLectureSeen = (lecture = {}) => {
  return lecture.doneTime !== undefined && lecture.doneTime !== null
}
/**
 * Return true if lecture doesnt contain quizes
 * @param lecture
 * @returns {boolean}
 */
export const lectureWithNoQuizes = (lecture = {}) => {
  return !lecture.totalPoints
}
/**
 * Returns number of lectures with no quizes per module
 * @param module
 * @returns {number}
 */
export const lectureWithNoQuizesPerModule = (module = {}) => {
  const lectures = module.lectures || []
  return size(filter(lectures, lectureWithNoQuizes))
}
/**
 * Counts the number of lectures with no quizes per course
 * @param course
 * @returns {*}
 */
export const lectureWithNoQuizesPerCourse = (course = {}) => {
  const modules = course.modules || []
  return reduce(modules, (result, module) => {
    return result + lectureWithNoQuizesPerModule(module)
  }, 0)
}

/**
 * total number of lectures per module
 * @param module
 * @returns {number}
 */
export const totalLecturesPerModule = (module = {}) => {
  const lectures = module.lectures || []
  return lectures.length
}
/**
 * Calculates overall progress counting the lectures seen and the questions answered
 * @param course
 */
export const overallProgress = (course = {}) => {
  return (ratioQuestions(course) + ratioLectures(course)) / 2
}
/**
 * Progress of seen lectures
 * @param course
 * @returns {string}
 */
export const progressSeen = (course = {}) => {
  const lecturesSeen = course.lecturesSeen
  const totalLectures = course.lectureSize
  return ratioInPercentageText(lecturesSeen, totalLectures)
}
/**
 * Progress of correctly answered questions
 * @param course
 * @returns {string}
 */
export const progressAnswers = (course = {}) => {
  const right = course.correctPoints
  const total = course.totalPoints
  return ratioInPercentageText(right, total)
}
/**
 * Progress of course in numbers of correctly answered questions or seen lectures
 * @param course
 * @returns {null|number}
 */
export const progressCourse = (course = {}) => {
  const { certifiable, totalPoints, minScoreRate, lectureSize, minLectureCompletionRate } = course || {}

  if (!lectureSize) {
    return 0
  }
  if (certifiable) {
    if (totalPoints && minScoreRate && !minLectureCompletionRate) {
      return ratioQuestions(course)
    }
    if (lectureSize && minLectureCompletionRate && !minScoreRate) {
      return ratioLectures(course)
    }
    if (totalPoints && minScoreRate && lectureSize && minLectureCompletionRate) {
      return overallProgress(course)
    }
  }

  return totalPoints ? overallProgress(course) : ratioLectures(course)
}
/**
 * Returns a module by its ID
 * @param course
 * @param moduleId
 * @returns {null|unknown}
 */
export const findModuleByModuleId = (course = {}, moduleId) => {
  if (!moduleId) {
    return null
  }
  const modules = course.modules || []
  return find(modules, { moduleId: parseInt(moduleId) }) || {}
}
/**
 * Returns a lecture object by its ID
 * @param course
 * @param moduleId
 * @param lectureId
 * @returns {null|unknown}
 */
export const findLectureByLectureId = (course = {}, moduleId, lectureId) => {
  const module = findModuleByModuleId(course, moduleId)
  if (module === null) {
    return null
  }
  const lectures = module.lectures || []
  return find(lectures, { lectureId: parseInt(lectureId) })
}
/**
 * Returns true if a course has been started already
 * @param course
 * @returns {*}
 */
export const courseIsStarted = (course = {}) => {
  return course.correctPoints || course?.lecturesSeen || wrongAttempts(course)
}
/**
 * Returns all the answers of a lecture – from the quiz section and from the question sections
 * @param course
 * @returns {*[]}
 */
export const flatQuestionAnswers = (course = {}) => {
  return reduce(course.modules, (result, module, index) => {
    forEach(module.lectures, (lecture) => {
      if (lecture.questionAnswers) {
        result.push(lecture.questionAnswers)
      }
      forEach(lecture.sections, (section) => {
        if (section.questionAnswers) {
          result.push(section.questionAnswers)
        }
      })
    })
    return flatten(result)
  }, [])
}
export const wrongAttemptsOnQuestionAnswer = (question = {}) => {
  return question.wrongCount
}
export const wrongAttempts = (course = {}) => {
  const questions = flatQuestionAnswers(course)
  return size(filter(questions, wrongAttemptsOnQuestionAnswer))
}

export const possiblePoints = (course = {}) => {
  const questions = flatQuestionAnswers(course)
  return reduce(questions, (result, question, index) => {
    if (question.correct || !isViolatingWrongLimit(question)) {
      result = result + question.weight
    }
    return result
  }, 0)
}

export const courseIsFailed = (course = {}) => {
  // if this is the course on the dashboard, and modules are not loaded return false
  if (course.modules.length === 0) {
    return false
  }
  if (course.certifiable) {
    if (!course.minScoreRate) {
      return false
    }
    const rate = possiblePoints(course) / course.totalPoints
    return rate < course.minScoreRate
  } else {
    // TBD
    return false
  }
}
export const ratioQuestions = (course = {}) => {
  const right = course.correctPoints
  const total = course.totalPoints
  if (total) {
    return ratioInPercentage(right, total)
  }
  return null
}

export const ratioLectures = (course = {}) => {
  const lecturesSeen = course.lecturesSeen
  const totalLectures = course.lectureSize
  return ratioInPercentage(lecturesSeen, totalLectures)
}

/**
 * Return true if all mandatory questions are answered
 * @param course
 * @returns {boolean}
 */
export const courseQuestionsAnswered = (answers) => {
  if (!answers) {
    return true
  }

  return every(answers, ({ mandatory, userAnswer }) => !mandatory || userAnswer !== null)
}

export const isCoursePaid = (course) => {
  return course.paymentInformation && course.paymentInformation.amount > 0
}
export const isPaymentMissing = (course) => {
  return isCoursePaid(course) && (course.status === COURSE_STATUSES.PAYMENT_MISSING)
}
