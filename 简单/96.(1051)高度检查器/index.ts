function heightChecker(heights: number[]): number {
  const arr = [...heights].sort((a, b) => a - b);
  let res = 0;

  arr.forEach((height, i) => {
    if (height !== heights[i]) res++;
  });
  return res;
}
