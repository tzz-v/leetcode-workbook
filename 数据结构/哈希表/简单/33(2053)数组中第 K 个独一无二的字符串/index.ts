function kthDistinct(arr: string[], k: number): string {
  const set = new Set<string>();
  const set1 = new Set<string>();

  arr.forEach((s) => {
    if (!set1.has(s)) {
      set.add(s);
      set1.add(s);
    } else {
      set.delete(s);
    }
  });

  return Array.from(set.values())[k - 1] ?? '';
}
