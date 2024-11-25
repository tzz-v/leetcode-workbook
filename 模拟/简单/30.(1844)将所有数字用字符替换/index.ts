function replaceDigits(s: string): string {
  const arr = s.split('');
  for (let i = 1; i < s.length; i += 2) {
      arr[i] = shift(arr[i - 1], arr[i]);
  };
  return arr.join('');
};

const shift = (str: string, num: string) => {
  return String.fromCharCode(str.charCodeAt(0) + parseInt(num))
}