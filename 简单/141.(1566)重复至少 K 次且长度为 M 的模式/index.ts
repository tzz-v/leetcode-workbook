function containsPattern(arr: number[], m: number, k: number): boolean {
  const n = arr.length;
  for (let i = 0; i <= n - m * k; i++) {
    let j;
    for (j = 0; j < m * k; j++) {
      if (arr[i + j] !== arr[i + (j % m)]) break;
    }
    if (j === m * k) return true;
  }

  return false;
}
