/*
 * timeUtils.js
 * The copyright of this file belongs to Workademy GmbH. The file cannot be
 * reproduced in whole or in part, stored in a retrieval system, transmitted
 * in any form, or by any means electronic, mechanical, or otherwise, without
 * the prior permission of the owner. Please refer to the terms of the license
 * agreement.
 *
 * (c) 2021 Workademy GmbH, Rights Reserved.
 *
 * olga
 * 30/07/2021, 23:27
 */
import moment from 'moment'
import FORMATTING_BY_LOCATION, { FORMATTED_DATE_BY_LOCATION_WITHOUT_TIME } from '~/enums/locationDateFormatting'
export const localTime = (timestamp) => {
  return moment(timestamp, 'DD/MM/YYYY hh:mm').toLocaleString()
}
export const durationInHours = (ts1, ts2) => {
  const moment1 = moment(ts1)
  const moment2 = moment(ts2)
  return moment1.diff(moment2, 'hours')
}
export const expired = (ts) => {
  return moment().diff(ts, 'minutes') >= 0
}
export const inProgress = (ts1, ts2) => {
  // Add 10 minutes grace period before and after
  const startWithGrace = moment(ts1).subtract(10, 'minutes')
  const endWithGrace = moment(ts2).add(1, 'minutes')

  // Check if the given timestamp is between the adjusted timestamps
  return moment().isBetween(startWithGrace, endWithGrace, null, '[]')
}
export const fromNow = (ts, locale) => {
  moment.locale(locale)
  return moment(ts).fromNow()
}
export const localTimeToDate = (ts) => {
  return moment(ts).toDate()
}
export const notStarted = (ts) => {
  return moment(ts).diff(moment()) > 0
}
export const formattedDate = (ts, locale = 'en', withTime = true) => {
  const formatter = withTime ? FORMATTING_BY_LOCATION[locale] : FORMATTED_DATE_BY_LOCATION_WITHOUT_TIME[locale]
  return moment(ts).format(formatter)
}
