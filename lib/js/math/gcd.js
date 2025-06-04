/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
var gcd = function (a, b) {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};

/**
 * @param {number[]} nums
 * @returns {number}
 */
var arrGcd = function (nums) {
  var res = nums[0];
  for (var i = 1; i < nums.length; ++i) {
    res = gcd(res, nums[i]);
  }
  return res;
};
