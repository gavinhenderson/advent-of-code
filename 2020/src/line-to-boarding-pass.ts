import { convertToObject } from "typescript";

const splitAt = (x, index) => [x.slice(0, index), x.slice(index)];

const convertBinaryString = (input: string, on = "1", off = "0"): number => {
  const replaced = input
    .replace(new RegExp(on, "g"), "1")
    .replace(new RegExp(off, "g"), "0");

  return parseInt(replaced, 2);
};

export const lineToBoardingPass = (line: string): BoardingPass => {
  const [rawRow, rawColumn] = splitAt(line, 7);

  const row = convertBinaryString(rawRow, "B", "F");
  const column = convertBinaryString(rawColumn, "R", "L");
  const id = calculateId(row, column);

  return {
    column,
    row,
    id,
  };
};

export const calculateId = (row: number, column: number): number => {
  return row * 8 + column;
};
