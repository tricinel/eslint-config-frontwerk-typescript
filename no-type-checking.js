module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'],
  env: {
    browser: true,
    node: true
  },
  extends: [
    'eslint-config-frontwerk',
    './rules/eslint-disable',
    './rules/base',
    './rules/ts-only'
  ].map(require.resolve),
  rules: {}
};
