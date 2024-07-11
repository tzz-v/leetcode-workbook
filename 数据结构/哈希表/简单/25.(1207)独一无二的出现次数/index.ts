function uniqueOccurrences(arr: number[]): boolean {
  const map = new Map<number, number>();
  arr.forEach((val) => {
    map.set(val, (map.get(val) ?? 0) + 1);
  });
  return map.size === new Set(map.values()).size;
}
