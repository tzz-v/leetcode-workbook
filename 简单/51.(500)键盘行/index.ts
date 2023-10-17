// 遍历数组，找出所有符合题意的字符串
// 符合题意：字符串字母来自同一行
// 注： 注意字母大小写

function findWords(words: string[]): string[] {
  const line1 = 'qwertyuiop';
  const line2 = 'asdfghjkl';
  const line3 = 'zxcvbnm';
  return words.filter((item) => {
    const str = item.toLowerCase();
    if (line1.includes(str[0])) {
      return str.split('').every((val) => line1.includes(val));
    } else if (line2.includes(str[0])) {
      return str.split('').every((val) => line2.includes(val));
    }
    return str.split('').every((val) => line3.includes(val));
  });
}
