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
    var cur = this.node;
    for (var i = this.n; i >= 0; --i) {
      if (!cur[2]) return;
      var bit = (num >> i) & 1;
      if (!cur[bit]) return;
      --cur[2];
      cur = cur[bit];
    }
    return;
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
    return cur[num & 1] !== 0;
  }

  /**
   * @param {number} n
   * @returns {number}
   */
  findNearest(num) {
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

var trie = new BitTrie(4);
trie.insert(5);
trie.insert(10);
console.log(trie.has(5));
console.log(trie.has(10));
console.log(trie);
console.log(trie.remove(5));
console.log(trie);

module.exports = BitTrie;
