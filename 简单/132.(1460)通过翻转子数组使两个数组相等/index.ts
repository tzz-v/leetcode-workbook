function canBeEqual(target: number[], arr: number[]): boolean {
  const map = new Map<number, number>();
  for (let i = 0; i < target.length; i++) {
    map.set(target[i], (map.get(target[i]) ?? 0) + 1);
    map.set(arr[i], (map.get(arr[i]) ?? 0) - 1);
  }
  return Array.from(map.values()).every((val) => val === 0);
}
