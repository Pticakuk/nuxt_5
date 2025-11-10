/*
 * .eslintrc.js
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

module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: false
    },
    extraFileExtensions: [
      '.vue'
    ]
  },
  plugins: [
    '@typescript-eslint',
    'jest'
  ],
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs',
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'plugin:vue/essential',
    'plugin:vue/recommended',
    '@vue/typescript',
    '.eslintrc_todo.js'
  ],
  rules: {
    'nuxt/no-globals-in-created': 0,
    'vue/no-v-html': 0,
    'no-unused-vars': 'off',
    indent: 0,
    'vue/script-indent': ['error', 2, { baseIndent: 1 }],
    '@typescript-eslint/no-unused-vars': 0,
    strict: 0,
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none'
        }
      }
    ],
    '@typescript-eslint/interface-name-prefix': [0, { prefixWithI: 'always' }],
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/strict-boolean-expressions': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/consistent-type-assertions': 0,
    yoda: 'off',
    'no-dupe-class-members': 'off',
    'vue/component-name-in-template-casing': [
      'error',
      'kebab-case',
      {
        registeredComponentsOnly: true
      }
    ]
  },
  globals: {
    fetch: false
  }
}
