// 思路： 动态规划
// 找到公式：dp[m][n] = dp[m][n - 1] + dp[m -1][n];
// 初始化dp数组：dp[0][0]~dp[0][n] 和 dp[0][0]~dp[m][0] 都为1；
// 确认遍历顺序：双for循环

function uniquePaths(m: number, n: number): number {
  const dp: number[][] = new Array(m).fill([]);
  for (let i = 0; i < m; i++) {
    dp[i][0] = 1;
  }
  for (let i = 0; i < n; i++) {
    dp[0][i] = 1;
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
}
