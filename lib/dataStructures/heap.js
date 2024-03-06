/**
 * @template T
 * @typedef {function(T, T): number} Comparator
 */

/**
 * Heap implementation.
 *
 * @template T
 * @class
 * @summary
 * Time Complexities:
 *   - push: O(logn)
 *   - pop: O(logn)
 *   - size: O(1)
 *   - isEmpty: O(1)
 *   - peek: O(1)
 *   - pushPop: O(logn)
 */

class Heap {
  /**
   * @param {Comparator<T>} [comparator=(a, b) => a - b]
   */
  constructor(comparator = (a, b) => a - b) {
    /**
     * @type {T[]}
     */
    this.heap = [];
    /**
     * @type {Comparator}
     */
    this.comparator = comparator;
  }

  /**
   * @param {T} value
   */
  push(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  /**
   * @returns {T|null}
   */
  pop() {
    if (this.isEmpty()) {
      return null;
    }

    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    var root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();

    return root;
  }

  /**
   * @returns {number}
   */
  size() {
    return this.heap.length;
  }

  /**
   * @returns {boolean}
   */
  isEmpty() {
    return this.heap.length === 0;
  }

  /**
   * @returns {T|null}
   */
  peek() {
    return this.isEmpty() ? null : this.heap[0];
  }

  /**
   * @param {T} value
   * @returns {T|null}
   */
  pushPop(value) {
    if (this.isEmpty()) {
      this.heap.push(value);
      return null;
    }

    var root = this.heap[0];
    this.heap[0] = value;
    this.heapifyDown();

    return root;
  }

  heapifyUp() {
    var currentIndex = this.heap.length - 1;

    while (currentIndex > 0) {
      var parentIndex = (currentIndex - 1) >> 1;
      if (
        this.comparator(this.heap[currentIndex], this.heap[parentIndex]) < 0
      ) {
        this.swap(currentIndex, parentIndex);
        currentIndex = parentIndex;
      } else {
        break;
      }
    }
  }

  heapifyDown() {
    var currentIndex = 0;

    while (true) {
      var leftChildIndex = (currentIndex << 1) + 1;
      var rightChildIndex = (currentIndex << 1) + 2;
      var smallestChildIndex = currentIndex;

      if (
        leftChildIndex < this.heap.length &&
        this.comparator(
          this.heap[leftChildIndex],
          this.heap[smallestChildIndex]
        ) < 0
      ) {
        smallestChildIndex = leftChildIndex;
      }

      if (
        rightChildIndex < this.heap.length &&
        this.comparator(
          this.heap[rightChildIndex],
          this.heap[smallestChildIndex]
        ) < 0
      ) {
        smallestChildIndex = rightChildIndex;
      }

      if (currentIndex !== smallestChildIndex) {
        this.swap(currentIndex, smallestChildIndex);
        currentIndex = smallestChildIndex;
      } else {
        break;
      }
    }
  }

  /**
   * @param {number} i
   * @param {number} j
   */
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
}
