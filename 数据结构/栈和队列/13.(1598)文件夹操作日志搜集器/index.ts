function minOperations(logs: string[]): number {
  let res = 0;

  for (const log of logs) {
    if (log === './') continue;
    if (log === '../') {
      res = Math.max(0, res - 1);
    } else {
      res++;
    }
  }
  return res;
}
