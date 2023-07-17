function findDuplicates(nums: number[]): number[] {
  const n = nums.length;
  const swap = (nums, index1, index2) => {
    const temp = nums[index1];
    nums[index1] = nums[index2];
    nums[index2] = temp;
  };

  for (let i = 0; i < n; i++) {
    while (nums[i] !== nums[nums[i] - 1]) {
      swap(nums, i, nums[i] - 1);
      // const temp = nums[i];
      // nums[i] = nums[nums[i] - 1];
      // nums[nums[i] - 1] = temp;
    }
  }
  const res: number[] = [];
  for (let i = 0; i < n; i++) {
    if (nums[i] - 1 !== i) {
      res.push(nums[i]);
    }
  }
  return res;
}
