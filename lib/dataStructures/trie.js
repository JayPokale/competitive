class Trie {
  constructor() {
    this.root = this.#node();
  }

  /**
   * @param {string} word
   */
  insert(word) {
    var cur = this.root;
    for (var x of word) {
      if (!cur.has(x)) cur.set(x, this.#node());
      cur = cur.get(x);
    }
    cur.set("isWord", true);
  }

  /**
   * @param {string} word
   * @returns {boolean}
   */
  has(word) {
    var cur = this.root;
    for (var x of word) {
      if (!cur.has(x)) return false;
      cur = cur.get(x);
    }
    return cur.get("isWord");
  }

  /**
   * @typedef {Map<number | string, Node | boolean>} Node
   * @returns {Node}
   */
  #node() {
    return new Map([["isWord", false]]);
  }
}

module.exports = Trie;
