/**
 * @param {number} num
 * @returns {boolean}
 */
var isPrime = function (num) {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};
