function insert(intervals: number[][], newInterval: number[]): number[][] {
  const len = intervals.length;
  let i = 0;
  while (newInterval[0] > intervals[i]?.[0]) {
    i++;
  }
  intervals.splice(i, 0, newInterval);

  if (intervals[i][0] <= intervals[i - 1]?.[1]) {
    intervals[i][0] = intervals[i - 1][0];
    intervals[i][1] = Math.max(intervals[i - 1][1], intervals[i][1]);
    intervals.splice(i - 1, 1);
    i--;
  }

  while (intervals[i][1] >= intervals[i + 1]?.[0]) {
    intervals[i][1] = Math.max(intervals[i][1], intervals[i + 1][1]);
    intervals.splice(i + 1, 1);
  }
  return intervals;
}
