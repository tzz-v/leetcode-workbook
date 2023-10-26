// 两次二分查找，找到负整数区间的右边界和正整数区间的左边界；
// 优化：找到负整数区间的右边界之后，可以从【负整数区间的右边界到数组末尾区间】中寻找正整数区间的左边界

function maximumCount(nums: number[]): number {
  let l = 0;
  let r = nums.length - 1;

  let lIndex = -1;
  let rIndex = nums.length;

  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (nums[mid] < 0) {
      l++;
      lIndex = mid;
    } else {
      r--;
    }
  }
  l = lIndex > 0 ? lIndex : 0;
  r = nums.length - 1;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (nums[mid] <= 0) {
      l = mid + 1;
    } else {
      r = mid - 1;
      rIndex = mid;
    }
  }
  return Math.max(lIndex + 1, nums.length - rIndex);
}
