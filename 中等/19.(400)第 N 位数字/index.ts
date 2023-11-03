// 先确定符合题意的数字的整数有几位。

// 然后找到这个整数。
// 然后根据下标找到整数中对应的数字。


function findNthDigit(n: number): number {
  const {index, len} = getLen(n);
  const start = Math.floor(Math.pow(10, len - 1));

  // 整数 num
  const num = start + Math.floor(index / len);

  // 下标
  const digitIndex = index % len;
  
  return parseInt(String(num)[digitIndex]);
};

const getLen = (n: number) => {
  let i = 1;
  let count = 9;
  while (n > i * count) {
    n -= i * count;
    i++;
    count *= 10;
  }
  return {index: n - 1, len: i};
}