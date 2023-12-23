/**
 * @param {number} num
 * @returns {number}
 */
var flipBits = function (num, len = 32) {
  var res = 0;
  for (var i = 0; i < len; ++i) {
    res |= 1 << i;
  }
  return res ^ num;
};

module.exports = flipBits;
