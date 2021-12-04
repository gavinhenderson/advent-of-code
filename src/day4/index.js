class Grid {
  constructor(input) {
    this.raw = input;

    this.grid = [];
    this.markGrid = [];
    for (const row of input) {
      const parsedRow = [];
      const markRow = [];
      for (const cell of row.split(" ")) {
        parsedRow.push(parseInt(cell));
        markRow.push(false);
      }

      this.markGrid.push(markRow);
      this.grid.push(parsedRow);
    }
  }

  score() {
    let score = 0;
    for (let i = 0; i < this.grid.length; i++) {
      for (let j = 0; j < this.grid[i].length; j++) {
        if (!this.markGrid[i][j]) {
          score += this.grid[i][j];
        }
      }
    }

    return score;
  }

  isBingo() {
    for (const row of this.markGrid) {
      if (row.every((row) => row)) {
        return true;
      }
    }

    for (let i = 0; i < this.markGrid[0].length; i++) {
      const current = this.markGrid.map((row) => row[i]);

      if (current.every((row) => row)) {
        return true;
      }
    }

    return false;
  }

  call(numberCalled) {
    for (let i = 0; i < this.grid.length; i++) {
      for (let j = 0; j < this.grid[i].length; j++) {
        if (this.grid[i][j] === numberCalled) {
          this.markGrid[i][j] = true;
        }
      }
    }
  }
}

const part1 = (input, grids) => {
  const fullGrids = grids.map((x) => new Grid(x));

  let bingoCalled = false;
  let gridCalled = null;
  let current = 0;

  while (!bingoCalled) {
    fullGrids.forEach((x) => x.call(input[current]));

    gridCalled = fullGrids.find((x) => x.isBingo());

    if (gridCalled) {
      bingoCalled = true;
    }

    current++;
  }

  return gridCalled.score() * input[current - 1];
};

const part2 = (input, grids) => {
  let fullGrids = grids.map((x) => new Grid(x));

  let bingoCalled = false;
  let current = 0;

  while (!bingoCalled) {
    fullGrids.forEach((x) => x.call(input[current]));

    if (fullGrids.length === 1 && fullGrids[0].isBingo()) {
      return fullGrids[0].score() * input[current];
    }

    fullGrids = fullGrids.filter((x) => !x.isBingo());

    current++;
  }
};

module.exports = { part1, part2 };
