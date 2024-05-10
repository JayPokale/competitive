class Stack {
  /**
   * @param {number} limit
   */
  constructor(limit) {
    this.top = 0;
    this.data = new Uint8Array(n);
    this.limit = limit;
  }

  /**
   * @param {number} element
   * @returns {number}
   */
  push(element) {
    if (this.top === this.limit - 1) throw new Error("Stack Overflow");
    return (this.data[this.top++] = element);
  }

  /**
   * @returns {number}
   */
  pop() {
    return this.data[--this.top];
  }

  /**
   * @returns {number}
   */
  peek() {
    return this.data[this.top - 1];
  }

  /**
   * @returns {boolean}
   */
  empty() {
    return this.top === 0;
  }

  /**
   * @returns {number}
   */
  getSize() {
    return this.top;
  }
}
