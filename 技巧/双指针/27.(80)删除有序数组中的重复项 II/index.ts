// 双指针
// 借助数组是有序的特性，使用快慢指针。
// 遍历数组，确保慢指针i指定的元素满足题意。最后慢指针就是新数组的长度。

function removeDuplicates(nums: number[]): number {
  let i = 2;
  for (let j = 2; j < nums.length; j++) {
    if (nums[j] !== nums[i - 2]) {
      nums[i] = nums[j];
      i++;
    }
  }
  return i;
}
