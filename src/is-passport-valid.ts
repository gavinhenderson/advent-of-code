import "./types";

export const isPassportValid = (
  passport: Passport,
  required: Array<string>
): boolean => {
  let valid = true;

  for (const requiredField of required) {
    if (passport[requiredField] == undefined) {
      valid = false;
    }
  }

  return valid;
};

export const isPassportFullyValid = (
  passport: Passport,
  required: Array<string>
): boolean => {
  const doesHaveRequiredFields = isPassportValid(passport, required);
  if (!doesHaveRequiredFields) return false;

  const validEcls = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];
  if (!validEcls.includes(passport.ecl)) return false;

  const birthYear = parseInt(passport.byr);
  if (isNaN(birthYear)) return false;
  if (birthYear < 1920 || birthYear > 2002) return false;

  const issueYear = parseInt(passport.iyr);
  if (isNaN(issueYear)) return false;
  if (issueYear < 2010 || issueYear > 2020) return false;

  const expirationYear = parseInt(passport.eyr);
  if (isNaN(expirationYear)) return false;
  if (expirationYear < 2020 || expirationYear > 2030) return false;

  const passportID = parseInt(passport.pid);
  if (isNaN(passportID)) return false;
  if (passport.pid.length !== 9) return false;

  if (passport.hcl.length != 7) return false;
  if (!/#[0-9A-Fa-f]{6}/g.test(passport.hcl)) return false;

  const height = passport.hgt;

  if (height.includes("cm")) {
    const [heightString] = height.split("cm");
    const heightNumber = parseInt(heightString);

    if (isNaN(heightNumber)) return false;
    if (heightNumber < 150 || heightNumber > 193) return false;
  } else if (height.includes("in")) {
    const [heightString] = height.split("in");
    const heightNumber = parseInt(heightString);

    if (isNaN(heightNumber)) return false;
    if (heightNumber < 59 || heightNumber > 76) return false;
  } else {
    return false;
  }

  return true;
};
