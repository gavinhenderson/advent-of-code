const { begin, answer } = require("../utils/output");
const { readNewLineSeperatedFile } = require("../utils/readfile");

begin("2-extra");

let sourceTape = readNewLineSeperatedFile(__dirname + "/input", ",");
// let tape = [2, 4, 4, 5, 99, 0];

const getAnswerFromTape = tape => {
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

  return tape[0];
};

const target = 19690720;

const MAX = 100;

const getInputs = () => {
  for (let i = 0; i < MAX; i++) {
    for (let j = 0; j < MAX; j++) {
      const tempTape = [...sourceTape];
      tempTape[1] = i;
      tempTape[2] = j;
      const answer = getAnswerFromTape(tempTape);

      if (answer === target) return [i, j];
    }
  }
};

const inputs = getInputs();
const finalAnswer = 100 * inputs[0] + inputs[1];

answer(finalAnswer, "2-extra");
