/*
 * sectionsUtils.js
 * The copyright of this file belongs to Workademy GmbH. The file cannot be
 * reproduced in whole or in part, stored in a retrieval system, transmitted
 * in any form, or by any means electronic, mechanical, or otherwise, without
 * the prior permission of the owner. Please refer to the terms of the license
 * agreement.
 *
 * (c) 2020 Workademy GmbH, Rights Reserved.
 *
 * olga
 * 18/08/2020, 19:57
 */
import TYPES, { SECTION_TYPES } from '../enums/types'

export const isJSONType = (section: any) => {
  return section[TYPES.TYPE] === SECTION_TYPES.JSON
}

export const isBranchSection = (section: any) => {
  if (!isJSONType(section)) {
    return false
  }
  const jsonContent = JSON.parse(section.json)
  return jsonContent && jsonContent.type === SECTION_TYPES.BRANCH
}
