// 要求一个左括号必须匹配两个右括号。
// 可以使用栈的方式，遇到左括号就压入栈，遇到两个右括号就弹出栈。由于栈内元素只有一个，可以通过维护左括号次数来优化。
// 插入字符使字符串平衡

function minInsertions(s: string): number {
  let stack = 0;
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack++;
    } else {
      if (stack === 0) {
        res++;
      } else {
        stack--;
      }
      if (s[i + 1] === ')') {
        i++;
      } else {
        res++;
      }
    }
  }
  res += stack * 2;

  return res;
}
