function isPrefixString(s: string, words: string[]): boolean {
  let i = 0;

  for (let j = 0; j < words.length; j++) {
    for (let k = 0; k < words[j].length; k++) {
      if (s[i] !== words[j][k]) return false;
      i++;
      if (i >= s.length) return k === words[j].length - 1;
    }
  }
  return false;
}
