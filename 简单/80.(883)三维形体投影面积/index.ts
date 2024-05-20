// zArea: 二维数组中值大于0的个数
// xArea: 二维数组中每一行中取最大值之后相加
// yArea: 二维数组中每一列中取最大值之后相加

function projectionArea(grid: number[][]): number {
  const zArea = grid.reduce(
    (prev, cur) => prev + cur.reduce((prev, cur) => prev + (cur ? 1 : 0), 0),
    0
  );
  const xArea = grid.reduce((prev, cur) => prev + Math.max(...cur), 0);
  const yArea = grid[0].reduce((prev, cur, curIndex) => {
    let colMax = cur;
    for (let i = 1; i < grid.length; i++) {
      colMax = Math.max(colMax, grid[i][curIndex]);
    }
    return prev + colMax;
  }, 0);

  return xArea + yArea + zArea;
}
