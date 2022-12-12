// 完全背包
// dp[i]: 表示长度为i的字符串是否可以拆分为一个或多个在字典中出现的单词。
// dp[i] = wordDict.includes(s.slice(j, i)) && dp[j];
function wordBreak(s: string, wordDict: string[]): boolean {
  const dp = new Array(s.length + 1).fill(false);
  dp[0] = true;
  for (let i = 1; i < s.length + 1; i++) {
    for (let j = 0; j < i; j++) {
      const temp = s.slice(j, i);
      if (wordDict.includes(temp) && dp[j]) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[s.length];
}
