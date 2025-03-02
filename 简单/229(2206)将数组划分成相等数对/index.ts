function divideArray(nums: number[]): boolean {
  const map = new Map<number, number>();

  nums.forEach((num) => {
    map.set(num, (map.get(num) ?? 0) + 1);
  });

  return Array.from(map.values()).every((count) => count % 2 === 0);
};