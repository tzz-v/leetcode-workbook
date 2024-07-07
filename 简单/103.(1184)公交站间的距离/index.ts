function distanceBetweenBusStops(
  distance: number[],
  start: number,
  destination: number
): number {
  if (start > destination) {
    [start, destination] = [destination, start];
  }

  let res1 = 0;
  let res2 = 0;
  for (let i = 0; i < distance.length; i++) {
    if (i >= start && i < destination) {
      res1 += distance[i];
    } else {
      res2 += distance[i];
    }
  }
  return Math.min(res1, res2);
}
