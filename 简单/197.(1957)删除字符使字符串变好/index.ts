function makeFancyString(s: string): string {
  if (s.length < 3) return s;
  let res = s[0] + s[1];

  for (let i = 2; i < s.length; i++) {
    const len = res.length;
    if (s[i - 1] === s[i - 2] && s[i] === s[i - 1]) continue;
    res += s[i];
  }
  return res;
}
