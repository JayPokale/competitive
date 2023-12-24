/**
 * @param {number} base
 * @param {number} exp
 * @param {number} mod
 * @returns {number}
 */
var powMod = function (base, exp, mod) {
  if (exp === 0) return 1;
  if (exp % 2 === 0) {
    return Math.pow(powmod(base, exp / 2, mod), 2) % mod;
  } else {
    return (base * powmod(base, exp - 1, mod)) % mod;
  }
};

module.exports = powMod;
