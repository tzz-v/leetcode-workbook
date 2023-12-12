// 思路：
// 由于是求最大连续和，就应该尽可能减少连续和的负数，因此，当当前连续和小于0时，可以直接舍弃，从下一个元素重新开始计算。因为负数加上下一个元素，‘连续和’只会越来越小
// 每次得到值后都更新一下max值，因为被舍弃的连续和虽然是负数，也有可能是最大连续和。

function maxSubArray(nums: number[]): number {
  let max = -Infinity;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (count < 0) {
      count = 0;
    }
    count += nums[i];
    max = Math.max(max, count);
  }
  return max;
}
