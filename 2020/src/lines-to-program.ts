export const linesToProgram = (lines: Array<string>): Array<ProgramLine> => {
  return lines.map((line) => {
    const [command, number] = line.replace("+", "").split(" ");

    return {
      command,
      offset: parseInt(number),
    };
  });
};
