const part1 = (input) => {
  const length = input[0].length;
  let gamma = "";
  let epsilon = "";

  for (let i = 0; i < length; i++) {
    let zero = 0;
    let one = 0;
    for (const current of input) {
      if (current[i] === "0") {
        zero++;
      } else {
        one++;
      }
    }

    if (zero > one) {
      gamma += "0";
      epsilon += "1";
    } else {
      gamma += "1";
      epsilon += "0";
    }
  }

  const gammaInt = parseInt(gamma, 2);
  const epsilonInt = parseInt(epsilon, 2);

  return gammaInt * epsilonInt;
};

const oxygen = (input) => {
  let remaining = [...input];
  let currentPosition = 0;

  while (remaining.length > 1) {
    let zero = 0;
    let one = 0;
    for (const current of remaining) {
      if (current[currentPosition] === "0") {
        zero++;
      } else {
        one++;
      }
    }

    if (zero > one) {
      remaining = remaining.filter((x) => x[currentPosition] === "0");
    } else {
      remaining = remaining.filter((x) => x[currentPosition] === "1");
    }

    currentPosition++;
  }

  return parseInt(remaining[0], 2);
};

const co2 = (input) => {
  let remaining = [...input];
  let currentPosition = 0;

  while (remaining.length > 1) {
    let zero = 0;
    let one = 0;
    for (const current of remaining) {
      if (current[currentPosition] === "0") {
        zero++;
      } else {
        one++;
      }
    }

    if (zero > one) {
      remaining = remaining.filter((x) => x[currentPosition] !== "0");
    } else {
      remaining = remaining.filter((x) => x[currentPosition] !== "1");
    }

    currentPosition++;
  }

  return parseInt(remaining[0], 2);
};

const part2 = (input) => {
  return oxygen(input) * co2(input);
};

module.exports = { part1, part2, oxygen, co2 };
