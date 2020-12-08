import { getLinesFromFile } from "./read-file";
import path from "path";
import "./types";
import { linesToProgram } from "./lines-to-program";
import { runProgramUntilLoop } from "./run-program-until-loop";
import { fixProgram } from "./fix-program";

const lines = getLinesFromFile(path.join(__dirname, "./datasets/day-8.txt"));
const program = linesToProgram(lines);
const runningResult = runProgramUntilLoop(program);

console.log(runningResult);

const fixResult = fixProgram(program);

console.log(fixResult);
