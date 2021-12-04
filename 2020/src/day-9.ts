import { getLinesFromFile } from "./read-file";
import path from "path";
import "./types";
import { isThereValidSum } from "./is-there-valid-sum";
import { k_combinations } from "./get-all-permutations";
import { getAllContiguous } from "./get-all-contiguous";

const lines = getLinesFromFile(path.join(__dirname, "./datasets/day-9.txt"));
const numbers = lines.map((line) => parseInt(line));

let currentTarget = 0;

for (let i = 25; i < numbers.length; i++) {
  currentTarget = numbers[i];
  const currentSelection = numbers.slice(i - 25, i);

  const sum = isThereValidSum(currentSelection, currentTarget);

  if (sum.length !== 2) {
    break;
  }
}

console.log({ currentTarget });

const allContiguousSets = getAllContiguous(numbers);

for (const current of allContiguousSets) {
  const sum = current.reduce((a, b) => a + b, 0);

  if (sum === currentTarget) {
    const min = Math.min(...current);
    const max = Math.max(...current);

    console.log({ min, max, total: min + max });
    break;
  }
}
