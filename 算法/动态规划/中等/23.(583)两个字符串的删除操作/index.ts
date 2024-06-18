// 看起来是求最少的删除次数，其实还是求最长的公共子序列

function minDistance(word1: string, word2: string): number {
  const len1 = word1.length;
  const len2 = word2.length;
  const dp = new Array(len1 + 1)
    .fill(0)
    .map((_) => new Array(len2 + 1).fill(0));
  let max = 0;
  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
      max = Math.max(dp[i][j], max);
    }
  }
  return len1 - max + len2 - max;
}
