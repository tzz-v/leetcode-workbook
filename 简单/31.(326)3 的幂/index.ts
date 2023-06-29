// 同「29.(231)2 的幂」

function isPowerOfThree(n: number): boolean {
  while (n > 1) {
    n /= 3;
  }
  return n === 1;
}
