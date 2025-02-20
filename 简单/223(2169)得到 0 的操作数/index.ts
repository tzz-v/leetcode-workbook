function countOperations(num1: number, num2: number): number {
  let res = 0;
  while (!!num1 && !!num2) {
      res += Math.floor(num1 / num2);
      num1 = num1 % num2;
      [num1, num2] = [num2, num1];
  };

  return res;
};