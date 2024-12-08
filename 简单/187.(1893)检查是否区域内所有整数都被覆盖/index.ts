function isCovered(ranges: number[][], left: number, right: number): boolean {
  ranges.sort((a, b) => a[0] - b[0]);
  for (const range of ranges) {
    if (left < range[0]) return false;
    if (left <= range[1]) {
      left = range[1] + 1;
    }
    if (left > right) return true;
  }
  return left > right;
}
