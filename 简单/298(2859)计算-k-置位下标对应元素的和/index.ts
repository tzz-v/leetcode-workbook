/**
 * 计算 K 置位下标对应元素的和
 * 难度：Easy
 * 标签：位运算, 数组
 */

// 在这里实现你的解决方案
function sumIndicesWithKSetBits(nums: number[], k: number): number {
  return nums.reduce((prev, cur, idx) => {
    if (
      idx
        .toString(2)
        .split('')
        .filter((val) => val === '1').length === k
    ) {
      return prev + cur;
    }
    return prev;
  }, 0);
}
