function minimumTotal(triangle: number[][]): number {
  const dp = new Array(triangle.length).fill(Infinity);
  dp[0] = triangle[0][0];

  for (let i = 1; i < triangle.length; i++) {
    for (let j = i; j >= 0; j--) {
      dp[j] = Math.min(dp[j], dp[j - 1] ?? Infinity) + triangle[i][j];
    }
  }
  return Math.min(...dp);
}
