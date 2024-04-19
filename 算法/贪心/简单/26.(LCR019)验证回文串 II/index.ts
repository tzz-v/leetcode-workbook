// 先判断是不是回文串；
// 不是的话 左指针加一判断是不是回文串 或右指针减一判断是不是回文串；
function validPalindrome(s: string): boolean {
  const dfs = (i, j): [number, number] | true => {
    while (i < j) {
      if (s[i] !== s[j]) return [i, j];
      i++;
      j--;
    }
    return true;
  };
  const res = dfs(0, s.length - 1);
  if (res === true) return true;
  return dfs(res[0], res[1] - 1) === true || dfs(res[0] + 1, res[1]) === true;
}
