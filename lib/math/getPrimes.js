/**
 * @param {number} n
 * @returns {number[]}
 */
var getPrimes = function (n) {
  var list = new Uint32Array(n);
  for (var i = 2; i <= n; ++i) {
    if (list[i]) continue;
    for (var j = i * i; j < n; j += i) {
      list[j] = 1;
    }
  }
  var primes = [];
  for (var i = 2; i < n; ++i) {
    if (!list[i]) primes.push(i);
  }
  return primes;
};
