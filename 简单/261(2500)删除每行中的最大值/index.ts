function deleteGreatestValue(grid: number[][]): number {
  let sum = 0;

  const arr = grid.forEach((row) => {
    row.sort((a, b) => b - a);
  });

  for (let i = 0; i < grid[0].length; i++) {
    const col = grid.map((row) => row[i]);
    const max = Math.max(...col);
    sum += max;
  }

  return sum;
}
