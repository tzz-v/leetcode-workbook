function dayOfTheWeek(day: number, month: number, year: number): string {
  const week = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30];
  let days = 365 * (year - 1971) + Math.floor((year - 1969) / 4);

  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) monthDays[1]++;
  for (let i = 0; i < month - 1; i++) {
    days += monthDays[i];
  }
  days += day;
  return week[(days + 3) % 7];
}
