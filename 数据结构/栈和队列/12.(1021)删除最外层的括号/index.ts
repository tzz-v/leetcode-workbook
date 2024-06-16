// 遍历字符串，使用栈来确认括号是否闭合，闭合则将其存入数组。最后统一去掉最外层括号。
// 由于栈内只需要存储“(”，因此可以数字代替

function removeOuterParentheses(s: string): string {
  const arr: string[] = [];
  let cur = '';
  let left = 0;
  for (const str of s) {
    cur += str;
    if (str === '(') {
      left++;
    } else {
      left--;
    }
    if (left === 0) {
      arr.push(cur);
      cur = '';
    }
  }
  return arr.map((item) => item.slice(1, item.length - 1)).join('');
}
