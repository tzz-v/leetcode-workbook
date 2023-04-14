// 把每一行、每一列，每一块存起来。检查其中是否有重复项
// boxI = Math.floor(i / 3);
// boxJ = Math.floor(j / 3);

function isValidSudoku(board: string[][]): boolean {
  const row = new Array(9).fill(0).map((_) => new Array());
  const col = new Array(9).fill(0).map((_) => new Array());
  const box = new Array(3)
    .fill(0)
    .map((_) => new Array(3).fill(0).map((_) => new Array()));

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const val = board[i][j];
      const boxI = Math.floor(i / 3);
      const boxJ = Math.floor(j / 3);
      if (
        row[i].includes(val) ||
        col[j].includes(val) ||
        box[boxI][boxJ].includes(val)
      ) {
        return false;
      }
      if (val !== '.') {
        row[i].push(val);
        col[j].push(val);
        box[boxI][boxJ].push(val);
      }
    }
  }
  return true;
}
