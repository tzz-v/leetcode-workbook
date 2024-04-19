// a>b时就‘aab’，b>a就‘bba’；相等就‘ab’。剩下的放到末尾。

function strWithout3a3b(a: number, b: number): string {
  let res = '';
  while (a > b && b > 0) {
    res += 'aab';
    a -= 2;
    b--;
  }
  while (b > a && a > 0) {
    res += 'bba';
    b -= 2;
    a--;
  }
  while (a > 0 && b > 0) {
    res += 'ab';
    a--;
    b--;
  }
  while (a > 0) {
    res += 'a';
    a--;
  }
  while (b > 0) {
    res += 'b';
    b--;
  }
  return res;
}
