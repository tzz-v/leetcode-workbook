/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// 先排序，
// 直接计算，找到最小差值；
var minimumDifference = function (nums, k) {
  const arr = nums.sort((a, b) => a - b);

  let val = arr[k - 1] - arr[0];
  for (let i = k; i < arr.length; i++) {
    const flag = arr[i] - arr[i - k + 1];

    val = val < flag ? val : flag;
  }
  return val;
};
