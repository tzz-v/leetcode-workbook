// 显然，和有限的最长子序列是由最小的前几个数组成，给数组 nums 排序后计算前缀和；
// 然后通过二分查找，找到小于 queries 数组元素的最大前缀和的下标。
function answerQueries(nums: number[], queries: number[]): number[] {
  nums.sort((a, b) => a - b);
  for (let i = 1; i < nums.length; i++) {
    nums[i] = nums[i] + nums[i - 1];
  }

  return queries.map((item) => {
    return findItem(nums, item);
  });
}

const findItem = (arr: number[], target: number) => {
  let l = 0;
  let r = arr.length - 1;
  let res = 0;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (arr[mid] <= target) {
      res = mid + 1;
      l++;
    } else {
      r--;
    }
  }

  return res;
};
