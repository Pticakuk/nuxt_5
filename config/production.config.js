/*
 * production.config.js
 * The copyright of this file belongs to Workademy GmbH. The file cannot be
 * reproduced in whole or in part, stored in a retrieval system, transmitted
 * in any form, or by any means electronic, mechanical, or otherwise, without
 * the prior permission of the owner. Please refer to the terms of the license
 * agreement.
 *
 * (c) 2020 Workademy GmbH, Rights Reserved.
 *
 * olga
 * 04/08/2020, 10:24
 */
import HOSTS from '../app/enums/hosts'

export default {
  environment: 'production',
  googleAuthRedirect: 'https://app.theworkademy.com/login/gauth/',
  googleAuthComeBackUri: 'https://app.theworkademy.com/signin/',
  ripplingAuthComeBackUri: 'https://app.theworkademy.com/signin/',
  ripplingAuthRedirect: 'https://app.rippling.com/oidc/v1/authorize',
  ripplingClientId: 'V8HAJJNZvjvea5KiTRjPKi7mzxTbwgyQdvb9gMaS',
  deelAuthRedirect: 'https://auth.letsdeel.com/oauth2/authorize',
  deelClientId: '06cafc5c-c4c4-44b3-971b-e1c837f9054d',
  deelAuthComeBackUri: 'https://app.theworkademy.com/sso/deel/',
  ocIdRedirectUri: '/settings/',
  facebookAppId: '537146537198421',
  lpAssetsUrl: '/lp-assets',
  googleAnalyticsTrackingId: 'UA-184762724-1',
  gtmTrackingId: '',
  dev: false,
  workspaceAssets: HOSTS.PRODUCTION_WORKSPACE_ASSETS,
  courseAssets: HOSTS.PRODUCTION_COURSE_ASSETS,
  disqus: 'workademy',
  feedbackFormId: 'NO6pDrNo'
}
