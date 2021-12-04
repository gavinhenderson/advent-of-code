const part1 = (numbers) => {
  return numbers.filter((current, index) => {
    if (index === 0) return false;

    return current > numbers[index - 1];
  }).length;
};

const part2 = (input) => {
  const windows = [];

  input.forEach((current, index) => {
    const next = input[index + 1];
    const nextNext = input[index + 2];

    if (next && nextNext) {
      windows.push(current + next + nextNext);
    }
  });

  return part1(windows);
};

module.exports = { part1, part2 };
