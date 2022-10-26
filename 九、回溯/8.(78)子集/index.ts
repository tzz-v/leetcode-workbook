// 思路：
// 同「1.(77)组合」不同的是子集长度为0-nums.length

function subsets(nums: number[]): number[][] {
  const res: number[][] = [];
  const func = (i: number, arr: number[], len: number) => {
    if (arr.length === len) {
      res.push(arr.slice());
      return;
    }
    for (i; i - arr.length < nums.length - len + 1; i++) {
      arr.push(nums[i]);
      func(i + 1, arr, len);
      arr.pop();
    }
  };
  for (let i = 0; i <= nums.length; i++) {
    func(0, [], i);
  }
  return res;
}
