// 思路：
// 通过加减运算，可以将数组分成两部分：运算符加的项（left）、运算符减的项（right） 满足 left - right = target；
// 数组和 num = left + right；
// 由此可得：left - （num - left）= target; => left = (num + target) / 2;

// 因此，题目就变成了在集合nums中找出和为left的组合。

// [0-1]背包
// dp[i]: 集合nums中找出和为left的组合数；
// 公式： dp[i] += dp[i - nums[i]];

function findTargetSumWays(nums: number[], target: number): number {
  const num = nums.reduce((prev, cur) => prev + cur);
  const left = (num + target) / 2;
  if ((num + target) % 2 !== 0 || Math.abs(target) > num) return 0;

  const dp = new Array(left + 1).fill(0);
  dp[0] = 1;
  for (let i = 0; i < nums.length; i++) {
    for (let j = left; j >= nums[i]; j--) {
      dp[j] += dp[j - nums[i]];
    }
  }
  return dp[left];
}
