// 无需排序，只需要统计数组中小于target的元素数量和等于target的元素数量即可
function targetIndices(nums: number[], target: number): number[] {
  let count = 0;
  let i = 0;
  nums.forEach((val) => {
    if (val < target) {
      i++;
    } else if (val === target) {
      count++;
    }
  });
  return new Array(count).fill(0).map((_, index) => index + i);
}
