// 找规律发现，当你的回合，剩下4个石头的时候不管你拿几个你都会输。
// 同理，8个，16个。。。4的倍数个；

function canWinNim(n: number): boolean {
  return n % 4 !== 0;
}
