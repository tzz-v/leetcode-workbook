/**
 * @param {string} s
 * @return {boolean}
 */

// 先判断是不是回文串；
// 不是的话左指针加一判断是不是回文串；
// 不是的话右指针减一判断是不是回文串；

var validPalindrome = function (s) {
  const func = (s, i, j) => {
    while (i < j) {
      if (s[i] !== s[j]) {
        break;
      }
      i++;
      j--;
    }
    return [i, j];
  };

  const res = func(s, 0, s.length - 1);
  if (res[0] >= res[1]) return true;

  const sonRes1 = func(s, res[0] + 1, res[1]);
  if (sonRes1[0] >= sonRes1[1]) return true;

  const sonRes2 = func(s, res[0], res[1] - 1);
  if (sonRes2[0] >= sonRes2[1]) return true;

  return false;
};
