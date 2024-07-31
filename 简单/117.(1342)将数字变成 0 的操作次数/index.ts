function numberOfSteps(num: number): number {
  let res = 0;
  while (num > 0) {
    if (num % 2 === 0) {
      num /= 2;
    } else {
      num--;
    }
    res++;
  }
  return res;
}
