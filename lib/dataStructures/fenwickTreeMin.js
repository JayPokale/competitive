/**
 * Represents a Segment Tree data structure for range minimum queries.
 *
 * @class
 * @description
 * Time Complexities:
 *   - update: O(logn)
 *   - minRange: O(logn)
 */
class FenwickTreeMin {
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
    this.segTree = new Array(n << 1).fill(Infinity);
  }

  /**
   * @param {number} index
   * @param {number} val
   */
  update(index, val) {
    var n = this.size;
    var idx = index + n;
    this.segTree[idx] = Math.min(this.segTree[idx], val);
    idx >>= 1;

    while (idx) {
      this.segTree[idx] = Math.min(
        this.segTree[idx << 1],
        this.segTree[(idx << 1) | 1]
      );
      idx >>= 1;
    }
  }

  /**
   * Minimum value in range [left, right]
   *
   * @param {number} left
   * @param {number} right
   * @returns {number}
   */
  minRange(left, right) {
    var min = Infinity;
    var l = left + this.size;
    var r = right + this.size;
    while (l <= r) {
      if (l % 2 === 1) min = Math.min(min, this.segTree[l++]);
      if (r % 2 === 0) min = Math.min(min, this.segTree[r--]);
      l >>= 1;
      r >>= 1;
    }
    return min;
  }
}
