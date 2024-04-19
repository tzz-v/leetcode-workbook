// 思路：
// 遍历nums数组，
// 维护一个波动值wave，ture代表差值大于0，false代表差值小于0。
// 当当前波动与上一次波动相反时，说明符合题意，res++。反之则直接跳过

function wiggleMaxLength(nums: number[]): number {
  let wave: boolean | undefined;
  let res = 1;
  for (let i = 1; i < nums.length; i++) {
    const val = nums[i] - nums[i - 1];
    if (val === 0) continue;
    const flag = val > 0;
    if (wave !== flag) {
      wave = flag;
      res++;
      continue;
    }
  }
  return res;
}
