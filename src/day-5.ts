import { getLinesFromFile } from "./read-file";
import path from "path";
import { lineToBoardingPass } from "./line-to-boarding-pass";
import "./types";

const lines = getLinesFromFile(path.join(__dirname, "./datasets/day-5.txt"));
const boardingPasses = lines.map((line) => lineToBoardingPass(line));

const ids = boardingPasses.map((pass) => pass.id);

const highestId = Math.max(...ids);

const planeByRow = {};

for (const pass of boardingPasses) {
  if (planeByRow[pass.row]) {
    planeByRow[pass.row].push(pass);
  } else {
    planeByRow[pass.row] = [pass];
  }
}

const notFullRows = {};

for (const row in planeByRow) {
  if (planeByRow[row].length != 8) {
    notFullRows[row] = planeByRow[row];
  }
}

console.log(JSON.stringify(notFullRows[84], null, 2));

console.log({ highestId, notFullRows });
