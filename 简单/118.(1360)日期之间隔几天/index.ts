function daysBetweenDates(date1: string, date2: string): number {
  return Math.abs(getDays(date1) - getDays(date2));
}

const getDays = (date: string) => {
  const daysOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const [year, month, day] = date.split('-').map(Number);
  let days = 0;
  for (let i = 1971; i < year; i++) {
    days += 365;
    if (i % 4 === 0 && (i % 100 !== 0 || i % 400 === 0)) days++;
  }
  for (let i = 1; i < month; i++) {
    days += daysOfMonth[i - 1];
    if (i === 2 && year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0))
      days++;
  }
  days += day;
  return days;
};
