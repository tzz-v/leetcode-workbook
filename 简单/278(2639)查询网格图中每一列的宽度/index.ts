/**
 * 查询网格图中每一列的宽度
 * 难度：Easy
 * 标签：数组, 矩阵
 */

function findColumnWidth(grid: number[][]): number[] {
  grid = grid.map((row) => row.map((item) => `${item}`.length));
  const res = grid[0];
  grid.forEach((row) => {
    row.forEach((val, idx) => {
      res[idx] = Math.max(val, res[idx]);
    });
  });
  return res;
}
