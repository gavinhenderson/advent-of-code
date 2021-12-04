import { getLinesFromFile } from "./read-file";
import path from "path";
import "./types";
import { linesToGroups } from "./lines-to-groups";

const lines = getLinesFromFile(path.join(__dirname, "./datasets/day-6.txt"));
const groups = linesToGroups(lines);

const total = groups.reduce(
  (prev, current) => prev + current.uniqueQuestions.length,
  0
);

const commonTotal = groups.reduce(
  (prev, current) => prev + current.commonQuestions.length,
  0
);

console.log({ total, commonTotal });
