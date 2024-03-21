// 相对于上一题26.(1254)统计封闭岛屿的数目，不需要考虑土地在边上的情况。

function numIslands(grid: string[][]): number {
  const xlen = grid.length;
  const ylen = grid[0].length;

  let res = 0;
  for (let i = 0; i < xlen; i++) {
    for (let j = 0; j < ylen; j++) {
      if (grid[i][j] === '1') {
        res++;
        dfs(grid, i, j);
      }
    }
  }
  return res;
}
const dfs = (grid: string[][], i: number, j: number) => {
  if (grid[i]?.[j] !== '1') return;
  grid[i][j] = '0';
  dfs(grid, i, j + 1);
  dfs(grid, i, j - 1);
  dfs(grid, i + 1, j);
  dfs(grid, i - 1, j);
};
