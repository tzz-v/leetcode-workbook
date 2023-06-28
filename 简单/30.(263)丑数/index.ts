// 丑数：只包含质因数 2、3、5的正整数；
// 首先丑数是正整数，小于等于0的数字都不是丑数
// 让数字不断除以2/3/5，最后等于1说明满足丑数的定义，是丑数
function isUgly(n: number): boolean {
  if (n <= 0) return false;
  while (true) {
    if (n % 5 === 0) {
      n /= 5;
    } else if (n % 3 === 0) {
      n /= 3;
    } else if (n % 2 === 0) {
      n /= 2;
    } else {
      break;
    }
  }
  return n === 1;
}
