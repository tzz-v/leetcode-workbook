function findLucky(arr: number[]): number {
  const map = new Map<number, number>();

  arr.forEach((val) => {
    map.set(val, (map.get(val) ?? 0) + 1);
  });

  return (
    Array.from(map.entries())
      .filter((item) => item[0] === item[1])
      .sort((a, b) => b[0] - a[0])[0]?.[0] ?? -1
  );
}
