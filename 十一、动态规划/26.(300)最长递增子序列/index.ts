// 动态规划
// dp[i]: nums前i个元素，以nums[i]结尾，最长递增子序列的长度
// dp[i] = Math.max(dp[j], dp[j] + 1);

function lengthOfLIS(nums: number[]): number {
  let len = nums.length;
  const dp = new Array(len).fill(1);
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < dp.length; j++) {
      if (nums[j] > nums[i]) {
        dp[j] = Math.max(dp[j], dp[i] + 1);
      }
    }
  }
  return Math.max(...dp);
}
