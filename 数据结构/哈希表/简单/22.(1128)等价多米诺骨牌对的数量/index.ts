function numEquivDominoPairs(dominoes: number[][]): number {
  const map = new Map<string, number>();
  let res = 0;
  dominoes.forEach((item) => {
    const val =
      item[0] < item[1] ? `${item[0]}${item[1]}` : `${item[1]}${item[0]}`;

    res += map.get(val) ?? 0;
    map.set(val, (map.get(val) ?? 0) + 1);
  });
  return res;
}
