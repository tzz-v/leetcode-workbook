// 思路
// 遍历nums数组，维护当前步的最大范围curCover以及下一步的最大范围nextCover
// 下一步的最大范围：当前范围内，能跳的最远距离。

function jump(nums: number[]): number {
  if (nums.length === 1) return 0;
  let curCover = 0;
  let nextCover = 0;
  let num = 0;
  for (let i = 0; i < nums.length; i++) {
    nextCover = Math.max(i + nums[i], nextCover);
    if (i === curCover) {
      curCover = nextCover;
      num++;
    }
    if (curCover >= nums.length - 1) {
      return num;
    }
  }
  return num;
}
