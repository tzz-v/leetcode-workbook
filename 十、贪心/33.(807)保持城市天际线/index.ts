function maxIncreaseKeepingSkyline(grid: number[][]): number {
  const len = grid.length;
  const rowMax = new Array(len).fill(0);
  const colMax = new Array(len).fill(0);

  for (let i = 0; i < len; i++) {
    rowMax[i] = Math.max(...grid[i]);
    colMax[i] = Math.max(...grid.map((item) => item[i]));
  }

  let res = 0;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      const min = Math.min(rowMax[i], colMax[j]);
      res += min - grid[i][j];
    }
  }
  return res;
}
