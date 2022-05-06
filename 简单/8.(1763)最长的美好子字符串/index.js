/**
 * @param {string} s
 * @return {string}
 */

// A-Z(65-90);
// a-z(97-122);
// 找到以每个下标为开始的 、符合条件的 最长字符串；
var longestNiceSubstring = function (s) {
  const func = (str) => {
    const arr = Array.from(new Set(str.split('')));
    const lower = [];
    const upper = [];
    for (let i = 0; i < arr.length; i++) {
      const val = arr[i].charCodeAt();
      if (val > 96) {
        lower.push(val);
      } else {
        upper.push(val);
      }
    }
    if (lower.length !== upper.length) return false;
    lower.sort((a, b) => a - b);
    upper.sort((a, b) => a - b);
    for (let i = 0; i < lower.length; i++) {
      if (lower[i] - 32 !== upper[i]) return false;
    }
    return str;
  };
  let l = 0;
  let r = 2;
  let result = '';
  for (let i = 0; i < s.length - 1; i++) {
    for (let j = i + 1; j < s.length; j++) {
      const val = func(s.slice(i, j + 1));
      if (!!val) {
        result = result.length < val.length ? val : result;
      }
    }
  }
  return result;
};
