/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

// 模拟数组的reverse方法，翻转数组；
// 创建收尾两个指针， 借助临时变量互相调换位置；
// l >= r 的时候表示循环完毕，退出循环。
var reverseString = function (s) {
  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    const temp = s[l];
    s[l] = s[r];
    s[r] = temp;
    l++;
    r--;
  }
  return s;
};
