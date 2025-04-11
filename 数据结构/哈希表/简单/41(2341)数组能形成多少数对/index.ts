// 利用哈希表存储数组内元素的个数，统计奇数个数的元素
function numberOfPairs(nums: number[]): number[] {
  const map = new Map<number, number>();

  nums.forEach((val) => {
    map.set(val, (map.get(val) ?? 0) + 1);
  });
  let remain = 0;
  map.forEach((count) => {
    if (count % 2 === 1) remain++;
  });
  return [(nums.length - remain) / 2, remain];
}
