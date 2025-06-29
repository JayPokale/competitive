/**
 * @param {string} caption
 * @return {string}
 */
var generateTag = function (caption) {
  const c = caption.split(" ");
  let res = "#" + c[0].toLowerCase();
  for(let i = 1; i < c.length; ++i) {
    const cur = c[i].toLowerCase();
  }
};
