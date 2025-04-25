/**
 * Builds the KMP prefix table (also known as LPS array)
 * @param {string} pattern
 * @returns {number[]}
 */
var buildKMPTable = function (pattern) {
  const patternLength = pattern.length;
  const prefixFunction = new Array(patternLength).fill(0);
  let j = 0;

  for (let i = 1; i < patternLength; ++i) {
    while (j > 0 && pattern[i] !== pattern[j]) j = prefixFunction[j - 1];
    if (pattern[i] === pattern[j]) j++;
    prefixFunction[i] = j;
  }

  return prefixFunction;
};

/**
 * Finds all starting indices of the pattern in the text using KMP algorithm
 * @param {string} text
 * @param {string} pattern
 * @returns {number[]}
 */
var kmpSearch = function (text, pattern) {
  const textLength = text.length;
  const patternLength = pattern.length;
  const prefixFunction = buildKMPTable(pattern);

  const indices = [];
  let j = 0;

  for (let i = 0; i < textLength; ++i) {
    while (j > 0 && text[i] !== pattern[j]) j = prefixFunction[j - 1];
    if (text[i] === pattern[j]) j++;

    if (j === patternLength) {
      indices.push(i - patternLength + 1);
      j = prefixFunction[j - 1];
    }
  }

  return indices;
};
