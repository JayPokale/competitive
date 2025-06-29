/**
 * @param {number} n
 * @returns {number[]}
 */
var getPrimes = function (n) {
  if (n < 2) return [];
  var list = new Uint32Array(n + 1);
  for (var i = 3; i <= n; i += 2) {
    if (list[i]) continue;
    for (var j = i * i; j <= n; j += i) {
      list[j] = 1;
    }
  }
  var primes = [2];
  for (var i = 3; i <= n; i += 2) {
    if (!list[i]) primes.push(i);
  }
  return primes;
};
