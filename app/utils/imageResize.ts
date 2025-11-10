/*
 * imageResize.ts
 * The copyright of this file belongs to Workademy GmbH. The file cannot be
 * reproduced in whole or in part, stored in a retrieval system, transmitted
 * in any form, or by any means electronic, mechanical, or otherwise, without
 * the prior permission of the owner. Please refer to the terms of the license
 * agreement.
 *
 * (c) 2021 Workademy GmbH, Rights Reserved.
 *
 * olga
 * 27/03/2021, 01:04
 */
export const resizeImage = (file: File, maxSize: number = 544) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onerror = reject
    reader.onload = (readerEvent) => {
      const image = new Image()
      image.onload = (imageEvent) => {
        // Resize the image
        const canvas = document.createElement('canvas')
        let width = image.width
        let height = image.height
        if (width > height) {
          if (width > maxSize) {
            height *= maxSize / width
            width = maxSize
          } else if (height > maxSize) {
            width *= maxSize / height
            height = maxSize
          }
        }
        canvas.width = width
        canvas.height = height
        if (canvas !== null) {
          const context = canvas.getContext('2d')
          if (context !== null) {
            context.drawImage(image, 0, 0, width, height)
            const dataUrl = canvas.toDataURL('image/jpeg')
            const resizedImage = dataURLToBlob(dataUrl)
            resolve(resizedImage)
          }
        }
      }
      // @ts-ignore
      image.src = <string>readerEvent.target.result
    }
    reader.readAsDataURL(file)
  })
}

export const dataURLToBlob = (dataURI: string) => {
  // convert base64 to raw binary data held in a string
  // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
  const byteString = atob(dataURI.split(',')[1])

  // separate out the mime component
  const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]

  // write the bytes of the string to an ArrayBuffer
  const ab = new ArrayBuffer(byteString.length)
  const ia = new Uint8Array(ab)
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i)
  }
  return new Blob([ab], { type: mimeString })
}
