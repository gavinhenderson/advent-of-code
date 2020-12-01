const { begin, answer } = require("../utils/output");
const { readNewLineSeperatedFile } = require("../utils/readfile");

begin("2");

// Could be a const but we gonna mutate the hell out of it
let tape = readNewLineSeperatedFile(__dirname + "/input", ",");
// let tape = [2, 4, 4, 5, 99, 0];

let running = true;
let tapeHead = 0;

while (running) {
  const opcode = tape[tapeHead];
  const operandOnePos = tape[tapeHead + 1];
  const operandOne = tape[operandOnePos];
  const operandTwoPos = tape[tapeHead + 2];
  const operandTwo = tape[operandTwoPos];
  const resultPos = tape[tapeHead + 3];

  if (opcode === 1) {
    // ADD
    tape[resultPos] = operandOne + operandTwo;
  } else if (opcode === 2) {
    // MULT
    tape[resultPos] = operandOne * operandTwo;
  } else if (opcode === 99) {
    // HALT
    running = false;
    break;
  } else {
    // This shouldnt happen
    throw new Error("SOMETHING HAS GONE WRONG");
  }

  tapeHead += 4;
}

answer(tape[0], "2");
