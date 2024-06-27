function defangIPaddr(address: string): string {
  return address.replaceAll('.', '[.]');
}
