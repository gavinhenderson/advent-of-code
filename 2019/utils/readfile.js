const fs = require("fs");

const readNewLineSeperatedFile = (filepath, delimiter = "\n") => {
  const file = fs.readFileSync(filepath, "utf-8");
  const numbers = file.split(delimiter).map(n => parseInt(n));

  return numbers;
};

module.exports = { readNewLineSeperatedFile };
