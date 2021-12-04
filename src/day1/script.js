const { part2, part1 } = require("./index.js");
const fs = require("fs");

const input = fs
  .readFileSync("./datasets/day1", "utf8")
  .toString()
  .split("\n")
  .map(Number);

console.log(part1(input));
console.log(part2(input));
