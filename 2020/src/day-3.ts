import { getLinesFromFile } from "./read-file";
import path from "path";
import { linesToMap } from "./lines-to-map";
import { howManyTrees } from "./how-many-trees";

const lines = getLinesFromFile(path.join(__dirname, "./datasets/day-3.txt"));
const map = linesToMap(lines);

const numberOfTrees = howManyTrees(map, 3, 1);

console.log({ numberOfTrees });

const first = howManyTrees(map, 1, 1);
const second = howManyTrees(map, 3, 1);
const third = howManyTrees(map, 5, 1);
const fourth = howManyTrees(map, 7, 1);
const fifth = howManyTrees(map, 1, 2);

const total = first * second * third * fourth * fifth;

console.log({ first, second, third, fourth, fifth, total });
