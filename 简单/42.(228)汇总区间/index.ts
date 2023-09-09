function summaryRanges(nums: number[]): string[] {
  if (!nums.length) return [];
  const res: string[] = [];
  let arr: string[] = [];
  nums.forEach((val, i, record) => {
    if (val - 1 !== record[i - 1] && i !== 0) {
      res.push(arr.join('->'));
      arr = [];
    }
    if (arr[0] === undefined) {
      arr[0] = `val`;
    } else if (val - 1 === record[i - 1]) {
      arr[1] = `val`;
    }
  });
  res.push(arr.join('->'));
  return res;
}
