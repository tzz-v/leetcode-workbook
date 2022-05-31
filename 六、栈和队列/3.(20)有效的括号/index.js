/**
 * @param {string} s
 * @return {boolean}
 */

// 栈；
// 遇到 ( { [ 就push到arr里；
// 遇到 ) } ] 就判断是否与arr的最后一项是否成对
// 成对则pop();不成对则 return false；
// 如果符合条件，最后arr.length应该等于0；
var isValid = function (s) {
  const map = new Map([
    [')', '('],
    ['}', '{'],
    [']', '['],
  ]);
  const arr = [];
  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      arr.push(s[i]);
    } else {
      if (map.get(s[i]) === arr[arr.length - 1]) {
        arr.pop();
      } else {
        return false;
      }
    }
  }
  return arr.length === 0;
};
