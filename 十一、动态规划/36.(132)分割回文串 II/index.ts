// 思路：
// 先创建一个dp数组，来找到字符串s的所有回文子串。（参考34.(647)回文子串）
// 在创建一个dp数组，来找到字符串s最小分割次数。
// dp[i]: s[0, i](包括i)的最小分割次数。
// 当s[0, i]子串是回文串时，不用分割，dp[i] = 0;
// 反之，则需要找到一个分割点，使分割点在这的时候所需的分割次数最少。
// dp[i] = Math.min(dp[j] + 1, dp[i]);

function minCut(s: string): number {
  const sLen = s.length;
  const isPalindromic = new Array(sLen)
    .fill(0)
    .map((_) => new Array(sLen).fill(false));
  for (let i = sLen - 1; i >= 0; i--) {
    for (let j = i; j < sLen; j++) {
      if (s[i] !== s[j]) continue;
      if (j - i <= 1 || isPalindromic[i + 1][j - 1]) {
        isPalindromic[i][j] = true;
      }
    }
  }

  const dp = new Array(sLen).fill(0).map((_, index) => index);
  for (let i = 0; i < sLen; i++) {
    if (isPalindromic[0][i]) {
      dp[i] = 0;
      continue;
    }
    for (let j = 0; j < i; j++) {
      if (isPalindromic[j + 1][i]) {
        dp[i] = Math.min(dp[j] + 1, dp[i]);
      }
    }
  }
  console.log(dp);
  return dp[sLen - 1];
}
