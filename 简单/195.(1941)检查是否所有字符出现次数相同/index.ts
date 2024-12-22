function areOccurrencesEqual(s: string): boolean {
  const map = new Map<string, number>();

  for (const str of s) {
    map.set(str, (map.get(str) ?? 0) + 1);
  }
  return Array.from(map.values()).every(
    (item, i, record) => item === record[0]
  );
}
