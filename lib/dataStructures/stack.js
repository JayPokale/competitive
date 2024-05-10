class Stack {
  /**
   * @param {number} n
   */
  constructor(n) {
    this.n = n;
    this.size = 0;
    this.data = new Uint8Array(n);
  }

  /**
   * @param {number} element
   * @returns {number}
   */
  push(element) {
    if (this.size === n - 1) throw new Error("Stack Overflow");
    return (this.data[this.size++] = element);
  }

  /**
   * @returns {number}
   */
  pop() {
    return this.data[--this.size];
  }

  /**
   * @returns {number}
   */
  peek() {
    return this.data[this.size - 1];
  }

  /**
   * @returns {boolean}
   */
  empty() {
    return this.size === 0;
  }

  /**
   * @returns {number}
   */
  getSize() {
    return this.size;
  }
}
