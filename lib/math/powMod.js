/**
 * @param {number} base
 * @param {number} exp
 * @param {number} mod
 * @returns {number}
 */
var powMod = function (base, exp, mod) {
  if (exp === 0) return 1;
  if (exp % 2 === 0) return Math.pow(powMod(base, exp / 2, mod), 2) % mod;
  return (base * powMod(base, exp - 1, mod)) % mod;
};
