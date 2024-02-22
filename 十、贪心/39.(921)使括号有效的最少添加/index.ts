// 使用计数替代栈

function minAddToMakeValid(s: string): number {
  let res = 0;
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      count++;
    } else {
      if (count === 0) {
        res++;
      } else {
        count--;
      }
    }
  }
  return res + count;
}
