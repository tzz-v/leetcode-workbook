function hardestWorker(n: number, logs: number[][]): number {
  let res = 0;

  let max = 0;

  logs.forEach((item, idx) => {
    const dur = item[1] - (logs[idx - 1]?.[1] ?? 0);
    if (dur > max) {
      max = dur;
      res = item[0];
    } else if (dur === max) {
      res = Math.min(res, item[0]);
    }
  });

  return res;
}
