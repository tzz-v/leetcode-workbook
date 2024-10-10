function maxLengthBetweenEqualCharacters(s: string): number {
  let res = -1;

  for (let i = 0; i < s.length; i++) {
    const lastIdx = s.lastIndexOf(s[i]);
    if (i !== lastIdx) {
      res = Math.max(res, lastIdx - i - 1);
    }
  }
  return res;
}
