// 一次循环，维护窗口的左右区间
function longestAlternatingSubarray(nums: number[], threshold: number): number {
  let res = 0;
  let l: number | undefined;
  for (let i = 0; i < nums.length; i++) {
    if (l === undefined) {
      if (nums[i] % 2 === 0 && nums[i] <= threshold) {
        l = i;
      }
      continue;
    }
    if (nums[i - 1] % 2 === 0) {
      if (nums[i] % 2 === 0 || nums[i] > threshold) {
        res = Math.max(res, i - l);
        l = undefined;
        i--;
      }
    } else {
      if (nums[i] % 2 !== 0 || nums[i] > threshold) {
        res = Math.max(res, i - l);
        l = undefined;
        i--;
      }
    }
  }
  if (l !== undefined) {
    res = Math.max(res, nums.length - l);
  }
  return res;
}
