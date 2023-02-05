// 思路：

// 双指针，遍历数组typed的元素，需要满足至少一个条件
// 1. 当前元素可以匹配name。
// 2. 当前元素等于上一个元素（表示键盘被长按）
// 不满足则返回false；
function isLongPressedName(name: string, typed: string): boolean {
  let j = 0;
  for (let i = 0; i < typed.length; i++) {
    if (name[j] === typed[i]) {
      j++;
    } else if (j > 0 && typed[i] === typed[i - 1]) {
      continue;
    } else {
      return false;
    }
  }
  return j === name.length;
}
