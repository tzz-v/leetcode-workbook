// 计算所有方块的表面积，剪掉每个方块被遮挡的表面积

function surfaceArea(grid: number[][]): number {
  let allArea =
    grid.reduce(
      (prev, cur) => prev + cur.reduce((prev, cur) => prev + cur),
      0
    ) * 6;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      const cur = grid[i][j];
      if (cur === 0) continue;
      const top = grid[i - 1]?.[j] ?? 0;
      const right = grid[i][j + 1] ?? 0;
      const bottom = grid[i + 1]?.[j] ?? 0;
      const left = grid[i][j - 1] ?? 0;
      allArea -= Math.min(top, cur);
      allArea -= Math.min(right, cur);
      allArea -= Math.min(bottom, cur);
      allArea -= Math.min(left, cur);
      allArea -= (cur - 1) * 2;
    }
  }
  return allArea;
}
