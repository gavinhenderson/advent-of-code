import { linesToGroups } from "./lines-to-groups";

it("first example", () => {
  const lines = [
    "abc",
    "",
    "a",
    "b",
    "c",
    "",
    "ab",
    "ac",
    "",
    "a",
    "a",
    "a",
    "a",
    "",
    "b",
  ];

  const expected = [
    {
      people: ["abc"],
      uniqueQuestions: ["a", "b", "c"],
      commonQuestions: ["a", "b", "c"],
    },
    {
      people: ["a", "b", "c"],
      uniqueQuestions: ["a", "b", "c"],
      commonQuestions: [],
    },
    {
      people: ["ab", "ac"],
      uniqueQuestions: ["a", "b", "c"],
      commonQuestions: ["a"],
    },
    {
      people: ["a", "a", "a", "a"],
      uniqueQuestions: ["a"],
      commonQuestions: ["a"],
    },
    {
      people: ["b"],
      uniqueQuestions: ["b"],
      commonQuestions: ["b"],
    },
  ];

  const result = linesToGroups(lines);

  expect(result).toEqual(expected);
});
