// 转成一维会好理解一点

function shiftGrid(grid: number[][], k: number): number[][] {
  const arr = grid.flat();
  k %= arr.length;
  k = arr.length - k;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (k === arr.length) k = 0;
      grid[i][j] = arr[k];
      k++;
    }
  }

  return grid;
}
