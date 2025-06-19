/**
 * 一最多的行
 * 难度：Easy
 * 标签：数组, 矩阵
 */

// 在这里实现你的解决方案
function rowAndMaximumOnes(mat: number[][]): number[] {
  let idx = 0;
  let max = 0;

  mat.forEach((row, i) => {
    const count = row.reduce((prev, cur) => {
      if (cur === 1) return prev + 1;
      return prev;
    }, 0);
    if (count > max) {
      max = count;
      idx = i;
    }
  });
  return [idx, max];
}
