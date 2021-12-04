const { part1, part2 } = require(".");

it("part 1 example", () => {
  const input = [
    "forward 5",
    "down 5",
    "forward 8",
    "up 3",
    "down 8",
    "forward 2",
  ];
  const result = part1(input);
  expect(result).toBe(150);
});

it("part 2 example", () => {
  const input = [
    "forward 5",
    "down 5",
    "forward 8",
    "up 3",
    "down 8",
    "forward 2",
  ];
  const result = part2(input);
  expect(result).toBe(900);
});
