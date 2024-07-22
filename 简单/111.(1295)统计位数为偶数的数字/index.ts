function findNumbers(nums: number[]): number {
  return nums.filter((num) => `${num}`.length % 2 === 0).length;
}
