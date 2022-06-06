/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

// addStrings方法来自上一题；
// 模拟竖式相乘；从右到左遍历乘数；
var multiply = function (num1, num2) {
  if (num1 === '0' || num2 === '0') return '0';
  const num = [];
  for (let i = num1.length - 1; i >= 0; i--) {
    let l = num1.length - i;
    const arr = new Array(l - 1).fill(0); // 除第一位以外，其余位都需要补0；
    for (let j = num2.length - 1; j >= 0; j--) {
      const val = (arr[l] ?? 0) + (num1[i] - 0) * (num2[j] - 0);
      if (val > 9) {
        arr[l] = val % 10;
        arr[l + 1] = Math.floor(val / 10);
      } else {
        arr[l] = val;
      }
      l++;
    }
    num.push(arr.reverse().join(''));
  }
  console.log(num);
  for (let i = 1; i < num.length; i++) {
    num[0] = addStrings(num[0], num[i]);
  }
  return num[0];
};
