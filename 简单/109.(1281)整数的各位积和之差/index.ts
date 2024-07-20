function subtractProductAndSum(n: number): number {
  const arr = `${n}`.split('');
  return (
    arr.reduce((prev, cur) => Number(prev) * Number(cur), 1) -
    arr.reduce((prev, cur) => Number(prev) + Number(cur), 0)
  );
}
