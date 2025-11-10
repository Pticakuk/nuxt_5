/*
 * default_profile.js
 * The copyright of this file belongs to Workademy GmbH. The file cannot be
 * reproduced in whole or in part, stored in a retrieval system, transmitted
 * in any form, or by any means electronic, mechanical, or otherwise, without
 * the prior permission of the owner. Please refer to the terms of the license
 * agreement.
 *
 * (c) 2020 Workademy GmbH, Rights Reserved.
 *
 * olga
 * 26/07/2020, 13:35
 */

const PROFILE_NAME = 'default_profile'

export default {
  name: PROFILE_NAME,
  theme: {
    dark: false, // From 2.0 You have to select the theme dark or light here
    themes: {
      light: {
        primary: '#006fb8',
        'primary--lighter': '#008fe6',
        'primary--darker': '#004778',
        secondary: '#e95542',
        accent: '#82B1FF',
        error: '#c71618',
        info: '#006fb9',
        success: '#4CAF50',
        warning: '#ffcd00'
      },
      dark: {
        primary: '#006fb8',
        'primary--lighter': '#008fe6',
        'primary--darker': '#004778',
        secondary: '#e95542',
        accent: '#82B1FF',
        error: '#c71618',
        info: '#006fb9',
        success: '#4CAF50',
        warning: '#ffcd00'
      }
    }
  },
  i18n: {
    en: {
      title: 'Workademy',
      catalogueTagline: 'Learn and share your knowledge with Workademy',
      tagline: 'Welcome to the online education\n' +
        'and knowledge sharing world',
      marketingHeader: 'Workademy allows you to learn and to teach',
      marketingSubheader: 'BEING A BRIDGE BETWEEN KNOWLEDGE POSSESSORS AND THOSE WHO NEED THIS KNOWLEDGE',
      icon1Title: 'Learn',
      icon1Description: 'We offer personalised workspace to create, host, and manage knowledge',
      icon2Title: 'Everywhere',
      icon2Description: 'Use any device, any system, anywhere',
      icon3Title: 'Community',
      icon3Description: 'Participate in network, be a part of community',
      icon4Title: 'Teach',
      icon4Description: 'The most efficient way of learning is teaching. Unlock your teaching potential with Workademy'
    }
  },
  icons: [
    { title: 'icon1Title', description: 'icon1Description', icon: '$vuetify.icons.learn' },
    { title: 'icon2Title', description: 'icon2Description', icon: '$vuetify.icons.everywhere' },
    { title: 'icon3Title', description: 'icon3Description', icon: '$vuetify.icons.community' },
    { title: 'icon4Title', description: 'icon4Description', icon: '$vuetify.icons.teach' }
  ],
  logo: '/img/logo_header.png',
  logoFooter: '/img/logo_footer.png',
  logoHeader: '/img/logo_header.svg',
  title: 'Workademy',
  company: 'Workademy',
  companyUrl: 'https://www.theworkademy.com/',
  domain: 'theworkademy.com',
  googleAnalyticsTrackingId: 'UA-184762724-1',
  gtmTrackingId: ''
}
