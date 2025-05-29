function categorizeBox(
  length: number,
  width: number,
  height: number,
  mass: number
): string {
  if (
    length * width * height >= Math.pow(10, 9) ||
    [length, width, height].some((item) => item >= Math.pow(10, 4))
  ) {
    if (mass >= 100) {
      return 'Both';
    }
    return 'Bulky';
  }
  if (mass >= 100) return 'Heavy';
  return 'Neither';
}
