function readBinaryWatch(turnedOn: number): string[] {
  const res: string[][] = [];
  if (turnedOn > 8) return [];
  const valArr = ['8', '4', '2', '1', '32', '16', '08', '04', '02', '01'];
  const func = (arr, k) => {
    if (arr.length === turnedOn) {
      res.push([...arr]);
      return;
    }
    for (let i = k; i - arr.length <= valArr.length - turnedOn; i++) {
      arr.push(valArr[i]);
      func(arr, i + 1);
      arr.pop();
    }
  };
  func([], 0);

  return res
    .map((item) => {
      const h = item
        .filter((val) => val.length === 1)
        .reduce((prev, cur) => Number(prev) + Number(cur), 0);
      const m = item
        .filter((val) => val.length === 2)
        .reduce((prev, cur) => Number(prev) + Number(cur), 0);
      const mStr = m.toString().length === 1 ? `0${m}` : m;
      return `${h}:${mStr}`;
    })
    .filter((val) => {
      const [h, m] = val.split(':');
      return Number(h) < 12 && Number(m) < 60;
    });
}
