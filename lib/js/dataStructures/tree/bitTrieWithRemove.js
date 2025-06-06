class BitTrie {
  /**
   * @param {number} n
   */
  constructor(n = 32) {
    this.n = n;
    this.node = new Array(3).fill(0);
  }

  /**
   * @param {number} n
   */
  insert(num) {
    var cur = this.node;
    for (var i = this.n; i > 0; --i) {
      var bit = (num >> i) & 1;
      if (!cur[bit]) {
        cur[bit] = new Array(3).fill(0);
      }
      ++cur[2];
      cur = cur[bit];
    }
    ++cur[num & 1];
    ++cur[2];
  }

  /**
   * @param {number} n
   */
  remove(num) {
    if (!this.has(num)) {
      var cur = this.node;
      for (var i = this.n; i >= 0; --i) {
        var bit = (num >> i) & 1;
        --cur[2];
        cur = cur[bit];
      }
      --cur;
    }
  }

  /**
   * @param {number} n
   * @returns {boolean}
   */
  has(num) {
    var cur = this.node;
    for (var i = this.n; i > 0; --i) {
      var bit = (num >> i) & 1;
      if (!cur[2] || !cur[bit]) return false;
      cur = cur[bit];
    }
    return cur[num & 1] !== 0;
  }
}
