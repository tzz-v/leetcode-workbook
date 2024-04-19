function findTheArrayConcVal(nums: number[]): number {
  let res = 0;
  let i = 0;
  let j = nums.length - 1;
  while (i < j) {
    res += Number(`${nums[i]}` + `${nums[j]}`);
    i++;
    j--;
  }
  if (i === j) {
    res += nums[i];
  }
  return res;
}
