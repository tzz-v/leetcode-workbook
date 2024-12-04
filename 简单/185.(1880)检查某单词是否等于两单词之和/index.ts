function isSumEqual(firstWord: string, secondWord: string, targetWord: string): boolean {
  const NUMBER = 'a'.charCodeAt(0);
  const getNumber = (str: string) => {
      return Number(str.split('').map((s) => s.charCodeAt(0) - NUMBER).join(''));
  }
  return getNumber(firstWord) + getNumber(secondWord) === getNumber(targetWord);
};