function convertToTitle(columnNumber: number): string {
  if (columnNumber <= 0) return '';
  columnNumber--;
  return (
    convertToTitle(Math.floor(columnNumber / 26)) +
    String.fromCharCode('A'.charCodeAt(0) + (columnNumber % 26))
  );
}
