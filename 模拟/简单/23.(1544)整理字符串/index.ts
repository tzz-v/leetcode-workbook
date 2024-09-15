function makeGood(s: string): string {
  let arr: string[] = [];
  for (let i = 0; i < s.length; i++) {
    if (
      arr.length &&
      arr[arr.length - 1] !== s[i] &&
      arr[arr.length - 1].toLowerCase() === s[i].toLowerCase()
    ) {
      arr.pop();
    } else {
      arr.push(s[i]);
    }
  }
  return arr.join('');
}
