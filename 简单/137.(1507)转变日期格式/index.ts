function reformatDate(date: string): string {
  const [day, month, year] = date.split(' ');
  return `${year}-${createNum(monthEnum[month] + 1)}-${createNum(parseInt(day))}`;
}

enum monthEnum {
  Jan,
  Feb,
  Mar,
  Apr,
  May,
  Jun,
  Jul,
  Aug,
  Sep,
  Oct,
  Nov,
  Dec,
}

const createNum = (num: number) => {
  if (num < 10) return '0' + num;
  return num;
};
