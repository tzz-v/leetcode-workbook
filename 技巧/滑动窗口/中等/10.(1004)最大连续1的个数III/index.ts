// 同「8.(424)替换后的最长重复字符」，不过相对比那个好理解，因为424题需要找到最长连续字母，而这一题只需要找最长连续的数字1即可
function longestOnes(nums: number[], k: number): number {
  let res = k + 1;
  let i = 0;
  let j = 0;
  let count = 0;
  while (j < nums.length) {
    if (nums[j] === 1) count++;
    j++;

    if (j - i > count + k) {
      if (nums[i] === 1) count--;
      i++;
    }

    res = Math.max(res, j - i);
  }
  return res;
}
