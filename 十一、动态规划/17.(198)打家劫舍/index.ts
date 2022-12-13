// 动态规划
// dp[i]: 考虑下标i以内的房间，最多可以偷盗的金额
// 偷不偷第i间房取决于偷盗上一间房后的总金额是否小于偷盗上上一间房后的总金额 + 第i间房的金额
// 因此：dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);

function rob(nums: number[]): number {
  const dp = new Array(nums.length).fill(0);
  dp[0] = nums[0];
  dp[1] = nums[1];
  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
  }
  return dp[nums.length - 1];
}
