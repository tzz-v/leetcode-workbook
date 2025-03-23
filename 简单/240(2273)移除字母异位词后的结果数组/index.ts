function removeAnagrams(words: string[]): string[] {
  const arr = words.map((item) => {
    return item
      .split('')
      .sort((a, b) => a.codePointAt(0) - b.codePointAt(0))
      .join('');
  });
  const res = [];
  for (let i = words.length - 1; i >= 0; i--) {
    if (arr[i] !== arr[i - 1]) {
      res.unshift(words[i]);
    }
  }
  return res;
}
