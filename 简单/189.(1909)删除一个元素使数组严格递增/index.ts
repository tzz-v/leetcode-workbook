// 维护一个变量idx，用来存储要删除的元素。
// 当遇到nums[i] <= nums[i - 1]时，需要确定要删除哪一个元素：
//   1. 如果同时nums[i] <= nums[i - 2]，那么只能删除nums[i];
//   2. 反之则删除nums[i - 1],以维护较小的最大值。便于后续比较。

function canBeIncreasing(nums: number[]): boolean {
  let idx: number;
  for (let i = 1; i < nums.length; i++) {
    const last = i - 1 === idx ? i - 2 : i - 1;

    if (nums[i] <= nums[last]) {
      if (idx !== undefined) return false;
      if (nums[i] <= nums[last - 1]) {
        idx = i;
      } else {
        idx = i - 1;
      }
    }
  }
  return true;
}
