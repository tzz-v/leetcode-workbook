/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// 建两个哈希表一一表示两个字符串中每个字符的映射关系；
// s的任意字符在t中有唯一字符对应，t的任意字符在s中有唯一字符对应；
// 不唯一则返回false；
var isIsomorphic = function (s, t) {
  const arrS = new Map();
  const arrT = new Map();
  for (let i = 0; i < s.length; i++) {
    if (arrS.has(s[i]) && arrS.get(s[i]) !== t[i]) return false;
    if (arrT.has(t[i]) && arrT.get(t[i]) !== s[i]) return false;
    arrS.set(s[i], t[i]);
    arrT.set(t[i], s[i]);
  }
  return true;
};
