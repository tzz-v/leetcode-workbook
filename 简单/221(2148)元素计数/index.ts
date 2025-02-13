function countElements(nums: number[]): number {
  let min = Infinity;
  let minCount = 0;
  let max = -Infinity;
  let maxCount = 0;

  nums.forEach((val) => {
      if (val < min) {
          min = val;
          minCount = 1;
      } else if (val === min) {
          minCount++;
      };
      if (val > max) {
          max = val;
          maxCount = 1;
      } else if (val === max) {
          maxCount++;
      };
  });
  return Math.max(0, nums.length - minCount - maxCount);
};