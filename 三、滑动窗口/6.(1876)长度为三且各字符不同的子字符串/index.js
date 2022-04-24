/**
 * @param {string} s
 * @return {number}
 */

//滑动窗口，
// 长度为3，暴力解比滑动窗口还快
 var countGoodSubstrings = function(s) {
  const isRepeat = (arr) => {
      return arr.length === Array.from(new Set(arr)).length
  };
  let res = 0;
  const arr = [s[0],s[1],s[2]];
  if (isRepeat(arr)) {
      res = 1;
  }
  for (let i = 3; i< s.length; i++) {
      arr.shift();
      arr.push(s[i])
      res = isRepeat(arr) ? res + 1 : res
  }
  return res
};