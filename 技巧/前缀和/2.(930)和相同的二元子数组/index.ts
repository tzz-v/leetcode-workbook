// 同上一题，一模一样。。
function numSubarraysWithSum(nums: number[], goal: number): number {
  const map = new Map<number, number>();
  map.set(0, 1);
  let sum = 0;
  let res = 0;
  for (const val of nums) {
    sum += val;
    const cur = map.get(sum - goal);
    if (cur) {
      res += cur;
    }
    map.set(sum, (map.get(sum) ?? 0) + 1);
  }
  return res;
}
