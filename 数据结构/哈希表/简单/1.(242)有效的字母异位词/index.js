/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

//  t 是 s 的异位词等价于「两个字符串中字符出现的种类和次数均相等」
// 维护一个长度为26的数组，对不上就return false；
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const arr = new Array(26).fill(0);
  const base = 'a'.charCodeAt();
  for (i in s) {
    arr[s[i].charCodeAt() - base]++;
  }
  for (i in t) {
    if (!arr[t[i].charCodeAt() - base]) {
      return false;
    }
    arr[t[i].charCodeAt() - base]--;
  }
  return true;
};

// 或者排个序，排序后相等则return true；
var isAnagram = function (s, t) {
  return s.split('').sort().join('') === t.split('').sort().join('');
};
