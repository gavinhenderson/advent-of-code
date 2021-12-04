import { updateFor } from "typescript";

export const runProgramUntilLoop = (
  program: Array<ProgramLine>
): ProgramOutput => {
  let currentLine = 0;
  let accumulator = 0;
  let linesVisited = [];

  while (true) {
    if (linesVisited.includes(currentLine)) {
      break;
    }

    if (currentLine >= program.length) {
      break;
    }

    linesVisited.push(currentLine);

    const currentProgramLine = program[currentLine];

    if (currentProgramLine.command === "acc") {
      accumulator += currentProgramLine.offset;
      currentLine += 1;
    } else if (currentProgramLine.command === "jmp") {
      currentLine += currentProgramLine.offset;
    } else if (currentProgramLine.command === "nop") {
      currentLine += 1;
    }
  }

  return {
    accumulator,
    haltLine: currentLine + 1,
  };
};
