// 将数组转成哈希。
// 从连续序列的最小值开始，获取当前连续序列的长度。
// 遍历nums，得到最长的连续序列的长度

function longestConsecutive(nums: number[]): number {
  const map = new Set(nums);

  let max = 0;

  for (const val of nums) {
    if (map.has(val - 1)) continue;
    let curCount = 1;
    let curVal = val;
    while (map.has(curVal + 1)) {
      curCount++;
      curVal++;
    }
    max = Math.max(max, curCount);
  }
  return max;
}
