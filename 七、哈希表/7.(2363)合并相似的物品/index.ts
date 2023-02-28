// 用哈希表把所有数据存起来，最后转回数组，排序返回。

function mergeSimilarItems(items1: number[][], items2: number[][]): number[][] {
  const map = new Map(items1 as Array<[number, number]>);
  for (const item of items2) {
    map.set(item[0], (map.get(item[0]) ?? 0) + item[1]);
  }
  const ret = Array.from(map).sort((a, b) => a[0] - b[0]);
  return ret;
}
// 或者双指针也可以
// function mergeSimilarItems(
//   items1: Array<[number, number]>,
//   items2: number[][]
// ): number[][] {
//   items1.sort((a,b) => a[0] - b[0]);
//   items2.sort((a,b) => a[0] - b[0]);
//   const ret = [];
//   let i = 0;
//   let j = 0;
//   let len1 = items1.length;
//   let len2 = items2.length;
//   while (i < len1 || j < len2) {
//     if (i === len1) {
//       return [...ret, ...items2.slice(j)];
//     }
//     if (j === len2) {
//       return [...ret, ...items1.slice(i)];
//     }
//     if (items1[i][0] < items2[j][0]) {
//       ret.push(items1[i]);
//       i++;
//     } else if (items1[i][0] > items2[j][0]) {
//       ret.push(items2[j]);
//       j++;
//     } else {
//       ret.push([items1[i][0], items1[i][1] + items2[j][1]]);
//       i++;
//       j++;
//     }
//   }
//   return ret;
// }
