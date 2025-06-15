/**
 * 对角线上的质数
 * 难度：Easy
 * 标签：数组, 数学, 矩阵, 数论
 */

// 在这里实现你的解决方案
function diagonalPrime(nums: number[][]): number {
  let res = 0;
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    if (nums[i][i] > res && isPrime(nums[i][i])) {
      res = Math.max(res, nums[i][i]);
    }
    if (nums[i][n - i - 1] > res && isPrime(nums[i][n - i - 1])) {
      res = Math.max(res, nums[i][n - i - 1]);
    }
  }
  return res;
}

const isPrime = (num: number) => {
  if (num === 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};
