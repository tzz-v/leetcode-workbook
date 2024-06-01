function validMountainArray(arr: number[]): boolean {
  if (arr.length < 3) return false;
  let up = true;
  let res = true;
  arr.forEach((item, index) => {
    if (index === 0) return;
    if (arr[index - 1] === item) res = false;
    if (index === 1 && arr[index - 1] > item) res = false;

    if (up === true && arr[index - 1] > item) {
      up = false;
      return;
    }
    if (up === false && arr[index - 1] < item) {
      res = false;
    }
  });
  return res && !up;
}
