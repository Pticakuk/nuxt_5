export const NOTIFICATION_STATUSES = {
  INACTIVE: 'inactiveUserCourses',
  BLOCKED: 'blockedUser',
  RUNNING: 'running',
  FINISHED: 'finished',
  ARCHIVED: 'archived',
  ABANDONED: 'abandoned'
}

export const NOTIFICATION_BADGES = {
  INACTIVE: {
    color: 'warning',
    label: NOTIFICATION_STATUSES.INACTIVE
  },
  BLOCKED: {
    color: 'error',
    label: NOTIFICATION_STATUSES.BLOCKED
  },
  RUNNING: {
    color: 'primary',
    label: NOTIFICATION_STATUSES.RUNNING
  },
  FINISHED: {
    color: 'success',
    label: NOTIFICATION_STATUSES.FINISHED
  },
  ARCHIVED: {
    color: 'warning',
    label: NOTIFICATION_STATUSES.ARCHIVED
  },
  ABANDONED: {
    color: 'error',
    label: NOTIFICATION_STATUSES.ABANDONED
  }
}

export const USER_NOTIFICATIONS_MAPPING = {
  INACTIVE_USER_COURSES: 'INACTIVE',
  BLOCKED_USER: 'BLOCKED'
}
