function countDaysTogether(
  arriveAlice: string,
  leaveAlice: string,
  arriveBob: string,
  leaveBob: string
): number {
  const arriveAliceArr = getTime(arriveAlice);
  const arriveBobArr = getTime(arriveBob);
  let arrive = arriveAliceArr;
  if (
    arriveBobArr[0] > arriveAliceArr[0] ||
    (arriveBobArr[0] === arriveAliceArr[0] &&
      arriveBobArr[1] > arriveAliceArr[1])
  ) {
    arrive = arriveBobArr;
  }
  const leaveAliceArr = getTime(leaveAlice);
  const leaveBobArr = getTime(leaveBob);
  let leave = leaveAliceArr;
  if (
    leaveBobArr[0] < leaveAliceArr[0] ||
    (leaveBobArr[0] === leaveAliceArr[0] && leaveBobArr[1] < leaveAliceArr[1])
  ) {
    leave = leaveBobArr;
  }
  if (arrive[0] > leave[0]) {
    return 0;
  }
  if (arrive[0] === leave[0]) {
    if (arrive[1] > leave[1]) return 0;
    return leave[1] - arrive[1] + 1;
  }
  const days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let day = leave[1] + days[arrive[0]] - arrive[1] + 1;

  for (let i = arrive[0] + 1; i < leave[0]; i++) {
    day += days[i];
  }
  return day;
}

const getTime = (str: string) => {
  return str.split('-').map((item) => Number(item));
};
