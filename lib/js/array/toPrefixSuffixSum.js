/**
 * @param {number[]} arr
 * @returns {number[]} // arr[i] = sum(arr[0..i])
 */
var toPrefixSum = function (arr) {
  arr = [...arr];
  for (var i = 1; i < arr.length; ++i) {
    arr[i] += arr[i - 1];
  }
  return arr;
};

/**
 * @param {number[]} arr
 * @returns {number[]} // arr[i] = sum(arr[i..n])
 */
var toSuffixSum = function (arr) {
  arr = [...arr];
  for (var i = arr.length - 2; i >= 0; --i) {
    arr[i] += arr[i + 1];
  }
  return arr;
};
