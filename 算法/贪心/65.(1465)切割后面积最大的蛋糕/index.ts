// 先给horizontalCuts和verticalCuts排序
// 获取切割后最大的宽度和高度。（需要考虑0和结尾边界）
// 高乘宽后取余。

function maxArea(
  h: number,
  w: number,
  horizontalCuts: number[],
  verticalCuts: number[]
): bigint {
  verticalCuts.sort((a, b) => a - b);
  horizontalCuts.sort((a, b) => a - b);

  return (
    (BigInt(calcMax(horizontalCuts, h)) * BigInt(calcMax(verticalCuts, w))) %
    BigInt(Math.pow(10, 9) + 7)
  );
}

const calcMax = (arr: number[], boardr: number) => {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    res = Math.max(arr[i] - (arr[i - 1] ?? 0), res);
  }
  return Math.max(res, boardr - arr[arr.length - 1]);
};
