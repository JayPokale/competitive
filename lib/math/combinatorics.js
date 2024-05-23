/**
 * @param {number} n
 * @param {number} r
 * @returns {number}
 */
var comb = function (n, r) {
  if (r < 0 || r > n) return 0;
  var res = 1;
  for (var i = 0; i < r; ++i) {
    res = (res * (n - i)) / (i + 1);
  }
  return res;
};

/**
 * @param {number} n
 * @param {number} r
 * @returns {number}
 */
var perm = function (n, r) {
  if (r < 0 || r > n) return 0;
  var res = 1;
  for (let i = 0; i < r; ++i) {
    res *= n - i;
  }
  return res;
};
