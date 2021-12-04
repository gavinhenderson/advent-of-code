import { getLinesFromFile } from "./read-file";
import path from "path";
import "./types";
import { howManyJolts } from "./how-many-jolts";
import { howManyArrangements } from "./how-many-arrangements";

const lines = getLinesFromFile(path.join(__dirname, "./datasets/day-10.txt"));
const numbers = lines.map((line) => parseInt(line));

const oneJolt = howManyJolts(numbers, 1);
const threeJolt = howManyJolts(numbers, 3);

console.log({ oneJolt, threeJolt, result: oneJolt * threeJolt });

const part2 = howManyArrangements(numbers);

console.log({ part2 });
