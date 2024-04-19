function canReorderDoubled(arr: number[]): boolean {
  arr.sort((a, b) => a - b);
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) continue;
    j = Math.max(j, i) + 1;
    if (arr[i] < 0) {
      while (arr[i] / 2 !== arr[j]) {
        j++;
        if (j >= arr.length) return false;
      }
    } else {
      while (arr[i] * 2 !== arr[j]) {
        j++;
        if (j >= arr.length) return false;
      }
    }
    arr[j] = NaN;
  }
  return true;
}
