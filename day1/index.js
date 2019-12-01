const { begin, answer } = require("../utils/output");
const { readNewLineSeperatedFile } = require("../utils/readfile");

begin("1");

const numbers = readNewLineSeperatedFile(__dirname + "/input");

const fuelNeeded = numbers.map(n => Math.floor(n / 3) - 2);
const total = fuelNeeded.reduce((total, n) => total + n, 0);

answer(total, "1");
