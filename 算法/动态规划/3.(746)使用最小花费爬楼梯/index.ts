// 递归： 直接递归会超时，因为有大量重复的递归，需要将已经递归的结果存起来，当结果存在的时候就不需要递归了。

// function minCostClimbingStairs(cost: number[]): number {
//   const arr = new Array(cost.length);
//   const func = (index: number) => {
//     const len = cost.length;
//     if (len - index <= 2) return cost[index] ?? 0;
//     let one;
//     let two;
//     if (arr[index + 1]) {
//       one = arr[index + 1]
//     } else {
//       one = func(index + 1);
//       arr[index + 1] = one;
//     }
//     if (arr[index + 2]) {
//       two = arr[index + 2]
//     } else {
//       two = func(index + 2);
//       arr[index + 2] = two;
//     }
//     return Math.min(one, two) + (cost[index] ?? 0);
//   }
//   return func(-1);
// };

// 动态规划：
// dp[i]: 跳到第i个位置所需的最小体力
// 公式：[i-1]和[i -2]都能跳到[i]，应取较小值：
// [i - 1] -> [i]: dp[i - 1] + cost[i - 1](跳到第[i - 1]个位置所需的最小体力 + 从[i - 1]跳过来需要消耗的体力)
// [i - 2] -> [i]: dp[i - 2] + cost[i - 2](跳到第[i - 2]个位置所需的最小体力 + 从[i - 2]跳过来需要消耗的体力)
// dp数组初始化：
// dp[0] = 0, dp[1] = 0;
function minCostClimbingStairs(cost: number[]): number {
  const dp = [0, 0];

  for (let i = 2; i <= cost.length; i++) {
    const val = Math.min(dp[1] + cost[i - 1], dp[0] + cost[i - 2]);
    dp[0] = dp[1];
    dp[1] = val;
  }
  return dp[1];
}
