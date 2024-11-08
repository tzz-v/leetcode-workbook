function minOperations(s: string): number {
  let res = 0;

  for (let i = 0; i < s.length; i++) {
      if (i % 2 === 0 &&  s[i] !== '0') res++;
      if (i % 2 !== 0 && s[i] !== '1') res++;
  };
  return Math.min(res, s.length - res);
};