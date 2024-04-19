/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// 一时想不起太好的方法，先来个暴力解，遍历这个字符串，不为‘#’时将他push数组，为‘#’时将数组最后一项移除。最后比较重构后的字符串的值。

var backspaceCompare = function (s, t) {
  const refactorStr = (str) => {
    const arr = [];
    for (let val of str) {
      if (val !== '#') {
        arr.push(val);
      } else {
        arr.pop();
      }
    }
    return arr.join('');
  };
  console.log(refactorStr(s));
  return refactorStr(s) === refactorStr(t);
};

// 双指针
// 一个字符是否会被删掉取决于该字符后面的退格符，因此可以逆序的遍历字符串就可以确认当前字符串是否会被删除。
// 可以从后往前比，比较s的最后一个字符是否等于t的最后一个字符，然后往前推
var backspaceCompare = function (s, t) {
  let i = s.length - 1;
  let j = t.length - 1;
  let skipS = 0;
  let skipT = 0;
  // 获取s字符串最后一个可比的元素
  while (i >= 0 || j >= 0) {
    while (i >= 0) {
      if (s.charAt(i) === '#') {
        skipS++;
        i--;
      } else if (skipS > 0) {
        skipS--;
        i--;
      } else {
        break;
      }
    }
    // 获取t字符串最后一个可比的元素
    while (j >= 0) {
      if (s.charAt(j) === '#') {
        skipT++;
        j--;
      } else if (skipT > 0) {
        skipT--;
        j--;
      } else {
        break;
      }
    }
    //进行比较
    if (i >= 0 && j >= 0) {
      if (t.charAt(i) !== t.charAt(j)) {
        return false;
      }
    } else {
      // 考虑边界问题，当两个下标有一个小于0时，说明s和t重构后的字符串长度不一样，一定不相等，返回false
      if (!(i < 0 && j < 0)) {
        return false;
      }
    }
    i--;
    j--;
  }
  return true;
};
