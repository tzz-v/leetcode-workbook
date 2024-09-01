function average(salary: number[]): number {
  let min = Infinity;
  let max = -Infinity;

  const len = salary.length;
  let sum = 0;
  for (let i = 0; i < len; i++) {
    sum += salary[i];
    max = Math.max(max, salary[i]);
    min = Math.min(min, salary[i]);
  }
  return (sum - min - max) / (len - 2);
}
