// 思路：动态规划
// 找到从0～i所有数拆分后得到的最大乘机
// dp[i]: 拆分 i，得到的最大乘积。

// 公式：
// j: 从1遍历到i - 2。
// dp[i] = Math.max(dp[i], j * (i - j), j * dp[i - j]);
// 【j * (i - j) 是单纯的把整数拆分为两个数相乘，而j * dp[i - j]是拆分成两个以及两个以上的个数相乘。】，取较大值

// 初始化：
// 直接从2开始,通过简单计算可得，dp[2] = 1， dp[3] = 2, dp[4] = 4;

function integerBreak(n: number): number {
  const dp: number[] = new Array(n + 1).fill(0);

  dp[2] = 1;
  dp[3] = 2;
  dp[4] = 4;
  for (let i = 5; i <= n; i++) {
    for (let j = 1; j < i - 2; j++) {
      dp[i] = Math.max(dp[i], j * (i - j), j * dp[i - j]);
    }
  }

  return dp[n];
}
