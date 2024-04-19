// 计算当前元素项的左半部分是否等于(sum + i) / 2;

function pivotInteger(n: number): number {
  const sum = getSum(n);

  let l = 1;
  let r = n;
  while (l <= r) {
    const i = Math.floor((r + l) / 2);
    const bisect = (sum + i) / 2;
    if (getSum(i) < bisect) {
      l = i + 1;
    } else if (getSum(i) > bisect) {
      r = i - 1;
    } else {
      return i;
    }
  }
  return -1;
}

const getSum = (n: number) => {
  return (n * (n + 1)) / 2;
};
