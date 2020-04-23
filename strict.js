module.exports = {
  extends: ['./index', './rules/no-unsafe'].map(require.resolve),
  rules: {}
};
