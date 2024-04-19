function predictPartyVictory(senate: string): string {
  let dLen = senate.replaceAll('R', '').length;
  let rLen = senate.length - dLen;
  let i = 0;
  let delD = 0;
  let delR = 0;
  let arr = senate.split('');
  while (true) {
    if (dLen === 0) return 'Radiant';
    if (rLen === 0) return 'Dire';
    if (i === arr.length) i = 0;
    if (arr[i] === 'D') {
      if (delD) {
        arr[i] = '';
        delD--;
        dLen--;
      } else {
        delR++;
      }
    } else if (arr[i] === 'R') {
      if (delR) {
        arr[i] = '';
        delR--;
        rLen--;
      } else {
        delD++;
      }
    }
    i++;
  }
}
