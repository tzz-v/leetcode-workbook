function minSetSize(arr: number[]): number {
  const map = new Map<number, number>();
  arr.forEach((val) => {
    map.set(val, (map.get(val) ?? 0) + 1);
  });
  const counts = Array.from(map.values()).sort((a, b) => b - a);
  let num = 0;
  for (let i = 0; i < counts.length; i++) {
    num += counts[i];
    if (num >= arr.length / 2) {
      return i + 1;
    }
  }
}
