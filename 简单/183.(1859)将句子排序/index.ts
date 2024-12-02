function sortSentence(s: string): string {
  return s.split(' ').sort((a, b) => parseInt(a[a.length - 1]) - parseInt(b[b.length - 1])).map((str) => str.slice(0, -1)).join(' ')
};