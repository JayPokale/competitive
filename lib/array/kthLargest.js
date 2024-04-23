/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  var l = 0;
  var r = nums.length - 1;
  while (l <= r) {
    var mid = (l + r) >> 1;
    var pivot = nums[mid];
    var i = l;
    var j = r;
    while (i <= j) {
      while (nums[i] > pivot) i++;
      while (nums[j] < pivot) j--;
      if (i <= j) [nums[i++], nums[j--]] = [nums[j], nums[i]];
    }
    if (l <= k - 1 && k - 1 <= j) r = j;
    else if (i <= k - 1 && k - 1 <= r) l = i;
    else return nums[k - 1];
  }
};
