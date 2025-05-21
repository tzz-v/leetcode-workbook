function maximumValue(strs: string[]): number {
  return strs.reduce((prev, cur) => {
    if (isNaN(Number(cur))) {
      return Math.max(cur.length, prev);
    } else {
      return Math.max(Number(cur), prev);
    }
  }, -Infinity);
}
