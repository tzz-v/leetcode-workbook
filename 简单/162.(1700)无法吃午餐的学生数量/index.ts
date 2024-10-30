function countStudents(students: number[], sandwiches: number[]): number {
  let i = 0;
  let j = 0;
  let breakIdx: number;
  while (true) {
      if (i === breakIdx) break;
      if (students[i] === sandwiches[j]) {
          j++;
          students[i] = 2;
          breakIdx = undefined
      } else if (breakIdx === undefined){
          breakIdx = i;
      }
      i++;
      if (i === students.length) i = 0;
  };
  return students.filter((item) => item === 0 || item === 1).length;
};