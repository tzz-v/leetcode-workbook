// 使用快慢指针，快指针遇到偶数就和慢指针交换元素，以确保慢指针元素始终为偶数，

function sortArrayByParity(nums: number[]): number[] {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      const temp = nums[j];
      nums[j] = nums[i];
      nums[i] = temp;
      j++;
    }
  }
  return nums;
}
