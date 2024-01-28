function checkValidString(s: string): boolean {
  let stack: number[] = [];
  let count: number[] = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '*') {
      count.push(i);
    }
    if (s[i] === '(') {
      stack.push(i);
    }
    if (s[i] === ')') {
      if (stack.length) {
        stack.pop();
      } else if (count.length) {
        count.pop();
      } else {
        return false;
      }
    }
  }
  while (stack.length) {
    if (!count.length || stack.pop() > count.pop()) return false;
  }
  return true;
}
