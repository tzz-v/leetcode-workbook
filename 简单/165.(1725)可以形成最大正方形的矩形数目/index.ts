function countGoodRectangles(rectangles: number[][]): number {
  let maxW = 0;
  let count = 0;
  rectangles.forEach((item) => {
      const w = Math.min(...item);
      if (w > maxW) {
          maxW = w;
          count = 1;
      } else if (w === maxW) {
          count++;
      }
  })
  return count;
};