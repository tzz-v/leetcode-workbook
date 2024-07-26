/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */

// 遍历timeSeries；
// 判断duration 和（timeSeries[i] - timeSeries[i - 1]）的大小；
// num = num + 较小的值；
// return num；
var findPoisonedDuration = function (timeSeries, duration) {
  let num = 0;
  for (let i = 0; i < timeSeries.length; i++) {
    const diff = timeSeries[i] - timeSeries[i - 1];
    if (i === 0 || diff >= duration) {
      num += duration;
    } else {
      num += diff;
    }
  }
  return num;
};
