export const linesToPassportEntries = (
  lines: Array<string>
): Array<Passport> => {
  let passportSections = [];
  let currentPassport = [];

  for (const line of lines) {
    if (line === "") {
      passportSections.push(currentPassport);
      currentPassport = [];
      continue;
    }

    currentPassport.push(line);
  }
  passportSections.push(currentPassport);

  return passportSections.map(passportSectionToPassport);
};

const passportSectionToPassport = (section: Array<string>): Passport => {
  const keyValues = section.flatMap((line) => line.split(" "));

  let passport = {};

  for (const kvPair of keyValues) {
    const [key, value] = kvPair.split(":");

    passport[key] = value.replace(" ", "");
  }

  return passport;
};
