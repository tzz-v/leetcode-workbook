// 排序后，取偶数下标的值
function arrayPairSum(nums: number[]): number {
  nums.sort((a, b) => a - b);
  return nums.reduce(
    (prev, cur, curIndex) => prev + (curIndex % 2 !== 0 ? 0 : cur)
  );
}
