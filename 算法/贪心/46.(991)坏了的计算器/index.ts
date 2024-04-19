// 通过给startValue做乘2和减1操作，很难得到最小操作数。
// 可以给target做除2和加1操作，是奇数时就加1，是偶数就除2

function brokenCalc(startValue: number, target: number): number {
  let res = 0;
  while (startValue < target) {
    if (target % 2 === 1) {
      target++;
    } else {
      target /= 2;
    }
    res++;
  }
  res += startValue - target;
  return res;
}
