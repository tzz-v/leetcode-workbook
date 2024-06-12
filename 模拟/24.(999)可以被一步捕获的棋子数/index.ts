// 找到车的位置，模拟向4个方向前进
function numRookCaptures(board: string[][]): number {
  let res = 0;

  const x = board.findIndex((item) => item.includes('R'));
  const y = board[x].findIndex((item) => item === 'R');
  for (let i = x + 1; i < board.length; i++) {
    if (board[i][y] !== '.') {
      if (board[i][y] === 'p') res++;
      break;
    }
  }
  for (let i = x - 1; i >= 0; i--) {
    if (board[i][y] !== '.') {
      if (board[i][y] === 'p') res++;
      break;
    }
  }
  for (let i = y + 1; i < board.length; i++) {
    if (board[x][i] !== '.') {
      if (board[x][i] === 'p') res++;
      break;
    }
  }
  for (let i = y - 1; i >= 0; i--) {
    if (board[x][i] !== '.') {
      if (board[x][i] === 'p') res++;
      break;
    }
  }

  return res;
}
