function busyStudent(
  startTime: number[],
  endTime: number[],
  queryTime: number
): number {
  let res = 0;
  startTime.forEach((start, i) => {
    if (start <= queryTime && endTime[i] >= queryTime) res++;
  });
  return res;
}
