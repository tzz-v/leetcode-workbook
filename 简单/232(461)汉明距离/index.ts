
// 同上一题

function hammingDistance(x: number, y: number): number {
  let startBinary = getBinary(x);
  let goalBinary = getBinary(y);
  let res = 0;
  const n = Math.max(startBinary.length, goalBinary.length)
  for (let i = 0; i < n; i++) {
    if ((startBinary[i] ?? '0') !== (goalBinary[i] ?? '0')) {
      res++;
    }
  }
  return res;
};

const getBinary = (num: number) => {
  if (num <= 1) return `${num}`;
  let res = '';
  while (num !== 1) {
    const remain = num % 2;
    num = Math.floor(num / 2);
    res += `${remain}`;
  };
  res += '1';
  return res;
}