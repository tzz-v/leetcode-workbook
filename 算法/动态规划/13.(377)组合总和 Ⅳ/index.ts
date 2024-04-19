// 完全背包
// 双for循环，先遍历target，后遍历nums，以保证能获取全部序列。

function combinationSum4(nums: number[], target: number): number {
  const dp = new Array(target + 1).fill(0);
  dp[0] = 1;

  for (let i = 1; i <= target; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i < nums[j]) continue;
      dp[i] += dp[i - nums[j]];
    }
  }

  return dp[target];
}
