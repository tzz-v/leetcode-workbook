// 插入排序的变体，在满足条件下进行插入

function largestInteger(num: number): number {
  const arr = `${num}`.split('');
  
  for (let i = 1; i < arr.length; i++) {
    const cur = Number(arr[i])
    const type = cur % 2;

    let j = i - 1;
    let prev = i;
    while (j >= 0 && (Number(arr[j]) % 2 !== type || Number(arr[j]) < cur)) {
      if (Number(arr[j]) % 2 === type) {
        arr[prev] = arr[j];
        prev = j;
      }
      j--;
    };
    arr[prev] = `${cur}`;
  };
  return Number(arr.join(''));
};