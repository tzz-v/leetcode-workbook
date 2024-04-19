// 创建一个二维数组dp,dp[i][j]表示grid[0][0]到grid[i][j]所需的最小路径和
// 初始化数组的第一行和第一列
// 遍历grid，使得数组DP[i][j] = min(dp[[i][j - 1]], dp[[i - 1][j]]) + grid[i][j];
// return dp[i][j]

function minPathSum(grid: number[][]): number {
  const m = grid.length;
  let n = grid[0].length;
  const dp = new Array(m).fill(0).map((_) => new Array(n).fill(0));
  dp[0][0] = grid[0][0];
  for (let i = 1; i < n; i++) {
    dp[0][i] = dp[0][i - 1] + grid[0][i];
  }
  for (let i = 1; i < m; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    }
  }
  return dp[m - 1][n - 1];
}
