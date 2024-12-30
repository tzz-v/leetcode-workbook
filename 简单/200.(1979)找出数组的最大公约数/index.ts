function findGCD(nums: number[]): number {
  let min = Infinity;
  let max = -Infinity;

  for (const n of nums) {
    min = Math.min(min, n);
    max = Math.max(max, n);
  }

  for (let i = min; i >= 1; i--) {
    if (min % i === 0 && max % i === 0) return i;
  }
}
