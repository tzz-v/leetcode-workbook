function haveConflict(event1: string[], event2: string[]): boolean {
  if (diff(event1[1], event2[0]) === -1) return false;
  if (diff(event2[1], event1[0]) === -1) return false;
  return true;
}

const diff = (time1: string, time2: string) => {
  const timeArr1 = time1.split(':');
  const timeArr2 = time2.split(':');
  if (Number(timeArr1[0]) < Number(timeArr2[0])) {
    return -1;
  } else if (Number(timeArr1[0]) > Number(timeArr2[0])) {
    return 1;
  }
  if (Number(timeArr1[1]) < Number(timeArr2[1])) {
    return -1;
  } else if (Number(timeArr1[1]) > Number(timeArr2[1])) {
    return 1;
  }
  return 0;
};
