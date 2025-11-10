// stores/courseTemplate.js
import { defineStore } from 'pinia'
import templatePlaceholders from '~/enums/templatePlaceholders'

export const useTemplatesStore = defineStore('courseTemplate', {
  state: () => ({
    html: '',
    cssUrl: '',
    jsUrl: '',
    courseTemplateIsLoading: false,
    isHtmlCourseTemplate: false
  }),

getters: {
  htmlTemplate: (state) => {
    if (!state.html) return ''

    if (/id="__nuxt"/.test(state.html)) {
      return ''
    }

    let processed = state.html
    processed = processed.replace(
      new RegExp(templatePlaceholders.PROCEED_TO_COURSE, 'g'),
      `
        <proceed-to-course-button
          :course="course"
          :courseId="courseId"
          color=""
          classes="proceed-to-course-button"
          :is-paid="isPaid"
          :payment-info="paymentInfo"
        />`
    )


    processed = processed
      .replace(/v-expansion-panel-content/g, 'v-expansion-panel-text')
      .replace(/v-expansion-panel-header/g, 'v-expansion-panel-title')

    return processed
  }
},

  actions: {
    async fetchHtmlTemplate(courseId) {
      this.courseTemplateIsLoading = true
      try {
        const url = `https://d18lcb7860whbu.cloudfront.net/workspaces/1ff1de774005f8da13f42943881c655f/courses/${courseId}/template/template.html`
        this.html = await $fetch(url)
        this.isHtmlCourseTemplate = true
      } catch (e) {
        console.warn('Error fetching HTML template', e)
        this.html = ''
        this.isHtmlCourseTemplate = false
      } finally {
        this.courseTemplateIsLoading = false
      }
    },

    async fetchCss(courseId) {
      this.cssUrl = `https://d18lcb7860whbu.cloudfront.net/workspaces/1ff1de774005f8da13f42943881c655f/courses/${courseId}/css/style.css`
    },

    async fetchJs(courseId) {
      this.jsUrl = `https://d18lcb7860whbu.cloudfront.net/workspaces/1ff1de774005f8da13f42943881c655f/courses/${courseId}/js/script.js`

      try {
        const script = document.createElement('script')
        script.src = this.jsUrl
        document.head.appendChild(script)
      } catch (e) {
        console.warn('Error appending JS script', e)
      }
    },

    reset() {
      this.html = ''
      this.cssUrl = ''
      this.jsUrl = ''
      this.isHtmlCourseTemplate = false
      this.courseTemplateIsLoading = false
    }
  }
})
