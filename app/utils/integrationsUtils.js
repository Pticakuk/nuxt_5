/*
 * integrationsUtils.js
 * The copyright of this file belongs to Workademy GmbH. The file cannot be
 * reproduced in whole or in part, stored in a retrieval system, transmitted
 * in any form, or by any means electronic, mechanical, or otherwise, without
 * the prior permission of the owner. Please refer to the terms of the license
 * agreement.
 *
 * (c) 2021 Workademy GmbH, Rights Reserved.
 *
 * olga
 * 31/08/2021, 18:23
 */
import integrationTypes, { CATEGORIES } from '~/enums/integrationTypes'

export const getUnderscoredName = (integration) => {
  if (!integration) {
    return ''
  }
  let name = integration?.name
  if (!name) {
    name = integration['@type']
  }
  return name.replace(/ /g, '_')
}
export const getUpperCaseName = (integration) => {
  return getUnderscoredName(integration).toUpperCase()
}
export const getType = (integration) => {
  // remove when backend fixed
  if (integration['@type'] === 'IntegrationV1Dto$BrevoIntegrationV1Dto') {
    return 'BREVO'
  }
  return integration['@type']
}
export const getLowerCaseName = (integration) => {
  return getType(integration)?.toLowerCase()
}
export const isPersonio = (integration) => {
  const type = getType(integration)
  return type === integrationTypes.personio.type
}
export const isBambooHR = (integration) => {
  const type = getType(integration)
  return type === integrationTypes.bamboo_hr.type
}
export const isSage = (integration) => {
  const type = getType(integration)
  return type === integrationTypes.sage.type
}
export const isCustomOauth = (integration) => {
  const type = getType(integration)
  return type === integrationTypes.oauth2.type
}
export const isPushNotifications = (integration) => {
  const type = getType(integration)
  return type === integrationTypes.push_notification.type
}
export const isLoom = (integration) => {
  const type = getType(integration)
  return type === integrationTypes.loom.type
}
export const isDisqus = (integration) => {
  const type = getType(integration)
  return type === integrationTypes.disqus.type
}
export const isStripe = (integration) => {
  const type = getType(integration)
  return type === integrationTypes.stripe.type
}

export const isOpenAi = (integration) => {
  const type = getType(integration)
  return type === integrationTypes.open_ai.type
}

export const isPeopleForce = (integration) => {
  const type = getType(integration)
  return type === integrationTypes.people_force.type
}

export const isRippling = (integration) => {
  const type = getType(integration)
  return type === integrationTypes.rippling.type
}

export const isLiqpay = (integration) => {
  const type = getType(integration)
  return type === integrationTypes.liqpay.type
}

export const isDeel = (integration) => {
  const type = getType(integration)
  return type === integrationTypes.deel.type
}

export const isMonobank = (integration) => {
  const type = getType(integration)
  return type === integrationTypes.monobank.type
}

export const isHiBob = (integration) => {
  const type = getType(integration)
  return type === integrationTypes.hi_bob.type
}

export const isAlexisHr = (integration) => {
  const type = getType(integration)
  return type === integrationTypes.alexis_hr.type
}

export const isRevolut = (integration) => {
  const type = getType(integration)
  return type === integrationTypes.revolut.type
}

export const isBrevo = (integration) => {
  const type = getType(integration)
  return type === integrationTypes.brevo.type
}

export const isIntercom = (integration) => {
  const type = getType(integration)
  return type === integrationTypes.intercom.type
}
export const isSalesforceMc = (integration) => {
  const type = getType(integration)
  return type === integrationTypes.salesforce_mc.type
}

export const getIntegrationCategory = (integration) => {
  const type = getLowerCaseName(integration)
  return integrationTypes[type]?.category || CATEGORIES.DEFAULT
}
