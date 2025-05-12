function averageValue(nums: number[]): number {
  let val = 0;
  let count = 0;

  nums.forEach((num) => {
    if (num % 2 === 0 && num % 3 === 0) {
      val += num;
      count++;
    }
  });
  return Math.floor(val / (count || 1));
}
