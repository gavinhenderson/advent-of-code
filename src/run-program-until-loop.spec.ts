import { runProgramUntilLoop } from "./run-program-until-loop";

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

  const expected = {
    accumulator: 5,
    haltLine: 2,
  };

  const result = runProgramUntilLoop(program);

  expect(result).toEqual(expected);
});
