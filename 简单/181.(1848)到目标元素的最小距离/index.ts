function getMinDistance(nums: number[], target: number, start: number): number {
  let i = 0;
  while (true) {
      const left = start - i;
      const right = start + i;

      if (nums[left] === target) return Math.abs(left - start);
      if (nums[right] === target) return Math.abs(right - start);
      i++;
  };
};