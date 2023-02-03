// 思路：
// 维护一个双指针。将奇数下标的偶数项移动到偶数下标上。
// 下标j为偶数下标。i为奇数下标。

function sortArrayByParityII(nums: number[]): number[] {
  let j = 0;
  for (let i = 1; i < nums.length && j < nums.length; i += 2) {
    if (nums[j] % 2 === 0) {
      j += 2;
      i -= 2;
    }
    if (nums[i] % 2 === 0) {
      const temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      j += 2;
    }
  }
  return nums;
}
