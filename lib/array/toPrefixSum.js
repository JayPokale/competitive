/**
 * @param {number[]} arr
 * @returns {number[]}
 */
var toPrefixSum = function (arr) {
  arr = [...arr];
  for (var i = 1; i < arr.length; ++i) {
    arr[i] += arr[i - 1];
  }
  return arr;
};
