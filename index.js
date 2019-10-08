module.exports = {
  extends: ['./no-type-checking', './rules/require-type-checking'].map(
    require.resolve
  ),
  rules: {}
};
