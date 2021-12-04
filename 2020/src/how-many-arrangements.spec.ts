import { howManyArrangements } from "./how-many-arrangements";

it.only("small example", () => {
  const numbers = [16, 10, 15, 5, 1, 11, 7, 19, 6, 12, 4];

  const result = howManyArrangements(numbers);

  expect(result).toBe(8);
});

it("bigger example", () => {
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

  const result = howManyArrangements(numbers);

  expect(result).toBe(19208);
});
