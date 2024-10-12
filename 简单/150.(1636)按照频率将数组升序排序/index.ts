function frequencySort(nums: number[]): number[] {
  const map = new Map<number, number>();
  nums.forEach((num) => {
    map.set(num, (map.get(num) ?? 0) + 1);
  });

  nums.sort((a, b) => {
    const weightA = map.get(a);
    const weightB = map.get(b);
    if (weightA !== weightB) {
      return weightA - weightB;
    }
    return b - a;
  });

  return nums;
}
