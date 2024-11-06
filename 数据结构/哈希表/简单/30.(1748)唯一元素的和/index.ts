function sumOfUnique(nums: number[]): number {
  const map = new Map();
  let sum = 0;

  nums.forEach((val) => {
      const count = map.get(val) ?? 0;
      if (count === 1) {
          sum -= val;
      } else if (!count) {
          sum += val;
      };
      map.set(val, count + 1);
  });
  return sum;
};