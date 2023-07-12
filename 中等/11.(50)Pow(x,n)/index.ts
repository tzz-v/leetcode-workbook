// 使用递归，求法类似于求斐波那契数列，需要考虑数字的正负和奇偶

function myPow(x: number, n: number): number {
  if (x === 0) return 0;
  if (n === 0) return 1;
  if (n === 1) return x;
  if (n === 2) return x * x;
  const val = myPow(x, Math.floor(Math.abs(n) / 2));

  if (n % 2 === 0) {
    return n > 0 ? val * val : 1 / (val * val);
  } else {
    return n > 0 ? val * val * x : 1 / (val * val * x);
  }
}
