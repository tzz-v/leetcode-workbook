// 通过比较字符串的ASCII值判断是否是字母。
// 跳过不是字母的字符串，进行收尾替换
function reverseOnlyLetters(s: string): string {
  let j = s.length - 1;
  const arr = s.split('');
  for (let i = 0; i < arr.length; i++) {
    if (!isLetter(arr[i])) continue;
    while (!isLetter(s[j])) j--;
    arr[i] = s[j];
    j--;
  }
  return arr.join('');
}

const isLetter = (str: string) => {
  const code = str.charCodeAt(0);
  return (
    (code >= 'A'.charCodeAt(0) && code <= 'Z'.charCodeAt(0)) ||
    (code >= 'a'.charCodeAt(0) && code <= 'z'.charCodeAt(0))
  );
};
