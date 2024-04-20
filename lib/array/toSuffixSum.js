/**
 * @param {number[]} arr
 * @returns {number[]}
 */
var toSuffixSum = function (arr) {
  arr = [...arr]
  for (var i = arr.length - 2; i >= 0; --i) {
    arr[i] += arr[i + 1];
  }
  return arr;
};
