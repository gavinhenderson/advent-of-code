import { seatLayout, seatLayoutNewRules } from "./seat-layout";

describe("part one", () => {
  it("step one", () => {
    const input = [
      "L.LL.LL.LL",
      "LLLLLLL.LL",
      "L.L.L..L..",
      "LLLL.LL.LL",
      "L.LL.LL.LL",
      "L.LLLLL.LL",
      "..L.L.....",
      "LLLLLLLLLL",
      "L.LLLLLL.L",
      "L.LLLLL.LL",
    ];

    const output = [
      "#.##.##.##",
      "#######.##",
      "#.#.#..#..",
      "####.##.##",
      "#.##.##.##",
      "#.#####.##",
      "..#.#.....",
      "##########",
      "#.######.#",
      "#.#####.##",
    ];

    const result = seatLayout(input);

    expect(result).toEqual(output);
  });

  it("step two", () => {
    const input = [
      "#.##.##.##",
      "#######.##",
      "#.#.#..#..",
      "####.##.##",
      "#.##.##.##",
      "#.#####.##",
      "..#.#.....",
      "##########",
      "#.######.#",
      "#.#####.##",
    ];

    const output = [
      "#.LL.L#.##",
      "#LLLLLL.L#",
      "L.L.L..L..",
      "#LLL.LL.L#",
      "#.LL.LL.LL",
      "#.LLLL#.##",
      "..L.L.....",
      "#LLLLLLLL#",
      "#.LLLLLL.L",
      "#.#LLLL.##",
    ];

    const result = seatLayout(input);

    expect(result).toEqual(output);
  });

  it("step three", () => {
    const input = [
      "#.LL.L#.##",
      "#LLLLLL.L#",
      "L.L.L..L..",
      "#LLL.LL.L#",
      "#.LL.LL.LL",
      "#.LLLL#.##",
      "..L.L.....",
      "#LLLLLLLL#",
      "#.LLLLLL.L",
      "#.#LLLL.##",
    ];

    const output = [
      "#.##.L#.##",
      "#L###LL.L#",
      "L.#.#..#..",
      "#L##.##.L#",
      "#.##.LL.LL",
      "#.###L#.##",
      "..#.#.....",
      "#L######L#",
      "#.LL###L.L",
      "#.#L###.##",
    ];

    const result = seatLayout(input);

    expect(result).toEqual(output);
  });

  it("step four", () => {
    const input = [
      "#.##.L#.##",
      "#L###LL.L#",
      "L.#.#..#..",
      "#L##.##.L#",
      "#.##.LL.LL",
      "#.###L#.##",
      "..#.#.....",
      "#L######L#",
      "#.LL###L.L",
      "#.#L###.##",
    ];

    const output = [
      "#.#L.L#.##",
      "#LLL#LL.L#",
      "L.L.L..#..",
      "#LLL.##.L#",
      "#.LL.LL.LL",
      "#.LL#L#.##",
      "..L.L.....",
      "#L#LLLL#L#",
      "#.LLLLLL.L",
      "#.#L#L#.##",
    ];

    const result = seatLayout(input);

    expect(result).toEqual(output);
  });

  it("step five", () => {
    const input = [
      "#.#L.L#.##",
      "#LLL#LL.L#",
      "L.L.L..#..",
      "#LLL.##.L#",
      "#.LL.LL.LL",
      "#.LL#L#.##",
      "..L.L.....",
      "#L#LLLL#L#",
      "#.LLLLLL.L",
      "#.#L#L#.##",
    ];

    const output = [
      "#.#L.L#.##",
      "#LLL#LL.L#",
      "L.#.L..#..",
      "#L##.##.L#",
      "#.#L.LL.LL",
      "#.#L#L#.##",
      "..L.L.....",
      "#L#L##L#L#",
      "#.LLLLLL.L",
      "#.#L#L#.##",
    ];

    const result = seatLayout(input);

    expect(result).toEqual(output);
  });
});

describe("part two", () => {
  it("step one", () => {
    const input = [
      "L.LL.LL.LL",
      "LLLLLLL.LL",
      "L.L.L..L..",
      "LLLL.LL.LL",
      "L.LL.LL.LL",
      "L.LLLLL.LL",
      "..L.L.....",
      "LLLLLLLLLL",
      "L.LLLLLL.L",
      "L.LLLLL.LL",
    ];

    const output = [
      "#.##.##.##",
      "#######.##",
      "#.#.#..#..",
      "####.##.##",
      "#.##.##.##",
      "#.#####.##",
      "..#.#.....",
      "##########",
      "#.######.#",
      "#.#####.##",
    ];

    const result = seatLayoutNewRules(input);

    expect(result).toEqual(output);
  });

  it("step two", () => {
    const input = [
      "#.##.##.##",
      "#######.##",
      "#.#.#..#..",
      "####.##.##",
      "#.##.##.##",
      "#.#####.##",
      "..#.#.....",
      "##########",
      "#.######.#",
      "#.#####.##",
    ];

    const output = [
      "#.LL.LL.L#",
      "#LLLLLL.LL",
      "L.L.L..L..",
      "LLLL.LL.LL",
      "L.LL.LL.LL",
      "L.LLLLL.LL",
      "..L.L.....",
      "LLLLLLLLL#",
      "#.LLLLLL.L",
      "#.LLLLL.L#",
    ];

    const result = seatLayoutNewRules(input);

    expect(result).toEqual(output);
  });

  it("step three", () => {
    const input = [
      "#.LL.LL.L#",
      "#LLLLLL.LL",
      "L.L.L..L..",
      "LLLL.LL.LL",
      "L.LL.LL.LL",
      "L.LLLLL.LL",
      "..L.L.....",
      "LLLLLLLLL#",
      "#.LLLLLL.L",
      "#.LLLLL.L#",
    ];

    const output = [
      "#.L#.##.L#",
      "#L#####.LL",
      "L.#.#..#..",
      "##L#.##.##",
      "#.##.#L.##",
      "#.#####.#L",
      "..#.#.....",
      "LLL####LL#",
      "#.L#####.L",
      "#.L####.L#",
    ];

    const result = seatLayoutNewRules(input);

    expect(result).toEqual(output);
  });
});
