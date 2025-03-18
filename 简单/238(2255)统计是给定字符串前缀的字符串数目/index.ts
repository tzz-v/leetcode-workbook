function countPrefixes(words: string[], s: string): number {
  return words.reduce((prev, cur) => {
    if (s.startsWith(cur)) {
      return prev + 1;
    }
    return prev;
  }, 0);
}
