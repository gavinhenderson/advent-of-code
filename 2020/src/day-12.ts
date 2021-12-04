import { getLinesFromFile } from "./read-file";
import path from "path";
import "./types";
import {
  followDirections,
  manhattanDistance,
  manhattanDistanceNew,
} from "./follow-directions";

const lines = getLinesFromFile(path.join(__dirname, "./datasets/day-12.txt"));
const distance = manhattanDistance(lines);

console.log(distance);

const newDistance = manhattanDistanceNew(lines);

console.log(newDistance);
