function minTimeToVisitAllPoints(points: number[][]): number {
  let res = 0;

  points.forEach(([x, y], i) => {
    if (i === 0) return;
    const xInterval = Math.abs(x - points[i - 1][0]);
    const yInterval = Math.abs(y - points[i - 1][1]);
    res += Math.max(xInterval, yInterval);
  });
  return res;
}
