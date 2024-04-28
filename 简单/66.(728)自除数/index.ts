function selfDividingNumbers(left: number, right: number): number[] {
  const res: number[] = [];
  for (let i = left; i <= right; i++) {
    const arr = String(i).split('');
    if (arr.every((val) => i % Number(val) === 0)) {
      res.push(i);
    }
  }
  return res;
}
