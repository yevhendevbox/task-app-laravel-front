/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-strongly-recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  ignorePatterns: ['html/*'],
  rules: {
    'vue/multi-word-component-names': 0,
    'vue/component-definition-name-casing': [ 'error', 'PascalCase' ],
    'vue/component-name-in-template-casing': [ 'error', 'PascalCase' ],
    'vue/require-prop-types': 'off',
    'vue/require-default-prop': 'off',
    'no-useless-escape': 'off',
    'no-unused-vars': [
      'warn',
      {
        vars: 'all',
        args: "after-used",
        caughtErrors: "all",
      }
    ],
  }
}