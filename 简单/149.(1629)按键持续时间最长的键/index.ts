function slowestKey(releaseTimes: number[], keysPressed: string): string {
  let res = '';
  let max = 0;

  releaseTimes.forEach((item, idx) => {
    const val = keysPressed[idx];
    const s = item - (releaseTimes[idx - 1] ?? 0);
    if (s > max || (s === max && val.charCodeAt(0) > res.charCodeAt(0))) {
      max = s;
      res = val;
    }
  });

  return res;
}
