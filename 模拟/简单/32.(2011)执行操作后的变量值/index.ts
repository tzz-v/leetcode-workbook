function finalValueAfterOperations(operations: string[]): number {
  return operations.reduce((prev, cur) => {
    if (cur === '--X' || cur === 'X--') {
      return prev - 1;
    }
    return prev + 1;
  }, 0);
}
