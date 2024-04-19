// 使用滑动窗口，维护窗口的最大长度。
// 在窗口长度大于maxCount + k的时候，left应该++
function characterReplacement(s: string, k: number): number {
  let res = 1;
  let left = 0;
  let right = 0;
  let maxCount = 0;
  const arr = new Array(26).fill(0);

  while (right < s.length) {
    arr[s.charCodeAt(right) - 'A'.charCodeAt(0)]++;
    maxCount = Math.max(maxCount, arr[s.charCodeAt(right) - 'A'.charCodeAt(0)]);
    right++;
    if (right - left > maxCount + k) {
      arr[s.charCodeAt(left) - 'A'.charCodeAt(0)]--;
      left++;
    }

    res = Math.max(res, right - left);
  }
  return res;
}
