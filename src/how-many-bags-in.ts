export const howManyBagsIn = (bags: Array<Bag>, bagName: string): number => {
  const bagByName = {};

  for (const bag of bags) {
    bagByName[bag.name] = bag;
  }

  const targetBag = bagByName[bagName];

  return howManyIn(targetBag) - 1;
};

const howManyIn = (bag: Bag): number => {
  let count = 1;

  for (const rule of bag.rules) {
    count += rule.quantity * howManyIn(rule.bag);
  }

  return count;
};
