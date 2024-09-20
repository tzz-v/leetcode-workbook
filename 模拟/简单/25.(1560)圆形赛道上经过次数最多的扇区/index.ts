// 只需要记录从起点到终点所经历的扇区即可
function mostVisited(n: number, rounds: number[]): number[] {
  let start = rounds[0];
  const end = rounds[rounds.length - 1];

  const res: number[] = [];
  if (start <= end) {
    for (let i = start; i <= end; i++) {
      res.push(i);
    }
  } else {
    for (let i = 1; i <= end; i++) {
      res.push(i);
    }
    for (let i = start; i <= n; i++) {
      res.push(i);
    }
  }

  return res;
}
