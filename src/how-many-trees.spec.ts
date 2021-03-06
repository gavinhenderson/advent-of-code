import { howManyTrees } from "./how-many-trees";

it("", () => {
  const map = [
    [".", ".", "#", "#", ".", ".", ".", ".", ".", ".", "."],
    ["#", ".", ".", ".", "#", ".", ".", ".", "#", ".", "."],
    [".", "#", ".", ".", ".", ".", "#", ".", ".", "#", "."],
    [".", ".", "#", ".", "#", ".", ".", ".", "#", ".", "#"],
    [".", "#", ".", ".", ".", "#", "#", ".", ".", "#", "."],
    [".", ".", "#", ".", "#", "#", ".", ".", ".", ".", "."],
    [".", "#", ".", "#", ".", "#", ".", ".", ".", ".", "#"],
    [".", "#", ".", ".", ".", ".", ".", ".", ".", ".", "#"],
    ["#", ".", "#", "#", ".", ".", ".", "#", ".", ".", "."],
    ["#", ".", ".", ".", "#", "#", ".", ".", ".", ".", "#"],
    [".", "#", ".", ".", "#", ".", ".", ".", "#", ".", "#"],
  ];

  const numberOfTrees = 7;

  const result = howManyTrees(map, 3, 1);

  expect(result).toBe(numberOfTrees);
});
