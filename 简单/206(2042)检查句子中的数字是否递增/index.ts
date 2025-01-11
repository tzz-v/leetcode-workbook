function areNumbersAscending(s: string): boolean {
  const nums = s
    .split(' ')
    .map((c) => Number(c))
    .filter((n) => !isNaN(n));
  return nums.every((n, i) => i === 0 || n > nums[i - 1]);
}
