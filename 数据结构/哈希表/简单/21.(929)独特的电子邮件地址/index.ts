function numUniqueEmails(emails: string[]): number {
  const set = new Set();
  emails.forEach((val) => {
    const index = val.indexOf('@');
    let plusIndex = val.indexOf('+');
    if (plusIndex == -1) {
      plusIndex = index;
    }
    const email = `${val.slice(0, plusIndex).replaceAll('.', '')}${val.slice(
      index
    )}`;
    set.add(email);
  });
  return set.size;
}
