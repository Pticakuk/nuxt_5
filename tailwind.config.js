/* eslint-disable quote-props */
module.exports = {
  prefix: 'tw-',
  darkMode: 'class',
  content: [
    './app/components/**/*.{js,vue,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {},
    screens: {
      '2xl': { 'max': '1919px' },
      // => @media (max-width: 1919px) { ... }
      'xl': { 'max': '1509px' },
      // => @media (max-width: 1509px) { ... }
      'lg': { 'max': '1279px' },
      // => @media (max-width: 1279px) { ... }
      'md': { 'max': '959px' },
      // => @media (max-width: 959px) { ... }
      'sm': { 'max': '599px' }
      // => @media (max-width: 599px) { ... }
    }
  },
  plugins: []
}
