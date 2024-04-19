// 直接递归，超时了
// function climbStairs(n: number): number {
//   if (n === 1) return 1;
//   if (n === 2) return 2;
//   return climbStairs(n - 1) + climbStairs(n - 2);
// };

// 动态规划
// 建立一个dp数组
// 确认公式： dp[i] = dp[i - 1] + dp[i - 2];
// 确认dp数组初始值【1，2】
// 遍历推导 得到最终的dp[i];
function climbStairs(n: number): number {
  if (n <= 2) return n;
  const dp = [1, 2];
  for (let i = 3; i <= n; i++) {
    const val = dp[0] + dp[1];
    dp[0] = dp[1];
    dp[1] = val;
  }
  return dp[1];
}
