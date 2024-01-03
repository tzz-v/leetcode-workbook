function splitNum(num: number): number {
  let num1 = '';
  let num2 = '';

  const arr = `${num}`.split('').sort((a, b) => Number(a) - Number(b));

  arr.forEach((val, i) => {
    if (i % 2 == 0) {
      num1 += val;
    } else {
      num2 += val;
    }
  });
  return Number(num1) + Number(num2);
}
