function numWaterBottles(numBottles: number, numExchange: number): number {
  let res = numBottles;

  while (numBottles >= numExchange) {
    const count = Math.floor(numBottles / numExchange);
    res += count;
    numBottles %= numExchange;
    numBottles += count;
  }
  return res;
}
