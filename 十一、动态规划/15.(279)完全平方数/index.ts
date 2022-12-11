// 完全背包，和上一题完全一致。
// 开始我还在想怎么求出小于n的所有完全平方数，后来发现没有必要。只需要遍历的时候从i的平方开始遍历即可。

function numSquares(n: number): number {
  const dp = new Array(n + 1).fill(Infinity);
  dp[0] = 0;

  const goodsNum = Math.floor(Math.sqrt(n));
  for (let i = 1; i <= goodsNum; i++) {
    const val = i ** 2;
    for (let j = val; j <= n; j++) {
      dp[j] = Math.min(dp[j], dp[j - val] + 1);
    }
  }
  return dp[n];
}
