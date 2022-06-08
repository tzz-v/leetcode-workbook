/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

// 模拟竖式运算；
// 跟第415题思路一样，415题是逢10进1，这个是逢2进1；
var addBinary = function (a, b) {
  let al = a.length - 1;
  let bl = b.length - 1;
  const arr = [];
  let i = 0;
  while (al >= 0 || bl >= 0) {
    const num =
      (a[al] ? a[al] - 0 : 0) + (b[bl] ? b[bl] - 0 : 0) + (arr[i] ?? 0);
    if (num > 1) {
      arr[i] = num % 2;
      arr[i + 1] = Math.floor(num / 2);
    } else {
      arr[i] = num;
    }
    al--;
    bl--;
    i++;
  }
  return arr.reverse().join('');
};
