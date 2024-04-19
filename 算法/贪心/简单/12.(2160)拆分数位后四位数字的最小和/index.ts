// 给四个数字排序，当new1 = 最小值和最大值，new2=中间两个值 和最小
function minimumSum(num: number): number {
  const arr = `${num}`.split('').sort((a, b) => Number(a) - Number(b));
  return Number(arr[0] + arr[3]) + Number(arr[1] + arr[2]);
}
