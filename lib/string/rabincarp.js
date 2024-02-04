class RabinCarp {
  // h(x) = 33 * h(x - 1) + s(x)

  /**
   * @param {string} string
   */
  constructor(string) {
    this.mod = 1e9 + 7;
    this.hash = this.hashString(string);
    this.length = string.length;
    this.inv32 = 281250002; // Mod inverse of 32
    this.inv33 = 939393946; // Mod inverse of 33
  }

  /**
   * @param {string} string
   * @returns {number}
   */
  hashString(string) {
    var hash = 0;
    for (var i = 0; i < string.length; ++i) {
      hash = (33 * hash + string.charCodeAt(i)) % this.mod;
    }
    return hash;
  }

  /**
   * @param {string} char
   */
  push(char) {
    this.hash = (33 * this.hash + char.charCodeAt(0)) % this.mod;
    ++this.length;
  }

  /**
   * @param {string} char
   */
  pop(char) {
    this.hash += this.mod - char.charCodeAt(0);
    this.hash = (this.hash * this.inv33) % this.mod;
    --this.length;
  }

  /**
   * @param {string} char
   */
  shift(char) {
    var gpSum = ((this.powMod(33, this.length--) - 1) * this.inv32) % this.mod;
    var hash = (char.charCodeAt(0) * gpSum) % this.mod;
    this.hash = (this.hash - hash + this.mod) % this.mod;
  }

  /**
   * @param {string} char
   */
  unshift(char) {
    var gpSum = ((this.powMod(33, ++this.length) - 1) * this.inv32) % this.mod;
    var hash = (char.charCodeAt(0) * gpSum) % this.mod;
    this.hash = (this.hash + hash) % this.mod;
  }

  /**
   * @param {string} oldChar
   * @param {string} newChar
   */
  rollBack(oldChar, newChar) {
    this.shift(oldChar);
    this.push(newChar);
  }

  /**
   * @param {string} oldChar
   * @param {string} newChar
   */
  rollFront(oldChar, newChar) {
    this.pop(oldChar);
    this.unshift(newChar);
  }

  /**
   * @param {number} base
   * @param {number} exp
   * @returns {number}
   */
  powMod(base, exp) {
    if (exp === 0) return 1;
    if (exp % 2 === 0) return Math.pow(powmod(base, exp / 2), 2) % this.mod;
    return (base * powmod(base, exp - 1)) % this.mod;
  }
}
