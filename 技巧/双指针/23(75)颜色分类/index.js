/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// 双指针；
// 遍历nums，值为0时，与p0互换位置；值为1时，与p1互换位置；
// 注，值为0时，与p0互换位置后，值可能为1，需加一层判断；
var sortColors = function (nums) {
  const swap = (x, y) => {
    const temp = nums[x];
    nums[x] = nums[y];
    nums[y] = temp;
  };
  let p0 = 0;
  let p1 = 0;
  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] === 0) {
      swap(i, p0);
      if (nums[i] === 1) {
        swap(i, p1);
      }
      p0++;
      p1++;
    } else if (nums[i] === 1) {
      swap(i, p1);
      p1++;
    }
  }
  return nums;
};
