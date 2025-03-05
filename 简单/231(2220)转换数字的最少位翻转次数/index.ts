// 先求二进制，然后逐一比较不一样位的个数。

function minBitFlips(start: number, goal: number): number {
  if (start < goal) {
    [start, goal] = [goal, start];
  }
  let startBinary = getBinary(start);
  let goalBinary = getBinary(goal);
  let res = 0;
  for (let i = 0; i < startBinary.length; i++) {
    if (startBinary[i] !== (goalBinary[i] ?? '0')) {
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