function checkZeroOnes(s: string): boolean {
  let oneMax = 0;
  let zeroMax = 0;

  let oneCount = 0;
  let zeroCount = 0;

  for (const str of s) {
      if (str === '1') {
          oneCount++;
          zeroMax = Math.max(zeroCount, zeroMax);
          zeroCount = 0;
      } else {
          zeroCount++;
          oneMax = Math.max(oneCount, oneMax);
          oneCount = 0;
      }
  };
  zeroMax = Math.max(zeroCount, zeroMax);
  oneMax = Math.max(oneCount, oneMax);
  return oneMax > zeroMax;
};