/**
 * @param {number[]} array
 * @returns {number[][]}
 */
var combinations = function (array) {
  return Array(1 << array.length)
    .fill()
    .map((_, i) => array.filter((_, j) => i & (1 << j)));
};

module.exports = combinations;
