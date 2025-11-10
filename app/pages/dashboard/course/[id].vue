<template>
  <div class="timeline">
    <v-container v-if="!courseLoaded">
      <v-progress-linear
        aria-label="progress-linear"
        color="primary"
        indeterminate
      />
    </v-container>

    <v-container v-else class="a-container tw-relative">
      <div class="tw-flex">
        <CourseCard
          :course-name="courseName"
          :course-description="courseDescription"
          :modules="courseModules"
          :start-date="startDate"
          :finish-date="finishDate"
          :course-image="wideCoverUrl"
          :sequential="sequential"
          :is-scorm="isScorm"
          :scorm-url="scormUrl"
          :is-umbrella-course="isUmbrellaCourse"
          :external-resource="isExternalResource"
          :external-url="externalUrl"
          :umbrella-structure="umbrellaStructure"
          :learning-path-id="learningPathId"
          :learning-path-name="learningPathName"
          :expired="expired"
          :is-paid="isPaid"
          :is-certifiable="isCertifiable"
          :course-status="courseStatus"
          :user-course-id="userCourseId"
          :course-id="courseId"
          :module-id="moduleId"
          :stripe-payment-information="stripePaymentInformation"
          :payment-information="paymentInformation"
          :pending-pre-course-survey="pendingPreCourseSurvey"
          :completed="completed"
          :course-is-started="courseIsStarted"
          :tags="tags"
          :url="activeLectureUrl"
          :url-text="goToLectureText"
          @paymentSucceeded="onPaymentSucceeded"
        />
      </div>
    </v-container>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useCourseStore } from '~/stores/course'
import { useAuthStore } from '~/stores/auth'
import { fixHtml } from '~/utils/utils'
import { COURSE_TYPES } from '~/enums/types'
import { COURSE_STATUSES } from '~/enums/status'

import CourseCard from '~/components/timeline/CourseCard'

const route = useRoute()
const router = useRouter()

const courseStore = useCourseStore()
const authStore = useAuthStore()

const courseLoaded = ref(false)
const fetchedUserCourseId = ref(null)
const stripePaymentInformation = ref({})

// URL params
const courseId = computed(() => Number(route.params.id))
const userCourseId = computed(() => Number(route.query.userCourseId) || fetchedUserCourseId.value)
const completed = computed(() => route.query.completed === 'true')
const umbrella = computed(() => route.query.umbrella === 'true')
const learningPathId = computed(() => {
  const { learningPathId } = route.query
  return learningPathId ? Number(learningPathId) : null
})
const learningPathName = computed(() => route.query.learningPathName || null)
const moduleId = computed(() => {
  const { module } = route.query
  return module ? Number(module) : null
})

// Course data
const userCourse = computed(() => courseStore.userCourse || {})

const courseName = computed(() => userCourse.value.name || '')
const courseDescription = computed(() => userCourse.value.description || '')
const courseModules = computed(() => userCourse.value.modules || [])
const sequential = computed(() => userCourse.value.sequential || false)
const startDate = computed(() => userCourse.value.availableFromTime || null)
const finishDate = computed(() => userCourse.value.availableUntilTime || null)
const wideCoverUrl = computed(() => 
  userCourse.value.wideCoverUrl || 
  userCourse.value.videoUrl || 
  userCourse.value.metadata?.courseImage || 
  ''
)
const tags = computed(() => userCourse.value.tags || [])

// Course types
const isUmbrellaCourse = computed(() => 
  userCourse.value.customStructure?.['@type'] === COURSE_TYPES.UMBRELLA
)
const isScorm = computed(() => 
  userCourse.value.customStructure?.['@type'] === COURSE_TYPES.SCORM
)
const isCertificationCourse = computed(() => 
  userCourse.value.customStructure?.['@type'] === COURSE_TYPES.CERTIFICATION
)
const isExternalResource = computed(() => 
  userCourse.value.customStructure?.['@type'] === COURSE_TYPES.EXTERNAL
)
const isCertifiable = computed(() => userCourse.value.certifiable || false)

// Course structure
const scormUrl = computed(() => userCourse.value.customStructure?.scormUrl || '')
const externalUrl = computed(() => userCourse.value.customStructure?.url || '')
const umbrellaStructure = computed(() => userCourse.value.customStructure?.structure || null)

// Course status
const courseIsStarted = computed(() => {
  if (!userCourse.value.startTime) return false
  return Boolean(userCourse.value.startTime)
})
const expired = computed(() => userCourse.value.status === COURSE_STATUSES.EXPIRED)
const courseStatus = computed(() => userCourse.value.status || '')

// Payment
const isPaid = computed(() => 
  userCourse.value.paymentInformation && userCourse.value.paymentInformation.amount > 0
)
const paymentInformation = computed(() => userCourse.value.paymentInformation || null)

// Survey - mock for now
const pendingPreCourseSurvey = computed(() => false)

// Active lecture
const activeLectureUrl = computed(() => {
  const url = userCourse.value.activeLecture?.url || ''
  if (!url) return ''
  
  const query = {
    lecture: userCourse.value.activeLecture.lectureId
  }
  if (learningPathId.value) {
    query.learningPathId = learningPathId.value
  }
  if (learningPathName.value) {
    query.learningPathName = learningPathName.value
  }
  return {
    path: url,
    query
  }
})

const goToLectureText = computed(() => {
  const activeLectureName = userCourse.value.activeLecture 
    ? fixHtml(userCourse.value.activeLecture.name) 
    : ''
  
  if (!activeLectureName) return ''
  
  if (courseIsStarted.value) {
    return isCertificationCourse.value 
      ? 'Go to the last quiz' 
      : 'Go to the last lecture'
  } else {
    return isCertificationCourse.value 
      ? 'Start certification' 
      : 'Start course'
  }
})

// Methods
function onPaymentSucceeded() {
  console.log('Payment succeeded, refetching course...')
  courseStore.fetchUserCourse({
    courseId: courseId.value,
    id: userCourseId.value,
    completed: completed.value,
    umbrella: umbrella.value
  })
}

// Lifecycle
onMounted(async () => {
  try {
    // Get Stripe payment info from URL if present
    const { payment_intent, payment_intent_client_secret, redirect_status } = route.query
    stripePaymentInformation.value = {
      paymentIntent: payment_intent,
      clientSecret: payment_intent_client_secret,
      status: redirect_status
    }

    courseLoaded.value = false
    const data = await courseStore.fetchUserCourse({
      courseId: courseId.value,
      id: userCourseId.value,
      completed: completed.value,
      umbrella: umbrella.value
    })

    if (data && data.userCourseId) {
      fetchedUserCourseId.value = data.userCourseId
    }

    if ((!authStore.isAuthenticated && !data.anonymousAllowed) || !data.id) {
      return router.push('/courses')
    }

    courseLoaded.value = true
  } catch (err) {
    console.error('❌ Failed to load course:', err)
    router.push('/courses')
  }
})
</script>

<style scoped>
.timeline {
  width: 100%;
}
</style>