/**
 * @param {number[]} arr
 * @param {number} x
 * @param {number} lo
 * @param {number} hi
 * @returns {number}
 */
var bisect = function (arr, x, lo = 0, hi = arr.length) {
  while (lo < hi) {
    var mid = Math.floor((lo + hi) / 2);
    if (arr[mid] < x) {
      lo = mid + 1;
    } else if (arr[mid] > x) {
      hi = mid;
    } else {
      return mid;
    }
  }
  return lo;
};

/**
 * @param {number[]} arr
 * @param {number} x
 * @param {number} lo
 * @param {number} hi
 * @returns {number}
 */
var bisectRight = function (arr, x, lo = 0, hi = arr.length) {
  while (lo < hi) {
    var mid = Math.floor((lo + hi) / 2);
    if (arr[mid] <= x) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }
  return lo;
};

/**
 * @param {number[]} arr
 * @param {number} x
 * @param {number} lo
 * @param {number} hi
 * @returns {number}
 */
var bisectLeft = function (arr, x, lo = 0, hi = arr.length) {
  while (lo < hi) {
    var mid = Math.floor((lo + hi) / 2);
    if (arr[mid] < x) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }
  return lo;
};

module.exports = {
  bisect,
  bisectLeft,
  bisectRight,
};
