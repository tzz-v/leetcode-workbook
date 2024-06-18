// 直接递归
// function fib(n: number): number {
//   if (n === 0) return 0;
//   if (n === 1) return 1;
//   return fib(n - 1) + fib(n - 2);
// };

// 动态规划
// 建立一个dp数组
// 确认dp数组初始值【0，1】
// 确认公式： dp[i] = dp[i - 1] + dp[i - 2];
// 遍历推导 得到最终的dp[i];
function fib(n: number): number {
  if (n <= 1) return n;
  const dp = [0, 1];
  for (let i = 2; i <= n; i++) {
    const val = dp[0] + dp[1];
    dp[0] = dp[1];
    dp[1] = val;
  }
  return dp[1];
}
