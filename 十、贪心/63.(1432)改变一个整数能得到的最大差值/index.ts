// 生成最大值：找个第一个不等于9的数字，把num中的这个数字都替换成9；
// 生成最小值：首位不等于1时，把num中的这个数字都替换成1；首位等于1时，找到第一个不等于0且不等于1的数字，把num中的这个数字都替换成0；

function maxDiff(num: number): number {
  const str = `${num}`;
  let i = 0;
  while (str[i] === '9' && i < str.length - 1) i++;
  const max = Number(str.replaceAll(str[i], '9'));

  let min;
  if (str[0] !== '1') {
    min = Number(str.replaceAll(str[0], '1'));
  } else {
    i = 1;
    while ((str[i] === '0' || str[i] === '1') && i < str.length) i++;
    min = Number(str.replaceAll(str[i], '0'));
  }

  return max - min;
}
