// 一次遍历
// 两个攻击时间的间隔和中毒持续时间取较小值，计入总时间内；

function findPoisonedDuration(timeSeries: number[], duration: number): number {
  let res = 0;

  for (let i = 0; i < timeSeries.length; i++) {
    // 最后一次循环，timeSeries[i + 1]为undefined，if语句为false
    if (timeSeries[i] + duration > timeSeries[i + 1]) {
      res += timeSeries[i + 1] - timeSeries[i];
    } else {
      res += duration;
    }
  }
  return res;
}
