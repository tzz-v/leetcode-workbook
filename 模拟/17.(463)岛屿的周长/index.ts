// 思路：遍历每个空格，遇到岛屿，计算其上和左的情况，遇到有相邻情况，边的总数就减2，

function islandPerimeter(grid: number[][]): number {
  let res = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (!grid[i][j]) continue;
      let flag = 4;
      if (grid[i - 1]?.[j]) flag -= 2;
      if (grid[i][j - 1]) flag -= 2;
      res += flag;
    }
  }
  return res;
}
