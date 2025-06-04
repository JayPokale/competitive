class FenwickTree {
  /**
   * @param {number} size
   */
  constructor(size) {
    /**@type {Int32Array} */
    this.bit = new Int32Array(size);
  }

  /**
   * @param {number} index
   * @param {number} value
   */
  update(index, value) {
    while (index < this.bit.length) {
      this.bit[index] += value;
      index |= index + 1;
    }
  }

  /**
   * @param {number} index
   * @returns {number}
   */
  query(index) {
    var sum = 0;

    while (index >= 0) {
      sum += this.bit[index];
      index &= index + 1;
      --index;
    }

    return sum;
  }

  /**
   * @param {number} start
   * @param {number} end
   * @returns {number}
   */
  rangedQuery(start, end) {
    if (start > end || start < 0 || end >= this.bit.length) {
      throw new Error("Invalid range");
    }

    var sumEnd = this.query(end);
    var sumStart = start > 0 ? this.query(start - 1) : 0;

    return sumEnd - sumStart;
  }
}
