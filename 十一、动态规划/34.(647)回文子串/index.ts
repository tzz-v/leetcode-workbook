// 思路：

// dp[i][j]: 表示s[i~j]子串是否是回文字符串。（找不到对应关系，很难用dp[i][j]来表示区间内回文串数量）
// 双for循环，判断s[i] 是否等于 s[j]
// - 不相等说明一定不是回文串
// - 相等
//  - 两项相等且下标差距小于等于1时： 说明是回文串；
//  - 两项相等且dp[i + 1][j -1]是回文串时： 说明是回文串；

// 注：因为存在判断dp[i + 1][j - 1]的情况，所以外层循环应采用倒序遍历。以防止拿到的是旧数据
function countSubstrings(s: string): number {
  const sLen = s.length;
  const dp = new Array(sLen).fill(0).map((_) => new Array(sLen).fill(false));
  let res = 0;
  for (let i = sLen - 1; i >= 0; i--) {
    for (let j = i; j < sLen; j++) {
      if (s[i] !== s[j]) continue;
      if (j - i <= 1) {
        res++;
        dp[i][j] = true;
      } else if (dp[i + 1][j - 1]) {
        res++;
        dp[i][j] = true;
      }
    }
  }
  return res;
}
