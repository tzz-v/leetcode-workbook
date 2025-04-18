function mostFrequentEven(nums: number[]): number {
  const map = new Map();
  let res = -1;
  nums.forEach((val) => {
    if (val % 2 !== 0) return;
    map.set(val, (map.get(val) ?? 0) + 1);
    if (map.get(val) > (map.get(res) ?? 0)) {
      res = val;
    } else if (map.get(val) === (map.get(res) ?? 0)) {
      res = Math.min(val, res);
    }
  });
  return res;
}
