const { part1, part2 } = require("./index.js");
const fs = require("fs");

const input = fs.readFileSync("./datasets/day3", "utf8").toString().split("\n");

console.log(part1(input));
console.log(part2(input));
