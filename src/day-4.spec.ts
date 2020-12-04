import { isPassportFullyValid } from "./is-passport-valid";
import { linesToPassportEntries } from "./lines-to-passport-entries";

it("example invalid password 1", () => {
  const lines = [
    "eyr:1972 cid:100",
    "hcl:#18171d ecl:amb hgt:170 pid:186cm iyr:2018 byr:1926",
  ];

  const passport = linesToPassportEntries(lines)[0];

  const isValid = isPassportFullyValid(passport, [
    "ecl",
    "pid",
    "eyr",
    "hcl",
    "byr",
    "iyr",
    "hgt",
  ]);

  expect(isValid).toBeFalsy();
});

it("example invalid password 2", () => {
  const lines = [
    "iyr:2019",
    "hcl:#602927 eyr:1967 hgt:170cm",
    "ecl:grn pid:012533040 byr:1946",
  ];

  const passport = linesToPassportEntries(lines)[0];

  const isValid = isPassportFullyValid(passport, [
    "ecl",
    "pid",
    "eyr",
    "hcl",
    "byr",
    "iyr",
    "hgt",
  ]);

  expect(isValid).toBeFalsy();
});

it("example invalid password 3", () => {
  const lines = [
    "hcl:dab227 iyr:2012",
    "ecl:brn hgt:182cm pid:021572410 eyr:2020 byr:1992 cid:277",
  ];

  const passport = linesToPassportEntries(lines)[0];

  const isValid = isPassportFullyValid(passport, [
    "ecl",
    "pid",
    "eyr",
    "hcl",
    "byr",
    "iyr",
    "hgt",
  ]);

  expect(isValid).toBeFalsy();
});

it("example invalid password 4", () => {
  const lines = [
    "hgt:59cm ecl:zzz",
    "eyr:2038 hcl:74454a iyr:2023",
    "pid:3556412378 byr:2007",
  ];

  const passport = linesToPassportEntries(lines)[0];

  const isValid = isPassportFullyValid(passport, [
    "ecl",
    "pid",
    "eyr",
    "hcl",
    "byr",
    "iyr",
    "hgt",
  ]);

  expect(isValid).toBeFalsy();
});

it("example valid password 1", () => {
  const lines = [
    "pid:087499704 hgt:74in ecl:grn iyr:2012 eyr:2030 byr:1980",
    "hcl:#623a2f",
  ];

  const passport = linesToPassportEntries(lines)[0];

  const isValid = isPassportFullyValid(passport, [
    "ecl",
    "pid",
    "eyr",
    "hcl",
    "byr",
    "iyr",
    "hgt",
  ]);

  expect(isValid).toBeTruthy();
});

it("example valid password 2", () => {
  const lines = [
    "eyr:2029 ecl:blu cid:129 byr:1989",
    "iyr:2014 pid:896056539 hcl:#a97842 hgt:165cm",
  ];

  const passport = linesToPassportEntries(lines)[0];

  const isValid = isPassportFullyValid(passport, [
    "ecl",
    "pid",
    "eyr",
    "hcl",
    "byr",
    "iyr",
    "hgt",
  ]);

  expect(isValid).toBeTruthy();
});

it("example valid password 3", () => {
  const lines = [
    "hcl:#888785",
    "hgt:164cm byr:2001 iyr:2015 cid:88",
    "pid:545766238 ecl:hzl",
    "eyr:2022",
  ];

  const passport = linesToPassportEntries(lines)[0];

  const isValid = isPassportFullyValid(passport, [
    "ecl",
    "pid",
    "eyr",
    "hcl",
    "byr",
    "iyr",
    "hgt",
  ]);

  expect(isValid).toBeTruthy();
});

it("example valid password 4", () => {
  const lines = [
    "iyr:2010 hgt:158cm hcl:#b6652a ecl:blu byr:1944 eyr:2021 pid:093154719",
  ];

  const passport = linesToPassportEntries(lines)[0];

  const isValid = isPassportFullyValid(passport, [
    "ecl",
    "pid",
    "eyr",
    "hcl",
    "byr",
    "iyr",
    "hgt",
  ]);

  expect(isValid).toBeTruthy();
});
