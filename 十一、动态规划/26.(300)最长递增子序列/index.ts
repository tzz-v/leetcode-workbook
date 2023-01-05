// 动态规划
// dp[i]: 数组长度为i时的最长递增子序列的长度
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
  return Math.max.call(null, ...dp);
}
