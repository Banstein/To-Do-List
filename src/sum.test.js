const capitalize = require('./sum.js');

test('capitalized string', () => {
  expect(capitalize('vahan')).toBe('Vahan');
});