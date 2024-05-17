function binaryGap(n: number): number {
  const str = n.toString(2);

  let last = 0;
  let res = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '1') {
      res = Math.max(res, i - last);
      last = i;
    }
  }
  return res;
}
