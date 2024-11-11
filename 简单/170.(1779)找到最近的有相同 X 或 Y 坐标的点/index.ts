function nearestValidPoint(x: number, y: number, points: number[][]): number {
  let idx = -1;
  let d = Infinity;

  points.forEach((item, index) => {
      if (item[0] !== x && item[1] !== y) return;
      const cur = Math.abs(x - item[0]) + Math.abs(y - item[1]);
      if (cur < d) {
          idx = index;
          d = cur;
      };
  });

  return idx;
};