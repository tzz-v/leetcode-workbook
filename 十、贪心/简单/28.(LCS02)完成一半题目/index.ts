function halfQuestions(questions: number[]): number {
  const map = new Map<number, number>();
  questions.forEach((val) => {
    map.set(val, (map.get(val) ?? 0) + 1);
  });
  const arr = Array.from(map).sort((a, b) => b[1] - a[1]);

  let res = 0;
  let count = questions.length / 2;
  arr.forEach((item) => {
    if (count <= 0) return;
    count -= item[1];
    res++;
  });
  return res;
}
