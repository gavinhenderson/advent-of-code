import { idText } from "typescript";

export const followDirections = (lines: Array<string>): Position => {
  let currentDirection = "E";

  let directionTree = {
    E: {
      R: "S",
      L: "N",
    },
    W: {
      R: "N",
      L: "S",
    },
    S: {
      R: "W",
      L: "E",
    },
    N: {
      R: "E",
      L: "W",
    },
  };

  let currentPos: Position = {
    eastWestPos: 0,
    northSouthPos: 0,
  };

  for (const instruction of lines) {
    const command = instruction.substr(0, 1);
    const moves = parseInt(instruction.substr(1, instruction.length));

    if (["N", "S", "E", "W"].includes(command)) {
      currentPos = calculatePosition(currentPos, command, moves);
    } else if (["R", "L"].includes(command)) {
      const shiftAmount = moves / 90;

      for (let i = 0; i < shiftAmount; i++) {
        currentDirection = directionTree[currentDirection][command];
      }
    } else {
      currentPos = calculatePosition(currentPos, currentDirection, moves);
    }
  }

  return currentPos;
};

const calculatePosition = (
  position: Position,
  direction: string,
  moves: number
): Position => {
  const { northSouthPos, eastWestPos } = position;

  if (direction == "N") {
    return {
      northSouthPos: northSouthPos + moves,
      eastWestPos,
    };
  } else if (direction == "S") {
    return {
      northSouthPos: northSouthPos - moves,
      eastWestPos,
    };
  } else if (direction == "E") {
    return {
      northSouthPos,
      eastWestPos: eastWestPos + moves,
    };
  } else if (direction == "W") {
    return {
      northSouthPos,
      eastWestPos: eastWestPos - moves,
    };
  }

  console.log("eh wtf", direction);
};

export const manhattanDistance = (lines: Array<string>): number => {
  const position = followDirections(lines);
  return Math.abs(position.northSouthPos) + Math.abs(position.eastWestPos);
};

export const manhattanDistanceNew = (lines: Array<string>): number => {
  let waypointPosition: Position = {
    northSouthPos: 1,
    eastWestPos: 10,
  };
  let boatPosition: Position = {
    northSouthPos: 0,
    eastWestPos: 0,
  };

  for (const instruction of lines) {
    const command = instruction.substr(0, 1);
    const moves = parseInt(instruction.substr(1, instruction.length));

    if (command == "F") {
      const multipliedWaypoint: Position = {
        northSouthPos: waypointPosition.northSouthPos * moves,
        eastWestPos: waypointPosition.eastWestPos * moves,
      };

      boatPosition = {
        northSouthPos:
          boatPosition.northSouthPos + multipliedWaypoint.northSouthPos,
        eastWestPos: boatPosition.eastWestPos + multipliedWaypoint.eastWestPos,
      };
    } else if (["N", "S", "E", "W"].includes(command)) {
      waypointPosition = calculatePosition(waypointPosition, command, moves);
    } else {
      waypointPosition = rotate(waypointPosition, command, moves);
    }
  }

  return (
    Math.abs(boatPosition.northSouthPos) + Math.abs(boatPosition.eastWestPos)
  );
};

export const rotate = (
  waypoint: Position,
  direction: string,
  moves: number
): Position => {
  if (moves == 0) {
    return waypoint;
  }

  let radians = 0;

  if (direction == "L") {
    radians = (Math.PI / 180) * 90;
  } else {
    radians = (Math.PI / -180) * 90;
  }

  let temp = waypoint;

  for (let i = 0; i < moves / 90; i++) {
    const cos = Math.cos(radians);
    const sin = Math.sin(radians);
    const cy = 0;
    const cx = 0;
    const y = temp.northSouthPos;
    const x = temp.eastWestPos;

    const nx = cos * (x - cx) + sin * (y - cy) + cx;
    const ny = cos * (y - cy) - sin * (x - cx) + cy;

    temp = {
      northSouthPos: Math.round(ny) * -1,
      eastWestPos: Math.round(nx) * -1,
    };
  }

  return temp;
};
