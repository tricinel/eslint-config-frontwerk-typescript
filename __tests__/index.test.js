test('We can require all the rules without throwing', () => {
  expect(() => {
    require('../'); // eslint-disable-line global-require, @typescript-eslint/no-require-imports
    require('../no-type-checking'); // eslint-disable-line global-require, @typescript-eslint/no-require-imports
  }).not.toThrow();
});
