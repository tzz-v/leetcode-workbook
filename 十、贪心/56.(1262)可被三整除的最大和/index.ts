// 先累加，总和除以三的余数结果为0，1，2；
// 为0时无需处理。
// 为1时，剪掉余1数组中的一个或剪掉余2数组中的两个
// 为2时，剪掉余1数组中的两个或剪掉余2数组中的一个

function maxSumDivThree(nums: number[]): number {
  const arr: number[][] = [[], [], []];
  nums.forEach((val) => {
    arr[val % 3].push(val);
  });
  arr[1].sort((a, b) => b - a);
  arr[2].sort((a, b) => b - a);

  const res = nums.reduce((prev, cur) => prev + cur);
  let remove = Infinity;
  if (res % 3 === 0) {
    remove = 0;
  }
  const len1 = arr[1].length;
  const len2 = arr[2].length;
  if (res % 3 === 1) {
    if (len1) {
      remove = Math.min(remove, arr[1][len1 - 1]);
    }
    if (len2 > 1) {
      remove = Math.min(remove, arr[2][len2 - 1] + arr[2][len2 - 2]);
    }
  } else if (res % 3 === 2) {
    if (len1 > 1) {
      remove = Math.min(remove, arr[1][len1 - 1] + arr[1][len1 - 2]);
    }
    if (len2) {
      remove = Math.min(remove, arr[2][len2 - 1]);
    }
  }
  return res - remove;
}
