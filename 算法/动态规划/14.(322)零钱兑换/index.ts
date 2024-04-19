// 完全背包

// dp[i]: 表示组成数字i需要的最少硬币数量；
// dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1);

function coinChange(coins: number[], amount: number): number {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= amount; j++) {
      if (dp[j - coins[i]] === Infinity) continue;
      dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1);
    }
  }
  return dp[amount] !== Infinity ? dp[amount] : -1;
}
