/*
 * roles.js
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
  STUDENT: 'ROLE_STUDENT',
  ADMIN: 'ROLE_ADMIN',
  COURSE_ADMIN: 'ROLE_COURSE_ADMIN',
  COURSE_EDITOR: 'ROLE_COURSE_EDITOR',
  VOUCHER_ADMIN: 'ROLE_VOUCHER_ADMIN',
  FILE_UPLOAD: 'ROLE_FILE_UPLOAD',
  INTEGRATIONS_MANAGER: 'ROLE_INTEGRATIONS_MANAGER'
}

export const mapPermissions = {
  COURSE_ADMIN: 'createCourse',
  COURSE_EDITOR: 'editCourse',
  VOUCHER_ADMIN: 'createVoucher',
  FILE_UPLOAD: 'fileManager',
  INTEGRATIONS_MANAGER: 'integrationsManager',
  ADMIN: 'admin'
}
