function checkXMatrix(grid: number[][]): boolean {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      if ((i === j || i + j === grid.length - 1) && grid[i][j] === 0)
        return false;
      if (i !== j && i + j !== grid.length - 1 && grid[i][j] !== 0)
        return false;
    }
  }
  return true;
}
