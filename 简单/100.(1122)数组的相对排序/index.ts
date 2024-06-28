// 由于只有1000个元素，可以通过arr2给arr1元素定义权重。按权重排序。
// 权重计算方式：((下标 ?? 999) + 1) * 9999 + val,

function relativeSortArray(arr1: number[], arr2: number[]): number[] {
  return arr1.sort((a, b) => {
    const iA = arr2.indexOf(a);
    const iB = arr2.indexOf(b);
    const weightA = ((iA === -1 ? 999 : iA) + 1) * 9999 + a;
    const weightB = ((iB === -1 ? 999 : iB) + 1) * 9999 + b;
    return weightA - weightB;
  });
}
