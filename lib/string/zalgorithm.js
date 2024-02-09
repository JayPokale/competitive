/**
 * @param {string} str
 * @returns {number[]}
 */
var zFunction = function (str) {
  var n = str.length;
  var z = new Array(n).fill(0);

  for (var i = 1, l = 0, r = 0; i < n; ++i) {
    if (i <= r) {
      z[i] = Math.min(z[i - l], r - i + 1);
    }

    while (i + z[i] < n && str[z[i]] === str[i + z[i]]) {
      ++z[i];
    }

    if (i + z[i] - 1 > r) {
      l = i;
      r = i + z[i] - 1;
    }
  }

  return z;
};

/**
 * @param {string} text
 * @param {string} pattern
 * @returns {number[]}
 */
var zAlgorithm = function (text, pattern) {
  var z = zFunction(pattern + "$" + text);
  var res = [];
  for (var i = 0; i < z.length; ++i) {
    if (z[i] === pattern.length) {
      res.push(i - pattern.length - 1);
    }
  }
  return res;
};

console.log(zAlgorithm("xaacabzaac", "aac"));
