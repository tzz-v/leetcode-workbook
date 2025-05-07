function countTime(time: string): number {
  const arr = time.split(':');
  let left = 1;
  let right = 1;
  if (arr[0] === '??') {
    left *= 24;
  } else if (arr[0][0] === '?') {
    if (Number(arr[0][1]) > 3) {
      left *= 2;
    } else {
      left *= 3;
    }
  } else if (arr[0][1] === '?') {
    if (arr[0][0] === '2') {
      left *= 4;
    } else {
      left *= 10;
    }
  }
  if (arr[1] === '??') {
    right *= 60;
  } else if (arr[1][0] === '?') {
    right *= 6;
  } else if (arr[1][1] === '?') {
    right *= 10;
  }
  return left * right;
}
