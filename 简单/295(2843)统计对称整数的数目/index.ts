/**
 * 统计对称整数的数目
 * 难度：Easy
 * 标签：数学, 枚举
 */

// 在这里实现你的解决方案
function countSymmetricIntegers(low: number, high: number): number {
  let res = 0;

  for (let i = low; i <= high; i++) {
    const str = `${i}`;
    if (str.length % 2 !== 0) continue;
    const n = str.length / 2;
    let left = 0;
    let right = 0;
    for (let i = 0; i < str.length; i++) {
      if (i < n) {
        left += Number(str[i]);
      } else {
        right += Number(str[i]);
      }
    }
    if (left === right) res++;
  }
  return res;
}
