import { isPassportFullyValid, isPassportValid } from "./is-passport-valid";

describe("without validation", () => {
  it("valid when all fields are present", () => {
    const passport: Passport = {
      ecl: "gry",
      pid: "860033327",
      eyr: "2020",
      hcl: "#fffffd",
      byr: "1937",
      iyr: "2017",
      cid: "147",
      hgt: "183cm",
    };

    const isValid = isPassportValid(passport, [
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

  it("missing required field", () => {
    const passport: Passport = {
      iyr: "2013",
      ecl: "amb",
      cid: "350",
      eyr: "2023",
      pid: "028048884",
      hcl: "#cfa07d",
      byr: "1929",
    };

    const isValid = isPassportValid(passport, [
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

  it("missing non required field", () => {
    const passport: Passport = {
      hcl: "#ae17e1",
      iyr: "2013",
      eyr: "2024",
      ecl: "brn",
      pid: "760753108",
      byr: "1931",
      hgt: "179cm",
    };

    const isValid = isPassportValid(passport, [
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

  it("missing non required and required field", () => {
    const passport: Passport = {
      hcl: "#cfa07d",
      eyr: "2025",
      pid: "16655964",
      iyr: "2011",
      ecl: "brn",
      hgt: "59in",
    };

    const isValid = isPassportValid(passport, [
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
});

const FULLY_VALID_PASSPORT: Passport = {
  ecl: "gry",
  pid: "860033327",
  eyr: "2025",
  hcl: "#fffffd",
  byr: "1950",
  iyr: "2015",
  cid: "147",
  hgt: "183cm",
};

describe("with validation", () => {
  it("fully valid passport is valid", () => {
    const isValid = isPassportFullyValid(FULLY_VALID_PASSPORT, [
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

  it("invalid ecl", () => {
    const passport = {
      ...FULLY_VALID_PASSPORT,
      ecl: "GREEN",
    };
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

  it("almost valid ecl", () => {
    const passport = {
      ...FULLY_VALID_PASSPORT,
      ecl: "zzz",
    };
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

  it("birthYear to low", () => {
    const passport = {
      ...FULLY_VALID_PASSPORT,
      byr: "1200",
    };
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

  it("birthYear to on the line", () => {
    const passport = {
      ...FULLY_VALID_PASSPORT,
      byr: "1920",
    };
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

  it("birthYear too high", () => {
    const passport = {
      ...FULLY_VALID_PASSPORT,
      byr: "2003",
    };
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

  it("birthYear on the top line", () => {
    const passport = {
      ...FULLY_VALID_PASSPORT,
      byr: "2002",
    };
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

  it("issueYear on the top line", () => {
    const passport = {
      ...FULLY_VALID_PASSPORT,
      iyr: "2020",
    };
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

  it("issueYear on the bottom line", () => {
    const passport = {
      ...FULLY_VALID_PASSPORT,
      iyr: "2010",
    };
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

  it("issueYear not a number", () => {
    const passport = {
      ...FULLY_VALID_PASSPORT,
      iyr: "a",
    };
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

  it("issueYear to low", () => {
    const passport = {
      ...FULLY_VALID_PASSPORT,
      iyr: "2009",
    };
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
  it("issueYear to high", () => {
    const passport = {
      ...FULLY_VALID_PASSPORT,
      iyr: "2021",
    };
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

  it("expiration year on the bottom line", () => {
    const passport = {
      ...FULLY_VALID_PASSPORT,
      eyr: "2020",
    };
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

  it("expiration year on the top line", () => {
    const passport = {
      ...FULLY_VALID_PASSPORT,
      eyr: "2030",
    };
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

  it("expiration year to low", () => {
    const passport = {
      ...FULLY_VALID_PASSPORT,
      eyr: "2010",
    };
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

  it("expiration year to high", () => {
    const passport = {
      ...FULLY_VALID_PASSPORT,
      eyr: "2050",
    };
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

  it("pid not a number", () => {
    const passport = {
      ...FULLY_VALID_PASSPORT,
      pid: "asd",
    };
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

  it("to long pid", () => {
    const passport = {
      ...FULLY_VALID_PASSPORT,
      pid: "0123456789",
    };
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

  it("valid pid with leading zeros", () => {
    const passport = {
      ...FULLY_VALID_PASSPORT,
      pid: "000000001",
    };
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

  it("pid not long enough", () => {
    const passport = {
      ...FULLY_VALID_PASSPORT,
      pid: "0",
    };
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

  it("too many hashes in hcl", () => {
    const passport = {
      ...FULLY_VALID_PASSPORT,
      hcl: "##a123ab",
    };
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

  it("letter not in hash", () => {
    const passport = {
      ...FULLY_VALID_PASSPORT,
      hcl: "#123abz",
    };
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

  it("still too many hashes in hcl", () => {
    const passport = {
      ...FULLY_VALID_PASSPORT,
      hcl: "##a123a",
    };
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

  it("invalid hcl", () => {
    const passport = {
      ...FULLY_VALID_PASSPORT,
      hcl: "a123abc",
    };
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

  it("height without unit", () => {
    const passport = {
      ...FULLY_VALID_PASSPORT,
      hgt: "asdf",
    };
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

  it("cm height to big", () => {
    const passport = {
      ...FULLY_VALID_PASSPORT,
      hgt: "194cm",
    };
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

  it("cm on the bottom line", () => {
    const passport = {
      ...FULLY_VALID_PASSPORT,
      hgt: "150cm",
    };
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

  it("cm on the top line", () => {
    const passport = {
      ...FULLY_VALID_PASSPORT,
      hgt: "193cm",
    };
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

  it("cm height to small", () => {
    const passport = {
      ...FULLY_VALID_PASSPORT,
      hgt: "149cm",
    };
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

  it("in height to to big", () => {
    const passport = {
      ...FULLY_VALID_PASSPORT,
      hgt: "77in",
    };
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

  it("in height to to small", () => {
    const passport = {
      ...FULLY_VALID_PASSPORT,
      hgt: "50in",
    };
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

  it("on the top line inches", () => {
    const passport = {
      ...FULLY_VALID_PASSPORT,
      hgt: "76in",
    };
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

  it("on the bottom line inches", () => {
    const passport = {
      ...FULLY_VALID_PASSPORT,
      hgt: "59in",
    };
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
});
