import { fixProgram } from "./fix-program";

it("example one", () => {
  const program = [
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

  const result = fixProgram(program);
  const expected: ProgramOutput = {
    accumulator: 8,
    haltLine: 10,
  };

  expect(result).toEqual(expected);
});
