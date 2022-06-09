/**
 * @param {number} n
 * @return {string[]}
 */

// 遍历每个数字，根据条件返回值；

var fizzBuzz = function (n) {
  const arr = [];
  let i = 1;
  while (i <= n) {
    arr.push(replace(i));
    i++;
  }
  return arr;
};

const replace = (i) => {
  if (i % 5 === 0 && i % 3 === 0) return 'FizzBuzz';
  if (i % 5 === 0) return 'Buzz';
  if (i % 3 === 0) return 'Fizz';
  return i + '';
};
