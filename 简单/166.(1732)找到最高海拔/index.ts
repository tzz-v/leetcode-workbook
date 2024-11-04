function largestAltitude(gain: number[]): number {
  let max = 0;
  let cur = 0;
  gain.forEach((item) => {
      cur += item;
      max = Math.max(max, cur)
  })

  return max;
};