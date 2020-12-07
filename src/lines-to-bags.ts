export const linesToBags = (lines: Array<string>): Array<Bag> => {
  const bagByName = {};

  const bags: Array<Bag> = lines.map((line) => {
    const name = line.split(" ").slice(0, 2).join(" ");
    const currentBag = {
      name: line.split(" ").slice(0, 2).join(" "),
      rule: line,
      rules: [],
    };
    bagByName[name] = currentBag;

    return currentBag;
  });

  for (const currentBag of bags) {
    if (currentBag.rule.includes("no other bags")) {
      continue;
    }

    const rules = currentBag.rule
      .split("contain")[1]
      .split(",")
      .map((rule) => rule.trim());

    for (const rule of rules) {
      const [quanityAsString, bagWordOne, bagWordTwo] = rule.split(" ");
      const bagName = [bagWordOne, bagWordTwo].join(" ");

      currentBag.rules.push({
        bag: bagByName[bagName],
        quantity: parseInt(quanityAsString),
      });
    }
  }

  return bags;
};
