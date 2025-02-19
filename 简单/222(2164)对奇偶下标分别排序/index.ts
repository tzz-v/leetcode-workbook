// 插入排序，对奇数位数据和偶数位数据分别进行排序

function sortEvenOdd(nums: number[]): number[] {
  if (nums.length <= 2) return nums;

  for (let i = 2; i < nums.length; i += 2) {
    for (let j = i - 2; nums[j + 2] < nums[j]; j -= 2) {
      [nums[j], nums[j + 2]] = [nums[j + 2], nums[j]];
    }
  }
  for (let i = 3; i < nums.length; i += 2) {
    for (let j = i - 2; nums[j + 2] > nums[j]; j -= 2) {
      [nums[j], nums[j + 2]] = [nums[j + 2], nums[j]];
    }
  }

  return nums;
}
