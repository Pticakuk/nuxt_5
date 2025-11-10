import liveMeetingsPlatforms from '~/enums/liveMeetingsPlatforms'
import lectureHeaderTypes from '~/enums/lectureHeaderTypes'

export const linkIsYoutube = (link = '') => {
  if (!link) {
    return false
  }
  return link.includes(liveMeetingsPlatforms.YOUTUBE)
}

export const linkIsSevenTaps = (link = '') => {
  if (!link) {
    return false
  }
  return link.includes(liveMeetingsPlatforms.SEVENTAPS)
}

export const linkIsTypeform = (link = '') => {
  if (!link) {
    return false
  }
  return link.inlcudes(liveMeetingsPlatforms.TYPEFORM)
}

export const enrichedTypeFormUrl = (link = '', enrichObject = {}) => {
  // Check if the provided link is empty or invalid
  if (!link || typeof link !== 'string') {
    return ''
  }

  // Parse the existing URL
  const [baseUrl, queryString] = link.split('?')
  const urlParams = new URLSearchParams(queryString)

  // Add or update the query parameters from enrichObject
  Object.entries(enrichObject).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      urlParams.set(key, value)
    }
  })

  // Reconstruct the URL with the enriched parameters
  return `${baseUrl}?${urlParams.toString()}`
}

export const linkIsVimeo = (link = '') => {
  if (!link) {
    return false
  }
  return link.includes(liveMeetingsPlatforms.VIMEO)
}

export const linkIsWistia = (link = '') => {
  if (!link) {
    return false
  }
  return link.includes(liveMeetingsPlatforms.WISTIA)
}

export const linkIsKinescope = (link = '') => {
  if (link === null || link === undefined) {
    return false
  }
  return link.includes(liveMeetingsPlatforms.KINESCOPE)
}

export const linkIsLoom = (link = '') => {
  if (!link) {
    return false
  }
  return link.includes(liveMeetingsPlatforms.LOOM)
}

export const linkIsBrightcove = (link = '') => {
  if (!link) {
    return false
  }
  return link.includes(liveMeetingsPlatforms.BRIGHTCOVE)
}

export const linkIsScorm = (link = '') => {
  if (link === null || link === undefined) {
    return false
  }
  return link.toLowerCase().includes(lectureHeaderTypes.SCORM.toLowerCase())
}

export const isVimeoOrYoutube = (url = '') => {
  return linkIsVimeo(url) || linkIsYoutube(url)
}

export const isVimeoOrYoutubeOrKinescopeOrLoom = (url = '') => {
  return linkIsVimeo(url) || linkIsYoutube(url) || linkIsKinescope(url) || linkIsLoom(url)
}

export const isVimeoOrYoutubeOrKinescopeOrWistiaOrLoom = (url = '') => {
  return linkIsVimeo(url) || linkIsYoutube(url) || linkIsKinescope(url) || linkIsWistia(url) || linkIsLoom(url)
}

export const isVideoLink = (url = '') => {
  return linkIsVimeo(url) ||
    linkIsYoutube(url) ||
    linkIsWistia(url) ||
    linkIsLoom(url) ||
    linkIsGoogleDriveVideo(url) ||
    linkIsMp4(url) ||
    linkIsBrightcove(url)
}

export const linkIsGoogleDriveVideo = (url = '') => {
  if (!url) {
    return false
  }
  return url.includes('drive.google.com') && url.includes('video')
}

export const linkIsMp4 = (url = '') => {
  if (!url) {
    return false
  }
  return url.includes('.mp4') || url.includes('.webm')
}

export const linkIsSubtitles = (url = '') => {
  if (!url) {
    return false
  }
  return url.includes('.vtt')
}

export const linkIsGoogleDrive = (url = '') => {
  if (!url) {
    return false
  }
  return url.includes('drive.google.com')
}

export const createEmbedVideoUrl = (url) => {
  const isVimeo = linkIsVimeo(url)
  const isYoutube = linkIsYoutube(url)
  const isKinescope = linkIsKinescope(url)
  const isGoogleDrive = linkIsGoogleDriveVideo(url)
  let id = url
  let embedUrl = ''
  let hash = ''
  if (isVimeo) {
    const unlisted = extractUnlistedVimeoIdAndHash(url)
    if (unlisted.id && unlisted.hash) {
      id = unlisted.id
      hash = unlisted.hash
    } else {
      id = extractVimeoId(url)
    }
  } else if (isYoutube) {
    id = extractYoutubeId(url)
  } else if (isKinescope) {
    id = extractKinescopeId(url)
  } else if (isGoogleDrive) {
    id = extractGoogleDriveId(url)
  }
  if (id === url) {
    embedUrl = url
  } else if (isVimeo) {
    embedUrl = `https://player.vimeo.com/video/${id}`
  } else if (isYoutube) {
    embedUrl = `https://www.youtube.com/embed/${id}`
  } else if (isKinescope) {
    embedUrl = `https://kinescope.io/embed/${id}`
  } else if (isGoogleDrive) {
    embedUrl = `https://drive.google.com/file/d/${id}/preview`
  }
  if (hash) {
    embedUrl += `?h=${hash}`
  }
  return embedUrl
}

export const extractYoutubeId = (url) => {
  let youtubeId = ''
  const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|live\/|watch\?v=|&v=)([^#&?]*).*/
  const match = url.match(regExp)
  if (match && match[2].length === 11) {
    youtubeId = match[2]
  } else {
    youtubeId = url
  }
  return youtubeId
}

export const extractKinescopeId = (url) => {
  const regExp = /https?:\/\/(?:www\.)?kinescope.io\/(\d+)(?:$|\/|\?)/
  const match = url.match(regExp)
  if (match) {
    return match[1]
  }
  return url
}
export const extractUnlistedVimeoIdAndHash = (url) => {
  const unlistedReg = /https:\/\/vimeo\.com\/([^/]+)\/([^/]+)/
  const match = url.match(unlistedReg)
  if (match) {
    return {
      id: match[1],
      hash: match[2]
    }
  } else {
    return {
      id: null,
      hash: null
    }
  }
}
export const extractVimeoId = (url) => {
  const vimeoReg = /https?:\/\/(?:www\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^/]*)\/videos\/|album\/(\d+)\/video\/|)(\d+)(?:$|\/|\?)/
  const match = url.match(vimeoReg)
  if (match) {
    return match[3]
  } else {
    return url
  }
}

export const extractGoogleDriveId = (url = '') => {
  const googleDriveReg = /[-\w]{25,}(?!.*[-\w]{25,})/
  const match = url.match(googleDriveReg)
  if (match) {
    return match[0]
  }
  return url
}

export const extractTypeformId = (url = '') => {
  return url.substr(url.lastIndexOf('/') + 1)
}

export const plyrVideoSrc = (url) => {
  if (!url) {
    return ''
  }
  const embedUrl = createEmbedVideoUrl(url)
  if (embedUrl.includes('vimeo')) {
    return `${embedUrl}?loop=false&byline=false&portrait=false&title=false&speed=true&transparent=0&gesture=media`
  } else if (embedUrl.includes('youtube')) {
    return `${embedUrl}?iv_load_policy=3&modestbranding=1&playsinline=1&showinfo=0&rel=0&enablejsapi=1`
  }

  return ''
}
