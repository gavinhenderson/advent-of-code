const { part1, part2 } = require("./index.js");

it("works with the example given", () => {
  const input = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

  const result = part1(input);

  expect(result).toEqual(7);
});

it("part2", () => {
  const input = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
  const result = part2(input);

  expect(result).toEqual(5);
});
