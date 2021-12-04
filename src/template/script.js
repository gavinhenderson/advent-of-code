const { part1 } = require("./index.js");
const fs = require("fs");

const input = fs.readFileSync("./datasets/day2", "utf8").toString().split("\n");

console.log(part1(input));
