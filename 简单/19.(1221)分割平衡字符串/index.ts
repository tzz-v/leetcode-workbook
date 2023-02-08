function balancedStringSplit(s: string): number {
  let left = 0;
  let right = 0;
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'L') {
      left++;
    } else {
      right++;
    }
    if (left === right) {
      res++;
      left = 0;
      right = 0;
    }
  }
  return res;
}
