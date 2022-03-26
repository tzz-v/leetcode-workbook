/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */

// 1. 拿到==c的所有下标
// 2. 遍历每个元素
// 3. 找到最短距离
var shortestToChar = function (s, c) {
  const arr = s.split('');
  const indexs = arr
    .map((item, index) => {
      return item === c ? index : false;
    })
    .filter((item) => item !== false);

  const result = [];
  arr.forEach((item, i) => {
    let interval = arr.length;
    indexs.forEach((value) => {
      interval =
        interval < Math.abs(i - value) ? interval : Math.abs(i - value);
    });
    result.push(interval);
  });
  return result;
};
