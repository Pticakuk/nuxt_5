const COMPLETED_STATUS = 'completed'
const PASSED_STATUS = 'passed'
const LESSON_STATUS_EVENT = 'cmi.core.lesson_status'
const COMPLETED_STATUS_EVENT = 'cmi.completion_status'
const SUCCESS_STATUS_EVENT = 'cmi.success_status'
const SUSPEND_DATA_EVENT = 'cmi.suspend_data'

export const LESSON_EVENTS = [LESSON_STATUS_EVENT, COMPLETED_STATUS_EVENT, SUCCESS_STATUS_EVENT]
export const COMPLETED_STATUSES = [COMPLETED_STATUS, PASSED_STATUS]
export const SUSPEND_DATA = SUSPEND_DATA_EVENT
