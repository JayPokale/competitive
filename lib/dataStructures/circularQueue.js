class CircularQueue {
  /**
   * @param {number} capacity
   */
  constructor(capacity) {
    /**
     * @private
     * @type {number}
     */
    this._capacity = capacity;
    /**
     * @private
     * @type {number}
     */
    this._size = 0;
    /**
     * @private
     * @type {number}
     */
    this._bottom = 0;

    /**
     * @private
     * @type {T[]}
     */
    this._data = Array(capacity).fill(undefined);
  }

  get size() {
    return this._size;
  }

  /**
   * @param  {...T} items
   */
  enqueue(...items) {
    if (this._size + items.length > this._capacity)
      throw new Error("Queue capacity exceeded.");

    let queueIndex = (this._bottom + this._size) % this._capacity;
    this._size += items.length;
    for (let i = 0; i < items.length; i++) {
      this._data[queueIndex] = items[i];
      queueIndex = (queueIndex + 1) % this._capacity;
    }
  }

  /**
   * @returns {T | undefined}
   */
  dequeue() {
    if (!this._size) return undefined;

    const result = this._data[this._bottom];
    this._bottom = (this._bottom + 1) % this._capacity;
    this._size--;

    return result;
  }

  clear() {
    this._size = 0;
  }
}
