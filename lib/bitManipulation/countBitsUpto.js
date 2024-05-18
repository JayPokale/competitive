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
