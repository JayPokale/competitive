/**
 * Using normal number
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

/**
 * Using BigInt
 * @param {bigint} base
 * @param {bigint} exp
 * @param {bigint} mod
 * @returns {bigint}
 */
var powMod = function (base, exp, mod) {
  var res = 1n;
  while (exp > 0n) {
    if (exp % 2n === 1n) res = (res * base) % mod;
    exp >>= 1n;
    base = (base * base) % mod;
  }
  return res;
};
