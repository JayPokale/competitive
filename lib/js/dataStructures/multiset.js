class Multiset {
  constructor() {
    /**
     * @type {Map<any, number>}
     */
    this.map = new Map();
  }

  /**
   * @param {any} value
   */
  add(value) {
    if (this.map.has(value)) {
      this.map.set(value, 1 + this.map.get(value));
    } else {
      this.map.set(value, 1);
    }
  }

  /**
   * @param {any} value
   */
  delete(value) {
    if (!this.map.has(value)) return;
    this.map.set(value, this.map.get(value) - 1);
    if (!this.map.get(value)) this.map.delete(value);
  }

  /**
   * @param {any} value
   * @returns {number}
   */
  get(value) {
    return this.map.get(value) || 0;
  }

  /**
   * @param {any} value
   * @returns {number}
   */
  has(value) {
    return this.map.has(value);
  }
}
