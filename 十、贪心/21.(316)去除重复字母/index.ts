// 贪心+ 单调栈；
// 检查当前字符之前的字符last是否大于当前字符且字符last当前字符在之后存在重复值。此时，将last字符移除，保留之后的重复值

function removeDuplicateLetters(s: string): string {
  const vis = new Array(26).fill(0).reduce((prev, _, index) => {
    const str = String.fromCharCode(97 + index);
    prev[str] = 0;
    return prev;
  }, {});

  const num = _.countBy(s);
  let res: string[] = [];
  for (let i = 0; i < s.length; i++) {
    const str = s[i];
    if (!vis[str]) {
      while (res.length > 0) {
        const last = res[res.length - 1];
        if (last > str && num[last] > 0) {
          vis[last] = 0;
          res.pop();
        } else {
          break;
        }
      }
      vis[str] = 1;
      res.push(str);
    }
    num[str]--;
  }
  return res.join('');
}
