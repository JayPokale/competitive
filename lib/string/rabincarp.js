/**
 * @class RabinCarp
 * @implements h(x) = 33 * h(x - 1) + s(x)
 */
class RabinCarp {
  /**
   * @param {string} string
   */
  constructor(string) {
    this.mod = 1e9 + 7;
    this.hash = this.hashString(string);
    this.length = string.length;
    this.inv33 = 939393946;
  }

  /**
   * @param {string} string
   * @returns {number}
   */
  hashString(string) {
    var hash = 0;
    for (var i = 0; i < string.length; ++i) {
      hash = (hash * 33 + string.charCodeAt(i)) % this.mod;
    }
    return hash;
  }

  /**
   * @param {string} char
   */
  pop(char) {
    this.hash = this.modMul(this.hash - char.charCodeAt(0), this.inv33);
    --this.length;
  }

  /**
   * @param {string} char
   */
  push(char) {
    this.hash = (this.hash * 33 + char.charCodeAt(0)) % this.mod;
    ++this.length;
  }

  /**
   * @param {string} char
   */
  shift(char) {
    this.hash =
      (this.hash +
        this.mod -
        this.modMul(char.charCodeAt(0), this.powMod(33, --this.length))) %
      this.mod;
  }

  /**
   * @param {string} char
   */
  unshift(char) {
    this.hash =
      (this.hash +
        this.modMul(char.charCodeAt(0), this.powMod(33, this.length++))) %
      this.mod;
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
   * @param {number} mod
   * @returns {number}
   */
  powMod = function (base, exp) {
    if (exp === 0) return 1;
    var res = 1;
    while (exp) {
      if (exp & 1) res = this.modMul(res, base);
      base = this.modMul(base, base);
      exp >>= 1;
    }
    return res;
  };

  /**
   * @param {number} a
   * @param {number} b
   * @returns {number}
   */
  modMul(a, b) {
    return Number((BigInt(a) * BigInt(b)) % BigInt(this.mod));
  }
}

console.log(new RabinCarp("abcd").hash);

var r1 = new RabinCarp("abc");
var r2 = new RabinCarp("abcdx");
var r3 = new RabinCarp("xabcd");
var r4 = new RabinCarp("bcd");

r1.push("d");
r2.pop("x");
r3.shift("x");
r4.unshift("a");

console.log(r1.hash);
console.log(r2.hash);
console.log(r3.hash);
console.log(r4.hash);
