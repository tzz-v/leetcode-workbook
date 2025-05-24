function similarPairs(words: string[]): number {
  let res = 0;
  const map = new Map<string, number>();

  words.forEach((word) => {
    const arr = new Array(26);
    for (const s of word) {
      const idx = s.charCodeAt(0) - 'a'.charCodeAt(0);
      arr[idx] = 1;
    }
    const token = arr.toString();
    const count = map.get(token) ?? 0;
    if (count) {
      res += count;
    }

    map.set(token, count + 1);
  });

  return res;
}
