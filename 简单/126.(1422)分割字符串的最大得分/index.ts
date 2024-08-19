function maxScore(s: string): number {
  let zeroCount = 0;
  if (s[0] === '0') zeroCount = 1;
  let oneCount = 0;
  for (let i = 1; i < s.length; i++) {
    if (s[i] === '1') oneCount++;
  }
  let res = zeroCount + oneCount;

  for (let i = 1; i < s.length - 1; i++) {
    if (s[i] === '0') {
      zeroCount++;
    } else {
      oneCount--;
    }
    res = Math.max(res, zeroCount + oneCount);
  }

  return res;
}
