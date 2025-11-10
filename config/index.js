/*
 * index.js
 * The copyright of this file belongs to Workademy GmbH. The file cannot be
 * reproduced in whole or in part, stored in a retrieval system, transmitted
 * in any form, or by any means electronic, mechanical, or otherwise, without
 * the prior permission of the owner. Please refer to the terms of the license
 * agreement.
 *
 * (c) 2020 Workademy GmbH, Rights Reserved.
 *
 * olga
 * 04/08/2020, 10:26
 */

import production from './production.config'
import staging from './staging.config'
import test from './test.config'
import dev from './dev.config'

export default {
  production,
  staging,
  test,
  dev
}
