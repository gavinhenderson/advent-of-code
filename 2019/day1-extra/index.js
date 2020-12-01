const { begin, answer } = require("../utils/output");
const { readNewLineSeperatedFile } = require("../utils/readfile");

begin("1-extra");

const numbers = readNewLineSeperatedFile(__dirname + "/input");

const calculateFuelNeeded = (n, total) => {
  const current = Math.floor(n / 3) - 2;
  if (current <= 0) return total;

  return calculateFuelNeeded(current, total + current);
};

const fuelNeeded = numbers.map(n => calculateFuelNeeded(n, 0));
const total = fuelNeeded.reduce((total, n) => total + n, 0);

answer(total, "1-extra");
