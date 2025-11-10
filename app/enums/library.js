/*
 * library.js
 * The copyright of this file belongs to Workademy GmbH. The file cannot be
 * reproduced in whole or in part, stored in a retrieval system, transmitted
 * in any form, or by any means electronic, mechanical, or otherwise, without
 * the prior permission of the owner. Please refer to the terms of the license
 * agreement.
 *
 * (c) 2021 Workademy GmbH, Rights Reserved.
 *
 * olga
 * 28/03/2021, 18:39
 */

export const CATEGORIES = {
  CONTENT: 'CONTENT',
  COVER_IMAGE: 'COVER_IMAGE',
  FRAME: 'FRAME',
  AVATAR: 'AVATAR',
  SUBTITLE: 'SUBTITLE',
  VIDEO: 'VIDEO',
  OTHER: 'OTHER'
}
const icons = {}
icons.ALL = 'mdi-file-star-outline'
icons[CATEGORIES.AVATAR] = 'mdi-account-circle'
icons[CATEGORIES.CONTENT] = 'source'
icons[CATEGORIES.FRAME] = 'mdi-trophy'
icons[CATEGORIES.OTHER] = 'not_listed_location'
icons[CATEGORIES.COVER_IMAGE] = 'crop_original'
export const CATEGORIES_ICONS = icons

const colors = {}
colors[CATEGORIES.AVATAR] = 'accent'
colors[CATEGORIES.CONTENT] = 'primary'
colors[CATEGORIES.FRAME] = 'success'
colors[CATEGORIES.SUBTITLE] = 'warning'
colors[CATEGORIES.VIDEO] = 'success'
colors[CATEGORIES.OTHER] = 'warning'
colors[CATEGORIES.COVER_IMAGE] = 'secondary'
export const CATEGORIES_COLORS = colors

export const FILE_TYPES = {
  JPEG: 'JPEG',
  PNG: 'PNG',
  PDF: 'PDF',
  GIF: 'GIF',
  TIFF: 'TIFF',
  SVG: 'SVG',
  MP3: 'MP3',
  MP4: 'MP4',
  WEBM: 'WEBM',
  XLS: 'XLS',
  XLSX: 'XLSX',
  PPTX: 'PPTX',
  VTT: 'VTT'
}

const fileTypeColors = {}
fileTypeColors[FILE_TYPES.JPEG] = 'primary'
fileTypeColors[FILE_TYPES.PNG] = 'primary'
fileTypeColors[FILE_TYPES.GIF] = 'primary'
fileTypeColors[FILE_TYPES.TIFF] = 'primary'
fileTypeColors[FILE_TYPES.SVG] = 'primary'
fileTypeColors[FILE_TYPES.MP3] = 'secondary'
fileTypeColors[FILE_TYPES.MP4] = 'success'
fileTypeColors[FILE_TYPES.WEBM] = 'success'
fileTypeColors[FILE_TYPES.PDF] = 'accent'
fileTypeColors[FILE_TYPES.XLS] = 'warning'
fileTypeColors[FILE_TYPES.XLSX] = 'warning'
fileTypeColors[FILE_TYPES.VTT] = 'warning'

export const FILE_TYPES_COLORS = fileTypeColors

export const FILE_FORMATS = {
  PDF: 'PDF',
  IMAGE: 'IMAGE',
  VIDEO: 'VIDEO',
  OTHER: 'OTHER'
}
export const IMAGE_FILE_TYPES = [FILE_TYPES.JPEG, FILE_TYPES.PNG, FILE_TYPES.GIF, FILE_TYPES.TIFF, FILE_TYPES.SVG]
export const IMAGE_SIZES = {
  640: 640,
  768: 768,
  1024: 1024,
  1366: 1366,
  1600: 1600,
  1920: 1920
}
export const THUMBNAIL_SIZES = {
  10: 10,
  80: 80,
  100: 100,
  360: 360
}
export const SUPPORTED_TYPES = {
  IMAGE: 'IMAGE',
  PDF: 'PDF',
  MP3: 'MP3',
  MP4: 'MP4',
  WEBM: 'WEBM',
  ZIP: 'ZIP',
  CSV: 'CSV',
  XLS: 'XLS',
  PPTX: 'PPTX',
  VTT: 'VTT'
}
export const ACCEPTED_TYPES = {
  IMAGE: 'image/*',
  PDF: '.pdf',
  MP3: '.mp3',
  ZIP: '.zip',
  CSV: '.csv',
  MP4: '.mp4',
  WEBM: '.webm',
  PPTX: '.pptx',
  VTT: '.vtt',
  XLS: '.xls,.xlsx,application/vnd.ms-excel',
  PNG: 'image/png',
  JPG: 'image/jpg',
  JPEG: 'image/jpeg',
  WEBP: 'image/webp',
  SVG: 'image/svg+xml'
}

export const ALLOWED_FILE_SIZE = {
  LIMIT: 4,
  PDF_LIMIT: 64,
  MP3_LIMIT: 64,
  ZIP_LIMIT: 64,
  MP4_LIMIT: 512,
  WEBM_LIMIT: 512,
  PPTX_LIMIT: 64,
  XLS_LIMIT: 32,
  UNIT: 'MB'
}
export const ALL_CATEGORIES = 'ALL'
