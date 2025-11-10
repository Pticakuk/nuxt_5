/*
 * staging.config.js
 * The copyright of this file belongs to Workademy GmbH. The file cannot be
 * reproduced in whole or in part, stored in a retrieval system, transmitted
 * in any form, or by any means electronic, mechanical, or otherwise, without
 * the prior permission of the owner. Please refer to the terms of the license
 * agreement.
 *
 * (c) 2020 Workademy GmbH, Rights Reserved.
 *
 * olga
 * 04/08/2020, 10:25
 */

import HOSTS from '../app/enums/hosts'

export default {
  environment: 'test',
  googleAuthRedirect: '/login/gauth',
  googleAuthComeBackUri: 'https://dev.theworkademy.com/signin/',
  ripplingAuthComeBackUri: 'https://dev.theworkademy.com/signin/',
  ripplingAuthRedirect: 'https://app.ripplingsandbox.com/oidc/v1/authorize',
  ripplingClientId: 'SjhOQjiZqz8uhnzKgb3TXx3cX79o10kQw8wZPQFv',
  deelAuthRedirect: 'https://auth-demo.letsdeel.com/oauth2/authorize',
  deelClientId: '06d44c92-c449-40ad-ba8d-2a98caa9929d',
  deelAuthComeBackUri: 'https://dev.theworkademy.com/sso/deel/',
  facebookAppId: '537146537198421',
  lpAssetsUrl: '/lp-assets',
  dev: false,
  staging: false,
  test: true,
  workspaceAssets: HOSTS.PRODUCTION_WORKSPACE_ASSETS,
  courseAssets: HOSTS.PRODUCTION_COURSE_ASSETS,
  disqus: 'workademy',
  feedbackFormId: 'NO6pDrNo'
}
