/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */

// 二分查找
var nextGreatestLetter = function (letters, target) {
  let l = 0;
  let r = letters.length - 1;
  let res = letters[0];
  while (l <= r) {
    const mid = parseInt((l + r) / 2);
    if (letters[mid] > target) {
      res = letters[mid];
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return res;
};
