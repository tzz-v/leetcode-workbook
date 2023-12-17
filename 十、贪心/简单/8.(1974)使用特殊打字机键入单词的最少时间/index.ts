function minTimeToType(word: string): number {
  let res = 0;
  word = `a${word}`;
  for (let i = 1; i < word.length; i++) {
    const val = Math.abs(word.charCodeAt(i) - word.charCodeAt(i - 1));
    const count = Math.min(val, 26 - val);
    res += count + 1;
  }
  return res;
}
