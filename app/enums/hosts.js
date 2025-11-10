/*
 * hosts.js
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

const CLOUDFRONT_URL = 'https://d18lcb7860whbu.cloudfront.net'
const S3_URL = 'https://smonleap-assets-production.s3.eu-central-1.amazonaws.com'
const DEV_URL = '/workspaces-assets'

export default {
  COURSE_ASSETS: `${CLOUDFRONT_URL}/course-assets`,
  COURSE_ASSETS_V2: uuid => `${CLOUDFRONT_URL}/workspaces/${uuid}/courses`,
  LEARNINGPATH_ASSETS: `${CLOUDFRONT_URL}/learningpath-assets`,
  LEARNINGPATH_ASSETS_V2: uuid => `${CLOUDFRONT_URL}/workspaces/${uuid}/learningpaths`,
  WORKSPACE_ASSETS: `${CLOUDFRONT_URL}/workspace-assets`,
  WORKSPACE_ASSETS_V2: uuid => `${CLOUDFRONT_URL}/workspaces/${uuid}/assets`,
  PRODUCTION_COURSE_ASSETS: `${CLOUDFRONT_URL}/course-assets`,
  PRODUCTION_WORKSPACE_ASSETS: `${CLOUDFRONT_URL}/workspace-assets`,
  DEV_COURSE_ASSETS: `${DEV_URL}/course-assets`,
  DEV_LEARNINGPATH_ASSETS: `${DEV_URL}/learningpath-assets`,
  DEV_WORKSPACE_ASSETS: `${DEV_URL}/workspace-assets`,
  DEV_COURSE_ASSETS_V2: uuid => `${DEV_URL}/workspaces/${uuid}/courses`,
  DEV_LEARNINGPATH_ASSETS_V2: uuid => `${DEV_URL}/workspaces/${uuid}/learningpaths`,
  DEV_WORKSPACE_ASSETS_V2: uuid => `${DEV_URL}/workspaces/${uuid}/assets`,
  LP_ASSETS: '/lp-assets',
  CLOUDFRONT_URL,
  S3_URL
}
