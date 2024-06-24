// 找到两个字符长度的最大公约数N，获取前缀字符串S（str.slice(0, N + 1)），检查两个字符串是否由多个个S组成

function gcdOfStrings(str: string, str2: string): string {
  let n = Math.min(str.length, str2.length);

  for (let i = n; i > 0; i--) {
    if (str.length % i !== 0 || str2.length % i !== 0) continue;
    const val = str.slice(0, i);
    if (
      str !== new Array(str.length / i + 1).join(val) ||
      str2 !== new Array(str2.length / i + 1).join(val)
    ) {
      return '';
    }
    return val;
  }
}
