// 根据题意，只需要比较s1和s2子串中字母的数量，数量一致返回true；

// 使用滑动窗口，依次进行比较。
function checkInclusion(s1: string, s2: string): boolean {
  const len1 = s1.length;
  const arr1 = new Array(26).fill(0);
  const arr2 = new Array(26).fill(0);

  for (let i = 0; i < len1; i++) {
    ++arr1[s1.charCodeAt(i) - 'a'.charCodeAt(0)];
  }

  for (let i = 0; i < s2.length; i++) {
    ++arr2[s2.charCodeAt(i) - 'a'.charCodeAt(0)];
    if (i >= len1) {
      --arr2[s2.charCodeAt(i - len1) - 'a'.charCodeAt(0)];
    }
    if (arr1.toString() === arr2.toString()) return true;
  }
  return false;
}
