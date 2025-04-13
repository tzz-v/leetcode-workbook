function bestHand(ranks: number[], suits: string[]): string {
  if (suits.every((val) => val === suits[0])) {
    return 'Flush';
  }
  const arr = new Array(14).fill(0);
  ranks.forEach((val) => arr[val]++);
  let res = 'High Card';
  for (const count of arr) {
    if (count > 2) {
      return 'Three of a Kind';
    }
    if (count === 2) {
      res = 'Pair';
    }
  }
  return res;
}
