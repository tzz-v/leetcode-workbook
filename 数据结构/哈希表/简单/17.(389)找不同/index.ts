function findTheDifference(s: string, t: string): string {
  const map = new Map();
  for (const val of s) {
    map.set(val, (map.get(val) ?? 0) + 1);
  }

  for (const val of t) {
    const count = map.get(val) ?? 0;
    if (count === 0) {
      return val;
    }
    map.set(val, count - 1);
  }
  return '';
}
