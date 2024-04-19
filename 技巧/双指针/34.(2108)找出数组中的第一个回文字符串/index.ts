// 使用双指针判断是否是回文串
function firstPalindrome(words: string[]): string {
  const res = words.find((item) => checkStr(item));
  return res ?? '';
}

const checkStr = (str: string) => {
  let i = 0;
  let j = str.length - 1;

  while (i < j) {
    if (str[i] !== str[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
};
