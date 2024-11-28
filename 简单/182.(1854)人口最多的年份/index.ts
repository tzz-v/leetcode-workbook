function maximumPopulation(logs: number[][]): number {
  const year = new Array(101).fill(0);
  logs.forEach(([from, end]) => {
      year[from - 1950]++;
      year[end - 1950]--;
  });

  let max =0
  let cur = 0;
  let res = 0;

  year.forEach((count, i) => {
      cur += count;
      if (cur > max) {
          max = cur;
          res = i;
      }
  });
  return res + 1950;
};