function minDeletionSize(strs: string[]): number {
  let x = strs.length;
  let y = strs[0].length;
  if (x === 1) return 0;

  let res = 0;
  for (let j = 0; j < y; j++) {
    for (let i = 1; i < x; i++) {
      if (strs[i][j] < strs[i - 1][j]) {
        res++;
        break;
      }
    }
  }

  return res;
}
