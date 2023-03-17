// 将版本号按点分割，并将其转成数字，然后逐一比较数字整体的大小就可以了。

function compareVersion(version1: string, version2: string): number {
  let i = 0;
  let j = 0;
  while (i < version1.length || j < version2.length) {
    let x = 0;
    for (; i < version1.length && version1[i] !== '.'; i++) {
      x += x * 10 + Number(version1[i]);
    }
    let y = 0;
    for (; j < version2.length && version2[j] !== '.'; j++) {
      y += y * 10 + Number(version2[j]);
    }

    if (x !== y) {
      return x > y ? 1 : -1;
    }
    i++;
    j++;
  }
  return 0;
}
const aa = [
  [1, 4, 5],
  [2, 3, 6],
  [6, 4, 9],
];
