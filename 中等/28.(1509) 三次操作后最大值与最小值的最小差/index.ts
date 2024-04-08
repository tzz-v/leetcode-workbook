// 先排序
// 枚举所有情况
//  - 去掉三个最大值。
//  - 去掉两个最大值，一个最小值
//  - 去掉一个最大值，两个最小值
//  - 去掉三个最小值
// 计算操作后的最小差值

function minDifference(nums: number[]): number {
  if (nums.length <= 4) return 0;
  nums.sort((a, b) => a - b);
  let len = nums.length;
  const res0 = nums[len - 4] - nums[0];
  const res1 = nums[len - 3] - nums[1];
  const res2 = nums[len - 2] - nums[2];
  const res3 = nums[len - 1] - nums[3];

  return Math.min(res0, res1, res2, res3);
}
