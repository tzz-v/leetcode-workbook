function canFormArray(arr: number[], pieces: number[][]): boolean {
  let i = 0;
  const map = new Map<number, number[]>();

  pieces.forEach((item) => {
    map.set(item[0], item);
  });
  while (i < arr.length) {
    const curArr = map.get(arr[i]);
    if (!curArr) break;
    for (let j = 0; j < curArr.length; j++) {
      if (arr[i] !== curArr[j]) break;
      i++;
    }
  }
  return i === arr.length;
}
