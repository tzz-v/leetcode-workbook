function thousandSeparator(n: number): string {
  let res = '';
  let count = 0;
  const str = `${n}`;
  for (let i = str.length - 1; i >= 0; i--) {
    res = str[i] + res;
    count++;
    if (count === 3 && i !== 0) {
      count = 0;
      res = '.' + res;
    }
  }
  return res;
}
