import spinWords from './spinWords';

test('Basic test two characters long should return value', () => {
  expect(spinWords('hi')).toBe('hi');
});

test('Returns Hello when given olleH', () => {
  expect(spinWords('olleH')).toBe('Hello');
});

test('Returns Hello hows it going', () => {
  expect(spinWords('olleH hows it gniog')).toBe('Hello hows it going');
});
