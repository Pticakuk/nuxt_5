/*
 * aggregationTypes.js
 * The copyright of this file belongs to Workademy GmbH. The file cannot be
 * reproduced in whole or in part, stored in a retrieval system, transmitted
 * in any form, or by any means electronic, mechanical, or otherwise, without
 * the prior permission of the owner. Please refer to the terms of the license
 * agreement.
 *
 * (c) 2021 Workademy GmbH, Rights Reserved.
 *
 * olga
 * 18/04/2021, 23:03
 */

export default {
  YEAR: 'YEAR',
  MONTH: 'MONTH',
  DAY: 'DAY',
  HOUR: 'HOUR'
}

export const AGGREGATION_FACTS = {
  LECTURE: 'Lectures',
  CERTIFICATE: 'Certificates',
  USERCOURSE: 'Usercourses',
  QUESTIONANSWER: 'Questionanswers',
  WORKSPACEUSERS: 'WorkspaceUsers',
  CAMPAIGNS: 'Campaigns',
  MODULES: 'Modules'
}

export const ANALYTICS_INTERVALS = {
  YESTERDAY: 'YESTERDAY',
  LAST24H: 'LAST24H',
  LASTWEEK: 'LASTWEEK',
  PREVIOUS7DAYS: 'PREVIOUS7DAYS',
  LASTMONTH: 'LASTMONTH',
  PREVIOUS30DAYS: 'PREVIOUS30DAYS',
  LASTYEAR: 'LASTYEAR',
  PREVIOUS365DAYS: 'PREVIOUS365DAYS',
  CUSTOM: 'CUSTOM'
}

export const LEARNING_PATH_INTERVALS = {
  PREVIOUS7DAYS: 'PREVIOUS7DAYS',
  PREVIOUS30DAYS: 'PREVIOUS30DAYS',
  LAST3MONTHS: 'LAST3MONTHS',
  LAST6MONTHS: 'LAST6MONTHS',
  LASTYEAR: 'LASTYEAR'
}

export const ANALYTICS_ICONS = {
  YESTERDAY: 'mdi-calendar-today',
  LAST24H: 'mdi-hours-24',
  LASTWEEK: 'mdi-calendar-week-begin',
  PREVIOUS7DAYS: 'mdi-calendar-week',
  LASTMONTH: 'mdi-calendar-month-outline',
  PREVIOUS30DAYS: 'mdi-calendar-range-outline',
  LASTYEAR: 'mdi-calendar-star',
  PREVIOUS365DAYS: 'mdi-calendar-text',
  CUSTOM: 'mdi-gesture'
}

export const COURSE_MILESTONES = {
  COURSE_STARTED: 'COURSE_STARTED'
}
