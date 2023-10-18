// 一直自除以七，直到小于7，把余数统计起来并反转，就是7进制的数
function convertToBase7(num: number): string {
  let res = '';
  let negative = num >= 0 ? '' : '-';
  num = Math.abs(num);
  while (num >= 7) {
    res = (num % 7) + res;
    num = Math.floor(num / 7);
  }
  return negative + num + res;
}
