/**
 * @param {number[]} nums
 * @return {number}
 */

//  前缀和
// 可以把题意理解为：遍历数组，不断更新nums[i]左边区域的和。
// 当 满足 2*leftTotal + nums[i] === numsTotal时，此时左边区域和等于右边区域和，i就是中心下标。
var pivotIndex = function (nums) {
  let num = nums.reduce((prev, current) => prev + current);
  let leftNum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (2 * leftNum + nums[i] === num) return i;
    leftNum += nums[i];
  }
  return -1;
};
