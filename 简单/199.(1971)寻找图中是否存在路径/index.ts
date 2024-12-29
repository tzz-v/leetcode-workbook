function validPath(
  n: number,
  edges: number[][],
  source: number,
  destination: number
): boolean {
  if (source === destination) return true;
  const map = new Map<number, number[]>();
  edges.forEach((item) => {
    const arr1 = map.get(item[0]);
    if (arr1) {
      arr1.push(item[1]);
    } else {
      map.set(item[0], [item[1]]);
    }

    const arr2 = map.get(item[1]);
    if (arr2) {
      arr2.push(item[0]);
    } else {
      map.set(item[1], [item[0]]);
    }
  });
  const set = new Set<number>();
  return find(source, destination, map, set);
}

const find = (
  from: number,
  end: number,
  map: Map<number, number[]>,
  set: Set<number>
) => {
  if (from === end) return true;
  set.add(from);
  const arr = map.get(from) ?? [];
  return arr.some((num) => !set.has(num) && find(num, end, map, set));
};
