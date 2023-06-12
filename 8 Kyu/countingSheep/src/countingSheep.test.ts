import countingSheep from './countingSheep';

test('Returns 1 sheep in total', () => {
  expect(countingSheep([true, false, null, undefined])).toBe(1);
});
