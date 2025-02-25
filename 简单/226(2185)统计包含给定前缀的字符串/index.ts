function prefixCount(words: string[], pref: string): number {
  return words.filter((item) => item.startsWith(pref)).length;
};