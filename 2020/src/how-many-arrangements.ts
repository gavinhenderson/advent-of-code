export const howManyArrangements = (numbers: Array<number>): number => {
  const padded = [...numbers, 0];
  const sorted = padded.sort((a, b) => a - b);

  const counter = { 0: 1 };

  // loop through all numbers in the array
  for (let i = 0; i < sorted.length; i++) {
    for (let j = i + 1; sorted[j] < sorted[i] + 4; j++) {
      const current = counter[j] || 0;
      counter[j] = current + counter[i];
    }
  }

  const asArray = Object.values(counter);
  return asArray[asArray.length - 1];
};
