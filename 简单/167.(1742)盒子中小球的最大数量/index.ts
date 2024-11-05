function countBalls(lowLimit: number, highLimit: number): number {
  let max = 0;

  let map = new Map<number, number>();
  for (let i = lowLimit; i <= highLimit; i++) {
      let count = 0;
      let x = i;
      while (x !== 0) {
          count += x % 10;
          x = Math.floor(x / 10);
      };
      map.set(count, (map.get(count) ?? 0) + 1);
      max = Math.max(max, map.get(count));
  };

  return max
};