function makeEqual(words: string[]): boolean {
  const charCodeA = 'a'.charCodeAt(0);
  const arr = new Array(26).fill(0);
  words.forEach((item) => {
    for (const s of item) {
      arr[s.charCodeAt(0) - charCodeA]++;
    }
  });
  return arr.every((count) => count % words.length === 0);
}
