import { getLinesFromFile } from "./read-file";
import path from "path";
import { linesToPassportEntries } from "./lines-to-passport-entries";
import "./types";
import { isPassportFullyValid, isPassportValid } from "./is-passport-valid";

const lines = getLinesFromFile(path.join(__dirname, "./datasets/day-4.txt"));
const passports = linesToPassportEntries(lines);

const requireFields = ["ecl", "pid", "eyr", "hcl", "byr", "iyr", "hgt"];
const validPassports = passports.filter((passport) =>
  isPassportValid(passport, requireFields)
);

const fullyValidPassports = passports.filter((passport) =>
  isPassportFullyValid(passport, requireFields)
);

console.log({
  passports: passports.length,
  validPassports: validPassports.length,
  fullyValidPassports: fullyValidPassports.length,
});
