/**
 * @param {number} n
 * @returns {number}
 */
var countBitsUpto = function (n) {
  ++n;
  var power = 1;
  var cnt = n >> 1;

  while (1 << power <= n) {
    var cur = n >> power;
    cnt += (cur >> 1) << power;
    if (cur & 1) {
      cnt += n & ((1 << power) - 1);
    }
    ++power;
  }

  return cnt;
};

/**
 * Count i'th bit upto n
 *
 * @param {number} n
 * @param {number} i
 * @returns {number}
 */
var sumBit = function (n, i) {
  var res = (n >> (i + 1)) << i;
  var cur = n & ((1 << (i + 1)) - 1);
  if (cur > 1 << i) res += cur - (1 << i);
  return res;
};

/**
 * @param {number} n
 * @returns {number}
 */
var countBitsUpto = function (n) {
  ++n;
  var res = 0;
  for (var i = 0; i < 52; ++i) res += sumBit(n, i);
  return res;
};
