// 使用哈希表把数据存起来，然后倒序判断 26个字母的大小写是否 都存在
function greatestLetter(s: string): string {
  const aCode = 'a'.charCodeAt(0);
  const ACode = 'A'.charCodeAt(0);
  const set = new Set(s.split(''));

  for (let i = 25; i >= 0; i--) {
    if (
      set.has(String.fromCharCode(aCode + i)) &&
      set.has(String.fromCharCode(ACode + i))
    ) {
      return String.fromCharCode(ACode + i);
    }
  }
  return '';
}
