import { getLinesFromFile } from "./read-file";
import path from "path";
import "./types";
import { linesToBags } from "./lines-to-bags";
import { howManyCanContainBags } from "./how-many-can-contain-bag";
import { howManyBagsIn } from "./how-many-bags-in";

const lines = getLinesFromFile(path.join(__dirname, "./datasets/day-7.txt"));
const bags = linesToBags(lines);

console.log({
  howMany: howManyCanContainBags(bags, "shiny gold"),
  howManyAgain: howManyBagsIn(bags, "shiny gold"),
});
