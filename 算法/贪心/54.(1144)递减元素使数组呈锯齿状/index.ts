// 分类讨论：偶数比奇数小，和奇数比偶数小
// 因为只能做减法，所以相对简单点，将偶数位或奇数位下标元素值减到小于左右两边的元素值即可
// 时间复杂度为O(n)

function movesToMakeZigzag(nums: number[]): number {
  return Math.min(func(nums, 0), func(nums, 1));
}
const func = (nums: number[], idx: number) => {
  let res = 0;
  for (let i = idx; i < nums.length; i += 2) {
    let a = 0;
    if (nums[i - 1] <= nums[i]) {
      a = Math.max(a, nums[i] - nums[i - 1] + 1);
    }
    if (nums[i + 1] <= nums[i]) {
      a = Math.max(a, nums[i] - nums[i + 1] + 1);
    }
    res += a;
  }
  return res;
};
