/**
 * @param {number[]} nums
 * @return {number}
 */

// 位运算；
// a ^ 0 = a;
// a ^ a = 0;
// b ^ a ^ b = a;
var singleNumber = function (nums) {
  let res = 0;
  for (const num of nums) {
    res ^= num;
  }
  return res;
};
