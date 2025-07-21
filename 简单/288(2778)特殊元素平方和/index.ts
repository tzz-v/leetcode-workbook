/**
 * 特殊元素平方和
 * 难度：Easy
 * 标签：数组, 枚举
 */

// 在这里实现你的解决方案
function sumOfSquares(nums: number[]): number {
  const n = nums.length;
  return nums
    .filter((item, idx) => {
      return n % (idx + 1) === 0;
    })
    .reduce((prev, cur) => prev + cur * cur, 0);
}
