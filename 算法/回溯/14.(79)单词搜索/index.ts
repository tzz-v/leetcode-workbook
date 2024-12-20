function exist(board: string[][], word: string): boolean {
  const m = board.length;
  const n = board[0].length;
  const wordMap = new Map<string, number>();
  for (const s of word) {
    wordMap.set(s, (wordMap.get(s) ?? 0) + 1);
  }
  const boardMap = new Map<string, number>();
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      boardMap.set(board[i][j], (boardMap.get(board[i][j]) ?? 0) + 1);
    }
  }

  if (
    Array.from(wordMap.entries()).some(([s, count]) => {
      return !boardMap.get(s) || boardMap.get(s) < count;
    })
  ) {
    return false;
  }

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
  const res = directions.some((item) =>
    find(board, word.slice(1), x + item[0], y + item[1], set)
  );
  if (!res) set.delete(`${x},${y}`);
  return res;
};
