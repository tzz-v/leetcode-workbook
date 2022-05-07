/**
 * @param {string} s
 * @return {string[]}
 */

//遍历出长度为10的所有字符串；
//将重复次数为2的存入数组；
var findRepeatedDnaSequences = function (s) {
  const res = [];
  const arr = new Map();
  for (let i = 0; i < s.length - 9; i++) {
    const str = s.slice(i, i + 10);
    arr.set(str, (arr.get(str) ?? 0) + 1);
    if (arr.get(str) == 2) {
      res.push(str);
    }
  }
  return res;
};
