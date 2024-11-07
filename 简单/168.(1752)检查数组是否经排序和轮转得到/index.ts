function check(nums: number[]): boolean {
  let flag = 0;

  for (let i = 1; i < nums.length; i++) {
      if (nums[i] < nums[i - 1]) {
          if (flag) return false;
          flag = 1;
      }
      if (flag && nums[i] > nums[0]) return false;
  };
  return true;
};