/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// 计算k个元素的和，通过滑动窗口，逐个比较得到最大的值
// return max / k;
var findMaxAverage = function (nums, k) {
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }
  let max = sum;
  for (let i = k; i < nums.length; i++) {
    sum = sum - nums[i - k] + nums[i];
    max = Math.max(max, sum);
  }
  return max / k;
};
