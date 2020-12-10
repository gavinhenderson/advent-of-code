import { isThereValidSum } from "./is-there-valid-sum";

it("The only two numbers are a sum of the target", () => {
  const validNumbers = [1, 2];

  const result = isThereValidSum(validNumbers, 3);

  expect(result).toEqual([1, 2]);
});

it("Doesnt use the same number twice", () => {
  const validNumbers = [1, 2];

  const result = isThereValidSum(validNumbers, 2);

  expect(result).toEqual([]);
});

it("Lots of possible solutions, it returns something", () => {
  const validNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const result = isThereValidSum(validNumbers, 10);

  expect(result).not.toEqual([]);
});

it("Works when you want more than two numbers", () => {
  const validNumbers = [1, 2, 3];

  const result = isThereValidSum(validNumbers, 6, 3);

  expect(result).toEqual([1, 2, 3]);
});
