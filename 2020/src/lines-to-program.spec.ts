import { linesToProgram } from "./lines-to-program";

it("example one", () => {
  const lines = [
    "nop +0",
    "acc +1",
    "jmp +4",
    "acc +3",
    "jmp -3",
    "acc -99",
    "acc +1",
    "jmp -4",
    "acc +6",
  ];

  const expected = [
    {
      command: "nop",
      offset: 0,
    },
    {
      command: "acc",
      offset: 1,
    },
    {
      command: "jmp",
      offset: 4,
    },
    {
      command: "acc",
      offset: 3,
    },
    {
      command: "jmp",
      offset: -3,
    },
    {
      command: "acc",
      offset: -99,
    },
    {
      command: "acc",
      offset: 1,
    },
    {
      command: "jmp",
      offset: -4,
    },
    {
      command: "acc",
      offset: 6,
    },
  ];

  const result = linesToProgram(lines);

  expect(result).toEqual(expected);
});
