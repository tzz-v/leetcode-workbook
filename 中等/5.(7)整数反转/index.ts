// 通过不断取余数 + /10来反复得到最后一位数。生成新的数字；
// 需要额外考虑数字是否在范围内；

function reverse(x: number): number {
  let res = 0;
  while (x !== 0) {
    const temp = x % 10;
    res = res * 10 + temp;
    if (res < Math.pow(-2, 31) || res > Math.pow(2, 31) - 1) {
      return 0;
    }
    x = x > 0 ? Math.floor(x / 10) : Math.ceil(x / 10);
  }
  return Number(res);
}
