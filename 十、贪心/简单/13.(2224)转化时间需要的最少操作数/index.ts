// 先计算两个时间点相差多长时间，然后尽可能的使用较大值的增长，使得操作次数更少
function convertTime(current: string, correct: string): number {
  let interval =
    (Number(correct.slice(0, 2)) - Number(current.slice(0, 2))) * 60 +
    Number(correct.slice(3)) -
    Number(current.slice(3));

  let res = 0;
  if (interval / 60 > 0) {
    res += Math.floor(interval / 60);
    interval %= 60;
  }
  if (interval / 15 > 0) {
    res += Math.floor(interval / 15);
    interval %= 15;
  }
  if (interval / 5 > 0) {
    res += Math.floor(interval / 5);
    interval %= 5;
  }
  res += interval;
  return res;
}
