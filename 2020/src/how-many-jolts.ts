export const howManyJolts = (
  numbers: Array<number>,
  joltSize: number
): number => {
  const sorted = numbers.sort((a, b) => a - b);
  let counter = 1;

  for (let i = 0; i < sorted.length - 1; i++) {
    const current = sorted[i];
    const next = sorted[i + 1];

    if (next - current === joltSize) counter++;
  }

  return counter;
};
