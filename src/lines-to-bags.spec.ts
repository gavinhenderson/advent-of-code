import { linesToBags } from "./lines-to-bags";

it("lines-to-bags", () => {
  const lines = [
    "light red bags contain 1 bright white bag, 2 muted yellow bags.",
    "dark orange bags contain 3 bright white bags, 4 muted yellow bags.",
    "bright white bags contain 1 shiny gold bag.",
    "muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.",
    "shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.",
    "dark olive bags contain 3 faded blue bags, 4 dotted black bags.",
    "vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.",
    "faded blue bags contain no other bags.",
    "dotted black bags contain no other bags.",
  ];

  const lightRed: Bag = {
    name: "light red",
    rule: "light red bags contain 1 bright white bag, 2 muted yellow bags.",
  };
  const darkOrange: Bag = {
    name: "dark orange",
    rule: "dark orange bags contain 3 bright white bags, 4 muted yellow bags.",
  };
  const brightWhite: Bag = {
    name: "bright white",
    rule: "bright white bags contain 1 shiny gold bag.",
  };
  const mutedYellow: Bag = {
    name: "muted yellow",
    rule: "muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.",
  };
  const shinyGold: Bag = {
    name: "shiny gold",
    rule: "shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.",
  };
  const darkOlive: Bag = {
    name: "dark olive",
    rule: "dark olive bags contain 3 faded blue bags, 4 dotted black bags.",
  };
  const vibrantPlum: Bag = {
    name: "vibrant plum",
    rule: "vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.",
  };
  const fadedBlue: Bag = {
    name: "faded blue",
    rule: "faded blue bags contain no other bags.",
  };
  const dottedBlack: Bag = {
    name: "dotted black",
    rule: "dotted black bags contain no other bags.",
  };

  lightRed.rules = [
    {
      bag: brightWhite,
      quantity: 1,
    },
    {
      bag: mutedYellow,
      quantity: 2,
    },
  ];

  darkOrange.rules = [
    {
      bag: brightWhite,
      quantity: 3,
    },
    {
      bag: mutedYellow,
      quantity: 4,
    },
  ];

  brightWhite.rules = [{ bag: shinyGold, quantity: 1 }];

  mutedYellow.rules = [
    { bag: shinyGold, quantity: 2 },
    { bag: fadedBlue, quantity: 9 },
  ];

  shinyGold.rules = [
    { bag: darkOlive, quantity: 1 },
    { bag: vibrantPlum, quantity: 2 },
  ];

  darkOlive.rules = [
    { bag: fadedBlue, quantity: 3 },
    { bag: dottedBlack, quantity: 4 },
  ];

  vibrantPlum.rules = [
    { bag: fadedBlue, quantity: 5 },
    { bag: dottedBlack, quantity: 6 },
  ];

  fadedBlue.rules = [];
  dottedBlack.rules = [];

  const expected = [
    lightRed,
    darkOrange,
    brightWhite,
    mutedYellow,
    shinyGold,
    darkOlive,
    vibrantPlum,
    fadedBlue,
    dottedBlack,
  ];
  const result = linesToBags(lines);

  expect(result).toEqual(expected);
});
