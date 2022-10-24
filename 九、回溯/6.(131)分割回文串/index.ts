// 思路：

// 找到字符串 s 的所有切割组合，然后筛选出全是回文字符串的组合。

function partition(s: string): string[][] {
  const res: string[][] = [];

  const func = (i: number, arr: string[]) => {
    if (i === s.length && arr.every((item) => isPalindrome(item))) {
      res.push(arr.slice());
      return;
    }
    for (let j = i; j < s.length; j++) {
      arr.push(s.slice(i, j + 1));
      func(j + 1, arr);
      arr.pop();
    }
  };
  func(0, []);
  return res;
}

// 判断是否回文；
const isPalindrome = (str: string) => {
  return str === str.split('').reverse().join('');
};
