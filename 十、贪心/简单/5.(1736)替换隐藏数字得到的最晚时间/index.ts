function maximumTime(time: string): string {
  let arr = time.split('');
  if (arr[0] === '?') {
    if (arr[1] === '?' || Number(arr[1]) < 4) {
      arr[0] = '2';
    } else {
      arr[0] = '1';
    }
  }
  if (arr[1] === '?') {
    if (arr[0] === '1' || arr[0] === '0') {
      arr[1] = '9';
    } else {
      arr[1] = '3';
    }
  }

  if (arr[3] === '?') {
    arr[3] = '5';
  }
  if (arr[4] === '?') {
    arr[4] = '9';
  }
  return arr.join('');
}
