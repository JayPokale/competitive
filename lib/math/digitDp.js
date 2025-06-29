/**
 * @param {string} lo
 * @param {string} hi
 * @returns {number}
 */
var digitDp = function (lo, hi) {
  lo = "0".repeat(hi.length - lo.length) + lo;
  var map = new Map();

  /**
   * @param {number} index
   * @param {boolean} isGreaterThanLow
   * @param {boolean} isLesserThanHigh
   * @param {number} prev
   * @param {boolean} isZero
   * @returns {number}
   */
  var dp = function (index, isGreaterThanLow, isLesserThanHigh, prev, isZero) {
    if (index === hi.length) return 1;
    var key = [index, isGreaterThanLow, isLesserThanHigh, prev, isZero].join();
    if (map.has(key)) return map.get(key);

    var res = 0;
    var l = isGreaterThanLow ? 0 : Number(lo[index]);
    var r = isLesserThanHigh ? 9 : Number(hi[index]);

    for (var i = l; i <= r; ++i) {
      if (1 /* Add Your Condition*/) {
        res += dp(
          index + 1,
          isGreaterThanLow || i > Number(lo[index]),
          isLesserThanHigh || i < Number(hi[index]),
          i,
          isZero || i !== 0
        );
        res %= 1e9 + 7;
      }
    }

    map.set(key, res);
    return res;
  };

  return dp(0, false, false, 0, false);
};
