// 先排序，然后使用滑动窗口，统计最长的和谐子序列

function findLHS(nums: number[]): number {
  let res = 0;
  nums.sort((a, b) => a - b);

  let i = 0;
  let j = 1;

  while (j < nums.length) {
    if (nums[j] - nums[i] <= 1) {
      j++;
    } else {
      if (nums[j - 1] !== nums[i]) {
        res = Math.max(res, j - i);
      }
      i++;
      if (i === j) j++;
    }
  }
  if (nums[j - 1] !== nums[i]) {
    res = Math.max(res, j - i);
  }
  return res;
}
