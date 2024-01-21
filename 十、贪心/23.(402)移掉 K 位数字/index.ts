function removeKdigits(num: string, k: number): string {
  let res: string[] = [];
  for (let i = 0; i < num.length; i++) {
    while (res.length && k > 0) {
      let last = res[res.length - 1];
      if (num[i] < last) {
        res.pop();
        k--;
      } else {
        break;
      }
    }
    res.push(num[i]);
  }
  if (k) {
    res = res.slice(0, -k);
  }
  while (res[0] === '0') {
    res.shift();
  }
  return res.join('') || '0';
}
