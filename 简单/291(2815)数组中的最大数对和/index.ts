/**
 * 数组中的最大数对和
 * 难度：Easy
 * 标签：数组, 哈希表
 */

// 在这里实现你的解决方案
function maxSum(nums: number[]): number {
  const map: number[] = new Array(10).fill(0);

  let res = -1;
  nums.forEach((num) => {
    const idx = Math.max(...`${num}`.split('').map((v) => Number(v)));
    if (map[idx]) {
      res = Math.max(res, map[idx] + num);
    }
    if (num > map[idx]) {
      map[idx] = num;
    }
  });
  return res;
}
