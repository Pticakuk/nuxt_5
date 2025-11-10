/*
 * status.js
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
  TODO: 'TODO',
  IN_PROGRESS: 'IN_PROGRESS',
  DONE: 'DONE'
}

export const COURSE_EDITING_STATUSES = {
  LOCKED_BY_ANOTHER_USER: 'LOCKED_BY_ANOTHER_USER',
  LOCKED: 'LOCKED'
}

export const COURSE_STATUSES = {
  LOCKED: 'LOCKED',
  DONE: 'DONE',
  ACTIVE: 'ACTIVE',
  TOSTART: 'TOSTART',
  EXPIRED: 'EXPIRED',
  PAYMENT_MISSING: 'PAYMENT_MISSING',
  APPROVAL_PENDING: 'APPROVAL_PENDING',
  OK: 'OK'
}

export const LEARNING_PATHS_STATUSES = {
  FINISHED: 'FINISHED',
  RUNNING: 'RUNNING'
}

export const OPERATIONS_STATUSES = {
  FINISHED: 'FINISHED',
  PROGRESSING: 'PROGRESSING',
  SCHEDULED: 'SCHEDULED',
  FAILED: 'FAILED'
}

export const COURSES_TO_SHOW_STATUSES = {
  ALL: 'ALL',
  ACTIVE: 'ACTIVE',
  FINISHED: 'FINISHED'
}
