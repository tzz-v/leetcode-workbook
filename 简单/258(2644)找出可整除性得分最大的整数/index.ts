/**
 * 找出可整除性得分最大的整数
 * 难度：Easy
 * 标签：数组
 */

// 在这里实现你的解决方案
function maxDivScore(nums: number[], divisors: number[]): number {
  let max = -1;
  let res = 0;

  divisors.forEach((num) => {
    const count = nums.reduce((prev, cur) => {
      if (cur % num !== 0) return prev;
      return prev + 1;
    }, 0);
    if (count > max || (count === max && num < res)) {
      max = count;
      res = num;
    }
  });
  return res;
}
