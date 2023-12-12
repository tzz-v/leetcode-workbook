// 先给数组排序，然后从最长的三个边开始检查是否能组成三角形
// 三角形：最长边长度 < 另外两个边长度的和

function largestPerimeter(nums: number[]): number {
  nums.sort((a, b) => b - a);
  let i = 0;

  while (i < nums.length - 2) {
    if (nums[i] < nums[i + 1] + nums[i + 2]) {
      return nums[i] + nums[i + 1] + nums[i + 2];
    }
    i++;
  }
  return 0;
}
