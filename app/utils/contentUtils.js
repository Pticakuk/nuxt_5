import * as pdfjsLib from 'pdfjs-dist/es5/build/pdf'
import pdfjsWorker from 'pdfjs-dist/es5/build/pdf.worker.entry'
import * as musicMetadata from 'music-metadata-browser'
import { read, utils } from 'xlsx'

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker
export const addClassesToHr = (content) => {
  return content.replace(/<hr\s*(?![^>]*\bclass\s*=\s*["'][^"']*?\bv-divider\b[^"']*?\btheme--light\b[^"']*?["'])[^>]*\/?>/g, '<hr class="v-divider theme--light" />')
}

export const makeTodosInteractive = (content) => {
    const parser = new DOMParser()
  const doc = parser.parseFromString(content, 'text/html')
  const todoLists = doc.querySelectorAll('ul.todo-list')

  todoLists.forEach((ul) => {
    const inputs = ul.querySelectorAll('input[type="checkbox"][disabled]')
    inputs.forEach((input) => {
      input.removeAttribute('disabled')
    })
  })

  return doc.body.innerHTML
}

export const fixEmojiWrap = (content) => {
  return content.replace(
    /<span class="prepend-emoji">([\s\S]*?)<\/span>/g,
    (match, content) => {
      const emojiOnly = content.replace(/<[^>]+>/g, '').trim()
      return `<span class="prepend-emoji">${emojiOnly}</span>`
    }
  )
}

export const cleanupParagraphs = (content) => {
  return content?.replace(/<\/p>\s*<p>/g, '<br>').replace(/<\/?p>/g, '')
}

export const removeTableFigure = (content) => {
 return content
  .replace(/<figure class="table"[^>]*>\s*<table[^>]*>/g, (match) => {
    const tableTag = match.match(/<table[^>]*>/)[0]
    return '<table style="width:100%;">'
})
  .replace(/<\/table>\s*<\/figure>/g, '</table>')
}

export const replaceTableWithSimpleTable = (content, isDark) => {
  const themeClass = isDark ? 'v-theme--dark' : 'v-theme--light'
  const newWrapper = `
    <div class="v-data-table ${themeClass}">
      <div class="v-data-table__wrapper">
        <table style="width: 100%;">`
  return content.replace(/<figure class="table"><table>/g, newWrapper).replace(/<\/figure>/g, '</div></div>')
}

export const getVideoThumbnail = (videoUrl, seekTime = 1) => {
  return new Promise((resolve, reject) => {
    // Create a video element programmatically
    const video = document.createElement('video')
    video.src = videoUrl
    video.preload = 'metadata'
    video.crossOrigin = 'Anonymous'

    video.onloadedmetadata = () => {
      // Seek to a specific time of the video (in seconds)
      video.currentTime = seekTime
    }

    video.onseeked = () => {
      // Create a canvas and set its size to the video dimensions
      const canvas = document.createElement('canvas')
      canvas.width = video.videoWidth
      canvas.height = video.videoHeight
      canvas.crossOrigin = 'Anonymous'

      // Draw the video frame to the canvas
      const ctx = canvas.getContext('2d')
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height)

      // Convert the canvas to a data URL
      const dataURL = canvas.toDataURL()

      // Resolve the promise with the data URL
      resolve(dataURL)
    }

    video.onerror = (e) => {
      // Reject the promise if an error occurs
      reject(e)
    }

    // Load the video file
    video.load()
  })
}
// PDF THUMBNAIL
export const getPdfThumbnail = async (pdfUrl) => {
  const pdf = await pdfjsLib.getDocument(pdfUrl).promise
  const firstPage = await pdf.getPage(1)
  const viewport = firstPage.getViewport({ scale: 1 })
  const canvas = document.createElement('canvas')
  canvas.crossOrigin = 'Anonymous'
  const context = canvas.getContext('2d')
  canvas.height = viewport.height
  canvas.width = viewport.width

  await firstPage.render({ canvasContext: context, viewport }).promise
  return canvas.toDataURL()
}
// AUDIO THUMBNAIL
// Function to fetch audio as blob
async function fetchAudioBlob (audioUrl) {
  const response = await fetch(audioUrl)
  if (!response.ok) { throw new Error(`HTTP error! status: ${response.status}`) }
  return response.blob()
}

// Function to get album art from audio metadata
async function getAlbumArt (blob) {
  const metadata = await musicMetadata.parseBlob(blob, { mimeType: blob.type })
  if (metadata.common.picture && metadata.common.picture.length > 0) {
    const picture = metadata.common.picture[0]
    return URL.createObjectURL(new Blob([picture.data], { type: picture.format }))
  }
  return null
}

// Function to generate a waveform from audio blob
async function generateWaveform (blob) {
  const audioContext = new (window.AudioContext || window.webkitAudioContext)()
  const arrayBuffer = await blob.arrayBuffer()
  const audioBuffer = await audioContext.decodeAudioData(arrayBuffer)
  // Create a canvas element
  const canvas = document.createElement('canvas')
  canvas.crossOrigin = 'Anonymous'
  const ctx = canvas.getContext('2d')
  const width = 1000 // Width of the canvas / waveform
  const height = 200 // Height of the canvas / waveform
  canvas.width = width
  canvas.height = height

  // Clear the canvas
  ctx.fillStyle = '#FFF' // Background color
  ctx.fillRect(0, 0, width, height)

  // Draw waveform
  ctx.lineWidth = 1
  ctx.strokeStyle = '#000' // Waveform color
  ctx.beginPath()

  const bufferLength = audioBuffer.length
  const sampleSize = bufferLength / width
  const sampleStep = Math.max(1, Math.floor(sampleSize / 2))
  let x = 0

  for (let i = 0; i < bufferLength; i += sampleStep) {
    const v = audioBuffer.getChannelData(0)[i] // Assuming mono audio; for stereo, you might average channels
    const y = (v + 1) / 2 * height // Scale the amplitude to fit within the canvas height

    if (i === 0) {
      ctx.moveTo(x, y)
    } else {
      ctx.lineTo(x, y)
    }
    x += 1
  }

  ctx.stroke()

  // Convert the canvas to a data URL and return
  return canvas.toDataURL()
}

// Combined function to get a visual representation of an audio file
export const getAudioThumbnail = async (audioUrl) => {
  try {
    const audioBlob = await fetchAudioBlob(audioUrl)
    const albumArtUrl = await getAlbumArt(audioBlob)
    if (albumArtUrl) {
      return albumArtUrl
    } else {
      return await generateWaveform(audioBlob)
    }
  } catch (error) {
    return null
  }
}

// EXCEL THUMBNAIL
export const getExcelThumbnail = async (excelUrl) => {
  // Fetch the Excel file
  const response = await fetch(excelUrl)
  const data = await response.blob()

  // Use SheetJS to read the file (you'd need to include SheetJS in your project)
  const workbook = read(await data.arrayBuffer(), { type: 'array' })
  const firstSheetName = workbook.SheetNames[0]
  const worksheet = workbook.Sheets[firstSheetName]
  const jsonData = utils.sheet_to_json(worksheet, { header: 1, range: 0 })

  // Create a new canvas element
  const canvas = document.createElement('canvas')
  canvas.width = 200// Set your desired thumbnail size
  canvas.height = 100
  canvas.crossOrigin = 'Anonymous'
  const ctx = canvas.getContext('2d')

  // Basic styling
  ctx.fillStyle = '#ffffff'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  ctx.fillStyle = '#000000'

  // Draw the first few rows and columns
  const rowsToDraw = Math.min(5, jsonData.length) // Limit to first 5 rows
  const cellHeight = 20
  for (let i = 0; i < rowsToDraw; i++) {
    const row = jsonData[i]
    const colsToDraw = Math.min(3, row.length) // Limit to first 3 columns
    for (let j = 0; j < colsToDraw; j++) {
      const value = row[j]
      ctx.fillText(value, 5 + j * 65, 15 + i * cellHeight) // Adjust positioning as needed
    }
  }

  // Return the data URL for the canvas
  return canvas.toDataURL()
}
