function largestGoodInteger(num: string): string {
  let max = -Infinity;
  let res = '';
  const str = `${num}`;

  for (let i = 2; i < str.length; i++) {
    if (str[i] === str[i - 1] && str[i] === str[i - 2]) {
      const cur = str.slice(i - 2, i + 1);
      if (Number(cur) > max) {
        max = Number(cur);
        res = cur;
      }
    }
  }
  return res;
}
