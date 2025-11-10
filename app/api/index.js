import { workspaceAssetsURL, coursesAssetsURL } from '~/utils/utils'
import { useAuthStore } from '~/stores/auth'

const PublicWorkspacesResource = {
  get: async (params) => {
    const config = useRuntimeConfig()
    const { id, ...query } = params

    return $fetch(`/api/v1/public/workspaces/${id}`, {
      baseURL: 'https://navigator.aarp.org',
      query
    })
  },

  head: async (params) => {
    const config = useRuntimeConfig()
    const { id } = params

    return $fetch(`/api/v1/public/workspaces/${id}`, {
      baseURL: 'https://navigator.aarp.org',
      method: 'HEAD'
    })
  }
}

// === COURSES RESOURCE ===
const PublicCoursesResource = {
  get: async (params) => {
    const config = useRuntimeConfig()
    const { id, ...query } = params

    return $fetch(`/api/v1/public/courses/${id}`, {
      baseURL: config.public.apiUrl,
      query
    })
  }
}

const PrivateCoursesResource = {
  async get({ id }) {
    const config = useRuntimeConfig()
    const auth = useAuthStore()

    return await $fetch(`/api/v1/secured/usercourses/${id}`, {
      baseURL: config.public.apiUrl,
      headers: {
        Authorization: `Bearer ${auth.accessToken}`
      },
      query: { include: 'modules,tasks' }
    })
  },

  async create({ courseId }) {
    const config = useRuntimeConfig()
    const auth = useAuthStore()

    return await $fetch('/api/v1/secured/usercourses', {
      baseURL: config.public.apiUrl,
      method: 'POST',
      headers: {
        Authorization: `Bearer ${auth.accessToken}`
      },
      body: { courseId }
    })
  }
}

const ActiveUserCourseByCourseIdResource = {
  async get({ include = '', q = '' }) {
    const config = useRuntimeConfig()
    const auth = useAuthStore()

    return await $fetch('/api/v1/secured/usercourses/:active', {
      baseURL: config.public.apiUrl,
      headers: {
        Authorization: `Bearer ${auth.accessToken}`
      },
      query: { include, q }
    })
  }
}
const CompletedUserCourseByCourseIdResource = {
  async get({ include = '', q = '' }) {
    const config = useRuntimeConfig()
    const auth = useAuthStore()

    return await $fetch('/api/v1/secured/usercourses/:completed', {
      baseURL: config.public.apiUrl,
      headers: {
        Authorization: `Bearer ${auth.accessToken}`
      },
      query: { include, q }
    })
  }
}
const CourseMetadataResource = {
  async get({ id, workspace = {} }) {
    if (!id) return {}

    const courseAssetsUrl = coursesAssetsURL(workspace)

    try {
      const response = await $fetch(`${courseAssetsUrl}/${id}/metadata.json`, {
        query: { ts: Date.now() }
      })
      return response || {}
    } catch (err) {
      if (err.statusCode === 403 || err.statusCode === 404) {
        return {}
      }
      console.error('⚠️ Error fetching course metadata:', err)
      return {}
    }
  }
}

export default {
  // === PUBLIC WORKSPACES ===
  getPublicWorkspaces: (id, includeConsent = true) => {
    const params = { id }
    if (includeConsent) {
      params.include = 'consent'
    }

    if (process.env.SMONLEAP_ENVIRONMENT === 'dev' && id.includes('8080')) {
      return PublicWorkspacesResource.get({
        id: 'staging.theworkademy.com',
        ...params
      })
    }

    return PublicWorkspacesResource.get(params)
  },

  checkPublicWorkspaces: (domain) => {
    return PublicWorkspacesResource.head({ id: domain })
  },

  getProfile: async (profile = {}, workspace = {}) => {
    const workspaceAssetsUrl = workspaceAssetsURL(profile, workspace)

    try {
      return await $fetch(`${workspaceAssetsUrl}/profile.json`, {
        query: { ts: Date.now() }
      })
    } catch (err) {
      console.error('Error fetching profile:', err)
      return null
    }
  },

  // === COURSES ===
  fetchCourse: async (id, withModules = false) => {
    const obj = { id }
    if (withModules) {
      obj.include = 'modules,tasks'
    }

    try {
      const response = await PublicCoursesResource.get(obj)
      return response
    } catch (err) {
      console.error('Error fetching course:', err)
      throw err
    }
  },

  fetchUserCourse: async ({ id, courseId, completed }) => {
    const resource = completed
      ? CompletedUserCourseByCourseIdResource
      : ActiveUserCourseByCourseIdResource

    let fetchedCourseId = null

    if (id) {
      try {
        const response = await PrivateCoursesResource.get({ id })
        return response
      } catch (err) {
        console.error('❌ Error fetching user course by ID:', err)
        return {}
      }
    }

    if (!courseId) return {}

    let course = null
    try {
      const response = await resource.get({
        include: 'modules,tasks',
        q: `courseId==${courseId}`
      })
      const courses = response?.content || []
      if (courses.length >= 1) {
        course = courses[courses.length - 1]
      }
    } catch (err) {
      console.error('⚠️ Error searching course:', err)
    }

    if (!course) {
      try {
        const response = await PrivateCoursesResource.create({ courseId })
        course = response.course
        fetchedCourseId = course.userCourseId
      } catch (err) {
        console.error('❌ Error creating new userCourse:', err)
        return {}
      }
    } else {
      fetchedCourseId = course.id
    }

    try {
      const response = await PrivateCoursesResource.get({ id: fetchedCourseId })
      return response
    } catch (err) {
      console.error('❌ Error fetching full userCourse:', err)
      return {}
    }
  },
  getCourseMetadata: async (id = undefined, workspace = {}) => {
    if (!id) return {}
    return await CourseMetadataResource.get({ id, workspace })
  },

  // === AUTH ===
  authenticateUser: async ({ username, password }) => {
    const config = useRuntimeConfig()
    return await $fetch('/oauth/token', {
      baseURL: config.public.apiUrl,
      method: 'POST',
      body: new URLSearchParams({
        grant_type: 'password',
        username,
        password
      }).toString(),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic d2ViYXBwOnRlc3Q=' // clientId:secret
      }
    })
  },

  getUser: async (accessToken, id = 'me', view = 'WORKSPACE_ACCESS') => {
    const config = useRuntimeConfig()
    return await $fetch(`/api/v1/secured/users/${id}`, {
      baseURL: config.public.apiUrl,
      query: {
        view,
        include:
          'address,phone,latestUserCourseGamification,profile,groups,skills,userCount,inactiveCount,ocId'
      },
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
  }
}
