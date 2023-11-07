// 说白了就是计算每个房子离最近供暖器的距离，然后取最大的距离。

// 先给供暖器排序。
// 然后遍历房屋， 使用二分查找找到最近的供暖器距离。并保存最大值。
// 时间复杂度是（(m+n)lgn）其中m是房屋的长度，n是供暖器的长度。
// 排序的时间复杂度是（nlgn），遍历+查找的时间复杂度是（mlgn）

function findRadius(houses: number[], heaters: number[]): number {
  let res = 0;
  heaters.sort((a, b) => a - b);

  houses.forEach((house) => {
    let interval = Infinity;
    let i = 0;
    let j = heaters.length - 1;
    while (i <= j) {
      const mid = Math.floor((i + j) / 2);
      if (heaters[mid] > house) {
        interval = Math.min(heaters[mid] - house, interval);
        j = mid - 1;
      } else {
        interval = Math.min(house - heaters[mid], interval);
        i = mid + 1;
      }
    }
    console.log(interval);
    res = Math.max(res, interval);
  });
  return res;
}
