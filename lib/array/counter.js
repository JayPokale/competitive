/**
 * @param {T[]} arr
 * @returns {Map<T, number>}
 */
var counter = function (arr) {
  var m = new Map();
  for (var x of arr) {
    m.set(x, (m.get(x) || 0) + 1);
  }
  return m;
};

/**
 * @param {string} str
 * @returns {Map<string, number>}
 */
var counter = function (str) {
  var m = new Map();
  for (var i = 0; i < str.length; ++i) {
    m.set(str[i], (m.get(str[i]) || 0) + 1);
  }
  return m;
};
