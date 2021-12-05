const part1 = (input) => {
  let pointsVisited = {};

  for (const line of input) {
    const [start, end] = line.split(" -> ");

    const [startXString, startYString] = start.split(",");
    const [endXString, endYString] = end.split(",");

    const startX = parseInt(startXString);
    const startY = parseInt(startYString);
    const endX = parseInt(endXString);
    const endY = parseInt(endYString);

    const length = Math.abs(startX - endX) + Math.abs(startY - endY);

    for (let i = 0; i <= length; i++) {
      let currentPoint = null;
      if (startX == endX) {
        // Vertical
        const addVal = startY > endY ? -i : i;

        currentPoint = `${startX},${startY + addVal}`;
      } else if (startY == endY) {
        // Horizontal
        const addVal = startX > endX ? -i : i;
        currentPoint = `${startX + addVal},${startY}`;
      }

      if (currentPoint) {
        if (pointsVisited[currentPoint]) {
          pointsVisited[currentPoint] = pointsVisited[currentPoint] + 1;
        } else {
          pointsVisited[currentPoint] = 1;
        }
      }
    }
  }

  return Object.values(pointsVisited).filter((x) => x > 1).length;
};

const part2 = (input) => {
  let pointsVisited = {};

  for (const line of input) {
    const [start, end] = line.split(" -> ");

    const [startXString, startYString] = start.split(",");
    const [endXString, endYString] = end.split(",");

    const startX = parseInt(startXString);
    const startY = parseInt(startYString);
    const endX = parseInt(endXString);
    const endY = parseInt(endYString);

    let length =
      startX == endX ? Math.abs(startY - endY) : Math.abs(startX - endX);

    // const length = startX - endX + (startY - endY);

    for (let i = 0; i <= length; i++) {
      let currentPoint = null;
      if (startX == endX) {
        // Vertical
        const addVal = startY > endY ? -i : i;

        currentPoint = `${startX},${startY + addVal}`;
      } else if (startY == endY) {
        // Horizontal
        const addVal = startX > endX ? -i : i;
        currentPoint = `${startX + addVal},${startY}`;
      } else {
        const addXVal = startX > endX ? -i : i;
        const addYVal = startY > endY ? -i : i;

        currentPoint = `${startX + addXVal},${startY + addYVal}`;
      }

      if (currentPoint) {
        if (pointsVisited[currentPoint]) {
          pointsVisited[currentPoint] = pointsVisited[currentPoint] + 1;
        } else {
          pointsVisited[currentPoint] = 1;
        }
      }
    }
  }

  return Object.values(pointsVisited).filter((x) => x > 1).length;
};

module.exports = { part1, part2 };
