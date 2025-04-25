/**
 * @param {number[]} array
 * @returns {number[][]}
 */
var combinations = function (array) {
  return Array(1 << array.length)
    .fill()
    .map((_, i) => array.filter((_, j) => i & (1 << j)));
};

/**
 * @param {number[]} array
 * @param {number} length
 * @returns {number[][]}
 */
var combinations = function (array, length) {
  if (length === 0) return [[]];
  if (array.length === 0) return [];

  const first = array[0];
  const rest = array.slice(1);

  const skip = cs(rest, length);
  const take = cs(rest, length - 1).map((c) => [first, ...c]);

  return [...skip, ...take];
};
