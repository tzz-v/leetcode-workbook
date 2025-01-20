function countWords(words1: string[], words2: string[]): number {
  const map1 = new Map<string, number>();
  const map2 = new Map<string, number>();
  words1.forEach((s) => {
    map1.set(s, (map1.get(s) ?? 0) + 1);
  });
  words2.forEach((s) => {
    map2.set(s, (map2.get(s) ?? 0) + 1);
  });
  let res = 0;
  map1.forEach((count, s) => {
    if (count === 1 && map2.get(s) === 1) res++;
  });

  return res;
}
