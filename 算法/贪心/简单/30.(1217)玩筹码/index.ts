function minCostToMoveChips(position: number[]): number {
  const evenCount = position.filter((p) => p % 2 !== 0).length;
  return Math.min(evenCount, position.length - evenCount);
}
