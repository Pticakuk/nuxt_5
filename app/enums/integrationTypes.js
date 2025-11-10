/*
 * integrationTypes.js
 * The copyright of this file belongs to Workademy GmbH. The file cannot be
 * reproduced in whole or in part, stored in a retrieval system, transmitted
 * in any form, or by any means electronic, mechanical, or otherwise, without
 * the prior permission of the owner. Please refer to the terms of the license
 * agreement.
 *
 * (c) 2021 Workademy GmbH, Rights Reserved.
 *
 * olga
 * 25/05/2021, 23:12
 */
export const CATEGORIES_FILTER = {
  HR: 'HR',
  CONTENT: 'CONTENT',
  PAYMENT: 'PAYMENT',
  SOCIAL: 'SOCIAL',
  CRM: 'CRM'
}
export const CATEGORIES = {
  HR: 'HR',
  CONTENT: 'CONTENT',
  PAYMENT: 'PAYMENT',
  DEV: 'DEV',
  SOCIAL: 'SOCIAL',
  CRM: 'CRM',
  DEFAULT: 'DEFAULT'
}
export default {
  personio: {
    type: 'PERSONIO',
    name: 'Personio',
    category: CATEGORIES.HR
  },
  oauth2: {
    type: 'OAUTH2',
    name: 'Custom OAuth2',
    category: CATEGORIES.DEV
  },
  bamboo_hr: {
    type: 'BAMBOO_HR',
    name: 'BambooHR',
    category: CATEGORIES.HR
  },
  push_notification: {
    type: 'PUSH_NOTIFICATION',
    name: 'Webhooks',
    category: CATEGORIES.DEV
  },
  loom: {
    type: 'LOOM',
    name: 'Loom',
    category: CATEGORIES.CONTENT
  },
  disqus: {
    type: 'DISQUS',
    name: 'Disqus',
    category: CATEGORIES.SOCIAL
  },
  stripe: {
    type: 'STRIPE',
    name: 'Stripe',
    category: CATEGORIES.PAYMENT
  },
  open_ai: {
    type: 'OPEN_AI',
    name: 'Open AI',
    category: CATEGORIES.CONTENT
  },
  people_force: {
    type: 'PEOPLE_FORCE',
    name: 'PeopleForce',
    category: CATEGORIES.HR
  },
  rippling: {
    type: 'RIPPLING',
    name: 'Rippling',
    category: CATEGORIES.HR
  },
  liqpay: {
    type: 'LIQPAY',
    name: 'LiqPay',
    category: CATEGORIES.PAYMENT
  },
  deel: {
    type: 'DEEL',
    name: 'Deel',
    category: CATEGORIES.HR
  },
  monobank: {
    type: 'MONOBANK',
    name: 'Monobank',
    category: CATEGORIES.PAYMENT
  },
  hi_bob: {
    type: 'HI_BOB',
    name: 'HiBob',
    category: CATEGORIES.HR
  },
  sage: {
    type: 'SAGE',
    name: 'Sage',
    category: CATEGORIES.HR
  },
  alexis_hr: {
    type: 'ALEXIS_HR',
    name: 'Alexis',
    category: CATEGORIES.HR
  },
  revolut: {
    type: 'REVOLUT',
    name: 'Revolut',
    category: CATEGORIES.PAYMENT
  },
  brevo: {
    type: 'BREVO',
    name: 'Brevo',
    category: CATEGORIES.CRM
  },
  intercom: {
    type: 'INTERCOM',
    name: 'Intercom',
    category: CATEGORIES.CRM
  },
  salesforce_mc: {
    type: 'SALESFORCE_MC',
    name: 'Salesforce Marketing Cloud',
    category: CATEGORIES.CRM
  }
}

export const SOURCE_MAPPING = {
  PEOPLE_FORCE: 'PeopleForce',
  PERSONIO: 'Personio',
  RIPPLING: 'Rippling',
  DEEL: 'Deel',
  HI_BOB: 'HiBob',
  ALEXIS_HR: 'Alexis',
  SAGE: 'Sage'
}
// Check course progress (learner) -> check_user_courses_notification_event
// New open-ended answer (admin) -> new_open_ended_question_answered_event
// New open-ended question graded (learner) -> new_open_ended_question_graded_event
// Enrollment pending (admin) -> pending_user_course_approval_event
// New user registered (any) -> registration_event
// Reset Password Requested (any) -> reset_password_event
// New course assignment (learner) -> user_course_assigned_event
// New learning path assignment (learner) -> user_learning_path_assigned_event
// Invitation to join workspace (any) -> workspace_invitation_event
export const BREVO_TEMPLATE_AUDIENCE = {
  LEARNER: 'learner',
  ADMIN: 'admin',
  ANY: 'any'
}
export const BREVO_TEMPLATE_MAPPING = [
  {
    key: 'check_user_courses_notification_event',
    audience: BREVO_TEMPLATE_AUDIENCE.LEARNER
  },
  {
    key: 'new_open_ended_question_answered_event',
    audience: BREVO_TEMPLATE_AUDIENCE.ADMIN
  },
  {
    key: 'new_open_ended_question_graded_event',
    audience: BREVO_TEMPLATE_AUDIENCE.LEARNER
  },
  {
    key: 'pending_user_course_approval_event',
    audience: BREVO_TEMPLATE_AUDIENCE.ADMIN
  },
  {
    key: 'registration_event',
    audience: BREVO_TEMPLATE_AUDIENCE.ANY
  },
  {
    key: 'reset_password_event',
    audience: BREVO_TEMPLATE_AUDIENCE.ANY
  },
  {
    key: 'user_course_assigned_event',
    audience: BREVO_TEMPLATE_AUDIENCE.LEARNER
  },
  {
    key: 'user_learning_path_assigned_event',
    audience: BREVO_TEMPLATE_AUDIENCE.LEARNER
  },
  {
    key: 'workspace_invitation_event',
    audience: BREVO_TEMPLATE_AUDIENCE.ANY
  }
]

export const SALESFORCE_TEMPLATE_MAPPING = [
  {
    key: 'welcome_to_course_event'
  }
]
