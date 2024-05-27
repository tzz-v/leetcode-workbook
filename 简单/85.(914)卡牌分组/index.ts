function hasGroupsSizeX(deck: number[]): boolean {
  const map = new Map<number, number>();

  let max = 0;

  deck.forEach((val) => {
    map.set(val, (map.get(val) ?? 0) + 1);
    max = Math.max(max, map.get(val) ?? 0);
  });
  const counts = Array.from(map.values());
  for (let i = 2; i <= max; i++) {
    if (counts.every((count) => count % i === 0)) {
      return true;
    }
  }

  return false;
}
