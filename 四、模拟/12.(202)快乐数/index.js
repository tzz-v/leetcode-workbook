/**
 * @param {number} n
 * @return {boolean}
 */

// 模拟；

// 使用递归，重复计算数字n的每个位置数的平方和；
// 终止条件n === 0；return true;

// 可能会出现循环的情况，比如：58->89->145->42->20->4->16->37->58,
// 所以，每次计算完值后可以存入数组，在下次计算前先查看数组中是否存在对应值，存在则说明处于循环中，return false；

var isHappy = function (n) {
  const arr = [];
  const func = (n) => {
    if (n === 1) return true;
    if (arr[n]) {
      return false;
    } else {
      let num = 0;
      let val = n;
      while (val > 0) {
        const d = val % 10;
        val = Math.floor(val / 10);
        num += d * d;
      }
      arr[n] = num;
      return func(num);
    }
  };
  return func(n);
};
