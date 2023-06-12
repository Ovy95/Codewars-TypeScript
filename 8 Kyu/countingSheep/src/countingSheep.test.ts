import countingSheep from './countingSheep';

test('Returns 1 sheep in total', () => {
  expect(countingSheep([true, false, null, undefined])).toBe(1);
});

test('Returns 2 sheep in total', () => {
  expect(countingSheep([true, true, false, null, undefined])).toBe(2);
});

test('Codewars Test expect 17 sheep', () => {
  expect(
    countingSheep([
      true,
      true,
      true,
      false,
      true,
      true,
      true,
      true,
      true,
      false,
      true,
      false,
      true,
      false,
      false,
      true,
      true,
      true,
      true,
      true,
      false,
      false,
      true,
      true,
    ]),
  ).toBe(17);
});
