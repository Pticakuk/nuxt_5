/*
 * utils.js
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

import pkg from 'lodash'; const { forEach, isFinite, cloneDeep, assign, map, find, findLast, some, flatten, each, every, findIndex, reduce, remove, startsWith, filter } = pkg
import moment from 'moment'
import {
  isLectureDone,
  isModuleDone,
  isCourseDone,
  progressCourse,
  isLectureRead,
  courseIsFailed, progressSeen, isPaymentMissing, isCourseCompletelyDone
} from '../utils/courseDoneUtils'
import defaultProfile from '../config/profiles/default_profile'
import HOSTS from '../enums/hosts'
import TYPES, { GAMIFICATION_TYPES, LECTURE_TYPES } from '../enums/types'
import { FILE_FORMATS, FILE_TYPES, IMAGE_FILE_TYPES } from '../enums/library'
import liveMeetingsPlatforms from '../enums/liveMeetingsPlatforms'
import errors from '../enums/errors'
import { expressionToJson } from '~/utils/rules'
import { formattedDate } from '~/utils/timeUtils'
import { FORCE_SAVE_ERRORS } from '~/enums/errors'
import humanizeDuration from 'humanize-duration'

export const leftPad = (num) => {
  if (!isFinite(num)) {
    return num
  }
  num = '' + num
  if (num.length === 1) {
    return '0' + num
  }

  return num
}

export const extractHashParam = (hash) => {
  let index = hash.indexOf('!')
  let queryIndex = hash.indexOf('?')
  if (index === -1) {
    index = hash.indexOf('#')
  }
  if (queryIndex === -1) {
    queryIndex = hash.length
  }
  return hash.substring(index + 1, queryIndex)
}

export const applyDrag = (arr, dragResult, repeatedAllowed = true) => {
  const { removedIndex, addedIndex, payload } = dragResult
  if (removedIndex === null && addedIndex === null) {
    return arr
  }
  if (!repeatedAllowed && arr.includes(payload) && removedIndex === null) {
    return arr
  }

  const result = [...arr]
  let itemToAdd = payload

  if (removedIndex !== null) {
    itemToAdd = result.splice(removedIndex, 1)[0]
  }

  if (addedIndex !== null) {
    result.splice(addedIndex, 0, itemToAdd)
  }

  return result
}

export const readCookie = (name) => {
  if (!process.client) {
    return {}
  }
  let result = document.cookie.match(new RegExp(name + '=([^;]+)'))
  result && (result = JSON.parse(result[1]))
  return result || {}
}

export const cookieProfileToProfileObject = (cookieProfile) => {
  const profile = cloneDeep(defaultProfile)

  assign(profile, cookieProfile)
  if (cookieProfile.color) {
    const primary = cookieProfile.color
    const secondary = addOpacityToColor(cookieProfile.color, 0.5)
    const lighter = shadeColor(cookieProfile.color, 40)
    const darker = shadeColor(cookieProfile.color, -40)
    profile.theme.themes.light.primary = primary
    profile.theme.themes.light.secondary = secondary
    profile.theme.themes.light['primary--lighter'] = lighter
    profile.theme.themes.light['primary--darker'] = darker
    profile.theme.themes.dark.primary = primary
    profile.theme.themes.dark.secondary = secondary
    profile.theme.themes.dark['primary--lighter'] = lighter
    profile.theme.themes.dark['primary--darker'] = darker
  }

  if (cookieProfile.company) {
    profile.title = `${cookieProfile.company} Workademy`
  }

  if (cookieProfile.coverImage) {
    profile.footerImage = cookieProfile.coverImage
  }

  return profile
}

export const shadeColor = (color, percent) => {
  let R = parseInt(color.substring(1, 3), 16)
  let G = parseInt(color.substring(3, 5), 16)
  let B = parseInt(color.substring(5, 7), 16)

  R = parseInt(R * (100 + percent) / 100)
  G = parseInt(G * (100 + percent) / 100)
  B = parseInt(B * (100 + percent) / 100)

  R = (R < 255) ? R : 255
  G = (G < 255) ? G : 255
  B = (B < 255) ? B : 255

  const RR = ((R.toString(16).length === 1) ? '0' + R.toString(16) : R.toString(16))
  const GG = ((G.toString(16).length === 1) ? '0' + G.toString(16) : G.toString(16))
  const BB = ((B.toString(16).length === 1) ? '0' + B.toString(16) : B.toString(16))

  return '#' + RR + GG + BB
}

export const addOpacityToColor = (color, opacity) => {
  let R = parseInt(color.substring(1, 3), 16)
  let G = parseInt(color.substring(3, 5), 16)
  let B = parseInt(color.substring(5, 7), 16)

  R = (R < 255) ? R : 255
  G = (G < 255) ? G : 255
  B = (B < 255) ? B : 255

  return `rgba(${R}, ${G}, ${B}, ${opacity})`
}

export const cloneCourse = (course) => {
  const clone = cloneDeep(course)
  clone.published = false
  clone.voucherActivated = false
  clone.name = course.name + ' – Copy'
  const replacedIdClone = replaceKeyDeep(clone, 'id', 'copyReference')
  const attributesToOmit = [
    'courseId',
    'moduleId',
    'lectureId',
    'workspaceId',
    'gamificationItems',
    'tags',
    'template',
    'paymentInformation',
    'uuid'
  ]
  return omitDeep(replacedIdClone, attributesToOmit)
}

export const omitDeep = (value, keys) => {
  if (Array.isArray(value)) {
    return value.map(i => omitDeep(i, keys))
  } else if (typeof value === 'object' && value !== null) {
    return Object.keys(value)
        .reduce(
            (newObject, k) => {
              if (keys.includes(k)) {
                return newObject
              }
              return Object.assign(
                  { [k]: omitDeep(value[k], keys) },
                  newObject
              )
            },
            {}
        )
  }
  return value
}

export const replaceKeyDeep = (value, oldKey, newKey) => {
  if (Array.isArray(value)) {
    return value.map(i => replaceKeyDeep(i, oldKey, newKey))
  } else if (typeof value === 'object' && value !== null) {
    return Object.keys(value)
      .reduce(
        (newObject, key) => {
          // If the key matches the one we want to replace
          const currentKey = key === oldKey ? newKey : key
          return {
            ...newObject,
            [currentKey]: replaceKeyDeep(value[key], oldKey, newKey)
          }
        },
        {}
      )
  }
  return value
}

export const fixHtml = (html) => {
  const div = document.createElement('div')
  div.innerHTML = html
  return div.textContent || div.textContent || ''
}

export const fixHtmlStyles = (html) => {
  const doc = new DOMParser().parseFromString(html, 'text/html')
  doc.body.querySelectorAll('*').forEach((el) => {
      for (const attr of [...el.attributes]) {
          el.removeAttribute(attr.name)
      }
  })
  return doc.body.innerHTML
}

export const shortenText = (text = '', maxSymbols = 120) => {
  if (text === null || text === undefined) {
    text = ''
  }
  // remove images
  text = text.replace(/<img[^>]*>/g, '')
  // remove emoji wrapper
  text = text.replace(/<span[^>]*>(.*?)<\/span>/g, '$1')

  if (text.length < maxSymbols) {
    return fixHtml(text)
  }
  text = text.substring(0, maxSymbols)

  if (text.slice(-1) === '/') {
    text = text.substring(0, text.length - 1)
  }
  if (text.slice(-1) === '<') {
    text = text.substring(0, text.length - 1)
  }
  return fixHtml(text + '...')
}

export const escapeQuotes = (text = '') => {
  return text.replace(/(^|[^\\])'/g, "$1\\'")
}

/**
 * Obfuscates a given text by replacing all characters with asterisks,
 * while preserving the lengths of words and spaces between them.
 * @param {string} text
 * @returns {string}
 */
export const obfuscateText = (text) => {
  if (!text) { return '' }

  return fixHtml(text).split('').map(char => (/\s/.test(char) ? char : '*')).join('')
}

/**
 * Calculates percentage based on the number of completed answers and total
 * @param {number} completed
 * @param {number} total
 * @returns {number}
 */
export const calcPercentage = (completed, total) => {
  if (!isFinite(total) && !isFinite(completed)) {
    return 0
  }
  let value = completed / total * 100
  if (value < 0) {
    value = 0
  }
  if (value > 100) {
    value = 100
  }
  if (!isFinite(value)) {
    return 0
  }
  return Math.round(value)
}

// https://oaidalleapiprodscus.blob.core.windows.net/private/org-ADgIZitRqtftvb2XJd6rV3DJ/user-aWj4Y2SuhjIgVAaK6Obhj7oQ/img-vFU56qypEBZUHFrsIdTibr3k.png?st=2023-01-15T21%3A23%3A17Z&se=2023-01-15T23%3A23%3A17Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-01-15T20%3A01%3A24Z&ske=2023-01-16T20%3A01%3A24Z&sks=b&skv=2021-08-06&sig=CShfiLZiJ464S259LRibKisYPRn1a/lb1CsTrSoNwDI%3D
export const isOpenAiImage = (url) => {
  if (!url) {
    return false
  }
  return url.includes('blob') && url.includes('.png') && url.includes('sig')
}

export const isImage = (url) => {
  if (!url) {
    return false
  }
  const path = url.split('?')[0]
  return isOpenAiImage(path) || (path.match(/\.(jpeg|jpg|gif|png|webp|svg)$/) !== null)
}

export const isGoogleDrive = (url) => {
  if (!url) {
    return false
  }
  return url.includes('drive.google.com')
}

export const lectureType = (lecture) => {
  const sections = lecture.sections
  const quiz = lecture.questionAnswers

  const hasQuiz = quiz && quiz.length > 0
  const hasText = some(sections, { type: TYPES.HTML }) || some(sections, { type: TYPES.TEXT })
  const hasVideos = lecture.mediaSource && lecture.mediaSource.length > 0 && !isImage(lecture.mediaSource)
  if (hasVideos && hasText && hasQuiz) {
    return LECTURE_TYPES.TEXT_VIDEO_QUIZ
  }
  if (!hasVideos && !hasText) {
    return LECTURE_TYPES.QUIZ
  }
  if (!hasText && hasVideos && hasQuiz) {
    return LECTURE_TYPES.VIDEO_QUIZ
  }
  if (!hasVideos && hasText && hasQuiz) {
    return LECTURE_TYPES.TEXT_QUIZ
  }
  if (hasVideos && !hasText && !hasQuiz) {
    return LECTURE_TYPES.VIDEO
  }
  if (!hasVideos && hasText && !hasQuiz) {
    return LECTURE_TYPES.TEXT
  }
}

/**
 * Takes the course and enriches it with useful information like stats, url for the lecture etc
 * @param {object} course
 * @returns {object}
 */
export const enrichCourse = (course) => {
  const enrichedCourse = course
  if (!enrichedCourse.metadata) {
    enrichedCourse.metadata = {}
  }
  if (enrichedCourse.customMetadata) {
    enrichedCourse.metadata = assign(enrichedCourse.metadata, JSON.parse(enrichedCourse.customMetadata))
  }
  if (enrichedCourse.course === null) {
    enrichedCourse.course = {
      modules: []
    }
  }
  // add status to the lecture
  const id = enrichedCourse.course ? enrichedCourse.course.id : enrichedCourse.id
  const paymentMissing = isPaymentMissing(enrichedCourse)
  let modules = enrichedCourse.course ? enrichedCourse.course.modules : enrichedCourse.modules
  let activeLecture = modules?.[0]?.lectures?.[0]
  const courseIsDone = enrichedCourse.course ? isCourseDone(enrichedCourse.course) : isCourseDone(enrichedCourse)
  const courseIsFinished = enrichedCourse.course ? enrichedCourse.course.finishTime !== null : enrichedCourse.finishTime !== null
  // add status to the lectures
  modules = map(modules, (module, moduleIndex) => {
    let lectures = module.lectures
    lectures = map(lectures, (lecture, lectureIndex) => {
      lecture.done = isLectureDone(lecture)
      lecture.read = isLectureRead(lecture)
      if (paymentMissing) {
        lecture.locked = true
      }
      lecture.url = `?lecture=${lecture.lectureId}&module=${module.moduleId}&completed=${courseIsFinished}#!${id}`
      // TODO replace when we implement the SSR
      // lecture.url = `${id}?lecture=${lecture.lectureId}&module=${module.moduleId}`
      lecture.lectureType = lectureType(lecture)
      if (lecture.visibilityExpression) {
        lecture.visibilityRules = expressionToJson(JSON.parse(lecture.visibilityExpression))
      }

      if (enrichedCourse?.sequential) {
        // Collect all lectures from previous modules
        const previousModulesLectures = modules
          .slice(0, moduleIndex)
          .flatMap(prevModule => prevModule.lectures.filter(l => l.visible))

        // Add all previous lectures from the current module
        const previousLecturesInCurrentModule = module.lectures
          .slice(0, lectureIndex)
          .filter(l => l.visible)

        const allPreviousLectures = [...previousModulesLectures, ...previousLecturesInCurrentModule]

        // Check if there are any uncompleted lectures among the previous ones
        const hasUndoneLectures = allPreviousLectures.some(l => !l.done)
        lecture.locked = hasUndoneLectures
      } else {
        lecture.locked = false
      }

      return lecture
    })

    const activeInModule = findLast(lectures, (lecture) => {
      return lecture.done
    })

    if (activeInModule) {
      activeLecture = activeInModule
    }

    module.done = isModuleDone(module)
    return module
  })
  if (enrichedCourse.course) {
    enrichedCourse.course.modules = modules
    enrichedCourse.course.courseImage = enrichedCourse.course.videoUrl || enrichedCourse.metadata.courseImage || `${HOSTS.COURSE_ASSETS}/${id}/cover.jpg`
    enrichedCourse.course.wideCoverUrl = enrichedCourse.course.wideCoverUrl || enrichedCourse.course.videoUrl || enrichedCourse.metadata.courseImage
    enrichedCourse.course.activeLecture = activeLecture
    enrichedCourse.course.gamificationItems = gamificationWithProgress(enrichedCourse.course)
    if (!enrichedCourse.course.startTime) {
      enrichedCourse.course.startTime = enrichedCourse.startTime
    }
    enrichedCourse.course.certificate = enrichedCourse.certificate
    enrichedCourse.course.userGamificationItems = enrichedCourse.gamificationItems
    enrichedCourse.course.dynamicContentHeight = enrichedCourse?.metadata?.dynamicContentHeight
    enrichedCourse.course.fixedContentHeight = enrichedCourse?.metadata?.fixedContentHeight
    enrichedCourse.course.lang = enrichedCourse?.metadata?.lang
    enrichedCourse.course.done = isCourseDone(enrichedCourse.course)
    enrichedCourse.course.completelyDone = isCourseCompletelyDone(enrichedCourse.course)
    enrichedCourse.course.failed = courseIsFailed(enrichedCourse.course)
    enrichedCourse.course.totalPoints = enrichedCourse.totalPoints
    enrichedCourse.course.correctPoints = enrichedCourse.correctPoints
    enrichedCourse.course.lectureSize = enrichedCourse.lectureSize
    enrichedCourse.course.lecturesSeen = enrichedCourse.lecturesSeen
    enrichedCourse.course.progress = progressCourse(enrichedCourse.course)
    enrichedCourse.course.lectureProgress = progressSeen(enrichedCourse)
    enrichedCourse.course.startTime = enrichedCourse.startTime
    enrichedCourse.course.finishTime = enrichedCourse.finishTime
    enrichedCourse.course.updateTime = enrichedCourse.updateTime
    enrichedCourse.course.progressStatus = enrichedCourse.progressStatus
    enrichedCourse.course.ordering = enrichedCourse.ordering
    enrichedCourse.course.archived = enrichedCourse.archived
    enrichedCourse.course.preEnrollDescription = enrichedCourse.preEnrollDescription
    enrichedCourse.course.preApproveEnrollment = enrichedCourse.preApproveEnrollment
    enrichedCourse.course.extra = enrichedCourse.extra
  } else {
    enrichedCourse.activeLecture = activeLecture
    enrichedCourse.gamificationItems = gamificationWithProgress(enrichedCourse)
    enrichedCourse.activeLecture = activeLecture
    enrichedCourse.modules = modules
    enrichedCourse.courseImage = enrichedCourse.videoUrl || enrichedCourse.metadata.courseImage || `${HOSTS.COURSE_ASSETS}/${id}/cover.jpg`
    enrichedCourse.wideCoverUrl = enrichedCourse.wideCoverUrl || enrichedCourse.videoUrl || enrichedCourse.metadata.courseImage
    enrichedCourse.dynamicContentHeight = enrichedCourse?.metadata?.dynamicContentHeight
    enrichedCourse.fixedContentHeight = enrichedCourse?.metadata?.fixedContentHeight
    enrichedCourse.lang = enrichedCourse?.metadata?.lang
    enrichedCourse.done = isCourseDone(enrichedCourse)
    enrichedCourse.completelyDone = isCourseCompletelyDone(enrichedCourse)
    enrichedCourse.failed = courseIsFailed(enrichedCourse)
    enrichedCourse.progress = progressCourse(enrichedCourse.course)
    enrichedCourse.lectureProgress = progressSeen(enrichedCourse)
  }
  return enrichedCourse
}

export const equalsIgnoreCase = (string1 = '', string2 = '') => {
  return string1.toLowerCase() === string2.toLowerCase()
}

export const parseZoomMeeting = (inviteText, locale) => {
  moment.locale(locale)
  const description = inviteText.replace(/^\s*[\r\n]/gm, '')
  const invitationParts = description.split(/\r?\n/)
  const localTime = getLocalTime(invitationParts[2])
  const diff = moment().diff(localTime, 'hours')
  return {
    description: inviteText,
    localTimeDateFormat: localTime.isValid() ? localTime.toDate() : '',
    localTimeInOneHourDateFormat: localTime.isValid() ? localTime.add(1, 'hour').toDate() : '',
    localTimeString: localTime.isValid() ? localTime.format('DD-MM-YYYY, hh:mm') : '',
    title: invitationParts[1],
    zoomUrl: invitationParts[4],
    meetingId: invitationParts[5],
    meetingPassword: invitationParts[6],
    fromNowString: localTime.isValid() ? localTime.fromNow() : '',
    notStarted: diff < 0,
    inProgress: diff > 0 && diff < 1,
    pastEvent: diff > 1
  }
}

export const getLocalTime = (zoomTime) => {
  let timeString = zoomTime
  timeString = timeString.replace('Time: ', '')
  const AM = timeString.includes('AM')
  let time = ''
  if (AM) {
    time = timeString.substring(0, timeString.indexOf('AM') + 2)
  } else {
    time = timeString.substring(0, timeString.indexOf('PM') + 2)
  }
  let timeZone = AM ? timeString.substr(timeString.indexOf('AM')) : timeString.substr(timeString.indexOf('PM'))
  timeZone = AM ? timeZone.replace('AM ', '') : timeZone.replace('PM ', '')
  timeZone = timeZone.trim()
  return moment.parseZone(moment(time).utcOffset(timeZone).toString()).local()
}

export const isZoomInvite = (text) => {
  const zoomReg = /us04web.zoom.us/
  return text.match(zoomReg) && text.split(/\r?\n/).length > 5
}

export const getGoogleDriveIdFromUrl = (url) => {
  return url.match(/[-\w]{25,}/)
}

export const imageUrl = (url) => {
  if (!url) {
    return ''
  }
  if (url.includes('drive.google.com')) {
    return transformGoogleDriveIntoImageUrl(url)
  }
  return url
}

export const transformGoogleDriveIntoImageUrl = (url) => {
  return `https://drive.google.com/thumbnail?id=${getGoogleDriveIdFromUrl(url)}&sz=w1000`
}

export const transformGoogleDriveIntoAudioUrl = (url) => {
  return `https://drive.google.com/uc?id=${getGoogleDriveIdFromUrl(url)}`
}

export const createHumanizedDuration = (duration, unit = 'm', lang = 'en') => {
  const durationMultiplierMap = {
    ms: 1,
    s: 1000,
    m: 60 * 1000,
    h: 60 * 1000 * 60
  }
  const durationInMs = duration * durationMultiplierMap[unit]

  return humanizeDuration(durationInMs, {
    language: lang,
    fallbacks: ['en'],
    round: true
  })
}

export const transformUuidForAnalytics = (uuid) => {
  let asciiString = ''
  let asciiStringWithoutZerous = ''
  forEach(uuid, (letter, index) => {
    asciiString += uuid.charCodeAt(index)
  })
  forEach(asciiString, (letter) => {
    if (letter !== '0') {
      asciiStringWithoutZerous += letter
    }
  })
  if (!asciiStringWithoutZerous) {
    return []
  }
  return [asciiStringWithoutZerous.substring(0, 3), asciiStringWithoutZerous.substring(3, 6)]
}

export const flatEnrichedLectures = (course, showInvisible = false) => {
  return flatten(map(course.modules, (module) => {
    const lectures = showInvisible ? module.lectures : filter(module.lectures, { visible: true })
    return map(lectures, (lecture) => {
      const lectureClone = cloneDeep(lecture)
      lectureClone.moduleStartDate = module.availableFromTime
      lectureClone.moduleName = module.name
      // TODO replace when SSR is done
      // lectureClone.url = `${course.id}?lecture=${lecture.lectureId}&module=${lecture.moduleId}`
      lectureClone.url = `?lecture=${lecture.lectureId}&module=${lecture.moduleId}#!${course.id}`
      return lectureClone
    })
  }))
}

export const flatLectures = (course) => {
  return flatten(map(course.modules, (module) => {
    return module.lectures || []
  }))
}

export const flatLectureWithModules = (course) => {
  return flatten(map(course.modules, (module) => {
    const lectures = module.lectures || []
    return map(lectures, (lecture) => {
      return {
        moduleName: module.name,
        ...lecture
      }
    })
  }))
}
/**
 * Returns flat lectures array with statistics like done, inprogress, notstarted, hidden. locked
 * @param course
 * @returns {(*&{inProgress, hidden: boolean, moduleName: *, notStarted, locked, done})[]}
 */
export const flatLectureWithModulesAndStats = (course) => {
  const lectures = flatLectureWithModules(course)
  return map(lectures, (lecture, index) => {
    const previousLecture = index !== 0 ? lectures[index - 1] : null
    const previousDone = previousLecture === null ? true : (previousLecture.doneTime !== null && previousLecture.correctPoints === previousLecture.totalPoints)
    return {
      moduleName: module.name,
      ...lecture,
      done: lecture.doneTime !== null && lecture.correctPoints === lecture.totalPoints,
      inProgress: lecture.doneTime !== null || lecture.correctPoints > 0,
      notStarted: lecture.doneTime === null && lecture.correctPoints === 0,
      hidden: lecture.visible === false,
      locked: course.sequential && (!previousDone)
    }
  })
}

export const flatQuestions = (course) => {
  const lectures = flatLectures(course)
  return flatten(map(lectures, (lecture) => {
    let questions = lecture.questionAnswers
    each(lecture.sections, (section) => {
      if (section.questionAnswers) {
        questions = questions.concat(section.questionAnswers)
      }
    })
    return questions
  }))
}

export const gamificationWithProgress = (course) => {
  const lectures = flatLectures(course)
  const questions = flatQuestions(course)
  return map(course.gamificationItems, (item) => {
    item.isDone = isDone(item, lectures, questions)
    return item
  })
}
export const isDone = (item, lectures, questions, rate) => {
  let done = false
  if (item['@type'] === GAMIFICATION_TYPES.LECTURES_COMPLETED) {
    done = every(item.lectureIds, (lectureId) => {
      const lecture = find(lectures, { lectureId })
      if (lecture) {
        return lecture.doneTime !== null
      }
      return false
    })
  } else if (item['@type'] === GAMIFICATION_TYPES.QUESTIONS_ANSWERED) {
    done = every(item.questionAnswerIds, (id) => {
      const question = find(questions, { id })
      if (question) {
        return question.correct === true
      }
      return false
    })
  } else if (item['@type'] === GAMIFICATION_TYPES.QUESTIONS_ANSWERED_RATE) {
    done = rate >= item.qaRate
  }
  return done
}
export const extractGamificationItemsFromCourse = (userCourse, currentCourse) => {
  const gamificationItems = userCourse.course.gamificationItems
  const userGamificationItems = userCourse.id === currentCourse.id ? currentCourse.userGamificationItems : userCourse.userGamificationItems
  return map(gamificationItems, (item) => {
    const result = assign({}, item)
    result.achieved = findIndex(userGamificationItems, { gamificationId: item.id }) > -1
    result.courseName = userCourse.course.name
    result.courseId = userCourse.course.id
    result.userCourseId = userCourse.id
    return result
  })
}
export const flatGamificationItems = (userCourses, currentCourse) => {
  const reorderedCourses = userCourses.slice(0)
  if (currentCourse && currentCourse.id) {
    const courseToReorder = remove(reorderedCourses, (course) => {
      return course.id === currentCourse.userCourseId
    })
    if (courseToReorder && courseToReorder.length) {
      reorderedCourses.unshift(courseToReorder[0])
    }
  }
  return reduce(reorderedCourses, (result, value, key) => {
    result = result.concat(extractGamificationItemsFromCourse(value, currentCourse))
    return result
  }, [])
}
export const errorCodes = (errorDescription) => {
  if (errorDescription.includes('locked')) {
    return errors.LOCKED
  }
}
export const userCourseToFriendlyJson = (userCourse, certificateUrl, locale = 'en') => {
  let progress = 0
  if (!userCourse.course.questionAnswersSize) {
    progress = 0
  } else {
    progress = userCourse.course.rightQuestionAnswers / userCourse.course.questionAnswersSize * 100
    if (progress < 0) {
      progress = 0
    }
    if (progress > 100) {
      progress = 100
    }
    progress = Math.round(progress)
  }

  return {
    name: userCourse.name,
    email: userCourse.username,
    startTime: formattedDate(userCourse.startTime, locale),
    finishTime: userCourse.finishTime ? formattedDate(userCourse.finishTime, locale) : '-',
    progress,
    certificate: userCourse.certificate && userCourse.certificate.uuid ? certificateUrl + userCourse.certificate.uuid : '-'
  }
}
export const userCoursesToFriendlyJson = (userCourses, certificateUrl) => {
  return map(userCourses, (userCourse) => {
   return userCourseToFriendlyJson(userCourse, certificateUrl)
  })
}
export const getUrlWithSize = (url, size = 640, actualSize = null) => {
  const re = /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i
  const match = url.match(re)
  if (!match) {
    return url
  }
  // Commenting this code until coming to the solution how to render the smaller images in the resource library
  if (actualSize && (Number(actualSize) < (size * size))) {
    return url
  }
  const ext = match[0]
  url = url.replace(re, `-${size}px${ext}`)
  return url
}
export const retrieveFileFormat = (file) => {
  if (!file) {
    return
  }
  const type = file.type
  if (type.includes('video')) {
    return FILE_FORMATS.VIDEO
  } else if (type.includes('image')) {
    return FILE_FORMATS.IMAGE
  } else if (type.includes('pdf')) {
    return FILE_FORMATS.PDF
  }
  return FILE_FORMATS.OTHER
}
export const getContentItem = (item, size) => {
  const result = assign(item)
  if (item.multiVersion) {
    result.url = getUrlWithSize(item.url, size, item.fileSize)
  }
  if (IMAGE_FILE_TYPES.includes(item.type)) {
    result.html = `<img width="100%" src="${result.url}" />`
  } else if (item.type === FILE_TYPES.MP3) {
    result.html = `<audio controls>
                    <source src="${result.url}" type="audio/mpeg" />
                    Your browser does not support the audio element.
                   </audio>`
  } else {
    result.html = `<a href="${result.url}" target="_blank">${item.name}</a>`
  }
  return result
}
export const getFileNameWithoutExtension = (fileName) => {
  return fileName.replace(/\.[^/.]+$/, '')
}
export const getFileExtension = (fileName) => {
  return fileName.split('.').pop()
}
export const extractWorkspaceNameFromHost = (host) => {
  if (!host || !host.includes('.')) {
    return ''
  }
  return host.split('.')[0]
}
export const daysLeft = (limit = 30, fromDate) => {
  const dateCreated = fromDate || moment().valueOf()
  const daysPassed = moment().diff(moment(dateCreated), 'days')
  let days = limit - daysPassed
  if (days <= 0) {
    days = 0
  }
  return days
}
export const answersProgressText = (right = 0, total = 0) => {
  if (!total) {
    return null
  }
  if (!isFinite(right)) {
    right = 0
  }
  if (!isFinite(total)) {
    total = 100
  }
  let value = right / total * 100
  if (value < 0) {
    value = 0
  }
  if (value > 100) {
    value = 100
  }
  return `${Math.round(value)}% (${right}/${total})`
}
/**
 * Generic method to return a proportion between two numbers in percentage and showing the text in the parenthesis
 * @param ratio
 * @param total
 * @returns {string|null}
 */
export const ratioInPercentageText = (ratio, total) => {
  const result = ratioInPercentage(ratio, total)
  if (result === null) {
    return null
  }
  return `${result}% (${ratio}/${total})`
}
export const ratioInPercentage = (ratio, total) => {
  if (!isFinite(ratio) || !isFinite(total) || total === 0) {
    return null
  }
  let value = ratio / total * 100
  if (value < 0) {
    value = 0
  }
  if (value > 100) {
    value = 100
  }
  return Math.floor(value)
}
export const getIconForLiveLecture = (liveLink) => {
  if (liveLink?.includes(liveMeetingsPlatforms.ZOOM)) {
    return '$vuetify.icons.zoomIcon'
  } else if (liveLink?.includes(liveMeetingsPlatforms.GOOGLE_MEET)) {
    return '$vuetify.icons.meetIcon'
  } else if (liveLink?.includes(liveMeetingsPlatforms.YOUTUBE)) {
    return '$vuetify.icons.youtubeIcon'
  } else if (liveLink?.includes(liveMeetingsPlatforms.MS_TEAMS)) {
    return '$vuetify.icons.teamsIcon'
  }
  return 'mdi-link-variant'
}

export const removeSpacesAndLowerCase = (aString = '') => {
  const result = aString.replace(/ /g, '')
  return result.toLowerCase()
}

export const pathContainsLangCode = (path = '', codes = []) => {
  return some(codes, (code) => {
    return startsWith(path, `/${code}/`)
  })
}

export const detectUrlLang = (path = '', codes = []) => {
  return find(codes, (code) => {
    return startsWith(path, `/${code}/`)
  }) || null
}

export const removeLangCode = (path = '', codes = []) => {
  let newPath = path
  each(codes, (code) => {
    if (startsWith(path, `/${code}/`)) {
      newPath = newPath.replace(`/${code}`, '')
      return false
    }
  })
  return newPath !== '' ? newPath : path
}

export const checkImage = (imgUrl, onOk, onNotOk) => {
  const img = new Image()
  img.onload = onOk
  img.onerror = onNotOk
  img.src = imgUrl
}

export const buildURL = (baseURL = '', queryObject = {}, excludeParams = []) => {
  const url = new URL(baseURL)
  forEach(queryObject, (val, key) => {
    if (!excludeParams.includes(key)) {
      url.searchParams.append(key, val)
    }
  })
  return url
}

export const LOREM_IPSUM = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, ' +
  'sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, ' +
  'sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. ' +
  'Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. ' +
  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod ' +
  'tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ' +
  'At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, ' +
  'no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, ' +
  'consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore ' +
  'magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. ' +
  'Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'

export const INSIDE_MAIN_COURSE_PAGE = ['/courses/course']
export const INSIDE_COURSE_ROUTES = ['dashboard/course', '/courses/course', 'courseware']
export const INSIDE_LECTURE_ROUTES = ['courseware']
export const INSIDE_ADMIN_AREA_ROUTES = ['/admin']
export const EDITABLE_ROUTES = ['dashboard', 'courseware']
export const INSIDE_FORUM_ROUTES = ['/forum']

// REPLACE everything in JSON
export const addOrUpdateCacheBuster = (url) => {
  const timestamp = new Date().getTime()
  if (url.includes('?')) {
    // Check if 'ts' parameter is present
    if (url.match(/(\?|&)ts=\d+/)) {
      // Replace existing 'ts' parameter
      return url.replace(/(\?|&)ts=\d+/, `$1ts=${timestamp}`)
    } else {
      // Append 'ts' parameter
      return `${url}&ts=${timestamp}`
    }
  } else {
    // Add 'ts' parameter
    return `${url}?ts=${timestamp}`
  }
}

export const updateURLs = (obj, base) => {
  const extension = base.match(/\.\w+$/)[0] // Extract the file extension from the base URL
  let baseRegexEscaped = base.substring(0, base.indexOf(extension))
  baseRegexEscaped = baseRegexEscaped.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const regex = new RegExp(`${baseRegexEscaped}(-\\d+px)?(${extension})(\\?.*)?`, 'g')
  updateURLsInObject(obj, regex)
}
export const updateURLsInObject = (obj, baseRegex) => {
  if (typeof obj === 'object' && obj !== null) {
    for (const key in obj) {
      if (typeof obj[key] === 'string' && baseRegex.test(obj[key])) {
        try {
          // Check if the string is JSON and has URL
          const parsedJson = JSON.parse(obj[key])
          updateURLsInObject(parsedJson, baseRegex) // Update URLs in the parsed JSON
          obj[key] = JSON.stringify(parsedJson) // Convert back to string
        } catch (e) {
          obj[key] = addOrUpdateCacheBuster(obj[key])
        }
        // Replace URL with updated cache buster
      } else if (typeof obj[key] === 'object' && obj[key] !== null) {
        // Recursively update URLs in nested objects
        updateURLsInObject(obj[key], baseRegex)
      }
    }
  }
}

export const isDevEnvironment = () => {
  return process.env.SMONLEAP_ENVIRONMENT === 'dev'
}
// ASSETS URLS - WORKSPACE ASSETS URL
export const workspaceAssetsURL = (profile, workspace) => {
  const isDev = isDevEnvironment()
  const host = (process.client) ? location.host : ''
  const profileName = profile.name || host.replace(/\./g, '_')
  const uuid = workspace.uuid
  if (uuid && uuid !== 'local') {
    return isDev ? HOSTS.DEV_WORKSPACE_ASSETS_V2(uuid) : HOSTS.WORKSPACE_ASSETS_V2(uuid)
  }
  return isDev ? `${HOSTS.DEV_WORKSPACE_ASSETS}/${profileName}` : `${HOSTS.WORKSPACE_ASSETS}/${profileName}`
}
// ASSETS URLS - COURSE ASSETS URL
export const coursesAssetsURL = (workspace) => {
  const isDev = isDevEnvironment()
  const uuid = workspace.uuid
  if (uuid) {
    return isDev ? HOSTS.DEV_COURSE_ASSETS_V2(uuid) : HOSTS.COURSE_ASSETS_V2(uuid)
  }
  return isDev ? HOSTS.DEV_COURSE_ASSETS : HOSTS.COURSE_ASSETS
}

export const createUserCourseUrl = (
  baseUrl = '',
  umbrellaCourse = false,
  userCourseId = null,
  learningPathId = null,
  learningPathName = '',
  completed = false,
  courseId = null,
  moduleId = null
  ) => {
  let url = baseUrl
  if (umbrellaCourse) {
    url += '?umbrella=true&'
  }
  if (userCourseId) {
    url += url.endsWith('&') ? '' : '?'
    url += `userCourseId=${userCourseId}&`
  }
  if (learningPathId) {
    url += url.endsWith('&') ? '' : '?'
    url += `learningPathId=${learningPathId}&learningPathName=${learningPathName}`
  }
  if (completed) {
    url += url.endsWith('&') ? '' : '?'
    url += 'completed=true'
  }
  if (moduleId) {
    url += url.endsWith('&') ? '' : '?'
    url += `moduleId=${moduleId}`
  }
  url += `#!${courseId}`
  return url
}

// FORCE SAVE ERROR MESSAGE
export const getForceSaveErrorMessage = (error, name, $t = key => key) => {
  const forceUpdateAvailable = error?.extra?.forceUpdateAvailable
  const errorCode = error?.code
  if (forceUpdateAvailable) {
    return FORCE_SAVE_ERRORS[errorCode]
    ? $t(`toast.forceSaveError.${FORCE_SAVE_ERRORS[errorCode]}`)
    : $t('toast.forceSaveError.DEFAULT')
  }
  return $t('toast.defaultSaveError', { name })
}

// ENRICH SECTION QUESTION ANSWERS
export const enrichQuestionAnswers = (course) => {
  const map = new Map()

  for (const module of course.modules || []) {
    for (const lecture of module.lectures || []) {
      for (const section of lecture.sections || []) {
        for (const q of section.questionAnswers || []) {
          map.set(q.id, {
            lectureId: lecture.lectureId,
            path: {
              moduleId: module.moduleId,
              moduleName: module.name,
              lecture: {
                lectureId: lecture.lectureId,
                lectureName: lecture.name
              }
            }
          })
        }
      }
    }
  }

  return map
}
