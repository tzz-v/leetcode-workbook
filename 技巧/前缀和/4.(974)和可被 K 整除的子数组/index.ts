// 同「1.(560)和为k的子数组」，区别是map中存储的前缀和的余数。
// 需要注意余数为负数的情况，需要给他加k，转换成正数。
function subarraysDivByK(nums: number[], k: number): number {
  const map = new Map<number, number>();
  map.set(0, 1);
  let sum = 0;
  let res = 0;
  for (const val of nums) {
    sum += val;
    let remain = ((sum % k) + k) % k;
    const cur = map.get(remain);
    if (cur) {
      res += cur;
    }
    map.set(remain, (map.get(remain) ?? 0) + 1);
  }
  return res;
}
