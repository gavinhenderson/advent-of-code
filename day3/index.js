const { begin, answer } = require("../utils/output");
const fs = require("fs");

begin("3");

const file = fs.readFileSync(__dirname + "/input", "utf-8");
const boards = file.split("\n");
const directionsBoardOne = boards[0].split(",");
const directionsBoardTwo = boards[1].split(",");

const listTouchingPoints = directions => {
  let touchedPointsMap = {};
  let currentPos = [0, 0];

  for (const currentDirection of directions) {
    const direction = currentDirection[0];
    const distance = parseInt(currentDirection.slice(1));

    if (direction == "R") {
      for (let i = 0; i < distance; i++) {
        let touchedX = currentPos[0] + i;
        let touchedY = currentPos[1];

        touchedPointsMap[[touchedX, touchedY]] = true;
      }

      let newPosX = currentPos[0] + distance;
      let newPosY = currentPos[1];
      currentPos = [newPosX, newPosY];
    } else if (direction == "D") {
      for (let i = 0; i < distance; i++) {
        let touchedX = currentPos[0];
        let touchedY = currentPos[1] - i;

        touchedPointsMap[[touchedX, touchedY]] = true;
      }

      let newPosX = currentPos[0];
      let newPosY = currentPos[1] - distance;
      currentPos = [newPosX, newPosY];
    } else if (direction == "U") {
      for (let i = 0; i < distance; i++) {
        let touchedX = currentPos[0];
        let touchedY = currentPos[1] + i;

        touchedPointsMap[[touchedX, touchedY]] = true;
      }

      let newPosX = currentPos[0];
      let newPosY = currentPos[1] + distance;
      currentPos = [newPosX, newPosY];
    } else if (direction == "L") {
      for (let i = 0; i < distance; i++) {
        let touchedX = currentPos[0] - i;
        let touchedY = currentPos[1];

        touchedPointsMap[[touchedX, touchedY]] = true;
      }
      let newPosX = currentPos[0] - distance;
      let newPosY = currentPos[1];
      currentPos = [newPosX, newPosY];
    }
  }

  touchedPointsMap[[0, 0]] = false;
  return touchedPointsMap;
};

const boardOneTouchPoints = listTouchingPoints(directionsBoardOne);
const boardTwoTouchPoints = listTouchingPoints(directionsBoardTwo);

const getIntersections = (touchingPointsOne, touchingPointsTwo) => {
  const boardOnePoints = Object.keys(touchingPointsOne);
  let intersections = [];

  for (let currentPoint of boardOnePoints) {
    if (touchingPointsTwo[currentPoint]) {
      intersections.push(currentPoint);
    }
  }

  return intersections;
};

const intersections = getIntersections(
  boardOneTouchPoints,
  boardTwoTouchPoints
);

const getShortestDistance = intersections => {
  const splitIntoArrays = intersections.map(current => {
    return current
      .split(",")
      .map(n => parseInt(n))
      .map(x => Math.abs(x));
  });

  let shortest = splitIntoArrays[0][0] + splitIntoArrays[0][1];

  for (let current of splitIntoArrays) {
    let currentDistance = current[0] + current[1];

    if (currentDistance < shortest) {
      shortest = currentDistance;
    }
  }

  return shortest;
};

const finalAnswer = getShortestDistance(intersections);

answer(finalAnswer, "3");
