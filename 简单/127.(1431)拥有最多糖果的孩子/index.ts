function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  const val = Math.max(...candies) - extraCandies;
  return candies.map((item) => item >= val);
}
