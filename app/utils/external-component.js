/*
 * external-component.js
 * The copyright of this file belongs to Workademy GmbH. The file cannot be
 * reproduced in whole or in part, stored in a retrieval system, transmitted
 * in any form, or by any means electronic, mechanical, or otherwise, without
 * the prior permission of the owner. Please refer to the terms of the license
 * agreement.
 *
 * (c) 2020 Workademy GmbH, Rights Reserved.
 *
 * olga
 * 10/08/2020, 15:19
 */

export default async function externalComponent (url) {
  const name = url.split('/').reverse()[0].match(/^(.*?)\.umd/)[1]
  if (window[name]) { return window[name] }

  window[name] = new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.async = true
    script.addEventListener('load', () => {
      resolve(window[name])
    })
    script.addEventListener('error', (err) => {
      reject(new Error(`Error loading ${url}, ${err}`))
    })
    script.src = url
    document.head.appendChild(script)
  })

  return window[name]
}
