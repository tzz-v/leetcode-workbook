// 从上往下逐行处理。第i行要求当前行下标i之后的都等于0；找不到满足要求的行则返回-1

function minSwaps(grid: number[][]): number {
  let res = 0;
  for (let i = 0; i < grid.length - 1; i++) {
    let index = findIndex(i, grid);
    if (index === -1) return -1;
    res += index - i;
    while (index > i) {
      grid[index] = grid[index - 1];
      index--;
    }
  }

  return res;
}

const findIndex = (row: number, grid: number[][]) => {
  for (let i = row; i < grid.length; i++) {
    let flag = true;
    for (let j = row + 1; j < grid[i].length; j++) {
      if (grid[i][j] === 1) flag = false;
    }
    if (flag) return i;
  }
  return -1;
};
