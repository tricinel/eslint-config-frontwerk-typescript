// Disable rules in eslint when handled by Typescript
module.exports = {
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        // Checked by Typescript - ts(2378)
        'getter-return': 'off',
        // Checked by Typescript - ts(2300)
        'no-dupe-args': 'off',
        // Checked by Typescript - ts(1117)
        'no-dupe-keys': 'off',
        // Checked by Typescript - ts(7027)
        'no-unreachable': 'off',
        // Checked by Typescript - ts(2367)
        'valid-typeof': 'off',
        // Checked by Typescript - ts(2588)
        'no-const-assign': 'off',
        // Checked by Typescript - ts(2588)
        'no-new-symbol': 'off',
        // Checked by Typescript - ts(2376)
        'no-this-before-super': 'off',
        // This is checked by Typescript using the option `strictNullChecks`.
        'no-undef': 'off',
        // The following are already checked by Typescript.
        'no-dupe-class-members': 'off',
        'no-redeclare': 'off',
        'comma-spacing': 'off',
        'comma-dangle': 'off',
        'dot-notation': 'off',
        'init-declarations': 'off',
        'keyword-spacing': 'off',
        'lines-between-class-members': 'off',
        'no-duplicate-imports': 'off',
        'no-invalid-this': 'off',
        'no-loop-func': 'off',
        'no-loss-of-precision': 'off',
        'no-shadow': 'off',
        'space-infix-ops': 'off',
        'import/extensions': [
          'error',
          'ignorePackages',
          {
            js: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never'
          }
        ]
      }
    }
  ]
};
