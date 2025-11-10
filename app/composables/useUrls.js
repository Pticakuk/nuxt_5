import { computed } from 'vue'
import { useProfileStore } from '~/stores/profile'
import { useCourseStore } from '~/stores/course'
import { useLocalePath } from '#imports'

export function useUrls() {
  const profileStore = useProfileStore()
  const courseStore = useCourseStore()
  const localePath = useLocalePath()

  const urls = computed(() => {
    const profile = profileStore.profile
    const courseId = courseStore.course?.id

    return {
      homeUrl: profile?.homeUrl || profile?.meta?.['/']?.redirect_to || localePath('index'),
      signinUrl: localePath('login'),
      dashboardUrl: localePath('dashboard'),
      manageCourses: localePath('manage-courses'),
      manageLearningPaths: `${localePath('manage-courses')}?tab=learningPaths`,
      coursesUrl: profile?.meta?.['/courses/']?.redirect_to || localePath('courses'),
      passwordResetUrl: localePath('passwordreset'),
      exploreCourseUrl: `${localePath({ name: 'courses-course' })}/#!${courseId}`,
      editCourseUrl: `${localePath({ name: 'dashboard-course' })}?edit=true#!${courseId}`,
      userCourseUrl: localePath('dashboard-course'),
      settingsUrl: localePath('settings'),
      learnerProfileUrl: localePath('learnerprofile'),
    }
  })

  return {
    urls,
  }
}
