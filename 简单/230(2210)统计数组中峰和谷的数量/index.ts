function countHillValley(nums: number[]): number {
  let res = 0;

  for (let i = 1; i < nums.length - 1; i++) {
    let j = i + 1;
    while (nums[i]=== nums[j]) {
      j++;
    };
    if (nums[i] > nums[i - 1] && nums[i] > nums[j]) res++;
    if (nums[i] < nums[i - 1] && nums[i] < nums[j]) res++;
    i = j - 1;
  };
  return res;
};