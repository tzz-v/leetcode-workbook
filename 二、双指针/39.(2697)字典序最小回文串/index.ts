function makeSmallestPalindrome(s: string): string {
  let i = 0;
  let j = s.length - 1;
  const arr = s.split('');
  while (i < j) {
    if (arr[i] !== arr[j]) {
      if (arr[i].charAt(0) < arr[j].charAt(0)) {
        arr[j] = arr[i];
      } else {
        arr[i] = arr[j];
      }
    }
    i++;
    j--;
  }
  return arr.join('');
}
