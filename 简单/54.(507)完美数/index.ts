// 找到num的所有正因子，累加之后判断是否等于num；
// 正因子都是成对出现的，可以给num开方，只需要遍历0到根号num就能得到所有的正因子

function checkPerfectNumber(num: number): boolean {
  if (num === 1) return false;
  let res = 1;
  const last = Math.sqrt(num);
  for (let i = 2; i <= last; i++) {
    if (num % i === 0) {
      res += i + num / i;
    }
  }
  return num === res;
}
