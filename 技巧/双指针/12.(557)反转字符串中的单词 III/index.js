/**
 * @param {string} s
 * @return {string}
 */

// 将字符串转换成以单词为单位的数组；
// 遍历并反转每一项；
// 在转换回来；
var reverseWords = function (s) {
  const arr = s.split(' ');
  arr.forEach((item, index) => {
    const itemArr = item.split('');
    let i = 0;
    let j = itemArr.length - 1;
    while (i < j) {
      const temp = itemArr[i];
      itemArr[i] = itemArr[j];
      itemArr[j] = temp;
      i++;
      j--;
    }
    arr[index] = itemArr.join('');
  });
  return arr.join(' ');
};

// 先反转整个字符串；
// 在反转单词；
var reverseWords = function (s) {
  const newStr = s.split(' ').reverse().join('');
  return newStr.split(' ').reverse().join(' ');
};
