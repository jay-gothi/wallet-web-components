export function format(first: string, middle: string, last: string): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}
export function encrypt(value: string) {
  return btoa(value);
}

export function decrypt(value: string) {
  return atob(value);
}