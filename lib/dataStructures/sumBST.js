/**
 * SumBST implementation.
 *
 * @class
 * @classdesc Represents a SumBST.
 *
 * @summary
 * Time Complexities:
 *   - Add: O(log N)
 *   - Remove: O(log N)
 *   - Get Size: O(1).
 *   - Update Size: O(1).
 *   - Rotate Right: O(1).
 *   - Rotate Left: O(1).
 *   - Balance: O(1).
 *   - Get Sum of K Smallest: O(log N)
 *   - Get Sum of K Largest: O(log N)
 *   - Get Kth Smallest: O(log N)
 *   - Get Kth Largest: O(log N)
 */

class SumBST {
  constructor() {
    this.root = null;
  }

  /**
   * @param {number} value
   * @returns {Node}
   */
  Node(value) {
    /**
     * @typedef {Object} Node
     * @property {number} value
     * @property {Node} left
     * @property {Node} right
     * @property {number} size
     */
    return {
      value,
      left: null,
      right: null,
      size: 1,
    };
  }

  /**
   * @param {Node} node
   * @returns {number}
   */
  getSize(node) {
    return node ? node.size : 0;
  }

  /**
   * @param {Node} node
   */
  updateSize(node) {
    if (node) {
      node.size = this.getSize(node.left) + this.getSize(node.right) + 1;
    }
  }

  /**
   * @param {Node} y
   * @returns {Node}
   */
  rotateRight(y) {
    if (!y || !y.left) {
      return y;
    }

    const x = y.left;
    y.left = x.right;
    x.right = y;
    this.updateSize(y);
    this.updateSize(x);
    return x;
  }

  /**
   * @param {Node} x
   * @returns {Node}
   */
  rotateLeft(x) {
    if (!x || !x.right) {
      return x;
    }

    const y = x.right;
    x.right = y.left;
    y.left = x;
    this.updateSize(x);
    this.updateSize(y);
    return y;
  }

  /**
   * @param {Node} node
   * @returns {Node}
   */
  balance(node) {
    if (!node) {
      return null;
    }

    const leftSize = this.getSize(node.left);
    const rightSize = this.getSize(node.right);

    if (leftSize > rightSize + 1) {
      if (this.getSize(node.left.right) > this.getSize(node.left.left)) {
        node.left = this.rotateLeft(node.left);
      }
      node = this.rotateRight(node);
    } else if (rightSize > leftSize + 1) {
      if (this.getSize(node.right.left) > this.getSize(node.right.right)) {
        node.right = this.rotateRight(node.right);
      }
      node = this.rotateLeft(node);
    }

    return node;
  }

  /**
   * @param {number} value
   */
  add(value) {
    this.root = this.#add(this.root, value);
  }

  /**
   * @private
   * @param {Node} node
   * @param {number} value
   * @returns {Node}
   */
  #add(node, value) {
    if (!node) {
      return this.Node(value);
    }

    if (value < node.value) {
      node.left = this.#add(node.left, value);
    } else {
      node.right = this.#add(node.right, value);
    }

    this.updateSize(node);
    return this.balance(node);
  }

  /**
   * @param {number} value
   */
  remove(value) {
    this.root = this.#remove(this.root, value);
  }

  /**
   * @private
   * @param {Node} node
   * @param {number} value
   * @returns {Node}
   */
  #remove(node, value) {
    if (!node) {
      return null;
    }

    if (value < node.value) {
      node.left = this.#remove(node.left, value);
    } else if (value > node.value) {
      node.right = this.#remove(node.right, value);
    } else {
      if (!node.left) {
        return node.right;
      } else if (!node.right) {
        return node.left;
      }

      const minNode = this.#findMin(node.right);
      node.value = minNode.value;
      node.right = this.#remove(node.right, minNode.value);
    }

    this.updateSize(node);
    return this.balance(node);
  }

  /**
   * @private
   * @param {Node} node
   * @returns {Node}
   */
  #findMin(node) {
    while (node.left) {
      node = node.left;
    }
    return node;
  }

  /**
   * @param {number} k
   * @returns {number}
   */
  getSumOfKSmallest(k) {
    return this.#getSumOfKSmallest(this.root, k);
  }

  /**
   * @private
   * @param {Node} node
   * @param {number} k
   * @returns {number}
   */
  #getSumOfKSmallest(node, k) {
    if (!node) {
      return 0;
    }

    const leftSize = this.getSize(node.left);

    if (k <= leftSize) {
      return this.#getSumOfKSmallest(node.left, k);
    } else if (k === leftSize + 1) {
      return this.#getSumOfKSmallest(node.left, k - 1) + node.value;
    } else {
      return (
        this.#getSumOfKSmallest(node.left, k) +
        node.value +
        this.#getSumOfKSmallest(node.right, k - leftSize - 1)
      );
    }
  }

  /**
   * @param {number} k
   * @returns {number}
   */
  getSumOfKLargest(k) {
    return this.#getSumOfKLargest(this.root, k);
  }

  /**
   * @private
   * @param {Node} node
   * @param {number} k
   * @returns {number}
   */
  #getSumOfKLargest(node, k) {
    if (!node) {
      return 0;
    }

    const rightSize = this.getSize(node.right);

    if (k <= rightSize) {
      return this.#getSumOfKLargest(node.right, k);
    } else if (k === rightSize + 1) {
      return this.#getSumOfKLargest(node.right, k - 1) + node.value;
    } else {
      return (
        this.#getSumOfKLargest(node.right, k) +
        node.value +
        this.#getSumOfKLargest(node.left, k - rightSize - 1)
      );
    }
  }

  /**
   * @param {number} k
   * @returns {number|null}
   */
  getKthSmallest(k) {
    return this.#getKthSmallest(this.root, k);
  }

  /**
   * @private
   * @param {Node} node
   * @param {number} k
   * @returns {number|null}
   */
  #getKthSmallest(node, k) {
    if (!node) {
      return null;
    }

    const leftSize = this.getSize(node.left);

    if (k <= leftSize) {
      return this.#getKthSmallest(node.left, k);
    } else if (k === leftSize + 1) {
      return node.value;
    } else {
      return this.#getKthSmallest(node.right, k - leftSize - 1);
    }
  }

  /**
   * @param {number} k
   * @returns {number|null}
   */
  getKthLargest(k) {
    return this.#getKthLargest(this.root, k);
  }

  /**
   * @private
   * @param {Node} node
   * @param {number} k
   * @returns {number|null}
   */
  #getKthLargest(node, k) {
    if (!node) {
      return null;
    }

    const rightSize = this.getSize(node.right);

    if (k <= rightSize) {
      return this.#getKthLargest(node.right, k);
    } else if (k === rightSize + 1) {
      return node.value;
    } else {
      return this.#getKthLargest(node.left, k - rightSize - 1);
    }
  }
}
