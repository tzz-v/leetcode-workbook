function differenceOfSum(nums: number[]): number {
  const sum = nums.reduce((prev, cur) => prev + cur);
  const val = nums
    .join('')
    .split('')
    .reduce((prev, cur) => prev + Number(cur), 0);
  return Math.abs(sum - val);
}
