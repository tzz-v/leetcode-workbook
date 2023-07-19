// 每次操作使 n-1个元素+1 === 每次操作使一个元素-1；
// 找到数组中的最小值，统计数组所有元素都减少到最小值所需的操作数。
function minMoves(nums: number[]): number {
  const min = Math.min(...nums);
  return nums.reduce((prev, cur) => prev + cur - min, 0);
}
