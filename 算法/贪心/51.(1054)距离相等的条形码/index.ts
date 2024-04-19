// 类似「30.（767）重构字符串」。
// 如果barcodes长度为奇数，且存在某个数字出现次数等于Math.ceil(len / 2);那么这个数字只能放到偶数位。
// 剩余元素间隔存放即可

function rearrangeBarcodes(barcodes: number[]): number[] {
  const map = new Map<number, number>();
  for (let i = 0; i < barcodes.length; i++) {
    map.set(barcodes[i], (map.get(barcodes[i]) ?? 0) + 1);
  }
  const arr = Array.from(map.entries());
  arr.sort((a, b) => b[1] - a[1]);

  let i = 0;
  let j = 0;
  while (arr[arr.length - 1][1]) {
    if (arr[j][1]) {
      barcodes[i] = arr[j][0];
      i += 2;
      arr[j][1]--;
    } else {
      j++;
    }
    if (i >= barcodes.length) {
      i = 1;
    }
  }
  return barcodes;
}
