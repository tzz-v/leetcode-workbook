function findSubsequences(nums: number[]): number[][] {
  const res: number[][] = [];
  const func = (i: number, arr: number[]) => {
    if (arr.length > 1) {
      res.push(arr.slice());
      // return;
    }
    const usedSet: Set<number> = new Set();
    for (let j = i; j < nums.length; j++) {
      if (usedSet.has(nums[j])) continue;
      if (arr.length !== 0 && nums[j] < arr[arr.length - 1]) continue;
      arr.push(nums[j]);
      usedSet.add(nums[j]);
      func(j + 1, arr);
      arr.pop();
    }
  };
  func(0, []);
  return res;
}
