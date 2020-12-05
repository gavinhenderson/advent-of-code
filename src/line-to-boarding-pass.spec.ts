import { calculateId, lineToBoardingPass } from "./line-to-boarding-pass";
describe("lineToBoardingPass", () => {
  it("BFFFBBFRRR", () => {
    const result = lineToBoardingPass("BFFFBBFRRR");

    expect(result).toEqual({ row: 70, column: 7, id: 567 });
  });

  it("FFFBBBFRRR", () => {
    const result = lineToBoardingPass("FFFBBBFRRR");

    expect(result).toEqual({ row: 14, column: 7, id: 119 });
  });

  it("BBFFBBFRLL", () => {
    const result = lineToBoardingPass("BBFFBBFRLL");

    expect(result).toEqual({ row: 102, column: 4, id: 820 });
  });
});

describe("calculateId", () => {
  it("row 70 column 7", () => {
    const result = calculateId(70, 7);

    expect(result).toBe(567);
  });

  it("row 14 column 7", () => {
    const result = calculateId(14, 7);

    expect(result).toBe(119);
  });
  it("row 102 column 4", () => {
    const result = calculateId(102, 4);

    expect(result).toBe(820);
  });
});
