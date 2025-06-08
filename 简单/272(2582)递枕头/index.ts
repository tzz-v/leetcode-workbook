function passThePillow(n: number, time: number): number {
  const count = time % ((n - 1) * 2);
  if (count <= n - 1) {
    return count + 1;
  }
  return 2 * n - 1 - count;
}
