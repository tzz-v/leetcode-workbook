function carPooling(trips: number[][], capacity: number): boolean {
  const arr = new Array(1000);
  trips.forEach((item) => {
      arr[item[1]] = (arr[item[1]] ?? 0) + item[0];
      arr[item[2]] = (arr[item[2]] ?? 0) - item[0];
  });

  let cur = 0;
  for (let  i= 0; i < arr.length; i++) {
      if (!arr[i]) continue;
      cur += arr[i];
      if (cur > capacity) return false;
  }
  return true;
};