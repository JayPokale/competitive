/**
 * @class
 *
 *  @description
 * Time Complexities:
 *   - find: O(log n)
 *   - union: O(log n)
 */
class UnionFind {
  /**
   * @param {number} size
   */
  constructor(size) {
    this.parent = new Uint32Array(size).map((_, i) => i);
    this.rank = new Uint32Array(size);
  }

  /**
   * @param {number} i
   * @returns {number}
   */
  find(i) {
    if (this.parent[i] !== i) {
      this.parent[i] = this.find(this.parent[i]);
    }
    return this.parent[i];
  }

  /**
   * @param {number} u
   * @param {number} v
   */
  union(u, v) {
    var x = this.find(u);
    var y = this.find(v);

    if (x !== y) {
      if (this.rank[x] < this.rank[y]) {
        this.parent[x] = y;
      } else {
        this.parent[y] = x;
      }
      if (this.rank[x] === this.rank[y]) {
        ++this.rank[y];
      }
    }
  }
}
