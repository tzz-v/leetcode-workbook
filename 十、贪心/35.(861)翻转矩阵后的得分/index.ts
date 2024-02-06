// 想要得到最大和，就需要保证每行第一个元素是1，之后在保证每列1的数量尽可能多

function matrixScore(grid: number[][]): number {
  grid.forEach((row) => {
    if (row[0] === 1) return;
    row.forEach((val, i) => {
      row[i] = !!val ? 0 : 1;
    });
  });
  for (let i = 1; i < grid[0].length; i++) {
    let zeroCount = 0;
    grid.forEach((row) => {
      zeroCount += !!row[i] ? 0 : 1;
    });
    if (zeroCount <= grid.length / 2) continue;
    grid.forEach((row) => {
      row[i] = !!row[i] ? 0 : 1;
    });
  }
  return grid.reduce((prev, cur) => {
    return prev + parseInt(cur.join(''), 2);
  }, 0);
}
