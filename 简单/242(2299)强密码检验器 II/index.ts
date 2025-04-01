function strongPasswordCheckerII(password: string): boolean {
  if (password.length < 8) return false;
  if (!/[a-z]/.test(password)) return false;
  if (!/[A-Z]/.test(password)) return false;
  if (!/[0-9]/.test(password)) return false;

  const arr = password.split('');
  if (arr.every((s) => !'!@#$%^&*()-+'.includes(s))) return false;
  if (arr.some((s, idx) => s === arr[idx + 1])) return false;
  return true;
}
