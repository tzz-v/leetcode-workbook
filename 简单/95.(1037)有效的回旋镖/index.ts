function isBoomerang(points: number[][]): boolean {
  const firstInterval = [
    points[1][0] - points[0][0],
    points[1][1] - points[0][1],
  ];
  const secondInterval = [
    points[2][0] - points[0][0],
    points[2][1] - points[0][1],
  ];
  return (
    firstInterval[0] * secondInterval[1] -
      firstInterval[1] * secondInterval[0] !==
    0
  );
}
