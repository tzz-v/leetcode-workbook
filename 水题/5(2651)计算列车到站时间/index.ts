/**
 * 计算列车到站时间
 * 难度：Easy
 * 标签：数学
 */

// 在这里实现你的解决方案
function findDelayedArrivalTime(
  arrivalTime: number,
  delayedTime: number
): number {
  const time = arrivalTime + delayedTime;
  return time < 24 ? time : time - 24;
}
