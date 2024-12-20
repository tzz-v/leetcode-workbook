function exist(board: string[][], word: string): boolean {
  const m = board.length;
  const n = board[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] !== word[0]) continue;
      if (find(board, word, i, j)) return true;
    }
  }
  return false;
}

const directions = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];
const find = (
  board: string[][],
  word: string,
  x: number,
  y: number,
  set: Set<string> = new Set()
) => {
  if (!word) return true;
  if (set.has(`${x},${y}`)) return false;
  if (word[0] !== board[x]?.[y]) return false;
  set.add(`${x},${y}`);
  return directions.some((item) =>
    find(board, word.slice(1), x + item[0], y + item[1], set)
  );
};
