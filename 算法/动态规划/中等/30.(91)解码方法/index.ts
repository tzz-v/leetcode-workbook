// 简单/2.(70)爬楼梯的升级版，每次可以爬一步或两步，爬到n阶可以选择的方式有f(n-2)+f(n-1)种。
// 而这道题，则是在上面的基础上增加一些边界条件
//   以0开头的编码不合法，所以如果当前的字符为0，则说明它不能选择n-1的位置的组合。
//   大于26的编码不合法，所以如果Number(n + n-1)大于26，则说明它不能选择n-2的位置的组合。

// 为了方便计算，题解中的dp[i]存的是到达s[i - 1]位置的方式数量。

function numDecodings(s: string): number {
  const dp = new Array(s.length + 1).fill(0);
  dp[0] = 1;

  for (let i = 1; i <= s.length; i++) {
    if (s[i - 1] !== '0') {
      dp[i] += dp[i - 1];
    }
    if (!!Number(s[i - 2]) && Number(`${s[i - 2]}${s[i - 1]}`) <= 26) {
      dp[i] += dp[i - 2] ?? 0;
    }
  }
  return dp[s.length];
}
