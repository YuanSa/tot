export function numToAlpha(num: number, base = 0) {
  const Leveller = 65;
  const rangedNum = (num - base) % 26;
  return String.fromCharCode(rangedNum + Leveller);
}
