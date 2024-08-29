function maxProduct(nums: number[]): number {
  const max = [0, 0];
  nums.forEach((num) => {
    if (num > max[0]) {
      max[1] = max[0];
      max[0] = num;
    } else if (num > max[1]) {
      max[1] = num;
    }
  });

  return (max[0] - 1) * (max[1] - 1);
}
