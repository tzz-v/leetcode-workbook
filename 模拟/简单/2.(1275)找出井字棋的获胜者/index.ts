function tictactoe(moves: number[][]): string {
  const arr = new Array(3).fill(0).map((_) => new Array(3).fill(0));
  moves.forEach(([x, y], i) => {
    if (i % 2 === 0) {
      arr[x][y] = 'A';
    } else {
      arr[x][y] = 'B';
    }
  });
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] && arr[i].every((val) => val === arr[i][0])) return arr[i][0];
    if (arr[0][i] && arr.every((row) => row[i] === arr[0][i])) return arr[0][i];
  }
  if (arr[0][0] && arr[0][0] === arr[1][1] && arr[1][1] == arr[2][2])
    return arr[1][1];
  if (arr[0][2] && arr[0][2] === arr[1][1] && arr[1][1] == arr[2][0])
    return arr[1][1];

  if (moves.length === 9) return 'Draw';
  return 'Pending';
}
