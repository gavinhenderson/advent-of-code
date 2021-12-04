export const seatLayout = (layout: Array<string>): Array<string> => {
  const layoutSplit = layout.map((row) => row.split(""));
  let newLayout = JSON.parse(JSON.stringify(layoutSplit));

  for (let row = 0; row < layoutSplit.length; row++) {
    for (let column = 0; column < layoutSplit[0].length; column++) {
      const currentSquare = layoutSplit[row][column];
      let allImmediatelyAdjecentSeats = [
        safelyGetSeat(layoutSplit, row - 1, column),
        safelyGetSeat(layoutSplit, row - 1, column - 1),
        safelyGetSeat(layoutSplit, row, column - 1),
        safelyGetSeat(layoutSplit, row + 1, column - 1),
        safelyGetSeat(layoutSplit, row + 1, column),
        safelyGetSeat(layoutSplit, row + 1, column + 1),
        safelyGetSeat(layoutSplit, row, column + 1),
        safelyGetSeat(layoutSplit, row - 1, column + 1),
      ];

      // console.log(row, column, allImmediatelyAdjecentSeats);

      const numberOfAdjecentOccupiedSeats = allImmediatelyAdjecentSeats.filter(
        (seat) => seat == "#"
      ).length;

      if (currentSquare == "L" && numberOfAdjecentOccupiedSeats == 0) {
        newLayout[row][column] = "#";
      }

      if (currentSquare == "#" && numberOfAdjecentOccupiedSeats >= 4) {
        newLayout[row][column] = "L";
      }
    }
  }

  return newLayout.map((line) => line.join(""));
};

const safelyGetSeat = (
  layout: Array<Array<string>>,
  row: number,
  column: number
): string => {
  if (row < 0 || row > layout.length - 1) return ".";
  if (column < 0 || column > layout[0].length - 1) return ".";

  return layout[row][column];
};

const safelyGetSeatNew = (
  layout: Array<Array<string>>,
  row: number,
  column: number,
  rowMultiplier: number,
  columnMultiplier: number
): string => {
  const newRow = row + rowMultiplier;
  const newColumn = column + columnMultiplier;

  if (newRow < 0 || newRow > layout.length - 1) return ".";
  if (newColumn < 0 || newColumn > layout[0].length - 1) return ".";

  const nextTile = layout[newRow][newColumn];

  if (nextTile == ".") {
    return safelyGetSeatNew(
      layout,
      newRow,
      newColumn,
      rowMultiplier,
      columnMultiplier
    );
  }

  return nextTile;
};

export const seatLayoutNewRules = (layout: Array<string>): Array<string> => {
  const layoutSplit = layout.map((row) => row.split(""));
  let newLayout = JSON.parse(JSON.stringify(layoutSplit));

  for (let row = 0; row < layoutSplit.length; row++) {
    for (let column = 0; column < layoutSplit[0].length; column++) {
      const currentSquare = layoutSplit[row][column];
      let allImmediatelyAdjecentSeats = [
        safelyGetSeatNew(layoutSplit, row, column, -1, 0),
        safelyGetSeatNew(layoutSplit, row, column, -1, -1),
        safelyGetSeatNew(layoutSplit, row, column, 0, -1),
        safelyGetSeatNew(layoutSplit, row, column, 1, -1),
        safelyGetSeatNew(layoutSplit, row, column, 1, 0),
        safelyGetSeatNew(layoutSplit, row, column, 1, 1),
        safelyGetSeatNew(layoutSplit, row, column, 0, 1),
        safelyGetSeatNew(layoutSplit, row, column, -1, 1),
      ];

      const numberOfAdjecentOccupiedSeats = allImmediatelyAdjecentSeats.filter(
        (seat) => seat == "#"
      ).length;

      if (currentSquare == "L" && numberOfAdjecentOccupiedSeats == 0) {
        newLayout[row][column] = "#";
      }

      if (currentSquare == "#" && numberOfAdjecentOccupiedSeats >= 5) {
        newLayout[row][column] = "L";
      }
    }
  }

  return newLayout.map((line) => line.join(""));
};
