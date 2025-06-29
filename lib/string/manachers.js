/**
 * @param {string} s
 * @return {number[]}
 */
var manachers = function (s) {
  const n = s.length;
  const p = new Uint32Array(n);
  let c = 0;
  let r = 0;

  for (let i = 0; i < n; i++) {
    const mirror = 2 * c - i;
    if (i < r) p[i] = Math.min(r - i, p[mirror]);
    while (
      i - p[i] - 1 >= 0 &&
      i + p[i] + 1 < n &&
      s[i - p[i] - 1] === s[i + p[i] + 1]
    ) {
      p[i]++;
    }
    if (i + p[i] > r) (c = i), (r = i + p[i]);
  }

  return p;
};
