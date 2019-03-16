import sum from '../../code/array/sum';

test('sum: nums = [2, 7, 11, 15], target: 9 => [0, 1]', () => {
  expect(sum([2, 7, 11, 15], 9)).toEqual([0, 1]);
})