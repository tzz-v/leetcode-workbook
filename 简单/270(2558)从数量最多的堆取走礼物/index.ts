function pickGifts(gifts: number[], k: number): number {
  gifts.sort((a, b) => b - a);

  for (k; k > 0; k--) {
    gifts[0] = Math.floor(Math.sqrt(gifts[0]));
    let i = 1;
    let temp = gifts[0];
    while (gifts[i] > temp) {
      gifts[i - 1] = gifts[i];
      i++;
    }
    gifts[i - 1] = temp;
    console.log(gifts);
  }

  return gifts.reduce((prev, cur) => prev + cur);
}
