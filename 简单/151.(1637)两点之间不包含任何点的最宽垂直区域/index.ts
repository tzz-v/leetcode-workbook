function maxWidthOfVerticalArea(points: number[][]): number {
  points.sort((a, b) => a[0] - b[0]);

  let res = 0;
  for (let i = 1; i < points.length; i++) {
    res = Math.max(res, points[i][0] - points[i - 1][0]);
  }
  return res;
}
