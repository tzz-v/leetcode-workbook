function countPairs(nums: number[], k: number): number {
  const map = new Map<number, number[]>();

  nums.forEach((item, i) => {
    let arr = map.get(item);
    if (!arr) {
      map.set(item, [i])
    } else {
      arr.push(i)
    }
  });
  let res = 0;
  map.forEach((arr) => {
   for (let i = 0; i < arr.length; i++) {
     for (let j = i + 1; j < arr.length; j++) {
       if (arr[i] * arr[j] % k === 0) {
         res++;
       }
     }
   }
  });
  return res;
}
