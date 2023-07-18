// 双指针
// 根据curIndex下标，重写chars数组。并记录重写后的长度。

function compress(chars: string[]): number {
  let n = chars.length;
  let l = 0,
    r = 0,
    curIndex = 0;

  while (r <= n) {
    if (r !== n && chars[r] === chars[l]) {
      r++;
      continue;
    }
    chars[curIndex++] = chars[l];
    let num = String(r - l);
    if (r - l > 1) {
      for (const val of num) {
        chars[curIndex++] = val;
      }
    }
    l = r;
    r++;
  }

  return curIndex;
}
