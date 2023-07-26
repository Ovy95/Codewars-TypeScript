import spinWords from './spinWords';

test('Basic test two characters long should return value', () => {
  expect(spinWords('hi')).toBe('hi');
});
