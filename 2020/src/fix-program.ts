import { runProgramUntilLoop } from "./run-program-until-loop";

export const fixProgram = (program: Array<ProgramLine>): ProgramOutput => {
  for (let i = 0; i < program.length; i++) {
    const programLine = program[i];
    if (programLine.command === "acc") {
      continue;
    }

    const programCopy: Array<ProgramLine> = JSON.parse(JSON.stringify(program));

    programCopy[i] = {
      command: programLine.command === "jmp" ? "nop" : "jmp",
      offset: programLine.offset,
    };

    const programRunResult = runProgramUntilLoop(programCopy);

    if (programRunResult.haltLine > program.length) return programRunResult;
  }

  return {
    accumulator: 0,
    haltLine: 0,
  };
};
