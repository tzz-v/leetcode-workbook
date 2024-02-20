function numRescueBoats(people: number[], limit: number): number {
  people.sort((a, b) => b - a);
  let i = 0;
  let j = people.length - 1;
  while (i <= j) {
    const extra = limit - people[i];
    if (extra >= people[j]) {
      j--;
    }
    i++;
  }
  return i;
}
