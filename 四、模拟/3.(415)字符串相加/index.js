/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

// 模拟竖式加减的过程；
// 当位数和大于9时进一位
var addStrings = function (num1, num2) {
  const arr = [];
  let i = 0;
  let l1 = num1.length - 1;
  let l2 = num2.length - 1;
  while (l1 >= 0 || l2 >= 0) {
    val1 = l1 >= 0 ? num1[l1] - 0 : 0;
    val2 = l2 >= 0 ? num2[l2] - 0 : 0;
    const num = (arr[i] ?? 0) + val1 + val2;
    if (num > 9) {
      arr[i] = num % 10;
      arr[i + 1] = 1;
    } else {
      arr[i] = num;
    }
    i++;
    l1--;
    l2--;
  }
  return arr.reverse().join('');
};
