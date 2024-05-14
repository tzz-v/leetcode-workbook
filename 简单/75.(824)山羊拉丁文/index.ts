function toGoatLatin(sentence: string): string {
  const vowel = ['a', 'e', 'i', 'o', 'u'];
  const arr = sentence.split(' ');

  return arr
    .map((str, index) => {
      let newStr = str;
      if (!vowel.includes(str[0].toLocaleLowerCase())) {
        newStr = str.slice(1) + str[0];
      }
      newStr = newStr += 'ma';
      return (newStr += 'a'.repeat(index + 1));
    })
    .join(' ');
}
