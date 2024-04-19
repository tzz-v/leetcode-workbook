/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
// 模拟；
// 遍历小朋友，只要有糖果就一直分
var distributeCandies = function (candies, num_people) {
  const arr = new Array(num_people).fill(0);
  let i = 0;
  let max = candies;
  let min = 1;
  while (max - min >= 0) {
    const val = max - min;
    arr[i] += min;
    max = val;
    min++;
    if (i === arr.length - 1) {
      i = 0;
    } else {
      i++;
    }
  }
  arr[i] += max;
  return arr;
};
