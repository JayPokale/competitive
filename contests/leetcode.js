/**
 * @param {string} s
 * @return {number[]}
 */
var manachers = function (s) {
  const t = `#${s.split("").join("#")}#`;
  const n = t.length;
  const p = new Array(n).fill(0);
  let c = 0;
  let r = 0;

  for (let i = 0; i < n; i++) {
    const mirror = 2 * c - i;

    if (i < r) {
      p[i] = Math.min(r - i, p[mirror]);
    }

    while (
      i - p[i] - 1 >= 0 &&
      i + p[i] + 1 < n &&
      t[i - p[i] - 1] === t[i + p[i] + 1]
    ) {
      p[i]++;
    }

    if (i + p[i] > r) {
      c = i;
      r = i + p[i];
    }
  }

  return p;
};

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxPalindromes = function (s, k) {
  const m = manachers(s);
  let res = 0;
  for (let i = 0; i < m.length; ++i) {
    if (m[i] >= k) {
      ++res;
      i += k;
    }
  }
  return res;
};
