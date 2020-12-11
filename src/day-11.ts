import { getLinesFromFile } from "./read-file";
import path from "path";
import "./types";
import { howManyJolts } from "./how-many-jolts";
import { howManyArrangements } from "./how-many-arrangements";
import { seatLayout, seatLayoutNewRules } from "./seat-layout";

const lines = getLinesFromFile(path.join(__dirname, "./datasets/day-11.txt"));

let counter = 0;
let currentMachine = lines;
let nextMachine = null;

while (true) {
  nextMachine = seatLayout(currentMachine);

  if (JSON.stringify(nextMachine) == JSON.stringify(currentMachine)) {
    break;
  }

  currentMachine = nextMachine;
  counter++;
}

const numberOfOccupiedSeats = nextMachine
  .flatMap((line) => line.split(""))
  .filter((seat) => seat == "#").length;

console.log({ counter, numberOfOccupiedSeats });

counter = 0;
currentMachine = lines;
nextMachine = null;

while (true) {
  nextMachine = seatLayoutNewRules(currentMachine);

  if (JSON.stringify(nextMachine) == JSON.stringify(currentMachine)) {
    break;
  }

  currentMachine = nextMachine;
  counter++;
}

const numberOfOccupiedSeatsNewRules = nextMachine
  .flatMap((line) => line.split(""))
  .filter((seat) => seat == "#").length;

console.log({ counter, numberOfOccupiedSeatsNewRules });
