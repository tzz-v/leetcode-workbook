function addToArrayForm(num: number[], k: number): number[] {
  const kArr = `${k}`.split('');
  const len = Math.max(num.length, kArr.length);
  const newArr: number[] = new Array(len);
  for (let i = 0; i < len; i++) {
    const kIndex = kArr.length - 1 - i;
    const numIndex = num.length - 1 - i;
    newArr[len - 1 - i] = Number(kArr[kIndex] ?? 0) + (num[numIndex] ?? 0);
  }

  for (let i = len - 1; i >= 0; i--) {
    if (newArr[i] >= 10) {
      const val = Math.floor(newArr[i] / 10);
      newArr[i] %= 10;
      if (i > 0) {
        newArr[i - 1] += val;
      } else {
        newArr.unshift(val);
      }
    }
  }
  return newArr;
}
