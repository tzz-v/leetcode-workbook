// 思路：

// 同「17.(15)三数之和」，采用for循环+双指针

function threeSumClosest(nums: number[], target: number): number {
  let res = Infinity;
  const len = nums.length;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < len; i++) {
    let l = i + 1;
    let r = len - 1;
    while (l < r) {
      const flag = nums[i] + nums[l] + nums[r];
      res = closest(target, res, flag);
      if (flag >= target) r--;
      if (flag < target) l++;
    }
  }
  return res;
}

const closest = (target: number, nums1: number, nums2: number) => {
  if (Math.abs(target - nums1) < Math.abs(target - nums2)) {
    return nums1;
  }
  return nums2;
};
