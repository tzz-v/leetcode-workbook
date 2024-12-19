function minDistance(word1: string, word2: string): number {
  const m = word1.length;
  const n = word2.length;
  const dp = new Array(m + 1).fill(0).map((_) => new Array(n + 1).fill(0));
  for (let i = 0; i < m + 1; i++) {
    dp[i][0] = i;
  }
  for (let j = 0; j < n + 1; j++) {
    dp[0][j] = j;
  }
  for (let i = 1; i < m + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      const count = word1[i - 1] === word2[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + count,
        dp[i - 1][j] + 1
      );
    }
  }
  return dp[m][n];
}
