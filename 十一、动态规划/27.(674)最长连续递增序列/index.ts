// 动态规划
// 比上一题相对简单，只需考虑是否大于上一个元素即可
// dp[i]: nums前i个元素，以nums[i]结尾，最长连续递增子序列的长度。
// 最后取dp数组的最大值。

function findLengthOfLCIS(nums: number[]): number {
  const len = nums.length;
  const dp = new Array(len).fill(1);
  for (let i = 1; i < len; i++) {
    if (nums[i] > nums[i - 1]) {
      dp[i] = dp[i - 1] + 1;
    }
  }
  return Math.max(...dp);
}
