import { getAllPermutations } from "./get-all-permutations";

export const isThereValidSum = (
  numberSelection: Array<number>,
  target: number,
  numberOfNumbersAllowed: number = 2
): Array<number> => {
  const permutations = getAllPermutations(
    numberSelection,
    numberOfNumbersAllowed
  );

  for (const current of permutations) {
    const sum = current.reduce((a, b) => a + b, 0);
    if (sum === target) {
      return current;
    }
  }

  return [];
};
