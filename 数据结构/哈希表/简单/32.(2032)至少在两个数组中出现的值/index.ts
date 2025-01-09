function twoOutOfThree(
  nums1: number[],
  nums2: number[],
  nums3: number[]
): number[] {
  const res = new Set<number>();
  const set1 = new Set<number>();
  const set2 = new Set<number>();

  nums1.forEach((item) => {
    set1.add(item);
  });
  nums2.forEach((item) => {
    set2.add(item);
    if (set1.has(item)) {
      res.add(item);
    }
  });
  nums3.forEach((item) => {
    if (set1.has(item) || set2.has(item)) {
      res.add(item);
    }
  });

  return Array.from(res.values());
}
