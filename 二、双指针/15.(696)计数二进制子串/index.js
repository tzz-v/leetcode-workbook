/**
 * @param {string} s
 * @return {number}
 */

// 将s按0和1的连续个数创建一个数组，'0011101'=>[2,3,1,1]
// 数组相邻项的最小值表示重复字串的个数，2+1+1=4
//
var countBinarySubstrings = function (s) {
  const arr = [];
  let i = -1;
  for (let j = 0; j < s.length; j++) {
    if (s[j] !== s[j - 1]) {
      i++;
      arr[i] = 1;
    } else {
      arr[i]++;
    }
  }
  let res = 0;
  for (let i = 1; i < arr.length; i++) {
    res += Math.min(arr[i], arr[i - 1]);
  }
  return res;
};
