const part1 = (input) => {
  let horizontal = 0;
  let depth = 0;

  input.forEach((current) => {
    const [direction, distance] = current.split(" ");
    const distanceInt = parseInt(distance);

    if (direction == "forward") {
      horizontal += distanceInt;
    }

    if (direction == "down") {
      depth += distanceInt;
    }

    if (direction == "up") {
      depth -= distanceInt;
    }
  });

  return horizontal * depth;
};

const part2 = (input) => {
  let horizontal = 0;
  let depth = 0;
  let aim = 0;

  input.forEach((current) => {
    const [direction, distance] = current.split(" ");
    const distanceInt = parseInt(distance);

    if (direction == "forward") {
      horizontal += distanceInt;
      depth += aim * distanceInt;
    }

    if (direction == "down") {
      aim += distanceInt;
    }

    if (direction == "up") {
      aim -= distanceInt;
    }
  });

  return horizontal * depth;
};

module.exports = { part1, part2 };
