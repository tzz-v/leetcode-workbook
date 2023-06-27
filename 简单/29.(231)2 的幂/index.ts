// 1是2的0次幂
// 让n不断除以2，到最后，等于1，则说明符合题意。

function isPowerOfTwo(n: number): boolean {
  if (n === 1) return true;
  if (n % 2 !== 0) return false;
  while (n > 1) {
    n /= 2;
  }
  if (n === 1) return true;
  return false;
}
