function countPoints(rings: string): number {
  const arr = new Array(10).fill(0).map((_) => new Array(3).fill(0));

  for (let i = 0; i < rings.length; i += 2) {
    const idx = rings[i + 1];
    switch (rings[i]) {
      case 'R':
        arr[idx][0] = 1;
        break;
      case 'G':
        arr[idx][1] = 1;
        break;
      case 'B':
        arr[idx][2] = 1;
        break;
    }
  }
  return arr.filter((item) => item.join('') === '111').length;
}
