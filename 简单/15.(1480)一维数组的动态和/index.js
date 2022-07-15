/**
 * @param {number[]} nums
 * @return {number[]}
 */

// 暴力解
// 直接原地修改，nums[i] = nums[i] + nums[i - 1]
var runningSum = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] = nums[i] + nums[i - 1];
  }
  return nums;
};
