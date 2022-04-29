/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  let l = 0;
  let r = s.length - 1;
  const arr = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  const res = s.split('');
  while (l < r) {
    if (!arr.includes(s[l])) {
      l++;
      continue;
    }
    if (!arr.includes(s[r])) {
      r--;
      continue;
    }
    console.log(s[l]);
    console.log(s[r]);
    const temp = s[l];
    res[l] = res[r];
    res[r] = temp;
    l++;
    r--;
  }
  return res.join('');
};
