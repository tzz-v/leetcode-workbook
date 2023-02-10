// 思路
// 参考上一题，只是需要记录一下较长的回文串。

function longestPalindrome(s: string): string {
  const sLen = s.length;
  const dp = new Array(sLen).fill(0).map((_) => new Array(sLen).fill(false));
  let res = '';

  for (let i = sLen - 1; i >= 0; i--) {
    for (let j = i; j < sLen; j++) {
      if (s[i] !== s[j]) continue;
      if (j - i <= 1 || dp[i + 1][j - 1]) {
        dp[i][j] = true;
        const flag = s.slice(i, j + 1);
        res = flag.length > res.length ? flag : res;
      }
    }
  }
  return res;
}
