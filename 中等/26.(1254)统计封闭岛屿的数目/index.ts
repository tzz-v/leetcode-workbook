// 先把靠边的土地属于无效数据，先把他变成水，即把0改成1，避免干扰。
// 之后遍历矩阵，没遇到一个土地范围，表示存在一个海岛。

function closedIsland(grid: number[][]): number {
  const xlen = grid.length;
  const ylen = grid[0].length;
  if (xlen < 3 || ylen < 3) return 0;

  for (let i = 0; i < grid.length; i++) {
    let step = i === 0 || i === xlen - 1 ? 1 : ylen - 1;
    for (let j = 0; j < ylen; j += step) {
      dfs(grid, i, j);
    }
  }

  let res = 0;
  for (let i = 1; i < xlen - 1; i++) {
    for (let j = 1; j < ylen - 1; j++) {
      if (grid[i][j] === 0) {
        res++;
        dfs(grid, i, j);
      }
    }
  }
  return res;
}

const dfs = (grid: number[][], i: number, j: number) => {
  if (grid[i]?.[j] !== 0) return;
  grid[i][j] = 1;
  dfs(grid, i, j + 1);
  dfs(grid, i, j - 1);
  dfs(grid, i + 1, j);
  dfs(grid, i - 1, j);
};
