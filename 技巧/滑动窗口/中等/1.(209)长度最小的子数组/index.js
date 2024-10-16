/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */

//计算每个下标为起始位置且满足条件的长度，从中找出最小长度。
var minSubArrayLen = function(target, nums) {
  let left = 0;
  let right = 0;
  let sum = 0;
  let res = Number.MAX_VALUE;
  while(right < nums.length) {
      sum+= nums[right];
      right++;
      if (sum >= target) {
          res = res < right - left ? res : right - left;
          sum = 0
          left++;
          right = left;
      }
  }
  return res !== Number.MAX_VALUE ? res : 0;
};

// 一个小优化，滑动窗口：
// 当sum >= target时，无需让sum等于0，重新进行计算
// 可以将左指针向右移，减掉左指针的值继续判断是否符合条件。
 var minSubArrayLen = function(target, nums) {
  let left = 0;
  let right = 0;
  let sum = 0;
  let res = Number.MAX_VALUE;
  while(right < nums.length) {
      sum+= nums[right];
      right++;
      while(sum >= target) {
          res = res < right - left ? res : right - left;
          sum = sum - nums[left];
          left++;
      }
  }
  return res !== Number.MAX_VALUE ? res : 0;
};