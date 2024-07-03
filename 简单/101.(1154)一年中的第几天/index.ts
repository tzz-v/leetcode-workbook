function dayOfYear(date: string): number {
  const monthDays = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const [year, month, day] = date.split('-').map((val) => Number(val));
  let res = day;
  for (let i = 1; i < month; i++) {
    res += monthDays[i];
  }
  if (((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) && month > 2)
    res++;
  return res;
}
