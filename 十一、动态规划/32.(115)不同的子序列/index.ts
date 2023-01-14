function numDistinct(s: string, t: string): number {
  const sLen = s.length;
  const tLen = t.length;
  const dp = new Array(sLen + 1)
    .fill(0)
    .map((_) => new Array(tLen + 1).fill(0));

  for (let i = 0; i <= sLen; i++) {
    dp[i][0] = 1;
  }
  for (let i = 1; i <= sLen; i++) {
    for (let j = 1; j <= tLen; j++) {
      if (s[i - 1] === t[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }
  return dp[sLen][tLen];
}
