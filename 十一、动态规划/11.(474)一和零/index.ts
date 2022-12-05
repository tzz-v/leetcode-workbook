// 思路
// 还是0-1背包，只是重量参照变成了二维的。
// dp[i][j]: 最多有m个0和n个1的strs的最大子集个数。
// 公式：dp[i][j] = Math.max(dp[i][j], 1 + dp[i - zeroNum][j - oneNum]).

function findMaxForm(strs: string[], m: number, n: number): number {
  const len = strs.length;
  const dp = new Array(m + 1).fill(0).map((_) => new Array(n + 1).fill(0));
  for (let i = 0; i < len; i++) {
    const [sm, sn] = countBinary(strs[i]);
    for (let j = m; j >= sm; j--) {
      for (let k = n; k >= sn; k--) {
        dp[j][k] = Math.max(dp[j][k], 1 + dp[j - sm][k - sn]);
      }
    }
  }
  console.log(dp);
  return dp[m][n];
}

const countBinary = (str) => {
  let len = str.length;
  let one = 0;
  for (let i = 0; i < len; i++) {
    if (str[i] === '1') one++;
  }
  return [len - one, one];
};
