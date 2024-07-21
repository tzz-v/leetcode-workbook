function findSpecialInteger(arr: number[]): number {
  let count = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      count++;
    } else {
      if (count * 4 > arr.length) {
        return arr[i - 1];
      }
      count = 1;
    }
  }
  if (count * 4 > arr.length) {
    return arr[arr.length - 1];
  }
}
