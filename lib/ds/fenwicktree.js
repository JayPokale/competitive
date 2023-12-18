class FenwickTree {
  /**
   * @param {number} size
   */
  constructor(size) {
    /**@type {Uint32Array} */
    this.bit = Uint32Array(size);
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
}

module.exports = FenwickTree;
