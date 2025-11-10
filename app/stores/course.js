import { defineStore } from 'pinia'
import api from '~/api'
import { enrichCourse } from '~/utils/utils'

export const useCourseStore = defineStore('course', {
  state: () => ({
    course: null,
    courseId: null,
    loading: false,
    error: null,
    userCourse: null
  }),

  getters: {
    getCourseItems(state) {
      const authStore = useAuthStore()
      const course = state.userCourse || {}
      
      // Для демо без admin mode
      const showInvisible = false
      
      const lectures = flatEnrichedLectures(course, showInvisible)?.filter(
        lecture => showInvisible || lecture?.visible
      )
      
      if (!lectures) return {}
      
      const result = {}
      
      lectures.forEach((lecture, index) => {
        const previous = lectures[index - 1] || null
        const next = lectures[index + 1] || null
        const anonymous = !authStore.isAuthenticated && course.anonymousAllowed
        const lectureDone = course.sequential ? lecture.done : lecture.read
        
        // Disable next lecture if current not done
        if (!(anonymous) &&
          next !== null &&
          lecture &&
          lecture.sections &&
          lecture.sections.length > 0 &&
          lectureDone === false
        ) {
          next.disabled = true
          next.disabledExplanation = course.sequential 
            ? 'courseTree.lectureIsNotDoneExplanation' 
            : 'courseTree.lectureIsNotSeenExplanation'
        }
        
        // Check module start date
        if (next && next.moduleStartDate && new Date().getTime() < next.moduleStartDate) {
          next.disabled = true
          next.disabledExplanation = 'courseTree.lectureIsNotStartedExplanation'
        }
        
        result[lecture.lectureId] = {
          item: lecture,
          previous,
          next
        }
      })
      
      return result
    }
  },

  actions: {
    async fetchCourse(id, { withModules = false } = {}) {
      this.loading = true
      this.error = null

      try {
        const rawCourse = await api.fetchCourse(id, withModules)
        const enriched = enrichCourse({ ...rawCourse })

        this.course = enriched
        this.courseId = id
        return enriched
      } catch (err) {
        this.error = err
        const fallback = enrichCourse({ name: 'test', id })
        this.course = fallback
        this.courseId = id
        return fallback
      } finally {
        this.loading = false
      }
    },
    async fetchUserCourse({ courseId, id, completed, umbrella, force }) {
      const authStore = useAuthStore()
      const anonymous = !authStore.isAuthenticated

      const userCourse = anonymous || umbrella
        ? await api.fetchCourse(courseId, true)
        : await api.fetchUserCourse({ id, courseId, completed })

      const metadata = await api.getCourseMetadata(courseId, this.workspace) || {}
      if (metadata.lang) {
        this.courseLang = metadata.lang
      }

      let course = {}
      if (anonymous || umbrella) {
        course = enrichCourse({
          ...userCourse,
          metadata,
        })
      } else {
        course = enrichCourse({
          metadata,
          ...userCourse.course,
          userCourseId: userCourse.id,
          certificate: userCourse.certificate,
          startTime: userCourse.startTime,
          finishTime: userCourse.finishTime,
          progressStatus: userCourse.progressStatus,
          abandoned: userCourse.abandoned,
          expireTime: userCourse.expireTime,
          status: userCourse.status,
          userGamificationItems: userCourse.userGamificationItems,
          extra: userCourse.extra,
        })
      }

      this.userCourse = course

      return course
    },
  }
})
