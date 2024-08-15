function minStartValue(nums: number[]): number {
  let res = 0;
  let sum = 0;
  nums.forEach((num) => {
    sum += num;
    if (sum < 1) {
      res += 1 - sum;
      sum = 1;
    }
  });
  return res || 1;
}
