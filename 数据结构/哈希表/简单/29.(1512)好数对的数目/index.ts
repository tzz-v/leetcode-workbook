function numIdenticalPairs(nums: number[]): number {
  let res = 0;

  const map = new Map<number, number>();
  nums.forEach((num) => {
    const count = map.get(num) ?? 0;
    res += count;
    map.set(num, count + 1);
  });

  return res;
}
