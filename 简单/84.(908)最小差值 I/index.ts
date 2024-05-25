function smallestRangeI(nums: number[], k: number): number {
  let min = Infinity;
  let max = -Infinity;
  nums.forEach((num) => {
    min = Math.min(min, num);
    max = Math.max(max, num);
  });
  return Math.max(0, max - min - 2 * k);
}
