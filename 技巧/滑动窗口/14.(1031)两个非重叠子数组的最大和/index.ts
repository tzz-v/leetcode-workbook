// 求数组中的、最大的、两个连续子数组的和（两个字数组不重复）

// 先固定firstArr子数组的范围在secondArr子数组的左边。
// 我们可以使用滑动窗口，secondArr和firstArr同时向右滑动。
// 维护一个最大的firstArr窗口以及secondArr窗口。 并求出最大的两个子数组之和。

// 然后固定secondArr子数组的范围在firstArr子数组的左边。重复上面的操作。

function maxSumTwoNoOverlap(
  nums: number[],
  firstLen: number,
  secondLen: number
): number {
  return Math.max(
    getMaxSum(nums, firstLen, secondLen),
    getMaxSum(nums, secondLen, firstLen)
  );
}

const getMaxSum = (nums: number[], firstLen: number, secondLen: number) => {
  let firstSum = nums.slice(0, firstLen).reduce((prev, cur) => prev + cur);
  let maxFirstSum = firstSum;
  let secondSum = nums
    .slice(firstLen, firstLen + secondLen)
    .reduce((prev, cur) => prev + cur);
  let res = firstSum + secondSum;
  for (let i = firstLen + secondLen, j = firstLen; i < nums.length; i++, j++) {
    firstSum += nums[j] - nums[j - firstLen];
    maxFirstSum = Math.max(maxFirstSum, firstSum);
    secondSum += nums[i] - nums[i - secondLen];
    res = Math.max(res, maxFirstSum + secondSum);
  }
  return res;
};
