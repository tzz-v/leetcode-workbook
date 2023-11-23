// 求操作后的数组的最大值的个数；
// 想维护一个最大值变量，最后发现是数组 ops 的长度；
// 想创建一个二维数组记录最大值的个数，发现取操作下标交集就行。。

function maxCount(m: number, n: number, ops: number[][]): number {
  if (!ops.length) return m * n;

  let minx = m,
    miny = n;
  ops.forEach(([x, y]) => {
    minx = Math.min(minx, x);
    miny = Math.min(miny, y);
  });
  return minx * miny;
}
