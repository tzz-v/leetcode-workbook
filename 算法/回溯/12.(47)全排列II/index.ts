function permuteUnique(nums: number[]): number[][] {
  const res: number[][] = [];
  const usedArr = new Array(nums.length).fill(false);
  nums.sort((a, b) => a - b);
  const func = (arr: number[]) => {
    if (arr.length === nums.length) {
      res.push([...arr]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (usedArr[i]) continue;
      if (i > 0 && nums[i] === nums[i - 1] && usedArr[i - 1]) continue;
      arr.push(nums[i]);
      usedArr[i] = true;
      func(arr);
      arr.pop();
      usedArr[i] = false;
    }
  };
  func([]);
  return res;
}
