class BinomialCoefficient {
  /**
   * @param {number} maxn
   * @param {BigInt} mod
   */
  constructor(maxn, mod) {
    this.MAXN = maxn;
    this.MOD = mod;
    this.factorials = new Array(this.MAXN + 1);
    this.inverses = new Array(this.MAXN + 1);

    this.computeFactorials(this.MOD);
    this.computeInverses(this.MOD);
  }

  /**
   * @param {BigInt} base
   * @param {BigInt} exponent
   * @param {BigInt} mod
   * @returns {BigInt}
   */
  modExp(base, exponent, mod) {
    base %= mod;
    let result = 1n;
    while (exponent > 0n) {
      if (exponent & 1n) {
        result = (result * base) % mod;
      }
      base = (base * base) % mod;
      exponent >>= 1n;
    }
    return result;
  }

  /**
   * @param {BigInt} mod
   */
  computeFactorials(mod) {
    this.factorials[0] = 1n;
    for (let i = 1; i <= this.MAXN; i++) {
      this.factorials[i] = (this.factorials[i - 1] * BigInt(i)) % mod;
    }
  }

  /**
   * @param {BigInt} mod
   */
  computeInverses(mod) {
    this.inverses[this.MAXN] = this.modExp(
      this.factorials[this.MAXN],
      mod - 2n,
      mod
    );
    for (let i = this.MAXN; i >= 1; i--) {
      this.inverses[i - 1] = (this.inverses[i] * BigInt(i)) % mod;
    }
  }

  /**
   * @param {number} total
   * @param {number} ones
   * @param {BigInt} mod
   * @returns {BigInt}
   */
  nCr(total, ones, mod) {
    return (
      (((this.factorials[total] * this.inverses[ones]) % mod) *
        this.inverses[total - ones]) %
      mod
    );
  }
}
