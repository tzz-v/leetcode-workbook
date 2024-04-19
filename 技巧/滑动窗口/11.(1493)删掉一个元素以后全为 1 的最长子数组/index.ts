// 同上一题，k=1。区别就是一个是删除元素，一个是不删除
function longestSubarray(nums: number[]): number {
  let res = 0;
  let left = 0;
  let right = 0;
  let count = 0;
  while (right < nums.length) {
    if (nums[right] === 1) count++;
    right++;
    if (right - left > count + 1) {
      if (nums[left] === 1) count--;
      left++;
    }
    res = Math.max(res, right - left - 1);
  }
  return res;
}
