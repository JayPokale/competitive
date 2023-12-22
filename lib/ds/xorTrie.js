class XORTrie {
  /**
   * @param {number} n
   */
  constructor(n = 32) {
    this.n = n;
    this.node = new Array(2).fill(null);
  }

  /**
   * @param {number} n
   */
  insert(num) {
    var cur = this.node;
    for (var i = this.n; i > 0; --i) {
      var bit = (num >> i) & 1;
      if (!cur[bit]) {
        cur[bit] = new Array(2).fill(null);
      }
      cur = cur[bit];
    }
    cur[num & 1] = true;
  }

  /**
   * @param {number} n
   * @returns {boolean}
   */
  has(num) {
    var cur = this.node;
    for (var i = this.n; i > 0; --i) {
      var bit = (num >> i) & 1;
      if (!cur[bit]) return false;
      cur = cur[bit];
    }
    return cur[num & 1] === true;
  }

  /**
   * @param {number} n
   * @returns {number}
   */
  findNearestXOR(num) {
    num = ~num >>> 0;
    var cur = this.node;
    var res = 0;
    for (var i = this.n; i >= 0; --i) {
      var bit = (num >> i) & 1;
      if (cur[bit]) {
        cur = cur[bit];
        res |= bit << i;
      } else {
        cur = cur[bit ^ 1];
        res |= (bit ^ 1) << i;
      }
    }
    return res;
  }
}

module.exports = XORTrie;
