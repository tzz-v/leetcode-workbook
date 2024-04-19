// 一排最多能预约两个家庭。
// 统计每一排已预约的座位号，之后可以得到能预约两个家庭的数量。
// 统计能预约一个家庭的数量，进行累加

function maxNumberOfFamilies(n: number, reservedSeats: number[][]): number {
  const occupied: Map<number, number[]> = new Map();
  for (const seat of reservedSeats) {
    if (seat[1] < 2 || seat[1] > 9) continue;
    if (!occupied.has(seat[0])) {
      occupied.set(seat[0], []);
    }
    occupied.get(seat[0])?.push(seat[1]);
  }
  let res = (n - occupied.size) * 2;
  occupied.forEach((item) => {
    res += calc(item);
  });
  return res;
}

const calc = (occupied: number[]) => {
  const left = [2, 3, 4, 5];
  const middle = [4, 5, 6, 7];
  const right = [6, 7, 8, 9];
  const leftFlag = left.some((val) => occupied.includes(val));
  const middleFlag = middle.some((val) => occupied.includes(val));
  const rightFlag = right.some((val) => occupied.includes(val));
  if (leftFlag && middleFlag && rightFlag) return 0;
  return 1;
};
