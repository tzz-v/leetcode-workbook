// 使用滑动窗口，计算每个窗口是否能被num整除

function divisorSubstrings(num: number, k: number): number {
  let res = 0;
  let i = 0;
  const str = num.toString();
  for (let j = k; j <= str.length; j++, i++) {
    if (num % parseInt(str.slice(i, j)) === 0) {
      res++;
    }
  }
  return res;
}
