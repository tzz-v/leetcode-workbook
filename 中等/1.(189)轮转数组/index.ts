/**
 Do not return anything, modify nums in-place instead.
 */

// 思路：创建一个新数组，错位重塑nums数组；
function rotate(nums: number[], k: number): void {
  // for (let i = 0; i < k; i++) {
  //   nums.unshift(nums.pop());
  // }

  const len = nums.length;
  const copyArr = [...nums];
  for (let i = 0; i < len; i++) {
    nums[(i + k) % len] = copyArr[i];
  }
}
