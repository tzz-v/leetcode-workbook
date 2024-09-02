// 使用哈希表存储经过的路径，
function isPathCrossing(path: string): boolean {
  let h = 0;
  let v = 0;

  const coordinate = new Set<string>([`${h},${v}`]);

  for (let i = 0; i < path.length; i++) {
    switch (path[i]) {
      case 'N':
        h++;
        break;
      case 'S':
        h--;
        break;
      case 'E':
        v++;
        break;
      case 'W':
        v--;
        break;
    }
    if (coordinate.has(`${h},${v}`)) {
      return true;
    }
    coordinate.add(`${h},${v}`);
  }
  return false;
}
