function replaceElements(arr: number[]): number[] {
  let max = -1;

  for (let i = arr.length - 1; i >= 0; i--) {
    let cur = arr[i];
    arr[i] = max;
    max = Math.max(max, Number(cur));
  }
  return arr;
}
