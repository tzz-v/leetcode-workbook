// 双for循环，利用杨辉三角的特性，抛去两端，剩余元素等于左上元素和右上元素的和
function generate(numRows: number): number[][] {
  const res: number[][] = [];
  for (let i = 0; i < numRows; i++) {
    const arr = new Array(i + 1).fill(1);
    for (let j = 1; j < i; j++) {
      arr[j] = (res[i - 1]?.[j - 1] ?? 0) + (res[i - 1]?.[j] ?? 0);
    }
    res.push(arr);
  }
  return res;
}
