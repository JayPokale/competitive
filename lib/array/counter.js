/**
 * @param {T[]} arr
 * @returns {Map<T, number>}
 */
var counter = function (arr) {
  var m = new Map();
  for (var x of arr) m.set(x, m.get(x) + 1 || 1);
  return m;
};
