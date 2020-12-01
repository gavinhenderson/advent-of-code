const { begin, answer } = require("../utils/output");
const fs = require("fs");

begin("3-extra");

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

const getPointsAsArray = directions => {
  let touchedPoints = [];
  let currentPos = [0, 0];

  for (const currentDirection of directions) {
    const direction = currentDirection[0];
    const distance = parseInt(currentDirection.slice(1));

    if (direction == "R") {
      for (let i = 0; i < distance; i++) {
        let touchedX = currentPos[0] + i;
        let touchedY = currentPos[1];

        touchedPoints.push([touchedX, touchedY]);
      }

      let newPosX = currentPos[0] + distance;
      let newPosY = currentPos[1];
      currentPos = [newPosX, newPosY];
    } else if (direction == "D") {
      for (let i = 0; i < distance; i++) {
        let touchedX = currentPos[0];
        let touchedY = currentPos[1] - i;

        touchedPoints.push([touchedX, touchedY]);
      }

      let newPosX = currentPos[0];
      let newPosY = currentPos[1] - distance;
      currentPos = [newPosX, newPosY];
    } else if (direction == "U") {
      for (let i = 0; i < distance; i++) {
        let touchedX = currentPos[0];
        let touchedY = currentPos[1] + i;

        touchedPoints.push([touchedX, touchedY]);
      }

      let newPosX = currentPos[0];
      let newPosY = currentPos[1] + distance;
      currentPos = [newPosX, newPosY];
    } else if (direction == "L") {
      for (let i = 0; i < distance; i++) {
        let touchedX = currentPos[0] - i;
        let touchedY = currentPos[1];

        touchedPoints.push([touchedX, touchedY]);
      }
      let newPosX = currentPos[0] - distance;
      let newPosY = currentPos[1];
      currentPos = [newPosX, newPosY];
    }
  }

  return touchedPoints;
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

const boardOnePointsAsArray = getPointsAsArray(directionsBoardOne);
const boardTwoPointsAsArray = getPointsAsArray(directionsBoardTwo);

const stepsToPoint = (point, boardOnePoints, boardTwoPoints) => {
  const x = Math.abs(parseInt(point.split(",")[0]));
  const y = Math.abs(parseInt(point.split(",")[1]));

  const distanceOne = boardOnePoints.indexOf([x, y]);
  const pointAsArr = point.split(",").map(x => parseInt(x));
  // .map(y => Math.abs(y));

  let boardOneDistance = 0;
  for (const [index, currentPoint] of boardOnePoints.entries()) {
    if (currentPoint[0] == pointAsArr[0] && currentPoint[1] == pointAsArr[1]) {
      boardOneDistance = index;

      break;
    }
  }

  let boardTwoDistance = 0;
  for (const [index, currentPoint] of boardTwoPoints.entries()) {
    if (currentPoint[0] == pointAsArr[0] && currentPoint[1] == pointAsArr[1]) {
      boardTwoDistance = index;
      break;
    }
  }

  return boardOneDistance + boardTwoDistance;
};

let smallest = stepsToPoint(
  intersections[0],
  boardOnePointsAsArray,
  boardTwoPointsAsArray
);
let smallestIndex = 0;

intersections.forEach((current, index) => {
  const currentDist = stepsToPoint(
    current,
    boardOnePointsAsArray,
    boardTwoPointsAsArray
  );

  if (currentDist < smallestIndex) {
    smallest = currentDist;
    smallestIndex = index;
  }
});

answer(smallest, "3-extra");
