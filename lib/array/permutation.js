/**
 * @param {number} nums
 * @returns {number[][]}
 */
var permutations = function (nums) {
  /** @type {number[][]} */
  var perms = [];

  var dfs = (perm) => {
    if (perm.length === nums.length) return perms.push([...perm]);
    for (var num of nums) {
      if (!perm.includes(num)) {
        perm.push(num);
        dfs(perm);
        perm.pop();
      }
    }
  };
  dfs([]);
  return perms;
};
