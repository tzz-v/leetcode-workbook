function canMakeArithmeticProgression(arr: number[]): boolean {
  arr.sort((a, b) => a - b);
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] - arr[i - 1] !== arr[i + 1] - arr[i]) {
      return false;
    }
  }
  return true;
}
