// These rules should only be enabled when linting TS files
module.exports = {
  rules: {
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-return': 'off'
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        // Disallow calling any variable that is typed as any
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-assignment.md
        '@typescript-eslint/no-unsafe-assignment': 'error',

        // Disallow member access on any variable that is typed as any
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-member-access.md
        '@typescript-eslint/no-unsafe-member-access': 'error',

        // Disallow returning any from a function
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-return.md
        '@typescript-eslint/no-unsafe-return': 'error',

        // Disallows calling an any type value
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-call.md
        '@typescript-eslint/no-unsafe-call': 'error'
      }
    }
  ]
};
