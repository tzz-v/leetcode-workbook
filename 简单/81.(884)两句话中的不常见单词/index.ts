function uncommonFromSentences(s1: string, s2: string): string[] {
  const map = new Map<string, number>();
  s1.split(' ').forEach((str) => {
    map.set(str, (map.get(str) ?? 0) + 1);
  });
  s2.split(' ').forEach((str) => {
    map.set(str, (map.get(str) ?? 0) + 1);
  });
  const res: string[] = [];
  map.forEach((count, val) => {
    if (count === 1) {
      res.push(val);
    }
  });
  return res;
}
