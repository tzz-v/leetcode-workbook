function squareIsWhite(coordinates: string): boolean {
  if (["a", "c", "e", "g"].includes(coordinates[0])) {
      return parseInt(coordinates[1]) % 2 === 0;
  }
  return parseInt(coordinates[1]) % 2 === 1;
};