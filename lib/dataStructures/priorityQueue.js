/**
 * PriorityQueue implementation.
 *
 * @class
 * @classdesc Represents a SumBST.
 *
 * @summary
 * Time Complexities:
 *   - Push: O(logn)
 *   - Pop: O(logn)
 *   - Size: O(1)
 *   - isEmpty: O(1)
 *   - Peek: O(1)
 *   - Replace: O(logn)
 */

class PriorityQueue {
  #heap;
  #comparator;

  /**
   * @param {(a: any, b: any) => boolean} [comparator=(a, b) => a > b]
   */
  constructor(comparator = (a, b) => a > b) {
    /**
     * @type {any[]}
     * @private
     */
    this.#heap = [];

    /**
     * @type {(a: any, b: any) => boolean}
     * @private
     */
    this.#comparator = comparator;
  }

  /**
   * @returns {number}
   */
  size() {
    return this.#heap.length;
  }

  /**
   * @returns {boolean}
   */
  isEmpty() {
    return this.size() === 0;
  }

  /**
   * @returns {any}
   */
  peek() {
    return this.#heap[0];
  }

  /**
   * @param {...any} values
   * @returns {number}
   */
  push(...values) {
    values.forEach((value) => {
      this.#heap.push(value);
      this.#siftUp();
    });
    return this.size();
  }

  /**
   * @returns {any}
   */
  pop() {
    const poppedValue = this.peek();
    const bottom = this.size() - 1;
    if (bottom > 0) {
      this.#swap(0, bottom);
    }
    this.#heap.pop();
    this.#siftDown();
    return poppedValue;
  }

  /**
   * @param {any} value
   * @returns {any}
   */
  replace(value) {
    const replacedValue = this.peek();
    this.#heap[0] = value;
    this.#siftDown();
    return replacedValue;
  }

  /**
   * @param {number} i
   * @returns {number}
   */
  #parent = (i) => ((i + 1) >>> 1) - 1;

  /**
   * @param {number} i
   * @returns {number}
   */
  #left = (i) => (i << 1) + 1;

  /**
   * @param {number} i
   * @returns {number}
   */
  #right = (i) => (i + 1) << 1;

  /**
   * @param {number} i
   * @param {number} j
   * @returns {boolean}
   * @private
   */
  #greater(i, j) {
    return this.#comparator(this.#heap[i], this.#heap[j]);
  }

  /**
   * @param {number} i
   * @param {number} j
   * @private
   */
  #swap(i, j) {
    [this.#heap[i], this.#heap[j]] = [this.#heap[j], this.#heap[i]];
  }

  /**
   * @private
   */
  #siftUp() {
    let node = this.size() - 1;
    while (node > 0 && this.#greater(node, this.#parent(node))) {
      this.#swap(node, this.#parent(node));
      node = this.#parent(node);
    }
  }

  /**
   * @private
   */
  #siftDown() {
    let node = 0;
    while (
      (this.#left(node) < this.size() &&
        this.#greater(this.#left(node), node)) ||
      (this.#right(node) < this.size() &&
        this.#greater(this.#right(node), node))
    ) {
      let maxChild =
        this.#right(node) < this.size() &&
        this.#greater(this.#right(node), this.#left(node))
          ? this.#right(node)
          : this.#left(node);
      this.#swap(node, maxChild);
      node = maxChild;
    }
  }
}

module.exports = PriorityQueue;
