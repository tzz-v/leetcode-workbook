function minMaxDifference(num: number): number {
  const str = `${num}`;
  const min = str.replaceAll(str[0], '0');
  let i = 0;
  while (str[i] === '9' && i < str.length - 1) i++;
  const max = str.replaceAll(str[i], '9');

  return parseInt(max) - parseInt(min);
}
