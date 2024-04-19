/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let middle = parseInt((right - left) / 2) + left;
    if (target < nums[middle]) {
      right = middle;
    } else if (target > nums[middle]) {
      left = middle;
    } else {
      return middle;
    }
  }
  return -1;
};
