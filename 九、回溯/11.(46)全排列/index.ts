function permute(nums: number[]): number[][] {
  const res: number[][] = [];
  const func = (arr: number[]) => {
    if (arr.length === nums.length) {
      res.push(arr.slice());
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (arr.includes(nums[i])) continue;
      arr.push(nums[i]);
      func(arr);
      arr.pop();
    }
  };
  func([]);
  return res;
}
