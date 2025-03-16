function digitSum(s: string, k: number): string {
  let arr = s.split('');
  while (arr.length > k) {
    const newArr: string[] = [];
    for (let i = 0; i < arr.length; i += k) {
      newArr.push(
        `${arr.slice(i, i + k).reduce((prev, cur) => prev + Number(cur), 0)}`
      );
    }
    arr = newArr.join('').split('');
  }
  return arr.join('');
}
