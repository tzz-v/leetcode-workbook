// 模拟
// 隔一个种一个，看最后是否能种完

function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let i = 0;

  while (n > 0 && i < flowerbed.length) {
    if (
      flowerbed[i - 1] !== 1 &&
      flowerbed[i] !== 1 &&
      flowerbed[i + 1] !== 1
    ) {
      n--;
      i += 2;
    } else {
      i++;
    }
  }
  return n == 0;
}
