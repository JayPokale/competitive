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
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
var lcm = function (a, b) {
  return (a * b) / gcd(a, b);
};
