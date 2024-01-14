/**
 * @param {string} text
 * @param {string} pattern
 * @returns {number[]}
 */
var kmpSearch = function (text, pattern) {
  var textLength = text.length;
  var patternLength = pattern.length;
  var prefixFunction = new Array(patternLength).fill(0);

  var j = 0;
  for (var i = 1; i < patternLength; ++i) {
    while (j > 0 && pattern[i] !== pattern[j]) {
      j = prefixFunction[j - 1];
    }

    if (pattern[i] === pattern[j]) {
      j++;
    }

    prefixFunction[i] = j;
  }

  var indices = [];
  j = 0;
  for (var i = 0; i < textLength; ++i) {
    while (j > 0 && text[i] !== pattern[j]) {
      j = prefixFunction[j - 1];
    }

    if (text[i] === pattern[j]) {
      j++;
    }

    if (j === patternLength) {
      indices.push(i - patternLength + 1);
      j = prefixFunction[j - 1];
    }
  }

  return indices;
};
