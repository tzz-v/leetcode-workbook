/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

// 先拿到循环次数；
// 每次循环，翻转前k个元素的位置。
var reverseStr = function (s, k) {
  const arr = s.split('');
  const num = Math.ceil((arr.length / 2) * k);
  for (let i = 1; i <= num; i++) {
    const rootIndex = (i - 1) * 2 * k;
    let l = rootIndex;
    let r = Math.min(rootIndex + k - 1, arr.length - 1);
    while (l < r) {
      const temp = arr[l];
      arr[l] = arr[r];
      arr[r] = temp;
      l++;
      r--;
    }
  }
  return arr.join('');
};
