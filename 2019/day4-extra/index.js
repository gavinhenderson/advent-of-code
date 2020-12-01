const { begin, answer } = require("../utils/output");

// Things we know 6 digits
// input is a range
// at least two numbers are adjacent
//

begin("4");

const doesIncludeDouble = number => {
  let arrayOfAdjacent = [];
  let current = [];
  let prev = "-1";

  for (let i = 0; i < number.length; i++) {
    if (i != 0 && number[i] != prev) {
      arrayOfAdjacent.push(current);
      current = [];
    }
    current.push(number[i]);

    prev = number[i];
  }

  arrayOfAdjacent.push(current);

  // console.log(arrayOfAdjacent);
  for (let i = 0; i < arrayOfAdjacent.length; i++) {
    if (arrayOfAdjacent[i].length == 2) return true;
  }

  return false;
};

const doesMeetCriteria = number => {
  const numberAsString = number.toString();
  if (numberAsString.length != 6) return false;
  let prev = -1;

  for (let i = 0; i < numberAsString.length; i++) {
    const digit = parseInt(numberAsString[i]);

    if (prev !== -1 && prev > digit) {
      return false;
    }

    prev = digit;
  }

  if (!doesIncludeDouble(number.toString())) return false;

  return true;
};

console.log(doesMeetCriteria(122233));
console.log(doesMeetCriteria(123444));
console.log(doesMeetCriteria(111122));

let counter = 0;

for (let i = 402328; i <= 864247; i++) {
  if (doesMeetCriteria(i)) counter++;
}

answer(counter, "4");
