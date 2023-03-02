function printBin(num: number): string {
  let res = '0.';

  while (res.length <= 32 && num !== 0) {
    num *= 2;
    const flag = Math.floor(num);
    res += flag;
    num -= flag;
  }
  return res.length > 32 ? 'ERROR' : res;
}
