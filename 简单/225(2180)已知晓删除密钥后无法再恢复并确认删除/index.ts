function countEven(num: number): number {
  let res = 0;

  for (let i = 1; i <= num; i++) {
    const val = `${i}`.split('').reduce((prev, cur) => prev + Number(cur), 0);
    if (val % 2 === 0) res++;
  }
  return res;
};