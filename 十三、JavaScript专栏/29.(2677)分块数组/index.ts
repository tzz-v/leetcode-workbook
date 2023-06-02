function chunk(arr: any[], size: number): any[][] {
  const res: any[][] = [];
  let index = 0;
  while (index < arr.length) {
    res.push(arr.slice(index, index + size));
    index += size;
  }
  return res;
}
