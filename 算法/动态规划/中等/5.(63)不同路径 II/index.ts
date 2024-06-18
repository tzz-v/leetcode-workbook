// 思路：

// 同上一题，只不过需要考虑出现障碍物的情况，有障碍物的节点就保持初始值 0；
// 注：初始化时，如果障碍物在上边（[0,i]）或者左边([i,0])，则障碍物之后的的节点都是走不到的，值也是0

function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const row = obstacleGrid.length;
  const col = obstacleGrid[0].length;
  const dp = new Array(row).fill(0).map(() => new Array(col).fill(0));
  for (let i = 0; i < col && obstacleGrid[0][i] !== 1; i++) {
    dp[0][i] = 1;
  }
  for (let i = 0; i < row && obstacleGrid[i][0] !== 1; i++) {
    dp[i][0] = 1;
  }

  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      if (obstacleGrid[i][j] === 1) {
        dp[i][j] = 0;
      } else {
        dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
      }
    }
  }

  return dp[row - 1][col - 1];
}
