class PriorityQueue {
  /**
   * @param {function} [compareFunction]
   */
  constructor(compareFunction = undefined) {
    /**
     * @type {Array<*>}
     * @private
     */
    this.items = [];

    /**
     * @type {function}
     * @private
     */
    this.compare = compareFunction || ((a, b) => a - b);
  }

  /**
   * @param {*} element
   * @returns {void}
   */
  enqueue(element) {
    this.items.push(element);
    this.items.sort(this.compare);
  }

  /**
   * @returns {*}
   */
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift();
  }

  /**
   * @returns {*}
   */
  front() {
    return this.isEmpty() ? null : this.items[0];
  }

  /**
   * @returns {*}
   */
  back() {
    return this.isEmpty() ? null : this.items[this.items.length - 1];
  }

  /**
   * @returns {boolean}
   */
  isEmpty() {
    return this.items.length === 0;
  }

  /**
   * @returns {number}
   */
  size() {
    return this.items.length;
  }

  /**
   * @param {*} element
   * @returns {void}
   */
  remove(element) {
    const index = this.items.indexOf(element);
    if (index !== -1) {
      this.items.splice(index, 1);
      this.items.sort(this.compare);
    }
  }
}
