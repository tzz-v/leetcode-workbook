// 思路：
// 先将nums根据绝对值从大到小排列；（目的，保证优先取反绝对值大的元素，nums全为正数时，保证变成负值的是最小值）
// 遍历nums，遇到负值则取正；直至次数k === 0 或nums遍历完成；
// k值若还有剩余，则操作nums最后一个元素；

function largestSumAfterKNegations(nums: number[], k: number): number {
  nums.sort((a, b) => Math.abs(b) - Math.abs(a));
  for (let i = 0; i < nums.length; i++) {
    if (k === 0) break;
    if (nums[i] < 0) {
      nums[i] = -nums[i];
      k--;
    }
  }
  if (k > 0) {
    nums[nums.length - 1] = nums[nums.length - 1] * Math.pow(-1, k);
  }
  return nums.reduce((prov, cur) => prov + cur);
}
