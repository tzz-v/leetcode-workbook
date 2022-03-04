/**
 * @param {number[]} fruits
 * @return {number}
 */

// 滑动窗口：找到所有满足条件的 长度，然后得到最大的长度
// 遍历数组，
//   发现map存在两项以上的时候:
//   循环将左指针的元素-1，直至map中只剩两项。
// 更新最大长度（当前的右指针r - 左指针l）
var totalFruit = function (fruits) {
  const basket = new Map();
  let l = r = 0;
  let res = 2;
  for (let r = 0; r < fruits.length; r++) {
    if (basket.has(fruits[r])) {
      basket.set(fruits[r], basket.get(fruits[r]) + 1);
    } else {
      basket.set(fruits[r], 1);
    }
    while (basket.size > 2) {
      basket.set(fruits[i], basket.get(fruits[i]) - 1);
      if (basket.get(fruits[i]) === 0) {
        basket.delete(fruits[i]);
      }
      l++;
    }
    res = Math.max(res, r - l + 1);
  }
  return fruits.length > 2 ? res : fruits.length;
};
totalFruit([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4]);
