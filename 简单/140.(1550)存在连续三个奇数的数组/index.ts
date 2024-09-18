function threeConsecutiveOdds(arr: number[]): boolean {
  return arr.some((val, idx) => {
    if (idx === 0 || idx === 1) return false;
    return val % 2 !== 0 && arr[idx - 1] % 2 !== 0 && arr[idx - 2] % 2 !== 0;
  });
}
