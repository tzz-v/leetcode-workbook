/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

// 使用哈希表储存magazine的值和个数；
// 遍历ransomNote，每次使map的值的个数-1；
// 当map没有当前值或个数<0的时候return false;
var canConstruct = function (ransomNote, magazine) {
  if (magazine.length < ransomNote.length) return false;
  const arr = new Map();
  for (let i = 0; i < magazine.length; i++) {
    arr.set(magazine[i], (arr.get(magazine[i]) ?? 0) + 1);
  }
  for (let i = 0; i < ransomNote.length; i++) {
    if (!arr.has(ransomNote[i]) || arr.get(ransomNote[i]) <= 0) return false;
    arr.set(ransomNote[i], (arr.get(ransomNote[i]) ?? 0) - 1);
  }
  return true;
};
