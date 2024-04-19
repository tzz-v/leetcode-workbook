// 同「1.(560)和为k的子数组」，区别是存入map中的是奇数的个数
function numberOfSubarrays(nums: number[], k: number): number {
  const map = new Map<number, number>();
  map.set(0, 1);
  let count = 0;
  let res = 0;
  for (const val of nums) {
    if (val % 2 === 1) count++;
    const cur = map.get(count - k);
    if (cur) {
      res += cur;
    }
    map.set(count, (map.get(count) ?? 0) + 1);
  }
  return res;
}
