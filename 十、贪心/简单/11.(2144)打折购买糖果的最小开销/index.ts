function minimumCost(cost: number[]): number {
  cost.sort((a, b) => b - a);
  return cost.reduce((prev, current, i) => {
    if ((i + 1) % 3 === 0) return prev;
    return prev + current;
  });
}
