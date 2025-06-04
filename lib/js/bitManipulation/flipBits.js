/**
 * @param {number} num
 * @returns {number}
 */
var flipBits = function (num) {
  return parseInt(
    num
      .toString(2)
      .split("")
      .map((x) => (x === "1" ? "0" : "1"))
      .join(""),
    2
  );
};
