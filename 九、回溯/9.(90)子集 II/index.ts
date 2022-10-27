// 思路：
// 与上一题相比，数组nums中的元素不在唯一，因此需要判断组合元素是否重复了。

function subsetsWithDup(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const res: number[][] = [];
  const func = (i: number, arr: number[], len: number) => {
    if (arr.length === len) {
      res.push(arr.slice());
      return;
    }
    for (let j = i; j - arr.length < nums.length - len + 1; j++) {
      // 当前元素开头的组合集已经存在了，直接跳过
      if (j > i && nums[j] === nums[j - 1]) continue;
      arr.push(nums[j]);
      func(j + 1, arr, len);
      arr.pop();
    }
  };
  for (let len = 0; len <= nums.length; len++) {
    func(0, [], len);
  }
  return res;
}
