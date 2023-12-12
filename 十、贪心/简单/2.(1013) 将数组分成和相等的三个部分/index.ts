// 计算数组和除以3能否除尽
// 寻找最小切分点，

function canThreePartsEqualSum(arr: number[]): boolean {
  const sum = arr.reduce((prev, cur) => prev + cur);
  if (sum % 3 !== 0) return false;
  let val = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    val += arr[i];
    if (val === sum / 3) {
      count++;
      val = 0;
    }
    if (count === 3) {
      const sum = arr.slice(i + 1).reduce((prev, cur) => prev + cur, 0);
      if (sum === 0) return true;
    }
  }
  return false;
}
