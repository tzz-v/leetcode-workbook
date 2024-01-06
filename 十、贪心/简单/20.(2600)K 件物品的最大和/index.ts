function kItemsWithMaximumSum(
  numOnes: number,
  numZeros: number,
  numNegOnes: number,
  k: number
): number {
  if (k <= numOnes + numZeros) return Math.min(k, numOnes);
  return numOnes - (k - numOnes - numZeros);
}
