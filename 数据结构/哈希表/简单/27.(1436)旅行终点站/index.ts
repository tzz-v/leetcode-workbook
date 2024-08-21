function destCity(paths: string[][]): string {
  const map = new Map<string, string>();

  paths.forEach(([from, to]) => {
    map.set(from, to);
    if (!map.has(to)) {
      map.set(to, '');
    }
  });

  let res = '';

  map.forEach((to, from) => {
    if (!to) res = from;
  });
  return res;
}
