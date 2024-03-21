/**
 * Represents a Segment Tree data structure for range maximum queries.
 *
 * @class
 * @description
 * Time Complexities:
 *   - update: O(logn)
 *   - maxRange: O(logn)
 */
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
    this.segTree = new Uint32Array(n << 1);
  }

  /**
   * @param {number} index
   * @param {number} val
   */
  update(index, val) {
    var n = this.size;
    var idx = index + n;
    this.segTree[idx] = Math.max(this.segTree[idx], val);
    idx = idx >> 1;

    while (idx) {
      this.segTree[idx] = Math.max(
        this.segTree[idx << 1],
        this.segTree[(idx << 1) | 1]
      );
      idx = idx >> 1;
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
    var max = 0;
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
