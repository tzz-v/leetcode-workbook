/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
  const arr = [];
  for (let i = 0; i < ops.length; i++) {
    const n = arr.length - 1;
    switch (ops[i]) {
      case '+':
        arr.push(arr[n - 1] + arr[n]);
        break;
      case 'C':
        arr.pop();
        break;
      case 'D':
        arr.push(arr[n] * 2);
        break;
      default:
        arr.push(Number(ops[i]));
    }
  }
  return arr.reduce((prev, current) => prev + current, 0);
};
