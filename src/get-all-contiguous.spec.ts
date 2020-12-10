import { getAllContiguous } from "./get-all-contiguous";

it("gets all contiguous groups", () => {
  const list = [1, 2, 3];

  const expected = [[1], [1, 2], [1, 2, 3], [2], [2, 3], [3]];

  const result = getAllContiguous(list);

  expect(expected).toEqual(result);
});
