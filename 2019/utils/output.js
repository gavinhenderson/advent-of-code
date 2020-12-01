const begin = dayNumber => {
  console.time(`day-${dayNumber}`);
  console.log("=======================================");
  console.log(`Begining solution for day ${dayNumber}`);
  console.log("=======================================");
};

const answer = (finalAnswer, dayNumber) => {
  console.log("");
  console.log(`The final answer is: ${finalAnswer}`);
  console.log("");
  console.timeEnd(`day-${dayNumber}`);
};

module.exports = { begin, answer };
