/**
 * @param {number[]} nums
 * @return {number}
 */
var maxBalancedSubsequenceSum = function (nums) {
  var n = nums.length;
  var ft = new FenwickTree(n);
  var index = new Uint32Array(n)
    .map((_, i) => i)
    .sort((a, b) => nums[a] - nums[b] - a + b);

  var res = Math.max(...nums);
  for (var i of index) {
    var best = ft.query(i) + nums[i];
    res = Math.max(res, best);
    ft.update(i, best);
  }

  return res;
};

class FenwickTree {
  /**
   * @param {number} size
   */
  constructor(size) {
    /**@type {Uint32Array} */
    this.bit = Array(size).fill(0);
  }

  /**
   * @param {number} index
   * @param {number} value
   */
  update(index, value) {
    while (index < this.bit.length) {
      this.bit[index] = Math.max(this.bit[index], value);
      index |= index + 1;
    }
  }

  /**
   * @param {number} index
   * @returns {number}
   */
  query(index) {
    var res = 0;

    while (index >= 0) {
      res = Math.max(res, this.bit[index]);
      index &= index + 1;
      --index;
    }

    return res;
  }
}
