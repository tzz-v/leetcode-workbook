function modifyString(s: string): string {
  const arr = ['a', 'b', 'c'];
  let last = '';
  return s.replaceAll('?', (_, idx) => {
    const left = s[idx - 1] === '?' ? last : s[idx - 1];
    const right = s[idx + 1];
    const val = arr.find((item) => item !== left && item !== right);
    last = val ?? '';
    return val;
  });
}
