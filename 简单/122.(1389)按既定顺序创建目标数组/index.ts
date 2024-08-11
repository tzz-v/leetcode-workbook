function createTargetArray(nums: number[], index: number[]): number[] {
  let res: number[] = [];
  index.forEach((i, ii) => {
    res.splice(i, 0, nums[ii]);
  });
  return res;
}
