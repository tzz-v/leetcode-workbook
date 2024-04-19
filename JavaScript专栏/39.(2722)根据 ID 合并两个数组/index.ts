function join(arr1: any[], arr2: any[]): any[] {
  const map = new Map<string, any>();
  arr1.forEach((item) => {
    map.set(item.id, item);
  });
  arr2.forEach((item) => {
    if (map.has(item.id)) {
      const target = map.get(item.id);
      for (let key of Object.keys(item)) {
        target[key] = item[key];
      }
    } else {
      map.set(item.id, item);
    }
  });
  return Array.from(map.values()).sort((a, b) => a.id - b.id);
}
