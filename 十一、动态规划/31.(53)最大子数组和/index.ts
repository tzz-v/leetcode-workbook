// 思路：

// dp[i]: nums前i个元素，以nums[i]结尾的最大子数组和，
// 当dp[i - 1]大于0时：dp[i] = dp[i - 1] + nums[i](之前的和 + 当前项)
// 当dp[i - 1]小于0时：dp[i] = nums[i](当前项)

function maxSubArray(nums: number[]): number {
  const dp = new Array(nums.length);
  dp[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
  }
  return Math.max(...dp);
}
