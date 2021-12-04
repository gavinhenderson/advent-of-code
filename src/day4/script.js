const { part1, part2 } = require("./index.js");
const fs = require("fs");

const call = fs
  .readFileSync("./datasets/day4", "utf8")
  .toString()
  .split("\n")[0]
  .split(",")
  .map(Number);

const gridLines = fs
  .readFileSync("./datasets/day4", "utf8")
  .toString()
  .split("\n")
  .slice(2)
  .map((x) => x.trim())
  .map((x) => x.replace(/\s\s/g, " "));

const rawGrids = [];
let currentGrid = [];

for (const current of gridLines) {
  if (current == "") {
    rawGrids.push(currentGrid);
    currentGrid = [];
  } else {
    currentGrid.push(current);
  }
}

console.log(part1(call, rawGrids));
console.log(part2(call, rawGrids));
