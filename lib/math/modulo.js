class Modulo {
  /**
   * @param {number} modulo
   */
  constructor(modulo) {
    /** @type {number} @readonly */
    this.modulo = modulo;

    /** @private @type {undefined | number} */
    this._phi = undefined;
  }

  /**
   * @param  {...number} numbers
   */
  add(...numbers) {
    let result = 0;
    for (let number of numbers) {
      result = (result + (number % this.modulo)) % this.modulo;
    }

    if (result < 0) result += this.modulo;
    return result;
  }

  /**
   * @private
   * @param {number} a
   * @param {number} b
   * @returns {number}
   */
  _quickMul(a, b) {
    a = ((a % this.modulo) + this.modulo) % this.modulo;
    b = ((b % this.modulo) + this.modulo) % this.modulo;
    if (a === 0 || b === 0) return 0;
    if (Math.log2(a) + Math.log2(b) < 50) return (a * b) % this.modulo;

    let result = 0;
    while (b) {
      while (b % 2 === 0) {
        a = (a * 2) % this.modulo;
        b /= 2;
      }

      if (b % 2 !== 0) {
        result = (result + a) % this.modulo;
        b--;
      }
    }

    return result;
  }

  /**
   * @param  {...number} numbers
   */
  mul(...numbers) {
    let result = 1;
    for (let number of numbers) {
      result = this._quickMul(result, number);
      if (result === 0) return 0;
    }

    if (result < 0) result += this.modulo;
    return result;
  }

  /**
   * @param {number} a
   * @param {number} b
   * @returns {number}
   */
  pow(a, b) {
    a = ((a % this.modulo) + this.modulo) % this.modulo;
    if (a === 0) return 0;

    let result = 1;
    while (b) {
      while (b % 2 === 0) {
        a = this._quickMul(a, a);
        b /= 2;
      }

      if (b % 2 !== 0) {
        result = this._quickMul(result, a);
        b--;
      }
    }

    return result;
  }

  /**
   * @param {number} a
   * @returns {number}
   */
  getInverse = function (a) {
    return this.pow(a, this.getPhi() - 1);
  };

  /**
   * @param {number} a
   * @param {number} b
   * @returns {number}
   */
  div = function (a, b) {
    return this._quickMul(a, this.getInverse(b));
  };

  /**
   * @returns {number}
   */
  getPhi = function () {
    if (this._phi !== undefined) return this._phi;

    let result = this.modulo;
    let temp = this.modulo;
    for (let i = 2; i <= Math.sqrt(temp); i++) {
      if (temp % i === 0) {
        result /= i;
        result *= i - 1;
      }
      while (temp % i === 0) temp /= i;
    }
    if (temp > 1) {
      result /= temp;
      result *= temp - 1;
    }

    this._phi = result;
    return result;
  };
}

module.exports = Modulo;
