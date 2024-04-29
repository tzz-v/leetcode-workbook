// 深度遍历
function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  color: number
): number[][] {
  let curColor = image[sr][sc];
  if (curColor === color) return image;
  image[sr][sc] = color;

  if (sr > 0 && image[sr - 1][sc] === curColor) {
    floodFill(image, sr - 1, sc, color);
  }
  if (sr < image.length - 1 && image[sr + 1][sc] === curColor) {
    floodFill(image, sr + 1, sc, color);
  }
  if (sc > 0 && image[sr][sc - 1] === curColor) {
    floodFill(image, sr, sc - 1, color);
  }
  if (sc < image[0].length - 1 && image[sr][sc + 1] === curColor) {
    floodFill(image, sr, sc + 1, color);
  }

  return image;
}
