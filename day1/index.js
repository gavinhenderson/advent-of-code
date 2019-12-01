const { begin, answer } = require("../utils/output");

begin("1");

const fs = require("fs");
const path = require("path");

const file = fs.readFileSync(path.join(__dirname + "/input"), "utf-8");
const numbers = file.split("\n").map(n => parseInt(n));
const fuelNeeded = numbers.map(n => Math.floor(n / 3) - 2);
const total = fuelNeeded.reduce((total, n) => total + n, 0);

answer(total, "1");
