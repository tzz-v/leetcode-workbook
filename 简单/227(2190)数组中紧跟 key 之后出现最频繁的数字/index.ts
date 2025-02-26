function mostFrequent(nums: number[], key: number): number {
  const map = new Map<number, number>();
  let max: number

  nums.forEach((item, idx) => {
      if (item === key) {
          const val = nums[idx + 1]
          map.set(val, (map.get(val) ?? 0) + 1);
          if (val === max) return;
          console.log(map)
          if (!max || map.get(val) > map.get(max)) {
              max = val;
          }
      }
  });
  return max;

};