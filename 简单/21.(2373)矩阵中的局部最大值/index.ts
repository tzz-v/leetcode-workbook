// 双for循环，找到当前项周围的最大值。
// 时间复杂度O(n^2)

function largestLocal(grid: number[][]): number[][] {
  const len = grid.length;
  const res: number[][] = [];
  for (let i = 1; i < len - 1; i++) {
    const flag: number[] = [];
    for (let j = 1; j < len - 1; j++) {
      flag.push(getMax(grid, i, j));
    }
    res.push(flag);
  }
  return res;
}
const getMax = (arr: number[][], x: number, y: number) => {
  const nums = [
    arr[x - 1][y],
    arr[x - 1][y - 1],
    arr[x - 1][y + 1],
    arr[x][y - 1],
    arr[x][y],
    arr[x][y + 1],
    arr[x + 1][y - 1],
    arr[x + 1][y],
    arr[x + 1][y + 1],
  ];
  return Math.max(...nums);
};
