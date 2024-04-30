function dominantIndex(nums: number[]): number {
  const maxIdx = nums.reduce((prev, cur, index) => {
    if (nums[prev] > cur) return prev;
    return index;
  }, 0);
  const flag = nums.every((val) => {
    if (val === nums[maxIdx]) return true;
    return val * 2 <= nums[maxIdx];
  });
  return flag ? maxIdx : -1;
}
