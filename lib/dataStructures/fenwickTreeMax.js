class FenwickTreeMax {
  /**
   * @constructor
   * @param {number} n
   */
  constructor(n) {
    /**
     * @type {number}
     */
    this.size = n;

    /**
     * @type {Array<number>}
     */
    this.segTree = new Array(n << 1).fill(-Infinity);
  }

  /**
   * @param {number} index
   * @param {number} val
   */
  update(index, val) {
    var n = this.size;
    var idx = index + n;
    this.segTree[idx] = Math.max(this.segTree[idx], val);
    idx >>= 1;

    while (idx) {
      this.segTree[idx] = Math.max(
        this.segTree[idx << 1],
        this.segTree[(idx << 1) | 1]
      );
      idx >>= 1;
    }
  }

  /**
   * Max value in range [left, right]
   *
   * @param {number} left
   * @param {number} right
   * @returns {number}
   */
  maxRange(left, right) {
    var max = -Infinity;
    var l = left + this.size;
    var r = right + this.size;
    while (l <= r) {
      if (l % 2 === 1) max = Math.max(max, this.segTree[l++]);
      if (r % 2 === 0) max = Math.max(max, this.segTree[r--]);
      l >>= 1;
      r >>= 1;
    }
    return max;
  }
}
