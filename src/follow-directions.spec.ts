import {
  followDirections,
  manhattanDistance,
  manhattanDistanceNew,
  rotate,
} from "./follow-directions";

it("example one", () => {
  const lines = ["F10", "N3", "F7", "R90", "F11", "L90", "F1"];
  const expected: Position = {
    eastWestPos: 18,
    northSouthPos: -8,
  };

  const result = followDirections(lines);

  expect(result).toEqual(expected);
});

it("example two", () => {
  const lines = ["L90", "L90", "L90", "L90", "L90", "F1"];
  const expected: Position = {
    eastWestPos: 0,
    northSouthPos: 1,
  };

  const result = followDirections(lines);

  expect(result).toEqual(expected);
});

it("example three", () => {
  const lines = ["R90", "R90", "R90", "R90", "R90", "F1"];
  const expected: Position = {
    eastWestPos: 0,
    northSouthPos: -1,
  };

  const result = followDirections(lines);

  expect(result).toEqual(expected);
});

it("example three", () => {
  const lines = ["R450", "F1"];
  const expected: Position = {
    eastWestPos: 0,
    northSouthPos: -1,
  };

  const result = followDirections(lines);

  expect(result).toEqual(expected);
});

it("example four", () => {
  const lines = ["N1", "S1", "E1", "W1", "F1"];
  const expected: Position = {
    eastWestPos: 1,
    northSouthPos: 0,
  };

  const result = followDirections(lines);

  expect(result).toEqual(expected);
});

it("example five", () => {
  const lines = ["L90", "F1"];
  const expected: Position = {
    eastWestPos: 0,
    northSouthPos: 1,
  };

  const result = followDirections(lines);

  expect(result).toEqual(expected);
});
it("manhattan distance", () => {
  const lines = ["F10", "N3", "F7", "R90", "F11"];

  const expected = 25;

  const result = manhattanDistance(lines);

  expect(result).toBe(expected);
});

it("manhattan distance 2", () => {
  const lines = ["S1", "W1"];

  const expected = 2;

  const result = manhattanDistance(lines);

  expect(result).toBe(expected);
});

it("manhattan distance new rules", () => {
  const lines = ["F10", "N3", "F7", "R90", "F11"];

  const expected = 286;

  const result = manhattanDistanceNew(lines);

  expect(result).toBe(expected);
});

it("rotate L small", () => {
  const waypoint: Position = {
    northSouthPos: 1,
    eastWestPos: 1,
  };
  const expected: Position = {
    northSouthPos: 1,
    eastWestPos: -1,
  };

  const result = rotate(waypoint, "L", 90);

  expect(result).toEqual(expected);
});

it("full L ", () => {
  const waypoint: Position = {
    northSouthPos: 1,
    eastWestPos: 1,
  };
  const expected: Position = {
    northSouthPos: -1,
    eastWestPos: -1,
  };

  const result = rotate(waypoint, "L", 180);

  expect(result).toEqual(expected);
});

it("rotate R", () => {
  const waypoint: Position = {
    northSouthPos: 4,
    eastWestPos: 10,
  };
  const expected: Position = {
    northSouthPos: -10,
    eastWestPos: 4,
  };

  const result = rotate(waypoint, "R", 90);

  expect(result).toEqual(expected);
});

it("rotate L", () => {
  const waypoint: Position = {
    northSouthPos: -10,
    eastWestPos: 4,
  };
  const expected: Position = {
    northSouthPos: 4,
    eastWestPos: 10,
  };

  const result = rotate(waypoint, "L", 90);

  expect(result).toEqual(expected);
});
