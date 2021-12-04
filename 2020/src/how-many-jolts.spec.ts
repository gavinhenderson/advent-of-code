import { howManyJolts } from "./how-many-jolts";

it("larger example, 1 gap", () => {
  const numbers = [
    28,
    33,
    18,
    42,
    31,
    14,
    46,
    20,
    48,
    47,
    24,
    23,
    49,
    45,
    19,
    38,
    39,
    11,
    1,
    32,
    25,
    35,
    8,
    17,
    7,
    9,
    4,
    2,
    34,
    10,
    3,
  ];

  const result = howManyJolts(numbers, 1);

  expect(result).toBe(22);
});

it("larger example, 3 gap", () => {
  const numbers = [
    28,
    33,
    18,
    42,
    31,
    14,
    46,
    20,
    48,
    47,
    24,
    23,
    49,
    45,
    19,
    38,
    39,
    11,
    1,
    32,
    25,
    35,
    8,
    17,
    7,
    9,
    4,
    2,
    34,
    10,
    3,
  ];

  const result = howManyJolts(numbers, 3);

  expect(result).toBe(10);
});
