function numOfStrings(patterns: string[], word: string): number {
  let res = 0;
  patterns.forEach((item) => {
    if (word.includes(item)) res++;
  });
  return res;
}
